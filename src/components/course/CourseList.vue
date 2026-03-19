<template>
  <section class="space-y-6">
    <!-- Filter -->
    <div class="flex flex-wrap gap-3">
      <button
        v-for="category in categories"
        :key="category"
        @click="selectedCategory = category"
        class="rounded-full px-4 py-2 text-sm font-semibold transition"
        :class="
          selectedCategory === category
            ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-md'
            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
        "
      >
        {{ category }}
      </button>
    </div>

    <!-- Cards -->
    <div class="grid gap-5 md:grid-cols-2">
      <CourseCard
        v-for="course in filteredCourses"
        :key="course.id"
        :course="course"
        @select="goToDetail"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import CourseCard from './CourseCard.vue'
import { courses } from '@/data/courses'

const router = useRouter()

const categories = ['All', 'Technology', 'Business & Leadership', 'Creative']

const selectedCategory = ref('All')

const filteredCourses = computed(() => {
  if (selectedCategory.value === 'All') return courses

  return courses.filter((c) =>
    c.category.includes(selectedCategory.value),
  )
})

const goToDetail = (id: number) => {
  router.push({ name: 'course-detail', params: { id } })
}
</script>
