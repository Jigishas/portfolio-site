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
    period: 'June 2025 — August 2025',
    organization: 'Londiani Sub-County Hospital',
    role: 'ICT Officer — Attachment',
    type: 'Healthcare',
    location: 'Londiani, Kenya',
    icon: 'hospital',
    logo: null,
    summary:
      "Supported the hospital's ICT operations across infrastructure, user support, networking, systems administration, information security, data reporting and digital services.",
    about:
      'ICT Officer on attachment in a busy sub-county hospital, supporting day-to-day technology operations across clinical and administrative departments. The role covered IT infrastructure, user and account administration, networking, information security, data reporting and digital services — practical systems and operations experience that underpins reliable service delivery.',
    contributions: [
      'Maintained and troubleshot computers, peripherals, software and ICT equipment supporting daily hospital operations',
      'Configured LAN infrastructure and resolved network and connectivity issues across departments',
      'Set up and administered user accounts, Outlook mail, institutional domain emails and website services',
      'Installed, configured and maintained hardware and software in line with ICT policy',
      'Strengthened information security through antivirus deployment, updates, regular checks and protection of electronic records',
      'Trained staff, resolved user technical problems and advised end users on ICT upgrades and system use',
      'Supported periodic data entry and analysis for institutional reporting, maintained ICT asset inventories, and coordinated escalated help-desk issues with external support providers',
    ],
    technology: [
      'IT Infrastructure',
      'Hardware & Software Support',
      'LAN / Networking',
      'User & Account Administration',
      'Email Administration',
      'Information Security',
      'ICT Asset Management',
      'Data Entry & Reporting',
      'Website Administration',
      'Technical Support',
    ],
    technologyLabel: 'Technical areas',
    impact:
      'Helped maintain reliable ICT operations by supporting users, infrastructure, digital communication services, information security and technology-related administrative processes.',
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