<template>
  <section class="space-y-6">
    <div class="flex flex-wrap gap-3">
      <button
        v-for="category in categories"
        :key="category"
        @click="selectedCategory = category"
        class="rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200"
        :class="
          selectedCategory === category
            ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-md'
            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
        "
      >
        {{ category }}
      </button>
    </div>

    <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-2">
      <AnnouncementCard
        v-for="announcement in filteredAnnouncements"
        :key="announcement.id"
        :announcement="announcement"
        @select="goToDetail"
      />
    </div>

    <section
      v-if="filteredAnnouncements.length === 0"
      class="rounded-[28px] border border-dashed border-slate-300 bg-white p-8 text-center shadow-sm"
    >
      <h2 class="text-xl font-bold text-slate-900">No announcements found</h2>
      <p class="mt-2 text-slate-600">
        There are no announcements available in this category yet.
      </p>
    </section>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import AnnouncementCard from './AnnouncementCard.vue'
import {
  announcements,
  type AnnouncementCategory,
} from '@/data/announcements'

type FilterCategory = 'All' | AnnouncementCategory

const router = useRouter()

const categories: FilterCategory[] = [
  'All',
  'Academic',
  'Events',
  'Holiday',
  'Internship',
  'General',
]

const selectedCategory = ref<FilterCategory>('All')

const filteredAnnouncements = computed(() => {
  if (selectedCategory.value === 'All') return announcements

  return announcements.filter(
    (item) => item.category === selectedCategory.value,
  )
})

const goToDetail = (id: number) => {
  router.push({ name: 'announcement-detail', params: { id } })
}
</script>
