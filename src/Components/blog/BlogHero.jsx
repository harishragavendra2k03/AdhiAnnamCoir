import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroImg from '../../assets/hero.png'; // ensure this image exists or replace with a proper blog banner

const BlogHero = () => {
  const navigate = useNavigate();
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-24 md:py-36"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="container mx-auto relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Insights for a Sustainable Tomorrow</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Explore ideas, innovations and expert insights on sustainable coconut coir solutions.
        </p>
        <button
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded"
          onClick={() => navigate('/')}
        >
          Back to Home
        </button>
      </div>
    </section>
  );
};

export default BlogHero;
