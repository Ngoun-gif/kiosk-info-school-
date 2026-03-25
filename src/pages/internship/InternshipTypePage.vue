<template>
  <section class="space-y-6 rounded-[28px] bg-white p-6 shadow-lg">
    <div class="flex items-center gap-2 text-sky-700">
      <BriefcaseBusiness class="h-4 w-4" />
      <p class="text-sm font-semibold uppercase tracking-[0.2em]">
        Internship Category
      </p>
    </div>

    <article class="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
      <h2 class="text-2xl font-bold text-slate-900">
        {{ pageTitle }}
      </h2>

      <p class="mt-2 text-sm text-slate-500">
        Click any internship to view full details.
      </p>

      <div class="mt-6 flex flex-wrap gap-3">
        <button
          v-for="category in categories"
          :key="category.value"
          @click="goToCategory(category.value)"
          class="rounded-full px-4 py-2 text-sm font-semibold transition"
          :class="
            activeCategory === category.value
              ? 'bg-sky-500 text-white shadow-md'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          "
        >
          {{ category.label }}
        </button>
      </div>

      <div class="mt-6">
        <InternshipList :type="activeCategory" />
      </div>
    </article>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { BriefcaseBusiness } from 'lucide-vue-next'
import InternshipList from '@/components/internship/InternshipList.vue'

const route = useRoute()
const router = useRouter()

const categories = [
  { label: 'All', value: 'all' },
  { label: 'Information Technology', value: 'information-technology' },
  { label: 'Computer Science', value: 'computer-science' },
  { label: 'Information Systems', value: 'information-systems' },
  { label: 'Management', value: 'management' },
  { label: 'Human Resources', value: 'human-resources' },
  { label: 'Marketing', value: 'marketing' },
]

const activeCategory = computed(() => String(route.params.type || 'all'))

const pageTitle = computed(() => {
  switch (activeCategory.value) {
    case 'information-technology':
      return 'Information Technology Internships'
    case 'computer-science':
      return 'Computer Science Internships'
    case 'information-systems':
      return 'Information Systems Internships'
    case 'management':
      return 'Management Internships'
    case 'human-resources':
      return 'Human Resources Internships'
    case 'marketing':
      return 'Marketing Internships'
    default:
      return 'Internship Programs'
  }
})

const goToCategory = (category: string) => {
  router.push({
    name: 'internship-type',
    params: { type: category },
  })
}
</script>
