<template>
  <section class="space-y-6">
    <div class="flex flex-wrap gap-3">
      <button
        v-for="department in departments"
        :key="department"
        @click="selectedDepartment = department"
        class="rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200"
        :class="
          selectedDepartment === department
            ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-md'
            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
        "
      >
        {{ department }}
      </button>
    </div>

    <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-2">
      <InternshipCard
        v-for="item in filteredTracks"
        :key="item.id"
        :item="item"
        @select="goToDetail"
      />
    </div>

    <section
      v-if="filteredTracks.length === 0"
      class="rounded-[24px] border border-dashed border-slate-300 bg-white p-8 text-center shadow-sm"
    >
      <h2 class="text-xl font-bold text-slate-900">No internship found</h2>
      <p class="mt-2 text-slate-600">
        There are no internship tracks available for this category yet.
      </p>
    </section>
  </section>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import InternshipCard from './InternshipCard.vue'
import { internshipTracks } from '@/data/internship'

const props = defineProps<{
  type?: string
}>()

const router = useRouter()

const typeDepartmentMap: Record<string, string> = {
  'web-development': 'Information Technology',
  'software-engineering': 'Computer Science',
  'database-administration': 'Information Systems',
  'business-administration': 'Management',
  'human-resource': 'Human Resources',
  marketing: 'Marketing',
}

const selectedDepartment = ref('All')

const baseTracks = computed(() => {
  const currentType = props.type
  const mappedDepartment = currentType
    ? typeDepartmentMap[currentType]
    : undefined

  if (mappedDepartment) {
    return internshipTracks.filter(
      (item) => item.department === mappedDepartment,
    )
  }

  return internshipTracks
})

const departments = computed(() => {
  return ['All', ...new Set(baseTracks.value.map((item) => item.department))]
})

watch(
  () => props.type,
  () => {
    selectedDepartment.value = 'All'
  },
  { immediate: true },
)

const filteredTracks = computed(() => {
  if (selectedDepartment.value === 'All') {
    return baseTracks.value
  }

  return baseTracks.value.filter(
    (item) => item.department === selectedDepartment.value,
  )
})

const goToDetail = (id: number) => {
  router.push({
    name: 'internship-detail',
    params: { id: String(id) },
  })
}
</script>
