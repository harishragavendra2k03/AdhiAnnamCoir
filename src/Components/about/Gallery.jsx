import React from 'react';

const Gallery = () => {
  const images = [
    'https://static.wixstatic.com/media/ab8198_0a1b2c3d4e5f6g7h8i9j.jpg',
    'https://static.wixstatic.com/media/ab8198_1b2c3d4e5f6g7h8i9j0k.jpg',
    'https://static.wixstatic.com/media/ab8198_2c3d4e5f6g7h8i9j0k1l.jpg',
    'https://static.wixstatic.com/media/ab8198_3d4e5f6g7h8i9j0k1l2m.jpg',
  ];
  return (
    <section className="py-12 bg-[#EDE8DA]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#183D2C]">
          Our Manufacturing Facility
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-lg shadow hover:shadow-lg transition">
              <img src={src} alt={`Facility ${i + 1}`} className="w-full h-48 object-cover hover:scale-105 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
