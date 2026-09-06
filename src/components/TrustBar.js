import './TrustBar.css';

const items = [
  { icon: '✅', label: 'Fully Insured' },
  { icon: '🔍', label: 'Background Checked' },
  { icon: '📅', label: '7 Days a Week' },
  { icon: '💷', label: 'Transparent Pricing' },
  { icon: '🏆', label: 'Satisfaction Guaranteed' },
];

export default function TrustBar() {
  return (
    <div className="trust-bar">
      {items.map(item => (
        <div className="trust-item" key={item.label}>
          <span>{item.icon}</span>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}
