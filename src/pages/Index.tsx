import React, { useEffect } from 'react';
import HeroSection from '../components/home-index/HeroSection';
import FeaturedCollection from '../components/home-index/FeaturedCollection';
import FeaturedTestimonials from '../components/home-index/FeaturedTestimonials';
import PartnersSection from '../components/home-index/PartnersSection';
import AboutSection from '../components/home-index/AboutSection';
import ServicesSection from '../components/home-index/ServicesSection';
import ContactSection from '../components/home-index/ContactSection';
import CtaSection from '../components/home-index/CtaSection';
import ScrollObserver from '../components/home-index/ScrollObserver';
import TransitionEffect from '../components/anmition/TransitionEffect';
import { useLanguage } from '../context/LanguageContext';
import SEOHead from '../components/SEOHead';

const Index = () => {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead
        schemaType="LocalBusiness"
        breadcrumbs={[
          { name: language === 'ar' ? 'الرئيسية' : 'Home', url: '/' }
        ]}
      />

      {/* Modern page transition effect */}
      <TransitionEffect type="circle" />

      <div className="page-content">
        {/* Hero Section*/}
        <HeroSection />

        {/* Featured Collection Section with staggered children */}
        <ScrollObserver animation="fade-up" staggerChildren>
          <FeaturedCollection />
        </ScrollObserver>

        {/* Partners Section - Horizontal slide based on language direction */}
        <ScrollObserver
          animation={language === 'ar' ? 'fade-left' : 'fade-right'}
          className="direction-aware"
        >
          <PartnersSection />
        </ScrollObserver>

        {/* About Section with custom reveal */}
        <ScrollObserver animation="fade-up" delay={50}>
          <AboutSection />
        </ScrollObserver>

        {/* Services Section with staggered items */}
        <ScrollObserver animation="fade-up" staggerChildren>
          <ServicesSection />
        </ScrollObserver>

        {/* Testimonials with scale animation */}
        <ScrollObserver animation="scale" threshold={0.2}>
          <FeaturedTestimonials />
        </ScrollObserver>

        {/* Contact Section */}
        <ScrollObserver animation="fade-up">
          <ContactSection />
        </ScrollObserver>

        {/* CTA Section */}
        <ScrollObserver animation="fade-up" className="text-animate-fade-in">
          <CtaSection />
        </ScrollObserver>
      </div>
    </>
  );
};

export default Index;