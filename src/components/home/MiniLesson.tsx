"use client";

import { useState } from "react";
import { Check, X, Flame, Zap, Droplet, ArrowRight, RotateCcw, Star, Sparkles } from "lucide-react";
import Confetti, { type ConfettiBurst, makeBurst } from "@/components/ui/Confetti";

interface Option {
  text: string;
  correct?: boolean;
  why: string;
}

interface Step {
  icon: typeof Flame;
  iconBg: string;
  scene: string;
  question: string;
  options: Option[];
}

const STEPS: Step[] = [
  {
    icon: Flame,
    iconBg: "bg-coral",
    scene: "Laila grabs a hot pan by the handle. Her palm is red and stinging.",
    question: "What should she do first?",
    options: [
      { text: "Rub butter or toothpaste on it", why: "A classic myth. Grease traps heat in the skin and raises the risk of infection." },
      { text: "Hold it under cool running water for 20 minutes", correct: true, why: "Cooling stops the burn from going deeper. 20 minutes feels long, which is exactly why a course should say it out loud." },
      { text: "Pop any blisters so it heals faster", why: "Blisters protect the skin underneath. Popping them opens the door to infection." },
    ],
  },
  {
    icon: Zap,
    iconBg: "bg-sun",
    scene: "A coworker is gripping a frayed cable and can't let go.",
    question: "What is the safest first move?",
    options: [
      { text: "Grab their arm and pull them away", why: "If they're still touching the current, you become part of the circuit too." },
      { text: "Throw water to break the contact", why: "Water conducts electricity. This makes it more dangerous for everyone nearby." },
      { text: "Switch off the power at the source", correct: true, why: "Cut the power first. If you can't, push them clear with something dry and non-conductive, like a wooden broom handle." },
    ],
  },
  {
    icon: Droplet,
    iconBg: "bg-teal",
    scene: "A kitchen knife slips. There's a deep cut on Omar's forearm and it's bleeding a lot.",
    question: "What do you do?",
    options: [
      { text: "Press firmly on the wound with a clean cloth", correct: true, why: "Firm, direct pressure is the first step for heavy bleeding. Call for help if it doesn't slow down." },
      { text: "Lift the cloth every minute to check on it", why: "Lifting the pad disturbs the clot that's forming. If blood soaks through, add another pad on top." },
      { text: "Wait a few minutes to see if it stops", why: "Heavy bleeding needs action now. Waiting wastes the minutes that matter most." },
    ],
  },
];

const NOTES = [
  { title: "Scenario before theory", body: "Learners meet a person with a problem, not a definition. The rule then has somewhere to stick." },
  { title: "Wrong answers people believe", body: "Each distractor is a mistake someone would really make. Obviously-wrong options teach nothing." },
  { title: "Feedback that explains why", body: "Not just ✓ or ✗. Every choice gets a reason, and a wrong pick only costs a retry." },
  { title: "Light gamification", body: "XP and a progress bar reward finishing, and first-try answers earn more. Motivation without noise." },
];

const LETTERS = ["A", "B", "C"];
const MAX_XP = STEPS.length * 10;

export default function MiniLesson() {
  const [step, setStep] = useState(0);
  const [wrong, setWrong] = useState<number[]>([]);
  const [solved, setSolved] = useState(false);
  const [lastPick, setLastPick] = useState<number | null>(null);
  const [xp, setXp] = useState(0);
  const [burst, setBurst] = useState<ConfettiBurst | null>(null);

  const done = step >= STEPS.length;
  const current = STEPS[Math.min(step, STEPS.length - 1)];
  const activeNote = done ? 3 : step;

  const pick = (i: number) => {
    if (solved || wrong.includes(i)) return;
    setLastPick(i);
    if (current.options[i].correct) {
      setSolved(true);
      setXp((x) => x + (wrong.length === 0 ? 10 : 5));
      setBurst(makeBurst(18));
    } else {
      setWrong((w) => [...w, i]);
    }
  };

  const next = () => {
    setStep((s) => s + 1);
    setWrong([]);
    setSolved(false);
    setLastPick(null);
    setBurst(null);
  };

  const restart = () => {
    setStep(0);
    setWrong([]);
    setSolved(false);
    setLastPick(null);
    setXp(0);
    setBurst(null);
  };

  const feedback = lastPick !== null ? current.options[lastPick] : null;
  const stars = xp >= MAX_XP ? 3 : xp >= MAX_XP - 10 ? 2 : 1;

  return (
    <div className="grid gap-8 lg:grid-cols-[1.35fr_1fr] lg:gap-10">
      {/* Lesson player */}
      <div className="card-pop relative overflow-hidden !shadow-[8px_8px_0_0_#FFC73A]">
        <div className="flex items-center justify-between gap-3 border-b-2 border-ink px-5 py-3">
          <p className="font-mono text-[11px] uppercase tracking-wider text-ink-soft">
            Mini-lesson · First aid in 3 decisions
          </p>
          <span className="inline-flex items-center gap-1 rounded-full border-2 border-ink bg-sun px-2.5 py-0.5 font-display text-sm font-bold" aria-live="polite">
            <Sparkles size={14} /> {xp} XP
          </span>
        </div>

        {/* progress */}
        <div className="flex gap-1.5 px-5 pt-4" aria-label={`Step ${Math.min(step + 1, STEPS.length)} of ${STEPS.length}`}>
          {STEPS.map((_, i) => (
            <span key={i} className={`h-2.5 flex-1 rounded-full border-2 border-ink transition-colors duration-300 ${i < step || (i === step && solved) || done ? "bg-teal" : i === step ? "bg-sun-light" : "bg-paper"}`} />
          ))}
        </div>

        {!done ? (
          <div key={step} className="animate-pop-in p-5 sm:p-7">
            <div className="flex items-start gap-4">
              <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl border-2 border-ink ${current.iconBg}`}>
                <current.icon size={22} strokeWidth={2.5} />
              </span>
              <div>
                <p className="text-[15px] leading-relaxed text-ink-soft">{current.scene}</p>
                <p className="mt-1 font-display text-xl font-extrabold sm:text-2xl">{current.question}</p>
              </div>
            </div>

            <ul className="mt-6 space-y-3">
              {current.options.map((o, i) => {
                const isWrong = wrong.includes(i);
                const isRight = solved && o.correct;
                return (
                  <li key={i}>
                    <button
                      type="button"
                      onClick={() => pick(i)}
                      disabled={(solved && !o.correct) || isWrong}
                      className={`flex w-full items-center gap-3 rounded-2xl border-2 border-ink px-4 py-3 text-left text-[15px] font-medium transition-[transform,box-shadow,background-color] duration-150 sm:text-base
                        ${isRight ? "bg-teal-light shadow-pop" : isWrong ? "animate-shake bg-coral-light opacity-80" : solved ? "bg-paper opacity-50" : "bg-paper shadow-pop-sm hover:-translate-y-0.5 hover:shadow-pop"}`}
                    >
                      <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg border-2 border-ink font-mono text-xs font-bold leading-none ${isRight ? "bg-teal" : isWrong ? "bg-coral" : "bg-cream"}`}>
                        {isRight ? <Check size={14} strokeWidth={3} /> : isWrong ? <X size={14} strokeWidth={3} /> : LETTERS[i]}
                      </span>
                      {o.text}
                    </button>
                  </li>
                );
              })}
            </ul>

            <div aria-live="polite" className="min-h-[5.5rem]">
              {feedback && (
                <div key={lastPick} className={`animate-pop-in mt-5 rounded-2xl border-2 border-dashed border-ink p-4 ${feedback.correct ? "bg-teal-light" : "bg-coral-light"}`}>
                  <p className="font-display font-bold">{feedback.correct ? (wrong.length === 0 ? "Spot on. +10 XP" : "There it is. +5 XP") : "Not quite. Try another one."}</p>
                  <p className="mt-1 text-[15px] leading-relaxed text-ink-soft">{feedback.why}</p>
                </div>
              )}
            </div>

            {solved && (
              <div className="mt-4 flex justify-end">
                <button type="button" onClick={next} className="btn btn-dark animate-pop-in">
                  {step === STEPS.length - 1 ? "Finish" : "Next situation"} <ArrowRight size={18} />
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="animate-pop-in p-6 text-center sm:p-10">
            <div className="flex justify-center gap-2" aria-label={`${stars} of 3 stars`}>
              {[0, 1, 2].map((i) => (
                <Star key={i} size={40} strokeWidth={2} className={i < stars ? "fill-sun text-ink" : "text-ink/20"} />
              ))}
            </div>
            <p className="mt-4 font-display text-3xl font-extrabold">Lesson complete!</p>
            <p className="mt-2 text-ink-soft">
              You scored <strong className="text-ink">{xp} / {MAX_XP} XP</strong> in under a minute. That&apos;s the feeling a good course should leave.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <button type="button" onClick={restart} className="btn btn-secondary">
                <RotateCcw size={17} /> Replay
              </button>
              <a href="#contact" className="btn btn-primary">
                Want this for your team? <ArrowRight size={18} />
              </a>
            </div>
          </div>
        )}

        <Confetti burst={burst} />
      </div>

      {/* Designer's notes */}
      <div>
        <p className="eyebrow mb-4 !text-cream/60">Designer&apos;s notes · what you just experienced</p>
        <ol className="space-y-4">
          {NOTES.map((n, i) => {
            const active = i === activeNote;
            const seen = i < activeNote;
            return (
              <li
                key={n.title}
                className={`rounded-2xl border-2 border-ink p-4 transition-all duration-300 sm:p-5
                  ${active ? "rotate-[-1deg] bg-sun shadow-[5px_5px_0_0_#FFFDF8]" : seen ? "bg-paper" : "bg-paper/10 text-cream/50 max-lg:hidden"}
                  ${!active && seen ? "max-lg:hidden" : ""}`}
              >
                <p className="flex items-center gap-2 font-display text-lg font-bold">
                  <span className={`grid h-6 w-6 shrink-0 place-items-center rounded-full border-2 font-mono text-[11px] leading-none ${active || seen ? "border-ink" : "border-cream/40"}`}>
                    {seen ? <Check size={12} strokeWidth={3} /> : i + 1}
                  </span>
                  {n.title}
                </p>
                <p className={`mt-1.5 text-[15px] leading-relaxed ${active || seen ? "text-ink-soft" : ""}`}>{n.body}</p>
              </li>
            );
          })}
        </ol>
        <p className="mt-5 text-xs leading-relaxed text-cream/50">
          Demo inspired by my course <em>First Aid on Tour</em>. It&apos;s a design sample, not a substitute for real first aid training.
        </p>
      </div>
    </div>
  );
}
