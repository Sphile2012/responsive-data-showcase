/**
 * Pure-SVG chart components — no Recharts, no DOM measurement.
 * Render on the server and client equally; always visible on first paint.
 */

// ─── Neon palette ─────────────────────────────────────────────────────────
const CYAN = "#22d3ee";
const VIOLET = "#a78bfa";
const PINK = "#f472b6";
const GREEN = "#34d399";
const AMBER = "#fbbf24";
const GRID = "rgba(148,163,184,0.12)";
const AXIS = "rgba(148,163,184,0.65)";

// ─── Helpers ──────────────────────────────────────────────────────────────
function linePath(pts: { x: number; y: number }[]) {
  return pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(" ");
}
function areaPath(pts: { x: number; y: number }[], baseY: number) {
  return (
    linePath(pts) +
    ` L ${pts[pts.length - 1].x.toFixed(1)} ${baseY} L ${pts[0].x.toFixed(1)} ${baseY} Z`
  );
}
function scaler(min: number, max: number, minPx: number, maxPx: number) {
  return (v: number) => maxPx - ((v - min) / (max - min)) * (maxPx - minPx);
}
function xScaler(n: number, padL: number, width: number) {
  return (i: number) => padL + (i / (n - 1)) * width;
}

// ─── Shared SVG defs ──────────────────────────────────────────────────────
function SharedDefs() {
  return (
    <defs>
      {/* Glow filters */}
      <filter id="gc" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="3" result="b" />
        <feMerge>
          <feMergeNode in="b" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id="gv" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="3" result="b" />
        <feMerge>
          <feMergeNode in="b" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id="gp" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="3" result="b" />
        <feMerge>
          <feMergeNode in="b" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id="gg" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="3" result="b" />
        <feMerge>
          <feMergeNode in="b" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      {/* Gradients — area fills */}
      <linearGradient id="fill-c" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={CYAN} stopOpacity="0.45" />
        <stop offset="100%" stopColor={CYAN} stopOpacity="0" />
      </linearGradient>
      <linearGradient id="fill-v" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={VIOLET} stopOpacity="0.35" />
        <stop offset="100%" stopColor={VIOLET} stopOpacity="0" />
      </linearGradient>
      <linearGradient id="fill-p" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={PINK} stopOpacity="0.35" />
        <stop offset="100%" stopColor={PINK} stopOpacity="0" />
      </linearGradient>
      {/* Line gradients */}
      <linearGradient id="line-cv" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor={CYAN} />
        <stop offset="100%" stopColor={VIOLET} />
      </linearGradient>
      {/* Bar gradients */}
      {[CYAN, VIOLET, PINK, GREEN, AMBER].map((c, i) => (
        <linearGradient key={i} id={`bar-${i}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={c} stopOpacity="1" />
          <stop offset="100%" stopColor={c} stopOpacity="0.55" />
        </linearGradient>
      ))}
    </defs>
  );
}

// ─── Dot helpers ──────────────────────────────────────────────────────────
function Dot({ x, y, color }: { x: number; y: number; color: string }) {
  return (
    <g>
      <circle cx={x} cy={y} r={6} fill={color} fillOpacity={0.15} />
      <circle cx={x} cy={y} r={3.5} fill={color} stroke="#0c0f24" strokeWidth={1.5} />
    </g>
  );
}

// ─── Grid lines helper ────────────────────────────────────────────────────
function GridLines({
  ticks,
  padL,
  padT,
  w,
  h,
}: {
  ticks: number[];
  padL: number;
  padT: number;
  w: number;
  h: number;
}) {
  return (
    <>
      {ticks.map((t, i) => (
        <line
          key={i}
          x1={padL}
          y1={padT + t * h}
          x2={padL + w}
          y2={padT + t * h}
          stroke={GRID}
          strokeDasharray="4 4"
        />
      ))}
    </>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// 1. Sales Trend — area chart (sales vs dashed target)
// ═══════════════════════════════════════════════════════════════════════════
export function SalesTrendChart({ height = 240 }: { height?: number }) {
  const W = 480,
    H = height;
  const PL = 38,
    PR = 14,
    PT = 16,
    PB = 28;
  const cw = W - PL - PR,
    ch = H - PT - PB;

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];
  const sales = [142, 158, 174, 196, 188, 224, 252, 241];
  const target = [130, 140, 150, 165, 175, 185, 195, 205];

  const xS = xScaler(8, PL, cw);
  const yS = scaler(110, 270, PT, PT + ch);

  const salePts = sales.map((v, i) => ({ x: xS(i), y: yS(v) }));
  const targetPts = target.map((v, i) => ({ x: xS(i), y: yS(v) }));

  const yTicks = [110, 150, 190, 230, 270].map((v) => (v - 110) / 160);

  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ overflow: "visible" }}>
      <SharedDefs />
      {/* Y-axis labels */}
      {[110, 150, 190, 230, 270].map((v, i) => (
        <text key={i} x={PL - 6} y={yS(v) + 4} textAnchor="end" fontSize={9} fill={AXIS}>
          {v}
        </text>
      ))}
      {/* Grid */}
      <GridLines ticks={yTicks} padL={PL} padT={PT} w={cw} h={ch} />
      {/* Area fill */}
      <path d={areaPath(salePts, PT + ch)} fill="url(#fill-c)" />
      {/* Target dashed line */}
      <path
        d={linePath(targetPts)}
        fill="none"
        stroke={PINK}
        strokeWidth={2}
        strokeDasharray="6 4"
        strokeOpacity={0.6}
      />
      {/* Sales line with glow */}
      <path
        d={linePath(salePts)}
        fill="none"
        stroke="url(#line-cv)"
        strokeWidth={3}
        filter="url(#gc)"
      />
      {/* Dots */}
      {salePts.map((p, i) => (
        <Dot key={i} x={p.x} y={p.y} color={CYAN} />
      ))}
      {/* X-axis labels */}
      {months.map((m, i) => (
        <text key={i} x={xS(i)} y={H - 4} textAnchor="middle" fontSize={9} fill={AXIS}>
          {m}
        </text>
      ))}
      {/* Legend */}
      <g>
        <rect x={PL} y={PT - 2} width={20} height={3} rx={1.5} fill={CYAN} />
        <text x={PL + 24} y={PT + 2} fontSize={9} fill={AXIS}>
          Sales
        </text>
        <line
          x1={PL + 70}
          y1={PT}
          x2={PL + 90}
          y2={PT}
          stroke={PINK}
          strokeWidth={2}
          strokeDasharray="5 3"
        />
        <text x={PL + 94} y={PT + 2} fontSize={9} fill={AXIS}>
          Target
        </text>
      </g>
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// 2. Region Bar Chart
// ═══════════════════════════════════════════════════════════════════════════
export function RegionBarChart({ height = 240 }: { height?: number }) {
  const W = 480,
    H = height;
  const PL = 38,
    PR = 14,
    PT = 16,
    PB = 28;
  const cw = W - PL - PR,
    ch = H - PT - PB;

  const labels = ["Gauteng", "W. Cape", "KZN", "E. Cape", "Limpopo"];
  const vals = [612, 478, 421, 298, 191];
  const colors = [CYAN, VIOLET, PINK, GREEN, AMBER];
  const maxV = 650;
  const n = vals.length;
  const groupW = cw / n;
  const barW = groupW * 0.55;
  const radius = 6;

  const yS = scaler(0, maxV, PT, PT + ch);

  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ overflow: "visible" }}>
      <SharedDefs />
      {/* Y-axis labels */}
      {[0, 200, 400, 600].map((v, i) => (
        <text key={i} x={PL - 6} y={yS(v) + 4} textAnchor="end" fontSize={9} fill={AXIS}>
          {v}
        </text>
      ))}
      {/* Grid */}
      <GridLines ticks={[0, 200 / 650, 400 / 650, 1].reverse()} padL={PL} padT={PT} w={cw} h={ch} />
      {/* Bars */}
      {vals.map((v, i) => {
        const cx = PL + i * groupW + groupW / 2;
        const bx = cx - barW / 2;
        const by = yS(v);
        const bh = PT + ch - by;
        return (
          <g key={i} filter={`url(#g${["c", "v", "p", "g", "a"][i] ?? "c"})`}>
            {/* Glow copy */}
            <rect
              x={bx}
              y={by}
              width={barW}
              height={bh}
              rx={radius}
              fill={colors[i]}
              fillOpacity={0.15}
            />
            <rect x={bx} y={by} width={barW} height={bh} rx={radius} fill={`url(#bar-${i})`} />
            {/* Value label */}
            <text
              x={cx}
              y={by - 5}
              textAnchor="middle"
              fontSize={9}
              fill={colors[i]}
              fontWeight={700}
            >
              {v}
            </text>
          </g>
        );
      })}
      {/* X-axis labels */}
      {labels.map((l, i) => (
        <text
          key={i}
          x={PL + i * groupW + groupW / 2}
          y={H - 4}
          textAnchor="middle"
          fontSize={9}
          fill={AXIS}
        >
          {l}
        </text>
      ))}
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// 3. Quality Pie / Donut Chart
// ═══════════════════════════════════════════════════════════════════════════
function polarToXY(cx: number, cy: number, r: number, angleDeg: number) {
  const a = (angleDeg - 90) * (Math.PI / 180);
  return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
}
function arcPath(
  cx: number,
  cy: number,
  r: number,
  startAngle: number,
  endAngle: number,
  ir: number,
) {
  const s = polarToXY(cx, cy, r, startAngle);
  const e = polarToXY(cx, cy, r, endAngle);
  const si = polarToXY(cx, cy, ir, endAngle);
  const ei = polarToXY(cx, cy, ir, startAngle);
  const large = endAngle - startAngle > 180 ? 1 : 0;
  return [
    `M ${s.x.toFixed(2)} ${s.y.toFixed(2)}`,
    `A ${r} ${r} 0 ${large} 1 ${e.x.toFixed(2)} ${e.y.toFixed(2)}`,
    `L ${si.x.toFixed(2)} ${si.y.toFixed(2)}`,
    `A ${ir} ${ir} 0 ${large} 0 ${ei.x.toFixed(2)} ${ei.y.toFixed(2)}`,
    "Z",
  ].join(" ");
}

export function QualityPieChart({ height = 240 }: { height?: number }) {
  const W = 480,
    H = height;
  const CX = W * 0.32,
    CY = H / 2;
  const OR = H * 0.38,
    IR = H * 0.21;

  const data = [
    { n: "Complete", v: 64 },
    { n: "Missing", v: 18 },
    { n: "Duplicate", v: 11 },
    { n: "Invalid", v: 7 },
  ];
  const colors = [GREEN, VIOLET, PINK, AMBER];
  const gap = 4;
  const total = data.reduce((s, d) => s + d.v, 0);

  let angle = -90;
  const slices = data.map((d, i) => {
    const sweep = (d.v / total) * (360 - gap * data.length);
    const mid = angle + sweep / 2;
    const a0 = angle,
      a1 = angle + sweep;
    angle += sweep + gap;
    return { ...d, a0, a1, mid, color: colors[i] };
  });

  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ overflow: "visible" }}>
      <SharedDefs />
      {/* Slices */}
      {slices.map((s, i) => (
        <g key={i}>
          <path
            d={arcPath(CX, CY, OR, s.a0, s.a1, IR)}
            fill={s.color}
            stroke="#0c0f24"
            strokeWidth={2}
            style={{ filter: `drop-shadow(0 0 6px ${s.color}80)` }}
          />
        </g>
      ))}
      {/* Centre label */}
      <text
        x={CX}
        y={CY - 8}
        textAnchor="middle"
        fontSize={22}
        fontWeight={700}
        fill="white"
        fontFamily="monospace"
      >
        64%
      </text>
      <text x={CX} y={CY + 12} textAnchor="middle" fontSize={10} fill={AXIS}>
        complete
      </text>

      {/* Legend on the right */}
      {data.map((d, i) => {
        const lx = W * 0.62,
          ly = CY - (data.length - 1) * 22 + i * 44;
        return (
          <g key={i}>
            <rect
              x={lx}
              y={ly - 6}
              width={10}
              height={10}
              rx={5}
              fill={colors[i]}
              style={{ filter: `drop-shadow(0 0 4px ${colors[i]})` }}
            />
            <text
              x={lx + 16}
              y={ly + 3}
              fontSize={11}
              fill="#94a3b8"
              fontFamily="Inter, sans-serif"
            >
              {d.n}
            </text>
            <text
              x={W - 14}
              y={ly + 3}
              textAnchor="end"
              fontSize={12}
              fontWeight={700}
              fill={colors[i]}
              fontFamily="monospace"
            >
              {d.v}%
            </text>
          </g>
        );
      })}
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// 4. HIV Prevalence — dual-line chart
// ═══════════════════════════════════════════════════════════════════════════
export function HivPrevalenceChart({ height = 220 }: { height?: number }) {
  const W = 480,
    H = height;
  const PL = 34,
    PR = 14,
    PT = 16,
    PB = 36;
  const cw = W - PL - PR,
    ch = H - PT - PB;

  const years = ["2018", "2019", "2020", "2021", "2022", "2023"];
  const prevVals = [13.1, 13.4, 13.7, 13.9, 14.0, 14.0];
  const artVals = [62, 66, 71, 75, 79, 82];

  const xS = xScaler(6, PL, cw);
  const prevY = scaler(12.5, 15, PT, PT + ch);
  const artY = scaler(55, 90, PT, PT + ch);

  const prevPts = prevVals.map((v, i) => ({ x: xS(i), y: prevY(v) }));
  const artPts = artVals.map((v, i) => ({ x: xS(i), y: artY(v) }));

  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ overflow: "visible" }}>
      <SharedDefs />
      {/* Grid */}
      <GridLines ticks={[0, 0.25, 0.5, 0.75, 1]} padL={PL} padT={PT} w={cw} h={ch} />
      {/* Area fills */}
      <path d={areaPath(prevPts, PT + ch)} fill="url(#fill-c)" />
      <path d={areaPath(artPts, PT + ch)} fill="url(#fill-v)" />
      {/* Lines with glow */}
      <path d={linePath(prevPts)} fill="none" stroke={CYAN} strokeWidth={3} filter="url(#gc)" />
      <path d={linePath(artPts)} fill="none" stroke={VIOLET} strokeWidth={3} filter="url(#gv)" />
      {/* Dots */}
      {prevPts.map((p, i) => (
        <Dot key={`p${i}`} x={p.x} y={p.y} color={CYAN} />
      ))}
      {artPts.map((p, i) => (
        <Dot key={`a${i}`} x={p.x} y={p.y} color={VIOLET} />
      ))}
      {/* X labels */}
      {years.map((y, i) => (
        <text key={i} x={xS(i)} y={H - PB + 16} textAnchor="middle" fontSize={9} fill={AXIS}>
          {y}
        </text>
      ))}
      {/* Last values */}
      <text x={xS(5) + 8} y={prevY(14.0) + 4} fontSize={10} fill={CYAN} fontWeight={700}>
        14.0%
      </text>
      <text x={xS(5) + 8} y={artY(82) + 4} fontSize={10} fill={VIOLET} fontWeight={700}>
        82%
      </text>
      {/* Legend */}
      <g>
        <rect x={PL} y={PT + ch + 22} width={22} height={3} rx={1.5} fill={CYAN} />
        <text x={PL + 26} y={PT + ch + 26} fontSize={9} fill={AXIS}>
          Prevalence %
        </text>
        <rect x={PL + 110} y={PT + ch + 22} width={22} height={3} rx={1.5} fill={VIOLET} />
        <text x={PL + 136} y={PT + ch + 26} fontSize={9} fill={AXIS}>
          ART Coverage %
        </text>
      </g>
    </svg>
  );
}
