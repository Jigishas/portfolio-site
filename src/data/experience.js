/**
 * Experience — real roles, contributions and systems.
 *
 * Every field below mirrors information already published in this
 * portfolio (project case studies, architecture notes, technology data).
 * No employers, dates, responsibilities or systems are invented here.
 */

export const experienceIntro = {
  eyebrow: 'Work experience',
  title: 'Building software across backend engineering, product development and infrastructure.',
  lead: 'Production platforms, client products and engineering work across logistics, healthcare and independent practice.',
};

/* Shortened for the collapsed card; `about` carries the full description. */
export const experience = [
  {
    id: 'plat-del',
    number: '01',
    period: '2026 — Present',
    organization: 'PLAT-DEL',
    role: 'Software Engineer · Product Manager',
    type: 'Production platform',
    location: 'Remote',
    icon: 'truck',
    logo: '/projects/plat-del-icon-512.png',
    summary:
      'Production marketplace and delivery platform — automated order-to-delivery workflows across customers, vendors, riders and administrators.',
    about:
      'Backend engineering and product management on a production marketplace connecting customers, vendors, riders and administrators through automated order-to-delivery workflows. The role covers service design, role-based access control, relational data modelling, performance work and running the platform in production.',
    contributions: [
      'Designed and implemented Laravel backend APIs for logistics workflows',
      'Built role-based access control across customer, vendor, rider and admin surfaces',
      'Optimised API and database performance with caching under heavy page-load traffic',
      'Operated Linux/Nginx production infrastructure with background processing',
      'Worked across product requirements and shipped features end-to-end',
    ],
    technology: ['Laravel', 'PHP', 'MySQL', 'Redis', 'React', 'TypeScript', 'Nginx', 'Git'],
    systems: [
      { name: 'Delivery platform', detail: 'Order processing and delivery operations' },
      { name: 'Vendor management', detail: 'Role-based vendor workflows inside the marketplace' },
      { name: 'Access control', detail: 'Customer, vendor, rider and admin permissions' },
    ],
  },
  {
    id: 'londiani-hospital',
    number: '02',
    period: '2026',
    organization: 'Londiani Sub County Hospital',
    role: 'Software Engineering',
    type: 'Healthcare',
    location: 'Kenya',
    icon: 'hospital',
    logo: null,
    summary:
      'Application and internal systems supporting day-to-day hospital operations and administration.',
    about:
      'Software engineering contribution in a hospital environment — application work and internal systems supporting day-to-day operational and administrative workflows.',
    contributions: [],
    technology: [],
    systems: [],
  },
  {
    id: 'independent',
    number: '03',
    period: '2024 — Present',
    organization: 'Independent Software Engineer',
    role: 'Product & Backend Engineering · Freelance',
    type: 'Freelance / Contract',
    location: 'Remote',
    icon: 'briefcase',
    logo: null,
    summary:
      'Software products for clients and personal platforms — from workflow design to backend architecture and production deployment.',
    about:
      'Building software products for clients and for my own platforms — from business problem and workflow design through backend architecture, interfaces and production deployment.',
    contributions: [
      'Delivered complete products across commerce, legal-tech and agricultural domains',
      'Designed multi-user, role-based workflows for client platforms',
      'Owned deployment, caching and performance work on shipped systems',
    ],
    technology: ['React', 'Node.js', 'Express', 'MongoDB', 'Docker', 'Tailwind CSS'],
    systems: [
      { name: 'Property management', detail: 'Multi-role owner, caretaker and tenant workflows' },
      { name: 'Information systems', detail: 'Content management, search and containerised deployment' },
      { name: 'Applied AI product', detail: 'Computer-vision leaf diagnosis with an offline-first PWA' },
      { name: 'Data pipelines', detail: 'ETL and workflow orchestration' },
    ],
  },
];

export const education = [
  {
    period: '2023 — 2026',
    organization: 'Kirinyaga University',
    role: 'BSc Software Engineering',
    icon: 'graduation',
    description: 'Software architecture, data structures, algorithms and full-stack development.',
  },
  {
    period: '2025',
    organization: 'Power Learn Project Africa',
    role: 'Software Engineering Program',
    icon: 'book',
    description: 'Full-stack MERN development, SQL and database design, Python and product building.',
  },
];