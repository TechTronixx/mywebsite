import React from "react";
import { useTheme } from "next-themes";
import data from "../../data/portfolio.json";

const AnnouncementBanner = ({ message, linkText, linkUrl }) => {
  const { theme } = useTheme();

  return (
    <div className="relative isolate">
      <div
        className={`w-full py-3 px-4 text-center border-b transition-all duration-300 z-50 ${
          theme === "dark"
            ? "bg-black/50 border-white/5 backdrop-blur-md text-white"
            : "bg-white/50 border-black/5 backdrop-blur-md text-black"
        }`}
      >
        <div className="flex flex-col tablet:flex-row items-center justify-center gap-3 tablet:gap-6">
          <p className="text-sm font-medium tracking-wide opacity-90">
            {message}
          </p>
          <a
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-xs uppercase tracking-widest font-bold px-4 py-1.5 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 link shadow-sm ${
              theme === "dark"
                ? "bg-white text-black hover:bg-slate-200"
                : "bg-black text-white hover:bg-slate-800"
            } ${data.showCursor && "cursor-none"}`}
          >
            {linkText}
          </a>
        </div>
      </div>
      <div className="gradient-circle !top-0 !h-20 !opacity-40"></div>
    </div>
  );
};

export default AnnouncementBanner;
