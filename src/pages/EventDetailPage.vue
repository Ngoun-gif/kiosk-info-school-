<template>
  <div ref="pageTop" class="space-y-6">
    <section
      v-if="event"
      class="relative overflow-hidden rounded-[28px] bg-white p-8 shadow-lg"
    >
      <div
        class="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-sky-100/70 blur-2xl"
      ></div>
      <div
        class="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-emerald-100/60 blur-2xl"
      ></div>

      <div class="relative flex flex-wrap items-start justify-between gap-4">
        <div class="min-w-0 flex-1">
          <button
            @click="goBack"
            class="mb-4 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
          >
            <ArrowLeft class="h-4 w-4" />
            Back to Events
          </button>

          <div class="flex items-center gap-2 text-sky-700">
            <component :is="getEventIcon(event.type)" class="h-5 w-5" />
            <p class="text-sm font-semibold uppercase tracking-[0.2em]">
              Event Detail
            </p>
          </div>

          <h1 class="mt-3 text-3xl font-bold leading-tight text-slate-900">
            {{ event.title }}
          </h1>

          <div class="mt-4 flex flex-wrap items-center gap-3">
            <div
              class="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-sky-600 to-cyan-500 text-white shadow-sm"
            >
              <component
                :is="getEventIcon(event.type)"
                class="mb-1 h-4 w-4 opacity-80"
              />
              <p class="text-[10px] uppercase leading-none">
                {{ event.month }}
              </p>
              <p class="text-lg font-bold leading-none">
                {{ event.day }}
              </p>
            </div>

            <span
              class="rounded-full px-4 py-2 text-sm font-semibold"
              :class="typeBadge(event.type)"
            >
              {{ event.type }}
            </span>

            <span
              class="rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700"
            >
              {{ event.location }}
            </span>
          </div>
        </div>

        <div class="flex flex-wrap gap-3">
          <button
            @click="goBack"
            class="hidden rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-200 md:inline-flex"
          >
            View all events
          </button>
        </div>
      </div>

      <div
        class="mt-6 rounded-2xl border border-sky-100 bg-gradient-to-r from-sky-50 via-cyan-50 to-emerald-50 p-5"
      >
        <p class="text-lg font-medium leading-8 text-slate-800">
          {{ event.description }}
        </p>
      </div>

      <div class="mt-8 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div class="space-y-6">
          <div class="rounded-2xl border border-slate-200 bg-white p-5">
            <div class="flex items-center gap-2 text-sky-700">
              <CalendarDays class="h-5 w-5" />
              <h2 class="text-lg font-semibold text-slate-900">About This Event</h2>
            </div>

            <p class="mt-3 leading-7 text-slate-600">
              This event is part of the institute’s campus activity program,
              giving students and visitors opportunities to learn, connect, and
              engage with academic and community life.
            </p>
          </div>

          <div class="rounded-2xl border border-slate-200 bg-white p-5">
            <div class="flex items-center gap-2 text-sky-700">
              <Sparkles class="h-5 w-5" />
              <h2 class="text-lg font-semibold text-slate-900">Event Highlights</h2>
            </div>

            <div class="mt-4 grid gap-3">
              <div
                v-for="item in event.details"
                :key="item"
                class="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
              >
                <div
                  class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600"
                >
                  <CheckCircle class="h-5 w-5" />
                </div>

                <span class="font-medium leading-6 text-slate-700">
                  {{ item }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="space-y-6">
          <div
            class="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm"
          >
            <iframe
              class="h-[400px] w-full md:h-[500px]"
              :src="`https://www.youtube.com/embed/${event.videoId}`"
              title="Event video"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>

          <div class="rounded-2xl border border-slate-200 bg-white p-5">
            <div class="flex items-center gap-2 text-sky-700">
              <MapPin class="h-5 w-5" />
              <h2 class="text-lg font-semibold text-slate-900">Location</h2>
            </div>

            <p class="mt-3 font-medium text-slate-700">
              {{ event.location }}
            </p>

            <p class="mt-2 text-sm leading-6 text-slate-500">
              Visit the event venue on campus to join the activity and explore
              the full student experience.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section
      v-if="event && relatedEvents.length"
      class="rounded-[28px] bg-white p-8 shadow-lg"
    >
      <div class="mb-6">
        <div class="flex items-center gap-2 text-sky-700">
          <Layers3 class="h-5 w-5" />
          <p class="text-sm font-semibold uppercase tracking-[0.2em]">
            More Activities
          </p>
        </div>

        <h2 class="mt-2 text-2xl font-bold text-slate-900">
          Related Events
        </h2>
        <p class="mt-2 text-slate-600">
          Explore more campus events and student activities.
        </p>
      </div>

      <div class="grid gap-4 md:grid-cols-2">
        <article
          v-for="item in relatedEvents"
          :key="item.id"
          @click="goToDetail(item.id)"
          class="group cursor-pointer rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-xl"
        >
          <div class="flex items-start gap-4">
            <div
              class="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl bg-gradient-to-br from-sky-600 to-cyan-500 text-white"
            >
              <component
                :is="getEventIcon(item.type)"
                class="mb-1 h-4 w-4 opacity-80"
              />
              <p class="text-[10px] uppercase leading-none">{{ item.month }}</p>
              <p class="text-sm font-bold leading-none">{{ item.day }}</p>
            </div>

            <div class="min-w-0 flex-1">
              <div class="flex flex-wrap items-center gap-2">
                <h3
                  class="text-lg font-semibold text-slate-900 transition group-hover:text-sky-700"
                >
                  {{ item.title }}
                </h3>

                <span
                  class="rounded-full px-2.5 py-1 text-[11px] font-semibold"
                  :class="typeBadge(item.type)"
                >
                  {{ item.type }}
                </span>
              </div>

              <p class="mt-2 line-clamp-2 text-sm text-slate-600">
                {{ item.description }}
              </p>

              <div
                class="mt-3 flex items-center gap-2 text-xs font-medium text-emerald-600"
              >
                <MapPin class="h-4 w-4" />
                <span>{{ item.location }}</span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section v-else class="rounded-[28px] bg-white p-8 text-center shadow-lg">
      <h1 class="text-2xl font-bold text-slate-900">Event not found</h1>
      <p class="mt-2 text-slate-600">
        The event you are looking for does not exist.
      </p>

      <button
        @click="goBack"
        class="mt-5 inline-flex items-center gap-2 rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
      >
        <ArrowLeft class="h-4 w-4" />
        Back to Events
      </button>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {
  ArrowLeft,
  Calendar,
  Laptop,
  Users,
  MapPin,
  CheckCircle,
  Layers3,
  Sparkles,
  CalendarDays,
} from 'lucide-vue-next'
import { events, type EventItem } from '../data/events'

const route = useRoute()
const router = useRouter()
const pageTop = ref<HTMLElement | null>(null)

const event = computed<EventItem | undefined>(() =>
  events.find((item) => item.id === Number(route.params.id)),
)

const relatedEvents = computed(() => {
  const current = event.value
  if (!current) return []

  return events.filter((item) => item.id !== current.id).slice(0, 4)
})

const goBack = () => {
  router.push({ name: 'events' })
}

const goToDetail = (id: number) => {
  router.push({ name: 'event-detail', params: { id: String(id) } })
}

watch(
  () => route.params.id,
  async () => {
    await nextTick()
    pageTop.value?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  },
  { immediate: true },
)

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
