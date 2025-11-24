'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';


export default function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: '/img/show1.jpg',
      alt: 'Community empowerment',
    },
    {
      id: 2,
      image: '/img/show2.jpg',
      alt: 'Refugee support',
    },
    {
      id: 3,
      image: '/img/show3.jpg',
      alt: 'Hope and healing',
    },
    {
      id: 4,
      image: '/img/show4.jpg',
      alt: 'Community building',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden pt-16 md:pt-20">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === activeSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${slide.image}')`,
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>
      ))}

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="container-custom text-center text-white z-10 px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 animate-fade-in">
            Together We Rebuild
          </h1>
          <p className="text-lg md:text-2xl text-gray-100 mb-8 md:mb-12 max-w-3xl mx-auto animate-fade-in"
            style={{ animationDelay: '0.2s' }}>
            Supporting, empowering, and uplifting refugees to rebuild their lives with dignity, security, and opportunity.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
            style={{ animationDelay: '0.4s' }}>
            <Link href="/donate" className="btn-primary text-lg px-8 py-4">
              Donate Now
            </Link>
            <Link href="/programs" className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white/10">
              Learn About Our Work
            </Link>
            <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
              Partner With Us
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow z-20">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 right-8 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === activeSlide ? 'bg-white w-8' : 'bg-white/50 w-2'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
