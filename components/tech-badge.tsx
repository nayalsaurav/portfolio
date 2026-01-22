import { cn } from '@/lib/utils';

export function TechBadge({
  className,
  ...props
}: React.ComponentProps<'span'>) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md px-2 py-0.5',
        'bg-primary/10 text-primary',
        'text-xs font-medium',
        'border-primary/30 border border-dashed',
        className,
      )}
      {...props}
    />
  );
}
