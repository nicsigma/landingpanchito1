
import { useEffect, useRef } from "react";

interface MountainDividerProps {
  position: "top" | "bottom";
  color?: string;
  className?: string;
}

export default function MountainDivider({ position, color = "#ffffff", className = "" }: MountainDividerProps) {
  const pathRef = useRef<SVGPathElement>(null);
  
  useEffect(() => {
    if (!pathRef.current) return;
    
    const length = pathRef.current.getTotalLength();
    
    // Set initial properties
    pathRef.current.style.strokeDasharray = `${length}`;
    pathRef.current.style.strokeDashoffset = `${length}`;
    
    // Trigger animation
    setTimeout(() => {
      if (pathRef.current) {
        pathRef.current.style.transition = "stroke-dashoffset 1.5s ease-in-out";
        pathRef.current.style.strokeDashoffset = "0";
      }
    }, 100);
  }, []);
  
  return (
    <div className={`absolute left-0 right-0 w-full overflow-hidden ${position === "top" ? "top-0" : "bottom-0"} ${className}`} style={{ height: "100px" }}>
      <svg
        preserveAspectRatio="none"
        width="100%"
        height="100%"
        viewBox="0 0 1200 120"
        xmlns="http://www.w3.org/2000/svg"
        style={{ 
          display: "block", 
          transform: position === "top" ? "rotate(180deg)" : "rotate(0deg)" 
        }}
      >
        <path
          ref={pathRef}
          d="M0,0 L60,20 L120,10 L240,50 L360,30 L480,70 L600,40 L720,90 L840,60 L960,100 L1080,30 L1200,60 L1200,120 L0,120 Z"
          fill={color}
          stroke={color}
          strokeWidth="0"
        />
      </svg>
    </div>
  );
}
