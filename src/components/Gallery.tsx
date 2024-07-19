// src/components/Gallery.tsx

import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import ReactPaginate from 'react-paginate';
import 'tailwindcss/tailwind.css';

const itemsPerPage = 9;

const images = [
    "https://via.placeholder.com/400x250?text=Project+1",
    "https://via.placeholder.com/400x250?text=Project+2",
    "https://via.placeholder.com/400x250?text=Project+3",
    "https://via.placeholder.com/400x250?text=Project+4",
    "https://via.placeholder.com/400x250?text=Project+5",
    "https://via.placeholder.com/400x250?text=Project+6",
    "https://via.placeholder.com/400x250?text=Project+7",
    "https://via.placeholder.com/400x250?text=Project+8",
    "https://via.placeholder.com/400x250?text=Project+9",
    "https://via.placeholder.com/400x250?text=Project+10",
    "https://via.placeholder.com/400x250?text=Project+11",
    "https://via.placeholder.com/400x250?text=Project+12",
    "https://via.placeholder.com/400x250?text=Project+13",
    "https://via.placeholder.com/400x250?text=Project+14",
    "https://via.placeholder.com/400x250?text=Project+15",
    "https://via.placeholder.com/400x250?text=Project+16",
    "https://via.placeholder.com/400x250?text=Project+17",
    "https://via.placeholder.com/400x250?text=Project+18",
];

const Gallery: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(0);

    const handlePageClick = (data: { selected: number }) => {
        setCurrentPage(data.selected);
    };

    const offset = currentPage * itemsPerPage;
    const currentPageData = images.slice(offset, offset + itemsPerPage);

    return (
        <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-extrabold text-center text-violet-700 mb-12">Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {currentPageData.map((image, index) => (
                        <div key={index} className="relative group bg-white rounded-lg shadow-lg overflow-hidden">
                            <img src={image} alt={`Project ${index + 1}`} className="w-full h-48 object-cover group-hover:opacity-75 transition-opacity duration-300" />
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-lg">
                                Project {index + 1}
                            </div>
                        </div>
                    ))}
                </div>
                <ReactPaginate
                    previousLabel={<FaArrowLeft />}
                    nextLabel={<FaArrowRight />}
                    breakLabel="..."
                    pageCount={Math.ceil(images.length / itemsPerPage)}
                    onPageChange={handlePageClick}
                    containerClassName="flex justify-center items-center space-x-4 mt-8"
                    pageClassName="px-4 py-2 bg-white border rounded"
                    activeClassName="bg-violet-500 text-white"
                    previousClassName="px-4 py-2 bg-white border rounded"
                    nextClassName="px-4 py-2 bg-white border rounded"
                    disabledClassName="opacity-50 cursor-not-allowed"
                />
            </div>
        </div>
    );
};

export default Gallery;
