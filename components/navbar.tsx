import Image from 'next/image';
import Link from 'next/link';

import { Container } from './container';
import { AnimatedThemeToggler } from './ui/animated-theme-toggler';
import { Separator } from './ui/separator';

const navLinks = [
  { name: 'Work', href: '/work' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'Projects', href: '/projects' },
];

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/60 backdrop-blur-md dark:bg-black/50">
      <Container className="flex justify-between">
        <div className="flex items-baseline gap-6">
          <Link
            href="/"
            aria-label="Home"
            className="h-12.5 w-12.5 overflow-hidden"
          >
            <Image
              src="/pokemon.png"
              alt="Profile picture"
              width={50}
              height={50}
              priority
              className="h-full w-full object-cover"
            />
          </Link>

          <div className="flex items-center gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-0 text-lg no-underline after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-neutral-900 after:transition-transform after:duration-300 hover:after:scale-x-100 dark:after:bg-neutral-100"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <AnimatedThemeToggler />
        </div>
      </Container>
      <Separator />
    </nav>
  );
};
