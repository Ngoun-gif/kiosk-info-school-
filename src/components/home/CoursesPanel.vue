<template>
  <section class="rounded-[28px] bg-white p-6 shadow-lg">
    <SectionTitle
      eyebrow="Programs"
      title="Courses Information"
      description="Explore academic and professional programs without showing pricing."
    />

    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <article
        v-for="course in courses"
        :key="course.id"
        @click="goToDetail(course.id)"
        class="group cursor-pointer rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:shadow-xl"
      >
        <div class="flex items-start justify-between gap-4">
          <div class="flex items-start gap-3">
            <div
              class="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-sky-100 via-cyan-100 to-emerald-100 text-sky-700"
            >
              <component :is="getCourseIcon(course.name)" class="h-5 w-5" />
            </div>

            <div>
              <h3 class="text-lg font-bold text-slate-900 group-hover:text-sky-700">
                {{ course.name }}
              </h3>
              <p class="mt-1 text-sm font-medium text-sky-600">
                {{ course.duration }}
              </p>
            </div>
          </div>

          <span
            class="rounded-full px-3 py-1 text-xs font-semibold"
            :class="{
              'bg-sky-100 text-sky-700': course.level === 'Bachelor',
              'bg-emerald-100 text-emerald-700': course.level === 'Master',
              'bg-purple-100 text-purple-700': course.level === 'Creative',
            }"
          >
            {{ course.level }}
          </span>
        </div>

        <p class="mt-4 text-slate-600">
          {{ course.description }}
        </p>

        <ul class="mt-4 space-y-2 text-sm text-slate-600">
          <li
            v-for="item in course.highlights"
            :key="item"
            class="flex items-center gap-2"
          >
            <CheckCircle class="h-4 w-4 text-emerald-500" />
            <span>{{ item }}</span>
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import SectionTitle from '../shared/SectionTitle.vue'
import { courses } from '../../data/courses'
import {
  Cpu,
  Network,
  Palette,
  Database,
  CheckCircle,
} from 'lucide-vue-next'

const router = useRouter()

const goToDetail = (id: number) => {
  router.push(`/courses/${id}`)
}

const getCourseIcon = (name: string) => {
  if (name.includes('Computer')) return Cpu
  if (name.includes('Network')) return Network
  if (name.includes('Graphic')) return Palette
  if (name.includes('Information')) return Database
  return Cpu
}
</script>