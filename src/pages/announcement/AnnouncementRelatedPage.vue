<template>
  <section
    v-if="items.length"
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
        v-for="item in visibleItems"
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

    <div
      v-if="items.length > defaultLimit"
      class="mt-6 flex justify-center"
    >
      <button
        @click="toggleShow"
        class="rounded-full bg-slate-100 px-5 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
      >
        {{ expanded ? 'Show Less' : 'Show More' }}
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { Megaphone, Clock, User } from 'lucide-vue-next'
import type { AnnouncementItem, AnnouncementCategory } from '@/data/announcements'

const props = defineProps<{
  items: AnnouncementItem[]
}>()

const router = useRouter()

const defaultLimit = 4
const expanded = ref(false)

const visibleItems = computed(() => {
  if (expanded.value) return props.items
  return props.items.slice(0, defaultLimit)
})

const toggleShow = () => {
  expanded.value = !expanded.value
}

const goToDetail = async (id: number) => {
  await router.push({
    name: 'announcement-detail',
    params: { id },
  })
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
