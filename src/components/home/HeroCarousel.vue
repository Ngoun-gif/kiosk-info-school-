<template>
  <section
    class="relative overflow-hidden rounded-[28px] bg-gradient-to-r from-sky-700 via-cyan-600 to-emerald-500 p-6 text-white shadow-xl"
  >
    <div
      class="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10"
    ></div>

    <div class="relative grid min-h-[620px] grid-cols-1 md:grid-cols-[1fr_1.2fr]">
      <div class="flex flex-col justify-center p-10 md:p-12">
        <p class="text-base font-semibold uppercase tracking-[0.3em] text-sky-100">
          Featured Highlights
        </p>

        <h2 class="mt-4 text-5xl font-bold leading-tight text-white">
          Learn, Discover, and Stay Updated
        </h2>

        <p class="mt-5 max-w-xl text-xl leading-9 text-white/85">
          Browse important announcements, explore our programs, and see what is
          happening on campus.
        </p>

        <div class="mt-8 flex gap-4">
          <button
            v-for="(slide, index) in slides"
            :key="slide.title"
            type="button"
            class="h-4 w-4 rounded-full transition-all duration-300"
            :class="
              currentSlide === index
                ? 'scale-125 bg-white'
                : 'bg-white/40 hover:bg-white/70'
            "
            :aria-label="`Go to slide ${index + 1}`"
            @click="goToSlide(index)"
          ></button>
        </div>
      </div>

      <div
        class="relative h-full min-h-[420px] overflow-hidden rounded-[24px] bg-slate-200"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
      >
        <transition name="fade">
          <div
            v-if="activeSlide"
            :key="activeSlide.title"
            class="absolute inset-0"
          >
            <img
              :src="activeSlide.image"
              :alt="activeSlide.title"
              class="absolute inset-0 h-full w-full object-cover"
              draggable="false"
            />

            <div
              class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
            ></div>

            <div
              class="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-emerald-300/10"
            ></div>

            <div class="relative z-10 flex h-full items-end p-8 md:p-10">
              <div
                class="max-w-xl rounded-3xl border border-white/20 bg-gradient-to-br from-sky-900/60 via-cyan-800/50 to-emerald-700/50 p-5 text-white shadow-2xl backdrop-blur-md md:p-6"
              >
                <p
                  class="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200"
                >
                  Campus Story
                </p>

                <h3 class="mt-2 text-2xl font-semibold leading-tight md:text-3xl">
                  {{ activeSlide.title }}
                </h3>

                <p
                  class="mt-2 text-sm leading-6 text-white/85 md:text-base md:leading-7"
                >
                  {{ activeSlide.description }}
                </p>
              </div>
            </div>
          </div>
        </transition>

        <button
          type="button"
          class="absolute left-5 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/85 px-4 py-3 text-lg font-semibold text-slate-800 shadow-lg transition hover:bg-white"
          @click="prevSlide"
          @mouseenter="pauseAutoplay"
          @mouseleave="startAutoplay"
        >
          ‹
        </button>

        <button
          type="button"
          class="absolute right-5 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/85 px-4 py-3 text-lg font-semibold text-slate-800 shadow-lg transition hover:bg-white"
          @click="nextSlide"
          @mouseenter="pauseAutoplay"
          @mouseleave="startAutoplay"
        >
          ›
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { slides } from '../../data/slides'



const currentSlide = ref(0)
const activeSlide = computed(() => slides[currentSlide.value])

let intervalId: number | null = null
const autoplayDelay = 4000

const touchStartX = ref(0)
const touchEndX = ref(0)
const minSwipeDistance = 50

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

function prevSlide() {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
}

function goToSlide(index: number) {
  currentSlide.value = index
  restartAutoplay()
}

function startAutoplay() {
  if (intervalId !== null) return

  intervalId = window.setInterval(() => {
    nextSlide()
  }, autoplayDelay)
}

function pauseAutoplay() {
  if (intervalId !== null) {
    clearInterval(intervalId)
    intervalId = null
  }
}

function restartAutoplay() {
  pauseAutoplay()
  startAutoplay()
}

function handleTouchStart(event: TouchEvent) {
  pauseAutoplay()
  touchStartX.value = event.changedTouches[0]?.clientX ?? 0
  touchEndX.value = touchStartX.value
}

function handleTouchMove(event: TouchEvent) {
  touchEndX.value = event.changedTouches[0]?.clientX ?? touchEndX.value
}

function handleTouchEnd() {
  const distance = touchStartX.value - touchEndX.value

  if (Math.abs(distance) > minSwipeDistance) {
    if (distance > 0) {
      nextSlide()
    } else {
      prevSlide()
    }
  }

  touchStartX.value = 0
  touchEndX.value = 0
  startAutoplay()
}

onMounted(() => {
  startAutoplay()
})

onBeforeUnmount(() => {
  pauseAutoplay()
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 1.8s ease-in-out,
    transform 1.8s ease-in-out;
  will-change: opacity, transform;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(24px);
}

.fade-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.fade-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(-24px);
}
</style>