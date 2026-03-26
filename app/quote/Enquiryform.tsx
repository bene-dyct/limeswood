"use client";

import { useState, useRef, FormEvent } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MdCheckCircle, MdSend } from "react-icons/md";
import ReCAPTCHA from "react-google-recaptcha";
import SectionLabel from "../components/SectionLabel";
import MapLocation from "../components/MapLocation";

const SERVICES = [
  "Automation Services",
  "Electrical Engineering Services",
  "Instrumentation & Control Engineering Services",
  "Manpower, Management and Development",
  "Mechanical Engineering Services",
  "General Enquiry",
];

interface FormState {
  firstName: string;
  lastName: string;
  companyName: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

const EMPTY_FORM: FormState = {
  firstName: "",
  lastName: "",
  companyName: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

function InputField({
  label,
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
}: {
  label: string;
  id: keyof FormState;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (id: keyof FormState, val: string) => void;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="font-body font-semibold text-[#357c8f] tracking-wide"
      >
        {label}
        {required && <span className="text-[#229bb3] ml-0.5">*</span>}
      </label>

      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(id, e.target.value)}
        required={required}
        className="h-11 px-4 rounded-lg border border-[#229bb3]/20 bg-white text-[#436574]
        placeholder:text-[#436574]/40 outline-none transition-all duration-200
        focus:border-[#229bb3] focus:ring-2 focus:ring-[#229bb3]/15
        hover:border-[#229bb3]/50"
      />
    </div>
  );
}

export default function EnquiryForm() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [serverMessage, setServerMessage] = useState("");

  const formRef = useRef<HTMLFormElement>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (id: keyof FormState, val: string) => {
    setForm((prev) => ({ ...prev, [id]: val }));
    if (status === "error") setStatus("idle");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus("loading");
    setServerMessage("");

    const token = recaptchaRef.current?.getValue();

    if (!token) {
      setServerMessage("Please verify that you are not a robot.");
      setStatus("error");
      return;
    }

    try {
      const payload = {
        ...form,
        website: "", // honeypot
        token,
      };

      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setServerMessage(data.message || "Something went wrong.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm(EMPTY_FORM);
      recaptchaRef.current?.reset();

    } catch {
      setServerMessage(
        "Could not reach the server. Please check your connection."
      );
      setStatus("error");
    }
  };

  return (
    <>
      <AnimatePresence>
        {status === "success" && (
          <motion.div
            key="success-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-[9999] flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center bg-white p-8 rounded-2xl gap-4 w-full lg:w-[80%] shadow-2xl"
            >
              <MdCheckCircle className="text-5xl text-[#229bb3]" />

              <h3 className="font-display font-bold text-[26px] text-[#357c8f] text-center">
                Enquiry Received
              </h3>

              <p className="text-[#436574] text-center text-sm leading-relaxed">
                Thank you for contacting Limeswood International. Our engineering
                team will review your enquiry and respond within one business day.
              </p>

              <button
                onClick={() => setStatus("idle")}
                className="bg-[#229bb3] text-white px-8 py-3 rounded-lg font-semibold
                hover:bg-[#1a7d91] active:scale-95 transition-all duration-200"
              >
                Submit Another Enquiry
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="px-[6vw] pb-24 bg-white">
        <div className="w-full mx-auto grid grid-cols-1 gap-12 lg:gap-16 items-start">
          <div>

            <SectionLabel>Project Enquiry Form</SectionLabel>

            <h2 className="font-display font-bold text-[clamp(22px,3.5vw,44px)] text-[#357c8f] mb-2">
              Tell Us About Your Requirements
            </h2>

            <p className="font-body text-[#436574] mb-8 max-w-xl">
              Please complete the form below. The more detail you provide, the
              more accurate our response will be.
            </p>

            <motion.form
              ref={formRef}
              onSubmit={handleSubmit}
              noValidate
              className="space-y-5"
            >

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <InputField
                  label="First Name"
                  id="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                />
                <InputField
                  label="Last Name"
                  id="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <InputField
                  label="Company Name"
                  id="companyName"
                  value={form.companyName}
                  onChange={handleChange}
                />
                <InputField
                  label="Phone Number"
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <InputField
                label="Email Address"
                id="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
              />

              <div className="flex flex-col gap-1.5">
                <label className="font-semibold text-[#357c8f]">
                  Service of Interest
                </label>

                <select
                  value={form.service}
                  onChange={(e) => handleChange("service", e.target.value)}
                  required
                  className="h-11 px-4 rounded-lg border border-[#229bb3]/20"
                >
                  <option value="">Select a service</option>
                  {SERVICES.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>

              <textarea
                rows={5}
                required
                placeholder="Briefly describe your project"
                value={form.message}
                onChange={(e) => handleChange("message", e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-[#229bb3]/20"
              />

              {/* Honeypot */}
              <input
                type="text"
                name="website"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Google reCAPTCHA */}
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                ref={recaptchaRef}
              />

              {status === "error" && (
                <div className="text-red-600 text-sm">{serverMessage}</div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center gap-2 h-12 px-10
                rounded-lg bg-[#229bb3] text-white font-bold
                hover:bg-[#1a7d91]"
              >
                {status === "loading" ? "Sending..." : "Send Enquiry"}
                <MdSend />
              </button>

              <p className="text-[#436574]/60 text-sm"> By submitting this form you agree to our{" "} <Link href="/privacy" className="underline hover:text-[#229bb3] transition-colors" > Privacy Policy </Link> . Your information is never shared with third parties. </p>

            </motion.form>

          </div>
        </div>

        <section className="w-full mx-auto mt-24">
          <h2 className="font-display font-bold text-[clamp(28px,3.5vw,44px)] text-[#357c8f] mb-2">
            Visit Our Office
          </h2>

          <MapLocation />
        </section>

      </section>
    </>
  );
}