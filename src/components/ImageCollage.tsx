import React from 'react';
import { motion } from 'framer-motion';

import aircon from '../assets/aircon.jpg';
import house from '../assets/sofa.jpg';
import sofa from '../assets/house.jpg';

const ImageCollage: React.FC = () => {


    return (
        <div className="grid grid-cols-2 gap-4">
            <motion.img
                src={aircon}
                alt="Cleaning Service 1"
                className="w-full h-full object-cover rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
            />
            <div className="grid gap-4">
                <motion.img
                    src={house}
                    alt="Cleaning Service 2"
                    className="w-full h-full object-cover rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                />
                <motion.img
                    src={sofa}
                    alt="Cleaning Service 3"
                    className="w-full h-full object-cover rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                />
            </div>
        </div>
    );
};

export default ImageCollage;