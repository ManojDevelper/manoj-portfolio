import { useEffect, useRef, useState } from 'react';
import { jobs } from '../data.js';
import { useInView } from '../hooks.js';
import Reveal from './Reveal.jsx';

function Job({ j }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={`job reveal ${inView ? 'in' : ''}`}>
      <span className="job-dot" aria-hidden="true" />
      <div className="job-head">
        <h3>{j.role}</h3>
        <span className="job-when">{j.when}</span>
      </div>
      <div className="job-org">{j.org}</div>
      <p>{j.desc}</p>
    </div>
  );
}

export default function Experience() {
  const lineRef = useRef(null);
  const [fill, setFill] = useState(0);

  // The glowing line fills as you scroll through the timeline.
  useEffect(() => {
    let raf = 0;
    const on = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = lineRef.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const start = window.innerHeight * 0.7;
        const p = (start - r.top) / r.height;
        setFill(Math.max(0, Math.min(1, p)));
      });
    };
    on();
    window.addEventListener('scroll', on, { passive: true });
    window.addEventListener('resize', on);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', on);
      window.removeEventListener('resize', on);
    };
  }, []);

  return (
    <section id="experience" className="section">
      <div className="container" style={{ maxWidth: 1040 }}>
        <Reveal style={{ marginBottom: 64 }}>
          <div className="eyebrow">03 — Experience</div>
          <h2 className="h2">Where I've worked</h2>
        </Reveal>
        <div className="timeline" ref={lineRef}>
          <div className="timeline-line" aria-hidden="true" />
          <div
            className="timeline-fill"
            aria-hidden="true"
            style={{ height: `calc((100% - 16px) * ${fill})` }}
          />
          <div className="jobs">
            {jobs.map((j) => (
              <Job key={j.role + j.when} j={j} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
