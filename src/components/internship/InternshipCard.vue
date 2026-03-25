<template>
  <article
    @click="$emit('select', item.id)"
    class="group cursor-pointer rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-xl"
  >
    <div class="flex items-start gap-4">
      <div
        class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-100 via-cyan-100 to-emerald-100 text-sky-700"
      >
        <component :is="item.icon" class="h-5 w-5" />
      </div>

      <div class="min-w-0 flex-1">
        <div class="flex flex-wrap items-center gap-2">
          <span
            class="rounded-full px-3 py-1 text-xs font-semibold"
            :class="departmentBadgeClass"
          >
            {{ item.department }}
          </span>

          <span
            class="rounded-full px-3 py-1 text-xs font-semibold"
            :class="eligibilityBadgeClass"
          >
            {{ item.eligibility }}
          </span>
        </div>

        <h3
          class="mt-3 line-clamp-2 text-lg font-semibold text-slate-900 transition group-hover:text-sky-700"
        >
          {{ item.title }}
        </h3>

        <p class="mt-2 line-clamp-3 text-sm leading-7 text-slate-600">
          {{ item.description }}
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
          <span>{{ item.duration }}</span>
        </div>

        <div class="flex items-center gap-1.5">
          <GraduationCap class="h-4 w-4" />
          <span class="font-medium text-slate-700">
            {{ item.eligibility }}
          </span>
        </div>
      </div>

      <p class="line-clamp-2 text-xs leading-6 text-emerald-600">
        Explore internship training, responsibilities, and practical experience.
      </p>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Clock3, GraduationCap } from 'lucide-vue-next'
import type { InternshipTrackItem } from '@/data/internship'

const props = defineProps<{
  item: InternshipTrackItem
}>()

defineEmits<{
  (e: 'select', id: number): void
}>()

const departmentBadgeClass = computed(() => {
  switch (props.item.department) {
    case 'Information Technology':
      return 'bg-blue-100 text-blue-700'
    case 'Computer Science':
      return 'bg-cyan-100 text-cyan-700'
    case 'Information Systems':
      return 'bg-indigo-100 text-indigo-700'
    case 'Management':
      return 'bg-amber-100 text-amber-700'
    case 'Human Resources':
      return 'bg-rose-100 text-rose-700'
    case 'Marketing':
      return 'bg-purple-100 text-purple-700'
    default:
      return 'bg-slate-100 text-slate-700'
  }
})

const eligibilityBadgeClass = computed(() => {
  const value = props.item.eligibility.toLowerCase()

  if (value.includes('qualified')) {
    return 'bg-emerald-100 text-emerald-700'
  }

  if (value.includes('senior')) {
    return 'bg-sky-100 text-sky-700'
  }

  return 'bg-slate-100 text-slate-700'
})
</script>
