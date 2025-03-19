"use client";

import React from "react";
import Image from "next/image";
import Head from "next/head";
import Script from 'next/script';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Sarvesh Mishra | PR & Media Consultant in India</title>
        <meta name="description" content="Learn about Sarvesh Mishra, an expert PR & Media Consultant in India. Discover his journey, expertise in strategic communications, and commitment to authentic storytelling." />
        <meta name="keywords" content="Sarvesh Mishra about, PR consultant India, media expert, strategic communications, brand development, Sarvesh Mishra profile, PR professional India" />
        <meta property="og:title" content="About Sarvesh Mishra | PR & Media Consultant in India" />
        <meta property="og:description" content="Learn about Sarvesh Mishra, an expert PR & Media Consultant in India. Discover his journey, expertise in strategic communications, and commitment to authentic storytelling." />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://thesarveshmishra.com/about" />
        <meta property="og:image" content="https://thesarveshmishra.com/author.jpg" />
        <link rel="canonical" href="https://thesarveshmishra.com/about" />
        <meta name="author" content="Sarvesh Mishra" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
      </Head>

      <Script
        id="about-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            "name": "About Sarvesh Mishra",
            "description": "Professional profile of Sarvesh Mishra, PR & Media Consultant",
            "url": "https://thesarveshmishra.com/about",
            "mainEntity": {
              "@type": "Person",
              "name": "Sarvesh Mishra",
              "jobTitle": "PR & Media Consultant",
              "description": "Expert in strategic communications, media relations, and brand development",
              "image": "https://thesarveshmishra.com/author.jpg",
              "sameAs": [
                "https://www.linkedin.com/in/sarveshmishra",
                "https://twitter.com/sarveshmishra",
                "https://www.instagram.com/sarveshmishra"
              ],
              "knowsAbout": [
                "Public Relations",
                "Media Relations",
                "Digital Marketing",
                "Brand Development",
                "Content Strategy",
                "Astrology",
                "Journalism"
              ],
              "award": [
                "Best PR Consultant 2023",
                "Media Excellence Award 2022"
              ]
            }
          })
        }}
      />

      <div className="min-h-screen bg-transparent text-white py-12">
        <div className="container mx-auto px-4">
      {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-4">
              About Sarvesh Mishra
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              PR & Media Consultant specializing in strategic communications and authentic storytelling
          </p>
        </div>

          {/* Profile Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-[400px] w-full">
              <Image
                src="/author.jpg"
                alt="Sarvesh Mishra - PR & Media Consultant"
                fill
                className="object-cover rounded-lg"
                priority
              />
      </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-yellow-500">Professional Journey</h2>
              <p className="text-gray-300 mb-6">
                With years of experience in PR and media consulting, I&apos;ve dedicated my career to helping organizations and individuals build strong, authentic relationships with their audiences. My approach combines traditional PR principles with modern digital strategies to create impactful communication campaigns.
              </p>
              <p className="text-gray-300 mb-6">
                As a consultant, I specialize in strategic communications, media relations, and brand development. My expertise extends across various industries, allowing me to provide tailored solutions that resonate with target audiences and achieve measurable results.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/sarveshmishra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-500 hover:text-yellow-400 transition-colors"
                >
                  LinkedIn →
                </a>
                <a
                  href="https://twitter.com/sarveshmishra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-500 hover:text-yellow-400 transition-colors"
                >
                  Twitter →
                </a>
              </div>
            </div>
      </div>

          {/* Expertise Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-yellow-500 text-center">Areas of Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Strategic Communications",
                  description: "Developing comprehensive communication strategies that align with organizational goals and resonate with target audiences."
                },
                {
                  title: "Media Relations",
                  description: "Building and maintaining strong relationships with media outlets to ensure positive coverage and brand visibility."
                },
                {
                  title: "Brand Development",
                  description: "Creating and enhancing brand identities through strategic positioning and consistent messaging."
                },
                {
                  title: "Digital Marketing",
                  description: "Implementing effective digital marketing strategies to increase online presence and engagement."
                },
                {
                  title: "Content Strategy",
                  description: "Developing compelling content strategies that tell authentic stories and engage audiences."
                },
                {
                  title: "Crisis Management",
                  description: "Providing expert guidance in handling communication crises and maintaining brand reputation."
                }
              ].map((expertise, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg hover:transform hover:scale-105 transition-transform duration-300"
                >
                  <h3 className="text-xl font-bold mb-3 text-yellow-500">{expertise.title}</h3>
                  <p className="text-gray-300">{expertise.description}</p>
        </div>
              ))}
        </div>
      </div>

          {/* Awards Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8 text-yellow-500">Recognition & Awards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {[
                {
                  title: "Best PR Consultant 2023",
                  organization: "PR Excellence Awards"
                },
                {
                  title: "Media Excellence Award 2022",
                  organization: "Indian Media Awards"
                }
              ].map((award, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg"
                >
                  <h3 className="text-xl font-bold mb-2 text-yellow-500">{award.title}</h3>
                  <p className="text-gray-300">{award.organization}</p>
                </div>
              ))}
            </div>
        </div>
        </div>
      </div>
    </>
  );
}

