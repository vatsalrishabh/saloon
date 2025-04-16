"use client";
import Image from "next/image";
import heroone from "../../public/assets/heroone.jpg";
import { useState, useEffect } from "react";
import "animate.css";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState("right"); // 'left' or 'right'
  const imagesLink = [heroone, heroone, heroone, heroone];

  const nextSlide = () => {
    setDirection("right");
    setCurrentSlide((prev) => (prev + 1) % imagesLink.length);
  };

  const prevSlide = () => {
    setDirection("left");
    setCurrentSlide((prev) =>
      prev === 0 ? imagesLink.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection("right"); // autoplay always right
      setCurrentSlide((prev) => (prev + 1) % imagesLink.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getAnimationClass = () => {
    return direction === "left"
      ? "animate__animated animate__fadeInLeft"
      : "animate__animated animate__fadeInRight";
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative h-[70vh] w-full">
        {imagesLink.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? "opacity-100 z-20" : "opacity-0 z-10"
            }`}
          >
            {index === currentSlide && (
              <Image
                src={img}
                alt={`Slide ${index}`}
                fill
                sizes="100vw"
                priority
                className={`object-cover h-[70vh] w-full ${getAnimationClass()}`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute z-30 flex gap-3 bottom-5 left-1/2 -translate-x-1/2">
        {imagesLink.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => {
              setDirection(index < currentSlide ? "left" : "right");
              setCurrentSlide(index);
            }}
          ></button>
        ))}
      </div>

      {/* Prev/Next */}
      <button
        onClick={prevSlide}
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 group"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 bg-white/30 rounded-full group-hover:bg-white/50">
          <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 6 10">
            <path d="M5 1L1 5l4 4" stroke="currentColor" strokeWidth="2" />
          </svg>
        </span>
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 group"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 bg-white/30 rounded-full group-hover:bg-white/50">
          <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 6 10">
            <path d="M1 9l4-4-4-4" stroke="currentColor" strokeWidth="2" />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default HeroSlider;
