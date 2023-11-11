import { useState } from 'react';
import './SearchBox.scss';

const SearchBox = () => {
    const [searchValue,setSearchValue] = useState('');

    const changeSearchValue = (e) => {
        e.preventDefault();
        setSearchValue(e.target.value);
    }
    return (
        <div className='search-box'>
            <input placeholder='Search for Movies, Events, Plays, Sports and Activities' value={searchValue} onChange={changeSearchValue}/>
        </div>
    )
}

export default SearchBox;
