import {
  Building2,
  Users,
  Award,
  Lightbulb,
  FileText,
  Handshake,
  Laptop2,
  Database,
  BriefcaseBusiness,
  BarChart3,
} from 'lucide-vue-next'

export interface StepItem {
  number: string
  title: string
  description: string
}

export interface BenefitItem {
  title: string
  description: string
  icon: unknown
}

export interface DateItem {
  title: string
  value: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface ContactItem {
  label: string
  value: string
}

export interface InternshipTrackItem {
  id: number
  title: string
  department: string
  description: string
  duration: string
  eligibility: string
  icon: unknown
}

export interface InternshipDetailItem {
  id: number
  title: string
  department: string
  description: string
  duration: string
  eligibility: string
  location: string
  overview: string
  objectives: string[]
  requirements: string[]
  responsibilities: string[]
  benefits: string[]
  importantDates: DateItem[]
}

export const internshipHero = {
  eyebrow: 'Career Development',
  title: 'Internship Program',
  description:
    'Our internship program provides students with valuable real-world experience through practical training, professional exposure, and opportunities to apply academic knowledge in workplace environments.',
  badges: ['Practical Experience', 'Career Readiness', 'Industry Exposure'],
}

export const internshipStats = [
  {
    label: 'Program Duration',
    value: '3 - 6 Months',
  },
  {
    label: 'Eligibility',
    value: 'Senior Students',
  },
  {
    label: 'Placement Support',
    value: 'Partner Companies',
  },
]

export const overviewParagraphs: string[] = [
  'The internship program is designed to bridge the gap between classroom learning and professional practice. Students are given the chance to work with companies, organizations, or institutions where they can gain direct experience, understand workplace culture, and strengthen important professional skills.',
  'Through this program, students can enhance responsibility, communication, teamwork, adaptability, and confidence while preparing for future employment opportunities after graduation.',
]

export const objectives: string[] = [
  'Provide students with hands-on experience in real working environments.',
  'Strengthen communication, teamwork, and professional responsibility.',
  'Allow students to apply knowledge and skills learned in academic courses.',
  'Prepare students for future careers through practical industry exposure.',
  'Encourage students to become more independent and adaptable in professional settings.',
  'Support the transition from academic life to employment readiness.',
]

export const eligibility: string[] = [
  'Students who are currently in their senior year or final stage of study.',
  'Students who have completed the required academic foundation courses.',
  'Students who demonstrate commitment, discipline, and professional behavior.',
  'Students who meet department or faculty internship guidelines.',
  'Students who are ready to represent the institute in a professional environment.',
]

export const requirements: string[] = [
  'Completed internship application form.',
  'Updated curriculum vitae (CV) or resume.',
  'Official recommendation letter from the institute or department.',
  'Academic transcript or other supporting documents if required.',
  'Copy of student identification card.',
  'Passport-sized photo for application record if requested.',
]

export const responsibilities: string[] = [
  'Follow workplace rules, schedules, and professional standards.',
  'Maintain respectful communication with supervisors and colleagues.',
  'Complete assigned duties responsibly and on time.',
  'Submit internship reports, reflections, or evaluations as required.',
  'Represent the institute with professionalism and integrity.',
]

export const steps: StepItem[] = [
  {
    number: '01',
    title: 'Submit Application',
    description:
      'Prepare the required documents and submit your internship request to the institute.',
  },
  {
    number: '02',
    title: 'Review & Approval',
    description:
      'Your application will be reviewed based on eligibility, academic readiness, and requirements.',
  },
  {
    number: '03',
    title: 'Placement Process',
    description:
      'Qualified students will be matched with suitable internship opportunities or partner companies.',
  },
  {
    number: '04',
    title: 'Orientation Session',
    description:
      'Students receive guidance on expectations, reporting, conduct, and internship procedures.',
  },
  {
    number: '05',
    title: 'Start Internship',
    description:
      'Students begin their internship and gain professional experience under supervision.',
  },
  {
    number: '06',
    title: 'Evaluation & Report',
    description:
      'At the end of the internship, students complete evaluation, reflection, and final reporting.',
  },
]

export const benefits: BenefitItem[] = [
  {
    title: 'Work Experience',
    description:
      'Gain valuable exposure to real tasks, responsibilities, and workplace practices.',
    icon: Building2,
  },
  {
    title: 'Professional Skills',
    description:
      'Improve communication, teamwork, time management, and problem-solving ability.',
    icon: Users,
  },
  {
    title: 'Career Advantage',
    description:
      'Strengthen your CV and prepare yourself for future job opportunities after graduation.',
    icon: Award,
  },
  {
    title: 'Practical Knowledge',
    description:
      'Apply theory into practice and better understand how knowledge is used in real situations.',
    icon: Lightbulb,
  },
  {
    title: 'Reporting Experience',
    description:
      'Learn to prepare reports, updates, and internship reflections in a professional format.',
    icon: FileText,
  },
  {
    title: 'Industry Connection',
    description:
      'Build stronger relationships with companies and professional mentors.',
    icon: Handshake,
  },
]

export const importantDates: DateItem[] = [
  {
    title: 'Registration Period',
    value: 'March 01 - March 31',
  },
  {
    title: 'Application Review',
    value: 'April 01 - April 07',
  },
  {
    title: 'Orientation Session',
    value: 'April 10',
  },
  {
    title: 'Internship Start',
    value: 'May 01',
  },
  {
    title: 'Midterm Follow-Up',
    value: 'June 15',
  },
  {
    title: 'Final Report Submission',
    value: 'August 30',
  },
]

export const faqItems: FAQItem[] = [
  {
    question: 'Who can apply for the internship program?',
    answer:
      'The program is mainly intended for senior students or students who meet faculty internship requirements.',
  },
  {
    question: 'How long does the internship usually last?',
    answer:
      'The internship duration may vary depending on the department or partner organization, but it commonly lasts between 3 and 6 months.',
  },
  {
    question: 'Do students need to prepare documents before applying?',
    answer:
      'Yes. Students are usually required to prepare an application form, CV, recommendation letter, and other supporting documents.',
  },
  {
    question: 'Will the institute help students find placement?',
    answer:
      'Yes. The institute may support placement through partner companies or approved organizations, depending on availability.',
  },
]

export const contactItems: ContactItem[] = [
  {
    label: 'Office',
    value: 'Career Development Office',
  },
  {
    label: 'Email',
    value: 'internship@CA.edu.kh',
  },
  {
    label: 'Phone',
    value: '+855 12 345 678',
  },
  {
    label: 'Hours',
    value: 'Monday - Friday, 8:00 AM - 5:00 PM',
  },
]

export const internshipTracks: InternshipTrackItem[] = [
  {
    id: 1,
    title: 'Web Development Internship',
    department: 'Information Technology',
    description:
      'Support frontend and backend development tasks, build user interfaces, and gain experience with modern web technologies.',
    duration: '3 - 6 Months',
    eligibility: 'Senior Students',
    icon: Laptop2,
  },
  {
    id: 2,
    title: 'Software Engineering Internship',
    department: 'Computer Science',
    description:
      'Work on real software projects, testing, documentation, and collaborative development practices.',
    duration: '3 - 6 Months',
    eligibility: 'Senior Students',
    icon: BriefcaseBusiness,
  },
  {
    id: 3,
    title: 'Database Administration Internship',
    department: 'Information Systems',
    description:
      'Learn database structure, maintenance, data management, and reporting in professional environments.',
    duration: '3 - 6 Months',
    eligibility: 'Qualified Students',
    icon: Database,
  },
  {
    id: 4,
    title: 'Business Administration Internship',
    department: 'Management',
    description:
      'Gain exposure to office operations, coordination, reporting, and administrative processes.',
    duration: '3 - 6 Months',
    eligibility: 'Senior Students',
    icon: Building2,
  },
  {
    id: 5,
    title: 'Human Resource Internship',
    department: 'Human Resources',
    description:
      'Explore recruitment support, staff coordination, professional communication, and workplace procedures.',
    duration: '3 - 6 Months',
    eligibility: 'Qualified Students',
    icon: Users,
  },
  {
    id: 6,
    title: 'Marketing Internship',
    department: 'Marketing',
    description:
      'Assist with campaign planning, digital content, research, and branding activities in a business setting.',
    duration: '3 - 6 Months',
    eligibility: 'Senior Students',
    icon: BarChart3,
  },
]

export const internshipDetails: InternshipDetailItem[] = [
  {
    id: 1,
    title: 'Web Development Internship',
    department: 'Information Technology',
    description:
      'Support frontend and backend development tasks, build user interfaces, and gain experience with modern web technologies.',
    duration: '3 - 6 Months',
    eligibility: 'Senior Students',
    location: 'Partner Companies / Institute Projects',
    overview:
      'This internship gives students practical exposure to web application development, interface design, and collaborative software workflows in real workplace environments.',
    objectives: [
      'Apply web development knowledge in real projects.',
      'Improve frontend and backend coding skills.',
      'Understand software teamwork and project flow.',
      'Develop professional confidence in technical environments.',
    ],
    requirements: [
      'Basic knowledge of HTML, CSS, JavaScript, or related technologies.',
      'Updated CV or resume.',
      'Recommendation letter from the department.',
      'Completed internship application form.',
    ],
    responsibilities: [
      'Assist with website development tasks.',
      'Participate in testing and bug fixing.',
      'Prepare simple reports and progress updates.',
      'Follow workplace coding and communication standards.',
    ],
    benefits: [
      'Real project experience',
      'Technical skill development',
      'Resume improvement',
      'Professional teamwork experience',
    ],
    importantDates: [
      { title: 'Registration Period', value: 'March 01 - March 31' },
      { title: 'Orientation Session', value: 'April 10' },
      { title: 'Internship Start', value: 'May 01' },
      { title: 'Final Report Submission', value: 'August 30' },
    ],
  },
  {
    id: 2,
    title: 'Software Engineering Internship',
    department: 'Computer Science',
    description:
      'Work on real software projects, testing, documentation, and collaborative development practices.',
    duration: '3 - 6 Months',
    eligibility: 'Senior Students',
    location: 'Partner Companies / Software Teams',
    overview:
      'Students will gain exposure to software engineering processes including development, documentation, testing, and teamwork in structured technical environments.',
    objectives: [
      'Understand software development life cycle in practice.',
      'Improve coding, testing, and documentation abilities.',
      'Develop communication in team-based environments.',
      'Build readiness for future engineering careers.',
    ],
    requirements: [
      'Background in programming fundamentals.',
      'Internship application form.',
      'Updated CV.',
      'Department recommendation.',
    ],
    responsibilities: [
      'Support software development tasks.',
      'Assist with testing and debugging.',
      'Write simple documentation when required.',
      'Communicate clearly with supervisors and team members.',
    ],
    benefits: [
      'Professional software exposure',
      'Problem-solving improvement',
      'Industry practice experience',
      'Career preparation',
    ],
    importantDates: [
      { title: 'Registration Period', value: 'March 01 - March 31' },
      { title: 'Orientation Session', value: 'April 10' },
      { title: 'Internship Start', value: 'May 01' },
      { title: 'Final Report Submission', value: 'August 30' },
    ],
  },
  {
    id: 3,
    title: 'Database Administration Internship',
    department: 'Information Systems',
    description:
      'Learn database structure, maintenance, data management, and reporting in professional environments.',
    duration: '3 - 6 Months',
    eligibility: 'Qualified Students',
    location: 'Partner Organizations',
    overview:
      'This internship focuses on practical database support, data organization, reporting, and understanding how data systems are managed in real organizations.',
    objectives: [
      'Understand data handling in workplace settings.',
      'Support database-related tasks and reporting.',
      'Improve attention to detail and data responsibility.',
    ],
    requirements: [
      'Basic database knowledge.',
      'Application form.',
      'CV or resume.',
      'Academic recommendation.',
    ],
    responsibilities: [
      'Assist with data entry and validation.',
      'Support reporting tasks.',
      'Help maintain data accuracy and organization.',
    ],
    benefits: [
      'Hands-on database exposure',
      'Reporting practice',
      'Data management experience',
      'Professional office workflow understanding',
    ],
    importantDates: [
      { title: 'Registration Period', value: 'March 01 - March 31' },
      { title: 'Orientation Session', value: 'April 10' },
      { title: 'Internship Start', value: 'May 01' },
      { title: 'Final Report Submission', value: 'August 30' },
    ],
  },
  {
    id: 4,
    title: 'Business Administration Internship',
    department: 'Management',
    description:
      'Gain exposure to office operations, coordination, reporting, and administrative processes.',
    duration: '3 - 6 Months',
    eligibility: 'Senior Students',
    location: 'Business Partners / Administrative Offices',
    overview:
      'Students will learn about administrative planning, office workflow, reporting, and professional communication in organizational environments.',
    objectives: [
      'Understand office administration procedures.',
      'Improve coordination and reporting abilities.',
      'Build confidence in professional communication.',
    ],
    requirements: [
      'Internship application form.',
      'Updated CV.',
      'Recommendation letter.',
      'Basic office software skills.',
    ],
    responsibilities: [
      'Assist with administrative documents.',
      'Support scheduling and coordination tasks.',
      'Prepare reports and records as assigned.',
    ],
    benefits: [
      'Office experience',
      'Communication improvement',
      'Professional discipline',
      'Career preparation',
    ],
    importantDates: [
      { title: 'Registration Period', value: 'March 01 - March 31' },
      { title: 'Orientation Session', value: 'April 10' },
      { title: 'Internship Start', value: 'May 01' },
      { title: 'Final Report Submission', value: 'August 30' },
    ],
  },
  {
    id: 5,
    title: 'Human Resource Internship',
    department: 'Human Resources',
    description:
      'Explore recruitment support, staff coordination, professional communication, and workplace procedures.',
    duration: '3 - 6 Months',
    eligibility: 'Qualified Students',
    location: 'Partner Companies / HR Offices',
    overview:
      'This internship provides practical exposure to human resource operations, internal coordination, employee documentation, and workplace professionalism.',
    objectives: [
      'Understand basic HR functions and processes.',
      'Improve professional communication skills.',
      'Gain exposure to workplace structure and staff support.',
    ],
    requirements: [
      'Internship form submission.',
      'Updated CV or resume.',
      'Department approval.',
      'Good communication skills.',
    ],
    responsibilities: [
      'Support staff record organization.',
      'Assist with administrative HR tasks.',
      'Maintain respectful workplace communication.',
    ],
    benefits: [
      'Workplace exposure',
      'Communication development',
      'Administrative experience',
      'Professional growth',
    ],
    importantDates: [
      { title: 'Registration Period', value: 'March 01 - March 31' },
      { title: 'Orientation Session', value: 'April 10' },
      { title: 'Internship Start', value: 'May 01' },
      { title: 'Final Report Submission', value: 'August 30' },
    ],
  },
  {
    id: 6,
    title: 'Marketing Internship',
    department: 'Marketing',
    description:
      'Assist with campaign planning, digital content, research, and branding activities in a business setting.',
    duration: '3 - 6 Months',
    eligibility: 'Senior Students',
    location: 'Marketing Teams / Partner Companies',
    overview:
      'Students gain practical experience in campaign support, marketing communication, content creation, and market observation in real business environments.',
    objectives: [
      'Understand basic marketing activities in practice.',
      'Support branding and communication tasks.',
      'Develop creativity and teamwork in business settings.',
    ],
    requirements: [
      'Internship application form.',
      'Updated CV.',
      'Recommendation letter.',
      'Interest in branding, communication, or digital content.',
    ],
    responsibilities: [
      'Support content and campaign preparation.',
      'Assist with simple marketing research tasks.',
      'Coordinate with supervisors and team members.',
    ],
    benefits: [
      'Creative experience',
      'Marketing exposure',
      'Communication growth',
      'Career readiness',
    ],
    importantDates: [
      { title: 'Registration Period', value: 'March 01 - March 31' },
      { title: 'Orientation Session', value: 'April 10' },
      { title: 'Internship Start', value: 'May 01' },
      { title: 'Final Report Submission', value: 'August 30' },
    ],
  },
]