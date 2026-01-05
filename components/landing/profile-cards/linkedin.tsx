import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, Pencil } from 'lucide-react';
import Image from 'next/image';

export function LinkedInProfileCard() {
  return (
    <Card className="bg-background relative overflow-hidden rounded-2xl border">
      {/* Cover */}
      <div className="relative h-32 w-full bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
        <button className="bg-background/80 absolute top-3 right-3 rounded-full p-2 backdrop-blur">
          <Pencil className="text-muted-foreground h-4 w-4" />
        </button>
      </div>

      {/* Profile Section */}
      <div className="relative px-5 pb-5">
        {/* Avatar */}
        <div className="-mt-12 flex items-end gap-4">
          <div className="border-background relative h-24 w-24 overflow-hidden rounded-full border-4">
            <Image
              src="/profile.png"
              alt="Saurav Nayal"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Info */}
        <div className="mt-3">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-semibold">Saurav Nayal</h1>
            <span className="text-muted-foreground flex items-center gap-1 text-sm">
              <Check className="h-4 w-4 text-blue-500" />
              He/Him
            </span>
          </div>

          <p className="mt-1 text-sm">
            Final Year CSE | Full Stack Developer | 600+ DSA Problems
          </p>

          <p className="text-muted-foreground mt-1 text-sm">
            Delhi, India ·{' '}
            <span className="cursor-pointer text-blue-500 hover:underline">
              Contact info
            </span>
          </p>

          <p className="mt-2 text-sm font-medium text-blue-500">
            127 connections
          </p>
        </div>
      </div>
    </Card>
  );
}
