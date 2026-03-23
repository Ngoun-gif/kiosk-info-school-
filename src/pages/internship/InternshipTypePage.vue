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
        {{ pageTitle }} List
      </h2>

      <p class="mt-2 text-sm text-slate-500">
        Click any internship track to view full details
      </p>

      <div class="mt-6">
        <InternshipList :type="internshipType" />
      </div>
    </article>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { BriefcaseBusiness } from 'lucide-vue-next'
import InternshipList from '@/components/internship/InternshipList.vue'

const route = useRoute()

const internshipType = computed(() => String(route.params.type || 'web-development'))

const pageTitle = computed(() => {
  switch (internshipType.value) {
    case 'web-development':
      return 'Web Development Internship'
    case 'software-engineering':
      return 'Software Engineering Internship'
    case 'database-administration':
      return 'Database Administration Internship'
    case 'business-administration':
      return 'Business Administration Internship'
    case 'human-resource':
      return 'Human Resource Internship'
    case 'marketing':
      return 'Marketing Internship'
    default:
      return 'Internships'
  }
})
</script>
