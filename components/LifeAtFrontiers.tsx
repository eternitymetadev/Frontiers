import React from 'react';
import Section from './Section';
import { Users, Truck, MapPin, CheckCircle, GraduationCap, Package } from 'lucide-react';

const ImpactStories: React.FC = () => {
  return (
    <Section id="life" className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 reveal">
          <span className="text-emerald-600 font-bold tracking-widest text-xs uppercase mb-4 block">Social Impact</span>
          <h2 className="text-5xl md:text-7xl font-black text-slate-950 tracking-tighter mb-6">IMPACT AT THE <br/><span className="text-emerald-500">FRONTIERS.</span></h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">See how our specialized logistics network transforms lives in India's hinterlands by ensuring essential access for all.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Story 1 */}
          <div className="group bg-white p-10 rounded-[3rem] shadow-xl hover:shadow-2xl transition-all reveal-left">
            <div className="h-64 rounded-2xl overflow-hidden mb-8">
              <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Education Access" />
            </div>
            <h3 className="text-3xl font-bold text-slate-950 mb-4">Empowering Learning</h3>
            <p className="text-slate-600 mb-8 leading-relaxed font-medium">
              We deliver educational resources and technology to remote villages, ensuring that geography never limits a child's potential to learn and grow.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full">
                <GraduationCap size={14} /> KNOWLEDGE FLOW
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
                <Users size={14} /> 100+ SCHOOLS
              </div>
            </div>
          </div>

          {/* Story 2 */}
          <div className="group bg-slate-900 p-10 rounded-[3rem] shadow-xl text-white hover:shadow-2xl transition-all reveal-right">
            <div className="h-64 rounded-2xl overflow-hidden mb-8">
              <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" alt="Rural Commerce" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Market Connection</h3>
            <p className="text-slate-400 mb-8 leading-relaxed font-medium">
              By bridging the gap between local producers and national markets, we create sustainable livelihoods for thousands of rural entrepreneurs.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 bg-white/10 px-4 py-2 rounded-full">
                <Package size={14} /> SCALE UP
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-teal-400 bg-white/10 px-4 py-2 rounded-full">
                <Truck size={14} /> FAST TRACK
              </div>
            </div>
          </div>
        </div>

        <div className="bg-emerald-600 rounded-[3rem] p-12 text-center text-white reveal">
          <h4 className="text-4xl font-black mb-6">CONNECTING LIVES.</h4>
          <p className="text-emerald-100 max-w-xl mx-auto mb-10 text-lg">We are the infrastructure of hope, moving the essentials that build a better tomorrow.</p>
          <button className="px-12 py-5 bg-white text-emerald-600 rounded-full font-black uppercase text-sm tracking-widest hover:scale-105 transition-transform shadow-2xl">
            Learn More
          </button>
        </div>
      </div>
    </Section>
  );
};

export default ImpactStories;