import OnekoCat from '@/components/common/oneko-cat';
import { Navbar } from '@/components/navbar';
import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { ViewTransitions } from 'next-view-transitions';

import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Saurav Nayal | Portfolio',
    template: '%s | Saurav Nayal',
  },
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
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Saurav Nayal | Portfolio',
    description:
      'Software Developer building fast, scalable, and beautiful web experiences.',
  },

  icons: {
    icon: '/favicon.ico',
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
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="911ed5e1-2cf3-4f50-904f-3ab5d2950fd0"
        ></script>
        <body className="font-mono">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />

            <main className="font-mono">{children}</main>
            <OnekoCat />
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
