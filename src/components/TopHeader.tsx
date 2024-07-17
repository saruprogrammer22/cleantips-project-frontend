import React from 'react';
import { motion } from 'framer-motion';
import { FaExclamationTriangle, FaEnvelope, FaClock, FaFacebook, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const TopHeader: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 }
    };

    const socialIcons = [
        { Icon: FaFacebook, link: '#' },
        { Icon: FaTwitter, link: '#' },
        { Icon: FaLinkedinIn, link: '#' }
    ];

    return (
        <motion.header
            className="bg-gradient-to-r from-gray-900 to-black text-white py-3 px-4 md:px-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <motion.div
                    className="flex items-center mb-2 md:mb-0"
                    variants={itemVariants}
                >
                    <FaExclamationTriangle className="text-yellow-400 text-xl mr-2 animate-pulse" />
                    <span className="text-yellow-400 font-bold mr-2">Hot Offer!</span>
                    <span className="text-sm font-medium">Free Estimate: </span>
                    <a href="tel:+5565454117" className="text-sm font-bold ml-1 hover:text-yellow-400 transition-colors">
                        +55 654 541 17
                    </a>
                </motion.div>

                <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
                    <motion.div
                        className="flex items-center"
                        variants={itemVariants}
                    >
                        <FaEnvelope className="text-yellow-400 mr-2" />
                        <a href="mailto:support@cmssuperheroes.com" className="text-sm hover:text-yellow-400 transition-colors">
                            support@cmssuperheroes.com
                        </a>
                    </motion.div>

                    <motion.div
                        className="flex items-center"
                        variants={itemVariants}
                    >
                        <FaClock className="text-yellow-400 mr-2" />
                        <span className="text-sm">Mon - Fri: 8.00am - 7.00pm</span>
                    </motion.div>

                    <motion.div
                        className="flex items-center space-x-3"
                        variants={itemVariants}
                    >
                        {socialIcons.map(({ Icon, link }, index) => (
                            <motion.a
                                key={index}
                                href={link}
                                className="text-gray-400 hover:text-yellow-400 transition-colors"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Icon className="text-lg" />
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </div>
        </motion.header>
    );
}

export default TopHeader;