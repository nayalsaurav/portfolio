import { cn } from '@/lib/utils';
import React, { PropsWithChildren } from 'react';

type ContainerProps = PropsWithChildren<{
  className?: string;
}>;

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn('mx-auto max-w-4xl p-4 md:p-10', className)}>
      {children}
    </div>
  );
}
