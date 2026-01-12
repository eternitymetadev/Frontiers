import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Businesses', id: 'businesses' }, // Added Businesses section
  { label: 'Services', id: 'services' },
  { label: 'Scale', id: 'stats' },
  { label: 'Tech', id: 'tech' },
  { label: 'Careers', id: 'life' },
  { label: 'Gallery', id: 'gallery' },
];

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav 
        className={`fixed left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-in-out
          ${scrolled ? 'top-4 w-[90%] md:w-auto' : 'top-6 w-full px-8 md:px-0 md:w-auto'}
        `}
      >
        <div 
          className={`
            flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300
            ${scrolled 
              ? 'bg-slate-900/80 backdrop-blur-md shadow-2xl border border-white/10 text-white' 
              : 'bg-white/80 backdrop-blur-md shadow-lg border border-white/40 text-slate-800 md:bg-transparent md:shadow-none md:border-none md:backdrop-blur-none'
            }
          `}
        >
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer mr-8" 
            onClick={() => scrollToSection('home')}
          >
             <div className="flex items-center gap-1 font-bold text-xl tracking-tighter">
                <span className={scrolled ? "text-emerald-400" : "text-emerald-600 md:text-white"}>Frontiers</span>
                <div className="h-2 w-2 rounded-full bg-orange-500 animate-pulse"></div>
             </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 group overflow-hidden
                  ${scrolled ? 'text-slate-300 hover:text-white' : 'text-white/90 hover:text-white hover:bg-white/10'}
                `}
              >
                <span className="relative z-10">{item.label}</span>
                {scrolled && <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></span>}
              </button>
            ))}
            
            <button 
              onClick={() => scrollToSection('contact')}
              className={`
                ml-4 px-5 py-2 rounded-full text-sm font-bold flex items-center gap-2 transition-transform hover:scale-105 active:scale-95
                ${scrolled ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' : 'bg-white text-slate-900 shadow-xl'}
              `}
            >
              Contact <ArrowUpRight size={14} />
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={scrolled ? "text-white" : "text-slate-800"}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-slate-900/95 backdrop-blur-xl z-40 transition-all duration-500 md:hidden flex items-center justify-center ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="flex flex-col space-y-6 text-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-2xl font-bold text-white hover:text-emerald-400 transition-colors"
            >
              {item.label}
            </button>
          ))}
          <button 
             onClick={() => scrollToSection('contact')}
             className="mt-8 px-8 py-3 bg-emerald-500 text-white rounded-full font-bold mx-auto"
          >
             Contact Us
          </button>
        </div>
      </div>
    </>
  );
};

export default Navigation;