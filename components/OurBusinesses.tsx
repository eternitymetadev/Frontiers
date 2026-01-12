import React, { useState } from 'react';
import { ArrowRight, Zap } from 'lucide-react';

const verticals = [
  {
    id: 'warehousing',
    title: 'Precision Warehousing',
    description: 'Tech-enabled, 100% compliant storage solutions that bring organized inventory management to India’s farthest corners.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 'logistics',
    title: 'The Last Mile Pulse',
    description: 'National FTL & PTL networks optimized by AI to reach Tier VII markets with unmatched speed and reliability.',
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80'
  },
  {
    id: 'ecommerce',
    title: 'E-Comm Empowerment',
    description: 'Enabling brands to thrive in local markets with sophisticated picking, packing, and fulfillment ecosystems.',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 'agri',
    title: 'Agri-Tech Solutions',
    description: 'Modernizing the backbone of India with drone spraying, supply chain optimization, and farm-to-market bridges.',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  }
];

const OurBusinesses: React.FC = () => {
  const [activeId, setActiveId] = useState(verticals[0].id);
  const activeVertical = verticals.find(v => v.id === activeId) || verticals[0];

  return (
    <section id="businesses" className="relative min-h-screen flex items-center bg-slate-950 text-white overflow-hidden py-24 md:py-0">
        {verticals.map((v) => (
            <div 
                key={v.id}
                className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${activeId === v.id ? 'opacity-100' : 'opacity-0'}`}
            >
               <img src={v.image} alt={v.title} className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/40"></div>
            </div>
        ))}

        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 px-6 h-full">
             <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
                <div className="flex items-center gap-2 font-black tracking-[0.3em] uppercase text-emerald-400 mb-4">
                   <Zap size={20} className="fill-emerald-400" />
                   <span>The Core Solution</span>
                </div>
                
                <div key={activeVertical.id} className="animate-slide-up">
                    <h2 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-none uppercase">
                    {activeVertical.title}
                    </h2>
                    
                    <p className="text-xl md:text-2xl text-slate-300 max-w-xl leading-relaxed mb-10 border-l-4 border-emerald-500 pl-8 italic">
                    {activeVertical.description}
                    </p>

                    <button className="group px-10 py-5 rounded-full border border-white/30 hover:bg-emerald-500 hover:text-slate-950 hover:border-emerald-500 transition-all duration-500 flex items-center gap-3 font-black uppercase text-xs tracking-widest">
                    View Impact Data 
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
             </div>

             <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="flex flex-col space-y-4">
                   {verticals.map((v) => (
                      <button
                        key={v.id}
                        onClick={() => setActiveId(v.id)}
                        className={`
                          group relative text-left py-6 px-8 text-xs font-black uppercase tracking-[0.2em] transition-all duration-500 flex items-center justify-between border border-white/10 rounded-2xl
                          ${activeId === v.id 
                            ? 'bg-emerald-500/10 border-emerald-500 text-white scale-105 shadow-2xl' 
                            : 'text-slate-500 hover:text-white hover:border-white/30'
                          }
                        `}
                      >
                        <span>{v.title}</span>
                        {activeId === v.id && (
                           <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></div>
                        )}
                      </button>
                   ))}
                </div>
             </div>
        </div>
        
        <style>{`
            @keyframes slide-up {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .animate-slide-up {
                animation: slide-up 0.5s ease-out forwards;
            }
        `}</style>
    </section>
  );
}

export default OurBusinesses;