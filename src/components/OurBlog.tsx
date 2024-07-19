
import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import ReactPaginate from 'react-paginate';
import { FaHome, FaSprayCan, FaArrowLeft, FaArrowRight, FaTrashAlt, FaRecycle, FaMicroblog } from 'react-icons/fa';
import { gsap } from 'gsap';


const blogItems = [
    {
        title: "Top Tips for Eco-Friendly Home Cleaning",
        date: "July 20, 2024",
        description: "Discover effective ways to keep your home clean while being eco-conscious. Our tips include natural cleaning solutions and sustainable practices.",
        imageUrl: "https://via.placeholder.com/400x250?text=Eco-Friendly+Cleaning",
        icon: <FaRecycle className="text-4xl text-violet-500" />,
    },
    {
        title: "The Ultimate Guide to Decluttering Your Space",
        date: "August 15, 2024",
        description: "Learn how to declutter your home efficiently with our comprehensive guide. Find out how to organize your belongings and create a more spacious living environment.",
        imageUrl: "https://via.placeholder.com/400x250?text=Declutter+Guide",
        icon: <FaHome className="text-4xl text-blue-500" />,
    },
    {
        title: "Essential Tips for Maintaining a Spotless Home",
        date: "September 10, 2024",
        description: "Get expert advice on maintaining a clean home with minimal effort. Our tips cover daily routines and cleaning hacks to keep your space spotless.",
        imageUrl: "https://via.placeholder.com/400x250?text=Spotless+Home",
        icon: <FaSprayCan className="text-4xl text-red-500" />,
    },
    {
        title: "Understanding the Benefits of Professional Cleaning Services",
        date: "October 5, 2024",
        description: "Explore the advantages of hiring professional cleaning services for your home. Learn how professionals can save you time and provide a deeper clean.",
        imageUrl: "https://via.placeholder.com/400x250?text=Professional+Cleaning",
        icon: <FaTrashAlt className="text-4xl text-yellow-500" />,
    },
    {
        title: "Understanding the Benefits of Professional Cleaning Services",
        date: "October 5, 2024",
        description: "Explore the advantages of hiring professional cleaning services for your home. Learn how professionals can save you time and provide a deeper clean.",
        imageUrl: "https://via.placeholder.com/400x250?text=Professional+Cleaning",
        icon: <FaTrashAlt className="text-4xl text-yellow-500" />,
    },
    {
        title: "Understanding the Benefits of Professional Cleaning Services",
        date: "October 5, 2024",
        description: "Explore the advantages of hiring professional cleaning services for your home. Learn how professionals can save you time and provide a deeper clean.",
        imageUrl: "https://via.placeholder.com/400x250?text=Professional+Cleaning",
        icon: <FaTrashAlt className="text-4xl text-yellow-500" />,
    },
    {
        title: "Understanding the Benefits of Professional Cleaning Services",
        date: "October 5, 2024",
        description: "Explore the advantages of hiring professional cleaning services for your home. Learn how professionals can save you time and provide a deeper clean.",
        imageUrl: "https://via.placeholder.com/400x250?text=Professional+Cleaning",
        icon: <FaTrashAlt className="text-4xl text-yellow-500" />,
    },
    {
        title: "Understanding the Benefits of Professional Cleaning Services",
        date: "October 5, 2024",
        description: "Explore the advantages of hiring professional cleaning services for your home. Learn how professionals can save you time and provide a deeper clean.",
        imageUrl: "https://via.placeholder.com/400x250?text=Professional+Cleaning",
        icon: <FaTrashAlt className="text-4xl text-yellow-500" />,
    },
    {
        title: "Understanding the Benefits of Professional Cleaning Services",
        date: "October 5, 2024",
        description: "Explore the advantages of hiring professional cleaning services for your home. Learn how professionals can save you time and provide a deeper clean.",
        imageUrl: "https://via.placeholder.com/400x250?text=Professional+Cleaning",
        icon: <FaTrashAlt className="text-4xl text-yellow-500" />,
    },
    {
        title: "Understanding the Benefits of Professional Cleaning Services",
        date: "October 5, 2024",
        description: "Explore the advantages of hiring professional cleaning services for your home. Learn how professionals can save you time and provide a deeper clean.",
        imageUrl: "https://via.placeholder.com/400x250?text=Professional+Cleaning",
        icon: <FaTrashAlt className="text-4xl text-yellow-500" />,
    },
    {
        title: "Understanding the Benefits of Professional Cleaning Services",
        date: "October 5, 2024",
        description: "Explore the advantages of hiring professional cleaning services for your home. Learn how professionals can save you time and provide a deeper clean.",
        imageUrl: "https://via.placeholder.com/400x250?text=Professional+Cleaning",
        icon: <FaTrashAlt className="text-4xl text-yellow-500" />,
    },
    {
        title: "Understanding the Benefits of Professional Cleaning Services",
        date: "October 5, 2024",
        description: "Explore the advantages of hiring professional cleaning services for your home. Learn how professionals can save you time and provide a deeper clean.",
        imageUrl: "https://via.placeholder.com/400x250?text=Professional+Cleaning",
        icon: <FaTrashAlt className="text-4xl text-yellow-500" />,
    },

];
const itemsPerPage = 4;

const OurBlog: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const controls = useAnimation();
    const ourBlogRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ourBlogRef.current) {
            gsap.fromTo(
                ourBlogRef.current.children,
                { scale: 0.4, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: 'back.out(1.7)',
                    scrollTrigger: {
                        trigger: ourBlogRef.current,
                        start: 'top 80%',
                    },
                }
            );
        }

    }, [controls, currentPage]);

    const handlePageClick = (data: { selected: number }) => {
        setCurrentPage(data.selected);
    };

    const offset = currentPage * itemsPerPage;
    const currentPageData = blogItems.slice(offset, offset + itemsPerPage);

    return (
        <div className="bg-gradient-to-r from-gray-50 to-slate-50 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.h2
                    className="text-4xl font-bold text-center mb-12 text-violet-600 flex items-center justify-center gap-3 flex-col"
                >
                    <span className='w-44 border-2 border-violet-600'></span>
                    <div className='flex'>
                        <FaMicroblog className="text-4xl" />
                        <span>Our Latest Blog</span>
                        <FaMicroblog className="text-4xl" />
                    </div>
                </motion.h2>
                <div ref={ourBlogRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {currentPageData.map((item, index) => (
                        <motion.div

                            key={index}
                            custom={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={controls}
                            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
                        >
                            <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <div className="flex items-center mb-4">
                                    {item.icon}
                                    <h3 className="text-xl font-semibold text-violet-700 ml-2">{item.title}</h3>
                                </div>
                                <p className="text-gray-600 text-sm mb-4">{item.date}</p>
                                <p className="text-gray-700">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <ReactPaginate
                    previousLabel={<FaArrowLeft />}
                    nextLabel={<FaArrowRight />}
                    breakLabel="..."
                    pageCount={Math.ceil(blogItems.length / itemsPerPage)}
                    onPageChange={handlePageClick}
                    containerClassName="flex justify-center items-center space-x-4 mt-8"
                    pageClassName="px-4 py-2 bg-white rounded-full shadow transition duration-300 hover:bg-violet-50"
                    activeClassName="bg-violet-500 text-white"
                    previousClassName="px-4 py-2 bg-white rounded-full shadow transition duration-300 hover:bg-violet-50"
                    nextClassName="px-4 py-2 bg-white rounded-full shadow transition duration-300 hover:bg-violet-50"
                    disabledClassName="opacity-50 cursor-not-allowed"
                />
            </div>
        </div>
    );
};

export default OurBlog;