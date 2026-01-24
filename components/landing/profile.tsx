import { profile } from '@/config/profile';
import {
  IconBrandGithub,
  IconBrandLeetcode,
  IconBrandLinkedin,
  IconBrandTwitter,
} from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';

import { ClipboardList } from '../animate-ui/icons/clipboard-list';
import { AnimateIcon } from '../animate-ui/icons/icon';
import { Send } from '../animate-ui/icons/send';
import { Button } from '../ui/button';
import { LinkPreview } from '../ui/link-preview';
import { WordRotate } from '../ui/word-rotate';
import { GitHubContributions } from './github';
import TechStack from './tech-stack';

export const Profile = () => {
  return (
    <section className="py-4">
      <div className="screen-line-after flex">
        {/* Avatar column */}
        <div className="relative shrink-0">
          <div className="mx-0.5 my-0.75">
            <div className="ring-border ring-offset-background relative size-25 overflow-hidden rounded-xl ring-1 ring-offset-2 sm:size-30">
              <Image
                src="/profile-anime.gif"
                alt="Saurav Nayal profile picture"
                fill
                priority
                sizes="(max-width: 640px) 100px, 120px"
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
                {profile.name}
              </h1>
            </div>

            {/* Role / rotating text */}
            <div className="h-12.5 py-1 pl-4 sm:h-9">
              <WordRotate
                className="text-muted-foreground font-mono text-sm text-balance"
                words={profile.taglines}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bio */}
      <div className="text-muted-foreground mt-6 space-y-4">
        <TechStack />

        {/* CTAs */}
        <div className="flex flex-wrap gap-3">
          <AnimateIcon animateOnHover>
            <Button size="sm" className="gap-2" asChild>
              <Link
                href={process.env.NEXT_PUBLIC_RESUME_URL || '#'}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ClipboardList />
                Resume
              </Link>
            </Button>
          </AnimateIcon>

          <AnimateIcon animateOnHover>
            <Button size="sm" variant="secondary" className="gap-2" asChild>
              <Link href={`mailto:${profile.contact.email}`}>
                <Send className="h-4 w-4" />
                Send email
              </Link>
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
          <LinkPreview
            url={profile.contact.github}
            className="flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition-all hover:-translate-y-0.5 hover:shadow-[0px_4px_8px_-2px_rgba(0,0,0,0.15),0px_2px_0px_0px_rgba(25,28,33,0.04),0px_0px_0px_1px_rgba(25,28,33,0.12)]"
          >
            <IconBrandGithub className="h-4 w-4" />
            GitHub
          </LinkPreview>

          <LinkPreview
            url={profile.contact.twitter}
            isStatic
            imageSrc="/twitter.png"
            className="flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition-all hover:-translate-y-0.5 hover:shadow-[0px_4px_8px_-2px_rgba(0,0,0,0.15),0px_2px_0px_0px_rgba(25,28,33,0.04),0px_0px_0px_1px_rgba(25,28,33,0.12)]"
          >
            <IconBrandTwitter className="h-4 w-4" />
            Twitter
          </LinkPreview>

          <LinkPreview
            url={profile.contact.linkedin}
            isStatic
            imageSrc="/linkedin.png"
            className="flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition-all hover:-translate-y-0.5 hover:shadow-[0px_4px_8px_-2px_rgba(0,0,0,0.15),0px_2px_0px_0px_rgba(25,28,33,0.04),0px_0px_0px_1px_rgba(25,28,33,0.12)]"
          >
            <IconBrandLinkedin className="h-4 w-4" />
            LinkedIn
          </LinkPreview>

          <LinkPreview
            url={profile.contact.leetcode}
            className="flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition-all hover:-translate-y-0.5 hover:shadow-[0px_4px_8px_-2px_rgba(0,0,0,0.15),0px_2px_0px_0px_rgba(25,28,33,0.04),0px_0px_0px_1px_rgba(25,28,33,0.12)]"
          >
            <IconBrandLeetcode className="h-4 w-4" />
            LeetCode
          </LinkPreview>
        </div>
      </div>

      {/* GitHub graph */}
      <div className="mt-5">
        <GitHubContributions />
      </div>
    </section>
  );
};
