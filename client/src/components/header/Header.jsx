import './Header.scss';
import SearchBox from '../searchbox/SearchBox';
import BMSIcon from '../../assets/bms-main-logo.png';
import Button from '../button/Button';
import { useState } from 'react';

const Header = () => {

    const [city , setCity] = useState('');

    const options = [
        "Bangalore",
        "Hyderabad",
        "Delhi",
        "Mumbai",
        "Cochin",
    ];

    const onOptionChangeHandler = (event) => {
        setCity(event.target.value);
    };

    return (
        <div className='header'>
            <div className='header-left'>
                <img className='logo' src={BMSIcon}/>
                <SearchBox />
            </div>            
            <div className='header-right'>
                <div>
                    <select onChange={onOptionChangeHandler} className='dropdown'>
                        <option>Please select city</option>
                        {options.map((option, index) => {
                            return (
                                <option key={index}>
                                    {option}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div>                    
                    <Button value="Sign In"/>
                </div>                 
                <div>
                <i class="fa-solid fa-bars fa-lg" style={{color: '#ffffff'}}></i>
                </div>
            </div>
        </div>
    )
}

export default Header;