import { useState, useEffect } from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <a href="#" className="navbar-logo">PV.</a>

      <ul className="navbar-links">
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
      </ul>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <a href="https://github.com/paulsonvargehese" target="_blank" rel="noreferrer" className="hero-social-link">
          <FiGithub />
        </a>
        <a href="https://www.linkedin.com/in/paulson-varghese-158027184/" target="_blank" rel="noreferrer" className="hero-social-link">
          <FiLinkedin />
        </a>
        <a href="mailto:paulsonvargehese@gmail.com" className="btn btn-primary" style={{ padding: '9px 22px', fontSize: '0.85rem' }}>
          Hire Me
        </a>
      </div>
    </nav>
  );
}
