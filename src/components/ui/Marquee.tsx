import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  pauseOnHover?: boolean;
  direction?: "left" | "right";
  className?: string;
}

const Marquee = ({ 
  children, 
  speed = 30, 
  pauseOnHover = true, 
  direction = "left",
  className = "" 
}: MarqueeProps) => {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const firstChild = containerRef.current.querySelector('[data-marquee-content]');
      if (firstChild) {
        setContentWidth(firstChild.scrollWidth);
      }
    }
  }, [children]);

  const duration = contentWidth / speed;
  const directionMultiplier = direction === "left" ? -1 : 1;

  return (
    <div 
      className={`overflow-hidden ${className}`}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <div ref={containerRef} className="flex">
        <motion.div
          className="flex shrink-0"
          animate={{
            x: [0, directionMultiplier * contentWidth],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: duration || 20,
              ease: "linear",
            },
          }}
          style={{
            animationPlayState: isPaused ? "paused" : "running",
          }}
          data-marquee-content
        >
          <div className="flex shrink-0">{children}</div>
          <div className="flex shrink-0">{children}</div>
        </motion.div>
        <motion.div
          className="flex shrink-0"
          animate={{
            x: [0, directionMultiplier * contentWidth],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: duration || 20,
              ease: "linear",
            },
          }}
          style={{
            animationPlayState: isPaused ? "paused" : "running",
          }}
        >
          <div className="flex shrink-0">{children}</div>
          <div className="flex shrink-0">{children}</div>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;

