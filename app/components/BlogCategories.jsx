'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogCategories({ categories, posts }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    const filtered = category === "All" 
      ? posts 
      : posts.filter(post => post.category === category);
    setFilteredPosts(filtered);
  };

  return (
    <div className="container mx-auto px-4 mb-12">
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-6 py-2 rounded-full transition-colors duration-300 ${
              selectedCategory === category
                ? "bg-yellow-500 text-gray-900"
                : "bg-gray-800/50 backdrop-blur-sm hover:bg-yellow-500 text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {filteredPosts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
          >
            <div className="relative h-48">
              <Image
                src={post.image}
                alt={post.imageAlt || post.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-yellow-500">{post.category}</span>
                <span className="text-gray-400 text-sm">{post.readTime}</span>
              </div>
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-400 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">{post.date}</span>
                <span className="text-yellow-500">Read more →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 