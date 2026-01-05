import { Card } from '@/components/ui/card';
import { MapPin } from 'lucide-react';
import Image from 'next/image';

export const GithubCard = () => {
  return (
    <Card className="w-full max-w-sm p-4">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="relative h-14 w-14 overflow-hidden rounded-full">
          <Image
            src="/profile-pic.png"
            alt="Profile picture"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h3 className="text-sm leading-tight font-semibold">Saurav Nayal</h3>
          <p className="text-muted-foreground text-xs">nayalsaurav</p>
        </div>
      </div>

      {/* Bio */}
      <p className="text-foreground mt-3 text-sm leading-snug">
        If I can imagine it, I can build it.
      </p>

      {/* Location */}
      <div className="text-muted-foreground mt-2 flex items-center gap-1.5 text-xs">
        <MapPin className="h-3.5 w-3.5" />
        <span>Delhi, India</span>
      </div>

      {/* Stats */}
      <div className="mt-4 flex gap-4 text-xs">
        <Stat value="60" label="Repositories" />
        <Stat value="180" label="Followers" />
      </div>
    </Card>
  );
};

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="flex items-center gap-1">
    <span className="font-semibold">{value}</span>
    <span className="text-muted-foreground">{label}</span>
  </div>
);
