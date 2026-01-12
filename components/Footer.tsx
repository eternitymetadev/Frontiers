import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        <div>
           <div className="flex items-center gap-1 font-bold text-2xl tracking-tighter text-white mb-6">
              <span className="text-emerald-500">Frontiers</span>
              <div className="h-2 w-2 rounded-full bg-orange-500"></div>
              <div className="h-2 w-2 rounded-full bg-blue-500"></div>
           </div>
           <p className="text-sm leading-relaxed mb-6">
             Powering Supply Chains with Precision. Connecting warehouses to markets with efficiency, reliability, and innovation.
           </p>
           <div className="flex space-x-4">
             <a href="#" className="hover:text-emerald-400 transition-colors"><Linkedin size={20} /></a>
             <a href="#" className="hover:text-emerald-400 transition-colors"><Facebook size={20} /></a>
             <a href="#" className="hover:text-emerald-400 transition-colors"><Twitter size={20} /></a>
           </div>
        </div>

        <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-emerald-400">Warehousing Solutions</a></li>
                <li><a href="#" className="hover:text-emerald-400">3PL & C&F Services</a></li>
                <li><a href="#" className="hover:text-emerald-400">Drone Agri Services</a></li>
                <li><a href="#" className="hover:text-emerald-400">E-Commerce Fulfilment</a></li>
                <li><a href="#" className="hover:text-emerald-400">Last Mile Delivery</a></li>
            </ul>
        </div>

        <div>
            <h4 className="text-white font-bold mb-6">Technology</h4>
            <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-emerald-400">Shiprider</a></li>
                <li><a href="#" className="hover:text-emerald-400">TruMart AI</a></li>
                <li><a href="#" className="hover:text-emerald-400">AgriWings</a></li>
                <li><a href="#" className="hover:text-emerald-400">ERP Integration</a></li>
            </ul>
        </div>

        <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                    <MapPin size={18} className="text-emerald-500 mt-0.5" />
                    <span>Corporate HQ, Industrial Area,<br />New Delhi, India</span>
                </li>
                <li className="flex items-center gap-3">
                    <Phone size={18} className="text-emerald-500" />
                    <span>+91 123 456 7890</span>
                </li>
                <li className="flex items-center gap-3">
                    <Mail size={18} className="text-emerald-500" />
                    <span>contact@frontiersgroup.com</span>
                </li>
            </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-16 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} Frontiers Group. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;