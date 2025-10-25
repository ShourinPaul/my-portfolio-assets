import React from 'react';
import type { EducationItem } from '../types';

interface EducationProps {
  items: EducationItem[];
}

const Education: React.FC<EducationProps> = ({ items }) => {
  return (
    <section id="education" className="py-16 md:py-24 scroll-mt-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          {items.map((edu, index) => (
            <div key={index} className="bg-slate-800 p-6 rounded-lg shadow-md border border-slate-700">
              <h3 className="text-lg font-semibold text-slate-100">{edu.institution}</h3>
              <p className="text-cyan-400 font-medium my-2">{edu.degree}</p>
              <p className="text-slate-400">{edu.year} of Completion</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;