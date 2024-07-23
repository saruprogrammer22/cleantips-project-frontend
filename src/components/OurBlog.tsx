
import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import ReactPaginate from 'react-paginate';
import { FaHome, FaSprayCan, FaArrowLeft, FaArrowRight, FaRecycle, FaMicroblog, FaLeaf, FaClock, FaBroom, FaSun, FaShieldAlt, FaTools, FaWater } from 'react-icons/fa';
import { gsap } from 'gsap';


const blogItems = [
    {
        title: "10 Eco-Friendly Cleaning Solutions for a Greener Home",
        date: "August 5, 2024",
        description: "Discover natural, non-toxic cleaning alternatives that are just as effective as commercial products. Learn how to make your own cleaning solutions using common household items.",
        imageUrl: "https://via.placeholder.com/400x250?text=Eco-Friendly+Cleaning",
        icon: <FaLeaf className="text-4xl text-green-500" />,
    },
    {
        title: "The Art of Speed Cleaning: How to Clean Your Home in Half the Time",
        date: "August 12, 2024",
        description: "Master the techniques of efficient cleaning with our time-saving tips. Learn how to prioritize tasks and use the right tools to clean your home quickly without sacrificing quality.",
        imageUrl: "https://via.placeholder.com/400x250?text=Speed+Cleaning",
        icon: <FaClock className="text-4xl text-blue-500" />,
    },
    {
        title: "Deep Cleaning Checklist: Tackle Often Overlooked Areas in Your Home",
        date: "August 19, 2024",
        description: "Ensure no spot is missed with our comprehensive deep cleaning guide. We cover often forgotten areas like baseboards, light fixtures, and behind appliances.",
        imageUrl: "https://via.placeholder.com/400x250?text=Deep+Cleaning",
        icon: <FaBroom className="text-4xl text-purple-500" />,
    },
    {
        title: "The Benefits of Professional Carpet Cleaning: When to Call the Experts",
        date: "August 26, 2024",
        description: "Understand when DIY isn't enough for your carpets. Learn about different professional cleaning methods and how they can extend the life of your carpets.",
        imageUrl: "https://via.placeholder.com/400x250?text=Carpet+Cleaning",
        icon: <FaSprayCan className="text-4xl text-red-500" />,
    },
    {
        title: "Organizing Your Home: Room-by-Room Guide for a Clutter-Free Space",
        date: "September 2, 2024",
        description: "Transform your living space with our detailed organization tips. We provide strategies for every room to help you maximize space and minimize clutter.",
        imageUrl: "https://via.placeholder.com/400x250?text=Home+Organization",
        icon: <FaHome className="text-4xl text-yellow-500" />,
    },
    {
        title: "Green Cleaning Products: What to Look for and What to Avoid",
        date: "September 9, 2024",
        description: "Navigate the world of eco-friendly cleaning products with our guide. Learn to read labels, understand certifications, and identify truly green products.",
        imageUrl: "https://via.placeholder.com/400x250?text=Green+Products",
        icon: <FaRecycle className="text-4xl text-green-600" />,
    },
    {
        title: "The Ultimate Guide to Cleaning Different Types of Flooring",
        date: "September 16, 2024",
        description: "From hardwood to tile, each flooring type requires specific care. Discover the best cleaning methods and products for various floor materials to keep them looking their best.",
        imageUrl: "https://via.placeholder.com/400x250?text=Floor+Cleaning",
        icon: <FaBroom className="text-4xl text-brown-500" />,
    },
    {
        title: "Seasonal Cleaning: Preparing Your Home for Each Season",
        date: "September 23, 2024",
        description: "Stay ahead of seasonal challenges with our quarterly cleaning guide. Learn what tasks to focus on each season to maintain a clean and comfortable home year-round.",
        imageUrl: "https://via.placeholder.com/400x250?text=Seasonal+Cleaning",
        icon: <FaSun className="text-4xl text-orange-500" />,
    },
    {
        title: "The Science of Clean: Understanding Germs and Effective Sanitization",
        date: "September 30, 2024",
        description: "Delve into the microbial world and learn how to effectively sanitize your home. Understand the difference between cleaning, disinfecting, and sanitizing.",
        imageUrl: "https://via.placeholder.com/400x250?text=Sanitization+Science",
        icon: <FaShieldAlt className="text-4xl text-blue-600" />,
    },
    {
        title: "Sustainable Cleaning: Reducing Waste in Your Cleaning Routine",
        date: "October 7, 2024",
        description: "Minimize your environmental impact with tips on reducing cleaning waste. Learn about reusable cleaning tools, bulk buying, and how to properly dispose of cleaning products.",
        imageUrl: "https://via.placeholder.com/400x250?text=Sustainable+Cleaning",
        icon: <FaRecycle className="text-4xl text-green-500" />,
    },
    {
        title: "DIY Cleaning Tools: Create Effective Cleaning Solutions at Home",
        date: "October 14, 2024",
        description: "Save money and reduce plastic waste by making your own cleaning tools. We'll show you how to create everything from all-purpose cleaners to laundry detergent.",
        imageUrl: "https://via.placeholder.com/400x250?text=DIY+Cleaning+Tools",
        icon: <FaTools className="text-4xl text-gray-600" />,
    },
    {
        title: "The Complete Guide to Window Cleaning: Crystal Clear Views All Year Round",
        date: "October 21, 2024",
        description: "Master the art of streak-free window cleaning. Learn about the best tools, techniques, and solutions for cleaning different types of windows and glass surfaces.",
        imageUrl: "https://via.placeholder.com/400x250?text=Window+Cleaning",
        icon: <FaWater className="text-4xl text-blue-400" />,
    }
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