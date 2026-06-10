import React from 'react';
import { MessageSquare } from 'lucide-react';

const WhatsAppButton = () => {
  // Format standard UK number: 020 8574 1700 -> 442085741700
  const whatsappUrl = "https://wa.me/442085741700";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageSquare size={24} className="fill-white" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 ease-in-out text-sm font-semibold tracking-wider uppercase font-automobile">
        WhatsApp Us
      </span>
    </a>
  );
};

export default WhatsAppButton;
