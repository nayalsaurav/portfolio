import { BackButton } from '@/components/back-button';
import { Container } from '@/components/container';
import { StripeMask } from '@/components/stripe-mask';
import { WorkExperience } from '@/components/work-experience';
import { experiences } from '@/config/experiences';
import { BriefcaseIcon } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work Experience',
  description:
    'My professional journey, internships, and work experience as a Software Developer.',
  openGraph: {
    title: 'Work Experience | Saurav Nayal',
    description:
      'My professional journey, internships, and work experience as a Software Developer.',
    url: 'https://www.nayalsaurav.in/work',
    siteName: 'Saurav Nayal Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.nayalsaurav.in/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Work Experience | Saurav Nayal',
      },
    ],
  },
  twitter: {
    title: 'Work Experience | Saurav Nayal',
    description:
      'My professional journey, internships, and work experience as a Software Developer.',
    card: 'summary_large_image',
    images: ['https://www.nayalsaurav.in/og-image.png'],
  },
};

export default function WorkPage() {
  return (
    <>
      <StripeMask angle={45} />
      <Container>
        <section className="py-4">
          {/* Back Button */}
          <div className="mb-6">
            <BackButton />
          </div>

          {/* Section Header */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold tracking-tight">
              Work Experience
            </h1>
            <p className="text-muted-foreground mt-2">
              My professional journey building software solutions and
              contributing to impactful projects.
            </p>
          </div>

          {/* Work Experience Timeline */}
          <WorkExperience experiences={experiences} />
        </section>
      </Container>
      <StripeMask angle={-45} />
    </>
  );
}
