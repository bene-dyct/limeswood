"use client";

import { FaWhatsapp } from "react-icons/fa";

const PHONE_NUMBER = "2348012345678"; // replace with your number without + or spaces
const TEMPLATE_MESSAGE =
  "Hello Limeswood International, I would like to make an inquiry about your engineering services.";

const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
    TEMPLATE_MESSAGE
  )}`;

export default function WhatsAppBubble() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="whatsapp-bubble"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
}
