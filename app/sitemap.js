export default async function sitemap() {
  const baseUrl = 'https://thesarveshmishra.com';

  // Get all blog posts
  const blogPosts = [
    {
      id: "jyotish-shastra-qa",
      title: "JYOTISH SHASTRA (ASTROLOGY) Q&A",
      date: "2024-03-07",
    },
    {
      id: "rajiv-ranjan-journalism",
      title: "RAJIV RANJAN: JOURNALISM & REALITY Q&A",
      date: "2024-03-06",
    }
  ];

  // Create blog post URLs
  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Define static routes
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  return [...routes, ...blogUrls];
} 