<template>
  <div class="space-y-8">
    <HeroCarousel />
    <AnnouncementsPanel />
    <CoursesPanel />
    <InternshipPanel />
    <EventsPanel />
  </div>
</template>

<script setup lang="ts">
import HeroCarousel from '../components/home/HeroCarousel.vue'
import AnnouncementsPanel from '../components/home/AnnouncementsPanel.vue'
import CoursesPanel from '../components/home/CoursesPanel.vue'
import InternshipPanel from '../components/home/InternshipPanel.vue'
import EventsPanel from '../components/home/EventsPanel.vue'
</script>