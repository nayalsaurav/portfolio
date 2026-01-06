import {
  IconBrandGithub,
  IconBrandLeetcode,
  IconBrandLinkedin,
  IconBrandTwitter,
} from '@tabler/icons-react';
import Image from 'next/image';

import { AlarmClock } from '../animate-ui/icons/alarm-clock';
import { AnimateIcon } from '../animate-ui/icons/icon';
import { Send } from '../animate-ui/icons/send';
import { Button } from '../ui/button';
import { Tooltip } from '../ui/tooltip-card';
import { WordRotate } from '../ui/word-rotate';
import { GitHubContributions } from './github';
import { GithubCard } from './profile-cards/github';
import { LeetCodeStats } from './profile-cards/leetcode';
import { LinkedInProfileCard } from './profile-cards/linkedin';

export const Profile = () => {
  return (
    <section className="py-8">
      {/* Header */}
      <div className="flex items-center gap-6 pb-4">
        {/* Avatar */}
        <div className="relative h-36 w-36 shrink-0 overflow-hidden rounded-2xl ring-1 ring-slate-200">
          <Image
            src="/profile.png"
            alt="Saurav Nayal profile picture"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Name + Role */}
        <div>
          <h2 className="text-3xl font-semibold tracking-tight">
            Saurav Nayal
          </h2>

          <div className="text-muted-foreground mt-1 font-mono text-sm text-balance">
            <WordRotate
              words={[
                'Backend Engineer',
                'Node.js Developer',
                'API & System Design',
              ]}
            />
          </div>
        </div>
      </div>

      {/* Bio */}
      <div className="text-muted-foreground max-w-2xl space-y-4">
        <p className="leading-relaxed">
          Hi, I’m Saurav — a Node.js Backend Developer building scalable
          solutions. I design and build reliable backend systems using
          <span className="font-medium">
            {' '}
            TypeScript, React, Next.js, Bun, and PostgreSQL
          </span>
          , with a strong focus on API design, performance, and clean
          architecture.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3">
          <AnimateIcon animateOnHover>
            <Button className="gap-2">
              <AlarmClock className="h-4 w-4" />
              Book intro call
            </Button>
          </AnimateIcon>

          <AnimateIcon animateOnHover>
            <Button variant="secondary" className="gap-2">
              <Send className="h-4 w-4" />
              Send email
            </Button>
          </AnimateIcon>
        </div>
      </div>

      {/* Socials */}
      <div className="mt-8 space-y-3">
        <p className="text-sm tracking-wide">
          Here are my{' '}
          <span className="text-muted-foreground font-medium">socials</span>
        </p>

        <div className="flex flex-wrap gap-3">
          <Tooltip
            content={<GithubCard />}
            containerClassName="flex items-center gap-2 rounded-lg border px-3 py-2 text-sm"
          >
            <IconBrandGithub className="h-4 w-4" />
            GitHub
          </Tooltip>

          <Tooltip
            content={<TooltipCard src="/twitter.png" />}
            containerClassName="flex items-center gap-2 rounded-lg border px-3 py-2 text-sm"
          >
            <IconBrandTwitter className="h-4 w-4" />
            Twitter
          </Tooltip>

          <Tooltip
            content={<LinkedInProfileCard />}
            containerClassName="flex items-center gap-2 rounded-lg border px-3 py-2 text-sm"
          >
            <IconBrandLinkedin className="h-4 w-4" />
            LinkedIn
          </Tooltip>

          <Tooltip
            content={<LeetCodeStats />}
            containerClassName="flex items-center gap-2 rounded-lg border px-3 py-2 text-sm"
          >
            <IconBrandLeetcode className="h-4 w-4" />
            LeetCode
          </Tooltip>
        </div>
      </div>
      <div>
        <GitHubContributions />
      </div>
    </section>
  );
};

const TooltipCard = ({ src }: { src: string }) => {
  return (
    <div>
      <Image
        src={src}
        alt="Tyler Durden"
        className="aspect-square w-full rounded-sm"
        width={150}
        height={150}
      />
    </div>
  );
};
