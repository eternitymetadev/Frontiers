import React from 'react';
import Section from './Section';
import { Users, Truck, ShoppingCart, Leaf, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Section id="about" className="bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <span className="text-emerald-600 font-semibold tracking-wider text-sm uppercase mb-2 block">Who We Are</span>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">The Group Ecosystem</h2>
          <p className="max-w-2xl mx-auto text-slate-500 text-lg">
             We are a conglomerate of specialized logistics entities, each solving a unique piece of the supply chain puzzle.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          
          {/* Main Card - Frontiers */}
          <div className="md:col-span-2 bg-slate-50 rounded-3xl p-8 md:p-12 relative overflow-hidden group hover:shadow-2xl transition-all duration-500 border border-slate-100 reveal-left">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="relative z-10">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-emerald-600">
                    <Users size={32} />
                </div>
                <h3 className="text-3xl font-bold mb-4">Frontiers</h3>
                <p className="text-slate-600 text-lg mb-8 max-w-md">
                    The backbone of our operations. Large Scale Distribution focused in Tier III to Tier VII markets backed by efficient market aggregation.
                </p>
                <div className="flex gap-3 flex-wrap">
                    <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-slate-600 border border-slate-200">Manpower Management</span>
                    <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-slate-600 border border-slate-200">Market Aggregation</span>
                </div>
            </div>
          </div>

          {/* Side Card - Eternity */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 relative overflow-hidden group hover:shadow-2xl transition-all duration-500 reveal-right delay-100">
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            <div className="w-14 h-14 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center mb-6 text-orange-400">
                 <Truck size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-3">Eternity Forwarders</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
               Specialized PTL & FTL logistics. Fast deliveries in Tier III & IV cities is our core expertise.
            </p>
            <a href="#services" className="text-orange-400 text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <span className="text-lg">→</span></a>
          </div>

          {/* Bottom Card - Trumart */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-10 border border-blue-100 group hover:shadow-xl transition-all duration-500 reveal-left delay-200">
             <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600">
                   <ShoppingCart size={24} />
                </div>
                <div className="bg-blue-200 text-blue-800 text-[10px] font-bold px-2 py-1 rounded uppercase">E-Comm</div>
             </div>
             <h3 className="text-xl font-bold mb-2">Trumart</h3>
             <p className="text-slate-600 text-sm">
                Ecommerce enablement & multi-channel distribution. Building brand presence online.
             </p>
          </div>

          {/* Bottom Card - D2F */}
          <div className="md:col-span-2 bg-gradient-to-br from-emerald-900 to-slate-900 text-white rounded-3xl p-8 md:p-12 relative overflow-hidden group hover:shadow-xl transition-all duration-500 reveal-right delay-300">
             <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
             <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                 <div>
                    <div className="w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-6 text-emerald-400">
                        <Leaf size={28} />
                    </div>
                    <h3 className="text-3xl font-bold mb-2">D2F <span className="text-emerald-400 font-light">AgriTech</span></h3>
                    <p className="text-emerald-100/70 max-w-sm">
                        Drone Spray services & 3PL for the agricultural sector. Revolutionizing farming logistics.
                    </p>
                 </div>
                 <div className="md:border-l md:border-white/10 md:pl-8 flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                        <CheckCircle2 size={18} className="text-emerald-400" />
                        <span className="text-sm font-medium">Precision Spraying</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <CheckCircle2 size={18} className="text-emerald-400" />
                        <span className="text-sm font-medium">Farmer Network</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <CheckCircle2 size={18} className="text-emerald-400" />
                        <span className="text-sm font-medium">Rural Reach</span>
                    </div>
                 </div>
             </div>
          </div>
        </div>

        {/* Vision/Mission Minimal */}
        <div className="grid md:grid-cols-2 gap-16 items-center border-t border-slate-100 pt-16 reveal">
            <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6">Driven by Purpose</h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                    To be the most trusted and innovative warehousing partner in India, setting the benchmark for accuracy, reliability, and efficiency.
                </p>
                <button className="text-emerald-600 font-bold hover:text-emerald-700 transition-colors">Read our full manifesto &rarr;</button>
            </div>
            <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-2xl transform rotate-3 scale-95 opacity-50"></div>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 relative">
                     <div className="grid grid-cols-2 gap-6">
                         <div className="text-center p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
                            <div className="text-3xl font-bold text-slate-900 mb-1">50+</div>
                            <div className="text-xs text-slate-500 uppercase tracking-wide">Years of Trust</div>
                         </div>
                         <div className="text-center p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
                            <div className="text-3xl font-bold text-slate-900 mb-1">100%</div>
                            <div className="text-xs text-slate-500 uppercase tracking-wide">Compliance</div>
                         </div>
                     </div>
                </div>
            </div>
        </div>
      </div>
    </Section>
  );
};

export default About;