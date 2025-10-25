import React, { useState } from 'react';

interface HeaderProps {
  name: string;
  navigateTo: (page: string, anchor?: string) => void;
}

const Header: React.FC<HeaderProps> = ({ name, navigateTo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#publications', text: 'Research Experience', page: 'portfolio' },
    { href: '#work-experience', text: 'Work Experience', page: 'portfolio' },
    { href: '#skills', text: 'Skills', page: 'portfolio' },
    { href: '#ielts', text: 'IELTS', page: 'portfolio' },
    { href: '#projects', text: 'Projects', page: 'portfolio' },
    { href: '#education', text: 'Education', page: 'portfolio' },
    { href: '#hobbies', text: 'Hobbies', page: 'portfolio' },
    { href: '#cv-page', text: 'CV', page: 'cv' }, // New CV link
  ];

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, linkPage: string, linkHref: string) => {
    event.preventDefault();
    if (linkPage === 'cv') {
      navigateTo('cv');
    } else {
      navigateTo('portfolio', linkHref);
    }
    
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };


  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md shadow-md shadow-slate-800/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#hero" onClick={(e) => handleNavClick(e, 'portfolio', '#hero')} className="text-xl font-bold text-slate-100 hover:text-cyan-400 transition-colors">
              {name}
            </a>
          </div>
          <div className="hidden md:block">
            <nav className="ml-10 flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.page, link.href)}
                  className="text-slate-300 hover:bg-slate-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.text}
                </a>
              ))}
            </nav>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.page, link.href)}
                className="text-slate-300 hover:bg-slate-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;