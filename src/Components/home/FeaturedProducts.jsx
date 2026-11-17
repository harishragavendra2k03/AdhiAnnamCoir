import React from 'react';
import { Link } from 'react-router-dom';
import { homeData } from '../../data/homeData';

const FeaturedProducts = () => {
  const { products } = homeData;
  return (
    <section className="py-16 bg-[#183D2C] text-[#EDE8DA]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">Our Products</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <Link
              key={p.title}
              to={p.link}
              className="group block bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <div className="overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold text-[#183D2C] group-hover:text-[#C5A16A] transition">
                  {p.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;