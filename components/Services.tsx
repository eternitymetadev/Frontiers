import React from 'react';
import Section from './Section';
import { Warehouse, Truck, PackageCheck, Zap, RotateCcw, Plane, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <Section id="services" className="bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal">
            <div>
                 <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Services</h2>
                 <p className="text-slate-500 text-lg max-w-lg">Comprehensive solutions tailored to meet the dynamic needs of modern supply chains.</p>
            </div>
            <div className="hidden md:flex gap-2">
                <div className="h-1 w-8 bg-emerald-500 rounded-full"></div>
                <div className="h-1 w-4 bg-slate-300 rounded-full"></div>
                <div className="h-1 w-2 bg-slate-300 rounded-full"></div>
            </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-24">
            {/* Warehousing */}
            <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 reveal-left">
                <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mb-8 group-hover:bg-emerald-600 transition-colors duration-500">
                    <Warehouse size={28} className="text-emerald-600 group-hover:text-white transition-colors duration-500"/>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Warehousing</h3>
                <ul className="space-y-4 mb-8">
                    {[
                        'Dedicated Warehouse Management',
                        'Inventory Management',
                        'E-Commerce Fulfilment Centres',
                        'Custom Clearance & Documentation',
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0"></span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <a href="#" className="inline-flex items-center text-emerald-600 font-bold text-sm hover:gap-2 transition-all">
                    View Capabilities <ArrowRight size={16} className="ml-1" />
                </a>
            </div>

             {/* Logistics */}
             <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 reveal delay-100">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors duration-500">
                    <Truck size={28} className="text-blue-600 group-hover:text-white transition-colors duration-500"/>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Logistics</h3>
                <ul className="space-y-4 mb-8">
                    {[
                        'FTL - Full Truck Load',
                        'PTL - Partial Truck Load',
                        'Drop Ship & Reverse Logistics',
                        'Last Mile Delivery',
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 shrink-0"></span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <a href="#" className="inline-flex items-center text-blue-600 font-bold text-sm hover:gap-2 transition-all">
                    View Fleet <ArrowRight size={16} className="ml-1" />
                </a>
            </div>

             {/* Other Services */}
             <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 reveal-right delay-200">
                <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-8 group-hover:bg-orange-500 transition-colors duration-500">
                    <PackageCheck size={28} className="text-orange-600 group-hover:text-white transition-colors duration-500"/>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Value Added</h3>
                <ul className="space-y-4 mb-8">
                    {[
                        'Pay on Delivery Services',
                        'Cross - Docking',
                        'Green Logistics',
                        'Customized Solution',
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-orange-400 shrink-0"></span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
                 <a href="#" className="inline-flex items-center text-orange-600 font-bold text-sm hover:gap-2 transition-all">
                    Explore More <ArrowRight size={16} className="ml-1" />
                </a>
            </div>
        </div>
        
        {/* Sustainability Highlight - Classy Version */}
        <div className="relative rounded-3xl overflow-hidden reveal-up delay-300">
            {/* Background Image Parallax Effect */}
            <div className="absolute inset-0 z-0">
                <img src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2041&q=80" alt="Nature" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-emerald-900/90 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent"></div>
            </div>

            <div className="relative z-10 p-8 md:p-16 flex flex-col md:flex-row gap-12 text-white">
                <div className="md:w-1/3 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-widest">
                        Sustainability
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold leading-tight">Committed to a Greener Supply Chain</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                        We actively integrate eco-friendly practices to reduce our carbon footprint, ensuring that efficiency never comes at the cost of the environment.
                    </p>
                </div>
                
                <div className="md:w-2/3 grid grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="glass p-6 rounded-2xl flex flex-col items-start gap-4 hover:bg-white/10 transition-colors cursor-default">
                        <Zap size={24} className="text-yellow-400" />
                        <div>
                            <span className="text-2xl font-bold block mb-1">100%</span>
                            <span className="text-xs text-slate-300 uppercase tracking-wide">Solar Powered WHs</span>
                        </div>
                    </div>
                    <div className="glass p-6 rounded-2xl flex flex-col items-start gap-4 hover:bg-white/10 transition-colors cursor-default">
                        <Truck size={24} className="text-blue-400" />
                        <div>
                            <span className="text-2xl font-bold block mb-1">EV</span>
                            <span className="text-xs text-slate-300 uppercase tracking-wide">Fleet Integration</span>
                        </div>
                    </div>
                    <div className="glass p-6 rounded-2xl flex flex-col items-start gap-4 hover:bg-white/10 transition-colors cursor-default">
                        <RotateCcw size={24} className="text-green-400" />
                        <div>
                            <span className="text-2xl font-bold block mb-1">Zero</span>
                            <span className="text-xs text-slate-300 uppercase tracking-wide">Paper (E-POD)</span>
                        </div>
                    </div>
                    <div className="glass p-6 rounded-2xl flex flex-col items-start gap-4 hover:bg-white/10 transition-colors cursor-default">
                        <Plane size={24} className="text-orange-400" />
                        <div>
                            <span className="text-2xl font-bold block mb-1">AI</span>
                            <span className="text-xs text-slate-300 uppercase tracking-wide">Route Opt.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;