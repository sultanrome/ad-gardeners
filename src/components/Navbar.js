import { useState, useEffect } from 'react';
import './Navbar.css';

const links = [
  { label: 'Services',    href: '#services' },
  { label: 'How It Works',href: '#how' },
  { label: 'Gallery',     href: '#gallery' },
  { label: 'Reviews',     href: '#reviews' },
  { label: 'Areas',       href: '#areas' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#hero" className="nav-logo">
        <div className="nav-logo-icon">🌿</div>
        <span className="nav-logo-text">AD <span>Gardeners</span></span>
      </a>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {links.map(l => (
          <li key={l.label}>
            <a href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
          </li>
        ))}
        <li>
          <a href="#quote" className="nav-cta" onClick={() => setMenuOpen(false)}>
            Get a Quote
          </a>
        </li>
      </ul>

      <button
        className={`hamburger ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  );
}
