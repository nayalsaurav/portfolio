import OnekoCat from '@/components/common/oneko-cat';
import { Navbar } from '@/components/navbar';
import { Separator } from '@/components/ui/separator';
import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { ViewTransitions } from 'next-view-transitions';
import { Inter, Roboto } from 'next/font/google';

import './globals.css';

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

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
        <body className={` ${inter.className} antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />

            {children}
            <OnekoCat />
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
