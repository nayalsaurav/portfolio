import { cn } from '@/lib/utils';

type SeparatorProps = {
  orientation?: 'horizontal' | 'vertical';
  thickness?: number;
  dash?: number;
  gap?: number;
  className?: string;
};

export function Separator({
  orientation = 'horizontal',
  thickness = 1,
  dash = 8,
  gap = 8,
  className,
}: SeparatorProps) {
  const isHorizontal = orientation === 'horizontal';

  return (
    <div
      className={cn('shrink-0', isHorizontal ? 'w-full' : 'h-full', className)}
      style={{
        borderWidth: thickness,
        borderStyle: 'solid',
        borderImage: isHorizontal
          ? `repeating-linear-gradient(
              90deg,
              var(--color-border) 0 ${dash}px,
              transparent ${dash}px ${dash + gap}px
            ) 1`
          : `repeating-linear-gradient(
              180deg,
              var(--color-border) 0 ${dash}px,
              transparent ${dash}px ${dash + gap}px
            ) 1`,
      }}
    />
  );
}
