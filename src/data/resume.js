// Tableau embed URLs: open a dashboard on Tableau Public → Share → Copy embed code → use the URL inside.

export const siteConfig = {
  name: 'Nathaniel Nelson',
  domain: 'https://nathanielnelsond.com',
  title: 'Senior Operations and Program Leader',
  tagline:
    'Supply Chain Executive with 13+ years of experience leading billion-dollar businesses through transformative planning, inventory, and operational strategies. Proven track record delivering $100M+ in value by optimizing supply chains, scaling S&OP capabilities, improving customer experience, and building high-performing teams across retail, eCommerce, and consumer products.',
  email: 'Nathan.Nelson.D@gmail.com',
  phone: '(314) 566-4757',
  location: 'Fort Lauderdale, FL',
  linkedin: 'https://linkedin.com/in/NathanNel',
  resumePdf: '/resume.pdf',
}

export const about = {
  summary:
    'Program and Operations Leader with 10+ years of experience driving strategic, cross-functional supply chain and operations initiatives within fast-paced fulfillment environments. Deep expertise in end-to-end process ownership, inventory flow optimization, and capacity-constrained operations. Proven ability to lead diverse teams across multiple concurrent projects, leverage AI-driven tools and data analytics to build and scale solutions, and influence senior leadership to deliver sustainable improvements in speed, quality, and operational efficiency.',
}

export const experience = [
  {
    role: 'Senior Program Manager, Vendor Compliance',
    company: 'Chewy',
    period: 'Aug 2024 — Present',
    highlights: [
      'Lead Chewy\'s enterprise Vendor Compliance organization, managing a team of 6 across Program Management, Business Engineering, and Analytics while defining strategy, governance, and multi-year transformation initiatives supporting a multi-billion-dollar supply chain network.',
      'Transformed vendor compliance into a strategic business function, delivering $20M in annual value, improving labor efficiency by 15%, and reducing vendor defects by 30%+ through data-driven process redesign and performance management.',
      'Built and launched a net-new enterprise chargeback platform spanning 10 defect categories, generating $12M in annual revenue while modernizing legacy processes through scalable SPARK-based automation.',
      'Influenced executive investment decisions through 100+ supplier and leadership reviews, driving $30M+ in automation, quality, and operational infrastructure investments that improved service reliability, supplier performance, and customer experience.',
    ],
  },
  {
    role: 'Senior Program Manager',
    company: 'Chewy',
    location: 'Seattle, WA',
    period: 'Mar 2022 — Aug 2024',
    highlights: [
      'Scoped and launched Chewy’s CPFR program as a net-new enterprise operating model across 2,000+ vendors.',
      'Delivered 5%+ OOS reduction, 4% location-level OOS reduction, and $10M+ in optimized savings.',
      'Built and deployed 10+ Tableau dashboards with SOPs and operating playbooks adopted across planning teams.',
      'Built API-driven data sharing and automated reporting pipelines (8+ reports), driving 40%+ efficiency gains.',
    ],
  },
  {
    role: 'Supply Chain Manager',
    company: 'T-Mobile',
    location: 'Seattle, WA',
    period: 'Aug 2019 — Mar 2022',
    highlights: [
      'Owned the $1.5B Apple US portfolio across 7k+ retail stores and 1k+ SKUs.',
      'Exceeded KPI goals with year-end RSO of 2% vs. 3% target, saving $80M in inventory.',
      'Launched the largest Apple NPI in T-Mobile/Sprint history — $1B+ in phones/watches across three iconic launches.',
      'Key stakeholder in Sprint merger store transitions from JDA into SAP/ECC across 3k+ locations.',
    ],
  },
  {
    role: 'Senior Operations Analyst',
    company: 'PepsiCo',
    location: 'Dallas, TX',
    period: 'Mar 2018 — Aug 2019',
    highlights: [
      'Reduced annual expenses by 10% ($1.2M) through cost reduction and productivity initiatives.',
      'Leveraged Tableau dashboards for senior leadership on P/L, productivity, and delivery KPIs.',
      'Led Torrance, CA GEO system conversion — first successful Go-Live in the California region.',
    ],
  },
  {
    role: 'Senior Supply Chain Associate',
    company: 'PepsiCo',
    location: 'Denver, CO',
    period: 'Aug 2015 — Mar 2018',
    highlights: [
      'Top market performance in the Mountain region, exceeding KPI metrics by 9% and saving $300k YoY.',
      'Created weekly report dashboards communicating financials and root-cause analysis to the region.',
      'Developed risk matrix for FSV standards adopted company-wide as BAU.',
    ],
  },
  {
    role: 'Field/Warehouse Inventory Analyst',
    company: 'Kasco',
    location: 'St. Louis, MO',
    period: '2014 — 2015',
    highlights: [],
  },
  {
    role: 'Transportation and Logistics Analyst',
    company: 'Anheuser-Busch',
    location: 'St. Louis, MO',
    period: '2013 — 2014',
    highlights: [],
  },
]

export const education = [
  {
    degree: 'B.S. in Business Administration and Economics',
    school: 'Southern Illinois University Edwardsville',
    year: '2013',
  },
]

export const skillGroups = [
  {
    label: 'Professional',
    skills: [
      'Strategic Planning',
      'Contract Strategy',
      'Vendor Negotiations',
      'Strategic Vendor Engagement',
      'Data Analytics',
      'Dashboards & KPIs',
      'Executive Reporting',
    ],
  },
  {
    label: 'Technical',
    skills: [
      'SQL',
      'Tableau',
      'Python',
      'Snowflake',
      'KNIME',
      'SAP',
      'Vertica',
      'Jira',
      'Confluence',
      'ETL Pipelines',
      'Data Warehousing',
      'Forecasting & Predictive Analytics',
      'AI Tools (Cursor / Claude)',
    ],
  },
]

// Replace sample URLs with your Tableau Public dashboard embed links.
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
