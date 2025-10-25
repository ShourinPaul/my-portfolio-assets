import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe'; // Import the new AboutMe component
import Publications from './components/Publications';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import Ielts from './components/Ielts';
import Projects from './components/Projects';
import Education from './components/Education';
import Hobbies from './components/Hobbies';
import Footer from './components/Footer';
import FloatingContactButton from './components/FloatingContactButton';
import BackToTopButton from './components/BackToTopButton';
import AnimatedSection from './components/AnimatedSection';
import SocialSidebar from './components/SocialSidebar';
import CVPage from './components/CVPage'; // Import the new CVPage component

import type { Publication, Experience, Project, EducationItem, Hobby, SkillCategory, IeltsScore } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'portfolio' | 'cv'>('portfolio');

  const navigateTo = (page: 'portfolio' | 'cv', anchor?: string) => {
    setCurrentPage(page);
    if (page === 'portfolio' && anchor) {
      setTimeout(() => { // Allow state update and re-render before scrolling
        const targetId = anchor.slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const offset = 80; // Header height
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = targetElement.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 0);
    } else if (page === 'cv') {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top for CV page
    }
  };

  const portfolioData = {
    name: "Shourin Paul",
    publications: [
      {
        title: "Inflocnet: Enhanced lung infection localization and disease detection from chest x-ray images using lightweight deep learning (Thesis)",
        supervisors: [
          { name: "Dr. M.M.A. Hashem", link: "https://www.kuet.ac.bd/cse/hashem" }
        ],
        abstract: "Proposed a lightweight deep-learning-based segmentation-classification network for lung infection localization and disease detection using chest X-ray images. Used transfer learning with pre-trained VGG-16 weights, incorporated a refined UNet++ framework, and achieved high performance in lung segmentation (IoU: 93.59%) and infection region localization (IoU: 97.67%). The model demonstrated a high classification accuracy of 93.86%. Available on arXiv for public access.",
        doi: "https://arxiv.org/pdf/2408.06459"
      },
      {
        title: "Predicting Brain Age Using Lightweight 3D CNN Architecture from T1-Weighted MRI Images",
        supervisors: [
            { name: "Md. Ahsan Habib", link: "https://www.kuet.ac.bd/cse/mahabib" },
            { name: "Kazi Saeed Alam", link: "https://www.kuet.ac.bd/cse/saeedalam" }
        ],
        abstract: "This research utilizes whole-brain MRI images, applying preprocessing, augmentation, and a 3D CNN to predict the brain's biological age from the IXI dataset. The model achieved 1.51 years MAE and 0.99 R-squared on an independent test set. Published in the Springer book 'Innovations in Electrical and Electronics Engineering'.",
        doi: "https://link.springer.com/chapter/10.1007/978-981-97-9112-5_9"
      }
    ] as Publication[],
    workExperience: [
      {
        company: { name: "REVE SYSTEMS, Dhaka", link: "https://www.revesoft.com/" },
        designation: "Software Engineer, Department of Research & Development",
        startDate: "May 2023",
        endDate: "Current",
        responsibilities: [
          "Developed and maintained key features such as Chat, QR scanning, and screen share for multiple Android applications using Java and Kotlin.",
          "Led development of screen share and audio conference call features for the Reve Conference App, utilizing MediaProjection API.",
          "Conducted research-based code refactoring to eliminate deprecated code and improve system quality.",
          "Optimized app performance by analyzing memory leaks with Android Profiler for better resource management.",
          "Worked with Room Database and Kotlin Coroutines to improve data handling and scalability.",
          "Collaborated with cross-functional teams to ensure quality development and seamless integration.",
          "Explored AI-driven speech enhancement for real-time communication, integrating advanced techniques such as WebRTC Noise Suppression, RNNoise, DeepFilterNet, and neural network–based denoising architectures to improve perceptual voice quality.",
          "Conducted applied research on data-driven noise suppression, training and fine-tuning RNNoise models using a Bengali speech corpus collected from our platform to achieve domain-specific optimization for native speakers.",
          "Bridged research and engineering, translating theoretical models in deep learning–based signal processing into production-ready systems, strengthening my ability to investigate, experiment, and deploy AI solutions to real-world challenges."
        ]
      }
    ] as Experience[],
    skills: [
        {
            name: 'Programming Languages',
            skills: 'C/C++, Java, Python, Kotlin',
        },
        {
            name: 'Machine Learning Tools',
            skills: 'PyTorch, Keras, Tensorflow, Sklearn, Pandas, Numpy',
        },
        {
            name: 'Version Control',
            skills: 'Git, Github',
        },
        {
            name: 'Mobile Application Tools',
            skills: 'Android Studio, Android Architecture Components',
        },
        {
            name: 'Document Processing',
            skills: 'Microsoft Word, PowerPoint, Excel, Latex',
        },
        {
            name: 'Database',
            skills: 'MySQL, Firebase',
        },
    ] as SkillCategory[],
    ieltsScores: [
        { category: 'Listening', score: '8.0' },
        { category: 'Reading', score: '7.5' },
        { category: 'Writing', score: '6.5' },
        { category: 'Speaking', score: '7.0' },
        { category: 'Overall', score: '7.5' },
    ] as IeltsScore[],
    projects: [
      {
        title: "Bag Store",
        description: [
          "Developed backend components for an e-commerce website focused on bags.",
          "Tech Stack: Java, Spring Boot, MySQL, REST API."
        ],
        githubLink: "https://github.com/ShourinPaul/Backend_for_bag_items"
      },
      {
        title: "Recipe Review",
        description: [
          "Created a simple food review app with functionality for viewing recipes and ingredients.",
          "Tech Stack: Dart, Flutter, Firebase."
        ],
        githubLink: "https://github.com/ShourinPaul/FlutterProjects/tree/main/RecipeReview"
      },
       {
        title: "Fifty Bird",
        description: [
          "A simple 2D game where a bird navigates through random pipes of different sizes.",
          "Tech Stack: Lua, Love2D."
        ],
        githubLink: "https://github.com/ShourinPaul/2DGameswithLove2D/tree/main/Fifty-Bird"
      },
      {
        title: "Tutourist",
        description: [
          "An android app for finding tuition as well as a tutor based on a preferred subject or area.",
          "Technologies: Java, Android, Firebase"
        ],
        githubLink: "https://github.com/ShourinPaul/AndroidProjects/tree/main/Tutourist"
      },
      {
        title: "3D Dynamic Motel",
        description: [
          "A 3D design of a motel built with C++ and OpenGL.",
          "Technologies: cpp, OpenGL, Glut"
        ],
        githubLink: "https://github.com/ShourinPaul/A-3DMotel-with-OpenGL"
      }
    ] as Project[],
    education: [
       {
        institution: "Khulna University of Engineering & Technology (KUET)",
        year: "2023",
        degree: "B.Sc in Computer Science and Engineering (CGPA: 3.54/4.00)"
      },
      {
        institution: "BCIC College Dhaka, Bangladesh",
        year: "2017",
        degree: "Higher Secondary School Certificate (GPA: 5.00/5.00)"
      }
    ] as EducationItem[],
    hobbies: [
      {
        name: 'Gaming',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 6.012h-9v2.977h9v-2.977zm-11.485 2.977h-3.015v3.015h3.015v-3.015zm13.985 0h-3v3.015h3v-3.015zm-11.485 3.015h-3.015v2.977h3.015v-2.977zm11.515-6.012v2.977h3v-2.977h-3zm-14.015 2.977v-2.977h-3.015c0 1.662 1.353 3.015 3.015 3.015zm16.515 3.015h-3v2.977h3v-2.977zm-14.015-2.977v3.015h-3.015c0-1.662 1.353-3.015 3.015-3.015zm13.985 0v3.015h3c0-1.662-1.353-3.015-3-3.015zm-1.5 6h-9v2.977h9v-2.977zm-9-2.977h-3.015v-2.977h-2.985v5.992c0 1.643 1.328 2.983 2.973 2.983h2.983v-3.013h3.029v-2.985zm12 0h-3v2.977h3.029v3.013h2.983c1.645 0 2.973-1.339 2.973-2.983v-5.992h-2.985v2.977h-3.015v2.985zm-6 2.985h-3.029v3.013h3.029v-3.013zm3.029 0v3.013h3v-3.013h-3z"/></svg>
      },
      {
        name: 'Cycling',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor"><path d="M14.53,3.34a2.5,2.5,0,1,0,0,5,2.5,2.5,0,0,0,0-5Zm0,4A1.5,1.5,0,1,1,16,5.84,1.5,1.5,0,0,1,14.53,7.34ZM9,14.5A2.5,2.5,0,1,0,6.5,12,2.5,2.5,0,0,0,9,14.5Zm0-4A1.5,1.5,0,1,1,7.5,12,1.5,1.5,0,0,1,9,10.5Zm11.35-1.3-.11-.17-3-4.5a1,1,0,0,0-1.66.12l-1.42,2.13-2.43-2.43a1,1,0,0,0-1.42,0L9,9.47,7.62,8.09a1,1,0,0,0-1.42,0L3.34,11A1,1,0,0,0,3,12v6a1,1,0,0,0,1,1H6a1,1,0,0,0,1-1V16.41l1.45-1.45,1,1a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l3.12-3.12.8.53a1,1,0,0,0,1.26-.21l3-4.5A1,1,0,0,0,20.35,9.2ZM5,17V12.41l1-1L7.41,13,5,15.41Zm12.19-6.32L16.47,12l-3-3L14.88,7.5ZM9,16.5a2.5,2.5,0,1,0,2.5,2.5A2.5,2.5,0,0,0,9,16.5Zm0,4a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,9,20.5Z"/></svg>
      },
      {
        name: 'Emerging Tech',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" /></svg>
      }
    ] as Hobby[],
  };

  return (
    <div className="relative">
      <Header name={portfolioData.name} navigateTo={navigateTo} />
      {currentPage === 'portfolio' ? (
        <>
          <SocialSidebar />
          <main className="pt-20 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto">
            <AnimatedSection>
              <Hero />
            </AnimatedSection>
            <AnimatedSection>
              <AboutMe /> {/* New AboutMe section */}
            </AnimatedSection>
            <AnimatedSection>
              <Publications items={portfolioData.publications} />
            </AnimatedSection>
            <AnimatedSection>
              <WorkExperience items={portfolioData.workExperience} />
            </AnimatedSection>
            <AnimatedSection>
              <Skills items={portfolioData.skills} />
            </AnimatedSection>
            <AnimatedSection>
              <Ielts items={portfolioData.ieltsScores} />
            </AnimatedSection>
            <AnimatedSection>
              <Projects items={portfolioData.projects} />
            </AnimatedSection>
            <AnimatedSection>
              <Education items={portfolioData.education} />
            </AnimatedSection>
            <AnimatedSection>
              <Hobbies items={portfolioData.hobbies} />
            </AnimatedSection>
          </main>
          <Footer name={portfolioData.name} />
          <FloatingContactButton />
          <BackToTopButton />
        </>
      ) : (
        <CVPage navigateTo={navigateTo} />
      )}
    </div>
  );
};

export default App;