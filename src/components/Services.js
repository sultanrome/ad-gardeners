import './Services.css';

const services = [
  { icon: '🌿', name: 'Lawn Mowing & Maintenance', price: 'From £35', img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80', desc: 'Regular cuts, edging, and lawn treatments to keep your grass lush, green, and perfectly manicured all year round.' },
  { icon: '🧹', name: 'Garden Clearance', price: 'From £80', img: 'https://images.unsplash.com/photo-1445052520430-e9d93c5c8a38?w=600&q=80', desc: 'Full clearance of overgrown or neglected gardens. We remove all debris, brambles, and waste — leaving you a clean slate.' },
  { icon: '✂️', name: 'Hedge & Shrub Trimming', price: 'From £45', img: 'https://images.unsplash.com/photo-1599598425947-5202edd56bdb?w=600&q=80', desc: 'Precision shaping of hedges, shrubs, and bushes. We maintain natural form while achieving clean, defined lines.' },
  { icon: '🏡', name: 'Landscaping & Garden Design', price: 'From £250', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', desc: 'Transform your outdoor space entirely. Our designers create stunning, functional gardens tailored to your lifestyle and budget.' },
  { icon: '🌳', name: 'Tree Pruning & Trimming', price: 'From £95', img: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=600&q=80', desc: 'Safe, professional tree care including crown thinning, reduction, and dead wood removal to keep your trees healthy.' },
  { icon: '🌸', name: 'Planting & Flowerbeds', price: 'From £55', img: 'https://images.unsplash.com/photo-1464820453369-31d2c0b651af?w=600&q=80', desc: 'Seasonal planting, bulb planting, and flowerbed creation and restoration. We bring colour and life to your garden.' },
  { icon: '💧', name: 'Pressure Washing', price: 'From £65', img: 'https://images.unsplash.com/photo-1527515545081-5db817172677?w=600&q=80', desc: 'Deep clean driveways, patios, decking, and garden paths. Blast away years of grime, moss, and algae in hours.' },
  { icon: '♻️', name: 'Green Waste Removal', price: 'From £40', img: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=600&q=80', desc: 'We collect and responsibly dispose of all garden waste — grass clippings, branches, leaves, and soil.' },
  { icon: '🌱', name: 'Lawn Aeration & Scarification', price: 'From £70', img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80', desc: 'Revitalise compacted, patchy, or tired lawns with professional scarification, aeration, and overseeding treatments.' },
];

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="section-header">
        <span className="section-label">What We Do</span>
        <h2 className="section-title">Every Garden Service You'll Ever Need</h2>
        <p className="section-sub">From a quick mow to a complete outdoor transformation — our expert gardeners handle it all across Slough.</p>
      </div>
      <div className="services-grid">
        {services.map(s => (
          <div className="service-card reveal" key={s.name}>
            <img src={s.img} alt={s.name} className="service-img" loading="lazy" />
            <div className="service-body">
              <div className="service-icon">{s.icon}</div>
              <h3 className="service-name">{s.name}</h3>
              <p className="service-desc">{s.desc}</p>
              <span className="service-price">{s.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
