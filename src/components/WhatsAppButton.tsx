import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const WhatsAppButton: React.FC = () => {
  const { isRTL } = useLanguage();

  const whatsappNumber = "+966500000000"; // ضع رقم واتساب الفعلي هنا
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    isRTL
      ? 'مرحبًا، أريد الاستفسار عن خدماتكم للنجف والثريات'
      : 'Hello, I want to inquire about your chandelier services'
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 z-50 bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center transform hover:scale-110 hover:-translate-y-1 ${isRTL ? 'right-6' : 'left-6'
        }`}
      aria-label={isRTL ? 'تواصل معنا عبر واتساب' : 'Contact us via WhatsApp'}
      title={isRTL ? 'تواصل معنا عبر واتساب' : 'Contact us via WhatsApp'}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
      <span className="sr-only">
        {isRTL ? 'تواصل معنا على واتساب' : 'Contact us on WhatsApp'}
      </span>
    </a>
  );
};

export default WhatsAppButton;