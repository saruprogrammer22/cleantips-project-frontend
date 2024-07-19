import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ReactPaginate from 'react-paginate';
import { FaHome, FaTrashAlt, FaRecycle, FaSprayCan, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const blogItems = [
    {
        title: "Top Tips for Eco-Friendly Home Cleaning",
        date: "July 20, 2024",
        description: "Discover effective ways to keep your home clean while being eco-conscious. Our tips include natural cleaning solutions and sustainable practices.",
        imageUrl: "https://via.placeholder.com/400x250?text=Eco-Friendly+Cleaning",
        icon: <FaRecycle className="text-4xl text-green-500" />,
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

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

const OurBlog: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(0);

    const handlePageClick = (data: { selected: number }) => {
        setCurrentPage(data.selected);
    };

    const offset = currentPage * itemsPerPage;
    const currentPageData = blogItems.slice(offset, offset + itemsPerPage);

    return (
        <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    className="text-4xl font-bold text-center mb-12 text-violet-700 items-center gap-3 flex flex-col"
                    variants={itemVariants}
                >
                    <span className='w-44 border-2 border-violet-600'></span>
                    <h2 className="text-5xl font-bold mb-4">Our Blogs</h2>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-lg text-center text-violet-500 mb-12"
                >
                    Stay updated with our latest tips and insights on home cleaning services. Explore our blog for practical advice and inspiration.
                </motion.p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {currentPageData.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-lg shadow-lg overflow-hidden"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                        >
                            <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <div className="flex items-center mb-4">
                                    {item.icon}
                                    <div className="ml-3">
                                        <h3 className="text-xl font-semibold text-violet-700">{item.title}</h3>
                                        <p className="text-sm text-gray-500">{item.date}</p>
                                    </div>
                                </div>
                                <p className="text-gray-700">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <ReactPaginate
                    previousLabel={<FaArrowLeft />}
                    nextLabel={<FaArrowRight />}
                    breakLabel="..."
                    breakClassName="break-me"
                    pageCount={Math.ceil(blogItems.length / itemsPerPage)}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName="flex justify-center items-center space-x-4 mt-8"
                    pageClassName="px-4 py-2 bg-white border rounded"
                    activeClassName="bg-violet-500 text-white"
                    previousClassName="px-4 py-2 bg-white border rounded"
                    nextClassName="px-4 py-2 bg-white border rounded"
                    disabledClassName="opacity-50 cursor-not-allowed"
                />
            </div>
        </div>
    );
};

export default OurBlog;