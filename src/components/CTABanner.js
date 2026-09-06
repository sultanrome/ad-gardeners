import './CTABanner.css';

export default function CTABanner() {
  return (
    <section id="cta" className="cta-section">
      <h2>Ready for a Garden You're Proud Of?</h2>
      <p>Join 500+ satisfied customers across Slough. Get your free quote today — no obligation.</p>
      <div className="cta-btns">
        <a href="#quote" className="btn-dark">📋 Get Free Quote</a>
        <a href="tel:+447700000000" className="btn-ghost">📞 Call Us Now</a>
      </div>
    </section>
  );
}
