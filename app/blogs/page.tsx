import { ComingSoon } from '@/components/coming-soon';
import { Container } from '@/components/container';
import { StripeMask } from '@/components/stripe-mask';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Insights, tutorials, and articles on web development, software engineering, and system design.',
  openGraph: {
    title: 'Blog | Saurav Nayal',
    description:
      'Insights, tutorials, and articles on web development, software engineering, and system design.',
  },
  twitter: {
    title: 'Blog | Saurav Nayal',
    description:
      'Insights, tutorials, and articles on web development, software engineering, and system design.',
  },
};

export default function BlogPage() {
  return (
    <>
      <StripeMask angle={45} />
      <Container>
        <ComingSoon />
      </Container>
      <StripeMask angle={-45} />
    </>
  );
}
