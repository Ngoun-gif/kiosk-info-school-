<template>
  <section class="space-y-6 rounded-[28px] bg-white p-6 shadow-lg">
    <div class="flex items-center gap-2 text-sky-700">
      <BookOpen class="h-4 w-4" />
      <p class="text-sm font-semibold uppercase tracking-[0.2em]">
        Course Category
      </p>
    </div>

    <article class="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
      <h2 class="text-2xl font-bold text-slate-900">
        {{ pageTitle }} List
      </h2>

      <p class="mt-2 text-sm text-slate-500">
        Click any course to view full details
      </p>

      <div class="mt-6">
        <CourseList :type="courseType" />
      </div>
    </article>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { BookOpen } from 'lucide-vue-next'
import CourseList from '@/components/course/CourseList.vue'

const route = useRoute()

const courseType = computed(() => String(route.params.type || 'technology'))

const pageTitle = computed(() => {
  switch (courseType.value) {
    case 'technology':
      return 'Technology Programs'
    case 'business':
      return 'Business Programs'
    case 'creative':
      return 'Creative & Design Programs'
    default:
      return 'Courses'
  }
})
</script>
