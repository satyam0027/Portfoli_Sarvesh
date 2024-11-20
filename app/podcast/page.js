export default function Podcast() {
  const episodes = [
    {
      id: 1,
      title: "The Secrets of Success",
      description: "In this episode, we explore the mindset and habits of highly successful individuals.",
      thumbnail: "/podcast-episode-1.jpg", // Replace with your image path
      spotifyLink: "https://spotify.com", // Replace with your Spotify link
      appleLink: "https://apple.com", // Replace with your Apple Podcasts link
    },
    {
      id: 2,
      title: "Mastering Productivity",
      description: "Tips and strategies to become more productive in your daily life.",
      thumbnail: "/podcast-episode-2.jpg", // Replace with your image path
      spotifyLink: "https://spotify.com",
      appleLink: "https://apple.com",
    },
    // Add more episodes as needed
  ];

  return (
    <div className="container mx-auto p-4">
      {/* Hero Section */}
      <div className="relative bg-gray-100 rounded-lg overflow-hidden mb-8">
        <img
          src="/podcast-banner.jpg" // Replace with your banner image path
          alt="Podcast Banner"
          className="w-full h-60 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">My Podcast</h1>
        </div>
      </div>

      {/* Podcast Introduction */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold mb-4">Welcome to My Podcast</h2>
        <p className="text-lg text-gray-600">
          Discover engaging conversations, insightful discussions, and inspiring stories on my podcast. 
          Tune in to learn, grow, and be entertained!
        </p>
      </div>

      {/* Episodes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {episodes.map((episode) => (
          <div key={episode.id} className="bg-white rounded-lg shadow-md p-4 transition transform hover:scale-105">
            <img
              src={episode.thumbnail}
              alt={episode.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{episode.title}</h3>
            <p className="text-gray-600 mb-4">{episode.description}</p>
            <div className="flex items-center gap-4">
              <a
                href={episode.spotifyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
              >
                Listen on Spotify
              </a>
              <a
                href={episode.appleLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900 transition"
              >
                Listen on Apple
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
