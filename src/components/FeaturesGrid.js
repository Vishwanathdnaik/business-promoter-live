import FeatureCard from './FeatureCard';

const features = [
  { title: 'SEO Optimization', description: 'Improve your Google ranking effortlessly' },
  { title: 'Social Media Ads', description: 'Target audiences with precision' },
  { title: 'Video Editing', description: 'Engage with stunning video content' },
  { title: 'Email Campaigns', description: 'Boost your sales with email automation' },
];

export default function FeaturesGrid() {
  return (
    <section style={{
      display: 'flex', flexWrap: 'wrap', gap: '1.5rem',
      justifyContent: 'center', padding: '2rem'
    }}>
      {features.map((f, i) => (
        <FeatureCard key={i} title={f.title} description={f.description} />
      ))}
    </section>
  );
}
