<template>
  <article
    @click="$emit('select', item.id)"
    class="group cursor-pointer rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl"
  >
    <div class="flex items-start gap-4">
      <div
        class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-100 via-cyan-100 to-emerald-100 text-sky-700"
      >
        <component :is="item.icon" class="h-6 w-6" />
      </div>

      <div class="min-w-0 flex-1">
        <div class="flex flex-wrap items-center gap-2">
          <span
            class="rounded-full px-3 py-1 text-xs font-semibold"
            :class="trackBadgeClass"
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
          class="mt-3 text-lg font-bold text-slate-900 transition group-hover:text-sky-700"
        >
          {{ item.title }}
        </h3>

        <p class="mt-2 line-clamp-3 text-sm leading-7 text-slate-600">
          {{ item.description }}
        </p>
      </div>
    </div>

    <div class="my-4 h-px bg-gradient-to-r from-sky-100 via-cyan-100 to-emerald-100"></div>

    <div class="grid gap-3 sm:grid-cols-2">
      <div class="rounded-xl bg-slate-50 p-3">
        <p class="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
          Eligibility
        </p>
        <p class="mt-1 text-sm font-medium text-slate-700">
          {{ item.eligibility }}
        </p>
      </div>

      <div class="rounded-xl bg-slate-50 p-3">
        <p class="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
          Duration
        </p>
        <p class="mt-1 text-sm font-medium text-slate-700">
          {{ item.duration }}
        </p>
      </div>
    </div>

    <div class="mt-4 flex items-center justify-between">
      <p class="text-sm text-slate-500">
        Explore track details
      </p>

      <span class="text-sm font-semibold text-sky-600">
        View more →
      </span>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { InternshipTrackItem } from '@/data/internship'

const props = defineProps<{
  item: InternshipTrackItem
}>()

defineEmits<{
  (e: 'select', id: number): void
}>()

const trackBadgeClass = computed(() => {
  switch (props.item.id) {
    case 1:
      return 'bg-blue-100 text-blue-700'
    case 2:
      return 'bg-cyan-100 text-cyan-700'
    case 3:
      return 'bg-indigo-100 text-indigo-700'
    case 4:
      return 'bg-amber-100 text-amber-700'
    case 5:
      return 'bg-rose-100 text-rose-700'
    case 6:
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
