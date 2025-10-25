import React from 'react';
import type { Hobby } from '../types';

interface HobbiesProps {
  items: Hobby[];
}

const Hobbies: React.FC<HobbiesProps> = ({ items }) => {
  return (
    <section id="hobbies" className="py-16 md:py-24 scroll-mt-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Hobbies & Interests</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {items.map((hobby, index) => (
            <div key={index} className="group bg-slate-800 p-8 rounded-lg shadow-md border border-slate-700 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-2">
              <div className="text-cyan-400 mb-4 transition-transform duration-300 group-hover:scale-110">
                {hobby.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-100">{hobby.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;