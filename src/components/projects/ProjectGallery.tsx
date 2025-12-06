import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';

interface ProjectGalleryProps {
  project: {
    title: string;
    gallery: string[];
  };
  isRTL: boolean;
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ project, isRTL }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  const totalImages = project.gallery.length;

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || isLightboxOpen || totalImages <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalImages);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isLightboxOpen, totalImages]);

  // Navigation functions
  const goToNext = useCallback(() => {
    setImageLoaded(false);
    setCurrentIndex((prev) => (prev + 1) % totalImages);
  }, [totalImages]);

  const goToPrevious = useCallback(() => {
    setImageLoaded(false);
    setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);
  }, [totalImages]);

  // Handle thumbnail click
  const handleThumbnailClick = useCallback((index: number) => {
    if (index === currentIndex) return;
    setImageLoaded(false);
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  }, [currentIndex]);

  // Lightbox functions
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
    setIsAutoPlaying(false);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setIsAutoPlaying(true);
  };

  const goToNextLightbox = () => {
    setLightboxIndex((prev) => (prev + 1) % totalImages);
  };

  const goToPreviousLightbox = () => {
    setLightboxIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  // Image load handler
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;

      switch (e.key) {
        case 'ArrowLeft':
          isRTL ? goToNextLightbox() : goToPreviousLightbox();
          break;
        case 'ArrowRight':
          isRTL ? goToPreviousLightbox() : goToNextLightbox();
          break;
        case 'Escape':
          closeLightbox();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, isRTL]);

  // Reset image loaded state when current image changes
  useEffect(() => {
    setImageLoaded(false);
  }, [currentIndex]);

  return (
    <div className="py-8">
      {/* Title */}
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`text-heading-4 font-playfair text-charcoal mb-6 ${isRTL ? 'text-right font-cairo' : ''}`}
      >
        {isRTL ? 'معرض المشروع' : 'Project Gallery'}
      </motion.h3>

      {/* Main Gallery */}
      <div
        className="relative mb-6"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Main Image Container */}
        <div className="relative h-48 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] overflow-hidden rounded-lg bg-cream border border-gray-200 shadow-sm">          {/* Loading State */}
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-cream">
              <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{
                opacity: imageLoaded ? 1 : 0,
                scale: imageLoaded ? 1 : 0.95
              }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{
                duration: 0.4,
                ease: [0.4, 0.0, 0.2, 1]
              }}
              className="absolute inset-0 group cursor-pointer"
              onClick={() => openLightbox(currentIndex)}
            >
              <img
                src={project.gallery[currentIndex]}
                alt={`${project.title} - ${isRTL ? 'صورة' : 'Image'} ${currentIndex + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onLoad={handleImageLoad}
                onError={() => setImageLoaded(true)}
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-charcoal bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  className="bg-white bg-opacity-95 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"
                >
                  <Maximize2 className="w-5 h-5 text-charcoal" />
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows - Only show if more than 1 image */}
        {totalImages > 1 && (
          <>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={isRTL ? goToNext : goToPrevious}
              className={`absolute top-1/2 -translate-y-1/2 ${isRTL ? 'right-3' : 'left-3'} 
                bg-white hover:bg-gold text-charcoal hover:text-white
                w-9 h-9 rounded-full shadow-md hover:shadow-lg border border-gray-200
                transition-all duration-200 z-10
                flex items-center justify-center`}
            >
              <ChevronLeft className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={isRTL ? goToPrevious : goToNext}
              className={`absolute top-1/2 -translate-y-1/2 ${isRTL ? 'left-3' : 'right-3'} 
                bg-white hover:bg-gold text-charcoal hover:text-white
                w-9 h-9 rounded-full shadow-md hover:shadow-lg border border-gray-200
                transition-all duration-200 z-10
                flex items-center justify-center`}
            >
              <ChevronRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
            </motion.button>
          </>
        )}

        {/* Image Counter */}
        <div className="absolute bottom-3 right-3 bg-charcoal bg-opacity-75 text-white px-2 py-1 rounded text-body-small font-roboto">
          {currentIndex + 1} / {totalImages}
        </div>
      </div>

      {/* Thumbnail Strip - Only show if more than 1 image */}
      {totalImages > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {project.gallery.map((image, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleThumbnailClick(index)}
              className={`flex-shrink-0 w-14 h-14 rounded-md overflow-hidden border-2 transition-all duration-300 ${index === currentIndex
                ? 'border-gold shadow-md ring-2 ring-gold ring-opacity-30'
                : 'border-gray-200 hover:border-gold-light'
                }`}
            >
              <img
                src={image}
                alt={`${project.title} - Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.button>
          ))}
        </div>
      )}

      {/* Dots Indicator - Only show if more than 1 image */}
      {totalImages > 1 && (
        <div className="flex justify-center mt-4 gap-1">
          {project.gallery.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleThumbnailClick(index)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${index === currentIndex
                ? 'bg-gold scale-125'
                : 'bg-gray-300 hover:bg-gold-light'
                }`}
            />
          ))}
        </div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-charcoal bg-opacity-95 z-50 flex items-center justify-center backdrop-blur-sm"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white hover:text-gold transition-colors duration-200 z-60"
            >
              <X className="w-7 h-7" />
            </motion.button>

            {/* Lightbox Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[85vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={project.gallery[lightboxIndex]}
                alt={`${project.title} - ${isRTL ? 'صورة' : 'Image'} ${lightboxIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />

              {/* Lightbox Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-charcoal bg-opacity-75 text-white px-3 py-1 rounded-full text-body-small font-roboto">
                {lightboxIndex + 1} / {totalImages}
              </div>
            </motion.div>

            {/* Lightbox Navigation - Only show if more than 1 image */}
            {totalImages > 1 && (
              <>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    isRTL ? goToNextLightbox() : goToPreviousLightbox();
                  }}
                  className={`absolute top-1/2 transform -translate-y-1/2 ${isRTL ? 'right-6' : 'left-6'} 
                    text-white hover:text-gold transition-colors duration-200`}
                >
                  <ChevronLeft className={`w-8 h-8 ${isRTL ? 'rotate-180' : ''}`} />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    isRTL ? goToPreviousLightbox() : goToNextLightbox();
                  }}
                  className={`absolute top-1/2 transform -translate-y-1/2 ${isRTL ? 'left-6' : 'right-6'} 
                    text-white hover:text-gold transition-colors duration-200`}
                >
                  <ChevronRight className={`w-8 h-8 ${isRTL ? 'rotate-180' : ''}`} />
                </motion.button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectGallery;