import React from 'react';
import { motion } from 'framer-motion';
import homeclean from '../assets/asd1.jpg';
import airclean from '../assets/asd.jpg';
import { MdOutlineMiscellaneousServices } from "react-icons/md";




const OurService: React.FC = () => {
    const services = [
        {
            title: 'Home Cleaning',
            description: 'Experience a spotless home with our comprehensive cleaning services. From dusting to disinfecting, we leave no corner untouched.',
            image: homeclean,
        },
        {
            title: 'Air Purification',
            description: 'Breathe easy with our advanced air cleaning solutions. Perfect for allergy sufferers and eco-conscious homes.',
            image: airclean,
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
            },
        },
    };

    return (
        <motion.section
            className="py-16 bg-gradient-to-r from-gray-100 to-slate-100"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
        >
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-4xl font-bold text-center mb-12 text-violet-600 flex items-center justify-center gap-3 flex-col"
                >
                    <span className='w-44 border-2 border-violet-600'></span>
                    <div className='flex gap-2'>
                        <MdOutlineMiscellaneousServices className="text-3xl" />
                        <span className='text-4xl'>Our Service</span>
                        <MdOutlineMiscellaneousServices className="text-4xl" />
                    </div>
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-xl shadow-lg overflow-hidden group"
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <div className="relative h-64 overflow-hidden">
                                <motion.img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-violet-900 bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                                    <h3 className="text-3xl font-semibold text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition duration-300">
                                        {service.title}
                                    </h3>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-600 mb-6">{service.description}</p>
                                <motion.button
                                    className="w-full bg-violet-600 text-white py-3 px-6 rounded-lg font-semibold text-lg"
                                    whileHover={{ scale: 1.05, backgroundColor: '#6D28D9' }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                                >
                                    Book Now
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default OurService;