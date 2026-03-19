export type ScheduleSession = {
  shift: string
  days: string
  time: string
  room: string
  note?: string
}

export type CourseSchedule = {
  courseId: number
  title: string
  description: string
  sessions: ScheduleSession[]
}

export const schedules: CourseSchedule[] = [
  {
    courseId: 1,
    title: 'Management Information System Schedule',
    description:
      'Sample class schedule for Bachelor program. Students can choose from available weekday and weekend shifts.',
    sessions: [
      {
        shift: 'Morning Shift',
        days: 'Monday - Friday',
        time: '8:00 AM - 11:00 AM',
        room: 'Room A101',
        note: 'Suitable for full-time students',
      },
      {
        shift: 'Afternoon Shift',
        days: 'Monday - Friday',
        time: '1:00 PM - 4:00 PM',
        room: 'Room A102',
        note: 'Regular daytime study option',
      },
      {
        shift: 'Evening Shift',
        days: 'Monday - Friday',
        time: '5:30 PM - 8:00 PM',
        room: 'Room A103',
        note: 'Recommended for working students',
      },
      {
        shift: 'Weekend Shift',
        days: 'Saturday - Sunday',
        time: '8:00 AM - 11:30 AM',
        room: 'Room A104',
        note: 'Flexible weekend learning option',
      },
    ],
  },

  {
    courseId: 2,
    title: 'Design Schedule',
    description:
      'Sample class schedule for Bachelor Design program with four learning shifts.',
    sessions: [
      {
        shift: 'Morning Shift',
        days: 'Monday - Friday',
        time: '8:30 AM - 11:30 AM',
        room: 'Design Lab 1',
        note: 'Creative fundamentals and design theory',
      },
      {
        shift: 'Afternoon Shift',
        days: 'Monday - Friday',
        time: '1:30 PM - 4:30 PM',
        room: 'Design Lab 2',
        note: 'Studio practice and project work',
      },
      {
        shift: 'Evening Shift',
        days: 'Monday - Friday',
        time: '5:30 PM - 8:30 PM',
        room: 'Design Studio 3',
        note: 'Convenient for part-time learners',
      },
      {
        shift: 'Weekend Shift',
        days: 'Saturday - Sunday',
        time: '9:00 AM - 12:00 PM',
        room: 'Design Studio 1',
        note: 'Workshop and portfolio-focused classes',
      },
    ],
  },

  {
    courseId: 3,
    title: 'Business Information Technology Schedule',
    description:
      'Sample class schedule for Bachelor BIT program with four flexible shifts.',
    sessions: [
      {
        shift: 'Morning Shift',
        days: 'Monday - Friday',
        time: '8:00 AM - 11:00 AM',
        room: 'IT Lab B201',
        note: 'Theory and system fundamentals',
      },
      {
        shift: 'Afternoon Shift',
        days: 'Monday - Friday',
        time: '1:00 PM - 4:00 PM',
        room: 'IT Lab B202',
        note: 'Applied learning and practice',
      },
      {
        shift: 'Evening Shift',
        days: 'Monday - Friday',
        time: '5:30 PM - 8:00 PM',
        room: 'IT Lab B203',
        note: 'Suitable for working students',
      },
      {
        shift: 'Weekend Shift',
        days: 'Saturday - Sunday',
        time: '8:00 AM - 11:30 AM',
        room: 'IT Lab B204',
        note: 'Weekend intensive option',
      },
    ],
  },

  {
    courseId: 4,
    title: 'Master of Management Information Systems Schedule',
    description:
      'Sample weekend schedule for Master students. Classes are available only on Saturday and Sunday.',
    sessions: [
      {
        shift: 'Saturday Session',
        days: 'Saturday',
        time: '8:00 AM - 11:30 AM',
        room: 'Graduate Room G01',
        note: 'Advanced enterprise systems and strategic IT topics',
      },
      {
        shift: 'Sunday Session',
        days: 'Sunday',
        time: '1:00 PM - 4:30 PM',
        room: 'Graduate Room G01',
        note: 'Research discussion and case study analysis',
      },
    ],
  },

  {
    courseId: 5,
    title: 'Master of Business Administration (MBA) Schedule',
    description:
      'Sample weekend schedule for MBA students with executive-style sessions.',
    sessions: [
      {
        shift: 'Saturday Session',
        days: 'Saturday',
        time: '8:30 AM - 11:30 AM',
        room: 'MBA Hall M01',
        note: 'Leadership and management modules',
      },
      {
        shift: 'Sunday Session',
        days: 'Sunday',
        time: '1:30 PM - 4:30 PM',
        room: 'MBA Hall M01',
        note: 'Business case presentation and teamwork',
      },
    ],
  },

  {
    courseId: 6,
    title: 'Master of Computer Science Schedule',
    description:
      'Sample weekend schedule for Master of Computer Science students.',
    sessions: [
      {
        shift: 'Saturday Session',
        days: 'Saturday',
        time: '8:00 AM - 11:30 AM',
        room: 'CS Lab M201',
        note: 'Advanced programming and software engineering',
      },
      {
        shift: 'Sunday Session',
        days: 'Sunday',
        time: '1:00 PM - 4:30 PM',
        room: 'CS Lab M201',
        note: 'Research methods and thesis guidance',
      },
    ],
  },
]

export const getScheduleByCourseId = (courseId: number) => {
  return schedules.find((item) => item.courseId === courseId)
}