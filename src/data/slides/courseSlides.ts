import img1 from '@/assets/slides/course/hero-1.png'
import img2 from '@/assets/slides/course/hero-2.png'
import img3 from '@/assets/slides/course/hero-3.png'

export type CourseSlideType =
  | 'technology'
  | 'business'
  | 'creative'

export type CourseSlide = {
  id: number
  title: string
  description: string
  image: string
  type: CourseSlideType
  route: string
  badge?: string
  ctaText?: string
}

export const courseSlides: CourseSlide[] = [
  {
    id: 1,
    title: 'Technology Programs',
    description:
      'Explore programs in software engineering, information systems, AI, and modern digital technologies.',
    image: img1,
    type: 'technology',
    route: '/courses/type/technology',
    badge: 'Technology',
    ctaText: 'Explore Tech',
  },
  {
    id: 2,
    title: 'Business Programs',
    description:
      'Develop business knowledge, leadership skills, and strategic thinking for modern organizations.',
    image: img2,
    type: 'business',
    route: '/courses/type/business',
    badge: 'Business',
    ctaText: 'View Business',
  },
  {
    id: 3,
    title: 'Creative & Design',
    description:
      'Build creative skills in graphic design, multimedia, and visual communication.',
    image: img3,
    type: 'creative',
    route: '/courses/type/creative',
    badge: 'Creative',
    ctaText: 'Discover Design',
  },
]
