import courses from '@/data/courses.json';
import { Sparkles, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import CourseCard from '@/components/CourseCard';

export default function HomePage() {
const popularCourses = [...courses].sort((a, b) => b.rating - a.rating).slice(0, 3);

  return (
    <div className="bg-[#0b0f19] text-white">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/hero-bg.webp" alt="Background" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-[#0b0f19]/80"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border border-cyan-500/30 text-cyan-400">
            <Sparkles size={18} />
            <span className="text-sm font-medium uppercase tracking-widest">Master New Technologies</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black leading-none">
            Upgrade Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">Skills</span> Now
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Learn from industry experts with hands-on projects designed to advance your professional career.</p>
          
          <Link 
            href="/courses" 
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-violet-600 rounded-lg font-bold hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all"
          >
            Get Started <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-16 text-center">🔥 Popular Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {popularCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </div>
  );
}