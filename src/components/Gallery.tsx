

import React, { useState, useEffect, useRef } from 'react';
import { FaArrowLeft, FaArrowRight, FaHandSparkles, FaCheck } from 'react-icons/fa';
import ReactPaginate from 'react-paginate';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BookingFormSubmit from './BookingFormSubmit';

gsap.registerPlugin(ScrollTrigger);

const itemsPerPage = 6;


const images = [
    { url: "https://via.placeholder.com/400x250?text=Residential+%26+Condo+Cleaning", title: "Residential & Condo Cleaning" },
    { url: "https://via.placeholder.com/400x250?text=Commercial+Space+Cleaning", title: "Commercial Space Cleaning" },
    { url: "https://via.placeholder.com/400x250?text=Post-Construction+Cleaning", title: "Post-Construction Cleaning" },
    { url: "https://via.placeholder.com/400x250?text=Sanitation+%26+Disinfection", title: "Sanitation & Disinfection" },
    { url: "https://via.placeholder.com/400x250?text=Carpet+%26+Upholstery+Cleaning", title: "Carpet & Upholstery Cleaning" },
    { url: "https://via.placeholder.com/400x250?text=Pest+Control", title: "Pest Control" },
    { url: "https://via.placeholder.com/400x250?text=Aircon+Services", title: "Aircon Services" },
    { url: "https://via.placeholder.com/400x250?text=Grass+Cutting", title: "Grass Cutting" },
    { url: "https://via.placeholder.com/400x250?text=Hauling", title: "Hauling" },
    { url: "https://via.placeholder.com/400x250?text=Exterior+Building+Cleaning", title: "Exterior Building Cleaning" },
    { url: "https://via.placeholder.com/400x250?text=Other+Services", title: "Other Services" },
    { url: "https://via.placeholder.com/400x250?text=Manpower+Services", title: "Manpower Services" },
];


const Gallery: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const galleryRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (galleryRef.current) {
            gsap.fromTo(
                galleryRef.current.children,
                { scale: 0.8, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: 'back.out(1.7)',
                    scrollTrigger: {
                        trigger: galleryRef.current,
                        start: 'top 80%',
                    },
                }
            );
        }
    }, [currentPage]);

    const handlePageClick = (data: { selected: number }) => {
        setCurrentPage(data.selected);
    };

    const offset = currentPage * itemsPerPage;
    const currentPageData = images.slice(offset, offset + itemsPerPage);


    return (
        <div className="bg-gradient-to-b from-gray-50 to-slate-100 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                <motion.h2
                    className="text-4xl font-bold text-center mb-12 text-violet-600 flex items-center justify-center gap-3 flex-col"
                >
                    <span className='w-44 border-2 border-violet-600'></span>
                    <div className='flex'>
                        <FaHandSparkles className="text-4xl" />
                        <span>Sparkling Clean Gallery</span>
                        <FaHandSparkles className="text-4xl" />
                    </div>
                </motion.h2>
                <div ref={galleryRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {currentPageData.map((image, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-xl shadow-xl overflow-hidden transform transition duration-300 hover:shadow-2xl group"
                        >
                            <img src={image.url} alt={`Cleaning Service ${index + 1}`} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-violet-700 mb-2">{image.title} {index + 1}</h3>
                                <p className="text-gray-600 text-sm mb-4">Professional cleaning for your home or office</p>
                                <div className="flex items-center text-violet-500">
                                    <FaCheck className="mr-2" />
                                    <BookingFormSubmit styleButton='bg-white text-violet px-0 text-1xl hover:bg-white' title='Book now' />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <ReactPaginate
                    previousLabel={<FaArrowLeft />}
                    nextLabel={<FaArrowRight />}
                    breakLabel="..."
                    pageCount={Math.ceil(images.length / itemsPerPage)}
                    onPageChange={handlePageClick}
                    containerClassName="flex justify-center items-center space-x-4 mt-8"
                    pageClassName="px-4 py-2 bg-white border rounded-full shadow transition duration-300 hover:bg-violet-50"
                    activeClassName="bg-violet-500 text-white"
                    previousClassName="px-4 py-2 bg-white border rounded-full shadow transition duration-300 hover:bg-violet-50"
                    nextClassName="px-4 py-2 bg-white border rounded-full shadow transition duration-300 hover:bg-violet-50"
                    disabledClassName="opacity-50 cursor-not-allowed"
                />
            </div>
        </div>
    );
};

export default Gallery;