import React from 'react';

const Intro = () => {
  return (
    <section className="py-16 px-4 container mx-auto">
      <div className="flex flex-col md:flex-row items-center md:gap-8">
        <img
          src="public/images/about/gallery/About1.avif"
          // alt="Manufacturing"
          className="w-full md:w-1/2 h-auto rounded-lg shadow"
        />
        <div className="mt-6 md:mt-0 md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-[#183D2C]">
            About Adhi Annam Coir Comforts Pvt. Ltd.
          </h2>
          <p className="text-lg text-[#183D2C] mb-4">
            Established in 2007 in Pollachi, Tamil Nadu, we specialize in manufacturing sustainable and biodegradable coir products. Our portfolio includes coir‑based growing mediums, biodegradable packaging materials, erosion control mats and other environmentally friendly solutions.
          </p>
          <ul className="list-disc list-inside space-y-2 text-[#183D2C]">
            <li>Established in 2007</li>
            <li>Located in Pollachi, Tamil Nadu</li>
            <li>Advanced manufacturing technology</li>
            <li>Strict quality control</li>
            <li>Indian and international markets</li>
            <li>Commitment to sustainability and customer satisfaction</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Intro;
