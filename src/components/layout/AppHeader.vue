<template>
  <header
    class="overflow-hidden rounded-[28px] bg-gradient-to-r from-sky-700 via-cyan-600 to-emerald-500 p-6 text-white shadow-xl"
  >
    <div class="flex flex-col gap-5">
      <div class="flex items-start justify-between gap-4">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.25em] text-white/80">
            CA Institute Information 
          </p>

          <h1 class="mt-2 text-5xl font-bold leading-tight">
            Welcome to CA Institute
          </h1>
        </div>

        <div class="min-w-[220px] rounded-2xl bg-white/15 px-5 py-4 text-right backdrop-blur">
          <p class="text-sm text-white/80">Today</p>
          <p class="mt-1 text-2xl font-semibold">{{ today }}</p>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const today = new Date().toLocaleDateString('en-US', {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric',
})
</script>