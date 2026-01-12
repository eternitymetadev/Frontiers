import React from 'react';
import Section from './Section';
import { Heart, TrendingUp, Users, Award, Coffee, Zap } from 'lucide-react';

const LifeAtFrontiers: React.FC = () => {
  return (
    <Section id="life" className="bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Area of Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            <div className="lg:w-1/2 relative reveal-left">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img 
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                        alt="Team collaboration" 
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 text-white">
                         <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 mb-3">
                            <Heart size={16} className="text-pink-400 fill-pink-400" />
                            <span className="text-sm font-semibold">People First Culture</span>
                         </div>
                    </div>
                </div>
                {/* Floating Badge */}
                <div className="hidden md:block absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 reveal delay-200">
                    <div className="flex items-center gap-4">
                        <div className="bg-yellow-100 p-3 rounded-full text-yellow-600">
                            <Award size={24} />
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-slate-900">4.8/5</div>
                            <div className="text-xs text-slate-500 font-semibold uppercase">Employee Satisfaction</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:w-1/2 reveal-right">
                <span className="text-emerald-600 font-bold tracking-wider text-sm uppercase mb-2 block">Life at Frontiers</span>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                    Where Ambition <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">Finds a Home.</span>
                </h2>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                    We believe that empowering our people is the key to powering global supply chains. At Frontiers Group, you don't just find a job; you find a community dedicated to innovation, excellence, and mutual growth.
                </p>
                
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="mt-1 bg-emerald-100 p-2 rounded-lg text-emerald-600 shrink-0">
                            <TrendingUp size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900">Limitless Growth</h4>
                            <p className="text-sm text-slate-500">Continuous learning programs and leadership tracks designed to elevate your potential.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="mt-1 bg-blue-100 p-2 rounded-lg text-blue-600 shrink-0">
                            <Users size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900">Diverse & Inclusive</h4>
                            <p className="text-sm text-slate-500">A vibrant ecosystem where every voice is heard and every perspective matters.</p>
                        </div>
                    </div>
                </div>
                
                <button className="mt-10 px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-all hover:shadow-lg flex items-center gap-2">
                    Join Our Team <Zap size={18} className="text-yellow-400" />
                </button>
            </div>
        </div>

        {/* Culture Cards */}
        <div className="grid md:grid-cols-3 gap-6 reveal-up">
            <div className="group p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4 text-emerald-600 group-hover:scale-110 transition-transform">
                    <Coffee size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-700 transition-colors">Work-Life Harmony</h3>
                <p className="text-slate-500 text-sm">Flexible working hours and wellness initiatives to ensure you stay energized.</p>
            </div>

            <div className="group p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4 text-blue-600 group-hover:scale-110 transition-transform">
                    <Zap size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-700 transition-colors">Innovation Hub</h3>
                <p className="text-slate-500 text-sm">Access to the latest tech stacks and a culture that encourages experimentation.</p>
            </div>

            <div className="group p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4 text-orange-600 group-hover:scale-110 transition-transform">
                    <Award size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-orange-700 transition-colors">Rewards & Recognition</h3>
                <p className="text-slate-500 text-sm">Competitive compensation packages and performance-based bonuses.</p>
            </div>
        </div>

      </div>
    </Section>
  );
};

export default LifeAtFrontiers;