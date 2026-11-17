import React from 'react';

const BlogCategories = ({ categories, active, onSelect }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-4 py-2 rounded-full border transition-colors ${
            active === cat ? 'bg-green-600 text-white border-green-600' : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default BlogCategories;
