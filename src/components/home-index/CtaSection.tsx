import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Link } from 'react-router-dom';
import ScrollObserver from './ScrollObserver';

const CtaSection = () => {
    const { isRTL } = useLanguage();

    return (
        <section className="py-12 md:py-20 bg-charcoal text-white">
            <ScrollObserver animation="fade-up">
                <div className="container mx-auto text-center">
                    <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-6`}>
                        {isRTL ? 'جاهز للعمل معنا' : 'Ready to Transform Your Space?'}
                    </h2>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                        <Link
                            to="/contact"
                            className="inline-block bg-gold text-white px-6 py-3 md:px-8 md:py-4 rounded-md hover:bg-gold-dark transition-colors duration-300"
                        >
                            {isRTL ? 'تواصل معنا الآن' : 'Contact Us Now'}
                        </Link>
                        <p></p>
                        <Link
                            to="/projects"
                            className="inline-block bg-trasparnt border-2 border-white text-white px-6 py-3 md:px-8 md:py-4 rounded-md hover:bg-white hover:text-black transition-colors duration-300"
                        >
                            {isRTL ? 'تصفح مشاريعنا' : 'Browse Our Projects'}
                        </Link>
                    </div>
                </div>
            </ScrollObserver>
        </section>
    );
};

export default CtaSection;