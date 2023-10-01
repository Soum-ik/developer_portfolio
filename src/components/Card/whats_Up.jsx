import React from "react";
import { BsWhatsapp } from "react-icons/bs";

const WhatsAppLink = () => {
  const countryCode = "+880"; // Country code for Bangladesh
  const phoneNumber = "1754759169"; // Replace with your Grameenphone phone number
  const message = "Hello, this is a WhatsApp message from my React app!"; // Replace with your desired message

  const whatsappUrl = `https://wa.me/${countryCode}${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex gap-3 items-center justify-end ">
      Open WhatsApp 
      <BsWhatsapp size={20} />

    </a>
  );
};

export default WhatsAppLink;
