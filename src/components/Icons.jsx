const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

export const ArrowDown = (p) => (
  <svg width="18" height="18" viewBox="0 0 24 24" strokeWidth="2" {...base} {...p}>
    <path d="M12 5v14M5 12l7 7 7-7" />
  </svg>
);

export const ArrowRight = (p) => (
  <svg width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const Spark = (p) => (
  <svg width="22" height="22" viewBox="0 0 24 24" strokeWidth="2" {...base} stroke="#C6F432" {...p}>
    <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" />
  </svg>
);

export const GitHub = (p) => (
  <svg width="22" height="22" viewBox="0 0 24 24" strokeWidth="1.8" {...base} {...p}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3.1-.3 6.4-1.5 6.4-7A5.4 5.4 0 0 0 20 4.8 5 5 0 0 0 19.9 1S18.7.7 16 2.5a13.4 13.4 0 0 0-7 0C6.3.7 5.1 1 5.1 1A5 5 0 0 0 5 4.8a5.4 5.4 0 0 0-1.5 3.7c0 5.4 3.3 6.6 6.4 7a3.4 3.4 0 0 0-.9 2.6V22" />
  </svg>
);

export const LinkedIn = (p) => (
  <svg width="22" height="22" viewBox="0 0 24 24" strokeWidth="1.8" {...base} {...p}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const Mail = (p) => (
  <svg width="22" height="22" viewBox="0 0 24 24" strokeWidth="1.8" {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const Menu = ({ open, ...p }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" strokeWidth="2" {...base} {...p}>
    {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
  </svg>
);
