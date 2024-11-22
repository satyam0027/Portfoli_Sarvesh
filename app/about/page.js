export default function About() {
  return (
    <div className="container mx-auto p-4">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white mb-12">
        <img
          src="/2020_04_30_18_00_IMG_8298.JPG" // Replace with your banner image
          alt="About Banner"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl font-bold mb-4">About Me</h1>
          <p className="text-lg max-w-2xl">
            A journey of passion, persistence, and purpose.
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold mb-6">Who I Am</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Welcome to my world! I’m [Your Name], a [Your Profession/Title]. 
          Over the years, I’ve dedicated my life to [your mission or purpose]. 
          This space is where I share my thoughts, experiences, and resources to inspire, motivate, and create positive change in others.
        </p>
      </div>

      {/* Feature Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        {/* Section 1 */}
        <div>
          <h3 className="text-2xl font-bold mb-4">My Journey</h3>
          <p className="text-gray-600 leading-relaxed">
            From humble beginnings to where I am today, my story has been one of constant learning and growth. 
            I believe in embracing challenges, seizing opportunities, and staying true to one’s purpose.
          </p>
        </div>
        <img
          src="/FKYX5745.jpg" // Replace with your image
          alt="Journey"
          className="rounded-lg shadow-lg"
        />

        {/* Section 2 */}
        <img
          src="/FKYX5745.jpg" // Replace with your image
          alt="Values"
          className="rounded-lg shadow-lg"
        />
        <div>
          <h3 className="text-2xl font-bold mb-4">My Values</h3>
          <p className="text-gray-600 leading-relaxed">
            Integrity, hard work, and compassion form the foundation of everything I do. 
            These values guide my decisions and ensure I stay grounded and focused on creating value for others.
          </p>
        </div>

        {/* Section 3 */}
        <div>
          <h3 className="text-2xl font-bold mb-4">My Mission</h3>
          <p className="text-gray-600 leading-relaxed">
            My mission is to empower individuals through actionable knowledge and to 
            build a community where growth and self-improvement are celebrated.
          </p>
        </div>
        <img
          src="/FKYX5745.jpg" // Replace with your image
          alt="Mission"
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Footer Call-to-Action */}
      <div className="bg-gray-900 text-white text-center py-12 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Join Me on This Journey</h2>
        <p className="text-lg mb-6">
          Let’s grow together. Follow me on my social platforms and stay connected for more insights and updates.
        </p>
        <a
          href="/contact"
          className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
}
