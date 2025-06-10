import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  const contentSlides = [
    {
      id: 'sample',
      title: 'SAMPLE IMAGE SAMPLE',
    },
    {
      id: 'promo1',
      title: '15% OFF',
      subtitle: 'New Release',
      cta: 'Shop Now',
    },
    {
      id: 'promo2',
      title: 'Trending Now',
      subtitle: 'Fresh Collection',
      cta: 'Discover',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? contentSlides.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === contentSlides.length - 1 ? 0 : prev + 1))
  }

  const currentContent = contentSlides[currentIndex]
  const isSampleSlide = currentContent.id === 'sample'

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 639px)')
    let intervalId

    if (mediaQuery.matches) {
        intervalId = setInterval(() => {
        nextSlide()
        }, 5000)
    }

    return () => {
        if (intervalId) clearInterval(intervalId)
    }
    }, [currentIndex])

  return (
    <div className='relative flex flex-col sm:flex-row border border-gray-400 cursor-pointer'>
    <img
        src={assets.dropdown_icon}
        alt="Left Icon"
        className="hidden sm:block absolute left-10 top-2 sm:top-1/2 sm:-translate-y-1/2 rotate-180 z-10 cursor-pointer"
        onClick={(e) => {
            e.preventDefault()
            prevSlide()
        }}
    />
    <img
        src={assets.dropdown_icon}
        alt="Right Icon"
        className="hidden sm:block absolute right-10 top-2 sm:top-1/2 sm:-translate-y-1/2 z-10 cursor-pointer"
        onClick={(e) => {
            e.preventDefault()
            nextSlide()
        }}
    />

    {isSampleSlide ? (
        <>
        {/* Left Hero Side for sample */}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
            <div className='text-[#414141]'>
            <div className='flex items-center gap-2'>
                <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                <p className='font-medium text-sm md:text-base'>OUR BEST SELLERS</p>
            </div>
            <h1 className='text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
            <div className='flex items-center gap-2'>
                <p className='font-semibold text-sm md:text-base'>SHOW NOW</p>
                <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
            </div>
            </div>
        </div>

        {/* Right Hero Side for sample */}
        <div className="sm:w-1/2 flex items-center justify-center text-center px-6 py-10">
            <h2 className="text-[80px] sm:text-[150px] text-gray-700 leading-none">
                {currentContent.title}
            </h2>
        </div>
        </>
    ) : (
        <div className="w-full flex items-center justify-center text-center px-6 py-20">
            <div className="flex flex-col items-center justify-center gap-4">
                <h2 className="text-[60px] sm:text-[100px] text-gray-700 leading-none">
                    {currentContent.title}
                </h2>
                <p className="text-[32px] sm:text-[48px] text-gray-700 leading-tight">
                    {currentContent.subtitle}
                </p>
                <button
                className="
                    bg-transparent
                    text-black
                    border-2 border-black
                    px-5 py-3
                    uppercase
                    mt-10
                    transition-colors duration-600 ease-in-out
                    hover:bg-black
                    hover:text-white
                "
                >
                {currentContent.cta}
                </button>
            </div>
        </div>
    )}
    </div>
  )
}

export default Hero
