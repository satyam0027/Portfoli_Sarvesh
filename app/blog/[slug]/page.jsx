import React from 'react';
import Image from 'next/image';
import { blogPosts } from '@/data/blogPosts';

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

export function generateMetadata({ params }) {
  const post = blogPosts.find((post) => post.id === params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: `${post.title} - Sarvesh Mishra's Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: ['Sarvesh Mishra'],
      url: `https://thesarveshmishra.com/blog/${post.id}`,
      siteName: 'Sarvesh Mishra',
    },
  };
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
        {videoId && (
          <div className="mt-16 pt-8 border-t border-gray-800">
            <h2 className="text-2xl font-bold text-yellow-500 mb-6">Watch the Video</h2>
            <div className="relative w-full aspect-video rounded-lg overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />
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
        )}

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