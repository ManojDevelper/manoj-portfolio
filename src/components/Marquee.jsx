import { stack } from '../data.js';
import { Spark } from './Icons.jsx';

export default function Marquee() {
  const loop = [...stack, ...stack];
  return (
    <section className="marquee" aria-label="Tech stack">
      <p className="sr-only" style={{ position: 'absolute', left: -9999 }}>{stack.join(', ')}</p>
      <div className="marquee-track" aria-hidden="true">
        {loop.map((s, i) => (
          <span key={i} className="marquee-item">
            {s}
            <Spark />
          </span>
        ))}
      </div>
    </section>
  );
}
