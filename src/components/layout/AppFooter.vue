<template>
  <footer
    class="relative overflow-hidden rounded-[24px] bg-gradient-to-r from-sky-700 via-cyan-600 to-emerald-500 px-6 py-5 text-white shadow-xl"
  >
    <!-- subtle overlay -->
    <div class="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10"></div>

    <div class="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

      <!-- Left -->


      <p>
        © 2026 CA Institute. All rights reserved.
      </p>

      <div class="flex items-center gap-2">
        <span>Developed by</span>
        <span class="font-semibold text-white">Khim Heng Nguon</span>

        <a
          href="https://github.com/Ngoun-gif"
          target="_blank"
          class="flex items-center gap-1 rounded-lg bg-white/10 px-2 py-1 transition hover:bg-white/20"
        >
          <Github class="h-4 w-4" />
          <span>GitHub</span>
        </a>
      </div>

    </div>
  </footer>
</template>

<script setup lang="ts">
import { Github } from 'lucide-vue-next'
</script>
