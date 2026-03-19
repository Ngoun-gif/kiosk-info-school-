<template>
  <article
    @click="$emit('select', announcement.id)"
    class="group cursor-pointer rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-xl"
  >
    <div class="flex items-start gap-4">
      <div
        class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-100 via-cyan-100 to-emerald-100 text-sky-700"
      >
        <Megaphone class="h-5 w-5" />
      </div>

      <div class="min-w-0 flex-1">
        <div class="flex flex-wrap items-center gap-2">
          <span
            class="rounded-full px-3 py-1 text-xs font-semibold"
            :class="badgeClass"
          >
            {{ announcement.category }}
          </span>

          <span class="text-xs text-slate-500">
            {{ announcement.date }}
          </span>
        </div>

        <h3
          class="mt-3 line-clamp-2 text-lg font-semibold text-slate-900 transition group-hover:text-sky-700"
        >
          {{ announcement.title }}
        </h3>

        <p class="mt-2 line-clamp-3 text-sm leading-7 text-slate-600">
          {{ announcement.description }}
        </p>
      </div>
    </div>

    <div
      class="my-4 h-px bg-gradient-to-r from-sky-100 via-cyan-100 to-emerald-100"
    ></div>

    <div class="flex items-center justify-between text-xs text-slate-500">
      <div class="flex items-center gap-1.5">
        <Clock class="h-4 w-4" />
        <span>Last updated: {{ announcement.date }}</span>
      </div>

      <div class="flex items-center gap-1.5">
        <User class="h-4 w-4" />
        <span class="font-medium text-slate-700">
          {{ announcement.author }}
        </span>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Megaphone, Clock, User } from 'lucide-vue-next'
import type { AnnouncementItem } from '@/data/announcements'

const props = defineProps<{
  announcement: AnnouncementItem
}>()

defineEmits<{
  (e: 'select', id: number): void
}>()

const badgeClass = computed(() => {
  switch (props.announcement.category) {
    case 'Academic':
      return 'bg-blue-100 text-blue-700'
    case 'Events':
      return 'bg-purple-100 text-purple-700'
    case 'Holiday':
      return 'bg-emerald-100 text-emerald-700'
    case 'Internship':
      return 'bg-amber-100 text-amber-700'
    case 'General':
      return 'bg-slate-100 text-slate-700'
    default:
      return 'bg-slate-100 text-slate-700'
  }
})
</script>
