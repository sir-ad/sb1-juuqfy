import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10" }) => {
  return (
    <svg
      viewBox="0 0 800 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M400 50L700 200V600L400 750L100 600V200L400 50Z"
        fill="#1E40AF"
        fillOpacity="0.1"
      />
      <path
        d="M250 250H350V350H250V250Z"
        fill="currentColor"
        className="text-blue-600"
      />
      <path
        d="M450 250H550V350H450V250Z"
        fill="currentColor"
        className="text-blue-600"
      />
      <path
        d="M350 450H450V550H350V450Z"
        fill="currentColor"
        className="text-blue-600"
      />
    </svg>
  );
};

export default Logo;