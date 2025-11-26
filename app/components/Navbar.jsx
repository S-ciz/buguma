'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';



import GoogleTranslate from "./Translator"
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/programs', label: 'Programs' },
    { href: '/donate', label: 'Donate' },
    { href: '/contact', label: 'Contact' },
  ];

  return (

    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg'
          : 'bg-transparent'
      }`}
    >  

      <div className="container-custom">

        <div className="bg-red-700 h-[0px] hidden z-10 text-[0] text-[0px]">
      <GoogleTranslate />
    </div>
        <div className="flex items-center md:gap-0 gap-3 justify-between h-16 md:h-20 h-[7rem] mt-[5rem]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-2xl group">
            {/* <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">
              B
            </div> */}
            <div>
             <Image className='w-auto h md:w-[150px] md:h-[150px] object-cover rounded-[50%] w-auto] h-auto' width={150} height={150} alt='logo' src={"/img/logo.png"}/>
            </div>
            <span className={`text-primary-700 lg:text-[1.5rem] text-[1rem] transition-colors duration-300 ${isScrolled ? 'text-primary-700' : 'text-white'}`}>
              BUGUMA SOUTH AFRICA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors duration-300 hover:text-primary-500 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <Link href="/donate" className="hidden md:block btn-primary text-sm">
            Donate Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t animate-slide-down">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-2 text-gray-700 hover:text-primary-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/donate"
                className="block px-4 py-2 text-center text-white bg-primary-500 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Donate Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
