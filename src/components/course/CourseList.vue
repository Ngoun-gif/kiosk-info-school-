<template>
  <section class="space-y-6">
    <div class="flex flex-wrap gap-3">
      <button
        v-for="category in categories"
        :key="category.value"
        @click="selectedCategory = category.value"
        class="rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200"
        :class="
          selectedCategory === category.value
            ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-md'
            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
        "
      >
        {{ category.label }}
      </button>
    </div>

    <div class="grid gap-5 md:grid-cols-2">
      <CourseCard
        v-for="course in filteredCourses"
        :key="course.id"
        :course="course"
        @select="goToDetail"
      />
    </div>

    <section
      v-if="filteredCourses.length === 0"
      class="rounded-[28px] border border-dashed border-slate-300 bg-white p-8 text-center shadow-sm"
    >
      <h2 class="text-xl font-bold text-slate-900">No courses found</h2>
      <p class="mt-2 text-slate-600">
        There are no courses available in this category yet.
      </p>
    </section>
  </section>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import CourseCard from './CourseCard.vue'
import { courses } from '@/data/courses'

type FilterCategory = 'all' | 'technology' | 'business' | 'creative'

const props = defineProps<{
  type?: string
}>()

const router = useRouter()

const categories: { label: string; value: FilterCategory }[] = [
  { label: 'All', value: 'all' },
  { label: 'Technology', value: 'technology' },
  { label: 'Business', value: 'business' },
  { label: 'Creative', value: 'creative' },
]

function normalizeType(value?: string): FilterCategory {
  const type = String(value || 'all').toLowerCase()

  if (type === 'technology' || type === 'business' || type === 'creative') {
    return type
  }

  return 'all'
}

const selectedCategory = ref<FilterCategory>(normalizeType(props.type))

watch(
  () => props.type,
  (newValue) => {
    selectedCategory.value = normalizeType(newValue)
  },
)

const filteredCourses = computed(() => {
  if (selectedCategory.value === 'all') return courses

  return courses.filter((course) => {
    const category = course.category.toLowerCase()

    if (selectedCategory.value === 'technology') {
      return category.includes('technology')
    }

    if (selectedCategory.value === 'business') {
      return category.includes('business')
    }

    if (selectedCategory.value === 'creative') {
      return category.includes('creative')
    }

    return true
  })
})

const goToDetail = (id: number) => {
  router.push({ name: 'course-detail', params: { id } })
}
</script>
