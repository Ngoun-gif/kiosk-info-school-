<template>
  <section class="rounded-[28px] bg-white p-6 shadow-lg">
    <div class="flex items-start justify-between gap-4">
      <SectionTitle
        eyebrow="Opportunities"
        title="Internship Tracks"
        description="Explore available internship opportunities and career development tracks."
      />

      <button
        @click="goToInternships"
        class="hidden rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-200 md:inline-flex"
      >
        View all
      </button>
    </div>

    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <article
        v-for="track in previewTracks"
        :key="track.id"
        @click="goToDetail(track.id)"
        class="group cursor-pointer rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl"
      >
        <div class="flex items-start gap-4">
          <div
            class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-100 via-cyan-100 to-emerald-100 text-sky-700"
          >
            <component :is="track.icon" class="h-6 w-6" />
          </div>

          <div class="min-w-0 flex-1">
            <div class="flex flex-wrap items-center gap-2">
              <span
                class="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700"
              >
                {{ track.department }}
              </span>

              <span
                class="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
              >
                {{ track.duration }}
              </span>
            </div>

            <h3
              class="mt-3 text-lg font-bold text-slate-900 transition group-hover:text-sky-700"
            >
              {{ track.title }}
            </h3>

            <p class="mt-2 line-clamp-3 text-sm leading-7 text-slate-600">
              {{ track.description }}
            </p>
          </div>
        </div>

        <div
          class="my-4 h-px bg-gradient-to-r from-sky-100 via-cyan-100 to-emerald-100"
        ></div>

        <div class="grid gap-3 sm:grid-cols-2">
          <div class="rounded-xl bg-slate-50 p-3">
            <p class="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
              Eligibility
            </p>
            <p class="mt-1 text-sm font-medium text-slate-700">
              {{ track.eligibility }}
            </p>
          </div>

          <div class="rounded-xl bg-slate-50 p-3">
            <p class="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
              Duration
            </p>
            <p class="mt-1 text-sm font-medium text-slate-700">
              {{ track.duration }}
            </p>
          </div>
        </div>
      </article>
    </div>

    <button
      @click="goToInternships"
      class="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-200 md:hidden"
    >
      View all internship tracks
    </button>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import SectionTitle from '../shared/SectionTitle.vue'
import { internshipTracks } from '@/data/internship'

const router = useRouter()

const previewTracks = computed(() => internshipTracks.slice(0, 4))

const goToDetail = (id: number) => {
  router.push({
    name: 'internship-track-detail',
    params: { id: String(id) },
  })
}

const goToInternships = () => {
  router.push({ name: 'internships' })
}
</script>
