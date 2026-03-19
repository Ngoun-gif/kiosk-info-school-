<template>
  <article
    @click="$emit('select', course.id)"
    class="group cursor-pointer rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl"
  >
    <!-- Top -->
    <div class="flex items-start justify-between gap-4">
      <div class="flex items-start gap-3">
        <div
          class="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-100 via-cyan-100 to-emerald-100 text-sky-700"
        >
          <BookOpen class="h-5 w-5" />
        </div>

        <div>
          <h3 class="text-lg font-bold text-slate-900 group-hover:text-sky-700">
            {{ course.name }}
          </h3>
          <p class="mt-1 text-sm text-sky-600">
            {{ course.duration }}
          </p>
        </div>
      </div>

      <span
        class="rounded-full px-3 py-1 text-xs font-semibold"
        :class="levelClass"
      >
        {{ course.level }}
      </span>
    </div>

    <!-- Description -->
    <p class="mt-4 text-sm text-slate-600 line-clamp-2">
      {{ course.description }}
    </p>

    <!-- Suitable For -->
    <div class="mt-4">
      <p class="text-xs font-semibold text-slate-500">Suitable for:</p>
      <ul class="mt-1 space-y-1 text-sm text-slate-600">
        <li v-for="item in course.suitableFor.slice(0, 2)" :key="item">
          • {{ item }}
        </li>
      </ul>
    </div>

    <!-- Skills -->
    <div class="mt-4 flex flex-wrap gap-2">
      <span
        v-for="skill in course.skills.slice(0, 3)"
        :key="skill"
        class="rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-700"
      >
        {{ skill }}
      </span>
    </div>

    <!-- Divider -->
    <div class="my-4 h-px bg-gradient-to-r from-sky-100 via-cyan-100 to-emerald-100"></div>

    <!-- Bottom Info -->
    <div class="space-y-2 text-xs text-slate-500">
      <p><strong>Study:</strong> {{ course.studyTime }}</p>
      <p><strong>Certification:</strong> {{ course.certification }}</p>
      <p class="text-emerald-600 font-medium">
        {{ course.internshipInfo }}
      </p>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { BookOpen } from 'lucide-vue-next'
import type { Course } from '@/data/courses'

const props = defineProps<{ course: Course }>()
defineEmits(['select'])

const levelClass = computed(() => {
  switch (props.course.level) {
    case 'Bachelor':
      return 'bg-sky-100 text-sky-700'
    case 'Master':
      return 'bg-emerald-100 text-emerald-700'
    case 'Creative':
      return 'bg-purple-100 text-purple-700'
    default:
      return 'bg-slate-100 text-slate-700'
  }
})
</script>
