import React from 'react';
import BlogCard from './BlogCard';

const BlogGrid = ({ articles }) => {
  if (!articles || articles.length === 0) {
    return <p className="text-center text-gray-600">No articles found.</p>;
  }
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <BlogCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default BlogGrid;
