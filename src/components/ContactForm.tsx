import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useToast } from '../hooks/use-toast';

const ContactForm: React.FC = () => {
  const { isRTL } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: isRTL ? 'تم إرسال الرسالة بنجاح' : 'Message Sent Successfully',
        description: isRTL ? 'سنتواصل معك قريبًا' : 'We will contact you soon',
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      setLoading(false);
    }, 1000);
  };

  const formDirection = isRTL ? 'rtl text-right' : 'ltr text-left';

  return (
    <form onSubmit={handleSubmit} className={`w-full max-w-xl mx-auto ${formDirection}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-charcoal mb-2">
          {isRTL ? 'الاسم' : 'Name'}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded contact-form-custom focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
          required
          dir={isRTL ? 'rtl' : 'ltr'}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-charcoal mb-2">
          {isRTL ? 'البريد الإلكتروني' : 'Email'}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
          required
          dir={isRTL ? 'rtl' : 'ltr'}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block text-charcoal mb-2">
          {isRTL ? 'رقم الهاتف' : 'Phone'}
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
          required
          dir={isRTL ? 'rtl' : 'ltr'}
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-charcoal mb-2">
          {isRTL ? 'رسالتك' : 'Message'}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
          required
          dir={isRTL ? 'rtl' : 'ltr'}
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="bg-gold text-white py-3 px-6 rounded hover:bg-gold-dark transition-colors duration-300 w-full"
      >
        {loading ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {isRTL ? 'جارِ الإرسال...' : 'Sending...'}
          </span>
        ) : (
          isRTL ? 'إرسال' : 'Submit'
        )}
      </button>
    </form>
  );
};

export default ContactForm;