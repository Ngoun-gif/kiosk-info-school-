<template>
  <div class="space-y-6">
    <section
      v-if="announcement"
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
          ← Back to Announcements
        </button>

        <div class="flex flex-wrap items-start justify-between gap-4">
          <div class="min-w-0">
            <div class="flex items-center gap-2 text-sky-700">
              <Megaphone class="h-4 w-4" />
              <p class="text-sm font-semibold uppercase tracking-[0.2em]">
                Announcement
              </p>
            </div>

            <h1 class="mt-3 text-3xl font-bold leading-tight text-slate-900">
              {{ announcement.title }}
            </h1>

            <div class="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-500">
              <span
                class="rounded-full px-3 py-1 text-xs font-semibold"
                :class="getCategoryClass(announcement.category)"
              >
                {{ announcement.category }}
              </span>
            </div>
          </div>

          <span
            class="shrink-0 rounded-full bg-gradient-to-r from-sky-100 via-cyan-100 to-emerald-100 px-4 py-2 text-sm font-semibold text-sky-700 shadow-sm"
          >
            {{ announcement.date }}
          </span>
        </div>

        <div
          class="mt-6 rounded-2xl border border-sky-100 bg-gradient-to-r from-sky-50 via-cyan-50 to-emerald-50 p-5"
        >
          <p class="text-lg font-medium leading-8 text-slate-800">
            {{ announcement.description }}
          </p>
        </div>

        <div class="mt-8 space-y-5 text-[15px] leading-8 text-slate-700">
          <p
            v-for="(paragraph, index) in contentParagraphs"
            :key="index"
          >
            {{ paragraph }}
          </p>
        </div>

        <div
          class="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-6 text-sm text-slate-400"
        >
          <div class="flex items-center gap-2">
            <Clock class="h-4 w-4" />
            <span>Last updated: {{ announcement.date }}</span>
          </div>

          <div class="flex items-center gap-2">
            <User class="h-4 w-4 text-sky-600" />
            <span>
              Article by
              <span class="font-semibold text-slate-700">
                {{ announcement.author }}
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>

    <section
      v-if="announcement && relatedAnnouncements.length"
      class="rounded-[28px] bg-white p-8 shadow-lg"
    >
      <div class="mb-6">
        <div class="flex items-center gap-2 text-sky-700">
          <Megaphone class="h-4 w-4" />
          <p class="text-sm font-semibold uppercase tracking-[0.2em]">
            More Updates
          </p>
        </div>

        <h2 class="mt-2 text-2xl font-bold text-slate-900">
          Related Announcements
        </h2>
        <p class="mt-2 text-slate-600">
          Explore more important notices and school updates.
        </p>
      </div>

      <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-2">
        <article
          v-for="item in relatedAnnouncements"
          :key="item.id"
          @click="goToDetail(item.id)"
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
                  :class="getCategoryClass(item.category)"
                >
                  {{ item.category }}
                </span>

                <span class="text-xs text-slate-500">
                  {{ item.date }}
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
    </section>

    <section v-else class="rounded-[28px] bg-white p-8 text-center shadow-lg">
      <h1 class="text-2xl font-bold text-slate-900">Announcement not found</h1>
      <p class="mt-2 text-slate-600">
        The announcement you are looking for does not exist.
      </p>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted } from 'vue'
import { useRoute, useRouter, onBeforeRouteUpdate } from 'vue-router'
import { Megaphone, Clock, User } from 'lucide-vue-next'
import {
  announcements,
  type AnnouncementCategory,
} from '../data/announcements'

const route = useRoute()
const router = useRouter()

const scrollToTop = async () => {
  await nextTick()

  const scrollContainer = document.getElementById('app-scroll-container')

  if (scrollContainer) {
    scrollContainer.scrollTo({
      top: 0,
      behavior: 'auto',
    })
  }
}

const announcement = computed(() =>
  announcements.find((item) => item.id === Number(route.params.id)),
)

const contentParagraphs = computed(() => {
  if (!announcement.value?.content) return []

  return announcement.value.content
    .split('\n')
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
})

const relatedAnnouncements = computed(() => {
  const currentId = Number(route.params.id)

  return announcements.filter((item) => item.id !== currentId).slice(0, 4)
})

const goToDetail = async (id: number) => {
  if (Number(route.params.id) === id) return

  await router.push({
    name: 'announcement-detail',
    params: { id },
  })
}

const goBack = () => {
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

onMounted(() => {
  scrollToTop()
})

onBeforeRouteUpdate(async (_to, _from, next) => {
  next()
  await scrollToTop()
})
</script>
