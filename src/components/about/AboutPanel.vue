<template>
  <section
    class="relative overflow-hidden rounded-[28px] bg-white p-10 shadow-lg"
  >
    <!-- Background Decor -->
    <div class="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-sky-100/60 blur-2xl"></div>
    <div class="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-emerald-100/60 blur-2xl"></div>

    <div class="relative">
      <!-- Header -->
      <p class="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">
        About CA Institute
      </p>

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
} from 'lucide-vue-next'
</script>