import React from 'react';
import type { IeltsScore } from '../types';

interface IeltsProps {
  items: IeltsScore[];
}

const Ielts: React.FC<IeltsProps> = ({ items }) => {
  return (
    <section id="ielts" className="py-16 md:py-24 bg-slate-800/50 rounded-lg shadow-md my-16 p-8 border border-slate-700 scroll-mt-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">IELTS Scores</h2>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className={`bg-slate-800 p-6 rounded-lg border text-center w-36 h-36 flex flex-col justify-center items-center transition-all duration-300
                ${item.category === 'Overall'
                  ? 'border-cyan-500/50 shadow-lg shadow-cyan-500/10 transform scale-105'
                  : 'border-slate-700 hover:shadow-md hover:shadow-cyan-500/10'
                }`}
            >
              <p className="text-4xl font-bold text-cyan-400">{item.score}</p>
              <p className="text-slate-400 mt-1">{item.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ielts;