import { cn } from '@/lib/utils';
import React, { PropsWithChildren } from 'react';

type DottedContainerProps = PropsWithChildren<{
  className?: string;
}>;

export function DottedContainer({ children, className }: DottedContainerProps) {
  return (
    <div
      className={cn('bg-background relative w-full p-6', className)}
      style={{
        backgroundImage: `
    radial-gradient(
      var(--border) 1.5px,
      transparent 1px
    )
  `,
        backgroundSize: '10px 10px',
      }}
    >
      {children}
    </div>
  );
}
