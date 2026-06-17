// Central content source. Add or edit projects, certifications, experience,
// achievements, gallery images, and blog posts here — the UI updates automatically.

export const profile = {
  name: 'Husnain Ghaffar',
  role: 'Electrical Engineer',
  headline: 'Electrical Engineer | Power Systems | Renewable Energy',
  subheading:
    'Specializd in Power System Studies, Distribution Network Planning, and Solar Integration.',
  location: 'Lahore, Pakistan',
  email: 'husnain.ghaffar@example.com',
  linkedin: 'https://www.linkedin.com/in/husnainghaffar',
  github: 'https://github.com/husnainghaffar',
  resumeUrl: '/resume.pdf',
  about: [
    'I am an Electrical Engineer driven by a deep passion for power systems, renewable energy integration, and the modernization of electrical grids. My work centers on translating complex network behavior into actionable engineering decisions — from load flow and short circuit studies to distribution network planning and protection coordination.',
    'I thrive at the intersection of utility-scale studies and system optimization, using industry tools such as ETAP, PSS/E, and Synergi Electric to model, simulate, and validate resilient power infrastructure. I am especially focused on enabling a cleaner energy future through solar integration and smarter, more reliable distribution networks.',
  ],
}

export const stats = [
  { label: 'Projects Completed', value: 12, suffix: '+' },
  { label: 'Studies & Simulations', value: 30, suffix: '+' },
  { label: 'Industry Tools Mastered', value: 7, suffix: '' },
  { label: 'Internships & Roles', value: 4, suffix: '' },
]

export type Experience = {
  role: string
  company: string
  period: string
  type: 'Full-time' | 'Internship'
  description: string
  highlights: string[]
}

export const experiences: Experience[] = [
  {
    role: 'Junior Electrical Engineer',
    company: 'TurkPak International Pvt. Ltd.',
    period: '2023 — Present',
    type: 'Full-time',
    description:
      'Supporting power system design, distribution studies, and project execution for industrial and utility clients.',
    highlights: [
      'Performed load flow and short circuit analysis using ETAP',
      'Contributed to distribution network planning and equipment sizing',
      'Coordinated protection settings and reviewed single-line diagrams',
    ],
  },
  {
    role: 'Electrical Engineering Intern',
    company: 'NESPAK (National Engineering Services Pakistan)',
    period: '2022',
    type: 'Internship',
    description:
      'Worked alongside senior engineers on power and infrastructure design projects.',
    highlights: [
      'Assisted in reviewing electrical design documentation',
      'Exposure to utility-scale study workflows and standards',
    ],
  },
  {
    role: 'Engineering Intern',
    company: 'Pak Elektron Limited (PEL)',
    period: '2021',
    type: 'Internship',
    description:
      'Hands-on experience with transformer and power equipment manufacturing and testing.',
    highlights: [
      'Observed transformer testing and quality assurance procedures',
      'Studied manufacturing of distribution & power transformers',
    ],
  },
  {
    role: 'Automation Intern',
    company: 'Karachi Automation',
    period: '2020',
    type: 'Internship',
    description:
      'Introduction to industrial automation, PLC programming, and control systems.',
    highlights: [
      'Learned PLC and SCADA fundamentals',
      'Assisted with control panel wiring and testing',
    ],
  },
]

export type Project = {
  slug: string
  title: string
  category: 'Power Systems' | 'Renewable Energy' | 'Control Systems' | 'IoT & Electronics'
  image: string
  description: string
  technologies: string[]
  results: string[]
  githubUrl?: string
  reportUrl?: string
}

export const projects: Project[] = [
  {
    slug: 'etap-distribution-optimization',
    title: 'Power Distribution & Transformer Optimization using ETAP',
    category: 'Power Systems',
    image: '/projects/etap-distribution.png',
    description:
      'Modeled a distribution network in ETAP to optimize transformer loading and minimize losses through load flow and voltage drop analysis.',
    technologies: ['ETAP', 'Load Flow', 'Transformer Sizing', 'Voltage Drop Analysis'],
    results: [
      'Reduced estimated network losses through optimized transformer tap settings',
      'Improved voltage profile across feeders within acceptable limits',
    ],
    githubUrl: '#',
    reportUrl: '#',
  },
  {
    slug: 'industrial-power-system-analysis',
    title: 'Industrial Power System Analysis',
    category: 'Power Systems',
    image: '/projects/industrial-power.png',
    description:
      'Comprehensive load flow, short circuit, and protection coordination study for an industrial facility.',
    technologies: ['ETAP', 'Short Circuit Analysis', 'Protection Coordination'],
    results: [
      'Validated equipment short-circuit ratings against fault levels',
      'Recommended relay coordination settings for selective tripping',
    ],
    githubUrl: '#',
    reportUrl: '#',
  },
  {
    slug: 'iot-cardiac-monitoring',
    title: 'IoT-Based Cardiac Health Monitoring System',
    category: 'IoT & Electronics',
    image: '/projects/iot-cardiac.png',
    description:
      'A wearable IoT system that monitors ECG and heart rate, streaming data to a cloud dashboard for remote analysis.',
    technologies: ['Arduino', 'ESP32', 'ECG Sensor', 'IoT Cloud'],
    results: [
      'Real-time heart rate and ECG waveform monitoring',
      'Cloud dashboard with alert thresholds',
    ],
    githubUrl: '#',
    reportUrl: '#',
  },
  {
    slug: 'satellite-pitch-angle-control',
    title: 'Satellite Pitch Angle Control System',
    category: 'Control Systems',
    image: '/projects/satellite-pitch.png',
    description:
      'Designed and simulated a control system to stabilize satellite pitch angle using state-space and PID control techniques.',
    technologies: ['MATLAB', 'Simulink', 'Control Theory', 'PID'],
    results: [
      'Achieved stable pitch response with minimal overshoot',
      'Compared classical and modern control performance',
    ],
    githubUrl: '#',
    reportUrl: '#',
  },
  {
    slug: 'dc-motor-pid-control',
    title: 'DC Motor Speed Control using PID',
    category: 'Control Systems',
    image: '/projects/dc-motor-pid.png',
    description:
      'Implemented closed-loop PID speed control for a DC motor with real-time tuning and response analysis.',
    technologies: ['MATLAB', 'Arduino', 'PID Tuning', 'Encoder Feedback'],
    results: [
      'Accurate speed regulation under varying load',
      'Tuned PID gains for fast settling time',
    ],
    githubUrl: '#',
    reportUrl: '#',
  },
  {
    slug: 'footstep-power-generation',
    title: 'Power Generation by Footsteps',
    category: 'Renewable Energy',
    image: '/projects/footstep-power.png',
    description:
      'A piezoelectric energy-harvesting tile that converts footstep pressure into usable electrical energy.',
    technologies: ['Piezoelectric Sensors', 'Energy Harvesting', 'Rectifier Circuit'],
    results: [
      'Generated measurable charge from footstep pressure',
      'Stored harvested energy for low-power loads',
    ],
    githubUrl: '#',
    reportUrl: '#',
  },
]

export const projectCategories = [
  'All',
  'Power Systems',
  'Renewable Energy',
  'Control Systems',
  'IoT & Electronics',
] as const

export type SkillCategory = {
  category: string
  skills: { name: string; level: number }[]
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Power Systems',
    skills: [
      { name: 'Load Flow Analysis', level: 92 },
      { name: 'Short Circuit Analysis', level: 88 },
      { name: 'Distribution Planning', level: 85 },
    ],
  },
  {
    category: 'Renewable Energy',
    skills: [
      { name: 'Solar PV Integration', level: 84 },
      { name: 'PVSyst Simulation', level: 80 },
      { name: 'Grid Interconnection', level: 78 },
    ],
  },
  {
    category: 'Protection Studies',
    skills: [
      { name: 'Relay Coordination', level: 82 },
      { name: 'Fault Analysis', level: 86 },
      { name: 'Arc Flash Studies', level: 75 },
    ],
  },
  {
    category: 'SCADA & PLC',
    skills: [
      { name: 'PLC Programming', level: 78 },
      { name: 'SCADA Systems', level: 76 },
      { name: 'Industrial Automation', level: 80 },
    ],
  },
  {
    category: 'Simulation Tools',
    skills: [
      { name: 'ETAP', level: 90 },
      { name: 'MATLAB / Simulink', level: 85 },
      { name: 'PSS/E & Synergi', level: 74 },
    ],
  },
]

export const tools = [
  'ETAP',
  'PSS/E',
  'Synergi Electric',
  'MATLAB',
  'PVSyst',
  'AutoCAD',
  'Microsoft Office',
]

export type Certification = {
  title: string
  issuer: string
  year: string
}

export const certifications: Certification[] = [
  { title: 'Power System Analysis with ETAP', issuer: 'Professional Training', year: '2023' },
  { title: 'Solar PV System Design', issuer: 'Renewable Energy Institute', year: '2022' },
  { title: 'PLC & SCADA Fundamentals', issuer: 'Industrial Automation Program', year: '2021' },
  { title: 'MATLAB for Engineers', issuer: 'MathWorks', year: '2021' },
]

export const achievements = [
  {
    title: 'Runner-Up — IEEE RAS RoboWar Competition',
    description:
      'Secured runner-up position in the IEEE Robotics & Automation Society RoboWar competition.',
  },
  {
    title: 'National Engineering Olympiad Participant',
    description:
      'Represented the institution at the National Engineering Olympiad among top engineering talent.',
  },
  {
    title: 'IEEE Leadership & Media Activities',
    description:
      'Held leadership and media roles within IEEE student chapters, organizing technical events.',
  },
]

export const galleryImages = [
  { src: '/gallery/Baadshahmosque.jpeg', alt: 'Aerial view of a solar panel farm at golden hour', span: 'tall' },
  { src: '/gallery/arch.jpeg', alt: 'Arch view', span: 'normal' },
  { src: '/gallery/view.jpeg', alt: 'Control room view', span: 'wide' },
  { src: '/gallery/view2.jpeg', alt: 'Wind turbine view', span: 'normal' },
  { src: '/gallery/rose.jpeg', alt: 'Close-up of a rose', span: 'normal' },
  { src: '/gallery/houses.jpeg', alt: 'Houses in nature', span: 'tall' },
  { src: '/gallery/husnain.jpeg', alt: 'Portrait of Husnain', span: 'normal' },
  { src: '/gallery/tl.jpeg', alt: 'TL image', span: 'normal' },
] as const

export type BlogPost = {
  title: string
  excerpt: string
  category: string
  status: 'Coming Soon' | 'Published'
  date?: string
}

export const blogPosts: BlogPost[] = [
  {
    title: 'Understanding Load Flow Studies in Distribution Networks',
    excerpt:
      'A practical walkthrough of how load flow analysis informs voltage regulation and equipment sizing.',
    category: 'Power Systems',
    status: 'Coming Soon',
  },
  {
    title: 'Integrating Solar PV into the Grid: Challenges & Solutions',
    excerpt:
      'Exploring interconnection studies, voltage rise, and protection considerations for solar integration.',
    category: 'Renewable Energy',
    status: 'Coming Soon',
  },
  {
    title: 'The Path to Grid Modernization',
    excerpt:
      'How smart grids, SCADA, and automation are reshaping the reliability of modern distribution systems.',
    category: 'Grid Modernization',
    status: 'Coming Soon',
  },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]
