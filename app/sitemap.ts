import type { MetadataRoute } from 'next';
import { getAllProjects } from '@/lib/projects';

export const dynamic = 'force-static';

const BASE_URL = 'https://bakerbuiltconstruction.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/services', '/about', '/work', '/estimate'].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  const projectRoutes = getAllProjects().map((project) => ({
    url: `${BASE_URL}/work/${project.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes];
}
