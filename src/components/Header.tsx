import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { FaBars, FaTimes, FaChair } from 'react-icons/fa';
import gsap from 'gsap';
import { MdArrowBack } from 'react-icons/md';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { scrollY } = useViewportScroll();
    const backgroundColor = useTransform(
        scrollY,
        [0, 100],
        ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)']
    );

    useEffect(() => {
        gsap.to('.logo-text', {
            duration: 2,
            text: 'EcoClean',
            ease: 'power2.inOut',
        });
    }, []);


    const [header, setHeader] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 60) {
                setHeader(true);
            } else {
                setHeader(false);
            }

        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    })

    const navItems = [
        { name: 'Services', path: '/services' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Blog', path: '/blog' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];



    return (
        <motion.header
            style={{ backgroundColor }}
            className="fixed w-full py-4 px-6 z-50 transition-all duration-300"
        >
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className={`flex items-center space-x-2`}>
                    <FaChair className={`${header ? "block" : "text-violet-500"}  text-3xl md:flex ${header ? "text-violet-500" : "md:text-violet-600"}`} />
                    <span className="logo-text text-2xl font-bold text-violet-700"></span>
                    <h4 className={`hidden   md:flex text-3xl font-bold ${header ? "text-violet-500" : "text-violet-500"}`}>Clean Tips</h4>
                </Link>


                <nav className={`md:flex hidden space-x-6 `}>
                    {navItems.map((item) => (
                        <motion.div
                            key={item.name}
                            whileHover={{ y: -2 }}
                            whileTap={{ y: 0 }}
                        >
                            <Link
                                to={item.path}
                                className="text-black hover:text-violet-500 transition duration-300"
                            >
                                {item.name}
                            </Link>
                        </motion.div>
                    ))}
                    <Link to={"/cost-Calculator"}>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
                        >
                            Get a Quote
                        </motion.button>
                    </Link>
                </nav>

                <motion.div
                    className={`${header ? "flex" : ""} md:hidden`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <button
                        type='button'
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-violet-700 focus:outline-none"
                    >
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </motion.div>
            </div>


            {/*MOBILE NAV */}
            <motion.nav
                className={`md:flex fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 ${isOpen ? 'block' : 'hidden'
                    }`}
                initial={{ opacity: 0, y: '-100%' }}
                animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : '-100%' }}
                transition={{ duration: 0.3 }}
            >
                {navItems.map((item, index) => (
                    <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Link
                            to={item.path}
                            className="text-violet-700 text-2xl hover:text-violet-500 transition duration-300"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </Link>
                    </motion.div>
                ))}
                <Link to={"/cost-calculator"}>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-violet-500 hover:bg-violet-400 text-white font-bold py-2 px-6 rounded-md text-xl transition duration-300"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        Get a Quote
                    </motion.button>
                </Link>

                <h2 onClick={() => setIsOpen(!isOpen)} className='flex gap-2 text-violet-600'>Go Back   <MdArrowBack size={24} /></h2>
            </motion.nav>
        </motion.header>
    );
};

export default Header;
