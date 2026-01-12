import React from 'react';
import Section from './Section';
import { Smartphone, Monitor, Database, Bot, Truck, Code2, Wifi } from 'lucide-react';

const TechStack: React.FC = () => {
  return (
    <Section id="tech" className="bg-slate-950 text-white overflow-hidden relative" dark>
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 reveal">
            <div>
                <span className="text-emerald-400 font-medium tracking-wider text-sm uppercase mb-4 block">Future Ready</span>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">Technology <br/><span className="text-slate-500">Enablement</span></h2>
            </div>
            <p className="max-w-md text-slate-400 text-lg">
                We leverage a full stack of proprietary and integrated software solutions to maintain total visibility and control.
            </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Tech Card 1 */}
            <div className="group p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-emerald-500/50 hover:to-emerald-900/50 transition-all duration-500 reveal-left">
                <div className="bg-slate-900 h-full rounded-xl p-8 relative overflow-hidden">
                    <div className="absolute top-4 right-4 p-2 bg-yellow-500/10 rounded-lg text-yellow-500">
                        <Truck size={20} />
                    </div>
                    <div className="mt-8">
                        <h4 className="font-bold text-xl mb-2 text-white group-hover:text-yellow-400 transition-colors">Shiprider</h4>
                        <p className="text-sm text-slate-500 font-mono mb-4">Logistics Management System</p>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            In-house proprietary software streamlining order management, delivery tracking, and complex operational demands.
                        </p>
                    </div>
                </div>
            </div>

            {/* Tech Card 2 */}
            <div className="group p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-green-500/50 hover:to-green-900/50 transition-all duration-500 reveal delay-100">
                <div className="bg-slate-900 h-full rounded-xl p-8 relative overflow-hidden">
                    <div className="absolute top-4 right-4 p-2 bg-green-500/10 rounded-lg text-green-500">
                        <Monitor size={20} />
                    </div>
                    <div className="mt-8">
                        <h4 className="font-bold text-xl mb-2 text-white group-hover:text-green-400 transition-colors">Unicommerce</h4>
                        <p className="text-sm text-slate-500 font-mono mb-4">E-Commerce Middleware</p>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Seamless integration for multi-channel order inventory, ensuring automated allocation and precise reconciliation.
                        </p>
                    </div>
                </div>
            </div>

            {/* Tech Card 3 */}
            <div className="group p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-blue-500/50 hover:to-blue-900/50 transition-all duration-500 reveal-right delay-200">
                <div className="bg-slate-900 h-full rounded-xl p-8 relative overflow-hidden">
                    <div className="absolute top-4 right-4 p-2 bg-blue-500/10 rounded-lg text-blue-500">
                        <Database size={20} />
                    </div>
                    <div className="mt-8">
                        <h4 className="font-bold text-xl mb-2 text-white group-hover:text-blue-400 transition-colors">MS Business Central</h4>
                        <p className="text-sm text-slate-500 font-mono mb-4">ERP Ecosystem</p>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            End-to-end financial and operational visibility, with real-time sync of orders and automated accounting.
                        </p>
                    </div>
                </div>
            </div>

            {/* Tech Card 4 */}
            <div className="lg:col-span-2 group p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-indigo-500/50 hover:to-indigo-900/50 transition-all duration-500 reveal-left delay-300">
                <div className="bg-slate-900 h-full rounded-xl p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
                     <div className="p-4 bg-indigo-500/20 rounded-full text-indigo-400 shrink-0">
                        <Bot size={32} />
                    </div>
                    <div>
                        <h4 className="font-bold text-xl mb-2 text-white group-hover:text-indigo-400 transition-colors">TruMart AI & Analytics</h4>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-lg">
                            An advanced chatbot solution providing instant access to real-time data, performance dashboards, and SKU-level sales analytics to empower decision making.
                        </p>
                    </div>
                    <div className="ml-auto hidden md:block">
                        <Code2 size={48} className="text-slate-800" />
                    </div>
                </div>
            </div>

             {/* Tech Card 5 */}
             <div className="group p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-emerald-500/50 hover:to-emerald-900/50 transition-all duration-500 reveal-right delay-400">
                <div className="bg-slate-900 h-full rounded-xl p-8 relative overflow-hidden">
                    <div className="absolute top-4 right-4 p-2 bg-emerald-500/10 rounded-lg text-emerald-500">
                        <Smartphone size={20} />
                    </div>
                    <div className="mt-8">
                        <h4 className="font-bold text-xl mb-2 text-white group-hover:text-emerald-400 transition-colors">AgriWings App</h4>
                        <p className="text-sm text-slate-500 font-mono mb-4">Farmer Connect</p>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Drone spray booking, weather updates, and live tracking.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </Section>
  );
};

export default TechStack;