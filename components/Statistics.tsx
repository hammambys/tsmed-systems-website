
import React from 'react';

const Statistics: React.FC = () => {
  const stats = [
    { label: "Devices Managed", value: "250K+" },
    { label: "Compliance Rate", value: "99.9%" },
    { label: "Cost Savings", value: "30%" },
    { label: "Support uptime", value: "24/7" },
  ];

  return (
    <div className="bg-primary py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl md:text-4xl font-heading font-bold text-white mb-1">{stat.value}</p>
              <p className="text-sm text-teal-400 font-semibold uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
