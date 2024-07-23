import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Slider } from "@/components/ui/slider";
import { FaHome, FaBuilding, FaTools } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import BookingFormSubmit from '@/components/BookingFormSubmit';

const CostCalculatorPage = () => {
    const [area, setArea] = useState(35);
    const [selectedService, setSelectedService] = useState('residential');

    const calculateCost = () => {
        const baseCost = {
            residential: 67.2,
            commercial: 89.6,
            'post-construction': 112
        }[selectedService];
        if (!baseCost) {
            return;
        } else {
            return (baseCost * area).toFixed(2);
        }
    };

    {/*Automatically Scroll up */ }
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);



    return (
        <div className='flex flex-col py-20 h-full'>
            <div className="h-20 w-full bg-slate-200 rounded-lg flex justify-between items-center md:px-20 px-5 gap-3">
                <h2 className='text-2xl md:text-4xl font-bold'>Cost Calculator</h2>
                <div className='flex flex-col'>
                    <Link to={"/"} className="text text-violet-600 mr-4 hover:underline">Home </Link>
                    <span className="text text-gray-600">{`>`} Cost Calculator</span>
                </div>
            </div>
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-neutral-100 p-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-md bg-white rounded-2xl shadow-xl p-4 md:p-8  space-y-6"
                >
                    <h2 className="text-3xl font-bold text-center text-gray-800">Cost Calculator</h2>

                    <div className="space-y-4">
                        <label className="block text-sm font-medium text-gray-700">Area to clean (m²)</label>
                        <Slider
                            value={[area]}
                            onValueChange={(value) => setArea(value[0])}
                            max={100}
                            min={35}
                            step={1}
                            className="w-full"
                        />
                        <div className="text-center text-2xl font-bold text-violet-600">{area} m²</div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 md:gap-4">
                        {['residential', 'commercial', 'post-construction'].map((service) => (
                            <motion.button
                                key={service}
                                onClick={() => setSelectedService(service)}
                                className={`p-3 rounded-lg transition-colors ${selectedService === service ? 'bg-violet-500 text-white' : 'bg-gray-100 text-gray-800'
                                    }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {service === 'residential' && <FaHome className="mx-auto text-2xl mb-1" />}
                                {service === 'commercial' && <FaBuilding className="mx-auto text-2xl mb-1" />}
                                {service === 'post-construction' && <FaTools className="mx-auto text-2xl mb-1" />}
                                <span className="text-xs capitalize">{service.replace('-', ' ')}</span>
                            </motion.button>
                        ))}
                    </div>

                    <motion.div
                        className="bg-violet-500 p-6 rounded-xl text-center text-white"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                        <span className="block text-sm mb-1">Estimated Cost</span>
                        <span className="text-4xl font-bold">₱{calculateCost()}</span>
                    </motion.div>

                    <div className='flex justify-center'>
                        <BookingFormSubmit title='Book a schedule now!' />
                    </div>
                    <p className="text-xs text-gray-500 text-center">
                        {/* For example: "Prices include VAT. Discounts available for large areas." */}
                        [Your pricing information or terms go here]
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default CostCalculatorPage;