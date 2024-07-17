import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaHandSparkles } from 'react-icons/fa';
import hero from '../assets/hero.jpg';
import clean from '../assets/clean.png';

const Hero: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2,
                when: "beforeChildren",
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
        <motion.div
            className="relative h-screen overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <img
                src={hero}
                alt="Clean Home"
                className="absolute w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70" />

            <div className="container mx-auto h-full flex items-center relative z-10">
                <div className="w-full md:w-2/3 lg:w-1/2 text-white p-8">
                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
                        variants={itemVariants}
                    >
                        Sparkling Clean, Every Time
                    </motion.h1>
                    <motion.p
                        className="text-xl mb-8 text-gray-300"
                        variants={itemVariants}
                    >
                        Experience the joy of coming home to a pristine environment. Our expert cleaning services ensure your space is always at its best.
                    </motion.p>
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4"
                        variants={itemVariants}
                    >
                        <motion.button
                            className="px-8 py-3 bg-violet-600 text-white font-semibold rounded-full flex items-center justify-center gap-2 hover:bg-violet-700 transition duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaHandSparkles /> Book a Clean
                        </motion.button>
                        <motion.button
                            className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full flex items-center justify-center gap-2 hover:bg-white hover:text-violet-600 transition duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaCalendarAlt /> Our Services
                        </motion.button>
                    </motion.div>
                </div>
            </div>

            <motion.div
                className="absolute bottom-8 right-8 bg-white p-4 rounded-lg shadow-lg items-center gap-4 max-w-xs hidden md:flex md:flex-row"
                variants={itemVariants}
            >
                <img src={clean} alt="Cleaning Icon" className="w-16 h-16" />
                <p className="text-sm text-gray-800">
                    Trusted by thousands for spotless, healthy homes across the city.
                </p>
            </motion.div>
        </motion.div>
    );
};

export default Hero;