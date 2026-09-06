import './Reviews.css';

const reviews = [
  { initials: 'SK', name: 'Sarah K.', loc: 'Slough, SL1', stars: 5, text: 'AD Gardeners completely transformed my overgrown back garden in one day. The team was professional, friendly, and the result was absolutely stunning. Will be booking regular maintenance now!' },
  { initials: 'MR', name: 'Mohammed R.', loc: 'Slough, SL2', stars: 5, text: 'Unbelievable value. They quoted me fairly, arrived on time, and did a brilliant job on the hedges and lawn. The garden looks like something from a magazine. Highly recommend!' },
  { initials: 'JP', name: 'Jane P.', loc: 'Windsor, SL4', stars: 5, text: "We've used AD Gardeners for 6 months now for weekly maintenance. Consistent, reliable, and always leave the garden looking perfect. Couldn't ask for more." },
  { initials: 'DH', name: 'David H.', loc: 'Maidenhead, SL6', stars: 5, text: 'The pressure washing service was outstanding — our patio looks brand new after years of neglect. Quick, thorough, and reasonably priced. Booking tree pruning next!' },
  { initials: 'AT', name: 'Anita T.', loc: 'Slough, SL3', stars: 5, text: 'Really impressed with the landscaping work. The team listened to exactly what I wanted and delivered beyond my expectations. My neighbours keep asking who did it!' },
  { initials: 'PL', name: 'Peter L.', loc: 'Gerrards Cross, SL9', stars: 4, text: 'Very happy with the garden clearance. What was a jungle is now a proper usable space. The guys worked hard all day and removed everything. Great value.' },
];

export default function Reviews() {
  return (
    <section id="reviews" className="reviews-section">
      <div className="section-header center">
        <span className="section-label">Customer Reviews</span>
        <h2 className="section-title">Don't Just Take Our Word For It</h2>
        <p className="section-sub">Real reviews from real customers across Slough and the SL postcodes.</p>
      </div>
      <div className="reviews-grid">
        {reviews.map(r => (
          <div className="review-card reveal" key={r.name}>
            <div className="review-stars">{'★'.repeat(r.stars)}{'☆'.repeat(5 - r.stars)}</div>
            <p className="review-text">"{r.text}"</p>
            <div className="reviewer">
              <div className="reviewer-avatar">{r.initials}</div>
              <div>
                <div className="reviewer-name">{r.name}</div>
                <div className="reviewer-loc">📍 {r.loc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
