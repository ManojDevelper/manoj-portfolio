import { useEffect, useState } from 'react';
import { useInView } from '../hooks.js';

/** Fades + slides its children up the first time they scroll into view. */
export default function Reveal({ as: Tag = 'div', className = '', delay = 0, style, children, ...rest }) {
  const [ref, inView] = useInView();
  // Drop the stagger delay once revealed so hover transitions stay snappy.
  const [settled, setSettled] = useState(false);
  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(() => setSettled(true), delay + 950);
    return () => clearTimeout(t);
  }, [inView, delay]);
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'in' : ''} ${className}`.trim()}
      style={{ transitionDelay: settled ? '0ms' : `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
