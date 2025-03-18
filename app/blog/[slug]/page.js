"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Example blog posts data
const blogPosts = [
  {
    id: "jyotish-shastra-qa",
    title: "JYOTISH SHASTRA (ASTROLOGY) Q&A",
    excerpt: "A comprehensive guide to understanding astrology, its significance, and how it influences our lives. Learn about planetary influences, common questions, and the role of authentic astrologers.",
    image: "/blog/astrology.jpg",
    category: "Astrology",
    readTime: "15 min read",
    date: "March 7, 2024",
  },
  {
    id: "boost-productivity",
    title: "5 Ways to Boost Your Productivity",
    excerpt: "Discover proven strategies to enhance your productivity and achieve more in less time.",
    image: "/blog/productivity.jpg",
    category: "Personal Growth",
    readTime: "5 min read",
    date: "March 6, 2024",
  },
  {
    id: "financial-planning",
    title: "The Art of Financial Planning",
    excerpt: "Learn the fundamentals of financial planning and secure your future with smart money management.",
    image: "/blog/finance.jpg",
    category: "Finance",
    readTime: "7 min read",
    date: "March 5, 2024",
  },
  {
    id: "marketing-trends-2024",
    title: "Digital Marketing Trends in 2024",
    excerpt: "Stay ahead of the curve with these cutting-edge digital marketing trends for 2024.",
    image: "/blog/marketing.jpg",
    category: "Marketing",
    readTime: "6 min read",
    date: "March 4, 2024",
  },
  {
    id: "successful-habits",
    title: "10 Habits of Successful Entrepreneurs",
    excerpt: "Explore the daily habits that set successful entrepreneurs apart from the rest.",
    image: "/blog/entrepreneurship.jpg",
    category: "Entrepreneurship",
    readTime: "8 min read",
    date: "March 3, 2024",
  },
];

const categories = [
  "All",
  "Astrology",
  "Personal Growth",
  "Finance",
  "Marketing",
  "Entrepreneurship",
  "Technology",
  "Lifestyle",
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-transparent text-white py-12">
      {/* Hero Section */}
      <div className="container mx-auto px-4 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-yellow-500 mb-4">
          Blog
        </h1>
        <p className="text-xl text-gray-300 text-center max-w-2xl mx-auto">
          Insights, strategies, and stories to help you grow personally and professionally.
        </p>
      </div>

      {/* Categories */}
      <div className="container mx-auto px-4 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
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
      </div>

      {/* Blog Posts Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link
              href={`/blog/${post.id}`}
              key={post.id}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:opacity-80 transition-opacity duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-yellow-500 text-sm">{post.category}</span>
                  <span className="text-gray-400 text-sm">{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold mb-2 group-hover:text-yellow-500 transition-colors duration-300">
                  {post.title}
                </h2>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <span className="text-yellow-500 text-sm font-semibold">
                    Read More →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}