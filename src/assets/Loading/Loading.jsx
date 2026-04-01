export default function Loader() {
  return (
    <div 
      className="flex flex-col items-center justify-center min-h-screen bg-slate-50"
      role="status"
    >
      {/* Spinner Container */}
      <div className="relative flex items-center justify-center w-16 h-16">
        {/* Background Track */}
        <div className="absolute w-full h-full border-4 border-slate-200 rounded-full"></div>
        
        {/* Spinning Indicator */}
        <div className="absolute w-full h-full border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
      </div>

      {/* Loading Text */}
      <p className="mt-4 text-lg font-medium text-slate-600 animate-pulse">
        Loading...
      </p>

      {/* Screen Reader Text (Hidden visually) */}
      <span className="sr-only">Loading content, please wait.</span>
    </div>
  );
}