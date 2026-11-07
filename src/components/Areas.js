import './Areas.css';

const postcodes = ['SL1','SL2','SL3','SL4','SL5','SL6','SL7','SL8','SL9'];

export default function Areas() {
  return (
    <section id="areas" className="areas-section">
      <div className="areas-inner">
        <div className="areas-text">
          <span className="section-label">Coverage</span>
          <h2 className="section-title">We Cover All Slough Postcodes</h2>
          <p className="section-sub">
            Based in Slough, we cover all SL postcodes and surrounding areas
            including Windsor, Maidenhead, and Gerrards Cross.
          </p>
          <div className="postcodes">
            {postcodes.map(p => (
              <div className="postcode" key={p}>{p}</div>
            ))}
          </div>
        </div>
        <div className="areas-map reveal">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80"
            alt="Slough area coverage"
          />
          <div className="areas-map-overlay">
            <div className="areas-map-text">
              <div className="areas-pin">📍</div>
              <div>Slough &amp; Surrounds</div>
              <div className="areas-sub">All SL Postcodes Covered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
