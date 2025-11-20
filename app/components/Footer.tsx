"use client"
import React from 'react';
import { Github, Linkedin, ArrowUp } from 'lucide-react';

// Data for social media links
const socialLinks = [
  { 
    name: 'GitHub', 
    href: 'https://github.com', // Remember to replace with your actual URL
    icon: Github 
  },
  { 
    name: 'LinkedIn', 
    href: 'https://linkedin.com', // Remember to replace with your actual URL
    icon: Linkedin 
  },
];

// Data for navigation links
const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className=" bg-black text-slate-300">
      <div className="container mx-auto px-6 py-12">
        
        {/* Top section: Brand and social links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                aashu.dev
              </span>
            </h2>
            <p className="mt-2 max-w-sm text-sm text-slate-500 dark:text-slate-400">
              Building innovative software solutions with clean, efficient code.
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={link.name}
                className="p-2 bg-slate-200 dark:bg-gray-800 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-gray-700 hover:text-primary-500 dark:hover:text-primary-400 transition-all duration-300 transform hover:scale-110"
              >
                <link.icon size={20} />
              </a>
            ))}
            <button 
              onClick={scrollToTop}
              className="p-2 bg-primary-600 hover:bg-primary-700 rounded-full text-white transition-all duration-300 transform hover:scale-110"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
        
        {/* Divider */}
        <div className="mt-10 pt-8 border-t border-slate-200 dark:border-slate-700">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              &copy; {new Date().getFullYear()} aashu.dev. All rights reserved.
            </p>
            
            <nav className="flex space-x-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="text-sm hover:text-primary-500 dark:hover:text-primary-400 hover:underline transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;