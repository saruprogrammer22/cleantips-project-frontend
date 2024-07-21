import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
    "https://via.placeholder.com/400x250?text=Project+1",
    "https://via.placeholder.com/400x250?text=Project+2",
    "https://via.placeholder.com/400x250?text=Project+3",
    "https://via.placeholder.com/400x250?text=Project+4",
    "https://via.placeholder.com/400x250?text=Project+5",
    // ... (rest of the images)
];

const ImageSlider: React.FC = () => {
    const sliderRef = useRef<Slider>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        return () => setIsVisible(false);
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const nextSlide = () => {
        sliderRef.current?.slickNext();
    };

    const prevSlide = () => {
        sliderRef.current?.slickPrev();
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="slider-container relative max-w-7xl py-16 px-4 sm:px-6 lg:px-8"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.5 }}
                >
                    <Slider ref={sliderRef} {...settings}>
                        {images.map((image, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="px-2"
                            >
                                <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                                    <img
                                        src={image}
                                        alt={`Project ${index + 1}`}
                                        className="w-full h-48 object-cover"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </Slider>
                    <button
                        title="prevSlide"
                        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white text-gray-800 rounded-full p-3 shadow-md hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
                        onClick={prevSlide}
                    >
                        <FaChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        title="nextSlide"
                        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white text-gray-800 rounded-full p-3 shadow-md hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
                        onClick={nextSlide}
                    >
                        <FaChevronRight className="w-6 h-6" />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ImageSlider;