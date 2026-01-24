'use client';

import { cn } from '@/lib/utils';
import { BookOpen, Briefcase, FolderGit2, Home, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Container } from './container';
import { Separator } from './separator';
import { AnimatedThemeToggler } from './ui/animated-theme-toggler';

const navLinks = [
  { name: 'Home', href: '/', icon: Home, mobileOnly: true },
  // { name: 'About', href: '/about', icon: User },
  { name: 'Work', href: '/work', icon: Briefcase },
  { name: 'Projects', href: '/projects', icon: FolderGit2 },
  { name: 'Blogs', href: '/blogs', icon: BookOpen },
];

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <>
      <nav className="bg-background/60 sticky top-0 z-50 w-full font-mono backdrop-blur-md">
        <Container className="flex items-center justify-between p-1 md:items-baseline">
          <div className="typography not-typography:max-w-none flex items-baseline gap-6">
            <Link
              href="/"
              aria-label="Home"
              className="not-typography h-12 w-12 overflow-hidden rounded-full"
            >
              <Image
                src="/profile-anime-2.webp"
                alt="Profile picture"
                width={45}
                height={45}
                priority
                className="h-full w-full object-cover"
              />
            </Link>

            {/* Desktop Navigation links */}
            <div className="not-typography hidden items-center gap-4 md:flex">
              {navLinks
                .filter((link) => !link.mobileOnly)
                .map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      'hover:text-foreground/80 relative text-base no-underline transition-colors',
                      pathname === link.href
                        ? 'text-foreground font-semibold'
                        : 'text-muted-foreground',
                    )}
                  >
                    {link.name}
                    {pathname === link.href && (
                      <span className="bg-foreground absolute -bottom-0.5 left-0 h-0.5 w-full" />
                    )}
                  </Link>
                ))}
            </div>
          </div>

          <div className="not-typography flex items-center gap-3">
            <AnimatedThemeToggler />
          </div>
        </Container>

        <Separator />
      </nav>

      {/* Mobile Bottom Navigation */}
      <div className="bg-background/80 pb-safe fixed bottom-0 left-0 z-50 flex w-full items-center justify-around border-t p-2 backdrop-blur-lg md:hidden">
        {navLinks.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                'flex flex-col items-center gap-1 p-2 transition-colors',
                isActive ? 'text-primary' : 'text-muted-foreground',
              )}
            >
              <Icon className={cn('h-5 w-5', isActive && 'fill-current')} />
              <span className="text-[10px] font-medium">{link.name}</span>
            </Link>
          );
        })}
      </div>
    </>
  );
};
