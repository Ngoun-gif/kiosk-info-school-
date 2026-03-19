<template>
  <section
    class="relative overflow-hidden rounded-[28px] bg-white p-10 shadow-lg"
  >
    <!-- Background Decor -->
    <div class="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-sky-100/60 blur-2xl"></div>
    <div class="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-emerald-100/60 blur-2xl"></div>

    <div class="relative">
      <!-- Header -->
      <div class="flex items-center gap-2 text-sky-600">
        <Info class="h-5 w-5" />
        <span class="text-sm font-semibold uppercase tracking-[0.25em]">
          About CA Institute
        </span>
      </div>

      <h2 class="mt-3 text-4xl font-bold leading-tight text-slate-900">
        Shaping Future Professionals Through Practical Education
      </h2>

      <p class="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
        CA Institute is dedicated to delivering modern, career-oriented education
        that prepares students for real-world success. We combine academic
        excellence with hands-on experience, ensuring learners gain the skills,
        confidence, and mindset needed to thrive in today’s dynamic industries.
      </p>

      <!-- Highlight Points -->
      <div class="mt-8 grid gap-4 md:grid-cols-3">
        <div class="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <GraduationCap class="h-6 w-6 text-sky-600" />
          <div>
            <p class="font-semibold text-slate-900">Practical Learning</p>
            <p class="text-sm text-slate-600">
              Hands-on projects and real-world applications.
            </p>
          </div>
        </div>

        <div class="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <Briefcase class="h-6 w-6 text-emerald-600" />
          <div>
            <p class="font-semibold text-slate-900">Career Focused</p>
            <p class="text-sm text-slate-600">
              Programs aligned with industry needs.
            </p>
          </div>
        </div>

        <div class="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <Users class="h-6 w-6 text-purple-600" />
          <div>
            <p class="font-semibold text-slate-900">Student-Centered</p>
            <p class="text-sm text-slate-600">
              Supporting growth, creativity, and success.
            </p>
          </div>
        </div>
      </div>

      <!-- Vision / Mission / Values -->
      <div class="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        <!-- Vision -->
        <div
          class="group rounded-3xl border border-slate-200 bg-gradient-to-br from-sky-50 to-white p-6 transition hover:-translate-y-1 hover:shadow-xl"
        >
          <div class="flex items-center gap-3">
            <Eye class="h-8 w-8 text-sky-600" />
            <h3 class="text-xl font-bold text-slate-900">Vision</h3>
          </div>

          <p class="mt-4 leading-7 text-slate-600">
            To become a leading institute that empowers learners through
            innovation, quality education, and continuous personal and
            professional growth.
          </p>
        </div>

        <!-- Mission -->
        <div
          class="group rounded-3xl border border-slate-200 bg-gradient-to-br from-emerald-50 to-white p-6 transition hover:-translate-y-1 hover:shadow-xl"
        >
          <div class="flex items-center gap-3">
            <Target class="h-8 w-8 text-emerald-600" />
            <h3 class="text-xl font-bold text-slate-900">Mission</h3>
          </div>

          <p class="mt-4 leading-7 text-slate-600">
            To provide accessible, relevant, and high-quality education that
            equips students with the knowledge and skills required for the modern
            workforce and global opportunities.
          </p>
        </div>

        <!-- Values -->
        <div
          class="group rounded-3xl border border-slate-200 bg-gradient-to-br from-purple-50 to-white p-6 transition hover:-translate-y-1 hover:shadow-xl"
        >
          <div class="flex items-center gap-3">
            <HeartHandshake class="h-8 w-8 text-purple-600" />
            <h3 class="text-xl font-bold text-slate-900">Values</h3>
          </div>

          <ul class="mt-4 space-y-2 text-slate-600">
            <li>• Excellence in education</li>
            <li>• Integrity and professionalism</li>
            <li>• Creativity and innovation</li>
            <li>• Collaboration and teamwork</li>
            <li>• Commitment to student success</li>
          </ul>
        </div>
      </div>

      <!-- Global Career Opportunities -->
      <div class="mt-12">
        <div class="flex items-center gap-2 text-sky-600">
          <Globe class="h-5 w-5" />
          <span class="text-sm font-semibold uppercase tracking-[0.25em]">
            Global Career Opportunities
          </span>
        </div>

        <h3 class="mt-3 text-3xl font-bold text-slate-900">
          Career Pathways in International Industries
        </h3>

        <p class="mt-3 max-w-3xl leading-7 text-slate-600">
          CA Institute prepares students for a wide range of professional
          opportunities across technology, business, design, digital services,
          and innovation-driven industries. Our programs are designed to build
          practical skills that support both local and international career
          growth.
        </p>

        <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <div
            v-for="item in globalSectors"
            :key="item.title"
            class="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div
              class="flex h-12 w-12 items-center justify-center rounded-2xl"
              :class="item.iconBg"
            >
              <component :is="item.icon" class="h-6 w-6" :class="item.iconColor" />
            </div>

            <h4 class="mt-4 text-base font-semibold text-slate-900">
              {{ item.title }}
            </h4>

            <p class="mt-2 text-sm leading-6 text-slate-600">
              {{ item.description }}
            </p>
          </div>
        </div>

        <div class="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <p class="text-sm leading-7 text-slate-600">
            The career areas shown above are representative examples for
            educational and informational purposes. Company names and trademarks
            are not displayed in this section.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  GraduationCap,
  Briefcase,
  Users,
  Eye,
  Target,
  HeartHandshake,
  Info,
  Globe,
  MonitorSmartphone,
  Building2,
  Palette,
  BarChart3,
  Cpu,

} from 'lucide-vue-next'

type CareerSector = {
  title: string
  description: string
  icon: unknown
  iconBg: string
  iconColor: string
}

const globalSectors: CareerSector[] = [
  {
    title: 'Technology',
    description:
      'Software, IT support, systems administration, cloud services, and digital infrastructure roles.',
    icon: MonitorSmartphone,
    iconBg: 'bg-sky-100',
    iconColor: 'text-sky-600',
  },
  {
    title: 'Business & Management',
    description:
      'Operations, administration, project coordination, leadership, and organizational development.',
    icon: Building2,
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
  },
  {
    title: 'Creative Design',
    description:
      'Graphic design, multimedia, branding, UI design, and digital content production.',
    icon: Palette,
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    title: 'Analytics & Strategy',
    description:
      'Data analysis, business intelligence, planning, strategic decision-making, and reporting.',
    icon: BarChart3,
    iconBg: 'bg-yellow-100',
    iconColor: 'text-yellow-600',
  },
  {
    title: 'Innovation & AI',
    description:
      'Emerging technologies, automation, intelligent systems, and future-focused digital solutions.',
    icon: Cpu,
    iconBg: 'bg-red-100',
    iconColor: 'text-red-600',
  },

]
</script>
