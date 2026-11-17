const FeaturedBlog = ({ article }) => {
  if (!article) return null;
  return (
    <div className="border rounded p-4 mb-6 bg-white shadow">
      <h2 className="text-2xl font-bold mb-2">Featured Article</h2>
      <h3 className="text-xl font-semibold mb-1">{article.title}</h3>
      <p className="text-gray-600 mb-2">{article.description}</p>
      <a
        href={`/blog`}
        className="text-green-600 hover:underline"
      >
        Read Full Article →
      </a>
    </div>
  );
};

export default FeaturedBlog;
