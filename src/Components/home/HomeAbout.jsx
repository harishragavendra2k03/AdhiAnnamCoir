import React from 'react';
import { homeData } from '../../data/homeData';

const HomeAbout = () => {
  const { about } = homeData;
  return (
    <section className="py-16 bg-[#EDE8DA] text-[#183D2C]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-serif font-bold mb-4">{about.title}</h2>
          <p className="text-lg leading-relaxed">{about.description}</p>
        </div>
        <div className="md:w-1/2">
          <img src={about.image} alt="About Adhi Annam Coir" className="w-full rounded-lg object-cover" />
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
