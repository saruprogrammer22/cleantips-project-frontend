import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaUser, FaPhone, FaEnvelope, FaComments, FaHandSparkles, FaChair, FaYoutube, FaTiktok, FaFacebook, FaInstagram } from 'react-icons/fa';
import { useForm, SubmitHandler } from 'react-hook-form';
import { gsap } from 'gsap';
import { Link, useLocation } from 'react-router-dom';

type FormInputs = {
    name: string;
    phoneNumber: string;
    email: string;
    message: string;
};

const ContactPage: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();
    const controls = useAnimation();
    const formRef = useRef(null);

    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        console.log(data);
        // Handle form submission
    };

    useEffect(() => {
        controls.start(i => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1, type: 'spring', stiffness: 100 }
        }));

        gsap.from('.icon', {
            duration: 1,
            rotate: 360,
            ease: 'power2.out',
            stagger: 0.2
        });
    }, [controls]);


    {/*Automatic Scroll up whenever it clicks */ }
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);


    return (
        <div className='flex flex-col py-20 h-full'>
            <div className="h-20 w-full bg-slate-200 rounded-lg flex justify-between items-center md:px-20 px-5 ">
                <h2 className='text-2xl md:text-4xl font-bold'>Contact</h2>
                <div className='flex'>
                    <Link to={"/"} className="text text-blue-600 mr-4 hover:underline">Home </Link>
                    <span className="text text-gray-600">{`>`} Contact Us</span>
                </div>
            </div>

            <div className="min py-14 bg-gradient-to-br from-neutral-100 to-slate-100 flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-4xl"
                >
                    <div className="flex flex-row md:flex-row items-center mb-8">
                        <FaChair className="text-5xl md:text-5xl text-violet-600 mr-4" />
                        <h1 className="text-3xl font-bold text-violet-600">CleanTips Services</h1>
                    </div>
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/2">
                            <h2 className="text-2xl text-gray-700 font-semibold mb-4">Contact Us</h2>
                            <p className="text-gray-600 mb-4">
                                Get in touch with us for top-notch cleaning services. We're here to make your space sparkle!
                            </p>
                            <div className="flex items-center mb-4">
                                <FaHandSparkles className="text-violet-600 mr-2" />
                                <span className="text-gray-700">Professional cleaning</span>
                            </div>
                            <div className="flex items-center mb-4">
                                <FaHandSparkles className="text-violet-600 mr-2" />
                                <span className="text-gray-700">Flexible scheduling</span>
                            </div>
                            <div className="flex items-center">
                                <FaHandSparkles className="text-violet-600 mr-2" />
                                <span className="text-gray-700">Eco-friendly products</span>
                            </div>
                            <h2 className="text-2xl text-gray-700 font-semibold mt-5 mb-5">Social Networks</h2>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }} animate={controls} custom={0}
                                className="flex space-x-8 mb-10 md:mb-0"
                            >
                                <FaYoutube className="text-3xl text-red-600 hover:text-red-700 transition-colors" />
                                <FaTiktok className="text-3xl text-black hover:text-gray-800 transition-colors" />
                                <FaFacebook className="text-3xl text-blue-600 hover:text-blue-700 transition-colors" />
                                <FaInstagram className="text-3xl text-pink-600 hover:text-pink-700 transition-colors" />
                            </motion.div>
                        </div>
                        <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="md:w-1/2 space-y-4">
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={controls} custom={0}>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaUser className="text-gray-400" />
                                    </div>
                                    <input
                                        {...register('name', { required: 'Name is required' })}
                                        id="name"
                                        className="block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-violet-600 focus:border-violet-600"
                                        placeholder="Joseph De leon"
                                    />
                                </div>
                                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
                            </motion.div>
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={controls} custom={1}>
                                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaPhone className="text-gray-400" />
                                    </div>
                                    <input
                                        {...register('phoneNumber', { required: 'Phone number is required' })}
                                        id="phoneNumber"
                                        className="block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-violet-600 focus:border-violet-600"
                                        placeholder="(+63) 9xxx-xxx-xxxx"
                                    />
                                </div>
                                {errors.phoneNumber && <p className="mt-1 text-sm text-red-600">{errors.phoneNumber.message}</p>}
                            </motion.div>
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={controls} custom={2}>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaEnvelope className="text-gray-400" />
                                    </div>
                                    <input
                                        {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
                                        id="email"
                                        type="email"
                                        className="block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-violet-600 focus:border-violet-600"
                                        placeholder="joseph@example.com"
                                    />
                                </div>
                                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                            </motion.div>
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={controls} custom={3}>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <div className="absolute inset-y-0 left-0 pl-3 pt-3 flex items-start pointer-events-none">
                                        <FaComments className="text-gray-400" />
                                    </div>
                                    <textarea
                                        {...register('message', { required: 'Message is required' })}
                                        id="message"
                                        rows={4}
                                        className="block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-violet-600 focus:border-violet-600"
                                        placeholder="Tell us about your cleaning needs..."
                                    ></textarea>
                                </div>
                                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
                            </motion.div>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-600"
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ContactPage;