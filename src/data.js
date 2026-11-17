export const profile = {
  name: 'Manoj Ponugoti',
  first: 'Manoj',
  title: 'Senior Frontend Developer',
  company: 'Ospyn Technologies',
  email: 'jameslucky917@gmail.com',
  github: 'https://github.com/sgost',
  linkedin: 'https://www.linkedin.com/in/manojdev1997/',
  intro:
    '6+ years building with React. Today I lead the frontend for the Identity Team at Ospyn, shipping a reusable, CDN-deployed SSO login widget that teams across the company plug straight in.',
  about:
    'I own features end to end: gathering requirements, estimating, coding, reviewing and deploying to production. I integrate complex REST APIs with Axios, write tested code with Jest and React Testing Library, and mentor junior developers in Agile teams. I also lean on AI tools like Cursor and GitHub Copilot to move faster, and ship with Netlify CI/CD.',
};

export const roles = ['React.js', 'identity & SSO', 'micro frontends', 'dashboards'];

export const stack = [
  'React.js', 'TypeScript', 'Redux Toolkit', 'React Query', 'Axios', 'Keycloak', 'Gatsby.js',
  'Material-UI', 'Ant Design', 'Styled Components', 'SASS', 'Jest', 'Netlify', 'Azure DevOps',
];

export const skillGroups = [
  { name: 'Build', items: 'React.js, TypeScript, Redux Toolkit, React Query, Material-UI, Ant Design, SASS' },
  { name: 'Test & ship', items: 'Jest, React Testing Library, Chrome DevTools, Postman, Netlify CI/CD, Git' },
  { name: 'Work', items: 'Agile/Scrum, Jira, Azure DevOps, GitHub Copilot, Cursor AI' },
];

export const projects = [
  {
    title: 'Identity Widget — SSO Login',
    cat: 'Platform',
    when: 'Ospyn · Nov 2025 — Now',
    desc: 'A reusable React SSO login widget, deployed via CDN so every team in the company gets one consistent sign-in without rebuilding it. Backed by Keycloak, with versioning and integration guides for adopters.',
    tags: ['React', 'TypeScript', 'Keycloak', 'CDN'],
    tint: '#C6F432',
  },
  {
    title: 'Atlas Global V1 → V2',
    cat: 'Product',
    when: 'Xilligence · Jan 2024 — Nov 2025',
    desc: 'A large-scale micro frontend app. I owned the Invoice Creation & Payment Management module, where users create, track, pay and manage invoices and pending dues.',
    tags: ['React', 'TypeScript', 'Redux Toolkit', 'Tailwind'],
    tint: '#7FB4FF',
  },
  {
    title: 'Fidisys Leave Tracker',
    cat: 'Product',
    when: 'Fidisys · Mar 2022 — Dec 2023',
    desc: 'A leave and timesheet management dashboard used company-wide. I led frontend in a 4-member team, from architecture and UI with design to demos and reviews.',
    tags: ['React', 'TypeScript', 'Ant Design', 'Netlify'],
    tint: '#C792EA',
  },
  {
    title: 'Content Concepts',
    cat: 'Website',
    when: 'Mar 2022 — Dec 2023',
    desc: 'A fast static site for an editing service: document uploads, service requests, confirmation emails and editor contact, with Netlify CMS so the client updates content themselves.',
    tags: ['Gatsby.js', 'Netlify CMS', 'Sheets API'],
    tint: '#FFB86B',
    url: 'https://contentconcepts.in',
  },
  {
    title: 'Archimedes Digital',
    cat: 'Website',
    when: 'May 2021 — Nov 2021',
    desc: 'The company website, built and maintained solo: design, development, client feedback and deployments, with a CMS for publishing pages and project updates.',
    tags: ['Gatsby.js', 'Styled Components', 'Netlify'],
    tint: '#6EE7C8',
    url: 'https://test-archi.netlify.app',
  },
];

export const jobs = [
  {
    role: 'Senior Frontend Developer',
    org: 'Ospyn Technologies',
    when: 'Nov 2025 — Present',
    desc: 'Leading the complete frontend for the Identity Team, building and managing the identity widgets used company-wide, in partnership with security and platform teams.',
  },
  {
    role: 'Senior Developer',
    org: 'Xilligence Technologies · Trivandrum',
    when: 'Jan 2024 — Nov 2025',
    desc: 'Led development efforts, designed and built scalable web applications, and mentored junior developers on best practices.',
  },
  {
    role: 'Frontend Developer',
    org: 'Fidisys Technologies · Chennai',
    when: 'Dec 2020 — Dec 2023',
    desc: 'Built internal products and client websites, from coding and debugging to shipping on Netlify, often as the sole frontend developer.',
  },
  {
    role: 'B.Tech, Mechanical Engineering',
    org: 'PBR VITS, Kavali — JNTU Anantapur',
    when: '2015 — 2019',
    desc: 'Where it started, before moving into frontend engineering.',
  },
];
