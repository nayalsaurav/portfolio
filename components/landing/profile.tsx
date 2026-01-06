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
    <section className="py-4">
      <div className="screen-line-after flex">
        {/* Avatar column */}
        <div className="relative shrink-0">
          <div className="mx-0.5 my-0.75">
            <div className="ring-border ring-offset-background relative size-25 overflow-hidden rounded-xl ring-1 ring-offset-2 sm:size-30">
              <Image
                src="/profile.png"
                alt="Saurav Nayal profile picture"
                fill
                priority
                className="object-cover select-none"
              />
            </div>
          </div>
        </div>

        {/* Right content */}
        <div className="flex flex-1 flex-col">
          {/* CSS hint row (same vibe as reference) */}
          <div className="flex grow items-end pb-1 pl-4 max-sm:hidden">
            {/* <div className="font-mono text-xs text-zinc-300 select-none dark:text-zinc-800">
              {'text-3xl '}
              <span className="inline dark:hidden">text-zinc-950</span>
              <span className="hidden dark:inline">text-zinc-50</span>
              {' font-medium'}
            </div> */}
          </div>

          {/* Name + role */}
          <div>
            <div className="flex items-center gap-2 pl-4">
              <h1 className="-translate-y-px text-3xl font-semibold tracking-tight">
                Saurav Nayal
              </h1>
            </div>

            {/* Role / rotating text */}
            <div className="h-12.5 py-1 pl-4 sm:h-9">
              <WordRotate
                className="text-muted-foreground font-mono text-sm text-balance"
                words={[
                  'Backend Engineer',
                  'Node.js Developer',
                  'API & System Design',
                ]}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bio */}
      <div className="text-muted-foreground mt-6 space-y-4">
        <p className="leading-relaxed">
          Hi, I’m Saurav — a Node.js Backend Developer building scalable
          solutions. I design and build reliable backend systems using
          <span className="text-foreground font-medium">
            {' '}
            TypeScript, React, Next.js, Bun, and PostgreSQL
          </span>
          , with a strong focus on API design, performance, and clean
          architecture.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3">
          <AnimateIcon animateOnHover>
            <Button size="sm" className="gap-2">
              <AlarmClock className="h-4 w-4" />
              Book an intro call
            </Button>
          </AnimateIcon>

          <AnimateIcon animateOnHover>
            <Button size="sm" variant="secondary" className="gap-2">
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
            containerClassName="flex items-center gap-2 rounded-lg border px-3 py-2 text-sm transition-colors hover:bg-muted/50"
          >
            <IconBrandGithub className="h-4 w-4" />
            GitHub
          </Tooltip>

          <Tooltip
            content={<TooltipCard src="/twitter.png" />}
            containerClassName="flex items-center gap-2 rounded-lg border px-3 py-2 text-sm transition-colors hover:bg-muted/50"
          >
            <IconBrandTwitter className="h-4 w-4" />
            Twitter
          </Tooltip>

          <Tooltip
            content={<LinkedInProfileCard />}
            containerClassName="flex items-center gap-2 rounded-lg border px-3 py-2 text-sm transition-colors hover:bg-muted/50"
          >
            <IconBrandLinkedin className="h-4 w-4" />
            LinkedIn
          </Tooltip>

          <Tooltip
            content={<LeetCodeStats />}
            containerClassName="flex items-center gap-2 rounded-lg border px-3 py-2 text-sm transition-colors hover:bg-muted/50"
          >
            <IconBrandLeetcode className="h-4 w-4" />
            LeetCode
          </Tooltip>
        </div>
      </div>

      {/* GitHub graph */}
      <div className="mt-5">
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
