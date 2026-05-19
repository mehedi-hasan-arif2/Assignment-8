"use client";
import Image from 'next/image';
import Link from 'next/link';
import { Star, ArrowRight } from 'lucide-react';
import { motion } from "framer-motion";

export default function CourseCard({ course }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.8 }} 
      className="group bg-[#111625] rounded-xl border border-gray-800 overflow-hidden hover:border-transparent hover:bg-gradient-to-b hover:from-[#111625] hover:to-cyan-900/20 transition-all duration-300"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image src={`/${course.image}`} alt={course.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{course.title}</h3>
        <p className="text-gray-400 mb-4">{course.instructor}</p>
        <div className="flex justify-between items-center">
          <span className="flex items-center gap-1 text-yellow-500"><Star size={16} fill="currentColor"/> {course.rating}</span>
          <Link href={`/courses/${course.id}`} className="flex items-center gap-1 font-bold text-gray-300 group-hover:text-cyan-400 transition-colors">
            Details <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}