// src/components/Hero.tsx
import Hero from 'composable-ui';

export default function MyHero() {
  return (
    <Hero
      heading="Welcome to My Site"
      subheading="Powered by Composable UI + Tailwind CSS + Next.js"
      callToAction={{
        label: 'Get Started',
        href: '/get-started'
      }}
    />
  );
}
