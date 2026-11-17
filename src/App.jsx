import { useEffect, useRef } from 'react';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Marquee from './components/Marquee.jsx';
import Projects from './components/Projects.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Contact from './components/Contact.jsx';
import { useScrollProgress } from './hooks.js';

function CursorGlow() {
  const ref = useRef(null);
  useEffect(() => {
    let raf = 0;
    const on = (e) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (ref.current) ref.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      });
    };
    window.addEventListener('pointermove', on, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', on);
    };
  }, []);
  return <div ref={ref} className="cursor-glow" aria-hidden="true" />;
}

export default function App() {
  const progress = useScrollProgress();
  return (
    <>
      <div className="progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      <CursorGlow />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Projects />
        <About />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
