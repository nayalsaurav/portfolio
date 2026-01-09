import { Container } from '@/components/container';
import { DottedContainer } from '@/components/dotted-container';
import { Profile } from '@/components/landing/profile';
import { Separator } from '@/components/separator';

export default function Page() {
  return (
    <>
      <Container>
        <DottedContainer className="h-50" />
      </Container>
      <Separator />
      <Container>
        <Profile />
      </Container>
      <Separator />
    </>
  );
}
