import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// Neon palette — explicit hex so SVG renders crisply on dark backgrounds
const CYAN = "#22d3ee";
const VIOLET = "#a78bfa";
const PINK = "#f472b6";
const LIME = "#a3e635";
const GRID = "rgba(148, 163, 184, 0.18)";
const AXIS = "rgba(148, 163, 184, 0.85)";

const tooltipStyle = {
  background: "rgba(15, 18, 34, 0.95)",
  border: "1px solid rgba(34, 211, 238, 0.4)",
  borderRadius: 10,
  fontSize: 12,
  color: "#e2e8f0",
  boxShadow: "0 0 24px rgba(34, 211, 238, 0.25)",
  backdropFilter: "blur(8px)",
};

const glowFilter = (
  <defs>
    <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="3.5" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>
);

export function SalesTrendChart() {
  const data = [
    { m: "Jan", sales: 142, target: 130 },
    { m: "Feb", sales: 158, target: 140 },
    { m: "Mar", sales: 174, target: 150 },
    { m: "Apr", sales: 196, target: 165 },
    { m: "May", sales: 188, target: 175 },
    { m: "Jun", sales: 224, target: 185 },
    { m: "Jul", sales: 252, target: 195 },
    { m: "Aug", sales: 241, target: 205 },
  ];
  return (
    <ResponsiveContainer width="100%" height={240}>
      <AreaChart data={data} margin={{ top: 10, right: 12, bottom: 0, left: -18 }}>
        <defs>
          <linearGradient id="salesFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={CYAN} stopOpacity={0.55} />
            <stop offset="100%" stopColor={CYAN} stopOpacity={0} />
          </linearGradient>
          <linearGradient id="salesStroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={CYAN} />
            <stop offset="100%" stopColor={VIOLET} />
          </linearGradient>
          <filter id="glow-sales" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <CartesianGrid stroke={GRID} strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="m" tick={{ fontSize: 11, fill: AXIS }} stroke={GRID} />
        <YAxis tick={{ fontSize: 11, fill: AXIS }} stroke={GRID} />
        <Tooltip contentStyle={tooltipStyle} />
        <Area
          type="monotone"
          dataKey="sales"
          stroke="url(#salesStroke)"
          strokeWidth={3}
          fill="url(#salesFill)"
          filter="url(#glow-sales)"
          dot={{ r: 3, fill: CYAN, stroke: "#0f1222", strokeWidth: 2 }}
          activeDot={{ r: 5, fill: CYAN }}
        />
        <Line type="monotone" dataKey="target" stroke={PINK} strokeWidth={2} strokeDasharray="5 5" dot={false} />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export function RegionBarChart() {
  const data = [
    { r: "Gauteng", v: 612 },
    { r: "W. Cape", v: 478 },
    { r: "KZN", v: 421 },
    { r: "E. Cape", v: 298 },
    { r: "Limpopo", v: 191 },
  ];
  return (
    <ResponsiveContainer width="100%" height={240}>
      <BarChart data={data} margin={{ top: 10, right: 12, bottom: 0, left: -18 }}>
        <defs>
          <linearGradient id="barFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={CYAN} />
            <stop offset="100%" stopColor={VIOLET} />
          </linearGradient>
          <filter id="glow-bar" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <CartesianGrid stroke={GRID} strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="r" tick={{ fontSize: 11, fill: AXIS }} stroke={GRID} />
        <YAxis tick={{ fontSize: 11, fill: AXIS }} stroke={GRID} />
        <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "rgba(34,211,238,0.08)" }} />
        <Bar dataKey="v" fill="url(#barFill)" radius={[8, 8, 0, 0]} filter="url(#glow-bar)" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function QualityPieChart() {
  const data = [
    { name: "Complete", value: 64 },
    { name: "Missing", value: 18 },
    { name: "Duplicate", value: 11 },
    { name: "Invalid", value: 7 },
  ];
  const colors = [CYAN, VIOLET, PINK, LIME];
  return (
    <ResponsiveContainer width="100%" height={240}>
      <PieChart>
        <defs>
          <filter id="glow-pie" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <Tooltip contentStyle={tooltipStyle} />
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          innerRadius={52}
          outerRadius={88}
          paddingAngle={3}
          stroke="#0f1222"
          strokeWidth={2}
          filter="url(#glow-pie)"
        >
          {data.map((_, i) => (
            <Cell key={i} fill={colors[i]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

export function HivPrevalenceChart() {
  const data = [
    { y: "2018", prev: 13.1, art: 62 },
    { y: "2019", prev: 13.4, art: 66 },
    { y: "2020", prev: 13.7, art: 71 },
    { y: "2021", prev: 13.9, art: 75 },
    { y: "2022", prev: 14.0, art: 79 },
    { y: "2023", prev: 14.0, art: 82 },
  ];
  return (
    <ResponsiveContainer width="100%" height={240}>
      <LineChart data={data} margin={{ top: 10, right: 12, bottom: 0, left: -18 }}>
        <defs>
          <filter id="glow-line" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <CartesianGrid stroke={GRID} strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="y" tick={{ fontSize: 11, fill: AXIS }} stroke={GRID} />
        <YAxis tick={{ fontSize: 11, fill: AXIS }} stroke={GRID} />
        <Tooltip contentStyle={tooltipStyle} />
        <Line
          type="monotone"
          dataKey="prev"
          name="Prevalence %"
          stroke={CYAN}
          strokeWidth={3}
          dot={{ r: 4, fill: CYAN, stroke: "#0f1222", strokeWidth: 2 }}
          activeDot={{ r: 6 }}
          filter="url(#glow-line)"
        />
        <Line
          type="monotone"
          dataKey="art"
          name="ART coverage %"
          stroke={VIOLET}
          strokeWidth={3}
          dot={{ r: 4, fill: VIOLET, stroke: "#0f1222", strokeWidth: 2 }}
          activeDot={{ r: 6 }}
          filter="url(#glow-line)"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
