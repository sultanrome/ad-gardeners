import './Gallery.css';

const photos = [
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1000&q=80', tag: 'Full Transformation', big: true },
  { src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80', tag: 'Lawn Care' },
  { src: 'https://images.unsplash.com/photo-1585320806297-9794b3e4aaae?w=600&q=80', tag: 'Garden Clearance' },
  { src: 'https://images.unsplash.com/photo-1599598425947-5202edd56bdb?w=600&q=80', tag: 'Hedge Trimming' },
  { src: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=600&q=80', tag: 'Tree Work' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="gallery-section">
      <div className="section-header">
        <span className="section-label">Our Work</span>
        <h2 className="section-title">Gardens We've Transformed</h2>
        <p className="section-sub">Every garden tells a story. Here are some of our favourite chapters from across Slough.</p>
      </div>
      <div className="gallery-grid reveal">
        {photos.map(p => (
          <div className={`gallery-item ${p.big ? 'big' : ''}`} key={p.tag}>
            <img src={p.src} alt={p.tag} loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-tag">{p.tag}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
