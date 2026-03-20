<template>
  <section
    class="hero-carousel relative overflow-hidden rounded-[28px] bg-white shadow-lg select-none"
    @mouseenter="pauseAutoplay"
    @mouseleave="resumeAutoplay"
  >
    <div
      ref="trackRef"
      class="hero-track relative h-[380px] w-full overflow-hidden md:h-[460px]"
      @mousedown="onDragStart"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
      @touchcancel="onTouchEnd"
      @mouseleave="onDragEnd"
    >
      <!-- Slides Track -->
      <div
        class="flex h-full"
        :class="trackTransitionClass"
        :style="trackStyle"
        @transitionend="onTransitionEnd"
      >
        <div
          v-for="slide in displaySlides"
          :key="`${slide.id}-${slide._renderKey}`"
          class="relative h-full w-full shrink-0"
        >
          <!-- Background Image -->
          <img
            :src="slide.image"
            :alt="slide.title"
            class="pointer-events-none absolute inset-0 h-full w-full object-cover"
            draggable="false"
            @dragstart.prevent
          />

          <!-- Dark Overlay -->
          <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/20"></div>

          <!-- Soft bottom overlay -->
          <div class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/55 via-black/10 to-transparent"></div>

          <!-- Content -->
          <div class="relative z-10 flex h-full items-end px-6 py-7 md:px-10 md:py-10">
            <div class="max-w-[720px]">
              <p
                v-if="slide.badge"
                class="inline-flex rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-sm"
              >
                {{ slide.badge }}
              </p>

              <h2 class="mt-4 text-3xl font-bold leading-tight text-white md:text-5xl">
                {{ slide.title }}
              </h2>

              <p class="mt-3 max-w-[620px] text-sm leading-7 text-white/90 md:text-lg">
                {{ slide.description }}
              </p>

              <div class="mt-6">
                <button
                  type="button"
                  class="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-md transition hover:-translate-y-0.5 hover:shadow-xl"
                  @click.stop="goToSlideDetail(slide)"
                >
                  {{ slide.ctaText || 'Learn More' }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Dots -->
      <div class="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
        <button
          v-for="(slide, index) in announcementSlides"
          :key="slide.id"
          type="button"
          class="h-2.5 rounded-full transition-all duration-300"
          :class="realIndex === index ? 'w-8 bg-white' : 'w-2.5 bg-white/50 hover:bg-white/70'"
          @click="goToRealSlide(index)"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import {
  announcementSlides,
  type AnnouncementSlide,
} from '@/data/slides/announcementSlides'

type RenderSlide = AnnouncementSlide & {
  _renderKey: string
}

const router = useRouter()

const trackRef = ref<HTMLElement | null>(null)
const autoplayTimer = ref<number | null>(null)

const AUTO_DELAY = 4500
const SWIPE_THRESHOLD = 70

const currentIndex = ref(1)
const isDragging = ref(false)
const isAnimating = ref(true)
const isJumping = ref(false)

const startX = ref(0)
const currentX = ref(0)
const dragOffset = ref(0)

const displaySlides = computed<RenderSlide[]>(() => {
  if (announcementSlides.length === 0) return []

  const first = announcementSlides[0]!
  const last = announcementSlides[announcementSlides.length - 1]!

  return [
    { ...last, _renderKey: 'clone-last' },
    ...announcementSlides.map((slide) => ({
      ...slide,
      _renderKey: `real-${slide.id}`,
    })),
    { ...first, _renderKey: 'clone-first' },
  ]
})

const realIndex = computed(() => {
  if (!announcementSlides.length) return 0

  if (currentIndex.value === 0) return announcementSlides.length - 1
  if (currentIndex.value === announcementSlides.length + 1) return 0

  return currentIndex.value - 1
})

const trackStyle = computed(() => {
  const width = trackRef.value?.offsetWidth || 1
  const dragTranslate = isDragging.value ? (dragOffset.value / width) * 100 : 0
  const baseTranslate = -currentIndex.value * 100

  return {
    transform: `translateX(${baseTranslate + dragTranslate}%)`,
  }
})

const trackTransitionClass = computed(() => {
  return isDragging.value || !isAnimating.value
    ? ''
    : 'transition-transform duration-700 ease-in-out'
})

function nextSlide() {
  if (isJumping.value) return
  isAnimating.value = true
  currentIndex.value += 1
}

function prevSlide() {
  if (isJumping.value) return
  isAnimating.value = true
  currentIndex.value -= 1
}

function goToRealSlide(index: number) {
  isAnimating.value = true
  currentIndex.value = index + 1
  restartAutoplay()
}

function goToSlideDetail(slide: AnnouncementSlide) {
  if (Math.abs(dragOffset.value) > 10) return
  router.push(slide.route)
}

function onTransitionEnd() {
  if (!announcementSlides.length) return

  if (currentIndex.value === announcementSlides.length + 1) {
    isJumping.value = true
    isAnimating.value = false
    currentIndex.value = 1

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        isJumping.value = false
        isAnimating.value = true
      })
    })
  }

  if (currentIndex.value === 0) {
    isJumping.value = true
    isAnimating.value = false
    currentIndex.value = announcementSlides.length

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        isJumping.value = false
        isAnimating.value = true
      })
    })
  }
}

function startAutoplay() {
  stopAutoplay()
  autoplayTimer.value = window.setInterval(() => {
    nextSlide()
  }, AUTO_DELAY)
}

function stopAutoplay() {
  if (autoplayTimer.value !== null) {
    window.clearInterval(autoplayTimer.value)
    autoplayTimer.value = null
  }
}

function pauseAutoplay() {
  stopAutoplay()
}

function resumeAutoplay() {
  if (!isDragging.value) {
    startAutoplay()
  }
}

function restartAutoplay() {
  startAutoplay()
}

function onDragStart(event: MouseEvent) {
  isDragging.value = true
  startX.value = event.clientX
  currentX.value = event.clientX
  dragOffset.value = 0
  pauseAutoplay()

  window.addEventListener('mousemove', onDragMove)
  window.addEventListener('mouseup', onDragEnd)
}

function onDragMove(event: MouseEvent) {
  if (!isDragging.value) return
  currentX.value = event.clientX
  dragOffset.value = currentX.value - startX.value
}

function onDragEnd() {
  if (!isDragging.value) return

  if (dragOffset.value > SWIPE_THRESHOLD) {
    prevSlide()
  } else if (dragOffset.value < -SWIPE_THRESHOLD) {
    nextSlide()
  }

  isDragging.value = false
  dragOffset.value = 0

  window.removeEventListener('mousemove', onDragMove)
  window.removeEventListener('mouseup', onDragEnd)

  resumeAutoplay()
}

function onTouchStart(event: TouchEvent) {
  const touch = event.touches[0]
  if (!touch) return

  isDragging.value = true
  startX.value = touch.clientX
  currentX.value = touch.clientX
  dragOffset.value = 0
  pauseAutoplay()
}

function onTouchMove(event: TouchEvent) {
  if (!isDragging.value) return

  const touch = event.touches[0]
  if (!touch) return

  currentX.value = touch.clientX
  dragOffset.value = currentX.value - startX.value

  if (Math.abs(dragOffset.value) > 8) {
    event.preventDefault()
  }
}

function onTouchEnd() {
  if (!isDragging.value) return

  if (dragOffset.value > SWIPE_THRESHOLD) {
    prevSlide()
  } else if (dragOffset.value < -SWIPE_THRESHOLD) {
    nextSlide()
  }

  isDragging.value = false
  dragOffset.value = 0
  resumeAutoplay()
}

onMounted(() => {
  startAutoplay()
})

onBeforeUnmount(() => {
  stopAutoplay()
  window.removeEventListener('mousemove', onDragMove)
  window.removeEventListener('mouseup', onDragEnd)
})
</script>

<style scoped>
.hero-carousel {
  overscroll-behavior-x: contain;
}

.hero-track {
  touch-action: pan-y;
}

.hero-carousel * {
  -webkit-user-drag: none;
}
</style>
