import courses from '@/data/courses.json';
import { Sparkles, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import CourseCard from '@/components/CourseCard';

export default function HomePage() {
  const popularCourses = [...courses]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <div className="bg-[#0b0f19] text-white overflow-hidden">

      {/* Hero Section */}
      <section className="relative min-h-[520px] sm:min-h-[600px] flex items-center justify-center text-center px-4 sm:px-6 overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.webp"
            alt="Background"
            fill
            priority
            className="object-cover object-center scale-105 sm:scale-100"
          />

          <div className="absolute inset-0 bg-[#0b0f19]/82 sm:bg-[#0b0f19]/80"></div>
        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-4xl w-full space-y-5 sm:space-y-6 pt-16 sm:pt-20">

          {/* TOP BADGE */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border border-cyan-500/30 text-cyan-400">

            <Sparkles size={14} className="sm:w-[18px] sm:h-[18px]" />

            <span className="text-[10px] sm:text-sm font-medium uppercase tracking-[2px] sm:tracking-widest whitespace-nowrap">
              Master New Technologies
            </span>
          </div>

          {/* HEADING */}
          <h1 className="text-[38px] leading-[1.05] sm:text-6xl md:text-8xl font-black">

            Upgrade Your{" "}

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
              Skills
            </span>{" "}

            Now
          </h1>

          {/* DESCRIPTION */}
          <p className="text-sm sm:text-xl text-gray-400 max-w-xl sm:max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
            Learn from industry experts with hands-on projects designed to
            advance your professional career.
          </p>

          {/* BUTTON */}
          <div className="pt-2 sm:pt-4">
            <Link
              href="/courses"
              className="group inline-flex items-center gap-2 px-5 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-600 to-violet-600 rounded-lg text-sm sm:text-base font-bold hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 active:scale-95"
            >
              Get Started

              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">

        <h2 className="text-2xl sm:text-4xl font-bold mb-10 sm:mb-16 text-center">
          🔥 Popular Courses
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
          {popularCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </div>
  );
}