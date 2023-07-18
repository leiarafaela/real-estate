import React from 'react';
import { BsSearch } from 'react-icons/bs';

import './SearchBar.css';

export const SearchBar = () => {

    return(
        <form className="search-bar" >
          <input type="search"
                  placeholder="O que você procura?"
                  className="search__input"
                  required
                />

          <button type="submit" className="search__button">
            <BsSearch/>
          </button>
        </form>
    );
};
