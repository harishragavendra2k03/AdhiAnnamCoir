import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedArticle = ({ article }) => {
  if (!article) return null;
  return (
    <section className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
      <div className="relative">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-64 object-cover"
          onError={(e) => (e.target.src = '/images/blog/placeholder.jpg')}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
        <div className="absolute bottom-4 left-4 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-1">{article.title}</h2>
          <p className="text-sm">{article.readingTime} • {article.category}</p>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-700 mb-4 line-clamp-3">{article.description}</p>
        <Link
          to={`/blog/${article.slug}`}
          className="inline-block text-green-600 hover:underline font-medium"
        >
          Read Full Article →
        </Link>
      </div>
    </section>
  );
};

export default FeaturedArticle;
