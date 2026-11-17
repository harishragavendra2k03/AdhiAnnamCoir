import React from 'react';
import { Link } from 'react-router-dom';

const BlogPagination = ({ current, total, onChange }) => {
  if (total <= 1) return null;
  const pages = [];
  for (let i = 1; i <= total; i++) {
    pages.push(i);
  }
  return (
    <div className="flex justify-center gap-2 mt-6">
      {current > 1 && (
        <Link
          to={`?page=${current - 1}`}
          onClick={(e) => { e.preventDefault(); onChange(current - 1); }}
          className="px-3 py-1 border rounded hover:bg-gray-100"
        >
          Prev
        </Link>
      )}
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onChange(p)}
          className={`px-3 py-1 border rounded ${p === current ? 'bg-green-600 text-white' : 'hover:bg-gray-100'}`}
        >
          {p}
        </button>
      ))}
      {current < total && (
        <Link
          to={`?page=${current + 1}`}
          onClick={(e) => { e.preventDefault(); onChange(current + 1); }}
          className="px-3 py-1 border rounded hover:bg-gray-100"
        >
          Next
        </Link>
      )}
    </div>
  );
};

export default BlogPagination;
