"use client";

import { useState, useEffect } from "react";
import { User, Image, ArrowRight } from "lucide-react";
import { toast } from "react-hot-toast";

export default function MyProfilePage() {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({ name: "", photoUrl: "" });

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const parsed = JSON.parse(loggedInUser);
      setUser(parsed);
      setEditForm({ name: parsed.name, photoUrl: parsed.photoUrl || "" });
    }
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedUser = { ...user, name: editForm.name, photoUrl: editForm.photoUrl };
    
    /* Save updated states */
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);
    setIsEditing(false);
    
    /* toast msg */
    toast.success("Profile Updated Successfully!");
  };

  if (!user) {
    return <div className="min-h-screen bg-[#0b0f19] text-white pt-24 text-center text-sm">Loading profile metrics...</div>;
  }

  return (
    <main className="min-h-screen bg-[#0b0f19] text-white pt-24 pb-16 px-4 sm:px-6 flex items-center justify-center">
      <div className="max-w-md w-full bg-[#111625] border border-gray-800 p-8 rounded-2xl space-y-6 relative">
        
        {!isEditing ? (
          <div className="text-center space-y-5">
            <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden border-2 border-cyan-500/30 bg-[#0b0f19]">
              <img src={user.photoUrl || "https://www.svgrepo.com/show/507442/user-circle.svg"} alt="Profile" className="object-cover w-full h-full" />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold">{user.name}</h2>
              <p className="text-sm text-gray-500 mt-1">{user.email}</p>
            </div>
            <button onClick={() => setIsEditing(true)} className="w-full py-3 bg-gradient-to-r from-cyan-600 to-violet-600 font-bold rounded-xl text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition">
              Update Profile Information <ArrowRight size={16} />
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold">🛠️ Update Information</h3>
              <p className="text-xs text-gray-400 mt-0.5">Modify your visible digital footprint below.</p>
            </div>
            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5 flex items-center gap-1"><User size={12} /> Full Name</label>
                <input type="text" required value={editForm.name} onChange={(e) => setEditForm({...editForm, name: e.target.value})} className="w-full bg-[#0b0f19] border border-gray-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500" />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5 flex items-center gap-1"><Image size={12} /> Profile Image URL</label>
                <input type="url" value={editForm.photoUrl} onChange={(e) => setEditForm({...editForm, photoUrl: e.target.value})} className="w-full bg-[#0b0f19] border border-gray-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500" placeholder="https://..." />
              </div>
              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => setIsEditing(false)} className="w-1/2 py-2.5 bg-[#0b0f19] border border-gray-800 font-semibold rounded-xl text-sm text-gray-400">Cancel</button>
                <button type="submit" className="w-1/2 py-2.5 bg-gradient-to-r from-cyan-600 to-violet-600 font-bold rounded-xl text-sm">Save Changes</button>
              </div>
            </form>
          </div>
        )}

      </div>
    </main>
  );
}