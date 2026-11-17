import React from 'react';

const CTA = () => {
  return (
    <section className="py-16 bg-[#183D2C] text-center">
      <h2 className="text-3xl font-bold text-[#EDE8DA] mb-4">Let's Build a Sustainable Future Together</h2>
      <p className="text-[#EDE8DA] mb-6 max-w-2xl mx-auto">
        Explore our eco‑friendly coir solutions and join us in creating a greener tomorrow.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a href="/products" className="bg-[#C5A16A] hover:bg-[#EDE8DA] text-[#183D2C] font-semibold py-2 px-6 rounded transition">
          Explore Our Products
        </a>
        <a href="/contact" className="bg-[#EDE8DA] hover:bg-[#C5A16A] text-[#183D2C] font-semibold py-2 px-6 rounded transition">
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default CTA;
