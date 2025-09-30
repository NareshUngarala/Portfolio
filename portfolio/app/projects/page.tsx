'use client';

import { useState } from 'react';
import Image from 'next/image';
import AnimatedSection from '../components/AnimatedSection';
import Link from 'next/link';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  github: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product management, shopping cart, and payment integration.',
    image: '/profile.jpg', // Using placeholder image
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    link: 'https://example.com/ecommerce',
    github: 'https://github.com/username/ecommerce',
  },
  {
    id: 2,
    title: 'AI Image Recognition',
    description: 'Machine learning application that can identify objects in images with high accuracy.',
    image: '/profile.jpg', // Using placeholder image
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'Flask'],
    link: 'https://example.com/ai-image',
    github: 'https://github.com/username/ai-image',
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'A productivity application for managing tasks, projects, and team collaboration.',
    image: '/profile.jpg', // Using placeholder image
    technologies: ['React', 'Firebase', 'Tailwind CSS'],
    link: 'https://example.com/task-app',
    github: 'https://github.com/username/task-app',
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'A responsive portfolio website built with Next.js and Tailwind CSS.',
    image: '/profile.jpg', // Using placeholder image
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    link: 'https://example.com/portfolio',
    github: 'https://github.com/username/portfolio',
  },
  {
    id: 5,
    title: 'Weather Dashboard',
    description: 'Real-time weather application with forecast data and interactive maps.',
    image: '/profile.jpg', // Using placeholder image
    technologies: ['JavaScript', 'React', 'API Integration'],
    link: 'https://example.com/weather',
    github: 'https://github.com/username/weather',
  },
  {
    id: 6,
    title: 'Social Media Analytics',
    description: 'Dashboard for tracking and analyzing social media performance metrics.',
    image: '/profile.jpg', // Using placeholder image
    technologies: ['React', 'D3.js', 'Node.js', 'MongoDB'],
    link: 'https://example.com/social-analytics',
    github: 'https://github.com/username/social-analytics',
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="bg-dark/5 dark:bg-light/5 rounded-lg overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative h-48 w-full">
        <Image 
          src={project.image} 
          alt={project.title} 
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="bg-accent/10 text-accent px-2 py-1 text-sm rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <Link 
            href={project.link} 
            target="_blank" 
            className="bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-md transition-colors text-sm"
          >
            Live Demo
          </Link>
          <Link 
            href={project.github} 
            target="_blank" 
            className="border border-accent text-accent hover:bg-accent hover:text-white px-4 py-2 rounded-md transition-colors text-sm"
          >
            GitHub
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  const [filter, setFilter] = useState<string>('All');
  
  // Get unique technologies for filter
  const allTechnologies = ['All', ...new Set(projects.flatMap(project => project.technologies))];
  
  // Filter projects based on selected technology
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.technologies.includes(filter));

  return (
    <div className="container mx-auto px-4 py-12">
      <AnimatedSection variant="fadeIn">
        <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
      </AnimatedSection>
      
      <AnimatedSection variant="slideUp" className="mb-8">
        <h2 className="text-xl font-bold mb-4">Filter by Technology:</h2>
        <div className="flex flex-wrap gap-2">
          {allTechnologies.map((tech, index) => (
            <button
              key={index}
              onClick={() => setFilter(tech)}
              className={`px-4 py-2 rounded-md transition-colors ${filter === tech ? 'bg-accent text-white' : 'bg-dark/5 dark:bg-light/5 hover:bg-accent/20'}`}
            >
              {tech}
            </button>
          ))}
        </div>
      </AnimatedSection>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <AnimatedSection key={project.id} variant="slideUp" delay={0.1 * index}>
            <ProjectCard project={project} />
          </AnimatedSection>
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <AnimatedSection variant="fadeIn" className="text-center py-12">
          <p className="text-xl">No projects found with the selected technology.</p>
          <button 
            onClick={() => setFilter('All')} 
            className="mt-4 bg-accent hover:bg-accent/90 text-white px-6 py-2 rounded-md transition-colors"
          >
            Show All Projects
          </button>
        </AnimatedSection>
      )}
    </div>
  );
}