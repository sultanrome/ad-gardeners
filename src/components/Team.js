import './Team.css';

const members = [
  { name: 'Adam D.', role: 'Lead Garden Designer', badge: 'Founder', rating: '4.9', jobs: 312, img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
  { name: 'James W.', role: 'Landscaping Specialist', badge: 'Senior', rating: '4.8', jobs: 198, img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80' },
  { name: 'Carlos M.', role: 'Tree Surgery Expert', badge: 'Expert', rating: '4.9', jobs: 241, img: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=400&q=80' },
  { name: 'Tom B.', role: 'Lawn Care Specialist', badge: 'Expert', rating: '4.7', jobs: 176, img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80' },
];

export default function Team() {
  return (
    <section id="team" className="team-section">
      <div className="section-header center">
        <span className="section-label">Our People</span>
        <h2 className="section-title">Meet Your Garden Experts</h2>
        <p className="section-sub">Every member of our team is vetted, trained, and passionate about creating beautiful outdoor spaces.</p>
      </div>
      <div className="team-grid">
        {members.map(m => (
          <div className="team-card reveal" key={m.name}>
            <div className="team-img-wrap">
              <img src={m.img} alt={m.name} loading="lazy" />
              <span className="team-badge">{m.badge}</span>
            </div>
            <div className="team-body">
              <h4 className="team-name">{m.name}</h4>
              <p className="team-role">{m.role}</p>
              <div className="team-rating">
                {'★'.repeat(5)} <span>({m.rating} · {m.jobs} jobs)</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
