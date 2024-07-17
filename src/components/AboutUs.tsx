import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaCertificate, FaMoneyBillWave, FaClock, FaUserTie } from 'react-icons/fa';
import ImageCollage from './ImageCollage';

const AboutUs: React.FC = () => {
    const { scrollYProgress } = useScroll();
    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
    const features = [
        {
            icon: FaCertificate,
            title: 'Certification',
            description: 'Cleaners certified & highly experienced professionals.',
        },
        {
            icon: FaMoneyBillWave,
            title: 'Fair Prices',
            description: "We aren't cheapest, but we won't ruin your wallet.",
        },
        {
            icon: FaClock,
            title: '24/7 Opened',
            description: "We work hard so you don't have to.",
        },
        {
            icon: FaUserTie,
            title: 'Professional Staff',
            description: 'We are professional and experienced cleaning staff.',
        },
    ];



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


    return (
        <section className="py-24 relative overflow-hidden">
            <motion.h2
                className="text-4xl font-bold text-center mb-12 text-violet-700 items-center gap-3 flex flex-col"
                variants={itemVariants}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <span className='w-44 border-2 border-violet-600'></span>
                <h2 className="text-5xl font-bold mb-4">About Our Cleaning Services</h2>
                <p className="text-xl">Exceptional cleaning tailored to your needs</p>
            </motion.h2>
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600"
                style={{ y: backgroundY }}
            />
            <div className="container mx-auto px-4 relative z-10">

                <motion.div
                    className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-24"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="p-12">
                            <h3 className="text-3xl font-bold mb-6 text-indigo-900">Our Commitment</h3>
                            <p className="text-lg mb-8 text-gray-700">
                                Our professional and experienced cleaning staff does the job right the first time, giving you confidence that your home or office will always look its best.
                            </p>
                            <motion.button
                                className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-indigo-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Learn More About Us
                            </motion.button>
                        </div>
                        <div className="bg-indigo-100 p-12">
                            <ImageCollage />
                        </div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <motion.div
                                className="text-4xl text-indigo-600 mb-4"
                                whileHover={{ scale: 1.2, rotate: 15 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <feature.icon />
                            </motion.div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutUs;