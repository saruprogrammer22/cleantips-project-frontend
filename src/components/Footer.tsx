import { FaLocationArrow, FaPhoneAlt, FaEnvelope, FaClock, FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    // GSAP Animation Hook
    const useGsapAnimation = (ref: React.RefObject<HTMLDivElement>) => {
        useEffect(() => {
            gsap.from(ref.current, { opacity: 0, y: 20, duration: 1, ease: 'power2.out' });
        }, [ref]);
    };

    const footerRef = useRef<HTMLDivElement>(null);
    useGsapAnimation(footerRef);

    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* About Us Section */}
                    <motion.div
                        className="transition-transform transform hover:scale-105"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}>
                        <h2 className="text-xl font-semibold mb-4 text-violet-600">About Us</h2>
                        <p className="text-gray-600">
                            Founded in 2024, Clean Tips offers top-notch cleaning services across the Philippines.
                        </p>
                    </motion.div>

                    {/* Our Services Section */}
                    <motion.div
                        className="transition-transform transform hover:scale-105"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}>
                        <h2 className="text-xl font-semibold mb-4 text-violet-600">Our Services</h2>
                        <Link to={"/services"}>
                            <ul className="space-y-2">
                                {['Residential & Condo Cleaning', 'Commercial Space Cleaning', 'Post-Construction Cleaning', 'Sanitation & Disinfection', 'Carpet & Upholstery Cleaning', 'Pest Control', 'Aircon Services', 'Grass Cutting', 'Hauling', 'Exterior Building Cleaning', 'Other Services', 'Manpower Services'].map(service => (
                                    <li key={service}><a href="#" className="hover:text-violet-300">{service}</a></li>
                                ))}
                            </ul>
                        </Link>
                    </motion.div>

                    {/* Latest Posts Section */}
                    <motion.div
                        className="transition-transform transform hover:scale-105"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}>
                        <h2 className="text-xl font-semibold mb-4 text-violet-600">Latest Posts</h2>
                        <Link to={"/blog"}>
                            <ul className="space-y-2">
                                {[
                                    { title: 'Why is it Important to Keep your Space Clean and Safe?', date: 'July 09, 2024' },
                                    { title: 'Hiring a Professional Cleaning Service', date: 'July 09, 2024' }
                                ].map(post => (
                                    <li key={post.title}><span className="hover:text-violet-300">{post.title}<br /><span className="text-sm text-gray-600">{post.date}</span></span></li>
                                ))}
                            </ul>
                        </Link>
                    </motion.div>

                    {/* Contact Info Section */}
                    <motion.div
                        className="transition-transform transform hover:scale-105"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}>
                        <h2 className="text-xl font-semibold mb-4 text-violet-600">Contact Info</h2>
                        <ul className="space-y-2">
                            <li className="flex items-center mb-2">
                                <FaLocationArrow className="mr-2 text-xl text-violet-600" />
                                <span>469 Address Avenue, Novaliches, Quezon City 1117 Quezon city, Philippines</span>
                            </li>
                            <li className="flex items-center mb-2">
                                <FaPhoneAlt className="mr-2 text-xl text-violet-600" />
                                <span>09424242442</span>
                            </li>
                            <li className="flex items-center mb-2">
                                <FaEnvelope className="mr-2 text-xl text-violet-600" />
                                <span>cleantips@gmail.com.ph</span>
                            </li>
                            <li className="flex items-center">
                                <FaClock className="mr-2 text-xl text-violet-600" />
                                <span>Always Open</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* Social Media Links */}
                <div className="text-center mt-8">
                    <div className="flex justify-center space-x-4 mb-6">
                        <a title='social-links' href="https://www.facebook.com/CleanTipsServices" className="text-gray-300 hover:text-blue-600"><FaFacebookF className="text-xl" /></a>
                        <a title='social-links' href="#" className="text-gray-300 hover:text-red-6
                            00"><FaYoutube className="text-xl" /></a>
                        <a title='social-links' href="#" className="text-gray-300 hover:text-pink-600"><FaInstagram className="text-xl" /></a>
                        <a title='social-links' href="#" className="text-gray-300 hover:text-blue-600"><FaTiktok className="text-xl" /></a>
                    </div>
                    <p className="text-gray-600 text-sm">
                        &copy; {new Date().getFullYear()} <span className='text-gray-300'>"CleanTips Service PH"</span>. All Rights Reserved. by <span className='text-rose-600'>JosephDatDev22</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
