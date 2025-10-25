import React, { useState } from 'react';

const FloatingContactButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contactLinks = [
    { href: "https://www.linkedin.com/in/shourinpaul/", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>, label: 'LinkedIn' },
    { href: "https://www.facebook.com/shourin.paul", label: "Facebook", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z"/></svg> },
    { href: "mailto:shourinpaul@gmail.com", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>, label: 'Email' }
  ];

  return (
    <div className="fixed bottom-20 right-4 z-50">
      <div className={`flex flex-col items-center space-y-3 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
        {contactLinks.map(link => (
          <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-700 rounded-full shadow-lg flex items-center justify-center text-slate-300 hover:bg-slate-600 hover:text-cyan-400 transition-all transform hover:scale-110">
            {link.icon}
            <span className="sr-only">{link.label}</span>
          </a>
        ))}
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-cyan-500 text-white rounded-full shadow-lg flex items-center justify-center mt-4 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-cyan-500 transition-transform transform hover:scale-110"
      >
        {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
        )}
        <span className="sr-only">Contact Me</span>
      </button>
    </div>
  );
};

export default FloatingContactButton;