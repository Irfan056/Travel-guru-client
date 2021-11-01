import React from 'react';
import { Button, Carousel } from 'react-bootstrap';

import img from '../../images/banner.png'




const Banner = () => {
    return (
        <div className="h-75 mb-5 w-100%">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-50 "
                        src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsbGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-50"
                        src="https://i.ytimg.com/vi/BRdnToyeG-8/maxresdefault.jpg"
                        alt="Second slide"
                    />


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block  w-100 h-50"
                        src="https://i.ibb.co/jvc2JdS/slider-4.jpg"
                        alt="Third slide"
                    />


                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;