import { Container } from '@/components/container';
import { StripeMask } from '@/components/stripe-mask';
import { TechBadge } from '@/components/tech-badge';
import { profile } from '@/config/profile';
import { cn } from '@/lib/utils';
import {
  AwardIcon,
  CodeIcon,
  GithubIcon,
  GlobeIcon,
  GraduationCapIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  MedalIcon,
  PhoneIcon,
  StarIcon,
  TrophyIcon,
  TwitterIcon,
} from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Me',
  description:
    'Learn more about Saurav Nayal, my skills, education, and achievements as a Software Developer.',
  openGraph: {
    title: 'About Me | Saurav Nayal',
    description:
      'Learn more about Saurav Nayal, my skills, education, and achievements as a Software Developer.',
    url: 'https://www.nayalsaurav.in/about',
    siteName: 'Saurav Nayal Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.nayalsaurav.in/og-image.png',
        width: 1200,
        height: 630,
        alt: 'About Me | Saurav Nayal',
      },
    ],
  },
  twitter: {
    title: 'About Me | Saurav Nayal',
    description:
      'Learn more about Saurav Nayal, my skills, education, and achievements as a Software Developer.',
    card: 'summary_large_image',
    images: ['https://www.nayalsaurav.in/og-image.png'],
  },
};

const achievementIcons = {
  code: CodeIcon,
  trophy: TrophyIcon,
  medal: MedalIcon,
  star: StarIcon,
  award: AwardIcon,
} as const;

export default function AboutPage() {
  return (
    <>
      <StripeMask angle={45} />

      {/* About Hero */}
      <Container>
        <section className="py-4">
          <div className="flex gap-6 max-sm:flex-col">
            <div className="shrink-0">
              <div className="ring-border ring-offset-background size-28 overflow-hidden rounded-xl ring-1 ring-offset-2">
                <Image
                  src="/profile-anime.jpg"
                  alt={profile.name}
                  width={112}
                  height={112}
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-semibold tracking-tight">
                About Me
              </h1>
              <p className="text-muted-foreground mt-3 leading-relaxed">
                {profile.bio}
              </p>
            </div>
          </div>
        </section>
      </Container>

      <StripeMask angle={-45} />

      {/* Skills */}
      <Container>
        <section className="py-4">
          <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
          <div className="mt-4 space-y-4">
            {profile.skills.map((category) => (
              <div key={category.category}>
                <h3 className="text-muted-foreground mb-2 text-sm font-medium">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <TechBadge key={skill}>{skill}</TechBadge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </Container>

      <StripeMask angle={45} />

      {/* Achievements */}
      <Container>
        <section className="py-4">
          <h2 className="text-2xl font-semibold tracking-tight">
            Achievements
          </h2>
          <div className="mt-4 space-y-3">
            {profile.achievements.map((achievement) => {
              const Icon =
                achievementIcons[
                  achievement.icon as keyof typeof achievementIcons
                ] || AwardIcon;
              return (
                <div
                  key={achievement.id}
                  className="bg-card/50 flex items-start gap-3 rounded-lg border p-3"
                >
                  <div className="text-muted-foreground mt-0.5">
                    <Icon className="size-4" />
                  </div>
                  <div>
                    <h3 className="text-foreground text-sm font-medium">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground mt-0.5 text-sm">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </Container>

      <StripeMask angle={-45} />

      {/* Education */}
      <Container>
        <section className="py-4">
          <h2 className="text-2xl font-semibold tracking-tight">Education</h2>
          <div className="mt-4 space-y-3">
            {profile.education.map((edu) => (
              <div
                key={edu.id}
                className="bg-card/50 flex items-start gap-3 rounded-lg border p-3"
              >
                <div className="text-muted-foreground mt-0.5">
                  <GraduationCapIcon className="size-4" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-foreground text-sm font-medium">
                      {edu.degree}
                    </h3>
                    <span className="text-muted-foreground shrink-0 text-xs">
                      {edu.startYear} – {edu.endYear}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {edu.institution}
                  </p>
                  <div className="text-muted-foreground mt-1.5 flex items-center gap-3 text-xs">
                    <span className="flex items-center gap-1">
                      <MapPinIcon className="size-3" />
                      {edu.location}
                    </span>
                    <span className="text-primary font-medium">
                      {edu.score}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Container>

      <StripeMask angle={45} />

      {/* Contact */}
      <Container>
        <section className="py-4">
          <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
          <p className="text-muted-foreground mt-1 text-sm">
            Feel free to reach out for collaborations or a friendly chat.
          </p>

          <div className="mt-4 space-y-2">
            <Link
              href={`mailto:${profile.contact.email}`}
              className="bg-card/50 hover:bg-muted/50 flex items-center gap-3 rounded-lg border p-3 transition-colors"
            >
              <MailIcon className="text-muted-foreground size-4" />
              <span className="text-sm">{profile.contact.email}</span>
            </Link>
            <Link
              href={`tel:${profile.contact.phone}`}
              className="bg-card/50 hover:bg-muted/50 flex items-center gap-3 rounded-lg border p-3 transition-colors"
            >
              <PhoneIcon className="text-muted-foreground size-4" />
              <span className="text-sm">{profile.contact.phone}</span>
            </Link>
          </div>

          <div className="mt-4">
            <p className="text-muted-foreground mb-2 text-sm">Socials</p>
            <div className="flex flex-wrap gap-2">
              <SocialLink
                href={profile.contact.github}
                icon={GithubIcon}
                label="GitHub"
              />
              <SocialLink
                href={profile.contact.linkedin}
                icon={LinkedinIcon}
                label="LinkedIn"
              />
              <SocialLink
                href={profile.contact.twitter}
                icon={TwitterIcon}
                label="Twitter"
              />
              <SocialLink
                href={profile.contact.leetcode}
                icon={CodeIcon}
                label="LeetCode"
              />
              <SocialLink
                href={profile.contact.website}
                icon={GlobeIcon}
                label="Website"
              />
            </div>
          </div>
        </section>
      </Container>

      <StripeMask angle={-45} />
    </>
  );
}

function SocialLink({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:bg-muted/50 flex items-center gap-2 rounded-lg border px-3 py-2 text-sm transition-colors"
    >
      <Icon className="size-4" />
      {label}
    </Link>
  );
}
