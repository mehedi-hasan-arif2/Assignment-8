"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import courses from "@/data/courses.json";
import Link from "next/link";
import { ArrowLeft, BookOpen, Clock, Award, CheckCircle } from "lucide-react";

export default function CourseDetailsPage({ params }) {
  const unwrappedParams = use(params);
  const courseId = unwrappedParams.id;

  const course = courses.find((c) => c.id.toString() === courseId.toString());

  if (!course) {
    notFound();
  }

  const getImagePath = (imgSrc) => {
    if (!imgSrc) return "";
    if (imgSrc.startsWith("http://") || imgSrc.startsWith("https://")) {
      return imgSrc;
    }
    return imgSrc.startsWith("/") ? imgSrc : `/${imgSrc}`;
  };

  const curriculum = [
    { module: "Module 1", title: "Introduction to Core Architectures & Foundations", duration: "2 hours" },
    { module: "Module 2", title: "Deep Dive into State Architectures & Optimization", duration: "4.5 hours" },
    { module: "Module 3", title: "Building Modern Real-World Hands-on Production Apps", duration: "6 hours" },
    { module: "Module 4", title: "Deployment pipelines, Optimization & Final Assessment", duration: "3 hours" }
  ];

  return (
    <main className="min-h-screen bg-[#0b0f19] text-white pt-24 pb-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-10">
        
        <Link href="/courses" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition">
          <ArrowLeft size={16} /> Back to Courses
        </Link>

        {/* Course Main Banner Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center bg-[#111625] border border-gray-800 p-6 rounded-2xl">
          <div className="md:col-span-1 relative h-44 w-full rounded-xl overflow-hidden border border-gray-900 bg-[#0b0f19]">
            <img 
              src={getImagePath(course.image || course.img)} 
              alt={course.title} 
              className="object-cover w-full h-full" 
            />
          </div>
          <div className="md:col-span-2 space-y-3">
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">{course.title}</h1>
            <p className="text-sm text-gray-400">{course.description}</p>
            <div className="flex flex-wrap gap-4 pt-2 text-xs text-gray-400">
              <span className="flex items-center gap-1"><Clock size={14} className="text-cyan-400" /> {course.duration || "12 weeks"}</span>
              <span className="flex items-center gap-1"><BookOpen size={14} className="text-violet-400" /> {course.lessons || "42 Lessons"}</span>
              <span className="flex items-center gap-1"><Award size={14} className="text-amber-400" /> Certificate of Completion</span>
            </div>
          </div>
        </div>

        {/* Static Curriculum Requirement */}
        <div className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight border-b border-gray-900 pb-3">📦 Course Curriculum</h3>
          <div className="space-y-3">
            {curriculum.map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-[#111625]/40 border border-gray-800 rounded-xl gap-2 hover:border-gray-700 transition">
                <div className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">{item.module}</span>
                    <h5 className="font-bold text-white text-sm sm:text-base">{item.title}</h5>
                  </div>
                </div>
                <span className="text-xs bg-gray-900 border border-gray-800 text-gray-400 px-2.5 py-1 rounded-md self-start sm:self-center">{item.duration}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}