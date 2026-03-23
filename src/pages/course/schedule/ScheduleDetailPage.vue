<template>
  <section
    v-if="schedule"
    class="mt-8"
  >
    <div class="flex items-center gap-2 text-sky-700">
      <CalendarDays class="h-5 w-5" />
      <h2 class="text-xl font-bold text-slate-900">Schedule Detail</h2>
    </div>

    <p class="mt-2 text-slate-600">
      {{ schedule.description }}
    </p>

    <div class="mt-5 grid gap-4">
      <article
        v-for="session in schedule.sessions"
        :key="`${session.shift}-${session.days}-${session.time}`"
        class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
      >
        <div
          class="border-b border-slate-200 bg-gradient-to-r from-sky-50 via-cyan-50 to-emerald-50 p-4"
        >
          <div class="flex flex-wrap items-center justify-between gap-3">
            <h3 class="text-lg font-semibold text-slate-900">
              {{ session.shift }}
            </h3>

            <span
              class="rounded-full bg-white px-3 py-1 text-xs font-semibold text-sky-700 shadow-sm"
            >
              {{ session.days }}
            </span>
          </div>
        </div>

        <div class="grid gap-4 p-4 md:grid-cols-3">
          <div class="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p class="text-xs font-semibold uppercase tracking-[0.15em] text-sky-700">
              Days
            </p>
            <p class="mt-2 text-sm font-medium text-slate-800">
              {{ session.days }}
            </p>
          </div>

          <div class="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p class="text-xs font-semibold uppercase tracking-[0.15em] text-sky-700">
              Time
            </p>
            <p class="mt-2 text-sm font-medium text-slate-800">
              {{ session.time }}
            </p>
          </div>

          <div class="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p class="text-xs font-semibold uppercase tracking-[0.15em] text-sky-700">
              Room
            </p>
            <p class="mt-2 text-sm font-medium text-slate-800">
              {{ session.room }}
            </p>
          </div>
        </div>

        <div v-if="session.note" class="px-4 pb-4">
          <div class="rounded-xl bg-emerald-50 p-4 text-sm text-emerald-700">
            {{ session.note }}
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { CalendarDays } from 'lucide-vue-next'
import type { CourseSchedule } from '@/data/schedule'

defineProps<{
  schedule?: CourseSchedule
}>()
</script>
