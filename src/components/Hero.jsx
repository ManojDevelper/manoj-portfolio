import { useEffect, useRef, useState } from 'react';
import { profile, roles } from '../data.js';
import { usePrefersReducedMotion } from '../hooks.js';
import { ArrowDown } from './Icons.jsx';

function RoleRoller() {
  const [i, setI] = useState(0);
  const reduced = usePrefersReducedMotion();
  useEffect(() => {
    if (reduced) return;
    const t = setInterval(() => setI((n) => (n + 1) % roles.length), 2200);
    return () => clearInterval(t);
  }, [reduced]);
  return (
    <span className="roller" aria-live="polite">
      <span className="roller-track" style={{ transform: `translateY(${-1.3 * i}em)` }}>
        {roles.map((r, idx) => (
          <span key={r} aria-hidden={idx !== i}>
            {r}
          </span>
        ))}
      </span>
    </span>
  );
}

function CodeCard() {
  const ref = useRef(null);
  const reduced = usePrefersReducedMotion();

  const onMove = (e) => {
    if (reduced || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    ref.current.style.transform = `rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = '';
  };

  const lines = [
    <><span className="kw">const</span> manoj = {'{'}</>,
    <>  role: <span className="str">"Senior Frontend Dev"</span>,</>,
    <>  team: <span className="str">"Identity @ Ospyn"</span>,</>,
    <>  stack: [<span className="str">"React"</span>, <span className="str">"TypeScript"</span>],</>,
    <>  years: <span className="num">6</span>,</>,
    <>{'};'}</>,
    <><span className="fn">ship</span>(manoj);<span className="caret" aria-hidden="true" /></>,
  ];

  return (
    <div className="code-wrap rise d4" onMouseMove={onMove} onMouseLeave={onLeave}>
      <div className="code-float">
        <div className="code" ref={ref} role="img" aria-label="Code snippet describing Manoj: Senior Frontend Developer on the Identity team at Ospyn, React and TypeScript, 6 years">
          <div className="code-bar">
            <i /><i /><i />
            <span>manoj.ts</span>
          </div>
          <div className="code-body" aria-hidden="true">
            {lines.map((l, idx) => (
              <span key={idx} className="code-line" style={{ animationDelay: `${0.9 + idx * 0.6}s` }}>
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-bg grid-bg" aria-hidden="true" />
      <div className="ring ring-1 spin" aria-hidden="true" />
      <div className="ring ring-2 spin" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <div className="badge rise d1">
            <span className="dot" />
            {profile.title} · {profile.company}
          </div>
          <h1>
            <span className="mask"><span className="d2">Hi, I'm {profile.first}.</span></span>
            <span className="mask"><span className="d3">I build <span className="accent">interfaces</span></span></span>
            <span className="mask"><span className="d4">that ship.</span></span>
          </h1>
          <div className="roller-row rise d5">
            <span>&gt; frontend developer /</span>
            <RoleRoller />
            <span className="caret" aria-hidden="true" />
          </div>
          <p className="hero-intro rise d5">{profile.intro}</p>
          <div className="hero-ctas rise d6">
            <a href="#work" className="btn btn-solid">
              See my work <ArrowDown />
            </a>
            <a href="#contact" className="btn btn-ghost">Get in touch</a>
          </div>
        </div>
        <CodeCard />
      </div>
    </section>
  );
}
