import { profile } from '@/config/profile';
import { MetadataRoute } from 'next';

export const dynamic = 'force-static';
export default function robots(): MetadataRoute.Robots {
  const baseUrl = profile.contact.website.endsWith('/')
    ? profile.contact.website.slice(0, -1)
    : profile.contact.website;

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
