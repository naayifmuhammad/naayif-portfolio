import React, { useState, useEffect } from 'react';
import './ImageSlider.css'; 
import { Image } from 'react-bootstrap';

const ImageSlider = ({ imageUrls, transitionSpeed }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % imageUrls.length);
    }, transitionSpeed);

    return () => clearInterval(interval);
  }, [currentSlide, imageUrls.length, transitionSpeed]);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % imageUrls.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + imageUrls.length) % imageUrls.length);
  };

  return (
    <div className="slideshow-container">
      <div className="slide">
      <Image
          src={imageUrls[currentSlide]}
          alt={`Slide ${currentSlide}`}
          className="custom-image-class"
          fluid
        />
      </div>
      {/* <button onClick={prevSlide}>Previous</button>
      <button onClick={nextSlide}>Next</button> */}
    </div>
  );
};

export default ImageSlider;
