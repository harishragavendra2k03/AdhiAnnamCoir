import React from 'react';

const Stats = () => {
  const stats = [
    { label: 'Countries Served', value: '10+', icon: '🌍' },
    { label: 'Shipping Ports', value: '3', icon: '⚓' },
    { label: 'Lead Time', value: '4 weeks', icon: '⏳' },
    { label: 'Enterprise Partners', value: '180+', icon: '🤝' },
  ];
  return (
    <section className="py-12 bg-[#EDE8DA]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#183D2C]">Our Global Reach</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow hover:shadow-lg transition p-6 text-center"
            >
              <div className="text-4xl mb-2">{s.icon}</div>
              <div className="text-2xl font-bold text-[#183D2C]">{s.value}</div>
              <div className="text-[#183D2C]">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
