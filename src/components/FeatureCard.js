export default function FeatureCard({ title, description }) {
  return (
    <div style={{
      border: '1px solid #ddd', borderRadius: '8px',
      padding: '20px', width: '100%', maxWidth: '280px',
      background: '#fff', boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
      transition: 'transform 0.3s', textAlign: 'left'
    }}>
      <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{title}</h3>
      <p style={{ color: '#555' }}>{description}</p>
    </div>
  );
}
