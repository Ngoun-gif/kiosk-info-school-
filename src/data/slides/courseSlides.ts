import type { Component } from 'vue'
import {
  MonitorSmartphone,
  BriefcaseBusiness,
  Palette,
} from 'lucide-vue-next'

import technologyImage from '@/assets/slides/course/hero-1.png'
import businessImage from '@/assets/slides/course/hero-2.png'
import creativeImage from '@/assets/slides/course/hero-3.png'

export type CourseSlideType =
  | 'technology'
  | 'business'
  | 'creative'

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
  {
    id: 3,
    title: 'Creative & Design Programs',
    subtitle: 'Design, Create, and Express Ideas',
    description:
      'Develop creative skills in design, media, and visual communication while learning modern tools and artistic thinking.',
    image: creativeImage,
    icon: Palette,
    type: 'creative',
    route: '/courses/type/creative',
    badge: 'Creative',
    buttonText: 'Explore Courses',
  },
]
