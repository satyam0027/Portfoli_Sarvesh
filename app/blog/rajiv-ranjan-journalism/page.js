import React from "react";
import Image from "next/image";
import Link from "next/link";

// Helper function to get YouTube video ID from URL
const getYouTubeVideoId = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

export default function RajivRanjanJournalismPage() {
  const youtubeUrl = "https://youtu.be/52YgALPo_SU?si=goFr-MOJRk-l05qx";
  const videoId = getYouTubeVideoId(youtubeUrl);

  return (
    <div className="min-h-screen bg-transparent text-white py-12">
      <article className="container mx-auto px-4 max-w-4xl">
        {/* Header Section */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-6">
            RAJIV RANJAN: JOURNALISM & REALITY Q&A
          </h1>
          <div className="flex items-center gap-4 text-gray-400 mb-8">
            <span>March 6, 2024</span>
            <span>•</span>
            <span>12 min read</span>
          </div>
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden mb-8">
            <Image
              src="/blog/rajiv-ranjan-journalism.jpg"
              alt="Rajiv Ranjan Journalism"
              fill
              className="object-cover"
            />
          </div>
        </header>

        {/* Table of Contents */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-bold text-yellow-500 mb-4">Table of Contents</h2>
          <ul className="space-y-2">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
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
              1. How did Rajiv Ranjan start his journalism journey?
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Rajiv Ranjan's journey into journalism was not pre-planned. He entered the field by observing crowds and engaging with people's concerns. His approach was organic—wherever he saw an issue affecting people, he started reporting on it. The institution he worked for gave him the freedom to experiment, which allowed him to develop his unique ground-level reporting style.
            </p>
          </section>

          <section id="section-2" className="mb-12">
            <h2 className="text-2xl font-bold text-yellow-500 mb-4">
              2. What makes Rajiv Ranjan's journalism unique?
            </h2>
            <p className="text-gray-300 leading-relaxed">
              His journalism is based on ground reality and public voices. Unlike mainstream journalists who stay in studios, Rajiv is always in the field, sweating and interacting with common people. He believes in capturing what people genuinely feel, rather than manipulating narratives. His approach is not limited to serious news—he includes humor and relatable moments, making his content engaging.
            </p>
          </section>

          <section id="section-3" className="mb-12">
            <h2 className="text-2xl font-bold text-yellow-500 mb-4">
              3. How does Rajiv Ranjan handle criticism and trolling?
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Rajiv does not let trolling or viral controversies affect him. He is aware that his content will be criticized, but what matters to him is that his videos and reports reach people. His focus is on showcasing real issues rather than worrying about online negativity.
            </p>
          </section>

          <section id="section-4" className="mb-12">
            <h2 className="text-2xl font-bold text-yellow-500 mb-4">
              4. What is Rajiv Ranjan's approach to news reporting?
            </h2>
            <p className="text-gray-300 leading-relaxed">
              He strongly believes that journalism should reflect the voices of the people. His method is simple: he listens to the public, highlights their problems, and presents them as they are. He does not filter or alter their words to fit any agenda. This raw and unfiltered style sets him apart from traditional news anchors.
            </p>
          </section>

          <section id="section-5" className="mb-12">
            <h2 className="text-2xl font-bold text-yellow-500 mb-4">
              5. What challenges did Rajiv face in his career?
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Before becoming a journalist, Rajiv came to Delhi in search of work, living in shared accommodations with other job seekers. He struggled like any other aspirant, which made him more empathetic toward common people's issues. His real-life hardships shaped his fearless reporting style.
            </p>
          </section>

          <section id="section-6" className="mb-12">
            <h2 className="text-2xl font-bold text-yellow-500 mb-4">
              6. Does Rajiv Ranjan have any political bias?
            </h2>
            <p className="text-gray-300 leading-relaxed">
              He acknowledges that people often label him based on their own perceptions—some call him biased, others see him as neutral. However, he asserts that his only loyalty is to the truth and the public. His aim is to show what's happening on the ground, not to favor or oppose any political party.
            </p>
          </section>

          <section id="section-7" className="mb-12">
            <h2 className="text-2xl font-bold text-yellow-500 mb-4">
              7. What is Rajiv Ranjan's view on mainstream media?
            </h2>
            <p className="text-gray-300 leading-relaxed">
              He believes that mainstream media has become too scripted and detached from the common people. Unlike polished TV anchors, he embraces the messiness of real-life reporting—whether it's sweating in the sun or standing among large crowds. This authenticity, according to him, is what journalism should be about.
            </p>
          </section>

          <section id="section-8" className="mb-12">
            <h2 className="text-2xl font-bold text-yellow-500 mb-4">
              8. What keeps Rajiv motivated?
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Journalism is not just a profession for him—it's his passion. Every day, he wakes up excited to explore new stories, meet new people, and bring their voices to the forefront. Unlike some who treat journalism as a routine job, he sees it as a responsibility to serve the truth.
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
    1: "How did Rajiv Ranjan start his journalism journey?",
    2: "What makes Rajiv Ranjan's journalism unique?",
    3: "How does Rajiv Ranjan handle criticism and trolling?",
    4: "What is Rajiv Ranjan's approach to news reporting?",
    5: "What challenges did Rajiv face in his career?",
    6: "Does Rajiv Ranjan have any political bias?",
    7: "What is Rajiv Ranjan's view on mainstream media?",
    8: "What keeps Rajiv motivated?"
  };
  return titles[num];
} 