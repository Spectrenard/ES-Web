import React, { CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface RippleProps {
  mainCircleSize?: number;
  mainCircleOpacity?: number;
  numCircles?: number;
  className?: string;
}

const Ripple = React.memo(function Ripple({
  mainCircleSize = 210,
  mainCircleOpacity = 0.5,
  numCircles = 8,
  className,
}: RippleProps) {
  const circleSpacing = 70;

  return (
    <div
      className={cn(
        "pointer-events-none select-none absolute inset-0 [mask-image:linear-gradient(to_bottom,white,transparent)]",
        className
      )}
    >
      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * circleSpacing;
        const opacity = mainCircleOpacity - i * 0.05;
        const animationDelay = `${i * 0.06}s`;
        const borderStyle = i === numCircles - 1 ? "dashed" : "solid";
        const borderOpacity = 20 + i * 6;
        const isEven = i % 2 === 0;

        return (
          <div
            key={i}
            className={`absolute animate-ripple rounded-full shadow-xl border [--i:${i}]`}
            style={
              {
                width: `${size}px`,
                height: `${size}px`,
                opacity: opacity + 0.15,
                animationDelay,
                borderStyle,
                borderWidth: "1.8px",
                backgroundColor: isEven
                  ? "rgba(148, 163, 184, 0.15)"
                  : "rgba(100, 116, 139, 0.12)",
                borderColor: isEven
                  ? `rgba(148, 163, 184, ${borderOpacity / 120})`
                  : `rgba(100, 116, 139, ${borderOpacity / 120})`,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) scale(1)",
                boxShadow: isEven
                  ? "0 0 25px rgba(148, 163, 184, 0.25), 0 0 5px rgba(56, 189, 248, 0.15)"
                  : "0 0 25px rgba(100, 116, 139, 0.2), 0 0 5px rgba(99, 102, 241, 0.12)",
              } as CSSProperties
            }
          />
        );
      })}
    </div>
  );
});

Ripple.displayName = "Ripple";

export default Ripple;
