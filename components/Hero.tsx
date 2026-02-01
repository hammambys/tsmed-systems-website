import React from "react";
import { ShieldCheck, ChevronRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-10 pointer-events-none">
        <div className="w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 opacity-10 pointer-events-none">
        <div className="w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-primary px-4 py-1.5 rounded-full mb-6 border border-blue-100">
              <ShieldCheck className="w-4 h-4 text-secondary" />
              <span className="text-sm font-semibold">
                The Gold Standard in Device Compliance
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-primary leading-tight mb-6">
              Track every device. <br />
              <span className="text-secondary">Stay compliant.</span> <br />
              Stay confident.
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              TSMED Systems gives healthcare businesses real-time visibility and
              control over their medical devices. Manage maintenance, audits,
              and expirations through a single, intuitive interface.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center hover:bg-opacity-90 transition-all shadow-lg shadow-primary/20">
                Book a Demo <ChevronRight className="ml-2 w-5 h-5" />
              </button>
              <button className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-50 transition-all">
                Learn More
              </button>
            </div>

            <div className="mt-12 flex items-center space-x-8 opacity-70">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white"
                    src={`https://i.pravatar.cc/150?u=${i}`}
                    alt="user"
                  />
                ))}
              </div>
              <p className="text-sm text-slate-500 font-medium">
                Trusted by 500+ Healthcare Providers
              </p>
            </div>
          </div>

          <div className="mt-16 lg:mt-0 relative hidden lg:block">
            <div className="bg-white p-4 rounded-2xl shadow-2xl border border-slate-100 animate-float">
              <img
                src="/hero-img.jpg"
                alt="TSMED Interface"
                className="rounded-lg w-full h-auto"
              />
            </div>
            {/* Float badge */}
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-slate-50 flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <ShieldCheck className="text-green-600 w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                  Status
                </p>
                <p className="text-sm font-bold text-slate-800">
                  100% Audit Ready
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;
