import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', id: 'home' },
  { label: 'Purpose', id: 'about' },
  { label: 'Solutions', id: 'businesses' },
  { label: 'Scale', id: 'stats' },
  { label: 'Impact', id: 'life' },
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
              : 'bg-white/10 backdrop-blur-md shadow-lg border border-white/20 text-white'
            }
          `}
        >
          <div 
            className="flex items-center gap-2 cursor-pointer mr-8" 
            onClick={() => scrollToSection('home')}
          >
             <div className="flex items-center gap-1 font-bold text-xl tracking-tighter">
                <span className="text-white">Frontiers</span>
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
             </div>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative px-4 py-2 rounded-full text-xs uppercase tracking-widest font-bold text-white/80 hover:text-white transition-all group"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="ml-4 px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest bg-emerald-500 text-slate-950 transition-transform hover:scale-105"
            >
              Contact
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <div 
        className={`fixed inset-0 bg-slate-950 z-40 transition-all duration-500 md:hidden flex items-center justify-center ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="flex flex-col space-y-8 text-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-4xl font-black text-white uppercase tracking-tighter hover:text-emerald-400"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;