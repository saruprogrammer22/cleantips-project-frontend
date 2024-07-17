
import { FaLocationArrow, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between gap-5">
                    <div className="mb-6 md:mb-0 w-[260px]">
                        <h2 className="text-xl font-bold mb-4">About Us</h2>
                        <p>
                            Founded in 2019, Anytime Cleaners is one of the leading professional cleaning
                            service providers and janitorial agencies in the Philippines with a solid
                            foundation, systems, tools, and the best practices in the industry.
                        </p>
                    </div>
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-xl font-bold mb-4">Our Services</h2>
                        <ul>
                            <li>
                                <a href="#" className="hover:text-gray-500">
                                    Residential & Condo Cleaning
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-500">
                                    Commercial Space Cleaning
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-500">
                                    Post-Construction Cleaning
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-500">
                                    Sanitation & Disinfection
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-500">
                                    Carpet & Upholstery Cleaning
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-500">
                                    Pest Control
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-500">
                                    Aircon Services
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-500">
                                    Grass Cutting
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-500">
                                    Hauling
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-500">
                                    Exterior Building Cleaning
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-500">
                                    Other Services
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-500">
                                    Manpower Services
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-xl font-bold mb-4">Latest Posts</h2>
                        <ul>
                            <li>
                                <a href="#" className="hover:text-gray-500">
                                    Why is it Important to Keep your Space Clean and Safe?
                                    <br />
                                    <span className="text-sm text-gray-400">November 15, 2021</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-500">
                                    Hiring a Professional Cleaning Services
                                    <br />
                                    <span className="text-sm text-gray-400">November 15, 2021</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-xl font-bold mb-4">Contact Info</h2>
                        <ul>
                            <li className="flex items-center mb-2">
                                <FaLocationArrow className="mr-2" />
                                <span>
                                    469 Dr. Sixto Antonio Avenue, Maybunga, Pasig City 1607 Pasig,
                                    Philippines
                                </span>
                            </li>
                            <li className="flex items-center mb-2">
                                <FaPhoneAlt className="mr-2" />
                                <span>09633262747</span>
                            </li>
                            <li className="flex items-center mb-2">
                                <FaEnvelope className="mr-2" />
                                <span>inquiries@anytimecleaners.ph</span>
                            </li>
                            <li className="flex items-center">
                                <FaClock className="mr-2" />
                                <span>Always Open</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <p className="text-gray-400 text-sm">
                        &copy; 2023 Anytime Cleaners. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
