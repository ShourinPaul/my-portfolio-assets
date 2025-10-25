import React from 'react';
import type { SkillCategory } from '../types';

interface SkillsProps {
  items: SkillCategory[];
}

const Skills: React.FC<SkillsProps> = ({ items }) => {
  return (
    <section id="skills" className="py-16 md:py-24 scroll-mt-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((category, index) => (
            <div key={index} className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:shadow-lg hover:shadow-cyan-500/10 transition-shadow">
              <h3 className="text-xl font-semibold text-slate-100 mb-3">{category.name}</h3>
              <p className="text-slate-400 leading-relaxed">
                {category.skills}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;