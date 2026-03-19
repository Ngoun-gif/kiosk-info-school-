<template>
  <section class="rounded-[28px] bg-white p-6 shadow-lg">
    <SectionTitle
      eyebrow="Campus Activities"
      title="Events & Highlights"
      description="Discover exciting campus events and activities."
    />

    <div class="mt-6 grid gap-4 md:grid-cols-2">
      <article
        v-for="event in events"
        :key="event.id"
        @click="goToDetail(event.id)"
        class="group cursor-pointer rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:shadow-xl"
      >
        <div class="flex items-start gap-4">
          <!-- Date -->
          <div
            class="flex aspect-square w-16 shrink-0 flex-col items-center justify-center rounded-xl bg-gradient-to-br from-sky-600 to-cyan-500 text-white shadow-sm"
          >
            <component :is="getEventIcon(event.type)" class="mb-1 h-4 w-4 opacity-80" />

            <p class="text-[10px] uppercase leading-none">
              {{ event.month }}
            </p>
            <p class="text-lg font-bold leading-none">
              {{ event.day }}
            </p>
          </div>

          <!-- Content -->
          <div class="min-w-0 flex-1">
            <div class="flex flex-wrap items-center gap-2">
              <h3
                class="text-lg font-semibold text-slate-900 transition group-hover:text-sky-700"
              >
                {{ event.title }}
              </h3>

              <span
                class="rounded-full px-2.5 py-1 text-[11px] font-semibold"
                :class="typeBadge(event.type)"
              >
                {{ event.type }}
              </span>
            </div>

            <p class="mt-2 line-clamp-2 text-sm text-slate-600">
              {{ event.description }}
            </p>

            <div class="mt-3 flex items-center gap-2 text-xs font-medium text-emerald-600">
              <MapPin class="h-4 w-4" />
              <span>{{ event.location }}</span>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import SectionTitle from '../shared/SectionTitle.vue'
import { MapPin, Calendar, Laptop, Users } from 'lucide-vue-next'
import { events } from '../../data/events'

const router = useRouter()

const goToDetail = (id: number) => {
  router.push(`/events/${id}`)
}

const typeBadge = (type: string) => {
  if (type === 'Workshop') return 'bg-sky-100 text-sky-700'
  if (type === 'Event') return 'bg-emerald-100 text-emerald-700'
  if (type === 'Activity') return 'bg-purple-100 text-purple-700'
  return 'bg-slate-100 text-slate-700'
}

const getEventIcon = (type: string) => {
  if (type === 'Workshop') return Laptop
  if (type === 'Activity') return Users
  return Calendar
}
</script>