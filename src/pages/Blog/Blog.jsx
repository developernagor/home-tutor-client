// src/pages/Blog.jsx
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import React from "react";
import { Link } from "react-router";

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

  const {data: blogData, isLoading, isError, error} = useQuery({
    queryKey: ["blogData"],
    queryFn: async() => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/blog`);
      console.log(res.data)
      return res.data;
    }
  })
  
  if (isLoading) {
    return <p className="text-center text-blue-500">Loading all questions...</p>;
  }
  
  if (isError) {
    return <p className="text-center text-red-500">Error: {error.message}</p>;
  }
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Our Blog</h1>

      <div 
      // className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {blogData.map((blog, index) => (
          <div
            key={index}
            className="bg-white border mb-4 shadow-md rounded-2xl p-6 hover:shadow-xl transition"
          >
            <Link to={`/blog/${blog._id}`} className="text-black hover:underline">
  {blog.title}
</Link>

            {/* <p className="text-gray-600 mb-4">{blog.blogDescription}</p> */}
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>{blog.author}</span>
              <span>{blog.blogUploadTime}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
