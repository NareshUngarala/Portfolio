'use client';

import Image from 'next/image';
import AnimatedSection from '../components/AnimatedSection';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <AnimatedSection variant="fadeIn">
        <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
      </AnimatedSection>
      
      <div className="flex flex-col md:flex-row gap-12">
        <AnimatedSection variant="slideRight" className="md:w-1/3">
          <div className="sticky top-24">
            <div className="relative w-full aspect-square max-w-xs mx-auto rounded-lg overflow-hidden mb-6">
              <Image 
                src="/profile.jpg" 
                alt="Touhidul Islam Chayan" 
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="bg-dark/5 dark:bg-light/5 p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Personal Information</h2>
              <div className="space-y-3">
                <div className="flex">
                  <span className="font-bold w-24">Name:</span>
                  <span>Touhidul Islam Chayan</span>
                </div>
                <div className="flex">
                  <span className="font-bold w-24">Email:</span>
                  <span>moin24@gmail.com</span>
                </div>
                <div className="flex">
                  <span className="font-bold w-24">Phone:</span>
                  <span>+1-(647)-679-4219</span>
                </div>
                <div className="flex">
                  <span className="font-bold w-24">Location:</span>
                  <span>Peterborough, Ontario, Canada</span>
                </div>
                <div className="flex">
                  <span className="font-bold w-24">Birth Year:</span>
                  <span>1998</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection variant="slideLeft" delay={0.2} className="md:w-2/3">
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-accent">Who I Am</h2>
            <p className="mb-4">
              I'm Touhidul Islam Chayan, a software engineer specializing in front-end development, UI/UX design, and 
              machine learning. I have experience with independent international clients and full-time jobs, 
              honing my skills in various technologies.
            </p>
            <p className="mb-4">
              My expertise is in TypeScript/JavaScript, with a focus on front-end development using Next.js 13, React 18, Vite 
              with Tailwind CSS for back-end development. I use Node.js and its frameworks, including Express.JS and Next.js. 
              Additionally, I'm a skilled UI/UX designer, creating visually appealing and user-friendly interfaces.
            </p>
            <p>
              In the field of machine learning, I have experience with deep learning and pre-trained models. I've published 
              research on ICT in the computer vision field, where I used these techniques to predict glaucoma with an 
              accuracy of 95.7% and its explanation.
            </p>
          </div>
          
          <AnimatedSection variant="slideUp" delay={0.3}>
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-accent">Education</h2>
              <div className="space-y-6">
                <div className="bg-dark/5 dark:bg-light/5 p-6 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">Master of Computer Science</h3>
                    <span className="text-sm bg-accent text-white px-2 py-1 rounded">2020 - 2022</span>
                  </div>
                  <p className="text-lg mb-2">University of Toronto</p>
                  <p>Specialized in Machine Learning and Computer Vision with a focus on medical image analysis.</p>
                </div>
                
                <div className="bg-dark/5 dark:bg-light/5 p-6 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">Bachelor of Computer Science</h3>
                    <span className="text-sm bg-accent text-white px-2 py-1 rounded">2016 - 2020</span>
                  </div>
                  <p className="text-lg mb-2">University of Waterloo</p>
                  <p>Focused on Software Engineering and Web Development. Graduated with honors.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection variant="slideUp" delay={0.4}>
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-accent">Work Experience</h2>
              <div className="space-y-6">
                <div className="bg-dark/5 dark:bg-light/5 p-6 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">Senior Frontend Developer</h3>
                    <span className="text-sm bg-accent text-white px-2 py-1 rounded">2022 - Present</span>
                  </div>
                  <p className="text-lg mb-2">Tech Innovations Inc.</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Led the frontend development team for multiple high-profile projects</li>
                    <li>Implemented modern React patterns and optimized application performance</li>
                    <li>Collaborated with UI/UX designers to create intuitive user interfaces</li>
                    <li>Mentored junior developers and conducted code reviews</li>
                  </ul>
                </div>
                
                <div className="bg-dark/5 dark:bg-light/5 p-6 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">Full Stack Developer</h3>
                    <span className="text-sm bg-accent text-white px-2 py-1 rounded">2020 - 2022</span>
                  </div>
                  <p className="text-lg mb-2">Digital Solutions Ltd.</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Developed and maintained web applications using React, Node.js, and MongoDB</li>
                    <li>Implemented RESTful APIs and integrated third-party services</li>
                    <li>Optimized database queries and improved application performance</li>
                    <li>Participated in agile development processes and sprint planning</li>
                  </ul>
                </div>
                
                <div className="bg-dark/5 dark:bg-light/5 p-6 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">UI/UX Designer & Developer</h3>
                    <span className="text-sm bg-accent text-white px-2 py-1 rounded">2018 - 2020</span>
                  </div>
                  <p className="text-lg mb-2">Creative Web Agency</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Designed and developed responsive websites for various clients</li>
                    <li>Created wireframes, prototypes, and user flows</li>
                    <li>Conducted user research and usability testing</li>
                    <li>Collaborated with marketing teams to implement SEO best practices</li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </AnimatedSection>
      </div>
    </div>
  );
}