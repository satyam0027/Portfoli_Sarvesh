import { headers } from 'next/headers';

export const dynamic = 'force-static';
export const revalidate = false;

export async function GET() {
  const robotsTxt = `
User-agent: *
Allow: /
Disallow: /private/
Disallow: /admin/

Sitemap: https://thesarveshmishra.com/sitemap.xml
Host: https://thesarveshmishra.com
`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
} 