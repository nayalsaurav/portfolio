'use client';

import { TechBadge } from '@/components/tech-badge';
import type { ProjectItemType, ProjectLinkType } from '@/config/projects';
import { cn } from '@/lib/utils';
import { ArrowRightIcon, GithubIcon, GlobeIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';

const iconMap = {
  github: GithubIcon,
  globe: GlobeIcon,
} as const;

export function Projects({
  className,
  projects,
}: {
  className?: string;
  projects: ProjectItemType[];
}) {
  return (
    <div className={cn('space-y-12', className)}>
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: ProjectItemType;
  index: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const isEven = index % 2 === 0;

  return (
    <div
      className={cn(
        'group grid grid-cols-1 items-center gap-8 md:grid-cols-2',
        !isEven && 'md:[direction:rtl]',
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Media */}
      <Link
        href={`/projects/${project.id}`}
        className={cn(
          'relative aspect-video overflow-hidden rounded-xl',
          'shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]',
          'transition-all duration-500',
          'hover:shadow-[0px_4px_8px_-2px_rgba(0,0,0,0.15),0px_2px_0px_0px_rgba(25,28,33,0.04),0px_0px_0px_1px_rgba(25,28,33,0.12)]',
        )}
      >
        {project.video ? (
          <video
            ref={videoRef}
            src={project.video}
            loop
            muted
            playsInline
            className={cn(
              'h-full w-full object-cover transition-transform duration-700',
              isHovered && 'scale-105',
            )}
          />
        ) : project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className={cn(
              'object-cover transition-transform duration-700',
              isHovered && 'scale-105',
            )}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900">
            <span className="text-6xl font-bold text-zinc-700">
              {project.title.charAt(0)}
            </span>
          </div>
        )}
        {/* Gradient shade overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        {/* Subtle top shine */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </Link>

      {/* Content */}
      <div
        className={cn(
          'flex flex-col justify-center gap-4',
          !isEven && 'md:[direction:ltr]',
        )}
      >
        {/* Index Number */}
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground font-mono text-xs">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="bg-border h-px w-8" />
        </div>

        {/* Title */}
        <Link href={`/projects/${project.id}`}>
          <h2 className="text-foreground group-hover:text-muted-foreground text-3xl font-bold transition-colors">
            {project.title}
          </h2>
        </Link>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed font-light">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mt-2 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
          {project.technologies.length > 4 && (
            <TechBadge>+{project.technologies.length - 4}</TechBadge>
          )}
        </div>

        {/* Case Study Link */}
        <Link
          href={`/projects/${project.id}`}
          className="text-foreground hover:text-muted-foreground mt-4 flex items-center gap-2 text-sm font-bold tracking-wider uppercase decoration-2 underline-offset-4 hover:underline"
        >
          Read Case Study
          <ArrowRightIcon className="size-4" />
        </Link>
      </div>
    </div>
  );
}

function ProjectLink({ link }: { link: ProjectLinkType }) {
  const Icon = iconMap[link.icon] || GlobeIcon;

  return (
    <Link
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5',
        'bg-muted/30 text-muted-foreground',
        'transition-all duration-200',
        'hover:bg-muted hover:text-foreground hover:border-border',
        'text-xs font-medium',
      )}
    >
      <Icon className="size-3.5" />
      {link.type}
    </Link>
  );
}
