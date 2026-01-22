'use client';

import { ArrowLeftIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    // Use browser history to go back to the previous page
    router.back();
  };

  return (
    <button
      onClick={handleBack}
      className="group text-muted-foreground hover:text-foreground flex items-center gap-2 font-mono text-sm transition-colors"
    >
      <ArrowLeftIcon className="size-4 transition-transform group-hover:-translate-x-1" />
      BACK
    </button>
  );
}
