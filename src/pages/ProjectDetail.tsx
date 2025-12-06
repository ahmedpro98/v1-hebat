import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

// Import components
import ProjectHeader from '../components/projects/ProjectHeader';
import ProjectGallery from '../components/projects/ProjectGallery';
import ProjectDetails from '../components/projects/ProjectDetails';
import SimilarProjects from '../components/projects/SimilarProjects';

// Import data
import getProjectsData from './/projectsData';

const ProjectDetail = () => {
    const { projectId } = useParams<{ projectId: string }>();
    const { isRTL } = useLanguage();

    // Scroll to top when project changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [projectId]);

    // Get project data
    const projectsData = getProjectsData(isRTL);
    const project = projectsData[projectId as keyof typeof projectsData];

    // If project not found
    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">
                        {isRTL ? 'المشروع غير موجود' : 'Project Not Found'}
                    </h2>
                    <Link to="/projects" className="text-gold hover:underline">
                        {isRTL ? 'العودة إلى المشاريع' : 'Back to Projects'}
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-24 pb-20">
            <div className="container-custom">
                {/* Project Header */}
                <ProjectHeader project={project} isRTL={isRTL} />

                {/* Project Main Image */}
                <motion.div
                    className="mb-12 overflow-hidden rounded-lg shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <img
                        src={project.mainImage}
                        alt={project.title}
                        className="w-full h-[500px] object-cover"
                    />
                </motion.div>

                {/* Project Details */}
                <ProjectDetails
                    details={project.details}
                    projectInfo={{
                        client: project.client,
                        location: project.location,
                        category: project.category,
                        year: project.year
                    }}
                    isRTL={isRTL}
                />

                {/* Project Gallery */}
                <ProjectGallery project={project} isRTL={isRTL} />

                {/* Similar Projects */}
                <SimilarProjects
                    projectsData={projectsData}
                    currentProjectId={projectId as string}
                    isRTL={isRTL}
                />
            </div>
        </div>
    );
};

export default ProjectDetail;