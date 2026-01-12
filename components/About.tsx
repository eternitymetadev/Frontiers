import React from 'react';
import Section from './Section';
import { Heart, Globe, Target, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Section id="about" className="bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="reveal-left">
            <div className="inline-block py-1 px-3 bg-emerald-100 text-emerald-700 rounded-lg text-xs font-bold uppercase tracking-widest mb-6">Our Purpose</div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-950 mb-8 tracking-tighter leading-[0.9]">THE SILENT ENGINE <br/><span className="text-emerald-500">OF PROGRESS.</span></h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-10 font-medium">
              We don't just move boxes; we move economies. Frontiers Group is the bridge between aspiration and availability in India's most underserved markets.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="h-12 w-12 bg-slate-100 rounded-2xl flex items-center justify-center text-emerald-600 shrink-0">
                  <Heart size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-950 mb-1">Human-Centric</h4>
                  <p className="text-sm text-slate-500">Every delivery represents a family, a business, or a community reaching its goal.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-12 w-12 bg-slate-100 rounded-2xl flex items-center justify-center text-emerald-600 shrink-0">
                  <Globe size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-950 mb-1">Deep Integration</h4>
                  <p className="text-sm text-slate-500">Operating in Tier III to VII markets, where infrastructure challenges meet our innovation.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative reveal-right">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Supply Chain Efficiency" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-emerald-500/10 mix-blend-multiply"></div>
            </div>
            {/* Floating Achievement */}
            <div className="absolute -bottom-10 -left-10 bg-slate-950 text-white p-10 rounded-[2.5rem] shadow-2xl border border-white/10 hidden md:block">
              <div className="text-5xl font-black text-emerald-400 mb-2">50+</div>
              <div className="text-xs font-bold tracking-[0.3em] uppercase opacity-60">Years of trust</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;