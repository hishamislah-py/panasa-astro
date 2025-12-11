import { cn } from "@/lib/utils";
import { useState, type ReactNode } from "react";
import { ScannerCardStream } from "@/components/ui/scanner-card-stream";

interface ComponentProps {
  children?: ReactNode;
}

export default function Component({ children }: ComponentProps) {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen w-full relative" style={{ background: '#0a1f1a' }}>
      {/* Grid Background Pattern */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(16, 185, 129, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* 3D Carousel Background - Full Hero Section */}
      <div className="absolute top-0 left-0 w-full h-screen z-[1]">
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
      </div>

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
