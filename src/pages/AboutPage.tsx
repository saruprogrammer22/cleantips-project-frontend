import React, { useRef, useEffect, useState } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { FaCheckCircle, FaArrowDown } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ImageCollage from '@/components/ImageCollage';
import WhatMakeUsDifferent from '@/components/WhatMakeUsDifferent';
import { Link, useLocation } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const AboutUsPage: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useViewportScroll();
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
    const [isLoaded, setIsLoaded] = useState(false);
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    useEffect(() => {
        setIsLoaded(true);

        const sections = gsap.utils.toArray<HTMLElement>('.section');
        sections.forEach((section) => {
            ScrollTrigger.create({
                trigger: section,
                start: 'top 80%',
                onEnter: () => gsap.to(section, { opacity: 1, y: 0, duration: 0.5 }),
                onLeaveBack: () => gsap.to(section, { opacity: 0, y: 50, duration: 0.5 })
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [isLoaded]);

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div ref={containerRef} className='flex flex-col h-full py-20'>
            <div className="h-20 w-full bg-slate-200 rounded-lg flex justify-between items-center md:px-20 px-5">
                <h2 className='text-2xl md:text-4xl font-bold'>About</h2>
                <div className='flex'>
                    <Link to="/" className="text text-blue-600 mr-4 hover:underline">Home</Link>
                    <span className="text text-gray-600">{`>`} About Us</span>
                </div>
            </div>

            <div className="h-screen bg-gradient-to-b from-gray-900 to-violet-900 text-white overflow-hidden">
                <motion.div
                    style={{ y, opacity }}
                    className="relative h-screen flex items-center justify-center"
                >
                    <div className="absolute inset-0 z-0">
                        <ImageCollage />
                    </div>
                    <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
                    <div className="relative z-20 text-center">
                        <motion.h1
                            className="text-7xl font-bold mb-4"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            Who We Are
                        </motion.h1>
                        <motion.p
                            className="text-2xl mb-8"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.7 }}
                        >
                            Transforming spaces, one clean at a time
                        </motion.p>
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.9 }}
                        >
                            <FaArrowDown className="text-4xl animate-bounce" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <motion.div
                    className="section mb-16"
                    variants={sectionVariants}
                    initial="hidden"
                    animate={isLoaded ? "visible" : "hidden"}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h2 className="text-5xl font-semibold mb-4 text-violet-600">Our Story</h2>
                    <p className="text-xl">
                        Founded in 2024, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae eos minus officiis eaque et exercitationem labore unde necessitatibus. numquam ipsam eligendi porro voluptatem cumque, asperiores, aut adipisci molestias sit libero.
                    </p>
                </motion.div>

                <motion.div
                    className="section mb-16"
                    variants={sectionVariants}
                    initial="hidden"
                    animate={isLoaded ? "visible" : "hidden"}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <h2 className="text-5xl font-semibold mb-4 text-violet-600">Our Mission</h2>
                    <div className="flex items-start space-x-4">
                        <FaCheckCircle className="text-green-400 text-3xl flex-shrink-0 mt-1" />
                        <p className="text-xl">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae eos minus officiis eaque et exercitationem labore unde necessitatibus. numquam ipsam eligendi porro voluptatem cumque, asperiores, aut adipisci molestias sit libero.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    className="section"
                    variants={sectionVariants}
                    initial="hidden"
                    animate={isLoaded ? "visible" : "hidden"}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <h2 className="text-5xl font-semibold mb-4 text-violet-600">Our Reach</h2>
                    <p className="text-xl">
                        We've quickly become a top choice for cleaning services, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae eos minus officiis eaque et exercitationem labore unde necessitatibus. numquam ipsam eligendi porro voluptatem cumque, asperiores, aut adipisci molestias sit libero.
                    </p>
                </motion.div>
            </div>

            <WhatMakeUsDifferent />
        </div>
    );
};

export default AboutUsPage;
