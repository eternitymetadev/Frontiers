import React, { useState } from 'react';
import { ArrowRight, Flame } from 'lucide-react';

const verticals = [
  {
    id: 'warehousing',
    title: 'Warehousing',
    description: 'Since our inception, we have revolutionized industrial storage. Our warehousing solutions bring the benefits of organized inventory management to the farthest corners, ensuring 100% compliance and safety.',
    image: 'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 'logistics',
    title: 'Logistics',
    description: 'Seamless transportation networks connecting supply to demand. We offer FTL, PTL, and last-mile delivery services across the nation with real-time tracking.',
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80'
  },
  {
    id: 'ecommerce',
    title: 'E-commerce',
    description: 'Enabling digital commerce with robust fulfillment centers. We empower brands to reach customers faster through our integrated picking, packing, and shipping solutions.',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 'pest-control',
    title: 'Pest Control',
    description: 'Critical hygiene for a global world. Our industrial-grade pest management protects the supply chain integrity of pharmaceuticals, food, and high-value retail goods against biological risks.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 'real-estate',
    title: 'Real Estate',
    description: 'Developing next-generation industrial parks and commercial spaces that serve as hubs for economic growth and infrastructure development.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 'agri',
    title: 'Agriculture Services',
    description: 'Transforming farming with technology. From drone spraying to supply chain optimization for produce, we bridge the gap between farm and market.',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 'marketing',
    title: 'Marketing',
    description: 'Data-driven marketing strategies that amplify brand presence. We help businesses connect with their target audience through digital and traditional channels.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80'
  },
  {
    id: 'manpower',
    title: 'Manpower',
    description: 'Providing skilled and semi-skilled workforce solutions to drive productivity. We handle recruitment, training, and management for diverse industries.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80'
  },
  {
    id: 'retail',
    title: 'Retail',
    description: 'Creating immersive retail experiences. Our network supports both brick-and-mortar stores and modern retail formats for maximum consumer engagement.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  }
];

const OurBusinesses: React.FC = () => {
  const [activeId, setActiveId] = useState(verticals[0].id);
  const activeVertical = verticals.find(v => v.id === activeId) || verticals[0];

  return (
    <section id="businesses" className="relative min-h-screen flex items-center bg-slate-900 text-white overflow-hidden py-24 md:py-0">
        {/* Background Image with Transition */}
        {verticals.map((v) => (
            <div 
                key={v.id}
                className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${activeId === v.id ? 'opacity-100' : 'opacity-0'}`}
            >
               <img src={v.image} alt={v.title} className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-slate-900/30"></div>
            </div>
        ))}

        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 px-6 h-full">
             {/* Content Side */}
             <div className="lg:col-span-7 flex flex-col justify-center space-y-8 pt-10 md:pt-0">
                <div className="flex items-center gap-2 font-bold tracking-wider uppercase text-yellow-500 mb-4 animate-fade-in">
                   <Flame className="fill-yellow-500" size={20} />
                   <span>Our Businesses</span>
                </div>
                
                <div key={activeVertical.id} className="animate-slide-up">
                    <h2 className="text-5xl md:text-8xl font-serif font-bold mb-8 leading-none">
                    {activeVertical.title}
                    </h2>
                    
                    <p className="text-lg md:text-xl text-slate-200 max-w-xl leading-relaxed mb-10 border-l-2 border-yellow-500 pl-6">
                    {activeVertical.description}
                    </p>

                    <button className="group px-8 py-3 rounded-full border border-white/30 hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center gap-3 font-bold uppercase text-sm tracking-wide">
                    read more 
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
             </div>

             {/* Navigation List Side */}
             <div className="lg:col-span-5 flex flex-col justify-center relative">
                <div className="flex flex-col space-y-1">
                   {verticals.map((v) => (
                      <button
                        key={v.id}
                        onClick={() => setActiveId(v.id)}
                        className={`
                          group relative text-left py-4 px-6 text-sm font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-between border-b border-white/10
                          ${activeId === v.id 
                            ? 'text-white border border-yellow-500/50 bg-slate-800/50 backdrop-blur-sm -mx-4 px-8 rounded-lg z-10 scale-105 shadow-xl' 
                            : 'text-slate-400 hover:text-white hover:pl-8'
                          }
                        `}
                      >
                        <span>{v.title}</span>
                        {activeId === v.id && (
                           <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.8)]"></div>
                        )}
                      </button>
                   ))}
                </div>
             </div>
        </div>
        
        {/* CSS for simple fade animation */}
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