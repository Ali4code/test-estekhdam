
import img1 from '../imgs/1.png'
import img2 from '../imgs/2.png'
import img3 from '../imgs/3.png'
import  './Carousel.css'
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
            <div className='background'>
            <Carousel showThumbs={false}>
                <div>
                    <img src={img1} className = "slider-image"/>
                </div>
                <div>
                    <img src={img2} className = "slider-image" />
                </div>
                <div>
                    <img src={img3} className = "slider-image" />
                </div>
            </Carousel>
            </div>
        );
    }
};

export default DemoCarousel;
