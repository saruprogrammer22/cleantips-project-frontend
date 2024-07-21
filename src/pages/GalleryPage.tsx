import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { Link, useLocation } from 'react-router-dom';
import ImageSlider from '@/components/ImageSlider';

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

function GalleryPage() {
    const galleryRef = useRef<HTMLDivElement>(null);
    const location = useLocation();

    useEffect(() => {
        if (galleryRef.current) {
            gsap.from(galleryRef.current.children, {
                opacity: 0,
                y: 50,
                stagger: 0.05,
                duration: 0.5,
                ease: 'power2.out',
            });
        }
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div className='flex flex-col py-20 h-full'>
            <div className="h-20 w-full bg-slate-200 rounded-lg flex justify-between items-center md:px-20 px-5 ">
                <h2 className='text-2xl md:text-4xl font-bold'>Gallery</h2>
                <div className='flex'>
                    <Link to="/" className="text text-blue-600 mr-4 hover:underline">Home </Link>
                    <span className="text text-gray-600">{`>`} Gallery</span>
                </div>
            </div>

            <ImageSlider />

            <div ref={galleryRef} className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 p-4 ">
                {images.map((image, index) => (
                    <motion.div
                        key={index}
                        className="break-inside-avoid"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                    >
                        <img
                            src={image}
                            alt={`Project ${index + 1}`}
                            className="w-full rounded-lg cursor-pointer hover:shadow-lg transition-shadow duration-300"
                            loading="lazy"
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default GalleryPage;