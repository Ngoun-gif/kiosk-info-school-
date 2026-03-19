<template>
  <footer
    class="relative overflow-hidden rounded-[24px] bg-gradient-to-r from-sky-700 via-cyan-600 to-emerald-500 px-6 py-5 text-white shadow-xl"
  >
    <!-- subtle overlay (same as header style) -->
    <div class="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10"></div>

    <div class="relative flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <div>
        <h3 class="text-xl font-bold">CA Institute</h3>
        <p class="mt-1 text-sm text-white/85">
          Future skills, real-world learning, and student-centered growth.
        </p>
      </div>

      <div class="text-sm text-white/85 text-left md:text-right">
        <p>Email: info@ca.edu</p>
        <p>Phone: +855 99 999 999</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>