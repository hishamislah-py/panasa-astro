import { cn } from "@/lib/utils";
import { useState, type ReactNode } from "react";
import { ScannerCardStream } from "@/components/ui/scanner-card-stream";

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

export function DemoScanner() {
  return (
    <ScannerCardStream
      cardImages={[
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=250&fit=crop",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop",
        "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=400&h=250&fit=crop",
        "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=250&fit=crop",
        "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=400&h=250&fit=crop",
      ]}
      showControls={false}
      showSpeed={false}
      initialSpeed={120}
      friction={0.95}
      scanEffect="scramble"
      repeat={6}
    />
  );
}
