import { cn } from '@/lib/utils';
import React, { PropsWithChildren } from 'react';

type ContainerProps = PropsWithChildren<{
  className?: string;
  dash?: number;
  gap?: number;
  thickness?: number;
}>;

export function Container({
  children,
  className,
  dash = 8,
  gap = 8,
  thickness = 2,
}: ContainerProps) {
  return (
    <div
      className={cn('mx-auto max-w-3xl p-2', className)}
      style={{
        borderLeftWidth: thickness,
        borderRightWidth: thickness,
        borderLeftStyle: 'solid',
        borderRightStyle: 'solid',
        borderImage: `
          repeating-linear-gradient(
            180deg,
            var(--border) 0 ${dash}px,
            transparent ${dash}px ${dash + gap}px
          ) 1
        `,
      }}
    >
      {children}
    </div>
  );
}
