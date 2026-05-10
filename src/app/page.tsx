import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <main className="flex flex-1 flex-col items-center justify-center px-5 sm:px-6 text-center">
        <div className="flex items-center gap-3 mb-8 sm:mb-10">
          <div className="relative h-[28px] w-[28px] bg-lime">
            <div className="absolute inset-[5px] border-[2px] border-bg" />
          </div>
          <span className="text-[20px] sm:text-[22px] font-bold tracking-[-0.03em]">Infiniflop Labs</span>
        </div>

        <h1 className="text-[clamp(32px,7vw,72px)] font-bold leading-[1.05] tracking-[-0.04em] max-w-[640px]">
          we&apos;re building{" "}
          <Link
            href="https://infiniview.dev"
            className="text-lime transition-opacity hover:opacity-80"
          >
            Infiniview
          </Link>
          .
        </h1>

        <p className="mt-5 sm:mt-6 text-text-secondary text-base sm:text-lg leading-relaxed max-w-[480px]">
          AI-powered code review and security testing. Agents that scan, attack, and stress-test your code in cloud sandboxes.
        </p>

        <Link
          href="https://infiniview.dev"
          className="mt-8 sm:mt-10 inline-block bg-lime text-bg font-bold text-[14px] sm:text-[15px] px-6 sm:px-7 py-4 tracking-[-0.01em] transition-[transform,box-shadow] duration-150 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0_var(--color-bg),4px_4px_0_1px_var(--color-lime)] active:scale-[0.97]"
        >
          CHECK OUT INFINIVIEW →
        </Link>
      </main>

      <footer className="py-8 pb-[calc(2rem+env(safe-area-inset-bottom))] flex flex-col items-center gap-4">
        <div className="flex items-center gap-2">
          <a
            href="https://x.com/infiniflop"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-text-muted transition-colors hover:text-lime px-3 py-2 min-h-[44px] flex items-center"
          >
            X / Twitter
          </a>
          <a
            href="https://github.com/infiniflop"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-text-muted transition-colors hover:text-lime px-3 py-2 min-h-[44px] flex items-center"
          >
            GitHub
          </a>
        </div>
        <span className="font-mono text-[11px] text-text-muted">
          &copy; {new Date().getFullYear()} Infiniflop Labs
        </span>
      </footer>
    </div>
  );
}
