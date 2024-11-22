export default function About() {
  return (
    <div className="container mx-auto p-4">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white mb-12">
        <img
          src="/DSC08454.JPG" // Replace with your banner image
          alt="About Banner"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl font-bold mb-4">About <span className="text-yellow-500">Me</span> </h1>
          <p className="text-lg max-w-2xl">
            Empowering growth, clarity, and well-being with purpose-driven coaching.
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold mb-6 text-yellow-500">Who I Am</h2>
        <p className="text-lg text-white leading-relaxed">
          I am Sarvesh Mishra, a coach who blends the art of self-branding, marketing clarity, and holistic wellness to inspire individuals to realize their fullest potential. With over 15 years of experience, I’ve dedicated my life to helping others unlock their true value, achieve personal and professional clarity, and lead lives of purpose and balance.
        </p>
      </div>

      {/* Self-Branding Section */}
      <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold mb-4 text-yellow-500">Self-Branding</h3>
          <p className="text-white leading-relaxed">
            Your personal brand is your story, and I’m here to help you tell it with authenticity and impact. I work with clients to discover their unique value proposition, build confidence in their personal narrative, and create an identity that resonates with their audience. Whether you're an entrepreneur, professional, or creator, together we’ll craft a personal brand that aligns with your goals and reflects your authentic self.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="/branding_image.jpg" // Replace with your branding-related image
            alt="Self-Branding"
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>
      </div>

      {/* Holistic Wellness Section */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-16">
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold mb-4 text-yellow-500">Holistic Wellness Coaching</h3>
          <p className="text-white leading-relaxed">
            True success begins with a healthy mind and body. My holistic wellness coaching integrates mindfulness, physical health, and emotional resilience to help you achieve balance and well-being. I guide clients to develop habits and strategies that support a harmonious lifestyle, enabling them to perform at their best and live with purpose. Together, we address not just goals, but the journey to achieving them with vitality and joy.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="/wellness_image.jpg" // Replace with your wellness-related image
            alt="Holistic Wellness"
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>
      </div>

      {/* Marketing Clarity Section */}
      <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold mb-4 text-yellow-500">Marketing Clarity Coaching</h3>
          <p className="text-white leading-relaxed">
            In a crowded marketplace, clarity is your competitive edge. I help individuals and businesses demystify marketing strategies, align their messaging with their target audience, and create campaigns that drive results. From developing content strategies to refining your communication style, I provide actionable guidance to position your brand for long-term success. Let’s cut through the noise and bring your vision to life with a clear and compelling approach.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="/marketing_image.jpg" // Replace with your marketing-related image
            alt="Marketing Clarity"
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>
      </div>

      {/* Footer Call-to-Action */}
      <div className="bg-gray-900 text-white text-center py-12 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Join Me <span className="text-yellow-500">on This Journey</span></h2>
        <p className="text-lg mb-6">
          Ready to transform your life and achieve clarity in your goals? Connect with me to start your journey of growth and success.
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

