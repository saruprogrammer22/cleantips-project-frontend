import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { gsap } from 'gsap';
import { FaArrowLeft, FaArrowRight, FaBroom, FaSprayCan, FaAdn } from 'react-icons/fa';

const images = [
    "https://via.placeholder.com/400x250?text=Project+1",
    "https://via.placeholder.com/400x250?text=Project+2",
    "https://via.placeholder.com/400x250?text=Project+3",
    "https://via.placeholder.com/400x250?text=Project+4",
    "https://via.placeholder.com/400x250?text=Project+5",
    "https://via.placeholder.com/400x250?text=Project+6",
    "https://via.placeholder.com/400x250?text=Project+7",
    "https://via.placeholder.com/400x250?text=Project+8",
    "https://via.placeholder.com/400x250?text=Project+9",
    "https://via.placeholder.com/400x250?text=Project+10",
    "https://via.placeholder.com/400x250?text=Project+11",
    "https://via.placeholder.com/400x250?text=Project+12",
    "https://via.placeholder.com/400x250?text=Project+13",
    "https://via.placeholder.com/400x250?text=Project+14",
    "https://via.placeholder.com/400x250?text=Project+15",
    "https://via.placeholder.com/400x250?text=Project+16",
    "https://via.placeholder.com/400x250?text=Project+17",
    "https://via.placeholder.com/400x250?text=Project+18",
];


const ImageSlider: React.FC = () => {
    const controls = useAnimation();
    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        const animation = gsap.to(slider, {
            x: '-20%', // Move 1 column (20% of 5 columns)
            ease: 'none',
            duration: 10,
            repeat: -1,
            repeatDelay: 1,
            onRepeat: () => {
                gsap.set(slider, { x: '0%' });
            },
        });

        return () => {
            animation.kill();
        };
    }, []);

    const handleMouseEnter = () => {
        gsap.to(sliderRef.current, { timeScale: 0, duration: 0.5 });
    };

    const handleMouseLeave = () => {
        gsap.to(sliderRef.current, { timeScale: 1, duration: 0.5 });
    };

    const nextSlide = () => {
        controls.start({ x: '-=20%', transition: { duration: 0.5 } });
    };

    const prevSlide = () => {
        controls.start({ x: '+=20%', transition: { duration: 0.5 } });
    };

    return (
        <div className="relative overflow-hidden bg-gray-100 py-10 rounded-lg mt-10">

            <div
                className="w-[120%] flex"
                ref={sliderRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {images.map((src, index) => (
                    <motion.div
                        key={index}
                        className="w-1/5 p-2 flex-shrink-0"
                        whileHover={{ scale: 1.05, zIndex: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="relative group overflow-hidden rounded-lg shadow-lg">
                            <img src={src} alt={`Cleaning service ${index + 1}`} className="w-full h-40 object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                <p className="text-sm font-semibold">Professional Cleaning</p>
                                <div className="flex mt-2 space-x-2">
                                    <FaBroom className="text-yellow-400" />
                                    <FaSprayCan className="text-green-400" />
                                    <FaAdn className="text-blue-400" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
            <button
                title='button'
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-3 text-blue-600 transition-colors duration-300"
            >
                <FaArrowLeft className="text-xl" />
            </button>
            <button
                title='button'
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-3 text-blue-600 transition-colors duration-300"
            >
                <FaArrowRight className="text-xl" />
            </button>
        </div>
    );
};

export default ImageSlider;