"use client";
import { useState } from 'react';
import courses from '@/data/courses.json';
import CourseCard from '@/components/CourseCard';

export default function AllCoursesPage() {
  const [search, setSearch] = useState('');

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-bold mb-12 text-center">Explore All Courses</h2>
      
      <div className="mb-12 flex justify-center">
        <input
          type="text"
          placeholder="Search courses by title..."
          className="w-full max-w-md px-6 py-3 rounded-xl bg-[#111625] border border-gray-700 text-white focus:outline-none focus:border-cyan-500 transition-all"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-500">No courses found matching your search.</p>
        )}
      </div>
    </section>
  );
}