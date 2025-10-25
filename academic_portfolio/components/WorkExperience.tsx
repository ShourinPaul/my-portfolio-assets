import React from 'react';
import type { Experience } from '../types';

interface WorkExperienceProps {
  items: Experience[];
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ items }) => {
  return (
    <section id="work-experience" className="py-16 md:py-24 scroll-mt-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Work Experience</h2>
        <div className="relative border-l-2 border-slate-700">
          {items.map((exp, index) => (
            <div key={index} className="mb-12 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-slate-700 rounded-full -left-3 ring-8 ring-slate-900">
                <svg className="w-3 h-3 text-cyan-400" fill="currentColor" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zM11.5 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM10 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM10 13a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0v-1a1 1 0 0 0-1-1z"></path></svg>
              </span>
              <div className="p-6 bg-slate-800 rounded-lg shadow-md border border-slate-700">
                <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-slate-100">{exp.designation}</h3>
                    <span className="bg-cyan-900/50 text-cyan-300 text-sm font-medium px-2.5 py-0.5 rounded">{exp.startDate} - {exp.endDate}</span>
                </div>
                <a href={exp.company.link} target="_blank" rel="noopener noreferrer" className="text-md font-medium text-slate-400 mb-4 inline-block hover:text-cyan-400 transition-colors">
                    {exp.company.name}
                </a>
                <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;