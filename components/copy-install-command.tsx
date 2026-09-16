"use client";

import { useState } from "react";

export function CopyInstallCommand({ name }: { name: string }) {
  const [copied, setCopied] = useState(false);

  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const command = `pnpm dlx shadcn add ${origin}/r/${name}.json`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard API unavailable (e.g. non-secure context) - fail silently, command is still visible/selectable
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="mt-2 flex w-full items-center justify-between gap-2 rounded border bg-muted px-2 py-1.5 text-left font-mono text-xs text-muted-foreground transition hover:border-foreground/30"
    >
      <span className="truncate" suppressHydrationWarning>
        {command}
      </span>
      <span className="shrink-0 text-[10px] font-semibold uppercase tracking-wide">
        {copied ? "Copied" : "Copy"}
      </span>
    </button>
  );
}
