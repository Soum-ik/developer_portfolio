import React from "react";

const WhatsAppLink = () => {
  const countryCode = "+880"; // Country code for Bangladesh
  const phoneNumber = "1754759169"; // Replace with your Grameenphone phone number
  const message = "Hello, this is a WhatsApp message from my React app!"; // Replace with your desired message

  const whatsappUrl = `https://wa.me/${countryCode}${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
      Open WhatsApp
    </a>
  );
};

export default WhatsAppLink;
