<template>
  <article
    v-if="items.length"
    class="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm"
  >
    <div class="mb-6">
      <div class="flex items-center gap-2 text-sky-700">
        <Layers3 class="h-5 w-5" />
        <p class="text-sm font-semibold uppercase tracking-[0.2em]">
          More Internship Tracks
        </p>
      </div>

      <div class="mt-2 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 class="text-2xl font-bold text-slate-900">
            Related Internship
          </h2>

          <p class="mt-2 text-sm text-slate-500">
            Explore more internship opportunities from other departments.
          </p>
        </div>

        <button
          @click="goToTypePage"
          class="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
        >
          See more →
        </button>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <article
        v-for="item in visibleItems"
        :key="item.id"
        @click="goToDetail(item.id)"
        class="group cursor-pointer rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-xl"
      >
        <div class="flex items-start gap-4">
          <div
            class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-100 via-cyan-100 to-emerald-100 text-sky-700"
          >
            <component :is="item.icon" class="h-5 w-5" />
          </div>

          <div class="min-w-0 flex-1">
            <div class="flex flex-wrap items-center gap-2">
              <span
                class="rounded-full px-3 py-1 text-xs font-semibold"
                :class="getBadgeClass(item.id)"
              >
                {{ item.department }}
              </span>

              <span
                class="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
              >
                {{ item.duration }}
              </span>
            </div>

            <h3
              class="mt-3 text-lg font-semibold text-slate-900 transition group-hover:text-sky-700"
            >
              {{ item.title }}
            </h3>

            <p class="mt-2 line-clamp-2 text-sm leading-7 text-slate-600">
              {{ item.description }}
            </p>
          </div>
        </div>
      </article>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { Layers3 } from 'lucide-vue-next'
import type { InternshipTrackItem } from '@/data/internship'

const props = defineProps<{
  items: InternshipTrackItem[]
  currentId?: number
}>()

const router = useRouter()

const visibleItems = computed(() => props.items.slice(0, 2))

const typeMap: Record<number, string> = {
  1: 'web-development',
  2: 'software-engineering',
  3: 'database-administration',
  4: 'business-administration',
  5: 'human-resource',
  6: 'marketing',
}

const goToDetail = (id: number) => {
  router.push({
    name: 'internship-detail',
    params: { id },
  })
}

const goToTypePage = () => {
  const type = props.currentId ? typeMap[props.currentId] : undefined

  if (type) {
    router.push({
      name: 'internship-type',
      params: { type },
    })
    return
  }

  router.push({ name: 'internships' })
}

const getBadgeClass = (id: number) => {
  switch (id) {
    case 1:
      return 'bg-blue-100 text-blue-700'
    case 2:
      return 'bg-cyan-100 text-cyan-700'
    case 3:
      return 'bg-indigo-100 text-indigo-700'
    case 4:
      return 'bg-amber-100 text-amber-700'
    case 5:
      return 'bg-rose-100 text-rose-700'
    case 6:
      return 'bg-purple-100 text-purple-700'
    default:
      return 'bg-slate-100 text-slate-700'
  }
}
</script>
