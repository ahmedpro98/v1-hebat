import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { useIsMobile } from '../../hooks/use-mobile';
import LazyImage from './../LazyImage';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Sample featured collection data
const collectionItems = [
  {
    id: 1,
    titleAr: "نجفة شلالية",
    titleEn: "Waterfall Chandelier",
    price: "54,500 SAR",
    image: "/gallery/Waterfall2.jpg",
    hoverImage: "/gallery/Waterfall1.jpg"
  },
  {
    id: 2,
    titleAr: "نجفة حلقية",
    titleEn: "Modern Ring Chandelier",
    price: "18,750 SAR",
    image: "/gallery/2-ring.jpeg",
    hoverImage: "/gallery/1-ring.jpeg"
  },
  {
    id: 3,
    titleAr: "فانوس اسلامي فاخر",
    titleEn: "Islamic Lanterns",
    price: "1999 SAR",
    image: "/gallery/Lantern-left.jpg",
    hoverImage: "/gallery/Lantern-right.jpg"
  },
  {
    id: 4,
    titleAr: "هلال جامع",
    titleEn: "Hilal Mosque",
    price: "7,800 SAR",
    image: "/gallery/halal-Mosque.jpg",
    hoverImage: "/gallery/hover-hala.jpg"
  }
];

const FeaturedCollection: React.FC = () => {
  const { isRTL } = useLanguage();
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  // Handle touch events for swiping on mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (!isTransitioning) {
      if (isLeftSwipe) {
        nextSlide();
      }
      if (isRightSwipe) {
        prevSlide();
      }
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  // Mobile slide functionality
  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((current) => (current + 1) % collectionItems.length);
    setTimeout(() => setIsTransitioning(false), 500); // Match the transition duration
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((current) => (current - 1 + collectionItems.length) % collectionItems.length);
    setTimeout(() => setIsTransitioning(false), 500); // Match the transition duration
  };

  // Auto slide for mobile
  useEffect(() => {
    if (!isMobile) return;

    autoplayRef.current = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [isMobile, isTransitioning]);

  return (
    <section className="py-20 md:py-24 mt-12 mb-8 ">
      <div className="container-custom mx-auto">
        <div className={`text-center mb-10 md:mb-16 ${isRTL ? 'rtl' : ''}`}>
          <h2 className={`text-3xl md:text-4xl font-bold text-charcoal mb-3 md:mb-4`}>
            {isRTL ? 'تشكيلة أعمالنا' : 'Our Collection'}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {isRTL
              ? 'تصفح مجموعتنا المميزة من الثريات والإضاءات الفاخرة المناسبة لكل الأذواق والديكورات'
              : 'Browse our distinguished collection of chandeliers and luxury lighting suitable for all tastes and decorations'}
          </p>
        </div>

        {isMobile ? (
          <div className="px-4 relative">
            {/* Improved Mobile Carousel */}
            <div
              className="relative overflow-hidden rounded-xl shadow-xl"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex transition-transform duration-500 ease-out h-[420px]"
                style={{ transform: `translateX(${isRTL ? activeIndex * 100 : -activeIndex * 100}%)` }}
              >
                {collectionItems.map((item, index) => (
                  <div key={item.id} className="w-full flex-shrink-0">
                    <div className="relative h-[300px] overflow-hidden">
                      <LazyImage
                        src={item.image}
                        alt={isRTL ? item.titleAr : item.titleEn}
                        className="w-full h-full object-cover"
                      />
                      {/* Elegant pattern overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>

                    <div className={`bg-white p-5 h-[120px] flex flex-col justify-center ${isRTL ? 'text-right' : 'text-left'}`}>
                      <h3 className="font-bold text-xl mb-2 text-charcoal">
                        {isRTL ? item.titleAr : item.titleEn}
                      </h3>
                      <p className="text-gold font-semibold">{item.price}</p>
                      <div className="mt-3">
                        <Link
                          to="/gallery"
                          className="text-sm text-gold hover:text-gold-dark underline-animation"
                        >
                          {isRTL ? 'عرض التفاصيل' : 'View Details'}
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Controls - Positioned outside the carousel for better UX */}
              <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-between px-3 pointer-events-none">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg text-charcoal pointer-events-auto opacity-80 hover:opacity-100 transition-opacity"
                  aria-label={isRTL ? "التالي" : "Previous"}
                >
                  {isRTL ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg text-charcoal pointer-events-auto opacity-80 hover:opacity-100 transition-opacity"
                  aria-label={isRTL ? "السابق" : "Next"}
                >
                  {isRTL ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
                </button>
              </div>
            </div>

            {/* Elegant Indicators */}
            <div className="flex justify-center mt-5 gap-2">
              {collectionItems.map((_, index) => (
                <button
                  key={`indicator-${index}`}
                  onClick={() => {
                    if (!isTransitioning) {
                      setIsTransitioning(true);
                      setActiveIndex(index);
                      setTimeout(() => setIsTransitioning(false), 500);
                    }
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === activeIndex
                    ? 'bg-gold w-5' // Make active indicator wider
                    : 'bg-gray-300'
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
            {collectionItems.map((item) => (
              <div key={item.id} className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <LazyImage
                    src={item.image}
                    alt={isRTL ? item.titleAr : item.titleEn}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className={`p-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                  <h3 className="font-bold text-lg mb-1">
                    {isRTL ? item.titleAr : item.titleEn}
                  </h3>
                  <p className="text-gold font-semibold">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-10">
          <Link
            to="/gallery"
            className="inline-block bg-transparent border-2 border-gold text-gold px-5 py-3 rounded-md hover:bg-gold hover:text-white transition-colors duration-300"
          >
            {isRTL ? 'عرض كافة التشكيلات' : 'View All Collections'}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
