import React from 'react';
import type { Publication } from '../types';

interface PublicationsProps {
  items: Publication[];
}

const Publications: React.FC<PublicationsProps> = ({ items }) => {
  return (
    <section id="publications" className="py-16 md:py-24 bg-slate-800/50 rounded-lg shadow-md my-16 p-8 border border-slate-700 scroll-mt-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Research Experience</h2>
        <div className="space-y-10">
          {items.map((pub, index) => (
            <div key={index} className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:shadow-lg hover:shadow-cyan-500/10 transition-shadow">
              <h3 className="text-xl font-semibold text-slate-100 mb-2">{pub.title}</h3>
              <p className="text-sm text-slate-400 mb-3 italic">
                Supervisor{pub.supervisors.length > 1 ? 's' : ''}:{' '}
                {pub.supervisors.map((supervisor, i) => (
                    <React.Fragment key={supervisor.name}>
                        <a href={supervisor.link} target="_blank" rel="noopener noreferrer" className="underline hover:text-cyan-400 transition-colors">
                            {supervisor.name}
                        </a>
                        {i < pub.supervisors.length - 1 && ', '}
                    </React.Fragment>
                ))}
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">{pub.abstract}</p>
              <a
                href={pub.doi}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-cyan-400 font-medium hover:text-cyan-300 transition-colors"
              >
                (Click here to read the paper) &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;