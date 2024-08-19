import React from 'react';
import searchIcon from '../../assets/search-interface-symbol.png';

const SearchBar = ({ placeholder, onChange, value, onSubmit }) => {
    return (
        <form
            className="flex items-center justify-center w-full"
            onSubmit={onSubmit}
        >
            <div className="relative w-full max-w-lg">
                <input
                    type="text"
                    className="block w-full h-8 pl-10 pr-4 text-gray-700 border rounded-lg focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                />
                <img
                    src={searchIcon}
                    alt="Search Icon"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                />
            </div>
        </form>
    );
};

export default SearchBar;
