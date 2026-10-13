"use client";

import { useState } from "react";
import { Minus, Plus, Shuffle, ArrowUpRight } from "lucide-react";
import Frog from "@/components/ui/Frog";
import Confetti, { type ConfettiBurst, makeBurst } from "@/components/ui/Confetti";

const PIVOT = { x: 220, y: 92 };
const HALF_BEAM = 150;
const STRING = 46;
const MAX_RIGHT = 10;

const FROG_A = { body: "#6CC04A", belly: "#C9EFA8" };
const FROG_B = { body: "#7CC8FB", belly: "#DDF1FE" };
const FROG_YOU = { body: "#FFC73A", belly: "#FFF1C7" };

function randomPuzzle(prev: [number, number]): [number, number] {
  for (;;) {
    const a = 1 + Math.floor(Math.random() * 5);
    const b = 1 + Math.floor(Math.random() * 4);
    if (a + b >= 3 && a + b <= 8 && (a !== prev[0] || b !== prev[1])) return [a, b];
  }
}

/** Frog positions on a pan, bottom-centred at (0, 0), rows of 4. */
function frogSlots(count: number) {
  return Array.from({ length: count }, (_, i) => {
    const row = Math.floor(i / 4);
    const inRow = Math.min(4, count - row * 4);
    const col = i % 4;
    return { x: (col - (inRow - 1) / 2) * 29, y: -row * 21 };
  });
}

function Pan({
  x,
  y,
  frogs,
}: {
  x: number;
  y: number;
  frogs: { key: string; body: string; belly: string }[];
}) {
  const slots = frogSlots(frogs.length);
  return (
    <g style={{ transform: `translate(${x}px, ${y}px)`, transition: "transform 700ms cubic-bezier(.34,1.35,.64,1)" }}>
      <line x1="-58" y1={STRING} x2="0" y2="0" stroke="#1D1A2F" strokeWidth="2" />
      <line x1="58" y1={STRING} x2="0" y2="0" stroke="#1D1A2F" strokeWidth="2" />
      <g transform={`translate(0 ${STRING})`}>
        {frogs.map((f, i) => (
          <Frog key={f.key} x={slots[i].x} y={slots[i].y - 1} body={f.body} belly={f.belly} className="frog-drop" />
        ))}
        <path d="M-66 0 H66 Q60 22 0 24 Q-60 22 -66 0 Z" fill="#FFFDF8" stroke="#1D1A2F" strokeWidth="2.2" strokeLinejoin="round" />
      </g>
    </g>
  );
}

export default function BalanceToy({ gameUrl }: { gameUrl?: string }) {
  const [[a, b], setPuzzle] = useState<[number, number]>([3, 2]);
  const [right, setRight] = useState(0);
  const [solved, setSolved] = useState(0);
  const [burst, setBurst] = useState<ConfettiBurst | null>(null);

  const target = a + b;
  const balanced = right === target;
  const angle = Math.max(-16, Math.min(16, (right - target) * 4));
  const rad = (angle * Math.PI) / 180;
  const dx = HALF_BEAM * Math.cos(rad);
  const dy = HALF_BEAM * Math.sin(rad);

  const change = (delta: number) => {
    const next = Math.max(0, Math.min(MAX_RIGHT, right + delta));
    if (next === right) return;
    setRight(next);
    if (next === target) {
      setSolved((s) => s + 1);
      setBurst(makeBurst(26));
    }
  };

  const newPuzzle = () => {
    setPuzzle((p) => randomPuzzle(p));
    setRight(0);
    setBurst(null);
  };

  const leftFrogs = [
    ...Array.from({ length: a }, (_, i) => ({ key: `a${a}-${b}-${i}`, ...FROG_A })),
    ...Array.from({ length: b }, (_, i) => ({ key: `b${a}-${b}-${i}`, ...FROG_B })),
  ];
  const rightFrogs = Array.from({ length: right }, (_, i) => ({ key: `y${a}-${b}-${i}`, ...FROG_YOU }));

  const message = balanced
    ? `Balanced! ${a} + ${b} = ${target}`
    : right < target
      ? "The left side is heavier. Add frogs on the right."
      : "Too many frogs! The right side sinks.";

  return (
    <div className="card-pop relative overflow-hidden">
      {/* window chrome */}
      <div className="flex items-center justify-between border-b-2 border-ink bg-paper px-4 py-2.5">
        <div className="flex items-center gap-1.5" aria-hidden>
          <span className="h-3 w-3 rounded-full border-[1.5px] border-ink bg-coral" />
          <span className="h-3 w-3 rounded-full border-[1.5px] border-ink bg-sun" />
          <span className="h-3 w-3 rounded-full border-[1.5px] border-ink bg-teal" />
        </div>
        <span className="font-mono text-[11px] text-ink-soft">frog-balance / mini</span>
        <span className="rounded-full border-[1.5px] border-ink bg-sun-light px-2 py-0.5 font-mono text-[11px] font-semibold">
          solved {solved}
        </span>
      </div>

      <div className="relative bg-teal-light">
        <p className="px-5 pt-4 font-display text-lg font-bold leading-snug sm:text-xl">
          Make both sides equal.
          <span className="ml-2 font-body text-sm font-normal text-ink-soft">How many yellow frogs?</span>
        </p>

        <svg viewBox="0 0 440 290" className="block w-full" role="img" aria-label={`Balance scale. Left: ${a} green and ${b} blue frogs. Right: ${right} yellow frogs.`}>
          {/* pond */}
          <ellipse cx="220" cy="292" rx="250" ry="34" fill="#9FE3D7" />
          <ellipse cx="70" cy="276" rx="34" ry="7" fill="#6CC04A" opacity="0.6" />
          <ellipse cx="380" cy="280" rx="26" ry="6" fill="#6CC04A" opacity="0.6" />

          {/* stand */}
          <path d="M184 270 L256 270 L240 252 L200 252 Z" fill="#1D1A2F" />
          <rect x="215" y={PIVOT.y} width="10" height="164" rx="3" fill="#1D1A2F" />

          {/* beam */}
          <g
            style={{
              transform: `rotate(${angle}deg)`,
              transformOrigin: `${PIVOT.x}px ${PIVOT.y}px`,
              transformBox: "view-box",
              transition: "transform 700ms cubic-bezier(.34,1.35,.64,1)",
            }}
          >
            <rect x={PIVOT.x - HALF_BEAM - 6} y={PIVOT.y - 6} width={HALF_BEAM * 2 + 12} height="12" rx="6" fill={balanced ? "#16A897" : "#FF6A4D"} stroke="#1D1A2F" strokeWidth="2.2" style={{ transition: "fill 300ms" }} />
          </g>
          <circle cx={PIVOT.x} cy={PIVOT.y} r="10" fill="#FFC73A" stroke="#1D1A2F" strokeWidth="2.2" />

          <Pan x={PIVOT.x - dx} y={PIVOT.y - dy} frogs={leftFrogs} />
          <Pan x={PIVOT.x + dx} y={PIVOT.y + dy} frogs={rightFrogs} />

          {/* labels */}
          <g style={{ transform: `translate(${PIVOT.x - dx}px, ${PIVOT.y - dy + STRING + 50}px)`, transition: "transform 700ms cubic-bezier(.34,1.35,.64,1)" }}>
            <text textAnchor="middle" className="font-display" fontSize="22" fontWeight="800">
              <tspan fill="#3E8E2A">{a}</tspan>
              <tspan fill="#1D1A2F"> + </tspan>
              <tspan fill="#2C8FD0">{b}</tspan>
            </text>
          </g>
          <g style={{ transform: `translate(${PIVOT.x + dx}px, ${PIVOT.y + dy + STRING + 50}px)`, transition: "transform 700ms cubic-bezier(.34,1.35,.64,1)" }}>
            <text textAnchor="middle" className="font-display" fontSize="22" fontWeight="800" fill="#1D1A2F">
              {right === 0 ? "?" : right}
            </text>
          </g>
        </svg>

        <Confetti burst={burst} />
      </div>

      {/* controls */}
      <div className="flex flex-wrap items-center gap-3 border-t-2 border-ink bg-paper px-4 py-3">
        <div className="flex items-center gap-2">
          <button type="button" onClick={() => change(-1)} disabled={right === 0} aria-label="Remove a yellow frog" className="btn btn-secondary btn-sm !px-3">
            <Minus size={16} strokeWidth={3} />
          </button>
          <button type="button" onClick={() => change(1)} disabled={right === MAX_RIGHT} aria-label="Add a yellow frog" className="btn btn-primary btn-sm !px-3">
            <Plus size={16} strokeWidth={3} />
          </button>
        </div>
        <p aria-live="polite" className={`min-w-0 flex-1 text-sm font-medium ${balanced ? "text-teal" : "text-ink-soft"}`}>
          {balanced ? <strong className="font-display text-base text-ink">{message}</strong> : message}
        </p>
        {balanced && (
          <button type="button" onClick={newPuzzle} className="btn btn-dark btn-sm animate-pop-in">
            <Shuffle size={15} /> Next
          </button>
        )}
      </div>

      {gameUrl && (
        <a
          href={gameUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between gap-3 border-t-2 border-dashed border-ink/30 bg-sun-light px-4 py-2.5 text-sm"
        >
          <span>
            A 10-second taste of <strong>Frog Balance</strong> — the real game has 48 levels.
          </span>
          <ArrowUpRight size={18} className="shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      )}
    </div>
  );
}
