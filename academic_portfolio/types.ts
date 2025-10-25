import type { ReactElement } from 'react';

export interface Supervisor {
  name: string;
  link: string;
}

export interface Publication {
  title: string;
  supervisors: Supervisor[];
  abstract: string;
  doi: string;
}

export interface Company {
    name: string;
    link: string;
}

export interface Experience {
  company: Company;
  designation: string;
  startDate: string;

  endDate: string;
  responsibilities: string[];
}

export interface Project {
  title: string;
  description: string[];
  githubLink: string;
}

export interface EducationItem {
  institution: string;
  year: string;
  degree: string;
}

export interface Hobby {
  name: string;
  // FIX: Replaced JSX.Element with ReactElement and imported it from 'react' 
  // to resolve the "Cannot find namespace 'JSX'" error in a .ts file.
  icon: ReactElement;
}

export interface SkillCategory {
    name: string;
    skills: string;
}

export interface IeltsScore {
    category: string;
    score: string;
}