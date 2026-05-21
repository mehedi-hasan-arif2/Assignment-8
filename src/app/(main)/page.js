"use client";

import courses from '@/data/courses.json';
import { Sparkles, ArrowRight, BookOpen, Clock, Lightbulb, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import CourseCard from '@/components/CourseCard';

export default function HomePage() {
  const popularCourses = [...courses]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  /* New Releases / Trending Courses Logic */
  const trendingCourses = [...courses]
    .reverse()
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
            Now{" "}
            <span className="text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]">
              ✧
            </span>
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

      {/* Popular Courses Section */}
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
      
      {/* Start of Learning Tips Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28 border-t border-gray-950 relative">
        {/* Decorative background glow elements */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-72 h-72 bg-violet-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side Content & Interactive Cards */}
          <div className="space-y-8 relative z-10">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                📌 Smart <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">Learning Tips</span>
              </h2>
              <p className="text-gray-400 text-sm sm:text-base max-w-xl leading-relaxed">
                Maximize your potential and accelerate your coding or design journey with these proven scientific techniques.
              </p>
            </div>

            <div className="space-y-5">
              {/* Card 1: Active Recall */}
              <div className="group flex gap-5 p-5 rounded-2xl bg-[#111625]/60 backdrop-blur-md border border-gray-800 hover:border-cyan-500/40 hover:bg-gradient-to-r hover:from-[#111625] hover:to-cyan-950/20 shadow-lg hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0 group-hover:bg-cyan-500 group-hover:text-black group-hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all duration-300">
                  <BookOpen size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1.5 text-white group-hover:text-cyan-400 transition-colors">Active Recall</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">Don't just re-read code. Test yourself by building small features from memory after watching a lesson.</p>
                </div>
              </div>

              {/* Card 2: Pomodoro Technique */}
              <div className="group flex gap-5 p-5 rounded-2xl bg-[#111625]/60 backdrop-blur-md border border-gray-800 hover:border-violet-500/40 hover:bg-gradient-to-r hover:from-[#111625] hover:to-violet-950/20 shadow-lg hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 shrink-0 group-hover:bg-violet-500 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(139,92,246,0.4)] transition-all duration-300">
                  <Clock size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1.5 text-white group-hover:text-violet-400 transition-colors">Pomodoro Technique</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">Study for 25 minutes, take a 5-minute break. It maintains focus and prevents burnout during long sessions.</p>
                </div>
              </div>

              {/* Card 3: Time Management */}
              <div className="group flex gap-5 p-5 rounded-2xl bg-[#111625]/60 backdrop-blur-md border border-gray-800 hover:border-amber-500/40 hover:bg-gradient-to-r hover:from-[#111625] hover:to-amber-950/20 shadow-lg hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 group-hover:bg-amber-500 group-hover:text-black group-hover:shadow-[0_0_15px_rgba(245,158,11,0.4)] transition-all duration-300">
                  <Lightbulb size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1.5 text-white group-hover:text-amber-400 transition-colors">Time Management</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">Block out specific times in your calendar for learning. Consistency beats intensity every single time.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side Image Frame */}
          <div className="relative w-full h-[350px] sm:h-[480px] rounded-2xl overflow-hidden border border-gray-800 bg-gradient-to-b from-[#161b2e] to-[#0b0f19] p-3 group">
            {/* Animated corner borders */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400 rounded-tl-2xl z-20 group-hover:scale-105 transition-transform"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-violet-400 rounded-br-2xl z-20 group-hover:scale-105 transition-transform"></div>
            
            {/* Outer soft shadow overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent opacity-80 z-10"></div>
            
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <Image 
                src="/learning tips.jpg" 
                alt="Learning Tips Illustration" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Start of Trending Courses Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 border-t border-gray-900">
        <h2 className="text-2xl sm:text-4xl font-bold mb-10 sm:mb-16 text-center">
          🚀 New Releases & Trending
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
          {trendingCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* Start of Top Instructors Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 border-t border-gray-900">
        <h2 className="text-2xl sm:text-4xl font-bold mb-10 sm:mb-16 text-center">
          🏆 Top Instructors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Instructor 1 */}
          <div className="bg-[#111625] border border-gray-800 rounded-2xl p-6 text-center group hover:border-gray-700 transition">
            
            <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-[#0b0f19]">
              <Image src="/instructor1.png" alt="Mehedi Hasan" fill className="object-cover" />
            </div>
            <h4 className="text-xl font-bold">Mehedi Hasan</h4>
            <p className="text-sm text-cyan-400 mb-3">Lead Web Developer</p>
            <div className="flex justify-center items-center gap-1 text-amber-400 text-sm">
              <Star size={16} fill="currentColor" /> <span>4.9 Rating</span>
            </div>
          </div>
          {/* Instructor 2 */}
          <div className="bg-[#111625] border border-gray-800 rounded-2xl p-6 text-center group hover:border-gray-700 transition">
          
            <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-[#0b0f19]">
              <Image src="/instructor2.png" alt="Rafiqul Islam" fill className="object-cover" />
            </div>
            <h4 className="text-xl font-bold">Rafiqul Islam</h4>
            <p className="text-sm text-violet-400 mb-3">UI/UX Design Expert</p>
            <div className="flex justify-center items-center gap-1 text-amber-400 text-sm">
              <Star size={16} fill="currentColor" /> <span>4.8 Rating</span>
            </div>
          </div>
          {/* Instructor 3 */}
          <div className="bg-[#111625] border border-gray-800 rounded-2xl p-6 text-center group hover:border-gray-700 transition">
           
            <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-[#0b0f19]">
              <Image src="/instructor3.jfif" alt="Nusrat Jahan" fill className="object-cover" />
            </div>
            <h4 className="text-xl font-bold">Nusrat Jahan</h4>
            <p className="text-sm text-emerald-400 mb-3">Marketing Strategist</p>
            <div className="flex justify-center items-center gap-1 text-amber-400 text-sm">
              <Star size={16} fill="currentColor" /> <span>4.7 Rating</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}