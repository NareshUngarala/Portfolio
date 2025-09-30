'use client';

import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import Image from 'next/image';

type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Masru Ahmed Rafi',
    role: 'CEO & Co-Founder',
    company: 'Tech Innovations Inc.',
    quote: 'Touhidul Islam Chayan has been employed by AI-ID and later on Bon Paris and as an AI engineer. He is a very talented and hardworking individual with a great passion for AI and machine learning.',
    image: '/profile.jpg', // Using placeholder image
  },
  {
    id: 2,
    name: 'Rayeean Shafikat',
    role: 'CTO & Co-Founder',
    company: 'Digital Solutions Ltd.',
    quote: 'This is to certify that Touhidul Islam Chayan, resident of 24/4 Green Road, Staff Quarter, Dhaka, has been working with us as a Software Engineer since January 2022.',
    image: '/profile.jpg', // Using placeholder image
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'Creative Web Agency',
    quote: 'Working with Touhidul was a pleasure. His attention to detail and ability to translate our vision into a functional and beautiful website exceeded our expectations.',
    image: '/profile.jpg', // Using placeholder image
  },
  {
    id: 4,
    name: 'Michael Chen',
    role: 'Lead Developer',
    company: 'Innovative Tech Solutions',
    quote: 'Touhidul is an exceptional developer with a deep understanding of both frontend and backend technologies. His code is clean, well-documented, and highly maintainable.',
    image: '/profile.jpg', // Using placeholder image
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="bg-dark/5 dark:bg-light/5 rounded-lg p-6 transition-transform hover:scale-[1.02]">
      <div className="flex items-center mb-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
          <Image 
            src={testimonial.image} 
            alt={testimonial.name} 
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div>
          <h3 className="font-bold text-lg">{testimonial.name}</h3>
          <p className="text-sm">{testimonial.role} at {testimonial.company}</p>
        </div>
      </div>
      <div className="relative">
        <svg className="absolute -top-2 -left-2 w-8 h-8 text-accent/30" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-lg italic pl-6">{testimonial.quote}</p>
      </div>
    </div>
  );
};

export default function Testimonials() {
  const [viewMode, setViewMode] = useState<'grid' | 'carousel'>('grid');
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <AnimatedSection variant="fadeIn">
        <h1 className="text-4xl font-bold mb-8 text-center">Testimonials</h1>
      </AnimatedSection>
      
      <AnimatedSection variant="slideUp" className="flex justify-center mb-8">
        <div className="flex bg-dark/5 dark:bg-light/5 rounded-lg p-1">
          <button 
            onClick={() => setViewMode('grid')} 
            className={`px-4 py-2 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-accent text-white' : 'hover:bg-accent/20'}`}
          >
            Grid View
          </button>
          <button 
            onClick={() => setViewMode('carousel')} 
            className={`px-4 py-2 rounded-md transition-colors ${viewMode === 'carousel' ? 'bg-accent text-white' : 'hover:bg-accent/20'}`}
          >
            Carousel View
          </button>
        </div>
      </AnimatedSection>
      
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.id} variant="slideUp" delay={0.1 * index}>
              <TestimonialCard testimonial={testimonial} />
            </AnimatedSection>
          ))}
        </div>
      ) : (
        <AnimatedSection variant="fadeIn">
          <div className="relative max-w-3xl mx-auto">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out" 
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              onClick={prevTestimonial}
              className="absolute top-1/2 -left-4 -translate-y-1/2 bg-accent text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute top-1/2 -right-4 -translate-y-1/2 bg-accent text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
            
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button 
                  key={index} 
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full ${activeIndex === index ? 'bg-accent' : 'bg-dark/20 dark:bg-light/20'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </AnimatedSection>
      )}
    </div>
  );
}