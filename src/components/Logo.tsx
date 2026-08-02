import React from "react";

export default function Logo({ className = "h-8" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* SVG Icon: Stylized Gas Flame */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto text-primary drop-shadow-sm"
      >
        {/* Outer Flame */}
        <path
          d="M12 22C16.4183 22 20 18.4183 20 14C20 9.58172 12 2 12 2C12 2 4 9.58172 4 14C4 18.4183 7.58172 22 12 22Z"
          fill="currentColor"
          className="opacity-90"
        />
        {/* Middle cutout (White/Surface) */}
        <path
          d="M12 22C14.7614 22 17 19.7614 17 17C17 14.2386 12 9 12 9C12 9 7 14.2386 7 17C7 19.7614 9.23858 22 12 22Z"
          fill="white"
        />
        {/* Inner Flame */}
        <path
          d="M12 19.5C13.3807 19.5 14.5 18.3807 14.5 17C14.5 15.6193 12 12.5 12 12.5C12 12.5 9.5 15.6193 9.5 17C9.5 18.3807 10.6193 19.5 12 19.5Z"
          fill="currentColor"
        />
      </svg>
      
      {/* Text part */}
      <div className="flex flex-col justify-center translate-y-[2px]">
        <span className="font-headline-lg font-black text-[22px] leading-none tracking-wide text-on-background">
          GIS
        </span>
        <span className="font-label-sm font-bold text-[9px] leading-none tracking-[0.25em] text-primary mt-1">
          INSTALACIONES
        </span>
      </div>
    </div>
  );
}
