"use client";
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function UpdateProfilePage() {
  const router = useRouter();

  const handleUpdate = (e) => {
    e.preventDefault();
    toast.success("Profile Updated!");
    router.push('/profile');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <form onSubmit={handleUpdate} className="w-full max-w-md bg-[#111625] p-8 rounded-2xl border border-gray-800">
        <h2 className="text-2xl font-bold mb-6">Update Profile</h2>
        <input type="text" placeholder="New Name" className="w-full p-3 mb-4 rounded-lg bg-[#0b0f19] border border-gray-700 text-white" />
        <input type="text" placeholder="New Photo URL" className="w-full p-3 mb-6 rounded-lg bg-[#0b0f19] border border-gray-700 text-white" />
        <button type="submit" className="w-full py-3 bg-cyan-600 rounded-lg font-bold">Update Information</button>
      </form>
    </div>
  );
}