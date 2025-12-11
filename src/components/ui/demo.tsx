import { cn } from "@/lib/utils";
import { useState, type ReactNode } from "react";

interface ComponentProps {
  children?: ReactNode;
}

export default function Component({ children }: ComponentProps) {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen w-full bg-[#f9fafb] relative">
      {/* Diagonal Fade Grid Background - Top Left */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #8bd698ff 1px, transparent 1px),
            linear-gradient(to bottom, #8bd698ff 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)",
        }}
      />
      {/* Your Content/Components */}
      {children}
    </div>
  );
}
