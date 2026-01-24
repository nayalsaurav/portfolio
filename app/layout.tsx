import OnekoCat from '@/components/common/oneko-cat';
import { Container } from '@/components/container';
import { FadeIn } from '@/components/fade-in';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/quote-footer';
import { VideoHeader } from '@/components/video-header';
import {
  getPersonSchema,
  getPortfolioPageSchema,
  getProjectsSchema,
  getWebsiteSchema,
} from '@/config/schema';
import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { ViewTransitions } from 'next-view-transitions';
import Script from 'next/script';

import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Saurav Nayal | Portfolio',
    template: '%s | Saurav Nayal',
  },
  metadataBase: new URL('https://www.nayalsaurav.in'),
  description:
    'Portfolio of Saurav Nayal — Software Developer building fast, scalable, and modern web applications.',
  keywords: [
    'Saurav Nayal',
    'Software Developer',
    'Full Stack Developer',
    'Next.js',
    'Portfolio',
  ],
  authors: [{ name: 'Saurav Nayal' }],
  creator: 'Saurav Nayal',

  openGraph: {
    title: 'Saurav Nayal | Portfolio',
    description:
      'Software Developer specializing in modern web technologies like Next.js, Tailwind CSS, and TypeScript.',
    siteName: 'Saurav Nayal Portfolio',
    locale: 'en_US',
    type: 'website',
    url: 'https://www.nayalsaurav.in',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Saurav Nayal Portfolio',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Saurav Nayal | Portfolio',
    description:
      'Software Developer building fast, scalable, and beautiful web experiences.',
    images: ['/og-image.png'],
  },

  other: {
    'og:logo': 'https://www.nayalsaurav.in/profile-anime.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getPersonSchema()),
          }}
        />

        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getWebsiteSchema()),
          }}
        />

        <Script
          id="portfolio-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getPortfolioPageSchema()),
          }}
        />

        <Script
          id="projects-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getProjectsSchema()),
          }}
        />
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="911ed5e1-2cf3-4f50-904f-3ab5d2950fd0"
        />
        <body className="font-mono">
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />

            <Container>
              <VideoHeader />
            </Container>

            <FadeIn>
              <main className="font-mono">{children}</main>
              <Container>
                <Footer />
              </Container>
            </FadeIn>
            <OnekoCat />
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
