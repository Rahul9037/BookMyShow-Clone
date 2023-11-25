import React, { useRef, useState } from "react";
import './HomePage.scss';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import carousal1 from '../../assets/carousal-1.jpg';
import carousal2 from '../../assets/carousal-2.jpg';
import singleBanner from '../../assets/banner-single.jpg';
import movieCard from '../../assets/moviecard.jpg';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const HomePage = () => {

    const elementRef = useRef(null);
    const [rightArrowEnabled,setRightArrowEnabled] = useState(true);
    const [leftArrowEnabled,setLeftArrowEnabled] = useState(false);

    const navLeft = [
        'Movie',
        'Stream',
        'Events',
        'Plays',
        'Sports',
        'Activities',
        'Buzz'
    ]
    const navRight = [
        'List Your Show',
        'Corporates',
        'Offers',
        'Gift Cards'
    ]

    const handleHorizontalScroll = (element, speed, distance, step) => {
        let scrollAmount = 0;
        let slideTimer = setInterval(() => {
            element.scrollLeft += step;
            scrollAmount += Math.abs(step);
            if(scrollAmount >= distance){
                clearInterval(slideTimer);
            }
            if(element.scrollLeft === 0){
                setLeftArrowEnabled(false);
            }
            else{
                setLeftArrowEnabled(true);
            }
            if(element.offsetWidth + element.scrollLeft >= element.scrollWidth - 5){
                setRightArrowEnabled(false);
            }
            else{
                setRightArrowEnabled(true);
            }
        }, speed)
    }

    return(
        <>
            <Header/>
            <div className="homepage">
                <div className="navigation-links">
                    <div className="navigation-left">
                        {navLeft.map(nav => (
                            <span>{nav}</span>
                        ))}
                    </div>
                    <div className="navigation-right">
                        {navRight.map(nav => (
                                <span>{nav}</span>
                        ))}
                    </div>
                </div>
                <Carousel showStatus={false} showThumbs={false}>
                    <div>
                        <img src={carousal1} />
                    </div>
                    <div>
                        <img src={carousal2} />
                    </div>
                </Carousel>
                <div className="single-banner">
                    <img src={singleBanner} alt={singleBanner}/>
                </div>
                <div className="section">
                    <span className="recommented-movies">Recommented Movies</span>
                    <div className="movie-cards" ref={elementRef}>
                        <div className="movie-card-wrapper">
                            <div className="movie-card">
                                <img src={movieCard}/>
                                <div className="card-bottom">
                                    <div className="rating">
                                        <i class="fa-solid fa-star" style={{color: '#e60f0f'}}></i>
                                        <span>8.9/10</span>
                                    </div>                                
                                    <span>15.2K Votes</span>
                                </div>
                            </div>
                            <div className="movie-card-bottom">
                                    <span className="movie-name">Jigarthanda Double X</span>
                                    <span className="movie-genre">Action/Comedy/Period</span>
                            </div>
                        </div>
                        <div className="movie-card-wrapper">
                            <div className="movie-card">
                                <img src={movieCard}/>
                                <div className="card-bottom">
                                    <div className="rating">
                                        <i class="fa-solid fa-star" style={{color: '#e60f0f'}}></i>
                                        <span>8.9/10</span>
                                    </div>                                
                                    <span>15.2K Votes</span>
                                </div>
                            </div>
                            <div className="movie-card-bottom">
                                    <span className="movie-name">Jigarthanda Double X</span>
                                    <span className="movie-genre">Action/Comedy/Period</span>
                            </div>
                        </div>
                        <div className="movie-card-wrapper">
                            <div className="movie-card">
                                <img src={movieCard}/>
                                <div className="card-bottom">
                                    <div className="rating">
                                        <i class="fa-solid fa-star" style={{color: '#e60f0f'}}></i>
                                        <span>8.9/10</span>
                                    </div>                                
                                    <span>15.2K Votes</span>
                                </div>
                            </div>
                            <div className="movie-card-bottom">
                                    <span className="movie-name">Jigarthanda Double X</span>
                                    <span className="movie-genre">Action/Comedy/Period</span>
                            </div>
                        </div>
                        <div className="movie-card-wrapper">
                            <div className="movie-card">
                                <img src={movieCard}/>
                                <div className="card-bottom">
                                    <div className="rating">
                                        <i class="fa-solid fa-star" style={{color: '#e60f0f'}}></i>
                                        <span>8.9/10</span>
                                    </div>                                
                                    <span>15.2K Votes</span>
                                </div>
                            </div>
                            <div className="movie-card-bottom">
                                    <span className="movie-name">Jigarthanda Double X</span>
                                    <span className="movie-genre">Action/Comedy/Period</span>
                            </div>
                        </div>                        
                    </div>
                    <div className="scroll-button-wrapper">
                        {leftArrowEnabled && 
                            <div className="left-button" onClick={() => handleHorizontalScroll(elementRef.current , 25 , 1000 , -100)}>
                                <NavigateBeforeIcon fontSize="large"/>
                            </div>
                        }
                        {rightArrowEnabled && 
                            <div className="right-button" onClick={() => handleHorizontalScroll(elementRef.current , 25 , 1000 , 100)}>
                            <NavigateNextIcon fontSize="large"/>
                            </div>
                        }
                    </div>
                </div>
                <div className="single-banner margin-top">
                    <img src={singleBanner} alt={singleBanner}/>
                </div>
                <div className="section">
                    <span className="recommented-movies">The Best Of Live Events</span>
                    <div className="live-event-list">
                        <div className="live-event-item">
                            <div className="heading">WorkShops & More</div>
                            <div className="sub-text">150+ Events</div>
                        </div>
                        <div className="live-event-item">
                            <div className="heading">WorkShops & More</div>
                            <div className="sub-text">150+ Events</div>
                        </div>
                        <div className="live-event-item">
                            <div className="heading">WorkShops & More</div>
                            <div className="sub-text">150+ Events</div>
                        </div>
                        <div className="live-event-item">
                            <div className="heading">WorkShops & More</div>
                            <div className="sub-text">150+ Events</div>
                        </div>
                        <div className="live-event-item">
                            <div className="heading">WorkShops & More</div>
                            <div className="sub-text">150+ Events</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
        
    )
}

export default HomePage;