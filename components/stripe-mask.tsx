import { Container } from '@/components/container';

export function StripeMask({ angle = -45 }: { angle?: number }) {
  return (
    <Container className="relative">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `repeating-linear-gradient(${angle}deg, transparent, transparent 10px, currentcolor 10px, currentcolor 11px)`,
          opacity: 0.15,
        }}
      />
    </Container>
  );
}
