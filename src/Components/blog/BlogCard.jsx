// BlogCard component for displaying a single blog article in the list view
// Uses Tailwind CSS for styling and matches the design specifications.

import React from "react";
import { Link } from "react-router-dom";

/**
 * Props:
 *  - article: object containing id, slug, title, description, image, date, readingTime, comments (optional), views (optional)
 */
const BlogCard = ({ article }) => {
  const {
    id,
    slug,
    title,
    description,
    image,
    date,
    readingTime,
    comments = 0,
    views = 0,
  } = article;

  return (
    <article
      key={id}
      className="group max-w-5xl mx-auto border border-gray-200 bg-white overflow-hidden transition-shadow duration-300 hover:shadow-lg"
    >
      {/* Desktop layout: image left, content right */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Image */}
        <div className="overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        {/* Content */}
        <div className="flex flex-col p-6 md:p-8 justify-between">
          <div>
            <p className="text-sm text-gray-500 mb-2">
              {date || "Latest Article"} · {readingTime || "5 min"}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#183D2C] group-hover:text-[#C5A16A] transition-colors mb-4 line-clamp-2">
              {title}
            </h2>
            <p className="text-gray-600 text-base md:text-lg line-clamp-3">
              {description}
            </p>
          </div>
          <div className="mt-6 flex items-center justify-between text-sm text-gray-600">
            <div className="flex gap-4">
              <span>{views} views</span>
              <span>{comments} comments</span>
            </div>
            <Link
              to={`/blog/${slug}`}
              className="font-semibold text-[#183D2C] hover:text-[#C5A16A] transition-colors"
            >
              Read More →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
