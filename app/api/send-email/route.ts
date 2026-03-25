export const runtime = "nodejs";

import { createTransport } from "nodemailer";
import { NextResponse } from "next/server";

// ─── Rate-limit store ─────────────────────────────────────────────────────────
const rateLimitMap = new Map<string, number[]>();

const RATE_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 5;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const requests = rateLimitMap.get(ip) || [];

  const validRequests = requests.filter((t) => now - t < RATE_WINDOW_MS);

  if (validRequests.length >= MAX_REQUESTS) {
    return false;
  }

  validRequests.push(now);
  rateLimitMap.set(ip, validRequests);

  return true;
}

// ─── Verify Google reCAPTCHA ──────────────────────────────────────────────────
async function verifyCaptcha(token: string) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;

  if (!secret) return false;

  const params = new URLSearchParams();
  params.append("secret", secret);
  params.append("response", token);

  const response = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      body: params,
    }
  );

  const data = await response.json();

  return data.success === true;
}

// ─── Route handler ────────────────────────────────────────────────────────────

export async function POST(req: Request): Promise<NextResponse> {
  try {

    // ── Rate limiting ──────────────────────────────────────────────────────────
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, message: "Too many requests. Please wait before trying again." },
        { status: 429 }
      );
    }

    // ── Parse body ─────────────────────────────────────────────────────────────
    let body: Record<string, unknown>;

    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { success: false, message: "Invalid request body." },
        { status: 400 }
      );
    }

    const {
      firstName,
      lastName,
      companyName,
      phone,
      email,
      service,
      message,
      website, // honeypot
      token,   // recaptcha token
    } = body as Record<string, string>;

    // ── Honeypot protection ────────────────────────────────────────────────────
    if (website) {
      return NextResponse.json(
        { success: false, message: "Bot submission detected." },
        { status: 400 }
      );
    }

    // ── reCAPTCHA verification ─────────────────────────────────────────────────
    if (!token) {
      return NextResponse.json(
        { success: false, message: "Captcha verification required." },
        { status: 400 }
      );
    }

    const captchaValid = await verifyCaptcha(token);

    if (!captchaValid) {
      return NextResponse.json(
        { success: false, message: "Captcha verification failed." },
        { status: 400 }
      );
    }

    // ── Field validation ───────────────────────────────────────────────────────
    if (!firstName || !lastName || !email || !service || !message) {
      return NextResponse.json(
        { success: false, message: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // ── SMTP environment check ─────────────────────────────────────────────────
    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpPort = Number(process.env.SMTP_PORT) || 465;
    const smtpTo = process.env.SMTP_TO || smtpUser;

    if (!smtpHost || !smtpUser || !smtpPass) {
      console.error("[send-email] SMTP env vars missing");

      return NextResponse.json(
        {
          success: false,
          message: "Mail service is not configured. Please contact us directly.",
        },
        { status: 500 }
      );
    }

    const fullName = `${firstName} ${lastName}`.trim();

    // ── Create transporter ─────────────────────────────────────────────────────
    const transporter = createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass },
      tls: {
        rejectUnauthorized: false,
      },
      connectionTimeout: 3000,
      greetingTimeout: 3000,
      socketTimeout: 5000,
    });

    // ── Email 1: internal notification ─────────────────────────────────────────
    await Promise.all([
      transporter.sendMail({
      from: `"Limeswood Website" <${smtpUser}>`,
      to: smtpTo,
      replyTo: email,
      subject: `New Enquiry from ${fullName}`,
      html: `
        <body style="font-family:Arial,sans-serif;color:#333;max-width:600px;margin:0 auto;"> <h2 style="color:#229bb3;border-bottom:2px solid #229bb3;padding-bottom:8px;"> New Website Enquiry </h2> <table style="width:100%;border-collapse:collapse;"> <tr> <td style="padding:6px 0;font-weight:bold;width:160px;">Name</td> <td>${fullName}</td> </tr> <tr> <td style="padding:6px 0;font-weight:bold;">Email</td> <td><a href="mailto:${email}">${email}</a></td> </tr> <tr> <td style="padding:6px 0;font-weight:bold;">Company</td> <td>${companyName || "N/A"}</td> </tr> <tr> <td style="padding:6px 0;font-weight:bold;">Phone</td> <td>${phone || "N/A"}</td> </tr> <tr> <td style="padding:6px 0;font-weight:bold;">Service</td> <td>${service}</td> </tr> </table> <h3 style="margin-top:24px;color:#357c8f;">Project Description</h3> <p style="background:#f0f4f8;padding:16px;border-left:4px solid #229bb3; border-radius:4px;white-space:pre-wrap;">${message}</p> <p style="color:#888;font-size:12px;margin-top:32px;"> Sent via the Limeswood International website enquiry form. </p> </body>
      `,
    }),
    // ── Email 2: auto reply ────────────────────────────────────────────────────
    transporter.sendMail({
      from: `"Limeswood International" <${smtpUser}>`,
      to: email,
      replyTo: smtpTo,
      subject: "We have received your enquiry — Limeswood International",
      text: `Dear ${fullName},

Thank you for your enquiry regarding ${service}.
Our engineering team will respond within one business day.

Best regards,
Limeswood International`,
html: `
<body style="font-family:Arial,sans-serif;color:#333;max-width:600px;margin:0 auto;"> <h2 style="color:#229bb3;border-bottom:2px solid #229bb3;padding-bottom:8px;"> Thank you for contacting Limeswood International </h2> <p>Dear ${fullName},</p> <p> We have received your enquiry regarding <strong>${service}</strong>. A member of our engineering team will review your message and respond within <strong>one business day</strong>. </p> <h3 style="color:#357c8f;">Your message</h3> <p style="background:#f0f4f8;padding:16px;border-left:4px solid #229bb3; border-radius:4px;white-space:pre-wrap;">${message}</p> <hr style="border:none;border-top:1px solid #e0e0e0;margin:32px 0;" /> <p style="color:#229bb3;font-weight:bold;">Limeswood International</p> <p style="color:#888;font-size:12px;"> This is an automated confirmation. Please do not reply to this email directly. For urgent matters contact us at <a href="mailto:${smtpTo}">${smtpTo}</a>. </p> </body>
`
    })
    ]);

    return NextResponse.json({
      success: true,
      message: "Your enquiry has been sent successfully.",
    });

  } catch (error) {
    console.error("[send-email] Unhandled error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}