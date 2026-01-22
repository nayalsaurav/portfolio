'use client';

import { Container } from '@/components/container';
import { Button } from '@/components/ui/button';
import { ShimmeringText } from '@/components/ui/shimmering-text';
import { motion } from 'motion/react';
import Link from 'next/link';

export function ComingSoon() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center p-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        {/* Abstract animated background blob */}
        <div className="bg-primary/5 absolute -inset-8 -z-10 animate-pulse rounded-full blur-3xl" />

        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          <ShimmeringText
            text="Coming Soon"
            className="text-foreground dark:text-foreground"
          />
        </h1>
        <p className="tex-lg text-muted-foreground mt-4 max-w-md sm:text-xl">
          I&apos;m currently crafting some awesome articles and tutorials. Stay
          tuned!
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-8 flex justify-center gap-4"
        >
          <Button asChild variant="link">
            <Link href="/">Back to Home</Link>
          </Button>
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="bg-primary/20 absolute top-1/4 left-1/4 h-2 w-2 rounded-full" />
        <div className="bg-primary/20 absolute top-3/4 right-1/4 h-3 w-3 rounded-full" />
        <div className="bg-foreground/10 absolute bottom-1/4 left-1/3 h-1.5 w-1.5 rounded-full" />
      </div>
    </div>
  );
}
