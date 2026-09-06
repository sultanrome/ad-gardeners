import './WhyUs.css';

const cards = [
  { icon: '🛡️', title: 'Fully Insured & Vetted', body: 'Every gardener is background-checked and covered by £5M public liability insurance. Your property is always protected.' },
  { icon: '💷', title: 'Transparent Pricing', body: 'You see the price before we start. No surprise charges, no hidden extras. What we quote is exactly what you pay.' },
  { icon: '📅', title: 'Available 7 Days a Week', body: 'We work weekends and bank holidays. Flexible scheduling means we fit around your life, not the other way around.' },
  { icon: '🔧', title: 'Fully Equipped Teams', body: 'We arrive with all professional-grade tools and equipment. Just unlock the gate — we handle everything else.' },
  { icon: '🌱', title: 'Eco-Friendly Approach', body: 'We use environmentally responsible products and dispose of all green waste sustainably. Good for your garden, good for the planet.' },
  { icon: '⭐', title: 'Satisfaction Guarantee', body: "Not happy with any part of our work? We'll come back and make it right at no extra charge. Your satisfaction is non-negotiable." },
];

export default function WhyUs() {
  return (
    <section id="why" className="why-section">
      <div className="section-header">
        <span className="section-label" style={{ color: 'var(--gold-light)' }}>Why AD Gardeners</span>
        <h2 className="section-title" style={{ color: 'var(--white)' }}>The Slough Standard for Garden Excellence</h2>
        <p className="section-sub" style={{ color: 'rgba(255,255,255,0.7)' }}>We don't just cut grass. We deliver an experience you'll want to share with your neighbours.</p>
      </div>
      <div className="why-grid">
        {cards.map(c => (
          <div className="why-card reveal" key={c.title}>
            <div className="why-icon">{c.icon}</div>
            <h4>{c.title}</h4>
            <p>{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
