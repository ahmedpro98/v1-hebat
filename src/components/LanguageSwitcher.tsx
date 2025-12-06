import React, { useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/ui/button';

interface LanguageSwitcherProps {
  variant?: 'standard' | 'modern' | 'minimal';
  showIcon?: boolean;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  variant = 'standard',
  showIcon = true
}) => {
  const {
    language,
    setLanguage,
    isLanguageChanging,
    transitionState
  } = useLanguage();

  const buttonRef = useRef<HTMLButtonElement>(null);

  // Ripple effect for modern variant
  const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (variant !== 'modern' || isLanguageChanging) return;

    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    // Get button position
    const rect = button.getBoundingClientRect();

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - rect.left - radius}px`;
    circle.style.top = `${event.clientY - rect.top - radius}px`;
    circle.classList.add('ripple');

    // Remove existing ripples
    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);

    // Clean up after animation
    setTimeout(() => {
      if (circle && circle.parentNode === button) {
        button.removeChild(circle);
      }
    }, 600);
  };

  const toggleLanguage = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isLanguageChanging) return;

    // Add ripple effect for modern variant
    if (variant === 'modern') {
      createRipple(event);
    }

    // Change language
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  // Handle button animation on language change
  useEffect(() => {
    if (transitionState === 'start' && buttonRef.current) {
      buttonRef.current.classList.add('btn-transitioning');

      const resetTimeout = setTimeout(() => {
        if (buttonRef.current) {
          buttonRef.current.classList.remove('btn-transitioning');
        }
      }, 800);

      return () => clearTimeout(resetTimeout);
    }
  }, [transitionState]);

  const buttonText = language === 'en' ? 'العربية' : 'English';
  const ariaLabel = language === 'en' ? 'Switch to Arabic language' : 'التبديل إلى اللغة الإنجليزية';

  // Icons for language switcher
  const renderIcon = () => {
    if (!showIcon) return null;

    return (
      <span className="language-icon mr-2">
        {language === 'en' ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 12h20M12 2v20" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 12h20M12 2v20" />
          </svg>
        )}
      </span>
    );
  };

  // Different button variants
  const getButtonClasses = () => {
    const baseClasses = 'transition-all duration-300';

    switch (variant) {
      case 'modern':
        return `${baseClasses} relative overflow-hidden bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-white py-2 px-4 rounded-lg shadow-md transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-opacity-50`;

      case 'minimal':
        return `${baseClasses} bg-transparent text-gold hover:underline focus:outline-none`;

      default: // standard
        return `${baseClasses} bg-transparent border-gold text-gold hover:bg-gold hover:text-white shadow-sm text-sm md:text-base py-1.5 px-3 md:px-4 rounded-md`;
    }
  };

  return (
    <Button
      ref={buttonRef}
      onClick={toggleLanguage}
      disabled={isLanguageChanging}
      className={`${getButtonClasses()} ${isLanguageChanging ? 'opacity-70 cursor-not-allowed' : ''}`}
      aria-label={ariaLabel}
      style={{ fontFamily: language === 'en' ? 'Cairo, sans-serif' : 'Roboto, sans-serif' }}
    >
      {showIcon && renderIcon()}
      {isLanguageChanging ? '...' : buttonText}

      {/* Loading indicator during transition */}
      {isLanguageChanging && (
        <span className="loading-indicator ml-3">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </span>
      )}
    </Button>
  );
};

export default LanguageSwitcher;