<template>
  <div class="h-screen w-screen overflow-hidden bg-slate-100">
    <div class="mx-auto flex h-full w-full max-w-[1080px] flex-col bg-slate-50">
      <div class="p-4">
        <AppHeader />
      </div>

      <div class="px-4">
        <AppNavbar />
      </div>

      <main id="app-scroll-container" class="flex-1 overflow-y-auto px-4 py-4">
        <RouterView />
      </main>

      <div class="p-4">
        <SchoolFooter />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppHeader from './components/layout/AppHeader.vue'
import AppNavbar from './components/layout/AppNavbar.vue'
import SchoolFooter from './components/layout/SchoolFooter.vue'
</script>
