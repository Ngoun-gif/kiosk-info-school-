export type EventItem = {
  id: number
  month: string
  day: string
  title: string
  description: string
  location: string
  type: string
  videoId: string
  details: string[]
}

export const events: EventItem[] = [
  {
    id: 1,
    month: 'APR',
    day: '05',
    title: 'Open House 2026',
    description:
      'Meet faculty members, explore academic programs, and tour campus facilities.',
    location: 'Main Hall',
    type: 'Event',
    videoId: '2dXwRpXar_o',
    details: [
      'Campus tour and classroom visit',
      'Meet lecturers and student representatives',
      'Introduction to all degree programs',
    ],
  },
  {
    id: 2,
    month: 'APR',
    day: '12',
    title: 'Technology Workshop',
    description:
      'Hands-on workshop introducing modern software tools and development trends.',
    location: 'Computer Lab A',
    type: 'Workshop',
    videoId: 'P7fi4hP_y80',
    details: [
      'Basic web development session',
      'Introduction to programming tools',
      'Interactive coding practice',
    ],
  },
  {
    id: 3,
    month: 'APR',
    day: '20',
    title: 'Student Club Showcase',
    description:
      'Discover student clubs, activities, and leadership opportunities on campus.',
    location: 'Student Center',
    type: 'Activity',
    videoId: 'goW8sOY7RfU',
    details: [
      'Presentation from student clubs',
      'Live performances and activities',
      'Join and register for clubs',
    ],
  },
  {
    id: 4,
    month: 'MAY',
    day: '03',
    title: 'Career Orientation Day',
    description:
      'Prepare students for future careers with guidance from industry experts.',
    location: 'Conference Hall',
    type: 'Event',
    videoId: 'ZMByWenSRdI',
    details: [
      'Career path guidance sessions',
      'Guest speakers from companies',
      'Resume and interview tips',
    ],
  },
  {
    id: 5,
    month: 'MAY',
    day: '15',
    title: 'Graduation Ceremony',
    description:
      'Celebrate the achievements of graduating students and their academic journey.',
    location: 'Auditorium',
    type: 'Event',
    videoId: 'UR4_oJYgpBM',
    details: [
      'Degree awarding ceremony',
      'Guest speeches',
      'Student recognition and celebration',
    ],
  },
]