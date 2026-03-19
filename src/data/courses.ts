export type CourseYear = {
  year: string
  focus: string
  subjects: string[]
}

export type Course = {
  id: number
  name: string
  category: string
  duration: string
  level: string
  description: string
  highlights: string[]
  years?: CourseYear[]
  career?: string[]
  requirements: string[]
  suitableFor: string[]
  studyTime: string
  goals: string[]
  skills: string[]
  certification: string
  internshipInfo: string
}

export const courses: Course[] = [
  {
    id: 1,
    name: 'Management Information System',
    category: 'Technology & Business',
    duration: '4 Years Program',
    level: 'Bachelor',
    description:
      'Combines business and IT to design, manage, and improve information systems in organizations.',
    highlights: ['Database Systems', 'Business Analysis', 'Project Management'],
    requirements: [
      'High school diploma or equivalent',
      'Basic English reading and writing',
      'Interest in business and technology',
      'Basic computer usage skills',
    ],
    suitableFor: [
      'Students who enjoy both business and IT',
      'Learners interested in systems and data',
      'Students who like planning and problem solving',
    ],
    studyTime:
      '4 academic years with classroom learning, practical assignments, projects, and final-year internship.',
    goals: [
      'Build strong knowledge in business processes and information systems',
      'Prepare students to analyze and improve organizational systems',
      'Develop readiness for professional work in digital organizations',
    ],
    skills: [
      'Systems analysis',
      'Database management',
      'Business process understanding',
      'Project coordination',
      'Problem solving',
    ],
    certification: 'Bachelor Degree',
    internshipInfo:
      'Includes internship and capstone project in the final year for practical industry exposure.',
    years: [
      {
        year: 'Year 1',
        focus: 'Foundation of business and IT',
        subjects: [
          'Introduction to IT',
          'Computer Applications',
          'Principles of Management',
          'Business Mathematics',
          'English for Academic Study',
        ],
      },
      {
        year: 'Year 2',
        focus: 'Core systems and programming',
        subjects: [
          'Programming Fundamentals',
          'Database Management',
          'Accounting Basics',
          'Business Communication',
          'Systems Analysis',
        ],
      },
      {
        year: 'Year 3',
        focus: 'Enterprise and applied systems',
        subjects: [
          'Management Information Systems',
          'Web Systems',
          'Networking',
          'Project Management',
          'Decision Support Systems',
        ],
      },
      {
        year: 'Year 4',
        focus: 'Professional and industry readiness',
        subjects: [
          'ERP Systems',
          'IT Strategy',
          'Internship',
          'Capstone Project',
        ],
      },
    ],
    career: ['System Analyst', 'IT Officer', 'Project Coordinator'],
  },

  {
    id: 2,
    name: 'Design',
    category: 'Creative',
    duration: '4 Years Program',
    level: 'Creative',
    description:
      'Develops creative skills in visual communication, branding, and multimedia production.',
    highlights: ['Branding', 'UI Design', 'Multimedia'],
    requirements: [
      'High school diploma or equivalent',
      'Interest in visual arts and communication',
      'Basic computer knowledge',
      'Creativity and willingness to build a portfolio',
    ],
    suitableFor: [
      'Students who enjoy art and creativity',
      'Learners interested in branding and visual storytelling',
      'Students who want to build digital design skills',
    ],
    studyTime:
      '4 academic years with studio practice, design projects, portfolio development, and internship.',
    goals: [
      'Develop strong visual communication and design thinking',
      'Prepare students for real creative industry work',
      'Build confidence in digital tools and portfolio presentation',
    ],
    skills: [
      'Graphic design',
      'Typography',
      'Brand identity',
      'UI design',
      'Creative presentation',
    ],
    certification: 'Bachelor Degree',
    internshipInfo:
      'Students complete professional portfolio work and internship experience in the final year.',
    years: [
      {
        year: 'Year 1',
        focus: 'Creative fundamentals',
        subjects: [
          'Basic Drawing',
          'Design Principles',
          'Color Theory',
          'Art Appreciation',
          'Digital Tools',
        ],
      },
      {
        year: 'Year 2',
        focus: 'Graphic design skills',
        subjects: [
          'Typography',
          'Graphic Design',
          'Photoshop & Illustrator',
          'Layout Design',
          'Photography',
        ],
      },
      {
        year: 'Year 3',
        focus: 'Advanced multimedia',
        subjects: [
          'Brand Identity',
          'UI Design',
          'Motion Graphics',
          'Advertising Design',
        ],
      },
      {
        year: 'Year 4',
        focus: 'Professional portfolio',
        subjects: [
          'Creative Campaign',
          'Portfolio Design',
          'Internship',
          'Final Project',
        ],
      },
    ],
    career: ['Graphic Designer', 'UI Designer', 'Creative Designer'],
  },

  {
    id: 3,
    name: 'Business Information Technology',
    category: 'Technology & Business',
    duration: '4 Years Program',
    level: 'Bachelor',
    description:
      'Integrates business operations with modern IT systems for digital organizations.',
    highlights: ['Business IT', 'E-Commerce', 'Data Systems'],
    requirements: [
      'High school diploma or equivalent',
      'Basic English communication',
      'Interest in business operations and information technology',
      'Basic computer literacy',
    ],
    suitableFor: [
      'Students who want to work in digital business environments',
      'Learners interested in e-commerce and business systems',
      'Students who like both technology and management',
    ],
    studyTime:
      '4 academic years with foundation studies, applied business technology subjects, and final-year internship.',
    goals: [
      'Prepare students to support business systems and digital operations',
      'Develop practical understanding of e-commerce and information systems',
      'Build skills for modern organizational technology environments',
    ],
    skills: [
      'Business systems support',
      'Database basics',
      'E-commerce understanding',
      'Digital process improvement',
      'Technology integration',
    ],
    certification: 'Bachelor Degree',
    internshipInfo:
      'Final-year internship provides hands-on experience in business technology and digital systems.',
    years: [
      {
        year: 'Year 1',
        focus: 'Business & digital basics',
        subjects: [
          'Introduction to Business',
          'Computer Fundamentals',
          'Office Applications',
          'Business English',
        ],
      },
      {
        year: 'Year 2',
        focus: 'Business systems',
        subjects: [
          'Information Systems',
          'Database Basics',
          'E-Commerce',
          'Accounting Info Systems',
        ],
      },
      {
        year: 'Year 3',
        focus: 'Technology integration',
        subjects: [
          'Web Technology',
          'Networking Basics',
          'Data Analysis',
          'Business Process',
        ],
      },
      {
        year: 'Year 4',
        focus: 'Professional application',
        subjects: [
          'Digital Strategy',
          'Project Management',
          'Internship',
          'Capstone Project',
        ],
      },
    ],
    career: ['Business Analyst', 'IT Support', 'System Coordinator'],
  },

  {
    id: 4,
    name: 'Master of Management Information Systems',
    category: 'Technology & Management',
    duration: '2 Years Program',
    level: 'Master',
    description:
      'Advanced study in managing enterprise IT systems, digital transformation, and strategic decision-making.',
    highlights: ['Enterprise Systems', 'IT Strategy', 'Digital Transformation'],
    requirements: [
      'Bachelor degree or equivalent',
      'Basic academic writing and research ability',
      'Interest in strategic use of information systems',
      'Recommended background in business or IT',
    ],
    suitableFor: [
      'Graduates who want leadership roles in IT and systems',
      'Professionals interested in enterprise technology management',
      'Learners focused on digital transformation',
    ],
    studyTime:
      '2 academic years with advanced coursework, strategic analysis, and research-based final work.',
    goals: [
      'Develop advanced understanding of enterprise information systems',
      'Strengthen strategic decision-making in digital environments',
      'Prepare graduates for management and consulting roles',
    ],
    skills: [
      'Enterprise systems thinking',
      'IT strategy',
      'Business analytics',
      'Digital transformation planning',
      'Research and analysis',
    ],
    certification: 'Master Degree',
    internshipInfo:
      'Focuses more on advanced strategy and research; project or thesis work supports professional specialization.',
    years: [
      {
        year: 'Year 1',
        focus: 'Advanced IT and business integration',
        subjects: [
          'Advanced Information Systems',
          'Enterprise Systems',
          'IT Project Management',
          'Business Analytics',
        ],
      },
      {
        year: 'Year 2',
        focus: 'Strategy and research',
        subjects: [
          'Digital Transformation',
          'IT Governance',
          'Research Methodology',
          'Thesis / Final Project',
        ],
      },
    ],
    career: ['IT Manager', 'System Consultant', 'Digital Strategist'],
  },

  {
    id: 5,
    name: 'Master of Business Administration (MBA)',
    category: 'Business & Leadership',
    duration: '2 Years Program',
    level: 'Master',
    description:
      'Develops leadership, strategic thinking, and advanced management skills for business professionals.',
    highlights: ['Leadership', 'Strategy', 'Business Analytics'],
    requirements: [
      'Bachelor degree or equivalent',
      'Interest in business leadership and management',
      'Basic communication and analytical skills',
      'Professional or academic background in business is helpful',
    ],
    suitableFor: [
      'Graduates aiming for management roles',
      'Professionals who want stronger leadership skills',
      'Learners interested in entrepreneurship and strategic growth',
    ],
    studyTime:
      '2 academic years with advanced business study, strategic projects, and final research or capstone.',
    goals: [
      'Develop leadership and strategic business knowledge',
      'Prepare students for management and entrepreneurial roles',
      'Strengthen analytical decision-making in business environments',
    ],
    skills: [
      'Leadership',
      'Strategic planning',
      'Business analysis',
      'Organizational management',
      'Entrepreneurial thinking',
    ],
    certification: 'Master Degree',
    internshipInfo:
      'Program emphasizes leadership development, strategic application, and final research or capstone outcomes.',
    years: [
      {
        year: 'Year 1',
        focus: 'Core management knowledge',
        subjects: [
          'Strategic Management',
          'Marketing Management',
          'Financial Management',
          'Organizational Behavior',
        ],
      },
      {
        year: 'Year 2',
        focus: 'Leadership and specialization',
        subjects: [
          'Business Strategy',
          'Entrepreneurship',
          'Research Methods',
          'Thesis / Capstone',
        ],
      },
    ],
    career: ['Business Manager', 'Entrepreneur', 'Consultant'],
  },

  {
    id: 6,
    name: 'Master of Computer Science',
    category: 'Technology',
    duration: '2 Years Program',
    level: 'Master',
    description:
      'Advanced computing concepts including software engineering, AI, and system architecture.',
    highlights: ['AI', 'Advanced Programming', 'Architecture'],
    requirements: [
      'Bachelor degree or equivalent',
      'Background in computing or related field',
      'Programming fundamentals',
      'Interest in research and advanced technology',
    ],
    suitableFor: [
      'Graduates who want deeper technical expertise',
      'Learners interested in AI and software engineering',
      'Students aiming for advanced development or research roles',
    ],
    studyTime:
      '2 academic years with advanced technical coursework, research, and innovation-focused final project.',
    goals: [
      'Develop advanced knowledge in modern computing systems',
      'Prepare graduates for high-level technical and research careers',
      'Strengthen innovation and problem-solving in software and AI',
    ],
    skills: [
      'Advanced programming',
      'Software engineering',
      'Algorithms',
      'Artificial intelligence',
      'System architecture',
    ],
    certification: 'Master Degree',
    internshipInfo:
      'Program is focused on advanced technical development and research, with thesis or project-based completion.',
    years: [
      {
        year: 'Year 1',
        focus: 'Core advanced computing',
        subjects: [
          'Advanced Programming',
          'Software Engineering',
          'Database Systems',
          'Algorithms',
        ],
      },
      {
        year: 'Year 2',
        focus: 'Research and innovation',
        subjects: [
          'Artificial Intelligence',
          'Cloud Computing',
          'Research Methods',
          'Thesis Project',
        ],
      },
    ],
    career: ['Software Engineer', 'System Architect', 'AI Engineer'],
  },
]
