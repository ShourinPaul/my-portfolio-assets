import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="py-16 md:py-24 scroll-mt-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-end">
          <div className="md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
            <img
              // Replace this URL with the direct link to your hosted profile picture!
              src="https://i.postimg.cc/GtyhqD4P/Whats-App-Image-2025-10-26-at-03-54-18-1.jpg"
              alt="Shourin Paul"
              className="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-slate-700 mb-6 transition-transform duration-300 hover:scale-105"
            />
            <div className="w-full bg-slate-800 p-4 rounded-lg shadow-md border border-slate-700">
                <h3 className="text-lg font-semibold text-slate-200 mb-2">Contact Info</h3>
                <ul className="text-sm text-slate-400 space-y-2">
                    <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-cyan-400" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>shourinpaul@gmail.com</li>
                    <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-cyan-400" viewBox="0 0 20 20" fill="currentColor"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>(+880) 1795988750</li>
                    <li className="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-cyan-400 flex-shrink-0 mt-1" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>Mohammadpur, Dhaka, Bangladesh</li>
                </ul>
            </div>
          </div>
          <div className="md:col-span-2">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-cyan-300">
              Shourin Paul
            </h1>
            <p className="text-lg text-slate-400 mb-8">
              Aspiring to pursue higher studies in Computer Science, focusing on Deep Learning and its applications in Medical Imaging and Computer Vision.
            </p>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                <h2 className="text-2xl font-bold text-slate-100 mb-4">Research Interests</h2>
                 <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 list-disc list-outside pl-5 text-slate-300">
                    <li>Deep Learning</li>
                    <li>Machine Learning</li>
                    <li>Computer Vision</li>
                    <li>Medical Imaging</li>
                    <li>Image Processing</li>
                    <li>Autonomous Vehicles</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;