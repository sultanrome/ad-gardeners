import './CTABanner.css';

export default function CTABanner() {
  return (
    <section id="cta" className="cta-section">
      <h2>Ready for a Garden You're Proud Of?</h2>
      <p>Join 500+ satisfied customers across Slough. Get your free quote today — no obligation.</p>
      <div className="cta-btns">
        <a href="#quote" className="btn-dark">📋 Get Free Quote</a>
        <a href="tel:07417486966" className="btn-ghost">📞 07417 486966</a>
      </div>
    </section>
  );
}
