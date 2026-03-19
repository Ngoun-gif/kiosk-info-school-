import {
  BriefcaseBusiness,
  GraduationCap,
  ClipboardCheck,
  Users,
  Building2,
  Award,
} from 'lucide-vue-next'

export interface InternshipHighlight {
  id: number
  title: string
  description: string
  icon: unknown
}

export const internshipHighlights: InternshipHighlight[] = [
  {
    id: 1,
    title: 'Industry Exposure',
    description:
      'Experience real workplace environments and understand professional expectations.',
    icon: BriefcaseBusiness,
  },
  {
    id: 2,
    title: 'Practical Learning',
    description:
      'Apply classroom theory to real tasks, projects, and organizational workflows.',
    icon: GraduationCap,
  },
  {
    id: 3,
    title: 'Skill Development',
    description:
      'Improve communication, teamwork, responsibility, and problem-solving abilities.',
    icon: ClipboardCheck,
  },
  {
    id: 4,
    title: 'Career Preparation',
    description:
      'Build confidence and prepare for future employment after graduation.',
    icon: Users,
  },
  {
    id: 5,
    title: 'Professional Networking',
    description:
      'Connect with supervisors, colleagues, and industry professionals during placement.',
    icon: Building2,
  },
  {
    id: 6,
    title: 'Resume Enhancement',
    description:
      'Strengthen your CV with practical work experience and professional achievements.',
    icon: Award,
  },
]