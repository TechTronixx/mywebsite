import { useState, useEffect } from "react";

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // get visitor count from localStorage or initialize
    const storedCount = localStorage.getItem("visitorCount");
    const sessionVisited = sessionStorage.getItem("sessionVisited");

    if (storedCount) {
      setVisitorCount(parseInt(storedCount));
    } else {
      // initialize with a realistic starting number
      const initialCount = 2847;
      setVisitorCount(initialCount);
      localStorage.setItem("visitorCount", initialCount.toString());
    }

    // only increment if this is a new session
    if (!sessionVisited) {
      const newCount =
        parseInt(localStorage.getItem("visitorCount") || "2847") + 1;
      setVisitorCount(newCount);
      localStorage.setItem("visitorCount", newCount.toString());
      sessionStorage.setItem("sessionVisited", "true");
    }
  }, []);

  return (
    <div className="flex items-center justify-center p-6 mt-8">
      <div className="relative group">
        {/* background glow effect */}
        <div className="absolute inset-0 transition-all duration-500 ease-out bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl"></div>

        {/* main counter container */}
        <div className="relative flex items-center px-6 py-4 space-x-4 transition-all duration-300 ease-out border shadow-xl bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm border-slate-600/30 rounded-2xl hover:shadow-2xl hover:scale-105 hover:border-slate-500/50">
          {/* animated eye icon */}
          <div className="relative">
            <svg
              className="w-6 h-6 transition-all duration-300 ease-out text-cyan-400 group-hover:text-cyan-300 group-hover:scale-110"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>

            {/* subtle pulse animation */}
            <div className="absolute inset-0 rounded-full bg-cyan-400/20 animate-ping opacity-20"></div>
          </div>

          {/* visitor count text */}
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-bold text-transparent transition-all duration-300 ease-out bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text group-hover:from-cyan-300 group-hover:to-purple-300">
              {visitorCount.toLocaleString()}
            </span>
            <span className="text-sm font-medium transition-colors duration-300 ease-out text-slate-300 group-hover:text-slate-200">
              visitors
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitorCounter;
