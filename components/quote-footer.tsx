import { profile } from '@/config/profile';

export function QuoteBanner() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-16 md:py-24">
      {/* Video Background */}
      <div
        className="pointer-events-none absolute inset-0 z-0 h-full w-full"
        style={{
          maskImage:
            'linear-gradient(to right, transparent, black 20%, black 80%, transparent), linear-gradient(transparent, black 10%, black 90%, transparent)',
          maskComposite: 'intersect',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-60 grayscale dark:opacity-40"
        >
          <source
            src="https://res.cloudinary.com/dcoqmeswp/video/upload/v1769109388/po6jzeglngwl0pxable1.mp4"
            type="video/mp4"
          />
        </video>
        <div className="from-background via-background/80 to-background absolute inset-0 bg-gradient-to-t opacity-30" />
      </div>

      {/* Quote */}
      <div className="relative z-10 max-w-4xl px-6 pt-6 text-center">
        <p className="text-foreground text-[22px] leading-tight tracking-tight italic md:text-4xl">
          &ldquo;The disciplined mind is your best friend.
          <br />
          The undisciplined mind is your worst enemy.&rdquo;
        </p>
      </div>

      {/* Attribution */}
      <div className="mt-8">
        <span className="text-foreground/80 text-lg tracking-wide italic">
          — Bhagavad Gita
        </span>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="text-muted-foreground flex flex-col items-center justify-between gap-4 px-4 pb-8 text-[11px] tracking-wide transition-colors md:flex-row md:px-6">
      <p className="tracking-widest uppercase opacity-80">
        © {new Date().getFullYear()} All rights reserved.
      </p>
      <div className="flex items-center gap-1.5 uppercase opacity-90 transition-opacity hover:opacity-100">
        <span className="font-light">Designed</span>
        <span className="text-foreground text-lg italic">&amp;</span>
        <span className="font-light">Developed by</span>
        <span className="text-foreground relative cursor-pointer text-[16px] font-medium capitalize italic after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100">
          {profile.name.split(' ')[0]}
        </span>
      </div>
    </footer>
  );
}

export function QuoteFooter() {
  return (
    <div className="flex w-full flex-col">
      <QuoteBanner />
      <Footer />
    </div>
  );
}
