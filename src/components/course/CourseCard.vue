<template>
  <article
    @click="$emit('select', course.id)"
    class="group cursor-pointer rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-xl"
  >
    <div class="flex items-start gap-4">
      <div
        class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-100 via-cyan-100 to-emerald-100 text-sky-700"
      >
        <component :is="courseIcon" class="h-5 w-5" />
      </div>

      <div class="min-w-0 flex-1">
        <div class="flex flex-wrap items-center gap-2">
          <span
            class="rounded-full px-3 py-1 text-xs font-semibold"
            :class="categoryBadgeClass"
          >
            {{ displayCategory }}
          </span>

          <span
            class="rounded-full px-3 py-1 text-xs font-semibold"
            :class="levelClass"
          >
            {{ course.level }}
          </span>
        </div>

        <h3
          class="mt-3 line-clamp-2 text-lg font-semibold text-slate-900 transition group-hover:text-sky-700"
        >
          {{ course.name }}
        </h3>

        <p class="mt-2 line-clamp-3 text-sm leading-7 text-slate-600">
          {{ course.description }}
        </p>
      </div>
    </div>

    <div
      class="my-4 h-px bg-gradient-to-r from-sky-100 via-cyan-100 to-emerald-100"
    ></div>

    <div class="space-y-3">
      <div class="flex items-center justify-between text-xs text-slate-500">
        <div class="flex items-center gap-1.5">
          <Clock3 class="h-4 w-4" />
          <span>{{ course.duration }}</span>
        </div>

        <div class="flex items-center gap-1.5">
          <GraduationCap class="h-4 w-4" />
          <span class="font-medium text-slate-700">
            {{ course.certification }}
          </span>
        </div>
      </div>

      <div class="flex flex-wrap gap-2">
        <span
          v-for="skill in course.skills.slice(0, 3)"
          :key="skill"
          class="rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700"
        >
          {{ skill }}
        </span>
      </div>

      <p class="line-clamp-2 text-xs leading-6 text-emerald-600">
        {{ course.internshipInfo }}
      </p>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import {
  BookOpen,
  BriefcaseBusiness,
  Palette,
  MonitorSmartphone,
  Clock3,
  GraduationCap,
} from 'lucide-vue-next'
import type { Course } from '@/data/courses'

const props = defineProps<{
  course: Course
}>()

defineEmits<{
  (e: 'select', id: number): void
}>()

const normalizedCategory = computed(() => {
  const value = props.course.category.toLowerCase()

  if (value.includes('creative')) return 'creative'
  if (value.includes('business')) return 'business'
  if (value.includes('technology')) return 'technology'

  return 'technology'
})

const displayCategory = computed(() => {
  switch (normalizedCategory.value) {
    case 'technology':
      return 'Technology'
    case 'business':
      return 'Business'
    case 'creative':
      return 'Creative'
    default:
      return 'Course'
  }
})

const courseIcon = computed(() => {
  switch (normalizedCategory.value) {
    case 'technology':
      return MonitorSmartphone
    case 'business':
      return BriefcaseBusiness
    case 'creative':
      return Palette
    default:
      return BookOpen
  }
})

const categoryBadgeClass = computed(() => {
  switch (normalizedCategory.value) {
    case 'technology':
      return 'bg-blue-100 text-blue-700'
    case 'business':
      return 'bg-amber-100 text-amber-700'
    case 'creative':
      return 'bg-purple-100 text-purple-700'
    default:
      return 'bg-slate-100 text-slate-700'
  }
})

const levelClass = computed(() => {
  switch (props.course.level) {
    case 'Bachelor':
      return 'bg-sky-100 text-sky-700'
    case 'Master':
      return 'bg-emerald-100 text-emerald-700'
    case 'Diploma':
      return 'bg-cyan-100 text-cyan-700'
    case 'Certificate':
      return 'bg-violet-100 text-violet-700'
    default:
      return 'bg-slate-100 text-slate-700'
  }
})
</script>
