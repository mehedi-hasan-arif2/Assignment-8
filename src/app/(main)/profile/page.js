"use client";
import Link from 'next/link';

export default function ProfilePage() {
  const user = { name: "Mehedi Hasan", email: "mehedi@example.com", image: "https://via.placeholder.com/150" };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-white p-10">
      <div className="max-w-md mx-auto bg-[#111625] p-8 rounded-2xl border border-gray-800 text-center">
        <img src={user.image} className="w-32 h-32 rounded-full mx-auto mb-4" />
        <h2 className="text-2xl font-bold">{user.name}</h2>
        <p className="text-gray-400 mb-6">{user.email}</p>
        <Link href="/profile/update" className="px-6 py-2 bg-cyan-600 rounded-lg font-bold">Update Profile</Link>
      </div>
    </div>
  );
}