<template>
  <section class="rounded-[28px] bg-white p-6 shadow-lg">
    <div class="flex items-start justify-between gap-4">
      <SectionTitle
        eyebrow="Latest Updates"
        title="Institute Announcements"
        description="Important notices for students, parents, and visitors."
      />

      <button
        @click="goToAnnouncements"
        class="hidden rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-200 md:inline-flex"
      >
        View all
      </button>
    </div>

    <div class="grid gap-4">
      <article
        v-for="item in previewAnnouncements"
        :key="item.id"
        @click="goToDetail(item.id)"
        class="group cursor-pointer rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl"
      >
        <div class="flex items-start gap-4">
          <div
            class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-100 via-cyan-100 to-emerald-100 text-sky-700"
          >
            <Megaphone class="h-6 w-6" />
          </div>

          <div class="min-w-0 flex-1">
            <div class="flex flex-wrap items-center gap-2">
              <span
                class="rounded-full px-3 py-1 text-xs font-semibold"
                :class="getCategoryClass(item.category)"
              >
                {{ item.category }}
              </span>

              <span class="text-xs text-slate-500">
                {{ item.date }}
              </span>
            </div>

            <h3
              class="mt-3 text-lg font-semibold text-slate-900 transition group-hover:text-sky-700"
            >
              {{ item.title }}
            </h3>

            <p class="mt-2 line-clamp-2 text-sm leading-7 text-slate-600">
              {{ item.description }}
            </p>
          </div>
        </div>

        <div
          class="my-4 h-px bg-gradient-to-r from-sky-100 via-cyan-100 to-emerald-100"
        ></div>

        <div class="flex items-center justify-between text-xs text-slate-500">
          <div class="flex items-center gap-1.5">
            <Clock class="h-4 w-4" />
            <span>Last updated: {{ item.date }}</span>
          </div>

          <div class="flex items-center gap-1.5">
            <User class="h-4 w-4" />
            <span class="font-medium text-slate-700">
              {{ item.author }}
            </span>
          </div>
        </div>
      </article>
    </div>

    <button
      @click="goToAnnouncements"
      class="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-200 md:hidden"
    >
      View all announcements
    </button>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { Megaphone, Clock, User } from 'lucide-vue-next'
import SectionTitle from '../shared/SectionTitle.vue'
import {
  announcements,
  type AnnouncementCategory,
} from '../../data/announcements'

const router = useRouter()

const previewAnnouncements = computed(() => announcements.slice(0, 3))

const goToDetail = (id: number) => {
  router.push({ name: 'announcement-detail', params: { id } })
}

const goToAnnouncements = () => {
  router.push({ name: 'announcements' })
}

const getCategoryClass = (category: AnnouncementCategory) => {
  switch (category) {
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
}
</script>
