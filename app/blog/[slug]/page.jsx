'use client';

import React from 'react';
import Image from 'next/image';

// Blog posts data
const blogPosts = [
  {
    id: "jyotish-shastra-qa",
    title: "JYOTISH SHASTRA (ASTROLOGY) Q&A",
    content: `
      <h2>Understanding Jyotish Shastra</h2>
      <p>Jyotish Shastra, also known as Vedic Astrology, is an ancient Indian system of astrology...</p>
      
      <h2>The Role of Planets</h2>
      <p>In Vedic astrology, each planet plays a significant role in shaping our lives...</p>
      
      <h2>Common Misconceptions</h2>
      <p>There are several misconceptions about Jyotish Shastra that need to be addressed...</p>
    `,
    date: "March 7, 2024",
    readTime: "15 min read",
    youtubeUrl: "https://youtu.be/K8_1z7BwiJc?si=4ynyg3ZnCIKclJqv"
  },
  {
    id: "rajiv-ranjan-journalism",
    title: "RAJIV RANJAN: JOURNALISM & REALITY Q&A",
    content: `
      <h2>Ground-Level Reporting</h2>
      <p>Rajiv Ranjan's unique approach to journalism focuses on ground-level reporting...</p>
      
      <h2>Handling Criticism</h2>
      <p>In the field of journalism, criticism is inevitable. Rajiv's approach to handling criticism...</p>
      
      <h2>Future of Journalism</h2>
      <p>The landscape of journalism is constantly evolving with new technologies...</p>
    `,
    date: "March 6, 2024",
    readTime: "12 min read",
    youtubeUrl: "https://youtu.be/52YgALPo_SU?si=goFr-MOJRk-l05qx"
  }
];

export const dynamic = 'force-static';

// Helper function to extract video ID from YouTube URL
function getYouTubeVideoId(url) {
  const regex = /[?&]v=([^&]+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.id,
  }));
}

export default function BlogPost({ params }) {
  const { slug } = params;
  const post = blogPosts.find((post) => post.id === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  const videoId = post.youtubeUrl ? getYouTubeVideoId(post.youtubeUrl) : null;

  return (
    <div className="min-h-screen bg-transparent py-12">
      <article className="container mx-auto px-4 max-w-4xl">
        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-4">
            {post.title}
          </h1>
          <div className="flex justify-center items-center gap-4 text-gray-400">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        <div className="prose prose-lg prose-invert max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {/* YouTube Video Section */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <h2 className="text-2xl font-bold text-yellow-500 mb-6">Watch the Video</h2>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden">
            {videoId ? (
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />
            ) : (
              <div className="absolute top-0 left-0 w-full h-full bg-gray-800/50 backdrop-blur-sm flex items-center justify-center">
                <p className="text-gray-400">Video not available</p>
              </div>
            )}
          </div>
          <div className="mt-4 text-center">
            <a
              href={post.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-400 transition-colors"
            >
              <span>Watch on YouTube</span>
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Author Section */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden">
              <Image
                src="/author.jpg"
                alt="Author"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-yellow-500">Sarvesh Mishra</h3>
              <p className="text-gray-400">PR & Media Consultant</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
} 