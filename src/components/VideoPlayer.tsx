import React, { useCallback, useRef, useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import ScrollObserver from './home-index/ScrollObserver';
import { AspectRatio } from './ui/aspect-ratio';
import {
    Play,
    Pause,
    Users,
    Award,
    Maximize2,
    X
} from 'lucide-react';

interface VideoPlayerProps {
    className?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ className = "" }) => {
    const { isRTL } = useLanguage();
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showControls, setShowControls] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);

    // Handle video play/pause
    const handleVideoToggle = useCallback(() => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
                setIsPlaying(false);
            } else {
                videoRef.current.play();
                setIsPlaying(true);
                setShowControls(true);
            }
        }
    }, [isPlaying]);

    // Handle video ended
    const handleVideoEnded = useCallback(() => {
        setIsPlaying(false);
        setShowControls(false);
    }, []);

    // Handle fullscreen toggle
    const handleFullscreenToggle = useCallback(() => {
        if (videoRef.current) {
            // Pause the original video when opening fullscreen
            videoRef.current.pause();
            setIsPlaying(false);
            setShowControls(false);
        }
        setIsFullscreen(!isFullscreen);
    }, [isFullscreen]);

    // Handle closing fullscreen
    const handleCloseFullscreen = useCallback((e) => {
        e?.stopPropagation();
        setIsFullscreen(false);
    }, []);

    // Handle escape key to close fullscreen
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && isFullscreen) {
                setIsFullscreen(false);
            }
        };

        if (isFullscreen) {
            document.addEventListener('keydown', handleKeyDown);
            // Prevent scrolling when fullscreen is open
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [isFullscreen]);

    // Handle video click to show/hide controls
    const handleVideoClick = useCallback(() => {
        if (isPlaying) {
            setShowControls(!showControls);
        }
    }, [isPlaying, showControls]);

    return (
        <div className={className}>
            {/* Fullscreen Video Modal */}
            {isFullscreen && (
                <div
                    className="fixed inset-0 bg-black z-50 flex items-center justify-center"
                    onClick={handleCloseFullscreen}
                >
                    <div
                        className="relative w-full h-full max-w-6xl max-h-[90vh] flex items-center justify-center p-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={handleCloseFullscreen}
                            className="absolute top-4 right-4 z-60 w-12 h-12 rounded-full bg-black/80 text-white flex items-center justify-center hover:bg-red-600 transition-colors duration-300 border-2 border-white/20 shadow-lg"
                            type="button"
                            aria-label="Close video"
                        >
                            <X size={24} />
                        </button>
                        <video
                            src="/Logo_and_identity/video.mp4"
                            className="w-full h-full object-contain max-w-full max-h-full rounded-lg shadow-2xl"
                            controls
                            onEnded={handleCloseFullscreen}
                            poster="/Logo_and_identity/NEW-panar.jpg"
                        />
                    </div>
                </div>
            )}

            {/* Video Section */}
            <section className="py-12 md:py-16">
                <div className="container-custom mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                        <ScrollObserver
                            animation={isRTL ? "fade-left" : "fade-right"}
                            threshold={0.1}
                            delay={200}
                            className={`${isRTL ? 'order-2' : 'order-1'}`}
                        >
                            <div className="relative rounded-xl shadow-2xl group">
                                <AspectRatio ratio={16 / 9} className="bg-gray-100">
                                    <video
                                        ref={videoRef}
                                        src="/Logo_and_identity/video.mp4"
                                        className="w-full h-full object-cover rounded-xl cursor-pointer"
                                        poster="/Logo_and_identity/NEW-panar.jpg"
                                        onEnded={handleVideoEnded}
                                        onClick={handleVideoClick}
                                    />

                                    {/* Video overlay */}
                                    <div className={`absolute inset-0 bg-black/20 transition-all duration-300 rounded-xl ${isPlaying ? 'group-hover:bg-black/10' : 'bg-black/30'
                                        }`}></div>

                                    {/* Play/Pause button - Hide completely when playing */}
                                    {!isPlaying && (
                                        <button
                                            onClick={handleVideoToggle}
                                            className="absolute inset-0 flex items-center justify-center cursor-pointer z-10"
                                        >
                                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gold/90 backdrop-blur-sm text-white flex items-center justify-center hover:bg-gold transition-all duration-300 transform hover:scale-110 group-hover:shadow-2xl">
                                                <Play size={20} className="ml-1" fill="white" />
                                            </div>
                                        </button>
                                    )}

                                    {/* Control buttons - Only show when video is playing and controls are visible */}
                                    {isPlaying && showControls && (
                                        <>
                                            {/* Pause button */}
                                            <button
                                                onClick={handleVideoToggle}
                                                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 w-12 h-12 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black/90 transition-all duration-300"
                                            >
                                                <Pause size={16} fill="white" />
                                            </button>

                                            {/* Fullscreen button */}
                                            <button
                                                onClick={handleFullscreenToggle}
                                                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-all duration-300"
                                            >
                                                <Maximize2 size={16} />
                                            </button>
                                        </>
                                    )}
                                </AspectRatio>
                            </div>
                        </ScrollObserver>

                        <ScrollObserver
                            animation={isRTL ? "fade-right" : "fade-left"}
                            threshold={0.1}
                            delay={300}
                            className={`${isRTL ? 'order-1 text-right' : 'order-2 text-left'}`}
                        >
                            <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-6">
                                {isRTL ? 'شاهد قصص نجاحنا' : 'Watch Our Success Stories'}
                            </h2>
                            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                                {isRTL
                                    ? 'استمع إلى تجارب عملائنا مباشرة واكتشف كيف ساهمت حلولنا في تحويل مساحاتهم إلى تحف فنية من خلال الإضاءة الاستثنائية.'
                                    : 'Listen to our clients experiences directly and discover how our solutions have helped transform their spaces into works of art through exceptional lighting.'}
                            </p>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                <div className="flex items-center gap-2">
                                    <Users size={16} className="text-gold" />
                                    <span>{isRTL ? '50+ عميل سعيد' : '50+ Happy Clients'}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Award size={16} className="text-gold" />
                                    <span>{isRTL ? 'جودة مضمونة' : 'Quality Guaranteed'}</span>
                                </div>
                            </div>
                        </ScrollObserver>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default VideoPlayer;