"use client";
import Link from 'next/link';
import { toast } from 'sonner';

export default function RegisterPage() {
  const handleRegister = (e) => {
    e.preventDefault();
    toast.success("Registration Successful!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <form onSubmit={handleRegister} className="w-full max-w-md bg-[#111625] p-8 rounded-2xl border border-gray-800">
        <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>
        <input type="text" placeholder="Name" className="w-full p-3 mb-4 rounded-lg bg-[#0b0f19] border border-gray-700 text-white" required />
        <input type="email" placeholder="Email" className="w-full p-3 mb-4 rounded-lg bg-[#0b0f19] border border-gray-700 text-white" required />
        <input type="password" placeholder="Password" className="w-full p-3 mb-6 rounded-lg bg-[#0b0f19] border border-gray-700 text-white" required />
        <button type="submit" className="w-full py-3 bg-violet-600 rounded-lg font-bold hover:bg-violet-700 transition">Register</button>
        <p className="mt-4 text-center text-gray-400">Already have an account? <Link href="/login" className="text-cyan-400 underline">Login</Link></p>
      </form>
    </div>
  );
}