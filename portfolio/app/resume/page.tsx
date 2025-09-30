import Link from 'next/link';
import AnimatedSection from '../components/AnimatedSection';

export default function Resume() {
  return (
    <div className="container mx-auto px-4 py-12">
      <AnimatedSection variant="fadeIn">
        <h1 className="text-4xl font-bold mb-8 text-center">My Resume</h1>
      </AnimatedSection>
      
      <AnimatedSection variant="slideUp" className="max-w-3xl mx-auto bg-dark/5 dark:bg-light/5 p-8 rounded-lg">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold">Touhidul Islam Chayan</h2>
            <p className="text-lg">Software Engineer</p>
          </div>
          
          <Link 
            href="/resume.pdf" 
            download
            className="mt-4 md:mt-0 bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-md transition-colors flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            Download Resume
          </Link>
        </div>
        
        <AnimatedSection variant="slideRight" delay={0.1}>
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-accent">Summary</h3>
            <p>
              Software engineer specializing in front-end development, UI/UX design, and machine learning. 
              Experienced with TypeScript/JavaScript, React, Next.js, Node.js, and various frameworks. 
              Published research in computer vision with a focus on medical image analysis.
            </p>
          </div>
        </AnimatedSection>
        
        <AnimatedSection variant="slideLeft" delay={0.2}>
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-accent">Experience</h3>
            
            <div className="mb-6">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-lg font-bold">Senior Frontend Developer</h4>
                  <p className="text-base">Tech Innovations Inc.</p>
                </div>
                <span className="text-sm bg-accent/10 text-accent px-2 py-1 rounded">2022 - Present</span>
              </div>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Led frontend development team for multiple high-profile projects</li>
                <li>Implemented modern React patterns and optimized application performance</li>
                <li>Collaborated with UI/UX designers to create intuitive user interfaces</li>
                <li>Mentored junior developers and conducted code reviews</li>
              </ul>
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-lg font-bold">Full Stack Developer</h4>
                  <p className="text-base">Digital Solutions Ltd.</p>
                </div>
                <span className="text-sm bg-accent/10 text-accent px-2 py-1 rounded">2020 - 2022</span>
              </div>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Developed and maintained web applications using React, Node.js, and MongoDB</li>
                <li>Implemented RESTful APIs and integrated third-party services</li>
                <li>Optimized database queries and improved application performance</li>
                <li>Participated in agile development processes and sprint planning</li>
              </ul>
            </div>
            
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-lg font-bold">UI/UX Designer & Developer</h4>
                  <p className="text-base">Creative Web Agency</p>
                </div>
                <span className="text-sm bg-accent/10 text-accent px-2 py-1 rounded">2018 - 2020</span>
              </div>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Designed and developed responsive websites for various clients</li>
                <li>Created wireframes, prototypes, and user flows</li>
                <li>Conducted user research and usability testing</li>
                <li>Collaborated with marketing teams to implement SEO best practices</li>
              </ul>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection variant="slideUp" delay={0.3}>
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-accent">Education</h3>
            
            <div className="mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-lg font-bold">Master of Computer Science</h4>
                  <p className="text-base">University of Toronto</p>
                </div>
                <span className="text-sm bg-accent/10 text-accent px-2 py-1 rounded">2020 - 2022</span>
              </div>
              <p className="mt-1">Specialized in Machine Learning and Computer Vision</p>
            </div>
            
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-lg font-bold">Bachelor of Computer Science</h4>
                  <p className="text-base">University of Waterloo</p>
                </div>
                <span className="text-sm bg-accent/10 text-accent px-2 py-1 rounded">2016 - 2020</span>
              </div>
              <p className="mt-1">Focused on Software Engineering and Web Development</p>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection variant="slideUp" delay={0.4}>
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-accent">Skills</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold mb-2">Frontend</h4>
                <p>HTML/CSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS, Vite</p>
              </div>
              
              <div>
                <h4 className="font-bold mb-2">Backend</h4>
                <p>Node.js, Express.js, Next.js API, RESTful APIs, GraphQL</p>
              </div>
              
              <div>
                <h4 className="font-bold mb-2">Database</h4>
                <p>MongoDB, MySQL, PostgreSQL, Firebase</p>
              </div>
              
              <div>
                <h4 className="font-bold mb-2">Machine Learning</h4>
                <p>Python, TensorFlow, PyTorch, Computer Vision, Deep Learning</p>
              </div>
              
              <div>
                <h4 className="font-bold mb-2">Tools & Others</h4>
                <p>Git/GitHub, Docker, CI/CD, Agile/Scrum, UI/UX Design, Figma</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection variant="slideUp" delay={0.5}>
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent">Publications</h3>
            
            <div>
              <h4 className="text-lg font-bold">Glaucoma Detection Using Deep Learning Techniques</h4>
              <p className="text-base">Journal of Computer Vision Research, 2022</p>
              <p className="mt-1">Developed a deep learning model for glaucoma detection with 95.7% accuracy using convolutional neural networks and transfer learning techniques.</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}