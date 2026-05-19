"use client";
import { useRouter } from 'next/navigation';
import { useEffect, useState, use } from 'react';
import { notFound } from 'next/navigation';
import courses from '@/data/courses.json';

export default function CourseDetailsPage({ params }) {
  const { id } = use(params);
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const loggedIn = localStorage.getItem("isLoggedIn");
    
    if (!loggedIn) {
      router.push('/login'); 
    } else {
      setLoading(false); 
    }
  }, [router]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-white">Loading...</div>;
  }

  const course = courses.find((c) => c.id === parseInt(id));
  if (!course) return notFound();

  return (
    <section className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-5xl font-black mb-6 text-white">{course.title}</h1>
      <p className="text-xl text-gray-400 mb-8">{course.description}</p>
      
      <div className="bg-[#111625] p-8 rounded-2xl border border-gray-800">
        <h3 className="text-2xl font-bold mb-4 text-white">Course Details</h3>
        <ul className="space-y-2 text-gray-300">
          <li><strong>Instructor:</strong> {course.instructor}</li>
          <li><strong>Duration:</strong> {course.duration}</li>
          <li><strong>Level:</strong> {course.level}</li>
          <li><strong>Rating:</strong> {course.rating} Stars</li>
        </ul>
      </div>
    </section>
  );
}