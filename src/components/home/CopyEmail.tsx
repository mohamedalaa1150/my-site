"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="group inline-flex max-w-full items-center gap-3 rounded-2xl border-2 border-ink bg-paper px-4 py-3 font-display text-lg font-bold shadow-pop transition-transform hover:-translate-y-0.5 sm:px-6 sm:text-2xl"
    >
      <span className="truncate">{email}</span>
      <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border-2 border-ink transition-colors ${copied ? "bg-teal" : "bg-sun"}`}>
        {copied ? <Check size={17} strokeWidth={3} /> : <Copy size={16} />}
      </span>
      <span className="sr-only" aria-live="polite">{copied ? "Email copied" : "Copy email address"}</span>
    </button>
  );
}
