"use client";

import React from "react";
import { motion } from "framer-motion";

// ---------------------------------------------
// Infiniflop Coming Soon (TSX)
// Uses the exact theming primitives from your landing page
// while keeping the page content IDENTICAL to the attached HTML.
// ---------------------------------------------

// Small design tokens (refined for professional look)
const gradient =
  "bg-[radial-gradient(1200px_800px_at_50%_-20%,rgb(59_130_246_/_0.12)_0%,transparent_70%)]";

const glass =
  "backdrop-blur-lg border border-white/[0.08] bg-white/[0.03] dark:bg-white/[0.03] shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset,0_8px_32px_-8px_rgba(0,0,0,0.3)]";

const shineClass =
  "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/15 before:to-transparent hover:before:translate-x-full before:transition before:duration-[1400ms] before:ease-out";

// Simple utility
const cn = (...classes: (string | false | null | undefined)[]) =>
  classes.filter(Boolean).join(" ");

// Floating orbs background (refined for subtle professional look)
const FloatingOrbs: React.FC = () => {
  const [isClient, setIsClient] = React.useState(false);

  const orbs = React.useMemo(
    () =>
      new Array(3).fill(0).map((_, i) => ({
        id: i,
        size: 200 + Math.round(Math.random() * 180),
        top: `${Math.round(Math.random() * 80)}%`,
        left: `${Math.round(Math.random() * 90)}%`,
        delay: Math.random() * 2,
      })),
    []
  );

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" />;
  }

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {orbs.map((o) => (
        <motion.div
          key={o.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          transition={{ duration: 1.5, delay: o.delay }}
          className="absolute rounded-full blur-3xl"
          style={{
            width: o.size,
            height: o.size,
            top: o.top,
            left: o.left,
            background: "radial-gradient(circle at 30% 30%, rgba(59,130,246,0.25), transparent 65%)",
          }}
        />
      ))}
    </div>
  );
};

// Fine noise overlay (from your theme)
const Noise: React.FC = () => (
  <div
    className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08]"
    style={{
      backgroundImage:
        'url("data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\" viewBox=\"0 0 160 160\"><filter id=\"n\"><feTurbulence baseFrequency=\"0.8\" numOctaves=\"3\"/></filter><rect width=\"100%\" height=\"100%\" filter=\"url(%23n)\" opacity=\"0.6\"/></svg>")',
      backgroundSize: "auto",
    }}
  />
);

// Small helper for staggered fade-up
const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] as const },
});

// Subtle "active" bullet dot used in the 3 feature items (centered vertically)
const BulletDot: React.FC = () => (
  <motion.span
    initial={{ scale: 1, opacity: 0.9 }}
    animate={{ scale: [1, 1.04, 1], opacity: [0.9, 1, 0.9] }}
    transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
    className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 inline-flex h-3 w-3 items-center justify-center"
  >
    <span className="relative block h-2.5 w-2.5 rounded-full bg-blue-500 ring-1 ring-blue-400/30 shadow-[0_0_6px_rgba(59,130,246,0.35)]">
      <span className="pointer-events-none absolute -inset-1 rounded-full bg-blue-400/8 blur-[4px]" aria-hidden="true" />
    </span>
  </motion.span>
);

// ---------------------------------------------
// PAGE — content is verbatim from the attached HTML
// ---------------------------------------------
const ComingSoon: React.FC = () => {
  return (
    <div className={cn("min-h-screen overflow-x-hidden bg-[#0A0B0F] font-mono text-white", gradient)}>
      <Noise />
      <FloatingOrbs />

      {/* Center block */}
      <main className="relative mx-auto flex min-h-screen w-full max-w-5xl items-center justify-center px-4 sm:px-6">
        <section className="w-full">
          <motion.div
            {...fadeUp(0)}
            className={cn(
              "mx-auto w-full max-w-3xl rounded-3xl p-6 sm:p-8 md:p-12 text-center",
              glass,
              shineClass
            )}
          >
            {/* EXACT TEXT CONTENT START */}
            <motion.h1
              {...fadeUp(0.1)}
              className="text-3xl sm:text-4xl md:text-6xl font-black tracking-[0.1em] text-white/95"
            >
              COMING SOON
            </motion.h1>

            <motion.h2
              {...fadeUp(0.2)}
              className="mt-3 text-2xl sm:text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent relative inline-block"
            >
              INFINIFLOP
              <span className="block mx-auto mt-2 h-[1.5px] w-4/5 sm:w-3/5 bg-blue-400/40" />
            </motion.h2>

            <motion.p
              {...fadeUp(0.3)}
              className="mx-auto mt-6 max-w-2xl text-sm sm:text-base md:text-lg text-white/85"
            >
              Instant, scalable GPU power – via file upload or two lines of code.
            </motion.p>

            {/* Feature list (3 items) */}
            <motion.ul
              {...fadeUp(0.4)}
              className="mx-auto mt-8 sm:mt-10 grid max-w-2xl gap-3 sm:gap-4 text-left"
            >
              {[
                "Spin‑up serverless GPUs in seconds – no queues, no extra manual work.",
                (
                  <>
                    Bring your work: upload a notebook, script, or your entire codebase — or just add
                    {" "}
                    <code className="rounded bg-white/10 px-1 py-0.5 text-blue-300">import infiniflop; infiniflop.sendJob()</code>
                    {" "}
                    to run directly on Infiniflop GPUs.
                  </>
                ) as unknown as string,
                "Pay only for what you use, billed per‑second.",
              ].map((content, i) => (
                <motion.li
                  key={i}
                  {...fadeUp(0.6 + i * 0.2)}
                  className={cn(
                    "relative rounded-2xl p-4 sm:p-5 md:p-6 leading-relaxed text-[0.97rem]",
                    glass
                  )}
                >
                  <BulletDot />
                  <div className="pl-10 sm:pl-12">
                    {typeof content === "string" ? content : content}
                  </div>
                </motion.li>
              ))}
            </motion.ul>
            {/* EXACT TEXT CONTENT END */}
          </motion.div>

          {/* Bottom footer (identical text; mobile-friendly positioning) */}
          <motion.p
            {...fadeUp(1.2)}
            className="pointer-events-none static mt-6 text-center text-[11px] sm:text-xs text-white/60 sm:fixed sm:left-4 sm:bottom-4 sm:mt-0 sm:text-left"
          >
            © 2025 by Infiniflop Corporation
          </motion.p>
        </section>
      </main>
    </div>
  );
};

// Default export for Next.js
export default ComingSoon;