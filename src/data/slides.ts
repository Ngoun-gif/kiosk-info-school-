import img1 from '@/assets/images/hero-1.png'
import img2 from '@/assets/images/hero-2.png'
import img3 from '@/assets/images/hero-3.png'
import img4 from '@/assets/images/hero-4.png'
import img5 from '@/assets/images/hero-5.png'

export type SlideType =
  | 'announcement'
  | 'course'
  | 'internship'
  | 'about'
  | 'event'

export type Slide = {
  id: number
  title: string
  description: string
  image: string
  type: SlideType
  route: string
  badge?: string
  ctaText?: string
}

export const slides: Slide[] = [
  {
    id: 1,
    title: 'Latest Announcements',
    description: 'Stay updated with important news, schedules, and student information.',
    image: img1,
    type: 'announcement',
    route: '/announcements',
    badge: 'Featured',
    ctaText: 'View Details',
  },
  {
    id: 2,
    title: 'Explore Our Courses',
    description: 'Discover programs designed for real-world skills and career growth.',
    image: img2,
    type: 'course',
    route: '/courses',
    badge: 'Programs',
    ctaText: 'Explore Courses',
  },
  {
    id: 3,
    title: 'Internship Opportunities',
    description: 'Gain real experience through industry placements and partnerships.',
    image: img3,
    type: 'internship',
    route: '/internships',
    badge: 'Career Path',
    ctaText: 'See Opportunities',
  },
  {
    id: 4,
    title: 'About CA Institute',
    description: 'Learn about our mission, campus, and student-centered education.',
    image: img4,
    type: 'about',
    route: '/about',
    badge: 'About Us',
    ctaText: 'Learn More',
  },
  {
    id: 5,
    title: 'Campus Events',
    description: 'Join exciting events, workshops, and student activities.',
    image: img5,
    type: 'event',
    route: '/events',
    badge: 'Campus Life',
    ctaText: 'View Events',
  },
]
