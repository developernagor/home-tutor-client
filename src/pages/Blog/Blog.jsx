// src/pages/Blog.jsx
import React from "react";

const blogPosts = [
  {
    id: 1,
    title: "5 Study Tips for Success",
    description: "Discover proven strategies to improve your focus and retain more information while studying.",
    date: "April 10, 2025",
    author: "John Doe",
  },
  {
    id: 2,
    title: "Top 10 Online Learning Platforms",
    description: "A curated list of the best online platforms to kickstart your learning journey in 2025.",
    date: "April 5, 2025",
    author: "Jane Smith",
  },
  {
    id: 3,
    title: "How to Stay Motivated While Learning Online",
    description: "Learn actionable techniques to stay inspired and achieve your education goals remotely.",
    date: "March 25, 2025",
    author: "Sarah Lee",
  },
];

const Blog = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Our Blog</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-semibold mb-3">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.description}</p>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>{post.author}</span>
              <span>{post.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
