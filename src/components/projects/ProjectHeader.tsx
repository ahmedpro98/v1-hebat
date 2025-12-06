import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Tag, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface ProjectHeaderProps {
  project: {
    title: string;
    subtitle: string;
    description: string;
    year: string;
    category: string;
    location: string;
  };
  isRTL: boolean;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ project, isRTL }) => {
  return (
    <>
      {/* Back Button */}
      <Link
        to="/projects"
        className={`inline-flex items-center text-charcoal hover:text-gold transition-colors mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}
      >
        <ArrowLeft className={`w-4 h-4 ${isRTL ? 'ml-2 transform rotate-180' : 'mr-2'}`} />
        <span>{isRTL ? 'العودة إلى المشروعات' : 'Back to Projects'}</span>
      </Link>

      {/* Project Header */}
      <div className={`mb-12 ${isRTL ? 'text-right' : 'text-left'}`}>
        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {project.title}
        </motion.h1>
        <motion.h2
          className="text-xl text-charcoal-light mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {project.subtitle}
        </motion.h2>

        {/* Project Info */}
        <motion.div
          className="flex flex-wrap gap-6 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Calendar className={`w-5 h-5 text-gold ${isRTL ? 'ml-2' : 'mr-2'}`} />
            <span>{project.year}</span>
          </div>
          <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Tag className={`w-5 h-5 text-gold ${isRTL ? 'ml-2' : 'mr-2'}`} />
            <span>{project.category}</span>
          </div>
          <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
            <MapPin className={`w-5 h-5 text-gold ${isRTL ? 'ml-2' : 'mr-2'}`} />
            <span>{project.location}</span>
          </div>
        </motion.div>

        <motion.p
          className="text-lg max-w-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {project.description}
        </motion.p>
      </div>
    </>
  );
};

export default ProjectHeader;
