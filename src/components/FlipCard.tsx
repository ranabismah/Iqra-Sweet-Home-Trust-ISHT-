'use client';

import React, { useState, useEffect } from 'react';

const HeroCarousel: React.FC = () => {
  const images = [
    '/initiatives.JPG',
    '/mr.JPG',
    '/achive.JPG',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  // Handle Next button click
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Handle Previous button click
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Hero Section with all images inside a flex container */}
      <div
        className="absolute top-0 left-0 w-full h-full flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            {/* Container for each image */}
            <div className="w-full h-full flex justify-center items-center">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="object-contain w-full h-full" 
              />
            </div>
          </div>
        ))}
      </div>

      {/* Left and Right Navigation Buttons - Positioned on the image */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-4 rounded-full hover:bg-opacity-70 transition duration-300"
      >
        &lt;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-4 rounded-full hover:bg-opacity-70 transition duration-300"
      >
        &gt;
      </button>
    </div>
  );
};

export default HeroCarousel;


