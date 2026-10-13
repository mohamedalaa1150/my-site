interface FrogProps {
  x: number;
  y: number;
  size?: number;
  body?: string;
  belly?: string;
  className?: string;
}

/** A tiny outlined frog, drawn at (x, y) = bottom-centre. */
export default function Frog({
  x,
  y,
  size = 28,
  body = "#6CC04A",
  belly = "#C9EFA8",
  className,
}: FrogProps) {
  const s = size / 28;
  return (
    <g transform={`translate(${x - 14 * s} ${y - 24 * s}) scale(${s})`}>
      <g className={className}>
        {/* body */}
        <ellipse cx="14" cy="16" rx="13" ry="8.5" fill={body} stroke="#1D1A2F" strokeWidth="1.8" />
        <ellipse cx="14" cy="18.5" rx="7.5" ry="4.5" fill={belly} />
        {/* eyes */}
        <circle cx="8" cy="7.5" r="4.6" fill={body} stroke="#1D1A2F" strokeWidth="1.8" />
        <circle cx="20" cy="7.5" r="4.6" fill={body} stroke="#1D1A2F" strokeWidth="1.8" />
        <circle cx="8" cy="7.5" r="2.6" fill="#fff" />
        <circle cx="20" cy="7.5" r="2.6" fill="#fff" />
        <circle cx="8.6" cy="7.8" r="1.3" fill="#1D1A2F" />
        <circle cx="20.6" cy="7.8" r="1.3" fill="#1D1A2F" />
        {/* smile */}
        <path d="M10 14.5 Q14 17.5 18 14.5" fill="none" stroke="#1D1A2F" strokeWidth="1.5" strokeLinecap="round" />
      </g>
    </g>
  );
}
