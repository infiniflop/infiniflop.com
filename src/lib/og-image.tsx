import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { OG_SIZE } from "@/lib/site";

// Design tokens, mirrored from the @theme block in src/app/globals.css
// (dark theme, the site default). CSS variables are not available to Satori.
const BG = "#07080b";
const BORDER = "#1a1d24";
const TEXT = "#f4f5f1";
const TEXT_SECONDARY = "#9ca0ab";
const TEXT_MUTED = "#727682";
const LIME = "#d2fb5a";

const fontsDir = join(process.cwd(), "src/assets/fonts");

async function loadFonts() {
  const [interBold, interRegular, mono] = await Promise.all([
    readFile(join(fontsDir, "inter-tight-latin-700.woff")),
    readFile(join(fontsDir, "inter-tight-latin-400.woff")),
    readFile(join(fontsDir, "jetbrains-mono-latin-500.woff")),
  ]);

  return [
    { name: "Inter Tight", data: interBold, weight: 700 as const, style: "normal" as const },
    { name: "Inter Tight", data: interRegular, weight: 400 as const, style: "normal" as const },
    { name: "JetBrains Mono", data: mono, weight: 500 as const, style: "normal" as const },
  ];
}

export async function renderOgImage() {
  const fonts = await loadFonts();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          // Reserve the footer band so the stack centres in the space above it.
          paddingBottom: 96,
          background: BG,
          color: TEXT,
          fontFamily: "Inter Tight",
          position: "relative",
        }}
      >
        {/* Logo mark and wordmark, as in the page header */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: 44 }}>
          <div
            style={{
              display: "flex",
              position: "relative",
              width: 56,
              height: 56,
              background: LIME,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 10,
                left: 10,
                right: 10,
                bottom: 10,
                border: `4px solid ${BG}`,
              }}
            />
          </div>
          <div
            style={{
              marginLeft: 22,
              fontSize: 44,
              fontWeight: 700,
              letterSpacing: -1.3,
            }}
          >
            Infiniflop Labs
          </div>
        </div>

        {/* Headline, as in the hero */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontSize: 112,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: -4.5,
          }}
        >
          <div style={{ display: "flex" }}>we&apos;re building</div>
          <div style={{ display: "flex", color: LIME }}>Infiniview.</div>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 34,
            fontWeight: 400,
            letterSpacing: -0.4,
            color: TEXT_SECONDARY,
          }}
        >
          AI-powered code review and security testing.
        </div>

        {/* Footer rule and domain */}
        <div
          style={{
            position: "absolute",
            left: 64,
            right: 64,
            bottom: 40,
            display: "flex",
            justifyContent: "center",
            paddingTop: 22,
            borderTop: `1px solid ${BORDER}`,
            fontFamily: "JetBrains Mono",
            fontSize: 22,
            fontWeight: 500,
            color: TEXT_MUTED,
          }}
        >
          infiniflop.com
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts },
  );
}
