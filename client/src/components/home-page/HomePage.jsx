import React from "react";
import './HomePage.scss';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import carousal1 from '../../assets/carousal-1.jpg';
import carousal2 from '../../assets/carousal-2.jpg';
import singleBanner from '../../assets/banner-single.jpg';
import movieCard from '../../assets/moviecard.jpg';

const HomePage = () => {

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
                    <img src={singleBanner} />
                </div>
                <div className="section-two">
                    <span className="recommented-movies">Recommented Movies</span>
                    <div className="movie-cards">
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
                </div>
            </div>
            <Footer/>
        </>
        
    )
}

export default HomePage;