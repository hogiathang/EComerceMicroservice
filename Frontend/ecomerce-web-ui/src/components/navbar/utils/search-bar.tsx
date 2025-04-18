'use client';
import Image from 'next/image';
import { useState } from 'react';
import searchImage from '@images/search.svg';


export const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Searching for:', searchQuery);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="relative w-full max-w-xl mx-auto"
        >
            <div className="relative flex items-center">
                <input
                    type="text"
                    placeholder="What do you want to search?"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full py-2 pl-4 pr-10 text-sm bg-white border border-gray-300 rounded-lg 
                               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                               transition-all duration-200 text-black"
                />
                <button
                    type="submit"
                    className="absolute right-3 p-1 text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="Search"
                >
                    <Image
                        src={searchImage}
                        alt="Search Icon"
                        width={20}
                        height={20}
                        className="w-5 h-5"
                    />
                </button>
            </div>
        </form>
    );
};