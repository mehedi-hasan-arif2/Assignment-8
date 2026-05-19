"use client";

import Link from "next/link";

export default function Navbar() {
  const user = null;

  return (
    <nav className="fixed w-full z-50 border-b border-white/10 bg-[#070A12]/60 backdrop-blur-2xl overflow-hidden">

      {/* MOVING AURORA BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] animate-blob1"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-500/20 blur-[120px] animate-blob2"></div>
        <div className="absolute bottom-0 left-1/2 w-[400px] h-[400px] bg-blue-500/20 blur-[120px] animate-blob3"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-2 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-3">

        {/* LOGO */}
        <Link
          href="/"
          className="text-lg sm:text-2xl font-black tracking-tight whitespace-nowrap flex-shrink-0"
        >
          <span className="text-white">Skill</span>

          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 via-indigo-400 to-violet-500 bg-[length:200%_200%] bg-clip-text text-transparent animate-flow">
            Sphere
          </span>
        </Link>

        {/* NAV */}
        <div className="flex items-center justify-center gap-2 sm:gap-10 text-[10px] sm:text-sm font-medium text-gray-400 flex-shrink min-w-0">

          {["Home", "Courses", "My Profile"].map((item) => (
            <Link
              key={item}
              href={
                item === "Home"
                  ? "/"
                  : item === "My Profile"
                  ? "/profile"
                  : `/${item.toLowerCase()}`
              }
              className="relative group hover:text-white transition whitespace-nowrap"
            >
              {item}

              {/* animated underline */}
              <span className="absolute left-0 -bottom-1 sm:-bottom-2 w-0 h-[2px] bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-1.5 sm:gap-4 flex-shrink-0">

          {!user ? (
            <>
              <Link
                href="/login"
                className="text-[10px] sm:text-sm text-gray-300 hover:text-white transition whitespace-nowrap"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="px-2.5 sm:px-5 py-1.5 sm:py-2.5 rounded-xl text-[10px] sm:text-sm font-bold text-white
                bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-600
                hover:scale-[1.05] active:scale-95 transition-all duration-300 whitespace-nowrap"
              >
                Register
              </Link>
            </>
          ) : (
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 animate-pulse" />
          )}

        </div>

      </div>

      {/* ANIMATIONS */}
      <style jsx>{`
        @keyframes flow {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }

        .animate-flow {
          animation: flow 6s linear infinite;
          background-size: 200% 200%;
        }

        @keyframes blob1 {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          50% {
            transform: translate(100px, 50px) scale(1.2);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        @keyframes blob2 {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          50% {
            transform: translate(-80px, 60px) scale(1.3);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        @keyframes blob3 {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          50% {
            transform: translate(60px, -40px) scale(1.2);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        .animate-blob1 {
          animation: blob1 10s ease-in-out infinite;
        }

        .animate-blob2 {
          animation: blob2 12s ease-in-out infinite;
        }

        .animate-blob3 {
          animation: blob3 14s ease-in-out infinite;
        }
      `}</style>

    </nav>
  );
}