<template>
  <nav class="my-2 rounded-[24px] bg-white p-3 shadow-lg">
    <div class="grid grid-cols-2 gap-3 md:grid-cols-5">
      <RouterLink
        v-for="item in navItems"
        :key="item.to"
        :to="item.to"
        custom
        v-slot="{ navigate, href }"
      >
        <a
          :href="href"
          @click.prevent="handleNavClick(item, navigate)"
          class="flex items-center justify-center gap-2 rounded-2xl px-4 py-5 text-lg font-semibold transition-all duration-200 active:scale-[0.97]"
          :class="
            isActive(item)
              ? 'bg-sky-400 text-white shadow-md'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          "
        >
          <component
            :is="item.icon"
            class="h-5 w-5"
            :class="isActive(item) ? 'text-white' : 'text-slate-600'"
          />
          <span>{{ item.label }}</span>
        </a>
      </RouterLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { nextTick } from 'vue'
import { useRoute, type NavigationFailure } from 'vue-router'
import {
  Home,
  Megaphone,
  BookOpen,
  Info,
  Briefcase,
} from 'lucide-vue-next'

const route = useRoute()

const navItems = [
  { label: 'Home', to: '/', icon: Home },
  { label: 'Announcements', to: '/announcements', icon: Megaphone },
  { label: 'Courses', to: '/courses', icon: BookOpen },
  { label: 'Internships', to: '/internships', icon: Briefcase },
  { label: 'About Us', to: '/about', icon: Info },
]

const isActive = (item: { to: string }) => {
  if (item.to === '/internships') {
    return (
      route.path.startsWith('/internships') ||
      route.path.startsWith('/internship-tracks')
    )
  }

  if (item.to === '/') {
    return route.path === '/'
  }

  return route.path.startsWith(item.to)
}

const scrollToTop = () => {
  const scrollContainer = document.getElementById('app-scroll-container')

  if (scrollContainer) {
    scrollContainer.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
}

const handleNavClick = async (
  item: { to: string },
  navigate: (e?: MouseEvent) => Promise<void | NavigationFailure>
) => {
  if (isActive(item)) {
    scrollToTop()
    return
  }

  await navigate()
  await nextTick()
  scrollToTop()
}
</script>
