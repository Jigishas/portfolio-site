/**
 * Single source of truth for site-wide content (profile, navigation,
 * engineering focus, process, experience and technologies).
 * All facts mirror the existing portfolio — nothing invented here.
 */

export const profile = {
  name: 'Joseph Gachuru',
  role: 'Software Engineer',
  focus: 'Backend · Product Manager',
  tagline: 'I build software systems that solve real operational and business problems.',
  supporting:
    'From backend architecture and APIs to data infrastructure and production products — I take systems from problem to production.',
  location: 'Kenya',
  email: 'josephgachuru336@gmail.com',
  phone: '+254 743 121 169',
  phoneLink: 'tel:+254743121169',
  resume: '/resume.pdf',
};

export const links = {
  github: 'https://github.com/Jigishas',
  linkedin: 'https://www.linkedin.com/in/joseph-gachuru/',
  x: 'https://x.com/JigishaF5831',
  credly: 'https://www.credly.com/users/joseph-gachuru',
  portfolio: 'https://portfolio-site-phi-self.vercel.app/',
  whatsapp: '+254743121169',
};

export const navLinks = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#engineering', label: 'Engineering' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export const socials = [
  { label: 'GitHub', short: 'GitHub', href: links.github },
  { label: 'LinkedIn', short: 'LinkedIn', href: links.linkedin },
  { label: 'X', short: 'X', href: links.x },
  { label: 'Credly', short: 'Credly', href: links.credly },
];

/* ---------------------------------------------------------------- */
/* What I build — four engineering domains                           */
/* ---------------------------------------------------------------- */
export const focusAreas = [
  {
    number: '01',
    title: 'Backend Engineering',
    description:
      'APIs, backend architecture, authentication, business logic, databases, queues and services that stay reliable under real traffic.',
    stack: ['Laravel', 'Node.js', 'Python', 'REST APIs', 'Redis'],
  },
  {
    number: '02',
    title: 'Product Management',
    description:
      'Turning business requirements into complete software products — workflows, interfaces and the decisions that connect them.',
    stack: ['React', 'TypeScript', 'Workflow design', 'Product thinking'],
  },
  {
    number: '03',
    title: 'Data & Distributed Systems',
    description:
      'Data pipelines, event-driven workflows and scalable ETL — modelling, transforming and moving data dependably.',
    stack: ['Apache Airflow', 'ETL pipelines', 'SQL', 'Data modelling'],
  },
  {
    number: '04',
    title: 'Production Engineering',
    description:
      'Linux, Docker, Nginx, deployment, caching, performance tuning and the operational tooling that keeps systems running.',
    stack: ['Linux', 'Docker', 'Nginx', 'CI/CD', 'Deployment'],
  },
];

/* ---------------------------------------------------------------- */
/* How I build — from idea to production                             */
/* ---------------------------------------------------------------- */
export const processSteps = [
  { number: '01', title: 'Understand', description: 'Business problem, users and requirements.' },
  { number: '02', title: 'Design', description: 'Architecture, data model and system boundaries.' },
  { number: '03', title: 'Build', description: 'APIs, services and interfaces.' },
  { number: '04', title: 'Integrate', description: 'Payments, third-party services and infrastructure.' },
  { number: '05', title: 'Deploy', description: 'Production environments and operational tooling.' },
  { number: '06', title: 'Improve', description: 'Performance, monitoring and iteration.' },
];

export const engineeringPrinciples = [
  {
    title: 'Measure before optimising',
    description: 'Caching, indexing and lean requests come after I can show where the time actually goes.',
  },
  {
    title: 'APIs as the contract',
    description: 'Reusable backend services that support web, mobile and integrations behind one consistent API.',
  },
  {
    title: 'Security by default',
    description: 'Authentication, authorization, validation and least-privilege access designed in from the start.',
  },
  {
    title: 'Observable in production',
    description: 'Structured logs, error handling and monitoring so incidents are diagnosed, not guessed at.',
  },
  {
    title: 'Product thinking',
    description: 'The business problem behind the ticket matters more than the framework used to solve it.',
  },
];

/* ---------------------------------------------------------------- */
/* Experience — real roles and education                             */
/* ---------------------------------------------------------------- */
export const experience = [
  {
    period: '2026 — Present',
    organization: 'PLAT-DEL',
    role: 'Software Engineer · Product Manager',
    type: 'Production platform',
    location: 'Remote',
    summary:
      'Backend and product management on a production marketplace and delivery platform connecting customers, vendors, riders and administrators through automated order-to-delivery workflows.',
    contributions: [
      'Designed and implemented Laravel backend APIs for logistics workflows',
      'Built role-based access control across customer, vendor, rider and admin surfaces',
      'Optimised API and database performance with caching under heavy page-load traffic',
      'Operated Linux/Nginx production infrastructure with background processing',
      'Worked across product requirements and shipped features end-to-end',
    ],
    stack: ['Laravel', 'PHP', 'MySQL', 'Redis', 'React', 'TypeScript', 'Nginx', 'Git'],
  },
  {
    period: '2026',
    organization: 'Londiani Sub County Hospital',
    role: 'Software Engineering',
    type: 'Healthcare',
    location: 'Kenya',
    summary:
      'Software engineering contribution in a hospital environment — application work and internal systems supporting day-to-day operational and administrative workflows.',
    contributions: [],
    stack: [],
  },
  {
    period: '2024 — Present',
    organization: 'Independent Software Engineer',
    role: 'Product & Backend Engineering · Freelance',
    type: 'Freelance / Contract',
    location: 'Remote',
    summary:
      'Building software products for clients and for my own platforms — from business problem and workflow design to backend architecture, interfaces and production deployment.',
    contributions: [
      'Delivered complete products across commerce, legal-tech and agricultural domains',
      'Designed multi-user, role-based workflows for client platforms',
      'Owned deployment, caching and performance work on shipped systems',
    ],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Docker', 'Tailwind CSS'],
  },
];

export const education = [
  {
    period: '2023 — 2026',
    organization: 'Kirinyaga University',
    role: 'BSc Software Engineering',
    description: 'Software architecture, data structures, algorithms and full-stack development.',
  },
  {
    period: '2025',
    organization: 'Power Learn Project Africa',
    role: 'Software Engineering Program',
    description: 'Full-stack MERN development, SQL and database design, Python and product building.',
  },
];

/* ---------------------------------------------------------------- */
/* Technologies — only what is present in the portfolio              */
/* ---------------------------------------------------------------- */
export const technologies = [
  { category: 'Backend', items: ['Laravel', 'PHP', 'Node.js', 'Express', 'Python', 'REST APIs'] },
  { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'] },
  { category: 'Databases', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'SQL'] },
  { category: 'Data', items: ['Apache Airflow', 'ETL Pipelines', 'Data Modelling', 'Workflow Orchestration'] },
  { category: 'Infrastructure', items: ['Docker', 'Linux', 'Nginx', 'CI/CD', 'GitHub Actions'] },
];

