
import React from 'react';
import { Activity, Clock, LayoutDashboard, Search, AlertCircle, FileText } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      title: "Real-time Tracking",
      description: "Know exactly where your devices are and who is using them. IoT-ready tracking for complex hospital wings.",
      icon: Activity,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Compliance Focused",
      description: "Automated logs for audits, preventative maintenance alerts, and expiration tracking for critical parts.",
      icon: Clock,
      color: "bg-teal-50 text-teal-600"
    },
    {
      title: "Simple Dashboards",
      description: "Complex data turned into actionable insights. Clear visibility for facility managers and clinicians alike.",
      icon: LayoutDashboard,
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "Asset Discovery",
      description: "Automatically index new devices as they enter your network. No more manual data entry or lost equipment.",
      icon: Search,
      color: "bg-orange-50 text-orange-600"
    },
    {
      title: "Maintenance Alerts",
      description: "Proactive notifications before failure. Reduce downtime and extend the life of expensive medical assets.",
      icon: AlertCircle,
      color: "bg-red-50 text-red-600"
    },
    {
      title: "Report Builder",
      description: "Customizable reports for board meetings or regulatory inspections. Export as PDF, Excel, or direct link.",
      icon: FileText,
      color: "bg-slate-100 text-slate-600"
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">Core Capabilities</h2>
        <h3 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-6">
          Everything you need to manage <br /> your medical inventory
        </h3>
        <p className="max-w-3xl mx-auto text-lg text-slate-500 mb-16">
          TSMED Systems replaces messy spreadsheets and antiquated software with a modern, high-performance platform designed for the speed of modern healthcare.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-8 border border-slate-100 rounded-2xl bg-white hover:border-secondary transition-all hover:shadow-xl group">
              <div className={`w-14 h-14 ${f.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <f.icon className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-heading font-bold text-primary mb-3 text-left">{f.title}</h4>
              <p className="text-slate-600 leading-relaxed text-left">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
