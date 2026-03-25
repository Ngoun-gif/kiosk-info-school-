<template>
  <div class="space-y-6">
    <section
      v-if="track"
      class="relative overflow-hidden rounded-[28px] bg-white p-8 shadow-lg"
    >
      <div
        class="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-sky-100/70 blur-2xl"
      ></div>
      <div
        class="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-emerald-100/60 blur-2xl"
      ></div>

      <div class="relative">
        <button
          @click="goBack"
          class="mb-5 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
        >
          ← Back to Internship Type
        </button>

        <div class="flex flex-wrap items-start justify-between gap-4">
          <div class="min-w-0">
            <div class="flex items-center gap-2 text-sky-700">
              <component :is="trackIcon" class="h-5 w-5" />
              <p class="text-sm font-semibold uppercase tracking-[0.2em]">
                Internship Track
              </p>
            </div>

            <h1 class="mt-3 text-3xl font-bold leading-tight text-slate-900">
              {{ track.title }}
            </h1>

            <div class="mt-4 flex flex-wrap items-center gap-3">
              <span
                class="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700"
              >
                {{ track.department }}
              </span>

              <span
                class="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
              >
                {{ track.duration }}
              </span>

              <span
                class="rounded-full bg-gradient-to-r from-sky-100 via-cyan-100 to-emerald-100 px-4 py-2 text-sm font-medium text-sky-700"
              >
                {{ track.eligibility }}
              </span>
            </div>
          </div>

          <div
            class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-100 via-cyan-100 to-emerald-100 text-sky-700 shadow-sm"
          >
            <component :is="trackIcon" class="h-8 w-8" />
          </div>
        </div>

        <div
          class="mt-6 rounded-2xl border border-sky-100 bg-gradient-to-r from-sky-50 via-cyan-50 to-emerald-50 p-5"
        >
          <p class="text-lg font-medium leading-8 text-slate-800">
            {{ track.description }}
          </p>
        </div>

        <div class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div class="rounded-2xl bg-slate-50 p-4">
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Duration
            </p>
            <p class="mt-2 text-sm font-semibold text-slate-900">
              {{ track.duration }}
            </p>
          </div>

          <div class="rounded-2xl bg-slate-50 p-4">
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Eligibility
            </p>
            <p class="mt-2 text-sm font-semibold text-slate-900">
              {{ track.eligibility }}
            </p>
          </div>

          <div class="rounded-2xl bg-slate-50 p-4">
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Location
            </p>
            <p class="mt-2 text-sm font-semibold text-slate-900">
              {{ track.location }}
            </p>
          </div>
        </div>

        <article class="mt-8 rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
          <div class="flex items-start gap-4">
            <div
              class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-100 text-sky-600"
            >
              <BriefcaseBusiness class="h-6 w-6" />
            </div>

            <div class="min-w-0">
              <h2 class="text-2xl font-bold text-slate-900">
                Internship Overview & Key Information
              </h2>

              <p class="mt-2 text-sm leading-7 text-slate-600">
                {{ track.overview }}
              </p>

              <div class="mt-5 flex flex-wrap gap-3">
                <span
                  v-for="item in track.objectives"
                  :key="item"
                  class="rounded-full bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
                >
                  {{ item }}
                </span>
              </div>

              <div class="mt-6 grid gap-3 md:grid-cols-2">
                <div
                  v-for="item in combinedItems"
                  :key="item.key"
                  class="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4"
                >
                  <CheckCircle class="mt-0.5 h-5 w-5 shrink-0" :class="item.iconClass" />

                  <div>
                    <p class="text-sm font-semibold text-slate-800">
                      {{ item.group }}
                    </p>
                    <p class="mt-1 text-sm leading-7 text-slate-600">
                      {{ item.text }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        <article class="mt-8 rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
          <div class="flex items-center gap-3">
            <div
              class="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-600"
            >
              <CalendarDays class="h-6 w-6" />
            </div>

            <div>
              <h2 class="text-2xl font-bold text-slate-900">Important Dates</h2>
              <p class="text-sm text-slate-500">
                Key milestones for this internship track
              </p>
            </div>
          </div>

          <div class="mt-6 grid gap-4 md:grid-cols-2">
            <div
              v-for="date in track.importantDates"
              :key="date.title"
              class="rounded-2xl border border-slate-100 bg-slate-50 p-4"
            >
              <p class="text-sm font-semibold text-slate-900">
                {{ date.title }}
              </p>
              <p class="mt-1 text-sm text-slate-600">
                {{ date.value }}
              </p>
            </div>
          </div>
        </article>

        <div class="mt-8">
          <RelatedInternship :items="relatedTracks" />
        </div>
      </div>
    </section>

    <section
      v-else
      class="rounded-[28px] bg-white p-8 text-center shadow-lg"
    >
      <h2 class="text-2xl font-bold text-slate-900">
        Internship Not Found
      </h2>
      <p class="mt-3 text-slate-600">
        The internship you selected does not exist.
      </p>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted } from 'vue'
import { useRoute, useRouter, onBeforeRouteUpdate } from 'vue-router'
import {
  CheckCircle,
  BriefcaseBusiness,
  CalendarDays,
} from 'lucide-vue-next'
import RelatedInternship from '../internship/InternshipRelatedPgae.vue'
import { internshipDetails, internshipTracks } from '@/data/internship'

const route = useRoute()
const router = useRouter()

const internshipTypeMap: Record<number, string> = {
  1: 'web-development',
  2: 'software-engineering',
  3: 'database-administration',
  4: 'business-administration',
  5: 'human-resource',
  6: 'marketing',
}

const scrollToTop = async () => {
  await nextTick()

  const scrollContainer = document.getElementById('app-scroll-container')

  if (scrollContainer) {
    scrollContainer.scrollTo({
      top: 0,
      behavior: 'auto',
    })
  } else {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    })
  }
}

const track = computed(() => {
  const id = Number(route.params.id)
  return internshipDetails.find((item) => item.id === id)
})

const trackIcon = computed(() => {
  const current = internshipTracks.find(
    (item) => item.id === Number(route.params.id),
  )
  return current?.icon ?? BriefcaseBusiness
})

const combinedItems = computed(() => {
  if (!track.value) return []

  return [
    ...track.value.requirements.map((text, index) => ({
      key: `requirement-${index}-${text}`,
      group: 'Requirement',
      text,
      iconClass: 'text-sky-600',
    })),
    ...track.value.responsibilities.map((text, index) => ({
      key: `responsibility-${index}-${text}`,
      group: 'Responsibility',
      text,
      iconClass: 'text-emerald-600',
    })),
    ...track.value.benefits.map((text, index) => ({
      key: `benefit-${index}-${text}`,
      group: 'Benefit',
      text,
      iconClass: 'text-purple-600',
    })),
  ]
})

const relatedTracks = computed(() => {
  const current = track.value
  if (!current) return []

  const sameDepartment = internshipTracks.filter(
    (item) =>
      item.department === current.department &&
      item.id !== current.id
  )

  const others = internshipTracks.filter(
    (item) =>
      item.department !== current.department &&
      item.id !== current.id
  )

  return [...sameDepartment, ...others]
})
const goBack = () => {
  const id = Number(route.params.id)
  const type = internshipTypeMap[id]

  if (type) {
    router.push({
      name: 'internship-type',
      params: { type },
    })
    return
  }

  router.push({ name: 'internships' })
}

onMounted(() => {
  scrollToTop()
})

onBeforeRouteUpdate(async (_to, _from, next) => {
  next()
  await scrollToTop()
})
</script>
