import React from 'react';
import Carousel from 'react-material-ui-carousel';
import "./CarouselPhotos.css";

function CarouselPhotos({ items }) {
    return (
        <Carousel autoPlay animation="slide" indicators timeout={5000} className='carousel-photos-tab'>
            {items.map((item, index) => (
                <div key={index} className='carousel-item'>
                    {item.src ? (
                        <div className='carousel-content'>
                            <img src={item.src} alt={item.altText} className='carousel-image' />
                            <div className='carousel-text'>{item.text}</div>
                        </div>
                    ) : (
                        <div>{item.children}</div>
                    )}
                </div>
            ))}
        </Carousel>
    );
}

export default CarouselPhotos;
