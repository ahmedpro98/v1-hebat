import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

interface MobileProjectsMenuProps {
    setSheetOpen: (value: boolean) => void;
}

export const MobileProjectsMenu: React.FC<MobileProjectsMenuProps> = ({ setSheetOpen }) => {
    const { isRTL } = useLanguage();

    const projects = [
        {
            id: 'luxury-villa',
            title: isRTL ? 'تصاميم مسجد' : 'Mosque design',
            path: '/projects/luxury-villa',
        },
        {
            id: 'commercial-plaza',
            title: isRTL ? 'بلازا تجارية' : 'Commercial Plaza',
            path: '/projects/commercial-plaza',
        },
        {
            id: 'hotel-lobby',
            title: isRTL ? 'بهو فندق' : 'Hotel Lobby',
            path: '/projects/hotel-lobby',
        },
        {
            id: 'Interior',
            title: isRTL ? "تصماميم داخلية" : 'Interior Design',
            path: '/projects/interior-design',
        }

    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0, transition: { duration: 0.3 } }
    };

    return (
        <motion.div
            className={`${isRTL ? 'pr-6' : 'pl-6'} py-2 flex flex-col space-y-1`}
            variants={container}
            initial="hidden"
            animate="show"
        >
            {projects.map((project) => (
                <motion.div key={project.id} variants={item}>
                    <Link
                        to={project.path}
                        className={`block w-full px-4 py-2 rounded-md transition-all duration-300
              text-charcoal hover:bg-gold/10 hover:text-gold hover:translate-x-1
              ${isRTL ? 'text-right hover:-translate-x-1 hover:translate-x-0' : 'text-left'}
            `}
                        onClick={() => setSheetOpen(false)}
                    >
                        <div className="flex items-center">
                            <span className={`w-1.5 h-1.5 rounded-full bg-gold mr-2 ${isRTL ? 'order-last' : 'order-first'}`}></span>
                            <span>{project.title}</span>
                        </div>
                    </Link>
                </motion.div>
            ))}

            <motion.div variants={item}>
                <Link
                    to="/projects"
                    className={`block w-full px-4 py-2 rounded-md transition-all duration-300
            font-medium text-gold hover:bg-gold/10 hover:translate-x-1
            ${isRTL ? 'text-right hover:-translate-x-1 hover:translate-x-0' : 'text-left'}
          `}
                    onClick={() => setSheetOpen(false)}
                >
                    {isRTL ? 'عرض كل المشروعات' : 'View All Projects'}
                </Link>
            </motion.div>
        </motion.div>
    );
};