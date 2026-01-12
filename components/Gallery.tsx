import React from 'react';
import Section from './Section';

const images = [
  { 
    url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", 
    title: "Global Mega-Terminals" 
  },
  { 
    url: "https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", 
    title: "Precision Automation" 
  },
  { 
    url: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", 
    title: "Trans-Continental Fleets" 
  },
  { 
    url: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", 
    title: "Strategic Port Hubs" 
  },
  { 
    url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", 
    title: "The Tech Pulse" 
  },
  { 
    url: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", 
    title: "Future Frontiers" 
  }
];

const Gallery: React.FC = () => {
  return (
    <Section id="gallery" dark>
       <div className="max-w-7xl mx-auto px-6">
          {/* Simplified Clean Heading */}
          <div className="text-center mb-24 reveal">
            <div className="inline-block py-1 px-4 mb-6 border-l-2 border-emerald-500 bg-emerald-500/10">
              <span className="text-emerald-400 font-bold tracking-[0.5em] text-[10px] uppercase block">Operations Archive</span>
            </div>
            
            <div className="relative flex flex-col items-center justify-center">
              <h2 className="relative z-10 flex flex-col items-center">
                <span className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-4 uppercase text-white">
                  Frontier <span className="text-transparent border-t border-b border-emerald-500/50 [text-shadow:0_0_20px_rgba(16,185,129,0.3)] bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">Logistics</span>
                </span>
                <span className="flex items-center gap-4 text-emerald-400 font-bold text-sm md:text-xl tracking-[0.6em] uppercase">
                  <div className="h-px w-8 md:w-16 bg-emerald-500/50"></div>
                  IN MOTION
                  <div className="h-px w-8 md:w-16 bg-emerald-500/50"></div>
                </span>
              </h2>
            </div>
            
            <p className="text-gray-400 max-w-xl mx-auto text-base md:text-lg mt-12 leading-relaxed font-medium">
              A visual testament to the sheer scale of our global machinery. Witness the precision that powers the frontiers of commerce.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((img, idx) => (
                <div 
                  key={idx} 
                  className={`group relative h-[450px] overflow-hidden rounded-[2.5rem] cursor-pointer border border-white/5 shadow-2xl reveal ${idx % 3 === 0 ? 'delay-100' : idx % 3 === 1 ? 'delay-200' : 'delay-300'}`}
                >
                    <img 
                        src={img.url} 
                        alt={img.title}
                        className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                    />
                    {/* Dynamic Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                    
                    <div className="absolute inset-0 flex flex-col justify-end p-10">
                        <div className="translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                          <div className="overflow-hidden mb-4">
                            <span className="inline-block h-px w-0 bg-emerald-400 group-hover:w-16 transition-all duration-700"></span>
                          </div>
                          <h3 className="text-white font-black text-3xl md:text-4xl tracking-tighter mb-2">
                            {img.title}
                          </h3>
                          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                            <span className="text-emerald-400 text-[10px] font-bold tracking-[0.3em] uppercase">
                              Active Sector 0{idx + 1}
                            </span>
                          </div>
                        </div>
                    </div>
                    
                    {/* Decorative HUD Element */}
                    <div className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 scale-50 group-hover:scale-100">
                       <div className="absolute inset-0 border border-emerald-500/30 rounded-full animate-spin-slow"></div>
                       <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                    </div>
                </div>
            ))}
          </div>
          
          <div className="mt-24 text-center reveal">
            <button className="group relative px-12 py-6 bg-transparent text-white rounded-full font-black uppercase text-xs tracking-[0.3em] transition-all overflow-hidden">
              <span className="relative z-10">Access Full Media Archive</span>
              <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 backdrop-blur-xl border border-white/10 transition-all"></div>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-emerald-500 group-hover:w-full transition-all duration-500"></div>
            </button>
          </div>
       </div>

       <style>{`
         @keyframes spin-slow {
           from { transform: rotate(0deg); }
           to { transform: rotate(360deg); }
         }
         .animate-spin-slow {
           animation: spin-slow 8s linear infinite;
         }
       `}</style>
    </Section>
  );
};

export default Gallery;