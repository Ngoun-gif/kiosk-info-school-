<template>
  <div class="space-y-6">
    <section
      v-if="course"
      class="space-y-6 rounded-[28px] bg-white p-6 shadow-lg"
    >
      <button
        @click="goBack"
        class="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
      >
        <ArrowLeft class="h-4 w-4" />
        Back to {{ backLabel }}
      </button>

      <article class="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
        <div class="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div class="flex items-start gap-4">
            <div
              class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-100 via-cyan-100 to-emerald-100 text-sky-700"
            >
              <component :is="courseIcon" class="h-7 w-7" />
            </div>

            <div>
              <div class="flex flex-wrap items-center gap-2">
                <span
                  class="rounded-full px-3 py-1 text-xs font-semibold"
                  :class="categoryBadgeClass"
                >
                  {{ displayCategory }}
                </span>

                <span
                  class="rounded-full px-3 py-1 text-xs font-semibold"
                  :class="levelBadgeClass"
                >
                  {{ course.level }}
                </span>
              </div>

              <h1 class="mt-3 text-3xl font-bold text-slate-900">
                {{ course.name }}
              </h1>

              <p class="mt-3 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
                {{ course.description }}
              </p>
            </div>
          </div>

          <div class="grid gap-3 md:min-w-[260px]">
            <div class="rounded-2xl bg-slate-50 p-4">
              <p class="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Duration
              </p>
              <p class="mt-2 text-sm font-semibold text-slate-900">
                {{ course.duration }}
              </p>
            </div>

            <div class="rounded-2xl bg-slate-50 p-4">
              <p class="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Certification
              </p>
              <p class="mt-2 text-sm font-semibold text-slate-900">
                {{ course.certification }}
              </p>
            </div>
          </div>
        </div>
      </article>

      <article class="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
        <h2 class="text-2xl font-bold text-slate-900">Program Highlights</h2>

        <div class="mt-5 flex flex-wrap gap-3">
          <span
            v-for="item in course.highlights || []"
            :key="item"
            class="rounded-full bg-sky-50 px-4 py-2 text-sm font-medium text-sky-700"
          >
            {{ item }}
          </span>
        </div>

        <div class="mt-6 grid gap-4 md:grid-cols-2">
          <div class="rounded-2xl border border-slate-100 bg-slate-50 p-5">
            <h3 class="text-lg font-semibold text-slate-900">Study Time</h3>
            <p class="mt-2 text-sm leading-7 text-slate-600">
              {{ course.studyTime }}
            </p>
          </div>

          <div class="rounded-2xl border border-slate-100 bg-slate-50 p-5">
            <h3 class="text-lg font-semibold text-slate-900">Internship Info</h3>
            <p class="mt-2 text-sm leading-7 text-slate-600">
              {{ course.internshipInfo }}
            </p>
          </div>
        </div>
      </article>

      <div class="grid gap-6 lg:grid-cols-2">
        <article class="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
          <h2 class="text-2xl font-bold text-slate-900">Requirements</h2>
          <ul class="mt-5 space-y-3">
            <li
              v-for="item in course.requirements || []"
              :key="item"
              class="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4"
            >
              <CheckCircle2 class="mt-0.5 h-5 w-5 shrink-0 text-sky-600" />
              <span class="text-sm leading-7 text-slate-600">
                {{ item }}
              </span>
            </li>
          </ul>
        </article>

        <article class="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
          <h2 class="text-2xl font-bold text-slate-900">Suitable For</h2>
          <ul class="mt-5 space-y-3">
            <li
              v-for="item in course.suitableFor || []"
              :key="item"
              class="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4"
            >
              <Sparkles class="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
              <span class="text-sm leading-7 text-slate-600">
                {{ item }}
              </span>
            </li>
          </ul>
        </article>
      </div>

      <div class="grid gap-6 lg:grid-cols-2">
        <article class="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
          <h2 class="text-2xl font-bold text-slate-900">Learning Goals</h2>
          <ul class="mt-5 space-y-3">
            <li
              v-for="item in course.goals || []"
              :key="item"
              class="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4"
            >
              <Target class="mt-0.5 h-5 w-5 shrink-0 text-cyan-600" />
              <span class="text-sm leading-7 text-slate-600">
                {{ item }}
              </span>
            </li>
          </ul>
        </article>

        <article class="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
          <h2 class="text-2xl font-bold text-slate-900">Skills You Gain</h2>
          <div class="mt-5 flex flex-wrap gap-3">
            <span
              v-for="item in course.skills || []"
              :key="item"
              class="rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700"
            >
              {{ item }}
            </span>
          </div>
        </article>
      </div>

      <article
        v-if="course.years?.length"
        class="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm"
      >
        <h2 class="text-2xl font-bold text-slate-900">Year-by-Year Study Plan</h2>

        <div class="mt-6 grid gap-4">
          <div
            v-for="year in course.years || []"
            :key="year.year"
            class="rounded-2xl border border-slate-100 bg-slate-50 p-5"
          >
            <div class="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <h3 class="text-lg font-bold text-slate-900">
                {{ year.year }}
              </h3>

              <span class="rounded-full bg-white px-3 py-1 text-xs font-semibold text-sky-700">
                {{ year.focus }}
              </span>
            </div>

            <div class="mt-4 flex flex-wrap gap-2">
              <span
                v-for="subject in year.subjects"
                :key="subject"
                class="rounded-full bg-white px-3 py-1 text-sm text-slate-700 shadow-sm"
              >
                {{ subject }}
              </span>
            </div>
          </div>
        </div>
      </article>

      <article
        v-if="course.career?.length"
        class="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm"
      >
        <h2 class="text-2xl font-bold text-slate-900">Career Opportunities</h2>

        <div class="mt-5 flex flex-wrap gap-3">
          <span
            v-for="item in course.career || []"
            :key="item"
            class="rounded-full bg-amber-50 px-4 py-2 text-sm font-medium text-amber-700"
          >
            {{ item }}
          </span>
        </div>
      </article>

      <ScheduleDetailPage
        v-if="schedule"
        :schedule="schedule"
      />
    </section>

    <CourseRelatedPage
      v-if="course && relatedCourses.length"
      :items="relatedCourses"
    />

    <section
      v-if="!course"
      class="rounded-[28px] border border-dashed border-slate-300 bg-white p-10 text-center shadow-lg"
    >
      <div
        class="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-500"
      >
        <BookOpen class="h-7 w-7" />
      </div>

      <h2 class="mt-4 text-2xl font-bold text-slate-900">Course not found</h2>
      <p class="mt-2 text-sm leading-7 text-slate-600">
        The course you are looking for could not be found.
      </p>

      <button
        @click="router.push({ name: 'courses' })"
        class="mt-6 inline-flex items-center gap-2 rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
      >
        <ArrowLeft class="h-4 w-4" />
        Back to Courses
      </button>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted } from 'vue'
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router'
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Sparkles,
  Target,
  MonitorSmartphone,
  BriefcaseBusiness,
  Palette,
} from 'lucide-vue-next'
import CourseRelatedPage from '../course/CourseRelatedPage.vue'
import ScheduleDetailPage from './schedule/ScheduleDetailPage.vue'
import { courses } from '@/data/courses'
import { getScheduleByCourseId } from '@/data/schedule'

const route = useRoute()
const router = useRouter()

const course = computed(() =>
  courses.find((item) => item.id === Number(route.params.id)),
)

const schedule = computed(() => {
  if (!course.value) return undefined
  return getScheduleByCourseId(course.value.id)
})

const getCourseType = (category: string) => {
  const value = category.toLowerCase()

  if (value.includes('creative')) return 'creative'
  if (value.includes('business')) return 'business'
  if (value.includes('technology')) return 'technology'

  return 'technology'
}

const displayCategory = computed(() => {
  if (!course.value) return 'Course'

  const type = getCourseType(course.value.category)

  switch (type) {
    case 'technology':
      return 'Technology'
    case 'business':
      return 'Business'
    case 'creative':
      return 'Creative'
    default:
      return 'Course'
  }
})

const backLabel = computed(() => {
  if (!course.value) return 'Courses'

  const type = getCourseType(course.value.category)

  switch (type) {
    case 'technology':
      return 'Technology Programs'
    case 'business':
      return 'Business Programs'
    case 'creative':
      return 'Creative & Design Programs'
    default:
      return 'Courses'
  }
})

const courseIcon = computed(() => {
  if (!course.value) return BookOpen

  const type = getCourseType(course.value.category)

  switch (type) {
    case 'technology':
      return MonitorSmartphone
    case 'business':
      return BriefcaseBusiness
    case 'creative':
      return Palette
    default:
      return BookOpen
  }
})

const categoryBadgeClass = computed(() => {
  if (!course.value) return 'bg-slate-100 text-slate-700'

  const type = getCourseType(course.value.category)

  switch (type) {
    case 'technology':
      return 'bg-blue-100 text-blue-700'
    case 'business':
      return 'bg-amber-100 text-amber-700'
    case 'creative':
      return 'bg-purple-100 text-purple-700'
    default:
      return 'bg-slate-100 text-slate-700'
  }
})

const levelBadgeClass = computed(() => {
  if (!course.value) return 'bg-slate-100 text-slate-700'

  switch (course.value.level) {
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
})

const relatedCourses = computed(() => {
  if (!course.value) return []

  const currentId = course.value.id
  const currentType = getCourseType(course.value.category)

  const sameTypeCourses = courses.filter((item) => {
    if (item.id === currentId) return false
    return getCourseType(item.category) === currentType
  })

  const otherCourses = courses.filter((item) => {
    if (item.id === currentId) return false
    return getCourseType(item.category) !== currentType
  })

  return [...sameTypeCourses, ...otherCourses]
})

const goBack = () => {
  if (!course.value) {
    router.push({ name: 'courses' })
    return
  }

  router.push({
    name: 'course-type',
    params: {
      type: getCourseType(course.value.category),
    },
  })
}

const scrollToTop = async () => {
  await nextTick()

  const scrollContainer = document.getElementById('app-scroll-container')

  if (scrollContainer) {
    scrollContainer.scrollTo({
      top: 0,
      behavior: 'auto',
    })
    return
  }

  window.scrollTo({
    top: 0,
    behavior: 'auto',
  })
}

onMounted(() => {
  scrollToTop()
})

onBeforeRouteUpdate(async (_to, _from, next) => {
  next()
  await scrollToTop()
})
</script>
