<template>
  <section
    class="relative overflow-hidden rounded-[28px] bg-slate-950 shadow-xl"
    @mouseenter="pauseAutoPlay"
    @mouseleave="startAutoPlay"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
    @mousedown="onMouseDown"
    @mousemove="onMouseMove"
    @mouseup="onMouseUp"
    @mouseleave.self="onMouseUp"
  >
    <div class="relative h-[320px] md:h-[400px]">
      <div
        class="flex h-full transition-transform duration-500 ease-out"
        :style="{ transform: `translateX(-${activeIndex * 100}%)` }"
      >
        <article
          v-for="slide in courseSlides"
          :key="slide.id"
          class="relative h-full min-w-full"
        >
          <img
            :src="slide.image"
            :alt="slide.title"
            class="h-full w-full object-cover"
            draggable="false"
          />

          <div class="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/60 to-slate-900/20"></div>

          <div class="absolute inset-0 flex items-center">
            <div class="w-full p-6 md:p-10">
              <div class="max-w-2xl text-white">
                <span
                  v-if="slide.badge"
                  class="inline-flex rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100 backdrop-blur"
                >
                  {{ slide.badge }}
                </span>

                <h2 class="mt-4 text-3xl font-bold leading-tight md:text-4xl">
                  {{ slide.title }}
                </h2>

                <p class="mt-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-200">
                  {{ slide.subtitle }}
                </p>

                <p class="mt-4 max-w-xl text-sm leading-7 text-slate-200 md:text-base">
                  {{ slide.description }}
                </p>

                <div class="mt-6">
                  <button
                    @click="goToRoute(slide.route)"
                    class="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:scale-[1.02]"
                  >
                    {{ slide.buttonText || 'Explore Courses' }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>

    <div class="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
      <button
        v-for="(_, index) in courseSlides"
        :key="index"
        @click="goToSlide(index)"
        class="h-2.5 rounded-full transition-all duration-300"
        :class="activeIndex === index ? 'w-8 bg-white' : 'w-2.5 bg-white/50 hover:bg-white/70'"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { courseSlides } from '@/data/slides/courseSlides'

const router = useRouter()

const activeIndex = ref(0)
const autoplay = ref<number | null>(null)

const isDragging = ref(false)
const startX = ref(0)
const currentX = ref(0)

const nextSlide = () => {
  activeIndex.value = (activeIndex.value + 1) % courseSlides.length
}

const prevSlide = () => {
  activeIndex.value =
    (activeIndex.value - 1 + courseSlides.length) % courseSlides.length
}

const goToSlide = (index: number) => {
  activeIndex.value = index
}

const goToRoute = (route: string) => {
  router.push(route)
}

const startAutoPlay = () => {
  if (!courseSlides.length) return

  pauseAutoPlay()

  autoplay.value = window.setInterval(() => {
    nextSlide()
  }, 4500)
}

const pauseAutoPlay = () => {
  if (autoplay.value !== null) {
    window.clearInterval(autoplay.value)
    autoplay.value = null
  }
}

const handleSwipe = () => {
  const distance = currentX.value - startX.value

  if (Math.abs(distance) < 50) return

  if (distance < 0) {
    nextSlide()
  } else {
    prevSlide()
  }
}

const onTouchStart = (event: TouchEvent) => {
  const touch = event.touches[0]
  if (!touch) return

  pauseAutoPlay()
  isDragging.value = true
  startX.value = touch.clientX
  currentX.value = touch.clientX
}

const onTouchMove = (event: TouchEvent) => {
  if (!isDragging.value) return

  const touch = event.touches[0]
  if (!touch) return

  currentX.value = touch.clientX
}

const onTouchEnd = () => {
  if (!isDragging.value) return

  handleSwipe()
  isDragging.value = false
  startAutoPlay()
}

const onMouseDown = (event: MouseEvent) => {
  pauseAutoPlay()
  isDragging.value = true
  startX.value = event.clientX
  currentX.value = event.clientX
}

const onMouseMove = (event: MouseEvent) => {
  if (!isDragging.value) return
  currentX.value = event.clientX
}

const onMouseUp = () => {
  if (!isDragging.value) return

  handleSwipe()
  isDragging.value = false
  startAutoPlay()
}

onMounted(() => {
  startAutoPlay()
})

onBeforeUnmount(() => {
  pauseAutoPlay()
})
</script>
