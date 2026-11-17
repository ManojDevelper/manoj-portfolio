import { useState } from 'react';
import { profile } from '../data.js';
import Reveal from './Reveal.jsx';
import { GitHub, LinkedIn } from './Icons.jsx';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-bg grid-bg" aria-hidden="true" />
      <div className="container" style={{ position: 'relative' }}>
        <Reveal className="eyebrow">04 — Contact</Reveal>
        <Reveal as="h2" delay={80}>
          Let's build
          <br />
          something <span className="accent">great.</span>
        </Reveal>
        <Reveal className="contact-row" delay={160}>
          <a className="big-link" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <button type="button" className="copy-btn" onClick={copy} aria-live="polite">
            {copied ? 'Copied ✓' : 'Copy email'}
          </button>
          <div className="socials">
            <a className="icon-btn" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GitHub />
            </a>
            <a className="icon-btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedIn />
            </a>
          </div>
        </Reveal>
        <footer className="footer">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <a className="nav-link" href="#top">Back to top ↑</a>
        </footer>
      </div>
    </section>
  );
}
