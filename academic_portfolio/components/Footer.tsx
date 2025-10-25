import React from 'react';

interface FooterProps {
    name: string;
}

const Footer: React.FC<FooterProps> = ({ name }) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-slate-400">
          &copy; {currentYear} {name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;