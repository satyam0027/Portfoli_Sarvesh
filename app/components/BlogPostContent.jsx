'use client';

import React from 'react';

export default function BlogPostContent({ content }) {
  return (
    <div 
      className="prose prose-lg prose-invert max-w-none prose-headings:text-yellow-500 prose-p:text-gray-300 prose-p:mb-8 prose-h2:mb-4 prose-h2:text-2xl prose-h2:font-bold"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
} 