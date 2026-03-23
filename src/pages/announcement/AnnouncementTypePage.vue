<template>
  <section class="space-y-6 rounded-[28px] bg-white p-6 shadow-lg">
    <div class="flex items-center gap-2 text-sky-700">
      <Megaphone class="h-4 w-4" />
      <p class="text-sm font-semibold uppercase tracking-[0.2em]">
        Announcement Category
      </p>
    </div>



    <article class="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
      <h2 class="text-2xl font-bold text-slate-900">
        {{ pageTitle }} List
      </h2>

      <p class="mt-2 text-sm text-slate-500">
        Click any announcement to view full details
      </p>

      <div class="mt-6">
        <AnnouncementList />
      </div>
    </article>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { Megaphone } from 'lucide-vue-next'
import AnnouncementList from '@/components/announcements/AnnouncementList.vue'

const route = useRoute()

const announcementType = computed(() => String(route.params.type || 'general'))

const pageTitle = computed(() => {
  switch (announcementType.value) {
    case 'academic':
      return 'Academic Announcements'
    case 'event':
      return 'Campus Events'
    case 'holiday':
      return 'Holiday & Schedule Notices'
    case 'internship':
      return 'Internship Opportunities'
    case 'general':
      return 'General Announcements'
    default:
      return 'Announcements'
  }
})


</script>
