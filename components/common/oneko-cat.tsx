import { catConfig } from '@/config/cat';
import Script from 'next/script';

const CATS = [
  '/oneko/oneko-classic.gif',
  '/oneko/oneko-dog.gif',
  '/oneko/oneko-tora.gif',
  '/oneko/oneko-maia.gif',
  '/oneko/oneko-vaporwave.gif',
];

export default function OnekoCat() {
  if (!catConfig.enabled) return null;

  return (
    <Script
      src="/oneko/oneko.js"
      strategy="afterInteractive"
      data-cat={CATS[2]}
    />
  );
}
