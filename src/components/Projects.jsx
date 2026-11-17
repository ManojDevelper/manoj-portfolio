import { useState } from 'react';
import { projects } from '../data.js';
import Reveal from './Reveal.jsx';
import { ArrowRight } from './Icons.jsx';

const FILTERS = ['All', 'Platform', 'Product', 'Website'];

function ProjectCard({ p, delay }) {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
  };
  const linkProps = p.url
    ? { href: p.url, target: '_blank', rel: 'noopener noreferrer', 'aria-label': `${p.title} (opens live site)` }
    : { href: '#contact', 'aria-label': `${p.title} — ask me about it` };

  return (
    <Reveal as="a" className="card" delay={delay} onMouseMove={onMove} {...linkProps}>
      <div className="thumb" style={{ background: p.tint }}>
        <div className="thumb-inner thumb-grid grid-bg" />
        <div className="thumb-inner thumb-window">
          <i style={{ width: '40%' }} />
          <i style={{ width: '70%' }} />
          <i style={{ width: '55%' }} />
          <b style={{ background: p.tint }} />
        </div>
        <span className="thumb-cat">{p.cat}</span>
      </div>
      <div className="card-body">
        <div className="card-text">
          <span className="card-when">{p.when}</span>
          <h3>{p.title}</h3>
          <p>{p.desc}</p>
          <div className="tags">
            {p.tags.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>
        <span className="arrow" aria-hidden="true">
          <ArrowRight />
        </span>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const shown = filter === 'All' ? projects : projects.filter((p) => p.cat === filter);

  return (
    <section id="work" className="section">
      <div className="container">
        <Reveal className="work-head">
          <div>
            <div className="eyebrow">01 — Selected work</div>
            <h2 className="h2">Things I've built</h2>
          </div>
          <div className="filters" role="group" aria-label="Filter projects">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                className="chip"
                aria-pressed={filter === f}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>
        <div className="grid">
          {shown.map((p, i) => (
            <ProjectCard key={`${filter}-${p.title}`} p={p} delay={(i % 2) * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}
