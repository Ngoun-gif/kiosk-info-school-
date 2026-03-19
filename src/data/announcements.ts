export type AnnouncementCategory =
  | 'Academic'
  | 'Events'
  | 'Holiday'
  | 'Internship'
  | 'General'

export type AnnouncementItem = {
  id: number
  title: string
  description: string
  content: string
  date: string
  author: string
  category: AnnouncementCategory
}

export const announcements: AnnouncementItem[] = [
  {
    id: 1,
    title: 'Midterm Examination Schedule Released',
    description:
      'Students can now review the updated midterm examination timetable.',
    content: `
The midterm examination schedule has officially been released for all departments. Students are required to carefully review their exam dates, times, and assigned rooms through the official notice boards or department offices.

All students must arrive at least 15 minutes before the scheduled exam time and bring their student ID cards. Late arrivals may not be permitted to enter the examination room.

Please ensure that all required materials are prepared in advance. Electronic devices, including mobile phones, are strictly prohibited unless specified by the instructor.

For any questions or special arrangements, students should contact their respective academic departments before the examination period begins.
    `,
    date: 'Mar 20',
    author: 'Nguon',
    category: 'Academic',
  },
  {
    id: 2,
    title: 'Library Extended Hours',
    description:
      'The library will remain open until 8:00 PM during exam preparation week.',
    content: `
To support students during the upcoming examination period, the school library will extend its operating hours until 8:00 PM for the entire week.

Students are encouraged to take advantage of the quiet study environment, group discussion rooms, and computer access facilities. Library staff will also be available to assist with research materials and academic resources.

Please maintain a respectful and quiet atmosphere within the library to ensure a productive environment for all users.

Food and drinks are not allowed inside the study areas, and students are reminded to follow all library regulations.
    `,
    date: 'Mar 22',
    author: 'Nguon',
    category: 'Academic',
  },
  {
    id: 3,
    title: 'Student Orientation for New Intake',
    description:
      'A welcome session will be held for new students joining this semester.',
    content: `
The school will organize a comprehensive orientation program for all newly admitted students this semester. The session aims to introduce students to academic programs, campus facilities, and available student services.

During the orientation, students will have the opportunity to meet faculty members, explore classrooms and labs, and learn about important school policies.

There will also be interactive sessions, campus tours, and Q&A segments to help students feel comfortable and prepared for their academic journey.

Attendance is highly recommended for all new students to ensure a smooth transition into school life.
    `,
    date: 'Mar 25',
    author: 'Nguon',
    category: 'Events',
  },
  {
    id: 4,
    title: 'School Trip to Cultural Heritage Site',
    description:
      'Students will visit a historical site as part of experiential learning.',
    content: `
As part of the school's commitment to experiential learning, a school trip to a cultural heritage site will be organized for students across selected programs.

This educational trip aims to enhance students' understanding of history, culture, and real-world applications of classroom knowledge.

Students will participate in guided tours, group discussions, and reflection activities during the visit. Transportation and supervision will be arranged by the school.

Further details, including schedule and requirements, will be announced by each department. Students are encouraged to participate actively in this enriching experience.
    `,
    date: 'Mar 28',
    author: 'Nguon',
    category: 'Events',
  },
  {
    id: 5,
    title: 'Annual School Event and Exhibition',
    description: 'Showcasing student projects, performances, and achievements.',
    content: `
The school is excited to announce the upcoming Annual School Event and Exhibition, where students will showcase their academic projects, creative works, and performances.

This event provides a platform for students to demonstrate their skills, collaborate with peers, and gain valuable presentation experience.

Visitors, including parents and guests, are invited to explore various exhibitions, attend live performances, and engage with student projects.

The event will be held on campus, and all students are encouraged to participate and contribute to making it a successful and memorable occasion.
    `,
    date: 'Apr 02',
    author: 'Nguon',
    category: 'Events',
  },
  {
    id: 6,
    title: 'New Computer Lab Opening',
    description: 'A modern computer lab is now available for students.',
    content: `
The school is proud to announce the opening of a new computer laboratory equipped with modern hardware and software to support students in technology-related programs.

The lab features high-performance computers, updated development tools, and high-speed internet access to enhance the learning experience.

Students will be able to use the lab for practical sessions, assignments, and project development under the supervision of instructors.

The new facility reflects the school's commitment to providing quality education and staying up-to-date with technological advancements.
    `,
    date: 'Apr 05',
    author: 'Nguon',
    category: 'General',
  },
  {
    id: 7,
    title: 'Scholarship Applications Open',
    description: 'Students can now apply for academic scholarships.',
    content: `
Scholarship applications are now open for eligible students who demonstrate academic excellence and financial need.

Students interested in applying should submit the required documents, including academic transcripts and recommendation letters, before the deadline.

The scholarship program aims to support students in achieving their educational goals and reducing financial barriers.

Detailed application guidelines and eligibility criteria are available at the administration office or on the school's official notice board.
    `,
    date: 'Apr 10',
    author: 'Nguon',
    category: 'Academic',
  },
  {
    id: 8,
    title: 'Final Examination Preparation Guidelines',
    description:
      'Important instructions and preparation tips for upcoming final exams.',
    content: `
The institute has released guidelines to help students prepare effectively for the final examinations. Students are encouraged to review all course materials and attend revision sessions organized by lecturers.

Make sure to verify your examination schedule, prepare necessary stationery, and arrive early at the exam venue.

Group study sessions are also recommended to enhance understanding and improve performance.

Please contact your department for any additional support or clarification.
  `,
    date: 'Apr 12',
    author: 'Academic Office',
    category: 'Academic',
  },
  {
    id: 9,
    title: 'Public Holiday Announcement – Labour Day',
    description:
      'The institute will be closed in observance of Labour Day.',
    content: `
The institute will be closed on Labour Day. All classes and administrative services will be temporarily suspended during this period.

Regular operations will resume on the following working day.

Students are advised to plan their academic activities accordingly and ensure that assignments are submitted before the holiday if required.
  `,
    date: 'May 01',
    author: 'Administration',
    category: 'Holiday',
  },
  {
    id: 10,
    title: 'Career Fair 2026',
    description:
      'Meet top companies and explore internship and job opportunities.',
    content: `
The annual Career Fair will be held on campus, bringing together leading companies from various industries.

Students will have the opportunity to interact with recruiters, submit resumes, and learn about career opportunities.

Workshops on resume writing and interview skills will also be conducted during the event.

All students are encouraged to participate and prepare professional resumes.
  `,
    date: 'May 05',
    author: 'Career Center',
    category: 'Internship',
  },
  {
    id: 11,
    title: 'Guest Lecture on AI and Future Technology',
    description:
      'A special session by industry experts on emerging technologies.',
    content: `
The institute is hosting a guest lecture on Artificial Intelligence and future technologies by industry professionals.

This session will cover real-world applications, trends, and career opportunities in the tech field.

Students from all departments are welcome to attend and participate in the Q&A session.

This is a great opportunity to gain insights into the future of technology.
  `,
    date: 'May 08',
    author: 'IT Department',
    category: 'Events',
  },
  {
    id: 12,
    title: 'Campus Maintenance Notice',
    description:
      'Temporary maintenance work will take place in selected areas.',
    content: `
The institute will conduct maintenance work in selected campus areas, including classrooms and common facilities.

During this time, certain areas may be temporarily inaccessible.

Students are advised to follow safety instructions and avoid restricted zones.

We apologize for any inconvenience caused and appreciate your cooperation.
  `,
    date: 'May 10',
    author: 'Facility Management',
    category: 'General',
  },
  {
    id: 13,
    title: 'Internship Program Registration Open',
    description:
      'Students can now register for the upcoming internship program.',
    content: `
The internship program registration is now open for eligible students.

Participants will gain hands-on experience in real working environments and develop professional skills.

Students should submit their applications through the academic office before the deadline.

Limited slots are available, so early registration is encouraged.
  `,
    date: 'May 12',
    author: 'Internship Office',
    category: 'Internship',
  },
  {
    id: 14,
    title: 'Student Sports Competition Week',
    description:
      'Join various sports events and represent your department.',
    content: `
The institute is organizing a sports competition week featuring football, volleyball, basketball, and more.

Students can register individually or as a team through their department representatives.

This event promotes teamwork, health, and school spirit.

All students are encouraged to participate and support their teams.
  `,
    date: 'May 15',
    author: 'Student Affairs',
    category: 'Events',
  }
]
