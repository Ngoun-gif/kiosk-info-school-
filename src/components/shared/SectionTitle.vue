<template>
  <div class="mb-5 flex items-end justify-between gap-4">
    <div>
      <p class="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
        {{ eyebrow }}
      </p>
      <h2 class="mt-1 text-4xl font-bold text-slate-900">
        {{ title }}
      </h2>
    </div>

    <p v-if="description" class="max-w-xl text-right text-sm text-slate-500">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  description?: string
}>()
</script>