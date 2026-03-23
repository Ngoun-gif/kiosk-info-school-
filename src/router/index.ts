import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/home/HomePage.vue'
import AnnouncementsPage from '../pages/announcement/AnnouncementsPage.vue'
import AnnouncementDetailPage from '../pages/announcement/AnnouncementDetailPage.vue'
import CoursePage from '../pages/course/CoursePage.vue'
import CourseDetailPage from '../pages/course/CourseDetailPage.vue'
import EventsPage from '../pages/event/EventsPage.vue'
import EventDetail from '../pages/event/EventDetailPage.vue'
import AboutPage from '../pages/about/AboutPage.vue'
import InternshipPage from '../pages/internship/InternshipPage.vue'
import InternshipTrackDetail from '@/pages/internship/InternshipTrackDetail.vue'
import AnnouncementTypePage from '@/pages/announcement/AnnouncementTypePage.vue'
import CourseTypePage from '@/pages/course/CourseTypePage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },

    {
      path: '/announcements',
      name: 'announcements',
      component: AnnouncementsPage,
    },
    {
      path: '/announcements/type/:type',
      name: 'announcement-type',
      component: AnnouncementTypePage,
      props: true,
    },
    {
      path: '/announcements/:id',
      name: 'announcement-detail',
      component: AnnouncementDetailPage,
      props: true,
    },

    {
      path: '/courses',
      name: 'courses',
      component: CoursePage,
    },
    {
      path: '/courses/:id',
      name: 'course-detail',
      component: CourseDetailPage,
      props: true,
    },
    {
      path: '/courses/type/:type',
      name: 'course-type',
      component: CourseTypePage,
      props: true,
    },

    {
      path: '/events',
      name: 'events',
      component: EventsPage,
    },
    {
      path: '/events/:id',
      name: 'event-detail',
      component: EventDetail,
      props: true,
    },

    {
      path: '/internships',
      name: 'internships',
      component: InternshipPage,
    },
    {
      path: '/internship-tracks/:id',
      name: 'internship-track-detail',
      component: InternshipTrackDetail,
      props: true,
    },

    {
      path: '/about',
      name: 'about',
      component: AboutPage,
    },
  ],
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
