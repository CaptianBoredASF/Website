import { definePortfolio } from './schema.js'

export default definePortfolio({
  slug: 'sarah',
  profile: {
    name: 'Sarah Mitchell',
    title: 'Registered Nurse · Patient Care Specialist',
    heroBadge: 'Nursing · Clinical Excellence',
    tagline:
      'Compassionate registered nurse with 8+ years of experience in medical-surgical and critical care settings. Skilled in patient assessment, care coordination, evidence-based practice, and interdisciplinary collaboration. Committed to delivering safe, person-centered care while supporting families through complex treatment journeys.',
    email: 'sarah.mitchell@example.com',
    phone: '(555) 234-7890',
    location: 'Chicago, IL',
    linkedin: 'https://linkedin.com/in/sarah-mitchell-rn',
    showToolbox: false,
  },
  assets: {},
  branding: {
    logoInitial: 'S',
  },
  about: {
    paragraphs: [
      'I became a nurse because I believe every patient deserves a calm, capable advocate at the bedside. Throughout my career I have focused on building trust with patients and families while maintaining the clinical precision required in fast-paced hospital environments.',
      'I am especially interested in quality improvement, patient education, and mentoring new graduate nurses. I enjoy translating complex medical information into clear guidance that helps patients participate in their own recovery.',
    ],
  },
  highlights: [
    { id: 'experience', value: '8+', label: 'Years Experience', icon: 'shield' },
    { id: 'patients', value: '2,500+', label: 'Patients Cared For', icon: 'people' },
    { id: 'quality', value: '98%', label: 'Satisfaction Score', icon: 'target' },
    { id: 'cert', value: 'BSN', label: 'Board Certified', icon: 'chart' },
  ],
  experience: [
    {
      role: 'Registered Nurse, Medical-Surgical Unit',
      company: 'Northwestern Memorial Hospital',
      location: 'Chicago, IL',
      period: '2020 — Present',
      highlights: [
        'Provide direct patient care for a 6-bed assignment on a 32-bed medical-surgical unit, managing post-operative recovery, chronic disease exacerbations, and complex medication regimens.',
        'Serve as charge nurse twice monthly, coordinating admissions, staffing coverage, and escalation support during high-acuity shifts.',
        'Led a unit initiative that reduced patient fall events by 18% through hourly rounding audits and updated bedside safety checklists.',
      ],
    },
    {
      role: 'Registered Nurse, Step-Down Unit',
      company: 'Rush University Medical Center',
      location: 'Chicago, IL',
      period: '2017 — 2020',
      highlights: [
        'Monitored hemodynamically unstable patients transitioning from intensive care, including cardiac, respiratory, and sepsis recovery populations.',
        'Partnered with respiratory therapy and pharmacy teams to optimize oxygen therapy plans and reduce unnecessary treatment delays.',
        'Precepted 12 new graduate nurses, supporting competency validation and confidence during their first year of practice.',
      ],
    },
    {
      role: 'Licensed Practical Nurse',
      company: 'Advocate Illinois Masonic Medical Center',
      location: 'Chicago, IL',
      period: '2015 — 2017',
      highlights: [
        'Supported RN teams with wound care, medication administration, and patient mobility programs on a busy surgical floor.',
        'Recognized for consistent documentation accuracy and proactive communication with physicians during evening shifts.',
      ],
    },
  ],
  education: [
    {
      degree: 'Bachelor of Science in Nursing (BSN)',
      school: 'University of Illinois Chicago',
      year: '2017',
    },
    {
      degree: 'Licensed Practical Nursing Certificate',
      school: 'Malcolm X College',
      year: '2015',
    },
  ],
  skillGroups: [
    {
      skills: [
        'Patient Assessment',
        'Care Planning',
        'IV Therapy',
        'Medication Administration',
        'Wound Care',
        'Electronic Health Records (Epic)',
        'Patient Education',
        'Clinical Documentation',
        'Fall Prevention',
        'Infection Control',
        'Rapid Response Support',
        'Interdisciplinary Collaboration',
      ],
    },
  ],
  companies: {
    'Northwestern Memorial Hospital': {
      bg: '#4f46e5',
      label: 'NMH',
      text: '#ffffff',
      fontSize: '0.7rem',
    },
    'Rush University Medical Center': {
      bg: '#0f766e',
      label: 'R',
      text: '#ffffff',
      fontSize: '1.1rem',
    },
    'Advocate Illinois Masonic Medical Center': {
      bg: '#b45309',
      label: 'AIM',
      text: '#ffffff',
      fontSize: '0.65rem',
    },
  },
})
