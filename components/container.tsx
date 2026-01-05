import { cn } from '@/lib/utils';
import React, { PropsWithChildren } from 'react';

type ContainerProps = PropsWithChildren<{
  className?: string;
}>;

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto max-w-4xl border-r border-l border-neutral-200 p-2 dark:border-neutral-800',
        className,
      )}
    >
      {children}
    </div>
  );
}
