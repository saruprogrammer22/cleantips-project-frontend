import React from 'react';
import { motion } from 'framer-motion';
import homeclean from '../assets/asd1.jpg';
import airclean from '../assets/asd.jpg';

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
            className="py-16 bg-gray-50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
        >
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-4xl font-bold text-center mb-12 text-violet-700 items-center gap-3 flex flex-col"
                    variants={itemVariants}
                >
                    <span className='w-44 border-2 border-violet-600'></span>
                    <span>Our Services</span>
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-xl shadow-lg overflow-hidden"
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <div className="relative h-64 overflow-hidden">
                                <motion.img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
                                <h3 className="absolute bottom-4 left-4 text-2xl font-semibold text-white">
                                    {service.title}
                                </h3>
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