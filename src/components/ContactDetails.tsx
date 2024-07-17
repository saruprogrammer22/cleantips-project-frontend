import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FaYoutube, FaTiktok, FaFacebook, FaInstagram } from 'react-icons/fa';

const ContactDetails: React.FC = () => {

    const cardVariants = {
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
        <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    className="text-4xl font-bold text-center mb-12 text-violet-700 items-center gap-3 flex flex-col"
                    variants={cardVariants}
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className='w-44 border-2 border-violet-600'></span>
                    <h2 className="text-5xl font-bold mb-4">Get in touch</h2>
                </motion.h2>
                <motion.p
                    variants={cardVariants}
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-xl text-center text-violet-600 mb-12"
                >
                    If you still have any questions, please contact us at our request.
                </motion.p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div
                        variants={cardVariants}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-white rounded-lg shadow-lg p-8"
                    >
                        <FaPhone className="text-5xl text-blue-500 mb-6 mx-auto" />
                        <h3 className="text-2xl font-semibold text-center mb-4 text-indigo-900">Phone</h3>
                        <p className="text-gray-600 text-center">
                            8 800 884 2234
                            <br />
                            8 800 563 2240
                        </p>
                    </motion.div>
                    <motion.div
                        variants={cardVariants}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-white rounded-lg shadow-lg p-8"
                    >
                        <FaEnvelope className="text-5xl text-green-500 mb-6 mx-auto" />
                        <h3 className="text-2xl font-semibold text-center mb-4 text-indigo-900">E-mail</h3>
                        <p className="text-gray-600 text-center">email@example.com</p>
                    </motion.div>
                    <motion.div
                        variants={cardVariants}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-white rounded-lg shadow-lg p-8"
                    >
                        <FaMapMarkerAlt className="text-5xl text-red-500 mb-6 mx-auto" />
                        <h3 className="text-2xl font-semibold text-center mb-4 text-indigo-900">Address</h3>
                        <p className="text-gray-600 text-center">
                            Patricia C. Amedee
                            <br />
                            4401 Waldeck Street
                            <br />
                            Grapevine Nashville, TX 76051
                        </p>
                    </motion.div>
                </div>
                <motion.div
                    variants={cardVariants}
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    className="flex justify-center mt-12 space-x-8"
                >
                    <FaYoutube className="text-4xl text-red-600 hover:text-red-700 transition-colors" />
                    <FaTiktok className="text-4xl text-black hover:text-gray-800 transition-colors" />
                    <FaFacebook className="text-4xl text-blue-600 hover:text-blue-700 transition-colors" />
                    <FaInstagram className="text-4xl text-pink-600 hover:text-pink-700 transition-colors" />
                </motion.div>
            </div>
        </div>
    );
};

export default ContactDetails;