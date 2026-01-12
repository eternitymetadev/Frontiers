import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    label: "Essential Reach",
    heading: "CONNECTING LIVES IN MOTION",
    tagline: "Ensuring essential goods reach the furthest corners of India, where they matter most."
  },
  {
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    label: "Infrastructure Scale",
    heading: "BUILT FOR RELIABILITY",
    tagline: "Sophisticated warehousing and distribution networks spanning over 9,000 pin codes."
  },
  {
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    label: "Future Impact",
    heading: "EMPOWERING COMMUNITIES",
    tagline: "Revolutionizing the supply chain to bring fresh opportunity and essential resources to every household."
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 z-0 transition-all duration-1000 ease-in-out transform ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'
          }`}
        >
          <img 
            src={slide.image} 
            alt={slide.heading} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-950"></div>
        </div>
      ))}

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        <div className="mb-6 inline-block px-5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 backdrop-blur-xl text-emerald-300 font-bold text-xs uppercase tracking-[0.3em] animate-fade-in">
          {slides[currentSlide].label}
        </div>
        
        <div key={currentSlide} className="animate-slide-up">
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9] uppercase">
            {slides[currentSlide].heading.split(' ').map((word, i) => (
              i === 2 ? <React.Fragment key={i}><br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-200 to-emerald-500">{word}</span> </React.Fragment> : word + ' '
            ))}
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 font-medium leading-relaxed opacity-90">
            {slides[currentSlide].tagline}
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={() => document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth'})} 
            className="group px-10 py-5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-full font-black transition-all transform hover:scale-105 shadow-[0_20px_50px_rgba(16,185,129,0.3)] flex items-center gap-3 uppercase text-sm tracking-widest"
          >
            Explore Impact
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center gap-8">
        <button onClick={prevSlide} className="p-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors">
          <ChevronLeft size={24} className="text-white" />
        </button>
        <div className="flex gap-3">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrentSlide(i)} className={`h-1 transition-all duration-500 rounded-full ${i === currentSlide ? 'w-12 bg-emerald-400' : 'w-4 bg-white/30'}`} />
          ))}
        </div>
        <button onClick={nextSlide} className="p-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors">
          <ChevronRight size={24} className="text-white" />
        </button>
      </div>

      <style>{`
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;