
import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell 
} from 'recharts';

const data = [
  { name: 'Active', value: 840, color: '#1FB6AA' },
  { name: 'Maintenance', value: 120, color: '#F59E0B' },
  { name: 'Repair', value: 35, color: '#EF4444' },
  { name: 'Expired', value: 12, color: '#64748B' },
];

const barData = [
  { name: 'Jan', count: 400 },
  { name: 'Feb', count: 300 },
  { name: 'Mar', count: 600 },
  { name: 'Apr', count: 800 },
  { name: 'May', count: 700 },
  { name: 'Jun', count: 900 },
];

const DashboardPreview: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
          Powerful Insight, Zero Clutter
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          We built TSMED Systems with a "one-glance" philosophy. 
          Everything you need is visual, prioritized, and just one click away.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Status Panel */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
          <div className="flex justify-between items-center mb-8">
            <h4 className="text-lg font-bold text-primary">Fleet Performance (Past 6 Months)</h4>
            <div className="flex space-x-2">
              <span className="w-3 h-3 rounded-full bg-secondary"></span>
              <span className="text-xs text-slate-500 font-medium">Utilization Rate</span>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip 
                  cursor={{fill: '#f8fafc'}} 
                  contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} 
                />
                <Bar dataKey="count" fill="#1FB6AA" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Status Distribution */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col items-center">
          <h4 className="text-lg font-bold text-primary mb-8 self-start">Asset Status</h4>
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-6 w-full space-y-2">
            {data.map((item, i) => (
              <div key={i} className="flex justify-between items-center text-sm">
                <div className="flex items-center">
                  <span className="w-2 h-2 rounded-full mr-2" style={{backgroundColor: item.color}}></span>
                  <span className="text-slate-600 font-medium">{item.name}</span>
                </div>
                <span className="text-primary font-bold">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-12 bg-primary/5 rounded-2xl p-6 border border-primary/10 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="bg-primary text-white p-3 rounded-lg mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap"><path d="M4 14.71 12 3v9.29L20 12.29 12 24v-9.29z"/></svg>
          </div>
          <div>
            <h5 className="font-bold text-primary">Real-time Anomaly Detection</h5>
            <p className="text-sm text-slate-600 italic">"Model 204X Ventilator in Unit 4 requires filter check soon."</p>
          </div>
        </div>
        <button className="text-primary font-bold hover:underline flex items-center">
          Configure Alerts <span className="ml-1">→</span>
        </button>
      </div>
    </div>
  );
};

export default DashboardPreview;
