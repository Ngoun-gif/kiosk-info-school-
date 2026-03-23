<template>
  <section
    v-if="items.length"
    class="rounded-[28px] bg-white p-8 shadow-lg"
  >
    <div class="mb-6">
      <div class="flex items-center gap-2 text-sky-700">
        <BookOpen class="h-4 w-4" />
        <p class="text-sm font-semibold uppercase tracking-[0.2em]">
          More Programs
        </p>
      </div>

      <h2 class="mt-2 text-2xl font-bold text-slate-900">
        Related Courses
      </h2>
      <p class="mt-2 text-slate-600">
        Explore more programs related to this field of study.
      </p>
    </div>

    <div class="grid gap-5 md:grid-cols-2">
      <CourseCard
        v-for="item in visibleItems"
        :key="item.id"
        :course="item"
        @select="goToDetail"
      />
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
import { computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { BookOpen } from 'lucide-vue-next'
import CourseCard from '@/components/course/CourseCard.vue'
import type { Course } from '@/data/courses'

const props = defineProps<{
  items: Course[]
}>()

const router = useRouter()

const defaultLimit = 2
const expanded = ref(false)

const visibleItems = computed(() => {
  if (expanded.value) return props.items
  return props.items.slice(0, defaultLimit)
})

const toggleShow = () => {
  expanded.value = !expanded.value
}

const goToDetail = (id: number) => {
  router.push({
    name: 'course-detail',
    params: { id },
  })
}

watch(
  () => props.items,
  () => {
    expanded.value = false
  },
)
</script>
