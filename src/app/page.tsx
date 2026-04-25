import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex flex-1 flex-col items-center justify-center px-6 text-center">
        <div className="flex items-center gap-3 mb-10">
          <div className="relative h-[28px] w-[28px] bg-lime">
            <div className="absolute inset-[5px] border-[2px] border-bg" />
          </div>
          <span className="text-[22px] font-bold tracking-[-0.03em]">Infiniflop Labs</span>
        </div>

        <h1 className="text-[clamp(36px,6vw,72px)] font-bold leading-[1.05] tracking-[-0.04em] max-w-[640px]">
          we&apos;re building{" "}
          <Link
            href="https://infiniview.dev"
            className="text-lime transition-opacity hover:opacity-80"
          >
            Infiniview
          </Link>
          .
        </h1>

        <p className="mt-6 text-text-secondary text-lg leading-relaxed max-w-[480px]">
          AI-powered code review and security testing. Agents that scan, attack, and stress-test your code in cloud sandboxes.
        </p>

        <Link
          href="https://infiniview.dev"
          className="mt-10 inline-block bg-lime text-bg font-bold text-[15px] px-7 py-4 tracking-[-0.01em] transition-[transform,box-shadow] duration-150 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0_var(--color-bg),4px_4px_0_1px_var(--color-lime)]"
        >
          CHECK OUT INFINIVIEW →
        </Link>
      </main>

      <footer className="py-8 flex flex-col items-center gap-4">
        <div className="flex items-center gap-5">
          <a
            href="https://x.com/infiniflop"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-text-muted transition-colors hover:text-lime"
          >
            X / Twitter
          </a>
          <a
            href="https://github.com/infiniflop"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-text-muted transition-colors hover:text-lime"
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
