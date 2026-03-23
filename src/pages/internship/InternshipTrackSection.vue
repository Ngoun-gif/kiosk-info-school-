<template>
  <article class="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
    <div>
      <h2 class="text-2xl font-bold text-slate-900">
        Available Internship Tracks
      </h2>
      <p class="mt-2 text-sm text-slate-500">
        Explore internship paths based on department and career interest.
      </p>
    </div>

    <div class="mt-6">
      <InternshipList />
    </div>
  </article>
</template>

<script setup lang="ts">
import InternshipList from '@/components/internship/InternshipList.vue'
</script>
