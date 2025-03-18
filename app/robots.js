export const dynamic = 'force-static';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/admin/'],
      },
    ],
    sitemap: 'https://thesarveshmishra.com/sitemap.xml',
    host: 'https://thesarveshmishra.com',
  };
} 