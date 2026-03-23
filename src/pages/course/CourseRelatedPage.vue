<template>
  <article
    v-if="items.length"
    class="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm"
  >
    <div class="mb-6">
      <div class="flex items-center gap-2 text-sky-700">
        <BookOpen class="h-5 w-5" />
        <p class="text-sm font-semibold uppercase tracking-[0.2em]">
          More Programs
        </p>
      </div>

      <div class="mt-2 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 class="text-2xl font-bold text-slate-900">
            Related Courses
          </h2>

          <p class="mt-2 text-sm text-slate-500">
            Explore more programs related to this field of study.
          </p>
        </div>
      </div>
    </div>

    <div class="grid gap-4 md:grid-cols-2">
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
            <component :is="getCourseIcon(item.category)" class="h-5 w-5" />
          </div>

          <div class="min-w-0 flex-1">
            <div class="flex flex-wrap items-center gap-2">
              <span
                class="rounded-full px-3 py-1 text-xs font-semibold"
                :class="getCategoryBadgeClass(item.category)"
              >
                {{ getDisplayCategory(item.category) }}
              </span>

              <span
                class="rounded-full px-3 py-1 text-xs font-semibold"
                :class="getLevelClass(item.level)"
              >
                {{ item.level }}
              </span>
            </div>

            <h3
              class="mt-3 line-clamp-2 text-lg font-semibold text-slate-900 transition group-hover:text-sky-700"
            >
              {{ item.name }}
            </h3>

            <p class="mt-2 line-clamp-2 text-sm leading-7 text-slate-600">
              {{ item.description }}
            </p>
          </div>
        </div>

        <div
          class="my-4 h-px bg-gradient-to-r from-sky-100 via-cyan-100 to-emerald-100"
        ></div>

        <div class="flex items-center justify-between text-xs text-slate-500">
          <div class="flex items-center gap-1.5">
            <Clock3 class="h-4 w-4" />
            <span>{{ item.duration }}</span>
          </div>

          <div class="flex items-center gap-1.5">
            <GraduationCap class="h-4 w-4" />
            <span class="font-medium text-slate-700">
              {{ item.certification }}
            </span>
          </div>
        </div>
      </article>
    </div>

    <div
      v-if="items.length > defaultLimit"
      class="mt-6 flex justify-center"
    >
      <button
        @click="toggleShow"
        class="rounded-full bg-slate-100 px-5 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
      >
        {{ expanded ? 'Show Less' : 'See More' }}
      </button>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import {
  BookOpen,
  BriefcaseBusiness,
  Palette,
  MonitorSmartphone,
  Clock3,
  GraduationCap,
} from 'lucide-vue-next'
import type { Course } from '@/data/courses'

const props = withDefaults(
  defineProps<{
    items?: Course[]
  }>(),
  {
    items: () => [],
  },
)

const router = useRouter()

const defaultLimit = 2
const expanded = ref(false)

const visibleItems = computed(() => {
  if (expanded.value) return props.items
  return props.items.slice(0, defaultLimit)
})

const toggleShow = () => {
  expanded.value = !expanded.value
}

const goToDetail = async (id: number) => {
  await router.push({
    name: 'course-detail',
    params: { id },
  })
}

const normalizeCategory = (category: string) => {
  const value = category.toLowerCase()

  if (value.includes('creative')) return 'creative'
  if (value.includes('business')) return 'business'
  if (value.includes('technology')) return 'technology'

  return 'technology'
}

const getDisplayCategory = (category: string) => {
  switch (normalizeCategory(category)) {
    case 'technology':
      return 'Technology'
    case 'business':
      return 'Business'
    case 'creative':
      return 'Creative'
    default:
      return 'Course'
  }
}

const getCourseIcon = (category: string) => {
  switch (normalizeCategory(category)) {
    case 'technology':
      return MonitorSmartphone
    case 'business':
      return BriefcaseBusiness
    case 'creative':
      return Palette
    default:
      return BookOpen
  }
}

const getCategoryBadgeClass = (category: string) => {
  switch (normalizeCategory(category)) {
    case 'technology':
      return 'bg-blue-100 text-blue-700'
    case 'business':
      return 'bg-amber-100 text-amber-700'
    case 'creative':
      return 'bg-purple-100 text-purple-700'
    default:
      return 'bg-slate-100 text-slate-700'
  }
}

const getLevelClass = (level: string) => {
  switch (level) {
    case 'Bachelor':
      return 'bg-sky-100 text-sky-700'
    case 'Master':
      return 'bg-emerald-100 text-emerald-700'
    case 'Diploma':
      return 'bg-cyan-100 text-cyan-700'
    case 'Certificate':
      return 'bg-violet-100 text-violet-700'
    case 'Creative':
      return 'bg-purple-100 text-purple-700'
    default:
      return 'bg-slate-100 text-slate-700'
  }
}
</script>
