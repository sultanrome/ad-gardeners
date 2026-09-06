import { useState } from 'react';
import './FAQ.css';

const faqs = [
  { q: 'How quickly can you come out?', a: 'We aim to have a gardener with you within 48 hours of booking. For urgent clearance jobs we often have same-day availability — just call us directly.' },
  { q: 'Do I need to be home during the visit?', a: "Not at all! As long as we have access to the garden, you're free to be out. Many customers are at work when we visit. We'll send you a photo report once complete." },
  { q: 'Are your gardeners insured?', a: 'Yes, every AD Gardener is covered by £5M public liability insurance and has been fully background-checked. Your garden and property are always protected.' },
  { q: 'What happens if it rains on my booking day?', a: "Light rain doesn't stop us — most services continue in all conditions. If weather makes it unsafe or would produce poor results, we'll contact you to reschedule at no extra charge." },
  { q: 'Do you bring your own tools and equipment?', a: 'Absolutely. Our teams arrive fully equipped with professional-grade mowers, trimmers, hedgers, and all other tools. You provide nothing — just access to the garden.' },
  { q: 'How do I pay?', a: 'We accept bank transfer, card payment, and cash. Payment is only taken after the job is complete and you are satisfied with the results. We never ask for payment upfront.' },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="faq-section">
      <div className="section-header center">
        <span className="section-label">FAQ</span>
        <h2 className="section-title">Questions We Get Asked</h2>
        <p className="section-sub">Everything you need to know before booking your first visit.</p>
      </div>
      <div className="faq-wrap">
        {faqs.map((f, i) => (
          <div className={`faq-item reveal ${open === i ? 'open' : ''}`} key={i}>
            <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
              {f.q}
              <span className="faq-icon">{open === i ? '−' : '+'}</span>
            </button>
            <div className="faq-body">
              <p>{f.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
