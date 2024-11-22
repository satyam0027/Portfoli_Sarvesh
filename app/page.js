"use client"; // Required for React hooks

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Typical from "react-typical";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const podcasts = [
  { image: "/FKYX5745.jpg", youtubeUrl: "https://youtu.be/52YgALPo_SU" },
  { image: "/images/podcast2.jpg", youtubeUrl: "https://youtu.be/9nYnZEuM3VY" },
  { image: "/images/podcast3.jpg", youtubeUrl: "https://youtu.be/twtVUvY8vzE" },
  { image: "/images/podcast3.jpg", youtubeUrl: "https://youtu.be/twtVUvY8vzE" },
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
          <h1 className="text-5xl font-bold mt-4 text-yellow-400">Sarvesh Mishra</h1>
          <p className="text-xl font-light mt-2">Take your first step towards</p>
          <Typical
            steps={[
              "Self-growth.", 1000,
              "Media mastery.", 1000,
              "Unleashing your potential.", 1000,
            ]}
            loop={Infinity}
            wrapper="span"
            className="text-2xl font-bold text-yellow-500 block mt-4"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
            <Image
              src="/FKYX5745.jpg"
              alt="Sarvesh Mishra"
              width={350}
              height={350}
              className="rounded-lg shadow-lg border-4 border-gray-700"
            />
          </div>
          <div className="md:w-1/2 md:pl-10 text-white">
            <h2 className="text-4xl font-bold text-gray-100 mb-4">
              About <span className="text-yellow-500">Sarvesh Mishra</span>
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Sarvesh Mishra is a Media Consultant, Self-Branding & Marketing
              Clarity Coach, journalist, and author with over 15 years of
              experience. From investigative stories to inspirational speeches,
              Sarvesh has worked across India to empower individuals and brands.
            </p>
            <p className="text-lg leading-relaxed">
              He is the founder of *Red-Hot Media House* and the co-founder of
              *ES Digital World*. Sarvesh believes in the power of connection
              and aims to inspire others to achieve their full potential.
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
                    src={podcast.image}
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
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-600"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
              href="https://linkedin.com"
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

