export default function Podcast() {
  const sections = [
    {
      id: "spirituality",
      title: "Spirituality",
      episodes: [
        {
          youtubeLink: "https://youtu.be/9nYnZEuM3VY?si=eltKqgHliaY64JfJ",
          guest: "Janhvi Kapoor",
        },
        {
          youtubeLink: "https://youtu.be/9nYnZEuM3VY?si=eltKqgHliaY64JfJ",
          guest: "Priyanka Chopra",
        },
        {
          youtubeLink: "https://youtu.be/9nYnZEuM3VY?si=eltKqgHliaY64JfJ",
          guest: "Priyanka Chopra",
        },
        {
          youtubeLink: "https://youtu.be/9nYnZEuM3VY?si=eltKqgHliaY64JfJ",
          guest: "Priyanka Chopra",
        },
        {
          youtubeLink: "https://youtu.be/9nYnZEuM3VY?si=eltKqgHliaY64JfJ",
          guest: "Priyanka Chopra",
        },
        {
          youtubeLink: "https://youtu.be/9nYnZEuM3VY?si=eltKqgHliaY64JfJ",
          guest: "Priyanka Chopra",
        },
        {
          youtubeLink: "https://youtu.be/9nYnZEuM3VY?si=eltKqgHliaY64JfJ",
          guest: "Priyanka Chopra",
        },
      ],
    },
    {
      id: "lifestyle",
      title: "Lifestyle",
      episodes: [
        {
          youtubeLink: "https://youtu.be/Mvr3QuojbYk?si=Ob53pswhJ5sxyUZK",
          guest: "Sanjay Kathuria",
        },
        {
          youtubeLink: "https://youtu.be/9nYnZEuM3VY?si=eltKqgHliaY64JfJ",
          guest: "Shahid Kapoor",
        },
        {
          youtubeLink: "https://youtu.be/9nYnZEuM3VY?si=eltKqgHliaY64JfJ",
          guest: "Shahid Kapoor",
        },
        {
          youtubeLink: "https://youtu.be/9nYnZEuM3VY?si=eltKqgHliaY64JfJ",
          guest: "Shahid Kapoor",
        },
        {
          youtubeLink: "https://youtu.be/9nYnZEuM3VY?si=eltKqgHliaY64JfJ",
          guest: "Shahid Kapoor",
        },
        {
          youtubeLink: "https://youtu.be/9nYnZEuM3VY?si=eltKqgHliaY64JfJ",
          guest: "Shahid Kapoor",
        },
      ],
    },
    {
      id: "Armed-Forces",
      title: "Armed-Forces",
      episodes: [
        {
          youtubeLink: "https://youtu.be/9nYnZEuM3VY?si=eltKqgHliaY64JfJ",
          guest: "Shilpa Shetty",
        },
        {
          youtubeLink: "https://youtu.be/9nYnZEuM3VY?si=eltKqgHliaY64JfJ",
          guest: "Shahid Kapoor",
        },
        {
          youtubeLink: "https://youtu.be/9nYnZEuM3VY?si=eltKqgHliaY64JfJ",
          guest: "Shahid Kapoor",
        },
        {
          youtubeLink: "https://youtu.be/9nYnZEuM3VY?si=eltKqgHliaY64JfJ",
          guest: "Shahid Kapoor",
        },
        {
          youtubeLink: "https://youtu.be/9nYnZEuM3VY?si=eltKqgHliaY64JfJ",
          guest: "Shahid Kapoor",
        },
        {
          youtubeLink: "https://youtu.be/9nYnZEuM3VY?si=eltKqgHliaY64JfJ",
          guest: "Shahid Kapoor",
        },
      ],
    },
  ];

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

  const getThumbnailUrl = (youtubeLink) => {
    const videoId = getVideoId(youtubeLink);
    return videoId
      ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
      : "/placeholder-thumbnail.jpg";
  };

  return (
    <div className="container mx-auto p-4" style={{ backgroundColor: "transparent" }}>
      {/* Title */}
      <h1 className="text-6xl font-bold text-center text-white mb-8">Podcasts</h1>

      {/* Sections */}
      {sections.map((section) => (
        <div key={section.id} className="mb-12">
          {/* Section Title */}
          <h2 className="text-2xl font-bold text-center text-white mb-6">
            {section.title}
          </h2>
          {/* Episodes */}
          <div className="flex overflow-x-auto space-x-4 hide-scrollbar">
            {section.episodes.map((episode, index) => (
              <a
                key={index}
                href={episode.youtubeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-none w-[320px] h-[200px] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform  border-2"
              >
                {/* Card Content */}
                <div className="h-full flex flex-col justify-between">
                  {/* Thumbnail */}
                  <img
                    src={getThumbnailUrl(episode.youtubeLink)}
                    alt={`Thumbnail for ${episode.guest}`}
                    className="w-full h-[150px] object-cover"
                  />
                  {/* Details */}
                  <div className="flex flex-col items-center justify-center bg-gray-900 text-white py-2">
                    <h3 className="text-sm font-bold">The Sarvesh Mishra Show</h3>
                    <p className="text-xs">{episode.guest}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

