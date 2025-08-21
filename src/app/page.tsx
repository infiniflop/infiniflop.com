"use client";

import React from "react";
import { motion } from "framer-motion";

// ---------------------------------------------
// Infiniflop Coming Soon (TSX)
// Uses the exact theming primitives from your landing page
// while keeping the page content IDENTICAL to the attached HTML.
// ---------------------------------------------

// Small design tokens (copied from your theme)
const gradient =
  "bg-[radial-gradient(1000px_600px_at_120%_-10%,rgb(56_189_248_/_0.45)_0%,transparent_60%),radial-gradient(800px_500px_at_-10%_-10%,rgb(168_85_247_/_0.35)_0%,transparent_50%),radial-gradient(700px_400px_at_50%_120%,rgb(20_184_166_/_0.35)_0%,transparent_55%)]";

const glass =
  "backdrop-blur-xl border border-white/10 bg-white/5 dark:bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset,0_10px_40px_-10px_rgba(0,0,0,0.4)]";

const shineClass =
  "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent hover:before:translate-x-full before:transition before:duration-[1200ms] before:ease-out";

// Simple utility
const cn = (...classes: (string | false | null | undefined)[]) =>
  classes.filter(Boolean).join(" ");

// Floating orbs background (from your theme)
const FloatingOrbs: React.FC = () => {
  const [isClient, setIsClient] = React.useState(false);
  
  const orbs = React.useMemo(
    () =>
      new Array(6).fill(0).map((_, i) => ({
        id: i,
        size: 160 + Math.round(Math.random() * 140),
        top: `${Math.round(Math.random() * 80)}%`,
        left: `${Math.round(Math.random() * 90)}%`,
        delay: Math.random() * 3,
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
          animate={{ opacity: 0.55 }}
          transition={{ duration: 1.2, delay: o.delay }}
          className="absolute rounded-full blur-3xl"
          style={{
            width: o.size,
            height: o.size,
            top: o.top,
            left: o.left,
            background:
              "radial-gradient(circle at 30% 30%, rgba(34,211,238,.5), transparent 60%), radial-gradient(circle at 70% 70%, rgba(168,85,247,.45), transparent 60%)",
            filter: "saturate(140%)",
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
    initial={{ scale: 1, opacity: 0.95 }}
    animate={{ scale: [1, 1.06, 1], opacity: [0.95, 1, 0.95] }}
    transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
    className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 inline-flex h-3 w-3 items-center justify-center"
  >
    <span className="relative block h-3 w-3 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 ring-2 ring-emerald-300/20 shadow-[0_0_8px_rgba(16,185,129,0.55),0_0_18px_rgba(34,211,238,0.35)]">
      <span className="pointer-events-none absolute -inset-1 rounded-full bg-emerald-400/10 blur-[6px]" aria-hidden="true" />
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
              className="text-3xl sm:text-4xl md:text-6xl font-black tracking-[0.1em] bg-gradient-to-r from-white via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(167,139,250,0.30)]"
            >
              COMING SOON
            </motion.h1>

            <motion.h2
              {...fadeUp(0.2)}
              className="mt-3 text-2xl sm:text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-emerald-400 bg-clip-text text-transparent relative inline-block"
            >
              INFINIFLOP
              <span className="block mx-auto mt-2 h-[2px] w-4/5 sm:w-3/5 bg-gradient-to-r from-transparent via-fuchsia-400 to-transparent" />
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
                    <code className="rounded bg-white/10 px-1 py-0.5 text-fuchsia-300">import infiniflop; infiniflop.sendJob()</code>
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