import { Link } from 'react-router-dom';
import { FaBars, FaPhone } from 'react-icons/fa';
import { motion } from "framer-motion";
const Header = () => {
    return (
        <div className="bg-white shadow-md py-6">

            <div className="container mx-auto flex justify-between items-center">
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                    <Link to="/" className="flex items-center gap-2">
                        <FaPhone className="text-violet-600 text-lg" />
                        <span className="text-3xl font-bold tracking-tight text-violet-800">Clean Tips</span>
                    </Link>
                </motion.div>

                {/*Nav Links */}
                <motion.nav
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="hidden md:flex gap-4"
                >
                    <ul className="flex items-center gap-4">
                        <li>
                            <Link to="/services" className="text-gray-600 hover:text-violet-600 transition duration-300">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link to="/gallery" className="text-gray-600 hover:text-violet-600 transition duration-300">
                                Gallery
                            </Link>
                        </li>
                        <li>
                            <Link to="/blog" className="text-gray-600 hover:text-violet-600 transition duration-300">
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="text-gray-600 hover:text-violet-600 transition duration-300">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="text-gray-600 hover:text-violet-600 transition duration-300">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                    <motion.button
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className="bg-violet-600 hover:bg-violet-800 text-white font-bold py-2 px-4 rounded"
                    >
                        Get a Quote
                    </motion.button>
                </motion.nav>
                <button title='button' className="md:hidden flex justify-center w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full">
                    <FaBars className="text-lg text-gray-600" />
                </button>
            </div>
        </div>
    );
};

export default Header;