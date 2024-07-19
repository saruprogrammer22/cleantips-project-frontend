import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion, useAnimation, useInView } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaBroom, FaSprayCan, FaWind, FaUserCircle, FaCommentDots } from 'react-icons/fa';

const testimonials = [
    {
        id: 1,
        name: 'Sarah Johnson',
        role: 'Homeowner',
        quote: 'The cleaning team was professional and thorough. My home has never looked better!',
        rating: 5,
        icon: FaBroom,
    },
    {
        id: 2,
        name: 'Michael Chen',
        role: 'Apartment Resident',
        quote: 'Exceptional service! They paid attention to every detail and left my apartment spotless.',
        rating: 5,
        icon: FaSprayCan,
    },
    {
        id: 3,
        name: 'Emily Rodriguez',
        role: 'Business Owner',
        quote: 'I use their services for my office, and the results are always outstanding. Highly recommended!',
        rating: 5,
        icon: FaWind,
    },
];

const Testimonial: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const controls = useAnimation();
    const ref = React.useRef(null);
    const inView = useInView(ref, {
        amount: 0.2,
        once: true,
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);
    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <section className="py-16 bg-gradient-to-br from-gray-100 to-slate-100 overflow-hidden">
            <motion.div
                ref={ref}
                className="container mx-auto px-4"
                variants={containerVariants}
                initial="hidden"
                animate={controls}
            >
                <motion.h2
                    className="text-4xl font-bold text-center mb-12 text-violet-600 flex items-center justify-center gap-3 flex-col"
                >
                    <span className='w-44 border-2 border-violet-600'></span>
                    <div className='flex gap-2'>
                        <FaCommentDots className="text-4xl" />
                        <span className='text-4xl'>What Our Client Say</span>
                        <FaCommentDots className="text-4xl" />
                    </div>
                </motion.h2>
                <motion.div
                    className="flex overflow-x-hidden"
                    variants={itemVariants}
                >
                    <motion.div
                        className="flex"
                        animate={{ x: [0, -100 * testimonials.length] }}
                        transition={{
                            x: { repeat: Infinity, duration: 30, ease: "linear" },
                            opacity: { duration: 0.5 }
                        }}
                    >
                        {[...testimonials, ...testimonials].map((testimonial, index) => (
                            <motion.div
                                key={index}
                                className="w-[300px] flex-shrink-0 mx-4"
                                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                                onHoverStart={() => setHoveredIndex(index)}
                                onHoverEnd={() => setHoveredIndex(null)}
                            >
                                <motion.div
                                    className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col relative overflow-hidden"
                                    whileHover={{ boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)" }}
                                >
                                    <AnimatePresence>
                                        {hoveredIndex === index && (
                                            <motion.div
                                                className="absolute inset-0 bg-violet-100 opacity-20"
                                                initial={{ scale: 0, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 0.2 }}
                                                exit={{ scale: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        )}
                                    </AnimatePresence>
                                    <motion.div
                                        className="text-4xl text-violet-500 mb-4 flex items-center justify-center"
                                        initial={{ rotateY: 0 }}
                                        whileHover={{ rotateY: 180 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <FaQuoteLeft className="absolute" style={{ backfaceVisibility: 'hidden' }} />
                                        <testimonial.icon className="absolute" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }} />
                                    </motion.div>
                                    <motion.div
                                        className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-full overflow-hidden"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <FaUserCircle className="w-full h-full text-gray-400" />
                                    </motion.div>
                                    <p className="text-gray-600 mb-4 flex-grow text-center">{testimonial.quote}</p>
                                    <div className="text-center">
                                        <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                                        <p className="text-gray-500">{testimonial.role}</p>
                                        <motion.div
                                            className="flex justify-center mt-2"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.2, duration: 0.5 }}
                                        >
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ delay: i * 0.1 }}
                                                >
                                                    <FaStar className="text-yellow-400" />
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Testimonial;