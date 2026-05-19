"use client";
import Link from 'next/link';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    toast.success("Login Successful!");
    router.push('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <form onSubmit={handleLogin} className="w-full max-w-md bg-[#111625] p-8 rounded-2xl border border-gray-800">
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
        <input type="email" placeholder="Email" className="w-full p-3 mb-4 rounded-lg bg-[#0b0f19] border border-gray-700 text-white" required />
        <input type="password" placeholder="Password" className="w-full p-3 mb-6 rounded-lg bg-[#0b0f19] border border-gray-700 text-white" required />
        <button type="submit" className="w-full py-3 bg-cyan-600 rounded-lg font-bold hover:bg-cyan-700 transition">Login</button>
        
        <button type="button" className="w-full mt-4 py-3 bg-white text-black rounded-lg font-bold hover:bg-gray-200 transition">
            Login with Google
        </button>

        <p className="mt-4 text-center text-gray-400">Don't have an account? <Link href="/register" className="text-cyan-400 underline">Register</Link></p>
      </form>
    </div>
  );
}