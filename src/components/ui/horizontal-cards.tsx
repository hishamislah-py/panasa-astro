import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface HorizontalCardsProps {
  className?: string;
}

export const HorizontalCards = ({ className }: HorizontalCardsProps) => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const card1X = useTransform(scrollYProgress, [0, 0.5, 1], ["50%", "-40%", "-40%"]);
  const card1Scale = useTransform(scrollYProgress, [0, 0.3, 0.5], [1, 0.8, 0.8]);
  const card1Rotate = useTransform(scrollYProgress, [0, 0.3, 0.5], [0, -10, -10]);

  const card2X = useTransform(scrollYProgress, [0.1, 0.5, 1], ["100%", "-89%", "-89%"]);
  const card2Scale = useTransform(scrollYProgress, [0.1, 0.4, 0.6], [1, 0.9, 0.9]);
  const card2Rotate = useTransform(scrollYProgress, [0.1, 0.4, 0.6], [0, 0, 0]);

  const card3X = useTransform(scrollYProgress, [0.2, 0.6, 1], ["150%", "-93%", "-93%"]);
  const card3Scale = useTransform(scrollYProgress, [0.2, 0.5, 0.7], [1, 0.91, 0.91]);
  const card3Rotate = useTransform(scrollYProgress, [0.2, 0.5, 0.7], [0, 7, 7]);

  return (
    <section
      ref={containerRef}
      className={cn("w-full py-32 bg-[#f5f5f5] relative overflow-hidden", className)}
    >
      <div className="w-full px-4 md:px-8 lg:px-12">
        {/* Main Container with background color */}
        <div className="bg-[#DFC9C0] rounded-[40px] md:rounded-[60px] p-8 md:p-12 lg:p-20 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0C2F1E] leading-tight">
                  Unlock the power{" "}
                  <span className="relative inline-block">
                    of banking data
                    <svg
                      className="absolute -bottom-2 left-0 w-full"
                      viewBox="0 0 448 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M73.3804 22.8573C166.579 20.3422 259.873 18.2243 352.949 14.802C356.34 14.6774 368.152 14.4647 374.62 13.754"
                        stroke="#ffae9b"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                      <path
                        d="M1.99989 20.173C62.4908 14.9745 123.484 13.4458 184.125 11.1428C262.309 8.17355 340.509 5.23404 418.755 4.25167C427.273 4.14472 452.789 3.54451 444.281 3.07897"
                        stroke="#ffae9b"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </h2>
              </div>

              <div className="pt-4">
                <button className="px-8 py-4 bg-[#0C2F1E] text-white rounded-lg hover:bg-[#ffae9b] hover:text-white transition-all hover:scale-105 font-semibold text-lg shadow-lg flex items-center gap-2 group">
                  Get started
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right side - Animated cards */}
            <div className="relative h-[600px] w-full">
            {/* Card 1 - Balance */}
            <motion.div
              className="absolute top-0 right-0 w-[300px] bg-[#f0e6dc] rounded-3xl p-8 shadow-xl"
              style={{
                x: card1X,
                scale: card1Scale,
                rotate: card1Rotate,
              }}
            >
              <div className="space-y-6">
                <div className="relative w-32 h-32 mx-auto">
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-[#2a3f3a]"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-[#9a9488]"
                    style={{ clipPath: "polygon(50% 50%, 100% 0, 100% 100%)" }}
                    animate={{ rotate: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold text-[#0C2F1E]">Balance</h3>
                  <p className="text-sm text-gray-600">
                    Verify real-time account balances.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 2 - Transactions */}
            <motion.div
              className="absolute top-[150px] right-0 w-[280px] bg-[#f0e6dc] rounded-3xl p-8 shadow-xl"
              style={{
                x: card2X,
                scale: card2Scale,
                rotate: card2Rotate,
              }}
            >
              <div className="space-y-6">
                <div className="text-left space-y-2">
                  <h3 className="text-2xl font-bold text-[#0C2F1E]">
                    Transactions
                  </h3>
                  <p className="text-sm text-gray-600">
                    Access detailed transaction history.
                  </p>
                </div>
                <div className="relative w-32 h-32 ml-auto">
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-[#2a3f3a]"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#9a9488]"
                    animate={{ scale: [1, 0.9, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Card 3 - Bank account details */}
            <motion.div
              className="absolute top-[300px] right-0 w-[320px] bg-[#f0e6dc] rounded-3xl p-8 shadow-xl"
              style={{
                x: card3X,
                scale: card3Scale,
                rotate: card3Rotate,
              }}
            >
              <div className="space-y-6">
                <div className="relative w-32 h-32 mx-auto">
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-16 rounded-2xl bg-[#6b6b6b]"
                    animate={{ rotate: [-3, 2, -3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-[#2a3f3a]"
                    animate={{ rotate: [-5, 3, -5] }}
                    transition={{ duration: 3.5, repeat: Infinity }}
                  />
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold text-[#0C2F1E]">
                    Bank account details
                  </h3>
                  <p className="text-sm text-gray-600">
                    Verify users' identities and reduce fraud.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};
