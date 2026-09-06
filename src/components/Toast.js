import './Toast.css';

export default function Toast({ show }) {
  return (
    <div className={`toast ${show ? 'show' : ''}`}>
      <span className="toast-icon">✅</span>
      <div>
        <strong>Quote Request Sent!</strong>
        <p>We'll call you within 2 hours.</p>
      </div>
    </div>
  );
}
