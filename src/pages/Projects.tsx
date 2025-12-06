import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const Projects = () => {
    const { isRTL } = useLanguage();

    // Project data
    const projects = [
        {
            id: 'luxury-villa',
            title: isRTL ? 'مسجد الرحمة' : 'Al-Rahma Mosque',
            description: isRTL
                ? 'تصميم وتركيب النجف والهلال اعلي الماذنة وابضا ديكورات اضاءة كلاسيكية اسلامية'
                : 'Design and installation of the chandelier and the crescent above the minaret, as well as classical Islamic lighting decorations',
            image: '/projects-page/mosque/WhatsApp-Image-2025-02-28-at-20.30.59_2323b763.jpg',
            path: '/projects/luxury-villa',
            category: isRTL ? 'مسجد' : 'mosque',
            year: '2023'
        },
        {
            id: 'commercial-plaza',
            title: isRTL ? 'بلازا المول التجاري' : 'Commercial Plaza',
            description: isRTL
                ? 'تصميم إضاءة متطور لمركز تجاري يجمع بين الوظيفة والجمال'
                : 'Advanced lighting design for a commercial center that combines functionality and beauty',
            image: '/projects-page/mall/443527896_1564884910745038_3758099768104307627_n.jpg',
            path: '/projects/commercial-plaza',
            category: isRTL ? 'تجاري' : 'Commercial',
            year: '2025'
        },
        {
            id: 'hotel-lobby',
            title: isRTL ? 'بهو فندق' : 'Hotel Lobby',
            description: isRTL
                ? 'إضاءة بهو فندق فخم مع تركيز على الثريات الكريستالية وإضاءة الجدران'
                : 'Lighting for a luxurious hotel lobby with focus on crystal chandeliers and wall lighting',
            image: '/projects-page/hotel/WhatsApp-Image-2025-04-20-at-8.59.21-PM.jpg',
            path: '/projects/hotel-lobby',
            category: isRTL ? 'ضيافة' : 'Hospitality',
            year: '2024'
        },
        {
            id: 'interior-design',
            title: isRTL ? 'التصميم الداخلي' : 'Interior Design',
            description: isRTL
                ? 'مشروع تصميم داخلي فاخر يجمع بين الأناقة العصرية والعناصر التقليدية'
                : 'A luxury villa project in jadah featuring artistic lighting that reflects opulence and elegance',
            image: 'projects-page/Interior/Interior5.jpg',
            path: '/projects/interior-design',
            category: isRTL ? 'سكني' : 'Residential',
            year: '2024'
        }
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <div className="pt-24 pb-20">
            <div className="container-custom">
                {/* Header */}
                <div className={`text-center mb-12 ${isRTL ? 'font-tajawal' : 'font-playfair'}`}>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        {isRTL ? 'مشروعاتنا' : 'Our Projects'}
                    </h1>
                    <div className="w-20 h-1 gold-gradient mx-auto mb-6"></div>
                    <p className="text-lg max-w-3xl mx-auto text-charcoal-light">
                        {isRTL
                            ? 'استكشف مجموعة من المشاريع المميزة التي قمنا بتنفيذها، تبرز خبرتنا في تصميم الإضاءة وتنفيذها'
                            : 'Explore our collection of distinctive projects that showcase our expertise in lighting design and implementation'
                        }
                    </p>
                </div>

                {/* Projects Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            className="group"
                        >
                            <Link to={project.path} className="block">
                                <div className="overflow-hidden rounded-lg shadow-md hover-lift">
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                                        <div className="absolute top-4 right-4 bg-gold text-white px-2 py-1 text-xs rounded">
                                            {project.category}
                                        </div>
                                    </div>

                                    <div className="p-6 bg-white">
                                        <div className="flex justify-between items-center mb-3">
                                            <h3 className="text-xl font-bold text-charcoal group-hover:text-gold transition-colors">
                                                {project.title}
                                            </h3>
                                            <span className="text-sm text-gold">{project.year}</span>
                                        </div>
                                        <p className="text-charcoal-light text-sm mb-4">
                                            {project.description}
                                        </p>
                                        <div className={`flex ${isRTL ? 'justify-start' : 'justify-end'}`}>
                                            <span className="text-gold font-medium text-sm flex items-center">
                                                {isRTL ? 'عرض المزيد' : 'View Project'}
                                                <svg className={`w-4 h-4 ${isRTL ? 'mr-1 rotate-180' : 'ml-1'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Other projects banner */}
                <div className="mt-16">
                    <div className="bg-cream rounded-lg p-8 md:p-12 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            {isRTL ? 'هل لديك مشروع في ذهنك؟' : 'Have a project in mind?'}
                        </h2>
                        <p className="max-w-2xl mx-auto mb-6 text-charcoal-light">
                            {isRTL
                                ? 'نحن نقدم حلول إضاءة مبتكرة تناسب متطلبات مشروعك. اتصل بنا اليوم لمناقشة أفكارك.'
                                : 'We offer innovative lighting solutions tailored to your project requirements. Contact us today to discuss your ideas.'
                            }
                        </p>
                        <Link
                            to="/contact"
                            className="btn-primary inline-block transform transition-transform duration-300 hover:scale-105"
                        >
                            {isRTL ? 'تواصل معنا' : 'Get in Touch'}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;