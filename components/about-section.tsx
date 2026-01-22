import { TechBadge } from '@/components/tech-badge';
import { profile } from '@/config/profile';
import Image from 'next/image';

export function AboutSection() {
  // Flatten all skills into a single array
  const allSkills = profile.skills.flatMap((category) => category.skills);

  return (
    <section className="py-4">
      <div>
        <p className="text-muted-foreground text-sm">About</p>
        <h2 className="text-2xl font-bold">Me</h2>
      </div>

      <div className="mt-8 flex flex-col gap-6 md:flex-row">
        {/* Profile Image */}
        <div className="shrink-0">
          <Image
            src="/profile.png"
            alt={profile.name}
            width={240}
            height={240}
            className="border-border size-60 rounded-md border-2 object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold">{profile.name}</h3>
          <p className="text-muted-foreground mt-4">{profile.bio}</p>

          {/* Skills */}
          <p className="text-muted-foreground mt-8 font-bold">Skills</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {allSkills.slice(0, 15).map((skill) => (
              <TechBadge key={skill}>{skill}</TechBadge>
            ))}
            {allSkills.length > 15 && (
              <TechBadge>+{allSkills.length - 15} more</TechBadge>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
