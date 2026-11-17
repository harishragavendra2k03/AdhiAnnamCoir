import React from 'react';

const BlogSearch = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search articles..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border rounded px-3 py-2 w-full md:w-64"
    />
  );
};

export default BlogSearch;
