import React from 'react';

const Certifications = () => {
  const certs = [
    { name: 'ISO 9001:2015', url: 'https://static.wixstatic.com/media/ab8198_iso9001.jpg' },
    { name: 'ISO 14001:2015', url: 'https://static.wixstatic.com/media/ab8198_iso14001.jpg' },
    { name: 'TUV SUD', url: 'https://static.wixstatic.com/media/ab8198_tuvsud.jpg' },
    { name: 'ZED', url: 'https://static.wixstatic.com/media/ab8198_zed.jpg' },
  ];
  return (
    <section className="py-12 bg-[#EDE8DA]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#183D2C]">Certifications</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 items-center justify-center">
          {certs.map((c, i) => (
            <div key={i} className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
              <img src={c.url} alt={c.name} className="h-24 object-contain mb-2" />
              <span className="text-[#183D2C] font-medium">{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
