<template>
  <section class="space-y-6 rounded-[28px] bg-white p-6 shadow-lg">
    <!-- Header -->
    <div class="flex items-center gap-2 text-sky-700">
      <Megaphone class="h-4 w-4" />
      <p class="text-sm font-semibold uppercase tracking-[0.2em]">
        Latest Updates
      </p>
    </div>



    <article class="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
      <div class="flex items-start gap-4">
        <div
          class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-100 text-sky-600"
        >
          <Megaphone class="h-6 w-6" />
        </div>

        <div class="min-w-0">
          <h2 class="text-2xl font-bold text-slate-900">
            Announcements Overview
          </h2>

          <p class="mt-2 text-sm leading-7 text-slate-600">
            Announcements help students, parents, and visitors stay informed about
            important academic notices, holiday schedules, internship opportunities,
            institute activities, and general updates. This page provides quick
            access to timely information so users can easily follow current news and
            select any announcement to read the full details.
          </p>

          <div class="mt-5 flex flex-wrap gap-3">
        <span
          v-for="item in announcementTypes"
          :key="item.title"
          class="rounded-full bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
        >
          {{ item.title }}
        </span>
          </div>

          <div class="mt-5 grid gap-3 md:grid-cols-2">
            <div
              v-for="item in features"
              :key="item"
              class="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4"
            >
              <CheckCircle2 class="mt-0.5 h-5 w-5 shrink-0 text-sky-600" />
              <p class="text-sm leading-7 text-slate-600">
                {{ item }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>




    <!-- List -->
    <article class="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
      <h2 class="text-2xl font-bold text-slate-900">
        Latest Announcements
      </h2>

      <p class="mt-2 text-sm text-slate-500">
        Click any announcement to view full details
      </p>

      <div class="mt-6">
        <AnnouncementList />
      </div>
    </article>
  </section>
</template>

<script setup lang="ts">
import {
  Megaphone,
  CheckCircle2,

  CalendarDays,
  BookOpen,
  GraduationCap,
  Bell,
} from 'lucide-vue-next'

import AnnouncementList from '@/components/announcements/AnnouncementList.vue'


const announcementTypes = [
  {
    title: 'Academic Notices',
    description: 'Exam schedules, results, and academic-related updates.',
    icon: BookOpen,
  },
  {
    title: 'Holiday Updates',
    description: 'Public holidays and institute break schedules.',
    icon: CalendarDays,
  },
  {
    title: 'Internship Opportunities',
    description: 'Internship openings and career-related announcements.',
    icon: GraduationCap,
  },
  {
    title: 'General News',
    description: 'Important institute updates and announcements.',
    icon: Bell,
  },
]

const overview = [
  'Announcements keep students, parents, and visitors informed about important updates happening across the institute.',
  'They provide quick access to time-sensitive information such as schedules, events, and academic notices.',
]

const features = [
  'Latest academic and administrative updates',
  'Important dates and deadlines',
  'Internship and opportunity notifications',
  'General institute news and activities',
]


</script>
