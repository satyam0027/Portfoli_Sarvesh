export default function Podcast() {
  const sections = [
    {
      id: "cosmic-codes",
      title: "Cosmic-codes",
      episodes: [
        {
          youtubeLink: "https://youtu.be/xGMHhWE8ruI?si=OKS1yywFkc8etuW8",
          guest: "Adarshh Panndey",
        },
        {
          youtubeLink: "https://youtu.be/K8_1z7BwiJc?si=YSYPEgzqzHHfe71w",
          guest: "Shri O.P. Pathak ",
        },
        {
          youtubeLink: "https://youtu.be/ahBna4wQHrA?si=rbefRC-QSDJK1Lyf",
          guest: "Dr. Rakesh Kathuria",
        },
      ],
    },
    {
      id: "Unlock Your Mind",
      title: "Unlock Your Mind",
      episodes: [
        {
          youtubeLink: "https://youtu.be/eooT59cETcw?si=hd-BvJSwyYPfXT8w",
          guest: "Dr. Ram Verma",
        },
        {
          youtubeLink: "https://youtu.be/twtVUvY8vzE?si=BPhOP6GSocodrCiH",
          guest: "Dr. Amiett kumar",
        },
        {
          youtubeLink: "https://youtu.be/fjsJnluI-fc?si=Jhjf7EN8MV7og9Qs",
          guest: "Dr. Ram Verma",
        },
      ],
    },
    {
      id: "Medical",
      title: "Medical",
      episodes: [
        {
          youtubeLink: "https://youtu.be/9nYnZEuM3VY?si=eltKqgHliaY64JfJ",
          guest: "Dr. Anshuman Kumar",
        },
        {
          youtubeLink: "https://youtu.be/SeFWTQ6h1OE?si=NBMixxDyHmbgiDNG",
          guest: " Dr. Ashish Jaiswal",
        },
        {
          youtubeLink: "https://youtu.be/l_-mWdS96Vg?si=TN2gNDXm9RqOftQn",
          guest: " Dr. Neelu Agrawal",
        },
      ],
    },
    {
      id: "Finance",
      title: "Finance",
      episodes: [
        {
          youtubeLink: "https://youtu.be/Mvr3QuojbYk?si=OhgOkr2CxZpNI7Mu",
          guest: " Sanjay Kathuria",
        },
        {
          youtubeLink: "https://youtu.be/kXd7pkj44c0?si=6_UcWQRqBBjYDYhe",
          guest: "Deepak Wadhwa",
        },
      ],
    },
    {
      id: "Inspirational",
      title: "Inspirational",
      episodes: [
        {
          youtubeLink: "https://youtu.be/m1wHIlEAy-I?si=O4N1SsILH3oDjZ0L",
          guest: "Sandeep Arya World Champion",
        },
        {
          youtubeLink: "https://youtu.be/TFcH8wn3LMg?si=nzF-Dg6768S5q3Ys",
          guest: "Mahatmaji Technical",
        },
        {
          youtubeLink: "https://youtu.be/7eiC5GVUjZA?si=cI_rkcQJ_tdI2rBT",
          guest: "Prof. Triveni Singh",
        },
        {
          youtubeLink: "https://youtu.be/AGjKaJnYg_0?si=Mii0ekY0Wl3RPAr0",
          guest: "Chandan Mishra",
        },
      ],
    },
    {
      id: "Politics",
      title: "Politics",
      episodes: [
        {
          youtubeLink: "https://youtu.be/T9eg5LMbR6A?si=0SIs55Rrmsk22zYh",
          guest: "DP Yadav",
        },
      ],
    },
    {
      id: "Yoga",
      title: "Yoga",
      episodes: [
        {
          youtubeLink: "https://youtu.be/j_XKJNmOqoU?si=sYq6ImLnsfITgqzt",
          guest: "Sohit Yogi ",
        },
        {
          youtubeLink: "https://youtu.be/ZLnVYoa8gEg?si=VSIErTRWJXtPH5ZF",
          guest: "Shri Manmohan Yogi",
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
          <h2 className="text-2xl font-bold text-center text-yellow-500 mb-6">
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

