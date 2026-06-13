// Tableau embed URLs: open a dashboard on Tableau Public → Share → Copy embed code → use the URL inside.

export const siteConfig = {
  name: 'Nathaniel Nelson',
  domain: 'https://nathanielnelsond.com',
  title: 'Senior Operations and Program Leader',
  heroBadge: 'Supply Chain Executive',
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
    'Beyond my professional responsibilities, I spend a significant amount of time studying emerging technologies and how they are reshaping business. I am particularly interested in artificial intelligence, large language models, automation, and advanced analytics, and regularly build projects to better understand their practical applications. I enjoy connecting ideas across disciplines, challenging conventional thinking, and exploring new ways organizations can improve decision making, customer experiences, and operational performance. The most rewarding part of my career has always been learning, adapting, and helping organizations navigate what\'s next.',
}

export const experience = [
  {
    role: 'Senior Program Manager, Vendor Compliance',
    company: 'Chewy',
    period: 'Aug 2024 — Jun 2026',
    highlights: [
      'Lead Chewy\'s enterprise Vendor Compliance organization, managing a team of 6 across Program Management, Business Engineering, and Analytics while defining strategy, governance, and multi-year transformation initiatives supporting a multi-billion-dollar supply chain network.',
      'Transformed vendor compliance into a strategic business function, delivering $20M in annual value, improving labor efficiency by 15%, and reducing vendor defects by 30%+ through data-driven process redesign and performance management.',
      'Built and launched a net-new enterprise chargeback platform spanning 10 defect categories, generating $12M in annual revenue while modernizing legacy processes through scalable SPARK-based automation.',
      'Influenced executive investment decisions through 100+ supplier and leadership reviews, driving $30M+ in automation, quality, and operational infrastructure investments that improved service reliability, supplier performance, and customer experience.',
    ],
  },
  {
    role: 'Senior Program Manager, CPFR & Supply Planning',
    company: 'Chewy',
    period: 'Mar 2022 — Aug 2024',
    highlights: [
      'Designed and scaled Chewy\'s enterprise CPFR operating model, establishing strategic planning governance across 2,000+ supplier relationships and aligning demand, supply, merchandising, and operations teams around a unified planning process.',
      'Led cross-functional S&OP and supply-demand reconciliation initiatives, delivering 5%+ reduction in out-of-stock rates, 4% improvement in location-level availability, and $10M+ in inventory and operational savings.',
      'Partnered with executive leadership and strategic suppliers to improve forecast accuracy, inventory positioning, and production planning, driving a 1.5% improvement in WAPE and reducing excess inventory by $3M+.',
      'Built scalable data and decision-support capabilities including automated reporting, API-driven supplier integrations, and executive dashboards that increased planning productivity by 40%+ and enabled data-driven decisions across the enterprise.',
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

// Replace with your real case studies.
export const caseStudies = [
  {
    id: 'vendor-compliance',
    title: 'Vendor Compliance Transformation',
    company: 'Chewy',
    description:
      'Transformed vendor compliance into a strategic business function supporting a multi-billion-dollar supply chain network.',
    challenge:
      'Legacy compliance processes lacked scalability, data visibility, and executive alignment across a growing supplier base.',
    approach:
      'Built a cross-functional team spanning program management, business engineering, and analytics; redesigned governance, chargeback logic, and supplier performance reporting.',
    results: [
      '$20M in annual value through improved compliance and labor efficiency',
      '$12M in annual revenue from a new enterprise chargeback platform',
      '30%+ reduction in vendor defect rates',
      '$30M+ in executive-approved automation and quality investments',
    ],
    tags: ['Supply Chain', 'Vendor Management', 'Automation'],
  },
  {
    id: 'cpfr-planning',
    title: 'Enterprise CPFR & Supply Planning',
    company: 'Chewy',
    description:
      'Designed and scaled Chewy\'s CPFR operating model across 2,000+ supplier relationships.',
    challenge:
      'Planning teams needed a unified process to align demand, supply, merchandising, and operations at enterprise scale.',
    approach:
      'Launched CPFR governance, S&OP reconciliation workflows, supplier integrations, and executive decision-support dashboards.',
    results: [
      '5%+ reduction in out-of-stock rates',
      '4% improvement in location-level availability',
      '$10M+ in inventory and operational savings',
      '40%+ increase in planning productivity',
    ],
    tags: ['S&OP', 'CPFR', 'Forecasting'],
  },
  {
    id: 'apple-portfolio',
    title: 'Apple Portfolio & NPI Launch',
    company: 'T-Mobile',
    description:
      'Led the $1.5B Apple US retail portfolio across 7,000+ stores and 1,000+ SKUs.',
    challenge:
      'Manage complex NPI launches, merger integration, and inventory performance across a national retail network.',
    approach:
      'Aligned planning systems, stakeholder processes, and launch execution across retail, procurement, and IT teams.',
    results: [
      'Year-end retail stock-out of 2% vs. 3% target, saving $80M in inventory',
      'Launched $1B+ Apple NPI program across three major product releases',
      'Led Sprint merger store transitions across 3,000+ locations',
    ],
    tags: ['Retail', 'NPI', 'Inventory'],
  },
]

// Tableau embed URL: Tableau Public → Share → Copy embed code → use the url value.
export const tableauProjects = [
  {
    id: 'first-project',
    title: 'First Project',
    description:
      'Revenue and inventory analysis by product category with KPIs for revenue, units sold, average price, and stock levels.',
    url: 'https://public.tableau.com/views/FirstProject_17808428028600/Dashboard1',
    tags: ['Revenue', 'Inventory', 'Tableau'],
  },
  {
    id: 'supply-chain-executive-dashboard',
    title: 'Supply Chain Executive Dashboard',
    description:
      'Executive supply chain performance view with KPIs, demand vs forecast trends, and category-level insights for operational decision-making.',
    url: 'https://public.tableau.com/views/SupplyChainExecutiveDashboard_17813684481110/Dashboard1',
    tags: ['Supply Chain', 'Forecasting', 'Tableau'],
  },
]
