import { cn } from '@/lib/utils';

export function VideoHeader({
  className,
  src = 'https://res.cloudinary.com/dcoqmeswp/video/upload/v1769109388/po6jzeglngwl0pxable1.mp4',
}: {
  className?: string;
  src?: string;
}) {
  return (
    <div
      className={cn(
        'relative h-50 overflow-hidden rounded-xl',
        'shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]',
        className,
      )}
    >
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full object-cover"
      />
      {/* Subtle overlay for better blending */}
      <div className="from-background/20 pointer-events-none absolute inset-0 bg-gradient-to-t to-transparent" />
    </div>
  );
}
