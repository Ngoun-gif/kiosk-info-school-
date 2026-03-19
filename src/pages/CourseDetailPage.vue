<template>
  <div class="space-y-6">
    <section
      v-if="course"
      class="relative overflow-hidden rounded-[28px] bg-white p-8 shadow-lg"
    >
      <div
        class="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-sky-100/70 blur-2xl"
      ></div>
      <div
        class="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-emerald-100/60 blur-2xl"
      ></div>

      <div class="relative">
        <button
          @click="goBack"
          class="mb-5 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
        >
          ← Back to Courses
        </button>

        <div class="flex flex-wrap items-start justify-between gap-4">
          <div class="min-w-0">
            <div class="flex items-center gap-2 text-sky-700">
              <component :is="getCourseIcon(course.name)" class="h-5 w-5" />
              <p class="text-sm font-semibold uppercase tracking-[0.2em]">
                Course Detail
              </p>
            </div>

            <h1 class="mt-3 text-3xl font-bold leading-tight text-slate-900">
              {{ course.name }}
            </h1>

            <div class="mt-4 flex flex-wrap items-center gap-3">
              <span
                class="rounded-full px-4 py-2 text-sm font-semibold"
                :class="levelBadgeClass(course.level)"
              >
                {{ course.level }}
              </span>

              <span
                class="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
              >
                {{ course.duration }}
              </span>

              <span
                class="rounded-full bg-gradient-to-r from-sky-100 via-cyan-100 to-emerald-100 px-4 py-2 text-sm font-medium text-sky-700"
              >
                {{ course.category }}
              </span>
            </div>
          </div>

          <div
            class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-100 via-cyan-100 to-emerald-100 text-sky-700 shadow-sm"
          >
            <component :is="getCourseIcon(course.name)" class="h-8 w-8" />
          </div>
        </div>

        <div
          class="mt-6 rounded-2xl border border-sky-100 bg-gradient-to-r from-sky-50 via-cyan-50 to-emerald-50 p-5"
        >
          <p class="text-lg font-medium leading-8 text-slate-800">
            {{ course.description }}
          </p>
        </div>

        <div class="mt-8 grid gap-4 md:grid-cols-2">
          <div class="rounded-2xl border border-slate-200 bg-white p-5">
            <div class="flex items-center gap-2 text-sky-700">
              <BookOpen class="h-5 w-5" />
              <h2 class="text-lg font-semibold text-slate-900">Program Overview</h2>
            </div>

            <p class="mt-3 leading-7 text-slate-600">
              This program is designed to help students build strong academic
              knowledge, practical skills, and confidence for future study and
              professional work. Students will progress from foundational learning
              to applied subjects, projects, and career preparation.
            </p>
          </div>

          <div class="rounded-2xl border border-slate-200 bg-white p-5">
            <div class="flex items-center gap-2 text-sky-700">
              <Briefcase class="h-5 w-5" />
              <h2 class="text-lg font-semibold text-slate-900">Career Pathways</h2>
            </div>

            <div v-if="course.career?.length" class="mt-4 flex flex-wrap gap-2">
              <span
                v-for="job in course.career"
                :key="job"
                class="rounded-full bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-700"
              >
                {{ job }}
              </span>
            </div>

            <p v-else class="mt-3 leading-7 text-slate-600">
              Graduates can pursue opportunities in industry, business,
              technology, design, and related professional sectors.
            </p>
          </div>
        </div>

        <div class="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <div class="rounded-2xl border border-slate-200 bg-white p-5">
            <div class="flex items-center gap-2 text-sky-700">
              <ClipboardList class="h-5 w-5" />
              <h2 class="text-lg font-semibold text-slate-900">Requirements</h2>
            </div>

            <ul class="mt-4 space-y-3">
              <li
                v-for="item in course.requirements"
                :key="item"
                class="flex items-start gap-3 text-sm leading-6 text-slate-600"
              >
                <CheckCircle class="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>

          <div class="rounded-2xl border border-slate-200 bg-white p-5">
            <div class="flex items-center gap-2 text-sky-700">
              <Users class="h-5 w-5" />
              <h2 class="text-lg font-semibold text-slate-900">Suitable For</h2>
            </div>

            <ul class="mt-4 space-y-3">
              <li
                v-for="item in course.suitableFor"
                :key="item"
                class="flex items-start gap-3 text-sm leading-6 text-slate-600"
              >
                <CheckCircle class="mt-0.5 h-4 w-4 shrink-0 text-sky-500" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>

          <div class="rounded-2xl border border-slate-200 bg-white p-5">
            <div class="flex items-center gap-2 text-sky-700">
              <Clock3 class="h-5 w-5" />
              <h2 class="text-lg font-semibold text-slate-900">Study Time</h2>
            </div>

            <p class="mt-4 text-sm leading-7 text-slate-600">
              {{ course.studyTime }}
            </p>
          </div>
        </div>

        <div class="mt-8 grid gap-4 md:grid-cols-2">
          <div class="rounded-2xl border border-slate-200 bg-white p-5">
            <div class="flex items-center gap-2 text-sky-700">
              <Target class="h-5 w-5" />
              <h2 class="text-lg font-semibold text-slate-900">Program Goals</h2>
            </div>

            <ul class="mt-4 space-y-3">
              <li
                v-for="item in course.goals"
                :key="item"
                class="flex items-start gap-3 text-sm leading-6 text-slate-600"
              >
                <CheckCircle class="mt-0.5 h-4 w-4 shrink-0 text-purple-500" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>

          <div class="rounded-2xl border border-slate-200 bg-white p-5">
            <div class="flex items-center gap-2 text-sky-700">
              <Wrench class="h-5 w-5" />
              <h2 class="text-lg font-semibold text-slate-900">Skills You Will Gain</h2>
            </div>

            <div class="mt-4 flex flex-wrap gap-2">
              <span
                v-for="item in course.skills"
                :key="item"
                class="rounded-full bg-sky-100 px-3 py-2 text-sm font-medium text-sky-700"
              >
                {{ item }}
              </span>
            </div>
          </div>
        </div>

        <div class="mt-8 grid gap-4 md:grid-cols-2">
          <div class="rounded-2xl border border-slate-200 bg-white p-5">
            <div class="flex items-center gap-2 text-sky-700">
              <Award class="h-5 w-5" />
              <h2 class="text-lg font-semibold text-slate-900">Certification</h2>
            </div>

            <p class="mt-4 text-sm leading-7 text-slate-600">
              {{ course.certification }}
            </p>
          </div>

          <div class="rounded-2xl border border-slate-200 bg-white p-5">
            <div class="flex items-center gap-2 text-sky-700">
              <BadgeCheck class="h-5 w-5" />
              <h2 class="text-lg font-semibold text-slate-900">Internship Info</h2>
            </div>

            <p class="mt-4 text-sm leading-7 text-slate-600">
              {{ course.internshipInfo }}
            </p>
          </div>
        </div>

        <ScheduleDetail :schedule="courseSchedule" />

        <div class="mt-8">
          <div class="flex items-center gap-2 text-sky-700">
            <Sparkles class="h-5 w-5" />
            <h2 class="text-xl font-bold text-slate-900">Program Highlights</h2>
          </div>

          <div class="mt-4 grid gap-3 md:grid-cols-2">
            <div
              v-for="item in course.highlights"
              :key="item"
              class="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4"
            >
              <div
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600"
              >
                <CheckCircle class="h-5 w-5" />
              </div>

              <span class="font-medium text-slate-700">
                {{ item }}
              </span>
            </div>
          </div>
        </div>

        <div v-if="course.years?.length" class="mt-10">
          <div class="flex items-center gap-2 text-sky-700">
            <CalendarRange class="h-5 w-5" />
            <h2 class="text-xl font-bold text-slate-900">Study Plan by Year</h2>
          </div>

          <p class="mt-2 text-slate-600">
            Explore what students typically study in each academic year.
          </p>

          <div class="mt-5 grid gap-4">
            <article
              v-for="item in course.years"
              :key="item.year"
              class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <div
                class="border-b border-slate-100 bg-gradient-to-r from-sky-50 via-cyan-50 to-emerald-50 p-5"
              >
                <div class="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 class="text-lg font-bold text-slate-900">
                      {{ item.year }}
                    </h3>
                    <p class="mt-1 text-sm font-medium text-sky-700">
                      {{ item.focus }}
                    </p>
                  </div>

                  <span
                    class="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm"
                  >
                    {{ item.subjects.length }} Subjects
                  </span>
                </div>
              </div>

              <div class="p-5">
                <div class="grid gap-3 md:grid-cols-2">
                  <div
                    v-for="subject in item.subjects"
                    :key="subject"
                    class="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3"
                  >
                    <div
                      class="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-700"
                    >
                      <BookMarked class="h-4 w-4" />
                    </div>

                    <p class="text-sm font-medium leading-6 text-slate-700">
                      {{ subject }}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section
      v-if="course && relatedCourses.length"
      class="rounded-[28px] bg-white p-8 shadow-lg"
    >
      <div class="mb-6">
        <div class="flex items-center gap-2 text-sky-700">
          <Layers3 class="h-5 w-5" />
          <p class="text-sm font-semibold uppercase tracking-[0.2em]">
            More Programs
          </p>
        </div>

        <h2 class="mt-2 text-2xl font-bold text-slate-900">
          Related Courses
        </h2>
        <p class="mt-2 text-slate-600">
          Explore other programs offered by the institute.
        </p>
      </div>

      <div class="grid gap-4 md:grid-cols-2">
        <article
          v-for="item in relatedCourses"
          :key="item.id"
          @click="goToDetail(item.id)"
          class="group cursor-pointer rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-xl"
        >
          <div class="flex items-start gap-4">
            <div
              class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-100 via-cyan-100 to-emerald-100 text-sky-700"
            >
              <component :is="getCourseIcon(item.name)" class="h-5 w-5" />
            </div>

            <div class="min-w-0 flex-1">
              <div class="flex flex-wrap items-center gap-2">
                <h3
                  class="text-lg font-semibold text-slate-900 transition group-hover:text-sky-700"
                >
                  {{ item.name }}
                </h3>

                <span
                  class="rounded-full px-2.5 py-1 text-[11px] font-semibold"
                  :class="levelBadgeClass(item.level)"
                >
                  {{ item.level }}
                </span>
              </div>

              <p class="mt-2 line-clamp-2 text-sm text-slate-600">
                {{ item.description }}
              </p>
            </div>
          </div>

          <div
            class="my-4 h-px bg-gradient-to-r from-sky-100 via-cyan-100 to-emerald-100"
          ></div>

          <div class="flex flex-wrap items-center gap-2 text-xs text-slate-500">
            <div class="flex items-center gap-2">
              <Clock3 class="h-4 w-4" />
              <span>{{ item.duration }}</span>
            </div>

            <span class="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600">
              {{ item.category }}
            </span>
          </div>
        </article>
      </div>
    </section>

    <section v-else class="rounded-[28px] bg-white p-8 text-center shadow-lg">
      <h1 class="text-2xl font-bold text-slate-900">Course not found</h1>
      <p class="mt-2 text-slate-600">
        The course you are looking for does not exist.
      </p>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted } from 'vue'
import { useRoute, useRouter, onBeforeRouteUpdate } from 'vue-router'
import {
  Cpu,
  Network,
  Palette,
  Database,
  BookOpen,
  Briefcase,
  Sparkles,
  CheckCircle,
  Layers3,
  Clock3,
  CalendarRange,
  BookMarked,
  ClipboardList,
  Users,
  Target,
  Wrench,
  Award,
  BadgeCheck,
} from 'lucide-vue-next'
import { courses } from '../data/courses'
import ScheduleDetail from './ScheduleDetailPage.vue'
import { getScheduleByCourseId } from '../data/schedule'
import type { Course } from '../data/courses'

const route = useRoute()
const router = useRouter()

const scrollToTop = async () => {
  await nextTick()

  const scrollContainer = document.getElementById('app-scroll-container')

  if (scrollContainer) {
    scrollContainer.scrollTo({
      top: 0,
      behavior: 'auto',
    })
  }
}

const course = computed<Course | undefined>(() =>
  courses.find((item) => item.id === Number(route.params.id)),
)

const courseSchedule = computed(() => {
  const current = course.value
  if (!current) return undefined
  return getScheduleByCourseId(current.id)
})

const relatedCourses = computed(() => {
  const current = course.value
  if (!current) return []

  return courses.filter((item) => item.id !== current.id).slice(0, 4)
})

const goToDetail = async (id: number) => {
  if (Number(route.params.id) === id) return

  await router.push({
    name: 'course-detail',
    params: { id },
  })
}

const goBack = () => {
  router.push({ name: 'courses' })
}

onMounted(() => {
  scrollToTop()
})

onBeforeRouteUpdate(async (_to, _from, next) => {
  next()
  await scrollToTop()
})

const getCourseIcon = (name: string) => {
  if (name.includes('Computer')) return Cpu
  if (name.includes('Network')) return Network
  if (name.includes('Design')) return Palette
  if (name.includes('Information')) return Database
  if (name.includes('Business')) return Briefcase
  return BookOpen
}

const levelBadgeClass = (level: string) => {
  if (level === 'Bachelor') return 'bg-sky-100 text-sky-700'
  if (level === 'Master') return 'bg-emerald-100 text-emerald-700'
  if (level === 'Creative') return 'bg-purple-100 text-purple-700'
  return 'bg-slate-100 text-slate-700'
}
</script>
