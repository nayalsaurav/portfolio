import { Container } from '@/components/container';
import { Projects } from '@/components/projects';
import { StripeMask } from '@/components/stripe-mask';
import { projects } from '@/config/projects';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Showcase of my projects, open-source contributions, and experimental apps.',
  openGraph: {
    title: 'Projects | Saurav Nayal',
    description:
      'Showcase of my projects, open-source contributions, and experimental apps.',
  },
  twitter: {
    title: 'Projects | Saurav Nayal',
    description:
      'Showcase of my projects, open-source contributions, and experimental apps.',
  },
};

export default function ProjectsPage() {
  return (
    <>
      <StripeMask angle={45} />
      <Container>
        <section className="py-4">
          <div className="mb-6">
            <h1 className="text-3xl font-bold tracking-tight">All Projects</h1>
            <p className="text-muted-foreground mt-2">
              A collection of projects I&apos;ve built over the years.
            </p>
          </div>
          <Projects projects={projects} />
        </section>
      </Container>
      <StripeMask angle={-45} />
    </>
  );
}
