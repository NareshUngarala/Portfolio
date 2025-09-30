'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-dark text-light fixed w-full z-10 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Touhidul Islam Chayan</Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden flex items-center" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <Link href="/about" className="hover:text-accent transition-colors">About</Link>
          <Link href="/projects" className="hover:text-accent transition-colors">Projects</Link>
          <Link href="/skills" className="hover:text-accent transition-colors">Skills</Link>
          <Link href="/testimonials" className="hover:text-accent transition-colors">Testimonials</Link>
          <Link href="/resume" className="hover:text-accent transition-colors">Resume</Link>
          <Link href="/contact" className="hover:text-accent transition-colors">Contact</Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-dark`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className="block px-3 py-2 hover:bg-primary hover:text-accent rounded-md">Home</Link>
          <Link href="/about" className="block px-3 py-2 hover:bg-primary hover:text-accent rounded-md">About</Link>
          <Link href="/projects" className="block px-3 py-2 hover:bg-primary hover:text-accent rounded-md">Projects</Link>
          <Link href="/skills" className="block px-3 py-2 hover:bg-primary hover:text-accent rounded-md">Skills</Link>
          <Link href="/testimonials" className="block px-3 py-2 hover:bg-primary hover:text-accent rounded-md">Testimonials</Link>
          <Link href="/resume" className="block px-3 py-2 hover:bg-primary hover:text-accent rounded-md">Resume</Link>
          <Link href="/contact" className="block px-3 py-2 hover:bg-primary hover:text-accent rounded-md">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;