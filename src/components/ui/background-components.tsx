import { cn } from "@/lib/utils";
import { useState, type ReactNode } from "react";

interface ComponentProps {
  children?: ReactNode;
}

export const Component = ({ children }: ComponentProps) => {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen w-full relative bg-white">
      {/* Soft Green Glow Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at center, #10b981 0%, transparent 70%)
          `,
          opacity: 0.6,
          mixBlendMode: "multiply",
        }}
      />

      {/* Your Content/Components */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
