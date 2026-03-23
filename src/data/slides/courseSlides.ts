import type { Component } from 'vue'
import {
  MonitorSmartphone,
  BriefcaseBusiness,

  Code2,

} from 'lucide-vue-next'

import technologyImage from '@/assets/slides/course/hero-1.png'
import softwareImage from '@/assets/slides/course/hero-2.png'
import businessImage from '@/assets/slides/course/hero-3.png'


export type CourseSlideType =
  | 'technology'
  | 'software-engineering'
  | 'business'
  | 'management'
  | 'creative'
  | 'design'

export type CourseSlideItem = {
  id: number
  title: string
  subtitle: string
  description: string
  image: string
  icon: Component
  type: CourseSlideType
  route: string
  badge?: string
  buttonText?: string
}

export const courseSlides: CourseSlideItem[] = [
  {
    id: 1,
    title: 'Technology Programs',
    subtitle: 'Build Digital Skills for the Future',
    description:
      'Explore modern technology courses designed to strengthen digital knowledge, systems thinking, and practical technical ability.',
    image: technologyImage,
    icon: MonitorSmartphone,
    type: 'technology',
    route: '/courses/type/technology',
    badge: 'Technology',
    buttonText: 'Explore Courses',
  },
  {
    id: 2,
    title: 'Software Development Path',
    subtitle: 'Learn to Build Real Applications',
    description:
      'Develop practical skills in programming, web application development, debugging, databases, and software project workflows.',
    image: softwareImage,
    icon: Code2,
    type: 'software-engineering',
    route: '/courses/type/technology',
    badge: 'Software',
    buttonText: 'View Program',
  },
  {
    id: 3,
    title: 'Business Programs',
    subtitle: 'Grow Leadership and Strategy',
    description:
      'Study core business foundations including administration, communication, planning, and workplace decision-making.',
    image: businessImage,
    icon: BriefcaseBusiness,
    type: 'business',
    route: '/courses/type/business',
    badge: 'Business',
    buttonText: 'Explore Courses',
  },

]
