import React from 'react';

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center min-h-[70vh] flex items-center justify-center"
      style={{ backgroundImage: `url("/images/about/gallery/About1.avif")` }}
    >
      <div className="absolute inset-0 bg-[#EDE8DA] bg-opacity-60" />
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-[#183D2C] mb-6">
          Championing Sustainability Through Innovative Coconut Fiber Solutions
        </h1>
        <p className="text-lg md:text-xl text-[#183D2C] mb-8">
          Adhi Annam Coir Comforts Pvt. Ltd. has been a leader in eco‑friendly coir manufacturing since 2007, delivering high‑quality, biodegradable solutions worldwide.
        </p>
      </div>
    </section>
  );
};

export default Hero;
