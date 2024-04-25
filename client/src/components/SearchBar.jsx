import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import './SearchBar.css';

function SearchBar({ onSearch }) {
    const [searchWord, setSearchWord] = useState('');
    const handleInputChange = (event) => {
        setSearchWord(event.target.value);
        onSearch(event.target.value);
    }

    return (
        <div className="search-bar-container">
            <input
                type="text"
                className="search-bar"
                placeholder="Search for items..."
                value={searchWord}
                onChange={handleInputChange}/>
            <FaSearch className="search-bar-icon"/>
        </div>
    )
};

export default SearchBar;