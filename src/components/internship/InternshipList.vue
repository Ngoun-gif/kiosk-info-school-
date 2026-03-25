<template>
  <div class="grid gap-4 md:grid-cols-2">
    <InternshipCard
      v-for="item in filteredItems"
      :key="item.id"
      :item="item"
      @select="handleSelect"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import InternshipCard from '@/components/internship/InternshipCard.vue'
import { internshipTracks } from '@/data/internship'

const props = defineProps<{
  type?: string
}>()

const router = useRouter()

const filteredItems = computed(() => {
  if (!props.type || props.type === 'all') {
    return internshipTracks
  }

  return internshipTracks.filter((item) => {
    switch (props.type) {
      case 'information-technology':
        return item.department === 'Information Technology'
      case 'computer-science':
        return item.department === 'Computer Science'
      case 'information-systems':
        return item.department === 'Information Systems'
      case 'management':
        return item.department === 'Management'
      case 'human-resources':
        return item.department === 'Human Resources'
      case 'marketing':
        return item.department === 'Marketing'
      default:
        return true
    }
  })
})

const handleSelect = (id: number) => {
  router.push({
    name: 'internship-detail',
    params: { id },
  })
}
</script>
