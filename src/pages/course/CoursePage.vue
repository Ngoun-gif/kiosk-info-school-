<template>
  <section class="space-y-6 rounded-[28px] bg-white p-6 shadow-lg">
    <!-- Hero -->
    <div class="flex items-center gap-2 text-sky-700">
      <BookOpen  class="h-4 w-4" />
      <p class="text-sm font-semibold uppercase tracking-[0.2em]">
        Programs Information
      </p>
    </div>
    <!-- Highlights -->
    <article class="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
      <div class="flex items-start gap-4">
        <!-- Icon -->
        <div
          class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-100 text-sky-600"
        >
          <BookOpen class="h-6 w-6" />
        </div>

        <div class="min-w-0">
          <!-- Title -->
          <h2 class="text-2xl font-bold text-slate-900">
            Course Overview & Benefits
          </h2>

          <!-- Description -->
          <p class="mt-2 text-sm leading-7 text-slate-600">
            Our academic programs are designed to guide students from foundational
            knowledge to advanced practical skills. Each course provides a clear
            learning path, helping students build confidence, gain industry-relevant
            experience, and prepare for future career opportunities.
          </p>

          <!-- Highlights (now chips) -->
          <div class="mt-5 flex flex-wrap gap-3">
        <span
          v-for="item in courseHighlights"
          :key="item.title"
          class="rounded-full bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
        >
          {{ item.title }}
        </span>
          </div>

          <!-- Compare / Features -->
          <div class="mt-5 grid gap-3 md:grid-cols-2">
            <div
              v-for="item in compareItems"
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





    <!-- Course list -->
    <article class="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
      <div class="flex items-center justify-between gap-4">
        <div>
          <h2 class="text-2xl font-bold text-slate-900">Available Courses</h2>
          <p class="mt-2 text-sm text-slate-500">
            Browse and compare all programs offered by the institute
          </p>
        </div>
      </div>

      <div class="mt-6">
        <CourseList />
      </div>
    </article>
  </section>
</template>

<script setup lang="ts">
import {
  BookOpen,
  CheckCircle2,

  Layers3,

  GraduationCap,
  BriefcaseBusiness,
  Sparkles ,
} from 'lucide-vue-next'
import CourseList from '@/components/course/CourseList.vue'




const courseHighlights = [
  {
    title: 'Compare Programs Easily',
    description:
      'Review key course information in one place to quickly understand which program best fits your interests and future plans.',
    icon: Layers3,
  },
  {
    title: 'Career-Oriented Learning',
    description:
      'Discover programs designed to build practical knowledge, industry skills, and confidence for real-world careers.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Clear Study Path',
    description:
      'Explore course structure, learning goals, and study expectations before moving into detailed program information.',
    icon: GraduationCap,
  },
  {
    title: 'Skill Development',
    description:
      'Understand what technical, academic, creative, or professional skills you can gain from each course.',
    icon: Sparkles,
  },
]



const compareItems = [
  'Course overview and description',
  'Requirements and suitable student profile',
  'Study time and program goals',
  'Skills gained after completion',
  'Certification and internship information',
]


</script>
