import { cn } from "@/lib/utils";
import { useState, type ReactNode } from "react";
import { ScannerCardStream } from "@/components/ui/scanner-card-stream";

interface ComponentProps {
  children?: ReactNode;
}

export default function Component({ children }: ComponentProps) {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full relative">
      {/* Extended Background Container */}
      <div className="absolute inset-0 w-full" style={{ minHeight: '200vh' }}>
        {/* Top Half: Dark Green with Grid */}
        <div className="absolute top-0 left-0 w-full" style={{ height: '100vh', background: '#0a1f1a' }}>
          {/* Grid Background Pattern */}
          <div
            className="absolute inset-0 w-full"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(16, 185, 129, 0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Bottom Half: Solid Mint Color */}
        <div
          className="absolute left-0 w-full"
          style={{
            top: '100vh',
            minHeight: '100vh',
            background: '#DDF8E7'
          }}
        />
      </div>

      {/* 3D Carousel Background - Full Hero Section */}
      <div className="absolute top-0 left-0 w-full h-screen z-[2]">
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
      <div className="relative z-10">
        {children}
      </div>
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
