import { cn } from "@/lib/utils";
import { useState, type ReactNode } from "react";

interface ComponentProps {
  children?: ReactNode;
}

export default function Component({ children }: ComponentProps) {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen w-full relative" style={{ background: 'linear-gradient(to bottom, #0C2F1E 0%, #0C2F1E 70%, #164d32 80%, #1f6842 90%, #DDF8E7 100%)' }}>
      {/* Diagonal darkness overlay - darker at top-left, lighter at bottom-right */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.2) 30%, transparent 60%)',
        }}
      />
      {/* Diagonal Fade Grid Background - Top Left */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 0% 0%, #000 70%, transparent 95%)",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 0% 0%, #000 70%, transparent 95%)",
        }}
      />
      {/* Your Content/Components */}
      {children}
    </div>
  );
}
