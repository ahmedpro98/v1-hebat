import React, { useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import PartnerSlider from '../PartnerSlider';
import ScrollObserver from './ScrollObserver';

const PartnersSection = () => {
    const { isRTL } = useLanguage();
    const partnersRef = useRef<HTMLDivElement>(null);

    return (
        <section className="py-20 md:py-20 mb-12 relative bg-white overflow-hidden " ref={partnersRef}>



            <div className="w-full relative z-10">
                <ScrollObserver animation="fade-up">
                    <div className={`text-center mb-8 md:mb-12 px-4 ${isRTL ? 'rtl' : ''}`}>
                        <div className="inline-block">
                            <h2 className={`text-3xl md:text-4xl font-bold text-charcoal mb-4 relative`}>
                                {isRTL ? 'شركاؤنا واعتماداتنا' : 'Our Partners & Certifications'}
                                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
                            </h2>
                        </div>
                        <p className="text-gray-600 max-w-2xl mx-auto mt-6 text-lg leading-relaxed">
                            {isRTL
                                ? 'نفتخر بالعمل مع أفضل الشركات العالمية والمحلية لتقديم أرقى المنتجات والخدمات لعملائنا الكرام.'
                                : 'We proudly collaborate with world-class global and local companies to deliver the finest products and services to our valued customers.'}
                        </p>
                    </div>
                </ScrollObserver>

                <ScrollObserver animation="fade-up" delay={200}>
                    <div className="relative">
                        <PartnerSlider />

                        {/* Trust indicators */}
                        <div className="mt-6 text-center">
                            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span>{isRTL ? 'شركاء موثوقون' : 'Trusted Partners'}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <span>{isRTL ? 'جودة معتمدة' : 'Certified Quality'}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                    <span>{isRTL ? 'خدمة متميزة' : 'Excellence Service'}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollObserver>
            </div>
        </section>
    );
};

export default PartnersSection;