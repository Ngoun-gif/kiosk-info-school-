import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../pages/home/HomePage.vue'

import AnnouncementsPage from '../pages/announcement/AnnouncementPage.vue'
import AnnouncementDetailPage from '../pages/announcement/AnnouncementDetailPage.vue'
import AnnouncementTypePage from '@/pages/announcement/AnnouncementTypePage.vue'

import CoursePage from '../pages/course/CoursePage.vue'
import CourseDetailPage from '../pages/course/CourseDetailPage.vue'
import CourseTypePage from '@/pages/course/CourseTypePage.vue'

import InternshipPage from '../pages/internship/InternshipPage.vue'
import InternshipDetail from '@/pages/internship/InternshipDetail.vue'
import InternshipTypePage from '@/pages/internship/InternshipTypePage.vue'

import AboutPage from '../pages/about/AboutPage.vue'

import EventsPage from '../pages/event/EventsPage.vue'
import EventDetail from '../pages/event/EventDetailPage.vue'




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
      path: '/internships',
      name: 'internships',
      component: InternshipPage,
    },
    {
      path: '/internships/type/:type',
      name: 'internship-type',
      component: InternshipTypePage,
      props: true,
    },
    {
      path: '/internships/:id',
      name: 'internship-detail',
      component: InternshipDetail,
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
