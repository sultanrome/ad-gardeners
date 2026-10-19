import { useState } from 'react';
import './Hero.css';

const services = [
  'Lawn Mowing & Maintenance',
  'Garden Clearance',
  'Hedge & Shrub Trimming',
  'Landscaping & Design',
  'Tree Pruning & Trimming',
  'Planting & Flowerbeds',
  'Pressure Washing',
  'Green Waste Removal',
  'Lawn Aeration & Scarification',
];

export default function Hero({ onQuoteSuccess }) {
  const [form, setForm] = useState({ name: '', postcode: '', service: '', phone: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onQuoteSuccess();
    setForm({ name: '', postcode: '', service: '', phone: '' });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-badge">Slough Most Trusted Gardeners</div>
          <h1 className="hero-title">
            Transform Your Garden into a{' '}
            <em>Living Masterpiece</em>
          </h1>
          <p className="hero-desc">
            Professional, vetted, and fully insured gardeners serving Slough and
            surrounding areas. From weekly maintenance to complete garden
            transformations - we bring your outdoor vision to life.
          </p>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-num">500+</div>
              <div className="hero-stat-label">Happy Clients</div>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <div className="hero-stat-num">4.9 Stars</div>
              <div className="hero-stat-label">Average Rating</div>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <div className="hero-stat-num">8yrs</div>
              <div className="hero-stat-label">Experience</div>
            </div>
          </div>
          <div className="hero-btns">
            <a href="#quote" className="btn-primary">Get Free Quote</a>
            <a href="tel:+447417486966" className="btn-outline">Call Us Now</a>
          </div>
        </div>
        <div className="quote-card" id="quote">
          <h3>Get Your Free Quote</h3>
          <p>Response within 2 hours - no obligation</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text" placeholder="e.g. James Smith" required
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              />
            </div>
            <div className="form-group">
              <label>Postcode</label>
              <input
                type="text" placeholder="e.g. SL1 1AA" required
                value={form.postcode}
                onChange={e => setForm(f => ({ ...f, postcode: e.target.value }))}
              />
            </div>
            <div className="form-group">
              <label>Service Needed</label>
              <select
                required
                value={form.service}
                onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
              >
                <option value="">Select a service...</option>
                {services.map(s => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel" placeholder="e.g. 07700 000000" required
                value={form.phone}
                onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
              />
            </div>
            <button type="submit" className="quote-submit">
              Get My Free Quote
            </button>
          </form>
          <p className="quote-guarantee">No spam. No obligation. 100% free.</p>
        </div>
      </div>
    </section>
  );
}
