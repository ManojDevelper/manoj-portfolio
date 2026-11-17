import { useEffect, useState } from 'react';
import { profile } from '../data.js';
import { useActiveSection } from '../hooks.js';
import { Menu } from './Icons.jsx';

const LINKS = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
];
const IDS = LINKS.map((l) => l.id);

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(IDS);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav fade" aria-label="Main">
        <a href="#top" className="brand" onClick={close}>
          <span className="logo">MP</span>
          <span className="brand-name">{profile.name}</span>
        </a>
        <button
          className="menu-btn"
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen((o) => !o)}
        >
          <Menu open={open} />
        </button>
        <div id="nav-links" className={`nav-links ${open ? 'open' : ''}`}>
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`nav-link ${active === l.id ? 'active' : ''}`}
              aria-current={active === l.id ? 'true' : undefined}
              onClick={close}
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-solid btn-sm" onClick={close}>
            Let's talk
          </a>
        </div>
      </nav>
    </header>
  );
}
