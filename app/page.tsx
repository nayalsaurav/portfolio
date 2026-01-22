import { AboutSection } from '@/components/about-section';
import { Container } from '@/components/container';
import { Profile } from '@/components/landing/profile';
import { Projects } from '@/components/projects';
import { QuoteBanner } from '@/components/quote-footer';
import { StripeMask } from '@/components/stripe-mask';
import { Button } from '@/components/ui/button';
import { VideoHeader } from '@/components/video-header';
import { WorkExperience } from '@/components/work-experience';
import { experiences } from '@/config/experiences';
import { projects } from '@/config/projects';
import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <StripeMask angle={45} />
      <Container>
        <Profile />
      </Container>
      <StripeMask angle={-45} />
      <Container>
        <section className="py-4">
          <h2 className="text-2xl font-semibold tracking-tight">
            Work Experience
          </h2>
          <WorkExperience
            experiences={experiences.slice(0, 4)}
            className="mt-4"
          />
          <div className="mt-6 flex justify-center">
            <Button asChild variant="outline" className="gap-2">
              <Link href="/work">
                View All Experience
                <ArrowRightIcon className="size-4" />
              </Link>
            </Button>
          </div>
        </section>
      </Container>
      <StripeMask angle={45} />
      <Container>
        <section className="py-4">
          <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
          <Projects projects={projects.slice(0, 4)} className="mt-4" />
          <div className="mt-6 flex justify-center">
            <Button asChild variant="outline" className="gap-2">
              <Link href="/projects">
                View All Projects
                <ArrowRightIcon className="size-4" />
              </Link>
            </Button>
          </div>
        </section>
      </Container>
      <StripeMask angle={-45} />
      <Container>
        <AboutSection />
      </Container>
      <StripeMask angle={45} />
      <Container>
        <QuoteBanner />
      </Container>
    </>
  );
}
