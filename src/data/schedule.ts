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
    title: 'Bachelor of Information Technology Schedule',
    description:
      'Sample class schedule for Bachelor of Information Technology students. Students can choose from weekday and weekend study shifts.',
    sessions: [
      {
        shift: 'Morning Shift',
        days: 'Monday - Friday',
        time: '8:00 AM - 11:00 AM',
        room: 'IT Lab A101',
        note: 'Suitable for full-time students',
      },
      {
        shift: 'Afternoon Shift',
        days: 'Monday - Friday',
        time: '1:00 PM - 4:00 PM',
        room: 'IT Lab A102',
        note: 'Regular daytime study option',
      },
      {
        shift: 'Evening Shift',
        days: 'Monday - Friday',
        time: '5:30 PM - 8:00 PM',
        room: 'IT Lab A103',
        note: 'Recommended for working students',
      },
      {
        shift: 'Weekend Shift',
        days: 'Saturday - Sunday',
        time: '8:00 AM - 11:30 AM',
        room: 'IT Lab A104',
        note: 'Flexible weekend learning option',
      },
    ],
  },

  {
    courseId: 2,
    title: 'Bachelor of Computer Science Schedule',
    description:
      'Sample class schedule for Bachelor of Computer Science students with weekday and weekend options.',
    sessions: [
      {
        shift: 'Morning Shift',
        days: 'Monday - Friday',
        time: '8:00 AM - 11:00 AM',
        room: 'CS Lab B201',
        note: 'Programming foundations and software concepts',
      },
      {
        shift: 'Afternoon Shift',
        days: 'Monday - Friday',
        time: '1:00 PM - 4:00 PM',
        room: 'CS Lab B202',
        note: 'Practical coding sessions and lab work',
      },
      {
        shift: 'Evening Shift',
        days: 'Monday - Friday',
        time: '5:30 PM - 8:00 PM',
        room: 'CS Lab B203',
        note: 'Suitable for working students',
      },
      {
        shift: 'Weekend Shift',
        days: 'Saturday - Sunday',
        time: '8:30 AM - 11:30 AM',
        room: 'CS Lab B204',
        note: 'Weekend intensive learning option',
      },
    ],
  },

  {
    courseId: 3,
    title: 'Master of Information Technology Schedule',
    description:
      'Sample weekend schedule for Master of Information Technology students.',
    sessions: [
      {
        shift: 'Saturday Session',
        days: 'Saturday',
        time: '8:00 AM - 11:30 AM',
        room: 'Graduate Room G01',
        note: 'Advanced IT systems and strategic digital topics',
      },
      {
        shift: 'Sunday Session',
        days: 'Sunday',
        time: '1:00 PM - 4:30 PM',
        room: 'Graduate Room G01',
        note: 'Research, discussion, and applied case study sessions',
      },
    ],
  },

  {
    courseId: 4,
    title: 'Bachelor of Business Administration Schedule',
    description:
      'Sample class schedule for Bachelor of Business Administration students with flexible study shifts.',
    sessions: [
      {
        shift: 'Morning Shift',
        days: 'Monday - Friday',
        time: '8:00 AM - 11:00 AM',
        room: 'Business Room C101',
        note: 'Core management and communication subjects',
      },
      {
        shift: 'Afternoon Shift',
        days: 'Monday - Friday',
        time: '1:00 PM - 4:00 PM',
        room: 'Business Room C102',
        note: 'Applied business learning and teamwork',
      },
      {
        shift: 'Evening Shift',
        days: 'Monday - Friday',
        time: '5:30 PM - 8:00 PM',
        room: 'Business Room C103',
        note: 'Recommended for employed learners',
      },
      {
        shift: 'Weekend Shift',
        days: 'Saturday - Sunday',
        time: '8:30 AM - 11:30 AM',
        room: 'Business Room C104',
        note: 'Flexible weekend business study option',
      },
    ],
  },

  {
    courseId: 5,
    title: 'Master of Business Management Schedule',
    description:
      'Sample weekend schedule for Master of Business Management students.',
    sessions: [
      {
        shift: 'Saturday Session',
        days: 'Saturday',
        time: '8:30 AM - 11:30 AM',
        room: 'MBA Hall M01',
        note: 'Leadership, planning, and management modules',
      },
      {
        shift: 'Sunday Session',
        days: 'Sunday',
        time: '1:30 PM - 4:30 PM',
        room: 'MBA Hall M01',
        note: 'Business case presentation and strategic teamwork',
      },
    ],
  },

  {
    courseId: 6,
    title: 'Certificate in Graphic Design Schedule',
    description:
      'Sample class schedule for Graphic Design students with practical studio-based sessions.',
    sessions: [
      {
        shift: 'Morning Shift',
        days: 'Monday - Friday',
        time: '8:30 AM - 11:30 AM',
        room: 'Design Lab D101',
        note: 'Creative fundamentals and design theory',
      },
      {
        shift: 'Afternoon Shift',
        days: 'Monday - Friday',
        time: '1:30 PM - 4:30 PM',
        room: 'Design Lab D102',
        note: 'Studio practice and digital project work',
      },
      {
        shift: 'Evening Shift',
        days: 'Monday - Friday',
        time: '5:30 PM - 8:30 PM',
        room: 'Design Studio D103',
        note: 'Convenient for part-time learners',
      },
      {
        shift: 'Weekend Shift',
        days: 'Saturday - Sunday',
        time: '9:00 AM - 12:00 PM',
        room: 'Design Studio D104',
        note: 'Workshop and portfolio-focused classes',
      },
    ],
  },
]

export const getScheduleByCourseId = (courseId: number) => {
  return schedules.find((item) => item.courseId === courseId)
}
