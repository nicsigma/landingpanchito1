
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 
    | "fade-in" 
    | "fade-in-delay-1" 
    | "fade-in-delay-2" 
    | "fade-in-delay-3" 
    | "fade-in-right" 
    | "fade-in-left" 
    | "scale-in";
  threshold?: number;
  id?: string;
}

export default function AnimatedSection({
  children,
  className = "",
  animation = "fade-in",
  threshold = 0.1,
  id,
}: AnimatedSectionProps) {
  const { ref, isInView } = useIntersectionObserver({ threshold });

  return (
    <div
      ref={ref}
      id={id}
      className={`${className} ${isInView ? `animate-${animation}` : "opacity-0"}`}
    >
      {children}
    </div>
  );
}
