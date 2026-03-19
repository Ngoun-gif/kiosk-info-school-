<template>
  <section class="space-y-6 rounded-[28px] bg-white p-6 shadow-lg">
    <div class="flex items-center gap-2 text-sky-700">
      <BriefcaseBusiness class="h-4 w-4" />
      <p class="text-sm font-semibold uppercase tracking-[0.2em]">
        {{ internshipHero.eyebrow }}
      </p>
    </div>

    <h1 class="text-3xl font-bold text-slate-900">
      {{ internshipHero.title }}
    </h1>

    <article class="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
      <div class="flex items-start gap-4">
        <div
          class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-100 text-sky-600"
        >
          <BriefcaseBusiness class="h-6 w-6" />
        </div>

        <div class="min-w-0">
          <h2 class="text-2xl font-bold text-slate-900">
            Internship Overview
          </h2>

          <p class="mt-2 text-sm leading-7 text-slate-600">
            {{ internshipHero.description }}
          </p>

          <div class="mt-5 flex flex-wrap gap-3">
            <span
              v-for="badge in internshipHero.badges"
              :key="badge"
              class="rounded-full bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
            >
              {{ badge }}
            </span>
          </div>

          <div class="mt-5 grid gap-3 md:grid-cols-2">
            <div
              v-for="item in overviewItems"
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

    <div class="grid gap-4 md:grid-cols-3">
      <article
        v-for="item in internshipStats"
        :key="item.label"
        class="rounded-[24px] border border-slate-200 bg-slate-50 p-5"
      >
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          {{ item.label }}
        </p>
        <p class="mt-3 text-lg font-bold text-slate-900">
          {{ item.value }}
        </p>
      </article>
    </div>

    <article class="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
      <div>
        <h2 class="text-2xl font-bold text-slate-900">
          Available Internship Tracks
        </h2>
        <p class="mt-2 text-sm text-slate-500">
          Explore internship paths based on department and career interest.
        </p>
      </div>

      <div class="mt-6">
        <InternshipList />
      </div>
    </article>
  </section>
</template>

<script setup lang="ts">
import { BriefcaseBusiness, CheckCircle2 } from 'lucide-vue-next'
import InternshipList from '@/components/internship/InternshipList.vue'
import {
  internshipHero,
  internshipStats,
  overviewParagraphs,
  objectives,
} from '@/data/internship'

const overviewItems = [
  ...overviewParagraphs,
  ...objectives.slice(0, 4),
]
</script>
