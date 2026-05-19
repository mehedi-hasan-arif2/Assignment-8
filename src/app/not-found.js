"use client";

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#111625] text-white p-6 relative overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* 404 Custom Illustration Wrapper */}
      <div className="relative w-full max-w-[640px] mb-8 select-none">
        <svg 
          viewBox="0 0 800 350" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-auto drop-shadow-[0_10px_30px_rgba(147,51,234,0.2)]"
        >
          {/* Gradients and Masking Definitions */}
          <defs>
            <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EC4899" />
              <stop offset="40%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
            <linearGradient id="liquidGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="50%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#1e1b4b" />
            </linearGradient>
            <linearGradient id="rocketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F97316" />
              <stop offset="100%" stopColor="#EF4444" />
            </linearGradient>

            {/* Clip path to lock liquid animation strictly inside the number 0 */}
            <clipPath id="hollowZero">
              <path d="M425 70 C365 70 325 110 325 180 C325 250 365 290 425 290 C485 290 525 250 525 180 C525 110 485 70 425 70 Z M425 120 C450 120 465 140 465 180 C465 220 450 240 425 240 C400 240 385 220 385 180 C385 140 400 120 425 120 Z" />
            </clipPath>
          </defs>

          {/* Background Space Decorative Elements */}
          <g className="opacity-60">
            <circle cx="100" cy="80" r="3" fill="#FFF" className="animate-pulse" />
            <circle cx="720" cy="120" r="2" fill="#FFF" className="animate-pulse delay-500" />
            <circle cx="400" cy="40" r="2.5" fill="#FFF" className="animate-pulse delay-300" />
            <polygon points="90,140 95,145 90,150 85,145" fill="#F472B6" />
            <polygon points="620,80 624,85 620,90 616,85" fill="#FB923C" />
          </g>

          {/* First NUMBER 4 (Hollow inner cutout) */}
          <g transform="translate(60, 30)">
            <path 
              d="M 150 0 L 20 180 L 150 180 Z M 150 210 L 0 210 L 0 180 L 150 0 L 200 0 L 200 180 L 240 180 L 240 210 L 200 210 L 200 290 L 150 290 Z" 
              fill="url(#grad4)" 
            />
            <circle cx="175" cy="90" r="14" fill="#F472B6" opacity="0.4" />
            <circle cx="80" cy="240" r="8" fill="#FB923C" opacity="0.5" />
          </g>

          {/* Middle NUMBER 0 Layer Border */}
          <g transform="translate(315, 30)">
            <path 
              d="M110 40 C50 40 10 80 10 150 C10 220 50 260 110 260 C170 260 210 220 210 150 C210 80 170 40 110 40 Z M110 90 C135 90 150 110 150 150 C150 190 135 210 110 210 C85 210 70 190 70 150 C70 110 85 90 110 90 Z" 
              fill="none" 
              stroke="url(#grad4)"
              strokeWidth="5"
            />
          </g>

          {/* Animated Liquid Wave Inside Number 0 */}
          <g clipPath="url(#hollowZero)">
            {/* Base color fill */}
            <rect x="310" y="60" width="230" height="240" fill="#1e1b4b" />
            
            {/* Moving wave element */}
            <path 
              d="M 300 200 Q 360 170, 420 200 T 540 200 L 540 310 L 300 310 Z" 
              fill="url(#liquidGrad)" 
              className="animate-wave"
            />
            
            {/* Decorative inner bubbles */}
            <circle cx="390" cy="220" r="5" fill="#fff" opacity="0.3" className="animate-bubble-fast" />
            <circle cx="450" cy="180" r="3" fill="#fff" opacity="0.4" className="animate-bubble-slow" />
            <circle cx="420" cy="250" r="4" fill="#fff" opacity="0.2" className="animate-bubble-fast" />
          </g>

          {/* Second NUMBER 4 (Hollow inner cutout) */}
          <g transform="translate(560, 30)">
            <path 
              d="M 150 0 L 20 180 L 150 180 Z M 150 210 L 0 210 L 0 180 L 150 0 L 200 0 L 200 180 L 240 180 L 240 210 L 200 210 L 200 290 L 150 290 Z" 
              fill="url(#grad4)" 
            />
            <circle cx="60" cy="120" r="16" fill="#EC4899" opacity="0.4" />
          </g>

          {/* Animated Continuous Assets */}
          
          {/* 1. Floating Rocket Asset */}
          <g className="animate-float">
            <g transform="translate(500, 40) rotate(15)">
              <path d="M0 25 C0 10 20 0 45 0 C45 20 35 45 15 45 C0 45 0 35 0 25 Z" fill="url(#rocketGrad)" />
              <path d="M5 25 C5 20 15 15 25 15" stroke="#FFF" strokeWidth="3" strokeLinecap="round" />
              <circle cx="25" cy="25" r="5" fill="#FFE4E6" />
              <path d="M-5 35 Q -15 45 -5 50 Q 5 45 -5 35" fill="#F59E0B" className="animate-pulse" />
            </g>
          </g>

          {/* 2. Orbiting Planet (Right Side) */}
          <g transform="translate(710, 140)">
            <circle cx="0" cy="0" r="35" fill="#FB923C" />
            <ellipse cx="0" cy="0" rx="55" ry="12" fill="none" stroke="#FDBA74" strokeWidth="6" transform="rotate(-15)" className="animate-spin-slow" />
          </g>

          {/* 3. Game Controller Wire Asset */}
          <g transform="translate(240, 120)">
            <path d="M 10 20 Q 30 60 15 110 T 50 130" fill="none" stroke="#F472B6" strokeWidth="4" strokeLinecap="round" />
            <rect x="35" y="120" width="50" height="30" rx="10" fill="#FB923C" />
            <circle cx="48" cy="135" r="4" fill="#111625" />
            <circle cx="72" cy="130" r="3" fill="#EF4444" />
            <circle cx="72" cy="140" r="3" fill="#3B82F6" />
          </g>

          {/* 4. Satellite Asset (Bottom Middle) */}
          <g className="animate-bounce-slow" transform="translate(450, 180)">
            <rect x="0" y="20" width="15" height="40" fill="#E2E8F0" />
            <rect x="-25" y="25" width="20" height="12" fill="#3B82F6" />
            <rect x="20" y="25" width="20" height="12" fill="#3B82F6" />
            <circle cx="7" cy="15" r="8" fill="#FB923C" />
          </g>

          {/* 5. Floating Radar Dish (Left Bottom) */}
          <g transform="translate(50, 200)" className="animate-float">
            <path d="M10 30 Q 35 10 60 30 Z" fill="#A78BFA" />
            <rect x="30" y="30" width="10" height="15" fill="#7C3AED" />
            <ellipse cx="35" cy="45" rx="20" ry="6" fill="#4C1D95" />
          </g>
        </svg>
      </div>

      {/* Typography and Actions */}
      <div className="text-center z-10 max-w-md">
        <h2 className="text-4xl font-black tracking-tight bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent mb-3">
          Page Not Found
        </h2>
        <p className="text-slate-400 text-base mb-8 leading-relaxed">
          The learning path you are trying to access does not exist or has been permanently shifted.
        </p>

        <Link 
          href="/" 
          className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 active:scale-95"
        >
          Return to Home
        </Link>
      </div>

      {/* Core Dynamic CSS Motion Engine */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-6px) rotate(3deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes waveMove {
          0% { d: path("M 300 200 Q 360 170, 420 200 T 540 200 L 540 310 L 300 310 Z"); }
          50% { d: path("M 300 190 Q 360 210, 420 180 T 540 190 L 540 310 L 300 310 Z"); }
          100% { d: path("M 300 200 Q 360 170, 420 200 T 540 200 L 540 310 L 300 310 Z"); }
        }
        @keyframes bubbleUp {
          0% { transform: translateY(20px); opacity: 0; }
          50% { opacity: 0.4; }
          100% { transform: translateY(-40px); opacity: 0; }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 5s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 25s linear infinite; }
        .animate-wave { animation: waveMove 3s ease-in-out infinite; }
        .animate-bubble-fast { animation: bubbleUp 2s infinite linear; }
        .animate-bubble-slow { animation: bubbleUp 3.5s infinite linear; }
      `}</style>
    </div>
  );
}