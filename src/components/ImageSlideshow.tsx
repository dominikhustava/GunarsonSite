"use client"
import React, { useState } from 'react';
import Image from 'next/image';

interface Slide {
  id: number;
  imageUrl: string;
}

const slides: Slide[] = [
  { id: 1, imageUrl: '/slideshow_images/slide1.jpg' },
  { id: 2, imageUrl: '/slideshow_images/slide2.jpg' },
  { id: 3, imageUrl: '/slideshow_images/slide3.jpg' },
  // Add more images as needed
];

const ImageSlideshow: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    const deltaX = endX - startX;
    const threshold = 50; // Minimum swipe distance required to trigger slide change

    if (deltaX > threshold) {
      goToPrevSlide();
    } else if (deltaX < -threshold) {
      goToNextSlide();
    }
  };


  return (
    <div className="relative h-[50vh] sm:h-[65vh] lg:h-[70vh] md:mx-6 lg:mx-16 mb-8" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image src={slide.imageUrl} alt={`Slide ${slide.id}`} layout="fill" objectFit="cover" />
        </div>
      ))}
      <button
        className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-black bg-opacity-75 text-white rounded-full p-2"
        onClick={goToPrevSlide}
      >
        &lt;
      </button>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-black bg-opacity-75 text-white rounded-full p-2"
        onClick={goToNextSlide}
      >
        &gt;
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlideshow;