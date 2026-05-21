"use client";

import { useState } from 'react';
import courses from '@/data/courses.json';
import CourseCard from '@/components/CourseCard';
import { Search } from 'lucide-react';

export default function AllCoursesPage() {
  const [search, setSearch] = useState('');

  /* Search Logic */
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#0b0f19] text-white pt-24 pb-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header & Search Bar Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-gray-900 pb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">🎒 All Available Courses</h1>
            <p className="text-gray-400 text-sm mt-1">Explore our world-class tech programs and elevate your stack.</p>
          </div>
          
          {/* Search Input */}
          <div className="relative w-full md:w-96 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-cyan-400 transition-colors" size={18} />
            <input
              type="text"
              placeholder="Search courses by title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#111625] border border-gray-800 rounded-xl pl-12 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:shadow-[0_0_15px_rgba(34,211,238,0.1)] transition-all"
            />
          </div>
        </div>

        {/* Courses Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#111625]/30 rounded-2xl border border-gray-900">
            <p className="text-gray-400 text-lg">No courses found matching "{search}"</p>
          </div>
        )}

      </div>
    </main>
  );
}