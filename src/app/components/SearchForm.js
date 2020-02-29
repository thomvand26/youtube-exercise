import React, { useState, useContext } from 'react';
import { SearchContext } from '../context/';

import './SearchForm.css';

const SearchForm = () => {
    const [query, setQuery] = useState('');

    const { search } = useContext(SearchContext);

    const updateQuery = (ev) => {
        setQuery(ev.target.value);
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();
        search(query);
    }

    return (
        <form className="searchForm" onSubmit={handleSubmit}>
            <input type="text" className="searchForm__input" onChange={updateQuery} />
            <button type="submit" className="searchForm__button">Search</button>
        </form>
    );
};

export default SearchForm;