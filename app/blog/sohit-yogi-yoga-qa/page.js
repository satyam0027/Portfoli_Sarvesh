"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Script from 'next/script';

// Helper function to get YouTube video ID from URL
  const getYouTubeVideoId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };
  
export default function SohitYogiYogaQAPage() {
  const youtubeUrl = "https://youtu.be/j_XKJNmOqoU?si=rp8Owzvz1g0keL6V";
  const videoId = getYouTubeVideoId(youtubeUrl);

  return (
    <div className="min-h-screen bg-transparent text-white py-12">
      <article className="container mx-auto px-4 max-w-4xl">
        {/* Header Section */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-6">
            SOHIT YOGI: YOGA TRANSFORMATION Q&A
          </h1>
          <div className="flex items-center gap-4 text-gray-400 mb-8">
            <span>March 15, 2024</span>
            <span>•</span>
            <span>18 min read</span>
          </div>
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden mb-8">
            <Image
              src="/blog/yoga-thumb.jpg"
              alt="Sohit Yogi explains the transformative power of yoga and its health benefits"
              fill
              className="object-cover"
            />
          </div>
        </header>

        {/* Table of Contents */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-bold text-yellow-500 mb-4">Table of Contents</h2>
          <ul className="space-y-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((num) => (
              <li key={num}>
                <a href={`#section-${num}`} className="text-gray-300 hover:text-yellow-500 transition-colors">
                  {num}. {getSectionTitle(num)}
                </a>
              </li>
            ))}
          </ul>
            </div>

        {/* Content Sections */}
        <div className="prose prose-invert max-w-none">
          <section id="section-1" className="mb-12">
            <h2 className="text-2xl font-bold text-yellow-500 mb-4">
              1. Why is yoga considered the most effective form of exercise?
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Yoga is the only form of exercise that not only strengthens the body but also calms the mind and uplifts the spirit. Unlike gym workouts, aerobics, Zumba, or running, which mainly focus on physical fitness, yoga helps in overall well-being by aligning the mind, body, and breath. It improves flexibility, builds strength, enhances lung capacity, and boosts immunity. Additionally, modern medical science confirms that many lifestyle diseases stem from poor habits, stress, and lack of movement—issues that yoga directly addresses. By correcting one's lifestyle through yoga, many chronic conditions like diabetes, hypertension, and back pain can be prevented or even reversed.
            </p>
          </section>

          <section id="section-2" className="mb-12">
            <h2 className="text-2xl font-bold text-yellow-500 mb-4">
              2. Many people say they cannot do yoga. Why should they try it?
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Many people hesitate to try yoga because they think it is difficult or they are not flexible enough. However, yoga is for everyone, regardless of age or fitness level. It is a misconception that only flexible people can do yoga; in fact, yoga increases flexibility over time. I always encourage beginners to practice with me for just a few days—if they don't feel the benefits, they can choose to leave. But in my experience, once people start practicing yoga, they rarely quit because they begin to see positive results in their health, energy levels, and mood. Many of my students have been with me for over 20 years without missing a class!
            </p>
          </section>

          <section id="section-3" className="mb-12">
            <h2 className="text-2xl font-bold text-yellow-500 mb-4">
              3. Why did you choose yoga as your career?
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Since childhood, I wanted to do something meaningful that could positively impact people's lives. While growing up, I observed that true success is not just about earning money but also about contributing to society. When I studied in a Gurukul, yoga was a part of our daily routine, but I never thought it could be a career. Later, when I pursued a professional degree in yoga from Patanjali University, I realized its potential. I saw that through yoga, I could help people heal from pain, prevent surgeries, and even overcome stress and anxiety. The satisfaction of seeing someone's life improve because of my guidance made me choose yoga as my life's work.
            </p>
          </section>

          <section id="section-4" className="mb-12">
            <h2 className="text-2xl font-bold text-yellow-500 mb-4">
              4. How did you start teaching yoga?
            </h2>
            <p className="text-gray-300 leading-relaxed">
              I started my formal yoga education at Dev Sanskriti University and later joined Patanjali University, where I was fortunate to be among the first batch of students. Swami Ramdev Ji's teachings had a great impact on me, and I learned the scientific and therapeutic aspects of yoga. My journey as a teacher began when I started taking personal yoga classes in Delhi NCR. I focused on results, ensuring that my students saw real improvements in their health. Later, my social media presence grew, and now my videos reach millions of people across 40+ countries.
            </p>
          </section>

          <section id="section-5" className="mb-12">
            <h2 className="text-2xl font-bold text-yellow-500 mb-4">
              5. What are the main areas you have worked on in yoga?
            </h2>
            <p className="text-gray-300 leading-relaxed">
              I have worked extensively on five major health issues through yoga:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mt-4 space-y-2">
              <li>
                <strong className="text-yellow-500">Obesity & Weight Loss</strong> – Many people struggle with belly fat and weight gain, which lead to heart disease and joint pain. My yoga techniques have helped thousands lose weight naturally.
              </li>
              <li>
                <strong className="text-yellow-500">Knee Pain & Joint Issues</strong> – I have worked with many people, including those from Pakistan, where knee pain is a major issue. Many of them saw 50-60% relief within a month of following my techniques.
              </li>
              <li>
                <strong className="text-yellow-500">Back Pain & Cervical Spondylitis</strong> – Several students who were told to undergo spinal surgery saw complete relief through yoga in just 3-6 months.
              </li>
              <li>
                <strong className="text-yellow-500">Heel Pain & Plantar Fasciitis</strong> – Many women suffer from severe heel pain, and yoga has provided them great relief.
              </li>
              <li>
                <strong className="text-yellow-500">Blood Pressure & Heart Health</strong> – I have helped people reduce their dependency on BP medications through yoga and lifestyle changes.
              </li>
              </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              Every day, I receive messages from people telling me how their years-old pains and health issues disappeared through my yoga routines. That is the biggest motivation for me.
            </p>
          </section>

          <section id="section-6" className="mb-12">
            <h2 className="text-2xl font-bold text-yellow-500 mb-4">
              6. What makes your yoga practice different from others?
            </h2>
            <p className="text-gray-300 leading-relaxed">
              My approach is result-oriented and personalized. Many yoga teachers focus on just demonstrating postures, but I focus on solving real health issues. I don't just upload videos; I personally connect with people through WhatsApp, Instagram, and live sessions, ensuring they get their health queries answered. Additionally, I keep my yoga simple and easy to follow, so even absolute beginners can start without fear. Many of my students have been practicing yoga with me for years because they see real results.
            </p>
          </section>

          <section id="section-7" className="mb-12">
            <h2 className="text-2xl font-bold text-yellow-500 mb-4">
              7. Why did you move from Rishikesh, the global yoga capital, to Gujarat?
            </h2>
            <p className="text-gray-300 leading-relaxed">
              My journey to Gujarat was unexpected. Before the COVID-19 lockdown, I was working in Delhi NCR, running yoga centers. But when the lockdown happened, everything shut down. I had no work, no source of income, and even had to ask my father for financial help. Then, my friend Saurabh, who was in Gujarat, invited me to start personal yoga classes there. I had nothing to lose, so I took the opportunity. Little did I know that this decision would change my life. Today, from Gujarat, my yoga reaches people in 40+ countries, including the US, Canada, UAE, and even Pakistan.
            </p>
          </section>

          <section id="section-8" className="mb-12">
            <h2 className="text-2xl font-bold text-yellow-500 mb-4">
              8. Do you consider yourself a celebrity now?
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Honestly, I don't see myself as a celebrity. Yes, I have millions of followers, my videos reach 3 crore+ people monthly, and I get thousands of messages every day. But I still make an effort to reply to people personally, especially on WhatsApp. To me, my followers are not just fans; they are family. If someone messages me about back pain or knee issues, it is my responsibility to respond and help them. That's why I never let fame get to my head.
            </p>
          </section>

          <section id="section-9" className="mb-12">
            <h2 className="text-2xl font-bold text-yellow-500 mb-4">
              9. What are the career opportunities in yoga?
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Yoga is a highly rewarding profession if done correctly. Some ways to build a career in yoga include:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mt-4 space-y-2">
              <li>
                <strong className="text-yellow-500">Home Classes:</strong> Taking personal yoga sessions (₹10,000-₹15,000 per month per client).
              </li>
              <li>
                <strong className="text-yellow-500">Yoga Centers:</strong> Running a yoga studio, which can generate lakhs of income.
              </li>
              <li>
                <strong className="text-yellow-500">Corporate Yoga Sessions:</strong> Companies pay ₹20,000-₹2,00,000 per session.
              </li>
              <li>
                <strong className="text-yellow-500">Social Media & Online Classes:</strong> Many people, including me, have built successful online yoga programs through Instagram, YouTube, and Facebook.
              </li>
              </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              There is huge demand for trained yoga teachers in India and abroad.
            </p>
          </section>

          <section id="section-10" className="mb-12">
            <h2 className="text-2xl font-bold text-yellow-500 mb-4">
              10. What are the biggest challenges in the yoga field?
            </h2>
            <p className="text-gray-300 leading-relaxed">
              One major challenge is the rise of unqualified yoga teachers who have little knowledge but start teaching after short-term courses. Many of them prioritize money over health and end up giving incorrect yoga practices, leading to injuries. Proper yoga training takes years of study and experience. That's why I always emphasize learning from certified and experienced teachers.
            </p>
          </section>

          <section id="section-11" className="mb-12">
            <h2 className="text-2xl font-bold text-yellow-500 mb-4">
              11. What was your proudest moment as a yoga teacher?
            </h2>
            <p className="text-gray-300 leading-relaxed">
              The proudest moments are when people tell me that my yoga guidance has changed their lives. For example:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mt-4 space-y-2">
                <li>A woman suffering from chronic knee pain for 10+ years avoided surgery after following my yoga techniques.</li>
                <li>A man from Pakistan lost 20 kg weight and sent me an audio message thanking me.</li>
                <li>Many people who had spinal issues and were advised surgery got completely cured through my methods.</li>
              </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              Nothing is more satisfying than knowing that my yoga practice is bringing real change in people's lives.
            </p>
          </section>
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
              href={youtubeUrl}
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

function getSectionTitle(num) {
  const titles = {
    1: "Why is yoga considered the most effective form of exercise?",
    2: "Many people say they cannot do yoga. Why should they try it?",
    3: "Why did you choose yoga as your career?",
    4: "How did you start teaching yoga?",
    5: "What are the main areas you have worked on in yoga?",
    6: "What makes your yoga practice different from others?",
    7: "Why did you move from Rishikesh, the global yoga capital, to Gujarat?",
    8: "Do you consider yourself a celebrity now?",
    9: "What are the career opportunities in yoga?",
    10: "What are the biggest challenges in the yoga field?",
    11: "What was your proudest moment as a yoga teacher?"
  };
  return titles[num];
} 