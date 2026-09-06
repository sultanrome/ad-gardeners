import './HowItWorks.css';

const steps = [
  { n: '1', title: 'Request Your Quote', body: 'Fill in our quick form with your postcode, service, and availability. We respond within 2 hours.' },
  { n: '2', title: 'We Confirm & Schedule', body: 'We confirm your booking, agree on a price with zero hidden fees, and schedule a visit that suits you.' },
  { n: '3', title: 'Sit Back & Enjoy', body: 'Our vetted team arrives fully equipped. You relax while we transform your garden. Pay only when satisfied.' },
];

export default function HowItWorks() {
  return (
    <section id="how" className="how-section">
      <div className="section-header center">
        <span className="section-label">Simple Process</span>
        <h2 className="section-title">Booked, Done, and Beautiful</h2>
        <p className="section-sub">Getting a professional gardener has never been simpler. Three steps and we're on our way.</p>
      </div>
      <div className="steps-wrap reveal">
        {steps.map((s, i) => (
          <div className="step" key={s.n}>
            <div className="step-num">{s.n}</div>
            <h4>{s.title}</h4>
            <p>{s.body}</p>
            {i < steps.length - 1 && <div className="step-arrow">→</div>}
          </div>
        ))}
      </div>
    </section>
  );
}
