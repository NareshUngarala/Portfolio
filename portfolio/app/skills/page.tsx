'use client';

import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';

type Skill = {
  name: string;
  level: number; // 0-100
  icon?: string;
};

type SkillCategory = {
  name: string;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: [
      { name: 'HTML/CSS', level: 95 },
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Vite', level: 80 },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 80 },
      { name: 'Next.js API', level: 85 },
      { name: 'RESTful APIs', level: 90 },
      { name: 'GraphQL', level: 75 },
    ],
  },
  {
    name: 'Database',
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'MySQL', level: 80 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'Firebase', level: 80 },
    ],
  },
  {
    name: 'Machine Learning',
    skills: [
      { name: 'Python', level: 85 },
      { name: 'TensorFlow', level: 80 },
      { name: 'PyTorch', level: 75 },
      { name: 'Computer Vision', level: 85 },
      { name: 'Deep Learning', level: 80 },
    ],
  },
  {
    name: 'Tools & Others',
    skills: [
      { name: 'Git/GitHub', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'CI/CD', level: 80 },
      { name: 'Agile/Scrum', level: 85 },
      { name: 'UI/UX Design', level: 90 },
      { name: 'Figma', level: 85 },
    ],
  },
];

const SkillBar = ({ name, level }: Skill) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span className="text-accent">{level}%</span>
      </div>
      <div className="w-full bg-dark/10 dark:bg-light/10 rounded-full h-2.5">
        <div 
          className="bg-accent h-2.5 rounded-full" 
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

const SkillBadge = ({ name, level }: Skill) => {
  return (
    <div className="bg-dark/5 dark:bg-light/5 rounded-lg p-4 text-center transition-transform hover:scale-105">
      <h3 className="font-bold mb-2">{name}</h3>
      <div className="w-16 h-16 mx-auto mb-2 flex items-center justify-center rounded-full bg-accent/20">
        <span className="text-accent font-bold">{level}%</span>
      </div>
    </div>
  );
};

export default function Skills() {
  const [viewMode, setViewMode] = useState<'bars' | 'badges'>('bars');
  
  return (
    <div className="container mx-auto px-4 py-12">
      <AnimatedSection variant="fadeIn">
        <h1 className="text-4xl font-bold mb-8 text-center">My Skills</h1>
      </AnimatedSection>
      
      <AnimatedSection variant="slideUp" className="flex justify-center mb-8">
        <div className="flex bg-dark/5 dark:bg-light/5 rounded-lg p-1">
          <button 
            onClick={() => setViewMode('bars')} 
            className={`px-4 py-2 rounded-md transition-colors ${viewMode === 'bars' ? 'bg-accent text-white' : 'hover:bg-accent/20'}`}
          >
            Progress Bars
          </button>
          <button 
            onClick={() => setViewMode('badges')} 
            className={`px-4 py-2 rounded-md transition-colors ${viewMode === 'badges' ? 'bg-accent text-white' : 'hover:bg-accent/20'}`}
          >
            Skill Badges
          </button>
        </div>
      </AnimatedSection>
      
      {viewMode === 'bars' ? (
        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <AnimatedSection key={index} variant="slideUp" delay={0.1 * index}>
              <h2 className="text-2xl font-bold mb-6 text-accent">{category.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar key={skillIndex} name={skill.name} level={skill.level} />
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      ) : (
        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <AnimatedSection key={index} variant="slideUp" delay={0.1 * index}>
              <h2 className="text-2xl font-bold mb-6 text-accent">{category.name}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBadge key={skillIndex} name={skill.name} level={skill.level} />
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      )}
    </div>
  );
}