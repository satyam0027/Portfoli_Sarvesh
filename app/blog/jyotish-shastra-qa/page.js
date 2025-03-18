import React from "react";
import Image from "next/image";
import Link from "next/link";

// Helper function to get YouTube video ID from URL
const getYouTubeVideoId = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

export default function JyotishShastraQAPage() {
  const youtubeUrl = "https://youtu.be/K8_1z7BwiJc?si=4ynyg3ZnCIKclJqv";
  const videoId = getYouTubeVideoId(youtubeUrl);

  return (
    <div className="min-h-screen bg-transparent text-white py-12">
      <article className="container mx-auto px-4 max-w-4xl">
        {/* Header Section */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-6">
            JYOTISH SHASTRA (ASTROLOGY) Q&A
          </h1>
          <div className="flex items-center gap-4 text-gray-400 mb-8">
            <span>March 7, 2024</span>
            <span>•</span>
            <span>15 min read</span>
          </div>
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden mb-8">
            <Image
              src="/blog/astrology.jpg"
              alt="Jyotish Shastra Astrology"
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
              1. What is the significance of knowledge in astrology?
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Knowledge in astrology is compared to a vast ocean where one has to dive deep to find valuable pearls. Just like exploring the depths of the sea for hidden treasures, astrology requires immense study and understanding to truly grasp its insights. It is often said that astrology is the crown jewel of all sciences, as it connects deeply with life itself, covering the past, present, and future. The knowledge of planetary influences is not just about predicting future events but understanding the cosmic blueprint that governs human destiny.
            </p>
          </section>

          <section id="section-2" className="mb-12">
            <h2 className="text-2xl font-bold text-yellow-500 mb-4">
              2. Role of Planets in Life
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Planets play a crucial role in shaping human lives. They are often described as kings and servants in astrology, with immense power to elevate or humble an individual. The planetary positions at the time of birth determine the course of one's life, including fortune, struggles, and successes. For example, someone with Raj Yoga in their horoscope is naturally inclined towards leadership and prosperity, whereas the absence of such a yoga makes it difficult to attain king-like success. The fate of individuals is dictated by their past karmas, which manifest through planetary influences. This means that a person's wealth, social status, and overall fate are a result of their previous actions, as carried forward through the movements and placements of planets.
            </p>
          </section>

          <section id="section-3" className="mb-12">
            <h2 className="text-2xl font-bold text-yellow-500 mb-4">
              3. Common Questions People Ask Astrologers
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Astrologers receive a wide variety of questions from different people. The most common inquiries revolve around wealth, career growth, business stability, job success, and property acquisition. People are deeply concerned about their financial stability, and many seek astrological guidance to understand whether they will attain success or face challenges in their chosen fields. Apart from career and wealth, family-related questions, particularly about children's future and marriage prospects, are also frequently asked. Some individuals, including those involved in unethical or criminal activities, also consult astrologers to understand their fate and possible consequences. Interestingly, astrologers can sometimes predict significant life events such as imprisonment, sudden windfalls, or drastic changes in fortune. However, ethical astrologers adhere to certain boundaries and do not disclose extremely sensitive information, as knowing such things beforehand could lead to unnecessary fear or overconfidence in people's actions.
            </p>
          </section>

          <section id="section-4" className="mb-12">
            <h2 className="text-2xl font-bold text-yellow-500 mb-4">
              4. Can Astrology Change Destiny?
            </h2>
            <p className="text-gray-300 leading-relaxed">
              One of the biggest debates surrounding astrology is whether destiny is fixed or if it can be altered. If everything is pre-written, then why should people make efforts? The answer lies in the balance between karma (effort) and destiny (fate). While destiny lays the foundation, it is human effort that shapes the final outcome. Without karma, even the best planetary positions will not yield success, and without the support of good planetary influences, efforts may not yield desired results. Astrology cannot change one's fate entirely, but it provides remedies and solutions that can help mitigate difficulties and make life smoother. Remedies like donations, mantras, and specific rituals can neutralize negative planetary effects, but they do not override destiny. An individual's fate is like a roadmap, and astrology acts as a guide, offering alternate routes to avoid obstacles but not changing the final destination.
            </p>
          </section>

          <section id="section-5" className="mb-12">
            <h2 className="text-2xl font-bold text-yellow-500 mb-4">
              5. Authentic vs. Fake Astrologers
            </h2>
            <p className="text-gray-300 leading-relaxed">
              In today's world, there is a rise in fake astrologers who deceive people by making false claims and selling expensive rituals in the name of astrology. Many so-called astrologers promise to change one's fate overnight, guarantee wealth, or claim to remove all obstacles from life. Genuine astrology does not function this way. A real astrologer provides rational insights, explains how planetary influences work, and never makes unrealistic promises. People seeking astrological guidance should be cautious of fraudsters and should always verify the knowledge and credibility of an astrologer before believing their claims. An authentic astrologer will focus on analyzing a person's horoscope with logical explanations rather than selling expensive remedies.
            </p>
          </section>

          <section id="section-6" className="mb-12">
            <h2 className="text-2xl font-bold text-yellow-500 mb-4">
              6. Impact of Planets on Life
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Planets and stars influence all living beings, just as the sun determines day and night and the moon affects tides. Similarly, planetary positions affect human emotions, behaviors, and overall life journey. The placement of planets at birth creates a unique energy pattern that influences various aspects of life, including career, health, relationships, and mental state. Remedies such as offering water to the sun, donating food items, and performing specific prayers are believed to balance the energy of certain planets and reduce their negative impact. While remedies help align planetary influences for better results, they do not completely alter one's destiny. However, they can provide relief and reduce obstacles, making the journey of life more manageable.
            </p>
          </section>

          <section id="section-7" className="mb-12">
            <h2 className="text-2xl font-bold text-yellow-500 mb-4">
              7. Astrological Predictions on Physical Traits
            </h2>
            <p className="text-gray-300 leading-relaxed">
              A skilled astrologer can sometimes predict physical traits, past injuries, and health issues based on a person's horoscope. Experienced astrologers analyze the planetary placements in relation to the body and can determine where an individual may have scars, birthmarks, or past wounds. This is possible because every planet is associated with specific parts of the body. For example, Mars influences blood and injuries, while Saturn is linked to chronic ailments. By analyzing these planetary influences, an astrologer can determine a person's health history and ongoing physical conditions.
            </p>
          </section>

          <section id="section-8" className="mb-12">
            <h2 className="text-2xl font-bold text-yellow-500 mb-4">
              8. Digital Age & Astrology
            </h2>
            <p className="text-gray-300 leading-relaxed">
              In the digital era, many astrologers have taken their practice online, but some choose to stay away from commercialization. Authentic astrologers believe that astrology should be practiced with sincerity and depth rather than being turned into a business. Unlike fake astrologers who quickly analyze multiple horoscopes in a short time, a true astrologer takes the time to carefully examine all aspects of a horoscope. A well-trained astrologer can deeply analyze only 3 to 4 horoscopes per day due to the complexity involved. Since each horoscope consists of multiple charts, analyzing them requires patience and expertise. Those who promise instant solutions and quick readings are often more focused on financial gain than on providing accurate insights.
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
    1: "What is the significance of knowledge in astrology?",
    2: "Role of Planets in Life",
    3: "Common Questions People Ask Astrologers",
    4: "Can Astrology Change Destiny?",
    5: "Authentic vs. Fake Astrologers",
    6: "Impact of Planets on Life",
    7: "Astrological Predictions on Physical Traits",
    8: "Digital Age & Astrology"
  };
  return titles[num];
} 