import img1 from '@/assets/slides/announcement/hero-1.png'
import img2 from '@/assets/slides/announcement/hero-2.png'
import img3 from '@/assets/slides/announcement/hero-3.png'
import img4 from '@/assets/slides/announcement/hero-4.png'
import img5 from '@/assets/slides/announcement/hero-5.png'

export type AnnouncementType =
  | 'academic'
  | 'event'
  | 'holiday'
  | 'internship'
  | 'general'

export type AnnouncementSlide = {
  id: number
  title: string
  description: string
  image: string
  type: AnnouncementType
  route: string
  badge?: string
  ctaText?: string
}

export const announcementSlides: AnnouncementSlide[] = [
  {
    id: 1,
    title: 'Academic Announcements',
    description:
      'Stay informed with exam schedules, results, and important academic updates for all students.',
    image: img1,
    type: 'academic',
    route: '/announcements/type/academic',
    badge: 'Academic',
    ctaText: 'View Academic',
  },
  {
    id: 2,
    title: 'Campus Events',
    description:
      'Join exciting campus activities, workshops, and student events happening throughout the year.',
    image: img2,
    type: 'event',
    route: '/announcements/type/event',
    badge: 'Events',
    ctaText: 'View Events',
  },
  {
    id: 3,
    title: 'Holiday & Schedule Notices',
    description:
      'Check upcoming holidays, institute closures, and important academic schedule changes.',
    image: img3,
    type: 'holiday',
    route: '/announcements/type/holiday',
    badge: 'Holiday',
    ctaText: 'See Schedule',
  },
  {
    id: 4,
    title: 'Internship Opportunities',
    description:
      'Explore internship programs, training opportunities, and career development pathways.',
    image: img4,
    type: 'internship',
    route: '/announcements/type/internship',
    badge: 'Internship',
    ctaText: 'Explore Now',
  },
  {
    id: 5,
    title: 'General Announcements',
    description:
      'Stay updated with general institute news, important notices, and daily announcements.',
    image: img5,
    type: 'general',
    route: '/announcements/type/general',
    badge: 'General',
    ctaText: 'View Updates',
  },
]
