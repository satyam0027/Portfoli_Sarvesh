"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Script from 'next/script';

// Example blog posts data
const blogPosts = [
  {
    id: "jyotish-shastra-qa",
    title: "JYOTISH SHASTRA (ASTROLOGY) Q&A",
    excerpt: "ज्योतिष विज्ञान नहीं, ईश्वर का वरदान है। Explore the divine connection between astrology and spirituality through this in-depth Q&A session about Jyotish Shastra.",
    image: "/blog/jyotish-thumb.jpg",
    category: "Astrology",
    readTime: "15 min read",
    date: "March 7, 2024",
    youtubeUrl: "https://youtu.be/K8_1z7BwiJc?si=4ynyg3ZnCIKclJqv",
    featured: true,
    imageAlt: "Jyotish Shastra Q&A Session - UNCUT Interview about Vedic Astrology"
  },
  {
    id: "rajiv-ranjan-journalism",
    title: "RAJIV RANJAN: JOURNALISM & REALITY Q&A",
    excerpt: "An in-depth look at Rajiv Ranjan's unique approach to journalism, his ground-level reporting style, and his commitment to authentic storytelling that reflects the voices of the people.",
    image: "/blog/journalism.jpg",
    category: "Journalism",
    readTime: "12 min read",
    date: "March 6, 2024",
    youtubeUrl: "https://youtu.be/52YgALPo_SU?si=goFr-MOJRk-l05qx"
  }
];

const categories = [
  "All",
  "Astrology",
  "Journalism"
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <>
      <Head>
        <title>Sarvesh Mishra's Blog | Expert Insights on PR, Media, and Astrology</title>
        <meta name="description" content="Explore expert insights from Sarvesh Mishra on PR, media relations, astrology, and journalism. In-depth analysis and Q&A sessions with industry leaders." />
        <meta name="keywords" content="Sarvesh Mishra blog, PR consultant blog, media relations, astrology insights, journalism analysis, Sarvesh Mishra articles, PR expert blog, media consultant India" />
        <meta property="og:title" content="Sarvesh Mishra's Blog | Expert Insights on PR, Media, and Astrology" />
        <meta property="og:description" content="Explore expert insights from Sarvesh Mishra on PR, media relations, astrology, and journalism. In-depth analysis and Q&A sessions with industry leaders." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sarveshmishra.com/blog" />
        <meta property="og:image" content="https://sarveshmishra.com/blog-og.jpg" />
        <link rel="canonical" href="https://sarveshmishra.com/blog" />
        <meta name="author" content="Sarvesh Mishra" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
      </Head>

      <Script
        id="blog-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Sarvesh Mishra's Blog",
            "description": "Expert insights on PR, media relations, astrology, and journalism",
            "url": "https://sarveshmishra.com/blog",
            "author": {
              "@type": "Person",
              "name": "Sarvesh Mishra"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Sarvesh Mishra Consulting",
              "logo": {
                "@type": "ImageObject",
                "url": "https://sarveshmishra.com/logo.png"
              }
            },
            "blogPost": blogPosts.map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "image": `https://sarveshmishra.com${post.image}`,
              "datePublished": post.date,
              "author": {
                "@type": "Person",
                "name": "Sarvesh Mishra"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Sarvesh Mishra Consulting",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://sarveshmishra.com/logo.png"
                }
              }
            }))
          })
        }}
      />

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
                <div className="relative h-56 w-full">
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
    </>
  );
}
