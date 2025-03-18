'use client';

import React from 'react';

export default function BlogCategories({ categories = [], onCategoryChange }) {
  if (!categories || categories.length === 0) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 mb-12">
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className="px-6 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm text-white hover:bg-gray-700/50 transition-colors duration-300"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
} 