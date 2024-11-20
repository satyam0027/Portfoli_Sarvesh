import Image from "next/image";
import Link from "next/link";
import PodcastThumbnail from "../components/PodcastThumbnail";

const podcasts = [
  {
    title:
      "Mahoul kya hai- Rajiv Ranjan Singh News 24 Interview -Sarvesh Mishra Show",
    description:
      "Exclusive interview with Rajiv Ranjan Singh, hosted by Sarvesh Mishra. In this insightful conversation, Rajiv Ranjan Singh shares his perspectives on the current political and social climate.",
    youtubeId: "52YgALPo_SU",
    youtubeUrl: "https://youtu.be/52YgALPo_SU",
  },
  {
    title:
      "कैंसर सर्जन का सच: कैंसर बीमारी नहीं है | Cancer, Tumor | Dr. Anshuman Kumar",
    description:
      "Meet Dr. Anshuman Kumar, a renowned Onco-Surgeon in India with over 18 years of experience in Surgical Oncology. Learn about his inspiring journey and contributions to oncology.",
    youtubeId: "9nYnZEuM3VY",
    youtubeUrl: "https://youtu.be/9nYnZEuM3VY",
  },
  {
    title:
      "Power of Water Manifestation | Law of Attraction Tips & Tricks | Sarvesh Mishra Show",
    description:
      "Dr. Amiett Kumar shares insights about Law of Attraction and Manifestation techniques. Learn powerful methods to transform your life through these spiritual practices.",
    youtubeId: "twtVUvY8vzE",
    youtubeUrl: "https://youtu.be/twtVUvY8vzE",
  },
  // You can add more podcasts here
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="flex flex-col md:flex-row items-center justify-between mb-16">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <div className="relative w-64 h-64 mx-auto">
            <Image
              src="/FKYX5745.jpg?height=400&width=400"
              alt="Sarvesh Mishra"
              fill
              className="rounded-full object-cover border-4 border-gray-200 dark:border-gray-700"
              priority
            />
          </div>
        </div>
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">Sarvesh Mishra</h1>
          <p className="text-lg mb-6">
            Sarvesh Mishra is a Media Consultant and Self-Branding & Marketing
            Clarity Coach. In addition to this, he is an experienced journalist,
            author, and motivational speaker with over a decade and a half of
            experience in television journalism. Sarvesh has worked across 11
            states, from Kashmir to the Himalayas, covering a wide range of
            stories, including investigative journalism and special features. He
            is also the author of Love with Benefit. Sarvesh is the founder of
            Red-Hot Media House and the co-founder of ES Digital World. He
            launched his current show with the belief that "A handshake can
            change the world."
          </p>
          <Link
            href="/about"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            Know more
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8">Featured Podcasts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {podcasts.map((podcast, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
            >
              <div className="relative aspect-video">
                <Image
                  src={`https://img.youtube.com/vi/${podcast.youtubeId}/hqdefault.jpg`}
                  alt={`${podcast.title} Thumbnail`}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{podcast.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {podcast.description}
                </p>
                <a
                  href={podcast.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors"
                >
                  <span>Watch on YouTube</span>
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
