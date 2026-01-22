import { BackButton } from '@/components/back-button';
import { Container } from '@/components/container';
import { Separator } from '@/components/separator';
import { StripeMask } from '@/components/stripe-mask';
import { TechBadge } from '@/components/tech-badge';
import { getProjectById, projects } from '@/config/projects';
import { cn } from '@/lib/utils';
import {
  ArrowLeftIcon,
  ExternalLinkIcon,
  GithubIcon,
  GlobeIcon,
} from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | Saurav Nayal`,
      description: project.description,
      images: project.image ? [project.image] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Saurav Nayal`,
      description: project.description,
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  const githubLink = project.links.find((link) => link.icon === 'github');
  const websiteLink = project.links.find((link) => link.icon === 'globe');

  return (
    <>
      <Container>
        <article className="py-8">
          {/* Navigation Bar */}
          <div className="border-border mb-8 flex items-center justify-between border-b pb-6">
            <BackButton />

            {websiteLink && (
              <Link
                href={websiteLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-foreground text-background flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition-transform hover:scale-105"
              >
                VISIT SITE
                <ExternalLinkIcon className="size-4" />
              </Link>
            )}
          </div>

          {/* Header */}
          <header className="mb-10">
            <div className="flex items-center gap-3">
              <h1 className="text-4xl leading-tight font-black tracking-tight md:text-5xl">
                {project.title}
              </h1>
              {project.active && (
                <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-500">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                  </span>
                  Active
                </span>
              )}
            </div>

            {/* Technologies */}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <TechBadge key={tech}>{tech}</TechBadge>
              ))}
            </div>

            {/* Description */}
            <p className="text-muted-foreground mt-6 text-lg leading-relaxed font-light md:text-xl">
              {project.description}
            </p>
          </header>

          {/* Hero Media */}
          <div className="relative mb-12 aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-800 shadow-2xl">
            {project.video ? (
              <video
                src={project.video}
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              />
            ) : project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <span className="text-8xl font-bold text-zinc-700">
                  {project.title.charAt(0)}
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="prose prose-lg prose-zinc dark:prose-invert max-w-none">
            {/* Overview */}
            {project.overview && (
              <section className="mb-10">
                <h2 className="text-foreground mb-4 text-2xl font-bold">
                  Overview
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.overview}
                </p>
              </section>
            )}

            {/* Key Features */}
            {project.features && project.features.length > 0 && (
              <section className="mb-10">
                <h2 className="text-foreground mb-4 text-2xl font-bold">
                  Key Features
                </h2>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li
                      key={index}
                      className="text-muted-foreground flex items-start gap-3"
                    >
                      <span className="bg-primary mt-2 size-1.5 shrink-0 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Tech Stack */}
            {project.techDetails && project.techDetails.length > 0 && (
              <section className="mb-10">
                <h2 className="text-foreground mb-4 text-2xl font-bold">
                  Tech Stack
                </h2>
                <ul className="space-y-2">
                  {project.techDetails.map((detail, index) => (
                    <li
                      key={index}
                      className="text-muted-foreground flex items-start gap-3"
                    >
                      <span className="bg-primary mt-2 size-1.5 shrink-0 rounded-full" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Footer */}
          <div className="border-border mt-16 border-t pt-10">
            <div className="flex flex-col items-center gap-6">
              {githubLink && (
                <Link
                  href={githubLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-foreground text-muted-foreground hover:text-foreground flex items-center gap-2 border-b pb-1 transition-colors"
                >
                  <GithubIcon className="size-5" />
                  View Source on GitHub
                </Link>
              )}

              <p className="text-muted-foreground/60 italic">
                Thanks for reading!
              </p>
            </div>
          </div>
        </article>
      </Container>
      <StripeMask angle={-45} />
      <Separator />
    </>
  );
}
