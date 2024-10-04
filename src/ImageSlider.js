import React, { useState, useEffect } from 'react';
import './ImageSlider.css'; // You can style it later
import data from './data.json';
import { useLocation } from 'react-router-dom';

const ImageSlider = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    
    const location=useLocation();
    const val = location.state;
    console.log("val",val);
    
    

    const searchValue=String(val).trim().toLowerCase();
    const item=data.find((d)=>d.imdbID===searchValue)
    const l=item.Images.length;
    console.log("item",item);
      
       
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % l);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % l);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - 1 + l) % l);
    };

   

    return (
        <div className="slider-container">
            <button className="arrow" onClick={handlePrev}>&lt;</button>


            {
                <div className="image-container">
                    <img src={item.Images[currentIndex]} alt='' />
                </div>
            }
    

                <div className="description1">
                    <div className='Dom'>
                        Directed By  : {item.Director}
                    </div>

                </div>
                <div className="description2">
                    <div className='Dom'>
                        Starred  : {item.Actors}
                    </div>

                </div>
            
            <button className="arrow" onClick={handleNext}>&gt;</button>
        </div>
    );
};

export default ImageSlider