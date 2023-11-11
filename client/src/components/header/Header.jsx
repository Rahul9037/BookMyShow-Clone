import './Header.scss';
import SearchBox from '../searchbox/SearchBox';
import BMSIcon from '../../assets/bms-main-logo.png';
import Button from '../button/Button';

const Header = () => {
    return (
        <div className='header'>
            <div className='header-left'>
                <img className='logo' src={BMSIcon}/>
                <SearchBox />
            </div>            
            <div className='header-right'>
                <div>
                    dropdown
                </div>
                <div>
                    <Button value="Sign In"/> 
                </div>
                <div>
                    hamburger
                </div>
            </div>
        </div>
    )
}

export default Header;