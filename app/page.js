"use client"; // Required for React hooks

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const podcasts = [
  { youtubeUrl: "https://youtu.be/Mvr3QuojbYk?si=GEJ42MlbTiMWjJju" },
  { youtubeUrl: "https://youtu.be/52YgALPo_SU?si=8NiQR8WVUODipeFl" },
  { youtubeUrl: "https://youtu.be/eooT59cETcw?si=TXctIs0sYvSA_B7g" },
  { youtubeUrl: "https://youtu.be/K8_1z7BwiJc?si=N1vsbwApRXqRa1kz" },
];

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    let animationFrameId;

    const scrollContinuously = () => {
      if (!isHovered) {
        container.scrollLeft += 1; // Adjust scroll speed
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0; // Reset scroll position
        }
      }
      animationFrameId = requestAnimationFrame(scrollContinuously);
    };

    scrollContinuously();

    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  // Helper function to get the YouTube video ID from the URL
  const getVideoId = (url) => {
    try {
      const regex = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/.*[?&]v=([^&#]*)/;
      const match = url.match(regex);
      if (match && match[1]) return match[1];

      const shortRegex = /(?:https?:\/\/)?youtu\.be\/([^?&#]*)/;
      const shortMatch = url.match(shortRegex);
      if (shortMatch && shortMatch[1]) return shortMatch[1];

      throw new Error("Invalid YouTube URL");
    } catch (e) {
      console.error("Error extracting video ID:", e.message);
      return null;
    }
  };

  // Helper function to get the thumbnail URL from the YouTube URL
  const getThumbnailUrl = (youtubeLink) => {
    const videoId = getVideoId(youtubeLink);
    return videoId
      ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
      : "/placeholder-thumbnail.jpg"; // Fallback image if no video ID is found
  };

  return (
    <div className="font-sans bg-transparent text-white">
      {/* Hero Section */}
      <section className="relative py-16">
        <div className="container mx-auto text-center px-4">
          <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-gray-700">
            <Image
              src="/FKYX5745.jpg"
              alt="Sarvesh Mishra"
              fill
              className="object-cover"
            />
          </div>
          <h1 className="text-5xl font-bold mt-4 text-yellow-400">
            Sarvesh Mishra
          </h1>
          <p className="text-xl font-light mt-2">
            Take your first step towards
          </p>
          <p className="text-2xl font-bold text-yellow-500 block mt-4">
            Self-growth | Media mastery | Unleashing your potential
          </p>
        </div>
      </section>

      {/* About Sarvesh Mishra Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          {/* Image Section */}
          <div className="flex-shrink-0 w-full md:w-1/2">
            <div className="relative w-full max-w-md mx-auto overflow-hidden shadow-lg border-4 border-yellow-500">
              <Image
                src="/Screenshot 2024-11-22 125527.jpg" // Ensure the image path is correct
                alt="Sarvesh Mishra"
                layout="responsive" // Make it responsive
                width={400} // Aspect ratio width
                height={400} // Aspect ratio height
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Content Section */}
          <div className="w-full md:w-1/2 text-white">
            <h2 className="text-4xl font-bold text-gray-100 mb-4">
              About <span className="text-yellow-500">Sarvesh Mishra</span>
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              Sarvesh Mishra is a dynamic self-branding coach, holistic wellness
              advocate, and marketing clarity expert. A media consultant,
              journalist, and author, Sarvesh has dedicated over 15 years to
              inspiring individuals and businesses to thrive. "My mantra is
              simple: Empowering people to unlock their potential by combining
              clarity, creativity, and balance." But how did this journey begin?
              From navigating the fast-paced world of investigative journalism
              to co-founding platforms like Red-Hot Media House and ES Digital
              World, Sarvesh has transformed challenges into stepping stones.
              Today, he stands as a beacon for personal growth and brand
              transformation, empowering thousands across India to craft their
              stories and live with purpose. This is his journey of growth,
              passion, and resilience.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors"
            >
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Podcasts Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-yellow-400">
            Featured Podcasts
          </h2>
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-scroll no-scrollbar whitespace-nowrap relative"
            onMouseEnter={() => setIsHovered(true)} // Pause scroll on hover
            onMouseLeave={() => setIsHovered(false)} // Resume scroll when not hovered
          >
            {[...podcasts, ...podcasts].map((podcast, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 mx-4"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={getThumbnailUrl(podcast.youtubeUrl)} // Dynamically fetch thumbnail from YouTube
                    alt={`Podcast ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 text-center text-gray-300">
                  <a
                    href={podcast.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-500 hover:text-white text-sm font-semibold transition-colors"
                  >
                    Watch on YouTube
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Community Section */}
      <section className="py-16 text-gray-100">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6 text-yellow-500">
            Join the Community
          </h2>
          <p className="text-lg font-light mb-6">
            Follow Sarvesh Mishra on social media and be part of a growing
            community that inspires change and drives growth.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.instagram.com/sarveshmishrashow/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-600"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a
              href="https://x.com/sarvesh03"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
              href="https://www.linkedin.com/in/digitalsarveshmishra/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-800"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-8 text-white">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; 2024 Sarvesh Mishra. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
