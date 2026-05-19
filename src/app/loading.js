export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
      <div className="w-16 h-16 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin"></div>
      <p className="text-cyan-500 font-medium animate-pulse">Loading Skills...</p>
    </div>
  );
}