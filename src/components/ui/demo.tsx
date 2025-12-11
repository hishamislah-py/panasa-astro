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
            "/images/689f20b55e654d1341fb06f8_4.1.png",
            "/images/689f20b5c1e4919fd69672b8_3.png",
            "/images/689f20b5bea2f1b07392d936_4.png",
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
        "/images/689f20b55e654d1341fb06f8_4.1.png",
        "/images/689f20b5c1e4919fd69672b8_3.png",
        "/images/689f20b5bea2f1b07392d936_4.png",
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
