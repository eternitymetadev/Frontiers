import React from 'react';
import Section from './Section';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Punjab', area: 890000 },
  { name: 'UP', area: 321000 },
  { name: 'Haryana', area: 200500 },
  { name: 'Gujarat', area: 80500 },
  { name: 'Maharashtra', area: 80000 },
  { name: 'Rajasthan', area: 58000 },
];

const colors = ['#10b981', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];

const Stats: React.FC = () => {
  return (
    <Section id="stats" dark>
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-2">Scale of Operations</h2>
            <p className="text-xl text-gray-400">Driving efficiency with PAN India presence</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            { val: "1.75 M", label: "Square Feet", sub: "Warehousing Space" },
            { val: "186", label: "Warehouses", sub: "Nationwide" },
            { val: "9,000+", label: "Pin Codes", sub: "Served" },
            { val: "19.8 M", label: "Boxes", sub: "Handled Annually" },
          ].map((stat, idx) => (
            <div key={idx} className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-emerald-500 transition-colors">
              <div className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-teal-300 mb-2">
                {stat.val}
              </div>
              <div className="text-white font-bold text-lg">{stat.label}</div>
              <div className="text-slate-400 text-sm">{stat.sub}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 h-[400px]">
                <h3 className="text-lg font-semibold mb-6 text-emerald-400">Top Warehouse Locations (Sq. Ft)</h3>
                <ResponsiveContainer width="100%" height="90%">
                    <BarChart data={data} layout="vertical" margin={{ left: 40 }}>
                        <XAxis type="number" hide />
                        <YAxis type="category" dataKey="name" stroke="#cbd5e1" width={100} />
                        <Tooltip 
                            contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px' }}
                            itemStyle={{ color: '#fff' }}
                            formatter={(value: number) => new Intl.NumberFormat('en-IN').format(value) + ' sq.ft'}
                        />
                        <Bar dataKey="area" radius={[0, 4, 4, 0]} barSize={20}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
             </div>

             <div className="space-y-8">
                <div>
                    <h3 className="text-3xl font-bold mb-4">Experience & Capabilities</h3>
                    <p className="text-slate-300 mb-6">With over 50+ years of experience in handling DG warehouses and a dedicated team.</p>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                    <div className="border-l-4 border-yellow-500 pl-4">
                        <div className="text-3xl font-bold">477+</div>
                        <div className="text-sm text-slate-400">Employees</div>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                        <div className="text-3xl font-bold">64+</div>
                        <div className="text-sm text-slate-400">Agri & Pest Clients</div>
                    </div>
                    <div className="border-l-4 border-emerald-500 pl-4">
                        <div className="text-3xl font-bold">11+</div>
                        <div className="text-sm text-slate-400">HSE Parameters</div>
                    </div>
                     <div className="border-l-4 border-orange-500 pl-4">
                        <div className="text-3xl font-bold">12k+</div>
                        <div className="text-sm text-slate-400">FTL Vehicles</div>
                    </div>
                </div>
             </div>
        </div>
      </div>
    </Section>
  );
};

export default Stats;