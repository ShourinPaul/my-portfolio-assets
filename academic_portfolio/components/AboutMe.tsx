import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <section id="about-me" className="py-16 md:py-24 scroll-mt-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">About Me</h2>
        <div className="bg-slate-800 p-8 rounded-lg shadow-md border border-slate-700">
          <p className="text-lg text-slate-300 leading-relaxed mb-4">
            Hello! I'm Shourin Paul, a Computer Science graduate from{' '}
            <a href="https://www.kuet.ac.bd/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline hover:text-cyan-300">
              Khulna University of Engineering & Technology (KUET)
            </a>
            , with a profound passion for Deep Learning and its transformative applications.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed mb-4">
            Currently, I'm working as a Software Engineer in the Research & Development department at{' '}
            <a href="https://www.revesoft.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline hover:text-cyan-300">
              REVE SYSTEMS, Dhaka
            </a>
            . My role involves developing and maintaining key features for various Android applications and leading the implementation of innovative solutions. This experience has deepened my understanding of building robust and scalable software.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed mb-4">
            My true passion lies in research, particularly in leveraging advanced AI techniques in Medical Imaging, Computer Vision, and Speech Enhancement. I am driven by the desire to understand and build intelligent systems that can make a tangible impact, from enhancing disease detection through chest X-rays to predicting brain age from MRI scans. My work at REVE SYSTEMS also involves exploring AI-driven speech enhancement for real-time communication, allowing me to bridge research and engineering by translating theoretical models into production-ready systems.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed">
            My future goals are centered around pursuing higher studies to deepen my expertise in cutting-edge AI research and contributing to the development of next-generation intelligent systems. I am eager to collaborate with leading minds, push the boundaries of artificial intelligence, and translate theoretical advancements into practical, impactful applications that benefit society.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;