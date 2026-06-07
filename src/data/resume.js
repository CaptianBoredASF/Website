// Edit this file with your real information.
// Tableau embed URLs: open a dashboard on Tableau Public → Share → Copy embed code → use the URL inside.

export const siteConfig = {
  name: 'Nathaniel Nelson',
  domain: 'https://nathanielnelsond.com',
  title: 'Data Analyst & Visualization Specialist',
  tagline: 'Turning complex data into clear, actionable stories.',
  email: 'nathaniel@nathanielnelsond.com',
  phone: '(555) 123-4567',
  location: 'City, State',
  linkedin: 'https://linkedin.com/in/yourprofile',
  github: 'https://github.com/yourusername',
  resumePdf: '/resume.pdf', // optional: drop your PDF in the public/ folder
}

export const about = {
  summary: `I'm a data professional passionate about building dashboards and analyses
    that help teams make better decisions. My work spans SQL, Python, and Tableau —
    with a focus on clean design and business impact.`,
}

export const experience = [
  {
    role: 'Data Analyst',
    company: 'Company Name',
    period: '2022 — Present',
    highlights: [
      'Built executive dashboards tracking KPIs across sales and operations.',
      'Automated reporting pipelines, reducing manual work by 15 hours/week.',
      'Partnered with stakeholders to define metrics and data requirements.',
    ],
  },
  {
    role: 'Junior Analyst',
    company: 'Previous Company',
    period: '2020 — 2022',
    highlights: [
      'Created Tableau workbooks for marketing and finance teams.',
      'Maintained data quality checks and documentation.',
    ],
  },
]

export const education = [
  {
    degree: 'B.S. in Data Science / Business Analytics',
    school: 'University Name',
    year: '2020',
  },
]

export const skills = [
  'Tableau',
  'SQL',
  'Python',
  'Excel',
  'Power BI',
  'Data Storytelling',
  'ETL / Data Modeling',
  'Statistics',
]

// Add your Tableau Public dashboards here.
// url: the embed URL from Tableau Public (ends with ?:display_count=y etc. is fine)
export const tableauProjects = [
  {
    id: 'sales-dashboard',
    title: 'Sales Performance Dashboard',
    description:
      'Interactive view of regional sales trends, YoY growth, and product mix.',
    url: 'https://public.tableau.com/views/SampleSuperstore/SuperstoreDashboard?:language=en-US&:display_count=n&:origin=viz_share_link',
    tags: ['Sales', 'KPIs', 'Tableau'],
  },
  {
    id: 'customer-analytics',
    title: 'Customer Analytics',
    description:
      'Segmentation and retention analysis with drill-down filters.',
    url: 'https://public.tableau.com/views/SampleSuperstore/CustomerAnalysis?:language=en-US&:display_count=n&:origin=viz_share_link',
    tags: ['Customer', 'Segmentation'],
  },
]
