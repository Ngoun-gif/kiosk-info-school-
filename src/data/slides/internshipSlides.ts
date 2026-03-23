import type { Component } from 'vue'
import {
  Globe,
  Code2,
  Database,
  BriefcaseBusiness,
  Users,
  Megaphone,
} from 'lucide-vue-next'

import webDevelopmentImage from '@/assets/slides/internship/hero-1.png'
import softwareEngineeringImage from '@/assets/slides/internship/hero-2.png'
import databaseAdministrationImage from '@/assets/slides/internship/hero-3.png'
import businessAdministrationImage from '@/assets/slides/internship/hero-4.png'
import humanResourceImage from '@/assets/slides/internship/hero-5.png'
import marketingImage from '@/assets/slides/internship/hero-6.png'

export type InternshipSlideType =
  | 'web-development'
  | 'software-engineering'
  | 'database-administration'
  | 'business-administration'
  | 'human-resource'
  | 'marketing'

export type InternshipSlideItem = {
  id: number
  title: string
  subtitle: string
  description: string
  image: string
  icon: Component
  type: InternshipSlideType
  route: string
  badge?: string
  buttonText?: string
}

export const internshipSlides: InternshipSlideItem[] = [
  {
    id: 1,
    title: 'Web Development Internship',
    subtitle: 'Build Modern Web Experiences',
    description:
      'Gain practical experience in front-end and back-end web development, user interface design, and responsive application building.',
    image: webDevelopmentImage,
    icon: Globe,
    type: 'web-development',
    route: '/internships/type/web-development',
    badge: 'Web Development',
    buttonText: 'Explore Internship',
  },
  {
    id: 2,
    title: 'Software Engineering Internship',
    subtitle: 'Develop Real Software Solutions',
    description:
      'Work on software architecture, application logic, debugging, and collaborative development practices in real project environments.',
    image: softwareEngineeringImage,
    icon: Code2,
    type: 'software-engineering',
    route: '/internships/type/software-engineering',
    badge: 'Software Engineering',
    buttonText: 'Explore Internship',
  },
  {
    id: 3,
    title: 'Database Administration Internship',
    subtitle: 'Manage and Secure Data Systems',
    description:
      'Learn how to organize, maintain, optimize, and secure database systems while working with structured data and performance monitoring.',
    image: databaseAdministrationImage,
    icon: Database,
    type: 'database-administration',
    route: '/internships/type/database-administration',
    badge: 'Database',
    buttonText: 'Explore Internship',
  },
  {
    id: 4,
    title: 'Business Administration Internship',
    subtitle: 'Strengthen Operational Skills',
    description:
      'Build experience in office operations, project coordination, reporting, planning, and administrative support within professional teams.',
    image: businessAdministrationImage,
    icon: BriefcaseBusiness,
    type: 'business-administration',
    route: '/internships/type/business-administration',
    badge: 'Business Administration',
    buttonText: 'Explore Internship',
  },
  {
    id: 5,
    title: 'Human Resource Internship',
    subtitle: 'Support People and Talent Growth',
    description:
      'Understand recruitment, employee coordination, communication workflows, and human resource support in a structured workplace.',
    image: humanResourceImage,
    icon: Users,
    type: 'human-resource',
    route: '/internships/type/human-resource',
    badge: 'Human Resource',
    buttonText: 'Explore Internship',
  },
  {
    id: 6,
    title: 'Marketing Internship',
    subtitle: 'Create Campaigns That Connect',
    description:
      'Explore branding, digital promotion, content planning, and market communication strategies for real business objectives.',
    image: marketingImage,
    icon: Megaphone,
    type: 'marketing',
    route: '/internships/type/marketing',
    badge: 'Marketing',
    buttonText: 'Explore Internship',
  },
]
