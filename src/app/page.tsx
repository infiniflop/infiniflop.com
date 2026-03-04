"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

// ─── Constants ──────────────────────────────────────────
const YELLOW = "#FFE600";

// ─── Circuit Board Background ───────────────────────────
const CircuitBackground = () => (
  <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
    {/* Grid pattern */}
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `
          linear-gradient(to right, ${YELLOW}09 1px, transparent 1px),
          linear-gradient(to bottom, ${YELLOW}09 1px, transparent 1px)
        `,
        backgroundSize: "48px 48px",
      }}
    />

    {/* Right-side circuit traces */}
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.15 }}
      transition={{ duration: 1.5, delay: 0.5 }}
      className="absolute -right-10 top-[12%] hidden h-[450px] w-[450px] md:block"
      viewBox="0 0 450 450"
      fill="none"
    >
      <motion.path
        d="M 0 120 H 220 L 260 80 H 430"
        stroke={YELLOW}
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
      />
      <motion.path
        d="M 220 120 V 240 H 400"
        stroke={YELLOW}
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 1.8, ease: "easeInOut" }}
      />
      <motion.path
        d="M 80 300 H 220 V 200"
        stroke={YELLOW}
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 2.2, ease: "easeInOut" }}
      />
      <motion.circle
        cx="220" cy="120" r="3" fill={YELLOW}
        initial={{ scale: 0 }} animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring" }}
      />
      <motion.circle
        cx="220" cy="200" r="3" fill={YELLOW}
        initial={{ scale: 0 }} animate={{ scale: 1 }}
        transition={{ delay: 2.8, type: "spring" }}
      />
      <motion.circle
        cx="400" cy="240" r="3" fill={YELLOW}
        initial={{ scale: 0 }} animate={{ scale: 1 }}
        transition={{ delay: 2.5, type: "spring" }}
      />
    </motion.svg>

    {/* Bottom-left circuit traces */}
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.12 }}
      transition={{ duration: 1.5, delay: 1 }}
      className="absolute -left-5 bottom-[8%] hidden h-[300px] w-[350px] md:block"
      viewBox="0 0 350 300"
      fill="none"
    >
      <motion.path
        d="M 350 140 H 180 V 60 H 30"
        stroke={YELLOW}
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 1.5, ease: "easeInOut" }}
      />
      <motion.path
        d="M 180 140 V 250 H 50"
        stroke={YELLOW}
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 2.2, ease: "easeInOut" }}
      />
      <motion.circle
        cx="180" cy="140" r="3" fill={YELLOW}
        initial={{ scale: 0 }} animate={{ scale: 1 }}
        transition={{ delay: 2.8, type: "spring" }}
      />
    </motion.svg>
  </div>
);

// ─── Typewriter Terminal Block ──────────────────────────
const TERMINAL_LINES = [
  { text: "import infiniflop;", isStatus: false },
  { text: "infiniflop.sendJob();", isStatus: false },
  { text: "STATUS: GPU CLUSTER ACTIVE", isStatus: true },
];

const TerminalBlock = ({ onComplete }: { onComplete: () => void }) => {
  const [lineIndex, setLineIndex] = useState(-1);
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState<"idle" | "typing" | "pausing" | "done">(
    "idle",
  );

  // Start typing after initial delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLineIndex(0);
      setCharIndex(0);
      setPhase("typing");
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  // Typing engine
  useEffect(() => {
    if (phase === "typing" && lineIndex >= 0) {
      const currentLine = TERMINAL_LINES[lineIndex];
      if (charIndex < currentLine.text.length) {
        const timer = setTimeout(
          () => setCharIndex((c) => c + 1),
          30,
        );
        return () => clearTimeout(timer);
      }
      // Line complete
      if (lineIndex < TERMINAL_LINES.length - 1) {
        setPhase("pausing");
      } else {
        setPhase("done");
        onComplete();
      }
    } else if (phase === "pausing") {
      // Longer pause before the status line
      const pauseMs = lineIndex === 1 ? 450 : 200;
      const timer = setTimeout(() => {
        setLineIndex((i) => i + 1);
        setCharIndex(0);
        setPhase("typing");
      }, pauseMs);
      return () => clearTimeout(timer);
    }
  }, [phase, lineIndex, charIndex, onComplete]);

  return (
    <div className="mb-10 space-y-1.5 sm:space-y-2">
      {TERMINAL_LINES.map((line, i) => {
        if (i > lineIndex || lineIndex < 0) return null;

        const displayText =
          i === lineIndex ? line.text.slice(0, charIndex) : line.text;
        const isActive = i === lineIndex && phase === "typing";
        const isFinalLine = i === TERMINAL_LINES.length - 1;
        const showCursor =
          isActive || (isFinalLine && phase === "done");

        return (
          <React.Fragment key={i}>
            {line.isStatus && <div className="h-1.5 sm:h-3" />}
            <div className="flex items-center font-mono text-sm text-zinc-400 sm:text-base">
              <span className="mr-2 select-none text-zinc-600">&gt;</span>
              {line.isStatus ? (
                <span className="uppercase tracking-wider">
                  {displayText}
                </span>
              ) : (
                <span>{displayText}</span>
              )}
              {showCursor && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "linear",
                  }}
                  className="ml-0.5 inline-block h-4 w-[9px]"
                  style={{ backgroundColor: YELLOW }}
                />
              )}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

// ─── Feature Card ───────────────────────────────────────
const FeatureCard = ({
  icon,
  title,
  description,
  delay,
  visible,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  visible: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
    transition={{ duration: 0.5, delay: visible ? delay : 0, ease: "easeOut" }}
    style={{ opacity: 0 }}
    className="group relative border border-zinc-800 bg-zinc-950/60 p-6 backdrop-blur-sm transition-[border-color] duration-300 hover:border-zinc-600"
  >
    <div
      className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full"
      style={{ backgroundColor: YELLOW }}
    />
    <div className="mb-5 flex h-16 w-16 items-center justify-center border border-zinc-700 text-zinc-400 transition-all duration-300 group-hover:border-zinc-500 group-hover:text-white">
      {icon}
    </div>
    <h3
      className="mb-2 font-mono text-sm font-bold uppercase tracking-wider"
      style={{ color: YELLOW }}
    >
      {title}
    </h3>
    <p className="font-mono text-xs uppercase leading-relaxed text-zinc-500">
      {description}
    </p>
  </motion.div>
);

// ─── Icons ──────────────────────────────────────────────
const BoltIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-8 w-8"
  >
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

const CodeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-8 w-8"
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const DollarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-8 w-8"
  >
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

// ─── Page ───────────────────────────────────────────────
export default function ComingSoon() {
  const [showContent, setShowContent] = useState(false);

  const handleTerminalComplete = useCallback(() => {
    setShowContent(true);
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#0a0a0a] text-white selection:bg-yellow-500/20">
      <CircuitBackground />

      <main className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-8 sm:px-10 sm:py-12">
        {/* Coming Soon Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 flex justify-center sm:mb-8"
        >
          <span
            className="border px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] sm:text-xs"
            style={{ borderColor: `${YELLOW}66`, color: YELLOW }}
          >
            Coming Soon
          </span>
        </motion.div>

        {/* INFINIFLOP Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="mb-10 text-center font-display text-[3rem] leading-[0.9] tracking-tight sm:text-[6rem] md:text-[8rem] lg:text-[10rem]"
          style={{
            color: YELLOW,
            textShadow: `0 0 80px ${YELLOW}1A, 0 0 160px ${YELLOW}0D`,
          }}
        >
          INFINIFLOP
        </motion.h1>

        {/* Terminal Block with Typewriter */}
        <TerminalBlock onComplete={handleTerminalComplete} />

        {/* CTA Banner — waits for terminal to finish */}
        <motion.a
          href="https://survey.infiniflop.com"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={
            showContent ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ opacity: 0, backgroundColor: YELLOW }}
          className="group mb-10 flex w-full items-center justify-center gap-3 py-4 text-sm font-bold uppercase tracking-wider text-black transition-shadow duration-150 sm:mb-14 sm:py-5 sm:text-xl md:text-2xl"
          whileHover={{
            boxShadow: `0 0 50px ${YELLOW}40`,
          }}
        >
          Help Us Build What You Need
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
            &rarr;
          </span>
        </motion.a>

        {/* Feature Cards — stagger after CTA */}
        <div className="grid gap-4 sm:grid-cols-3">
          <FeatureCard
            delay={0.15}
            visible={showContent}
            icon={<BoltIcon />}
            title="Instant Scale."
            description="Spin-up serverless GPUs. No queues. No provisioning."
          />
          <FeatureCard
            delay={0.25}
            visible={showContent}
            icon={<CodeIcon />}
            title="Zero Config."
            description="Bring notebook or codebase. Just two lines."
          />
          <FeatureCard
            delay={0.35}
            visible={showContent}
            icon={<DollarIcon />}
            title="Per-Second Billing."
            description="Pay for compute. No idle costs."
          />
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={showContent ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: showContent ? 0.5 : 0, duration: 1 }}
          style={{ opacity: 0 }}
          className="mt-10 pb-3.5 text-center font-mono text-[9px] uppercase tracking-[0.15em] text-zinc-600 sm:mt-14 sm:text-[11px]"
        >
          &copy; {new Date().getFullYear()} Infiniflop Corporation // Built by
          Engineers for Engineers
        </motion.footer>
      </main>
    </div>
  );
}
