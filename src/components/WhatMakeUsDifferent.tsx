import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaHome, FaMapMarkerAlt, FaBroom, FaCalendarCheck } from 'react-icons/fa';

import test from '../assets/aircon.jpg'
import BookingFormSubmit from './BookingFormSubmit';
import { Link } from 'react-router-dom';

const WhatMakeUsDifferent: React.FC = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const features = [
        { icon: <FaHome />, title: 'WE CARE ABOUT YOUR HOUSE', description: 'We have branches in Metro Manila, CALABARZON, Cebu, and soon all over the country, no matter where you live we are close to you!' },
        { icon: <FaMapMarkerAlt />, title: 'WE ARE CLOSE TO YOU', description: 'We have branches in Metro Manila, CALABARZON, Cebu, and soon all over the country, no matter where you live we are close to you!' },
        { icon: <FaBroom />, title: 'WE HAVE RESIDENTIAL & INDUSTRIAL CLEANING', description: 'Anytime Cleaners PH offers a verity of cleaning and maintenance services for both residential and commercial spaces.' },
        { icon: <FaCalendarCheck />, title: 'WE HAVE HASSLE-FREE BOOKING', description: 'You can check the quotation right away and book our services in just one-click. And seat back at your place while waiting for our team to arrive.' },
    ];

    return (
        <div className="bg-gradient-to- py-16 px-4" ref={ref}>
            <motion.h2
                className="text-4xl font-bold text-center mb-12 text-violet-800 flex items-center justify-center gap-3 flex-col"
                initial={{ opacity: 0, y: -50 }}
                animate={controls}
                variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: -50 }
                }}
                transition={{ duration: 0.5 }}
            >
                <span className='w-44 border-2 border-violet-600'></span>
                WHAT MAKES US DIFFERENT?
            </motion.h2>
            <div className="flex flex-col lg:flex-row max-w-7xl mx-auto">
                <div className="lg:w-2/3 pr-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="flex items-start mb-8"
                            initial="hidden"
                            animate={controls}
                            variants={{
                                visible: { opacity: 1, x: 0 },
                                hidden: { opacity: 0, x: -50 }
                            }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="text-3xl text-violet-500 mr-4 mt-1">{feature.icon}</div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-violet-800">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="lg:w-1/3 mt-8 lg:mt-0">
                    <Link to="/cost-calculator">
                        <motion.div
                            className="bg-white p-6 rounded-lg shadow-lg"
                            initial="hidden"
                            animate={controls}
                            variants={{
                                visible: { opacity: 1, x: 0 },
                                hidden: { opacity: 0, x: 50 }
                            }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <h3 className="text-2xl font-semibold mb-4 text-violet-800">Cost Calculator</h3>
                            <img alt='' src={test} className='object-cover max-h-40 w-full' />
                            <p className="text-gray-600 mb-4">Estimate your cleaning cost.</p>
                            <button className="bg-violet-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-violet-600 transition-colors duration-300">
                                Learn more
                            </button>
                        </motion.div>
                    </Link>
                    <motion.div
                        className="bg-white p-6 rounded-lg shadow-lg mt-6"
                        initial="hidden"
                        animate={controls}
                        variants={{
                            visible: { opacity: 1, x: 0 },
                            hidden: { opacity: 0, x: 50 }
                        }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <h3 className="text-2xl font-semibold mb-4 text-violet-800">Promos</h3>
                        <img alt='' src={test} className='object-cover max-h-40 w-full' />
                        <p className="text-gray-600 mb-4">Check out our latest offers!</p>
                        <button className="bg-violet-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-violet-600 transition-colors duration-300">
                            Learn more
                        </button>
                    </motion.div>
                </div>
            </div>
            <motion.div
                className="mt-12 text-center"
                initial="hidden"
                animate={controls}
                variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 50 }
                }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                <BookingFormSubmit title='BOOK US NOW!' styleButton="bg-violet-500 text-white px-8 py-8 rounded-full font-semibold hover:bg-violet-600 transition-colors duration-300 text-lg " />
            </motion.div>
        </div>
    );
};

export default WhatMakeUsDifferent; 