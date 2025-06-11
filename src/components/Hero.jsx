import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
  const contentSlides = [
    { id: 'promo1', title: 'SAMPLE IMAGE SAMPLE', image: assets.black_img },
    { id: 'promo2', title: '15% OFF', subtitle: 'New Release', cta: 'Shop Now', image: assets.black_img },
    { id: 'promo3', title: 'Trending Now', subtitle: 'Fresh Collection', cta: 'Discover', image: assets.black_img },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const triggerFadeAndChange = (directionFn) => {
    setFade(true);
    setTimeout(() => {
      directionFn();
      setFade(false);
    }, 500);
  };

  const prevSlide = () => {
    triggerFadeAndChange(() =>
      setCurrentIndex((prev) => (prev === 0 ? contentSlides.length - 1 : prev - 1))
    );
  };

  const nextSlide = () => {
    triggerFadeAndChange(() =>
      setCurrentIndex((prev) => (prev === contentSlides.length - 1 ? 0 : prev + 1))
    );
  };

  const currentContent = contentSlides[currentIndex];

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 639px)');
    let intervalId;

    if (mediaQuery.matches) {
      intervalId = setInterval(() => {
        triggerFadeAndChange(() =>
          setCurrentIndex((prev) => (prev === contentSlides.length - 1 ? 0 : prev + 1))
        );
      }, 5000);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  return (
    <div 
      className={`relative w-full h-[600px] sm:h-[700px] border border-gray-400 cursor-pointer transition-opacity duration-300 ${fade ? 'opacity-0' : 'opacity-100'}`}
      style={{
        backgroundImage: `url(${currentContent.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <img
        src={assets.dropdown_icon}
        alt="Left Icon"
        className="hidden sm:block absolute left-10 top-2 sm:top-1/2 sm:-translate-y-1/2 rotate-180 z-10 cursor-pointer"
        onClick={(e) => { e.preventDefault(); prevSlide() }}
      />
      <img
        src={assets.dropdown_icon}
        alt="Right Icon"
        className="hidden sm:block absolute right-10 top-2 sm:top-1/2 sm:-translate-y-1/2 z-10 cursor-pointer"
        onClick={(e) => { e.preventDefault(); nextSlide() }}
      />
      <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-center items-center text-center text-white px-6">
        <h2 className="text-[50px] sm:text-[100px] font-bold leading-tight">{currentContent.title}</h2>
        {currentContent.subtitle && (
          <p className="text-[24px] sm:text-[36px] my-4">{currentContent.subtitle}</p>
        )}
        {currentContent.cta && (
          <button className="bg-transparent text-white border-2 border-white px-6 py-3 uppercase mt-6 transition-colors duration-300 hover:bg-black hover:text-white hover:border-transparent">
            {currentContent.cta}
          </button>
        )}
      </div>
    </div>
  );
};

export default Hero;
