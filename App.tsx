
import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Activity, 
  LayoutDashboard, 
  Clock, 
  AlertCircle, 
  ChevronRight, 
  Menu, 
  X,
  Stethoscope,
  BarChart3,
  Search,
  CheckCircle2
} from 'lucide-react';

// Sub-components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import DashboardPreview from './components/DashboardPreview';
import Statistics from './components/Statistics';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Statistics />
        <section id="features">
          <Features />
        </section>
        <section id="dashboard" className="bg-lightGray py-20">
          <DashboardPreview />
        </section>
        <section id="compliance" className="py-20">
          <ComplianceFocus />
        </section>
        <Newsletter />
        <section id="cta" className="bg-white py-20">
          <FinalCTA />
        </section>
      </main>
      <Footer />
    </div>
  );
};

const ComplianceFocus: React.FC = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
      <div>
        <h2 className="text-3xl font-heading font-bold text-primary mb-6">
          Compliance Isn't Optional. <br />
          <span className="text-secondary">We Make It Automatic.</span>
        </h2>
        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
          Regulatory audits can be stressful. TSMED Systems maintains an immutable digital trail for every device, 
          ensuring you are always "audit-ready" without the manual paperwork.
        </p>
        <ul className="space-y-4">
          {[
            "Automated maintenance schedules based on manufacturer guidelines",
            "Real-time expiration alerts for consumables and calibrations",
            "Single-click audit report generation",
            "Digital service history logs for every serial number"
          ].map((item, idx) => (
            <li key={idx} className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-secondary mr-3 mt-1 flex-shrink-0" />
              <span className="text-slate-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-12 lg:mt-0 relative">
        <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
          <img 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800&h=600" 
            alt="Healthcare professionals using digital device tracking" 
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="absolute -bottom-6 -right-6 bg-secondary text-white p-6 rounded-xl shadow-lg max-w-xs hidden md:block">
          <p className="text-sm font-semibold mb-1">Audit Score Improvement</p>
          <p className="text-3xl font-bold">+42%</p>
          <p className="text-xs opacity-80 mt-2">Based on average client data after 6 months of implementation.</p>
        </div>
      </div>
    </div>
  </div>
);

const FinalCTA: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 text-center">
    <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
      Ready to simplify your medical device management?
    </h2>
    <p className="text-xl text-slate-500 mb-10">
      Join hundreds of clinics and hospitals who trust TSMED Systems for their compliance needs.
    </p>
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <button className="bg-primary hover:bg-opacity-90 text-white px-8 py-4 rounded-lg font-bold transition-all transform hover:scale-105">
        Request a Live Demo
      </button>
      <button className="bg-white border border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg font-bold transition-all">
        View Pricing Plans
      </button>
    </div>
  </div>
);

export default App;
