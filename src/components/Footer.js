import './Footer.css';

export default function Footer() {
  return (
    <footer id="contact">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="footer-logo-icon">🌿</div>
            <span>AD <span className="gold">Gardeners</span></span>
          </div>
          <p>Slough's trusted professional gardening service. Transforming outdoor spaces across all SL postcodes since 2016.</p>
          <div className="footer-socials">
            <a href="#top" className="social-btn" aria-label="Facebook">📘</a>
            <a href="#top" className="social-btn" aria-label="Instagram">📸</a>
            <a href="#top" className="social-btn" aria-label="Twitter">🐦</a>
          </div>
        </div>

        <div className="footer-col">
          <h5>Services</h5>
          <ul>
            {['Lawn Mowing','Garden Clearance','Hedge Trimming','Landscaping','Tree Pruning','Pressure Washing'].map(s => (
              <li key={s}><a href="#services">{s}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h5>Company</h5>
          <ul>
            {[['About Us','#why'],['Our Team','#team'],['Reviews','#reviews'],['Areas Covered','#areas'],['FAQ','#faq'],['Get a Quote','#quote']].map(([label, href]) => (
              <li key={label}><a href={href}>{label}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h5>Contact</h5>
          <div className="footer-contact-item"><span>📞</span><span>07700 000000</span></div>
          <div className="footer-contact-item"><span>✉️</span><span>hello@adgardeners.co.uk</span></div>
          <div className="footer-contact-item"><span>📍</span><span>Slough, Berkshire · All SL Postcodes</span></div>
          <div className="footer-contact-item"><span>🕐</span><span>Mon–Sun: 7am – 7pm</span></div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 AD Gardeners Slough. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#top">Privacy Policy</a>
          <a href="#top">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
