"use client";

import React from "react";
import { motion } from "framer-motion";

// ---------------------------------------------
// Utils
// ---------------------------------------------
const cn = (...classes: (string | false | null | undefined)[]) =>
  classes.filter(Boolean).join(" ");

// ---------------------------------------------
// Components
// ---------------------------------------------

const Badge = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300 backdrop-blur-md">
    <span className="mr-2 flex h-2 w-2 relative">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
      <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
    </span>
    {children}
  </div>
);

const BackgroundGrid = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <div 
      className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
      style={{ maskImage: "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)" }}
    />
    <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-500 opacity-20 blur-[100px]" />
  </div>
);

const FeatureCard = ({ children, delay }: { children: React.ReactNode; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-blue-500/30 hover:bg-white/[0.07]"
  >
    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    {children}
  </motion.div>
);

const CodeSnippet = () => (
  <code className="rounded-md border border-blue-500/20 bg-blue-950/30 px-1.5 py-0.5 font-mono text-blue-200">
    import infiniflop; infiniflop.sendJob()
  </code>
);

// ---------------------------------------------
// Page
// ---------------------------------------------
export default function ComingSoon() {
  return (
    <div className="relative flex min-h-screen flex-col items-center overflow-hidden bg-[#030305] font-sans text-white selection:bg-blue-500/30">
      <BackgroundGrid />
      
      <main className="container relative mx-auto flex flex-1 flex-col items-center justify-center px-4 py-20 sm:px-6">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center"
        >
          <Badge>COMING SOON</Badge>
          
          <h1 className="mt-8 text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl">
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/70">
              INFINIFLOP
            </span>
          </h1>
          
          <p className="mt-6 max-w-2xl text-lg text-zinc-400 sm:text-xl">
            Instant, scalable GPU power — via file upload or just <span className="text-white">two lines of code</span>.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="mt-16 grid w-full max-w-4xl gap-4 sm:grid-cols-3">
          <FeatureCard delay={0.2}>
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            </div>
            <h3 className="mb-2 font-semibold text-white">Instant Scale</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Spin‑up serverless GPUs in seconds. No queues, no manual provisioning.
            </p>
          </FeatureCard>

          <FeatureCard delay={0.3}>
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            </div>
            <h3 className="mb-2 font-semibold text-white">Zero Config</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Bring your notebook or codebase. Just add <br/><CodeSnippet />
            </p>
          </FeatureCard>

          <FeatureCard delay={0.4}>
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <h3 className="mb-2 font-semibold text-white">Per-Second Billing</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Pay only for the compute you actually use. No idle costs.
            </p>
          </FeatureCard>
        </div>

        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="absolute bottom-6 text-center text-xs text-zinc-600"
        >
          © 2025 Infiniflop Corporation
        </motion.footer>
      </main>
    </div>
  );
}
