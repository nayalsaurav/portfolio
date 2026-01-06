import Image from 'next/image';
import Link from 'next/link';

import { Container } from './container';
import { Separator } from './separator';
import { AnimatedThemeToggler } from './ui/animated-theme-toggler';

const navLinks = [
  { name: 'Work', href: '/work' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'Projects', href: '/projects' },
];

export const Navbar = () => {
  return (
    <nav className="bg-background/60 sticky top-0 z-50 w-full backdrop-blur-md">
      <Container className="flex justify-between p-1">
        <div className="typography not-typography:max-w-none flex items-baseline gap-6">
          <Link
            href="/"
            aria-label="Home"
            className="not-typography h-12 w-12 overflow-hidden"
          >
            <Image
              src="/pokemon.png"
              alt="Profile picture"
              width={45}
              height={45}
              priority
              className="h-full w-full object-cover"
            />
          </Link>

          {/* Navigation links */}
          <div className="not-typography flex items-center gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="after:bg-foreground relative text-base font-medium no-underline after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {link.name}
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
  );
};
