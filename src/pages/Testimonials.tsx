import React, { useEffect, useCallback, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import LazyImage from '../components/LazyImage';
import ScrollObserver from '../components/home-index/ScrollObserver';
import VideoPlayer from '../components/VideoPlayer';
import {
  Card,
  CardContent
} from "../components/ui/card";
import { AspectRatio } from '../components/ui/aspect-ratio';
import { useIsMobile } from '../hooks/use-mobile';
import {
  Quote,
  Star,
  Users,
  Award,
  TrendingUp
} from 'lucide-react';

const Testimonials = () => {
  const { isRTL } = useLanguage();
  const isMobile = useIsMobile();

  // Use useCallback to prevent unnecessary re-renders
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    // Use requestAnimationFrame to prevent blocking the main thread
    requestAnimationFrame(scrollToTop);
  }, [scrollToTop]);

  // Memoize testimonials data to prevent recreation on every render
  const testimonials = useMemo(() => [
    {
      name: isRTL ? 'محمد الغامدي' : 'Mohammed Al-Ghamdi',
      role: isRTL ? 'مالك القصر الملكي' : 'Royal Palace Owner',
      content: isRTL
        ? 'الثريات التي وفرتها الشركة أضافت لمسة من الفخامة والأناقة إلى قصرنا. جودة المنتجات والتركيب الاحترافي فاقت توقعاتنا.'
        : 'The chandeliers provided by the company added a touch of luxury and elegance to our palace. The quality of the products and professional installation exceeded our expectations.',
      image: "/Clients/cl1.webp",
      rating: 5
    },
    {
      name: isRTL ? 'سارة العتيبي' : 'Sarah Al-Otaibi',
      role: isRTL ? 'مديرة تصميم فندق الرياض' : 'Design Manager at Riyadh Hotel',
      content: isRTL
        ? 'تعاملنا معهم في مشروع تجديد الفندق، وكانت تجربة رائعة. الاهتمام بالتفاصيل والمهنية العالية جعلت المشروع يسير بسلاسة تامة.'
        : 'We worked with them on our hotel renovation project, and it was an amazing experience. The attention to detail and high professionalism made the project run very smoothly.',
      image: "/Clients/cl2.jpg",
      rating: 5
    },
    {
      name: isRTL ? 'فهد السعدي' : 'Fahad Al-Saadi',
      role: isRTL ? 'مالك مجمع تجاري' : 'Commercial Complex Owner',
      content: isRTL
        ? 'اختيار التصاميم المناسبة وتنفيذها بهذه الدقة ساهم في خلق أجواء استثنائية في المجمع. أنصح بشدة بالتعامل معهم.'
        : 'The selection of appropriate designs and their implementation with such precision contributed to creating an exceptional atmosphere in the complex. I highly recommend working with them.',
      image: "/Clients/cl3.jpg",
      rating: 5
    }
  ], [isRTL]);

  // Memoize stats data
  const stats = useMemo(() => [
    {
      value: '500+',
      label: isRTL ? 'مشروع مكتمل' : 'Completed Projects',
      icon: Award,
      color: 'text-blue-400'
    },
    {
      value: '95%',
      label: isRTL ? 'عملاء راضون' : 'Satisfied Clients',
      icon: Users,
      color: 'text-green-400'
    },
    {
      value: '20+',
      label: isRTL ? 'سنوات خبرة' : 'Years of Experience',
      icon: TrendingUp,
      color: 'text-purple-400'
    },
    {
      value: '50+',
      label: isRTL ? 'تصميم حصري' : 'Exclusive Designs',
      icon: Star,
      color: 'text-yellow-400'
    }
  ], [isRTL]);

  const renderStars = useCallback((rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={`${i < rating ? 'text-gold fill-current' : 'text-gray-300'}`}
      />
    ));
  }, []);

  return (
    <div className="pt-16">
      {/* Header Section - Reduced padding for faster loading */}
      <section className="bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal/90 text-white py-12 md:py-16 relative">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container-custom mx-auto relative z-10">
          <div className={`max-w-4xl ${isRTL ? 'text-right' : 'text-left'}`}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              {isRTL ? "آراء عملائنا" : 'Client Testimonials'}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              {isRTL
                ? 'آراء عملائنا الكرام حول تجربتهم مع منتجاتنا وخدماتنا المميزة'
                : 'Discover what our valued clients say about their exceptional experience with our products and services'}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Testimonial - Optimized animation delays */}
      <section className="py-12 md:py-16">
        <div className="container-custom mx-auto">
          <ScrollObserver animation="fade-up" threshold={0.05} delay={100} className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal mb-3">
              {isRTL ? 'ما يقوله عملاؤنا' : 'What Our Clients Say'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              {isRTL
                ? 'تجارب حقيقية من عملائنا المميزين'
                : 'Real experiences from our distinguished clients'}
            </p>
          </ScrollObserver>

          <ScrollObserver animation="fade-up" threshold={0.1} delay={200} className="mb-16">
            <Card className="bg-gradient-to-br from-gold/5 via-white to-charcoal/5 shadow-xl border-0 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                <div className="lg:col-span-2 h-full">
                  <AspectRatio ratio={isMobile ? 1 : 4 / 5} className="h-full">
                    <LazyImage
                      src="/Clients/mainCL.jpg"
                      alt="Featured Client"
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                </div>
                <div className="lg:col-span-3 p-6 md:p-8 lg:p-12 flex flex-col justify-center">
                  <div className={`mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                    <Quote size={40} className="text-gold/60" />
                  </div>
                  <p className={`text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                    {isRTL
                      ? 'لقد كان التعامل مع الشركة تجربة متميزة من البداية للنهاية. الاحترافية العالية، والاهتمام بأدق التفاصيل، والتصاميم الاستثنائية التي تناسب رؤيتنا تمامًا.'
                      : 'Working with the company has been an outstanding experience from start to finish. The high professionalism, attention to detail, and exceptional designs that perfectly match our vision.'}
                  </p>
                  <div className={`flex items-center gap-2 mb-4 ${isRTL ? 'justify-end' : 'justify-start'}`}>
                    {renderStars(5)}
                  </div>
                  <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                    <h3 className="text-lg md:text-xl font-bold text-charcoal">
                      {isRTL ? 'الأمير عبدالله آل سعود' : 'Prince Abdullah Al Saud'}
                    </h3>
                    <p className="text-gold font-medium">
                      {isRTL ? 'قصر الأمراء، الرياض' : 'Princes Palace, Riyadh'}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </ScrollObserver>
        </div>
      </section>

      {/* Client Testimonials Grid - Faster animations */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollObserver
                key={index}
                animation="fade-up"
                threshold={0.05}
                delay={100 * (index + 1)}
              >
                <Card className={`h-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white border-0 ${isRTL ? 'text-right' : 'text-left'}`}>
                  <div className="h-56 md:h-64 sm:h-48">
                    <LazyImage
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6 relative">
                    <div className={`absolute -top-6 w-12 h-12 bg-gold text-white flex items-center justify-center rounded-full shadow-lg ${isRTL ? 'right-6' : 'left-6'}`}>
                      <Quote size={18} />
                    </div>
                    <div className={`flex items-center gap-1 mb-4 mt-2 ${isRTL ? 'justify-end' : 'justify-start'}`}>
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {testimonial.content}
                    </p>
                    <div className="border-t border-gray-100 pt-4">
                      <h3 className="text-lg font-bold text-charcoal mb-1">
                        {testimonial.name}
                      </h3>
                      <p className="text-gold text-sm font-medium">
                        {testimonial.role}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </ScrollObserver>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Enhanced with icons and faster animations */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-charcoal via-charcoal/98 to-charcoal text-white">
        <div className="container-custom mx-auto">
          <ScrollObserver animation="fade-up" threshold={0.05} delay={100} className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              {isRTL ? 'بالأرقام' : 'By The Numbers'}
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              {isRTL
                ? 'نفخر بما حققناه على مدار السنوات الماضية'
                : 'We take pride in what we have achieved over the past years'}
            </p>
          </ScrollObserver>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <ScrollObserver
                  key={index}
                  animation="fade-up"
                  threshold={0.05}
                  delay={150 * (index + 1)}
                  className="text-center"
                >
                  <div className="p-6 md:p-8 bg-white/5 backdrop-blur-sm border border-gold/20 rounded-xl transform transition-all duration-300 hover:scale-105 hover:bg-white/10">
                    <div className="flex justify-center mb-4">
                      <IconComponent size={32} className={`${stat.color}`} />
                    </div>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gold mb-2">
                      {stat.value}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base">
                      {stat.label}
                    </p>
                  </div>
                </ScrollObserver>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video Section - Now using the separate VideoPlayer component */}
      <VideoPlayer />

      {/* Call to Action - Faster animation */}
      <ScrollObserver animation="fade-up" threshold={0.05} delay={200}>
        <section className="py-12 md:py-16 bg-gradient-to-r from-gold via-gold/95 to-gold/90 text-white relative">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container-custom mx-auto text-center relative z-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              {isRTL ? 'هل أنت جاهز لإضافة لمسة من الفخامة؟' : 'Ready to Add a Touch of Luxury?'}
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              {isRTL
                ? 'تواصل معنا اليوم للحصول على استشارة مجانية واكتشف كيف يمكننا تحويل مساحتك'
                : 'Contact us today for a free consultation and discover how we can transform your space'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-gold px-8 py-3 rounded-lg font-bold hover:bg-charcoal hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                {isRTL ? 'تواصل معنا' : 'Contact Us'}
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-gold transition-all duration-300 transform hover:scale-105">
                {isRTL ? 'معرض الأعمال' : 'View Portfolio'}
              </button>
            </div>
          </div>
        </section>
      </ScrollObserver>
    </div>
  );
};

export default Testimonials;