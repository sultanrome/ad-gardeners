import './Areas.css';

const areas = [
  { name: 'Slough',         postcodes: 'SL1-SL9' },
  { name: 'Reading',        postcodes: 'RG1-RG31' },
  { name: 'Oxford',         postcodes: 'OX1-OX4' },
  { name: 'Maidenhead',     postcodes: 'SL6' },
  { name: 'Windsor',        postcodes: 'SL4' },
  { name: 'Ascot',          postcodes: 'SL5' },
  { name: 'Bracknell',      postcodes: 'RG12, RG42' },
  { name: 'High Wycombe',   postcodes: 'HP11-HP15' },
  { name: 'Gerrards Cross', postcodes: 'SL9' },
  { name: 'Staines',        postcodes: 'TW18-TW19' },
  { name: 'Egham',          postcodes: 'TW20' },
];

export default function Areas() {
  return (
    <section id="areas" className="areas-section">
      <div className="areas-inner">
        <div className="areas-text">
          <span className="section-label">Coverage</span>
          <h2 className="section-title">Areas We Cover</h2>
          <p className="section-sub">
            Based in Slough, we cover a wide region across Berkshire, Oxfordshire
            and beyond. If you are near any of the areas below, get in touch -
            we will do our best to accommodate you.
          </p>
          <div className="postcodes">
            {areas.map(area => (
              <div className="postcode" key={area.name}>
                <strong>{area.name}</strong>
                <span style={{ fontSize: '0.75rem', opacity: 0.8, display: 'block' }}>{area.postcodes}</span>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.85 }}>
            Also covering surrounding villages and towns - just ask!
          </p>
        </div>
        <div className="areas-map">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80"
            alt="Coverage area map"
          />
          <div className="areas-map-overlay">
            <div className="areas-map-text">
              <div className="areas-pin">📍</div>
              <div>Slough and Surrounds</div>
              <div className="areas-sub">Berkshire - Oxfordshire - Surrey</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

