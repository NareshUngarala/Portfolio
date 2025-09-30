'use client';

import Image from "next/image";
import Link from "next/link";
import AnimatedSection from './components/AnimatedSection';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-8">
        <AnimatedSection variant="slideRight" className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Touhidul Islam Chayan</h1>
          <h2 className="text-2xl md:text-3xl text-accent mb-6">Software Engineer</h2>
          <p className="text-lg mb-8">
            I'm a software engineer specializing in front-end development, UI/UX design, and 
            machine learning. I have experience with independent international clients and full-time jobs, 
            honing my skills in various technologies.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/contact" 
              className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-md transition-colors"
            >
              Contact Me
            </Link>
            <Link 
              href="/projects" 
              className="border border-accent text-accent hover:bg-accent hover:text-white px-6 py-3 rounded-md transition-colors"
            >
              View Projects
            </Link>
          </div>
        </AnimatedSection>
        <AnimatedSection variant="slideLeft" delay={0.3} className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent">
            <Image 
              src="/profile.jpg" 
              alt="Touhidul Islam Chayan" 
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </AnimatedSection>
      </section>

      <div className="mt-20">
        <AnimatedSection variant="fadeIn">
          <h2 className="text-3xl font-bold mb-8 text-center">What I'm Doing</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatedSection variant="slideUp" delay={0.1} className="bg-dark/5 dark:bg-light/5 p-6 rounded-lg">
            <div className="mb-4">
              <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
            <p>The most modern and high-quality design made at a professional level.</p>
          </AnimatedSection>
          <AnimatedSection variant="slideUp" delay={0.2} className="bg-dark/5 dark:bg-light/5 p-6 rounded-lg">
            <div className="mb-4">
              <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Frontend Development</h3>
            <p>High-quality frontend development of sites at the professional level.</p>
          </AnimatedSection>
          <AnimatedSection variant="slideUp" delay={0.3} className="bg-dark/5 dark:bg-light/5 p-6 rounded-lg">
            <div className="mb-4">
              <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Backend Development</h3>
            <p>Professional backend development of applications in JavaScript.</p>
          </AnimatedSection>
          <AnimatedSection variant="slideUp" delay={0.4} className="bg-dark/5 dark:bg-light/5 p-6 rounded-lg">
            <div className="mb-4">
              <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Machine Learning</h3>
            <p>I specialize in developing high-quality machine learning applications.</p>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
