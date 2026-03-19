import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import AnnouncementsPage from '../pages/AnnouncementsPage.vue'
import AnnouncementDetailPage from '../pages/AnnouncementDetailPage.vue'
import CoursePage from '../pages/CoursePage.vue'
import CourseDetailPage from '../pages/CourseDetailPage.vue'
import EventsPage from '../pages/EventsPage.vue'
import EventDetail from '../pages/EventDetailPage.vue'
import AboutPage from '../pages/AboutPage.vue'
import InternshipPage from '../pages/InternshipPage.vue'
import InternshipTrackDetail from '@/pages/InternshipTrackDetail.vue'

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
