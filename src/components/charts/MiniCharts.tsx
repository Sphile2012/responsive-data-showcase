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

const tooltipStyle = {
  background: "var(--color-card)",
  border: "1px solid var(--color-border)",
  borderRadius: 8,
  fontSize: 12,
  color: "var(--color-foreground)",
};

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
    <ResponsiveContainer width="100%" height={220}>
      <AreaChart data={data} margin={{ top: 5, right: 10, bottom: 0, left: -20 }}>
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-primary)" stopOpacity={0.45} />
            <stop offset="100%" stopColor="var(--color-primary)" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke="var(--color-border)" strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="m" tick={{ fontSize: 11, fill: "var(--color-muted-foreground)" }} stroke="var(--color-border)" />
        <YAxis tick={{ fontSize: 11, fill: "var(--color-muted-foreground)" }} stroke="var(--color-border)" />
        <Tooltip contentStyle={tooltipStyle} />
        <Area type="monotone" dataKey="sales" stroke="var(--color-primary)" strokeWidth={2} fill="url(#g1)" />
        <Line type="monotone" dataKey="target" stroke="var(--color-accent)" strokeWidth={1.5} strokeDasharray="4 4" dot={false} />
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
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={data} margin={{ top: 5, right: 10, bottom: 0, left: -20 }}>
        <CartesianGrid stroke="var(--color-border)" strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="r" tick={{ fontSize: 11, fill: "var(--color-muted-foreground)" }} stroke="var(--color-border)" />
        <YAxis tick={{ fontSize: 11, fill: "var(--color-muted-foreground)" }} stroke="var(--color-border)" />
        <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "var(--color-muted)" }} />
        <Bar dataKey="v" fill="var(--color-primary)" radius={[6, 6, 0, 0]} />
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
  const colors = ["var(--color-primary)", "var(--color-accent)", "#9ca3af", "#d1d5db"];
  return (
    <ResponsiveContainer width="100%" height={220}>
      <PieChart>
        <Tooltip contentStyle={tooltipStyle} />
        <Pie data={data} dataKey="value" nameKey="name" innerRadius={48} outerRadius={80} paddingAngle={2}>
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
    <ResponsiveContainer width="100%" height={220}>
      <LineChart data={data} margin={{ top: 5, right: 10, bottom: 0, left: -20 }}>
        <CartesianGrid stroke="var(--color-border)" strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="y" tick={{ fontSize: 11, fill: "var(--color-muted-foreground)" }} stroke="var(--color-border)" />
        <YAxis tick={{ fontSize: 11, fill: "var(--color-muted-foreground)" }} stroke="var(--color-border)" />
        <Tooltip contentStyle={tooltipStyle} />
        <Line type="monotone" dataKey="prev" name="Prevalence %" stroke="var(--color-primary)" strokeWidth={2.5} dot={{ r: 3 }} />
        <Line type="monotone" dataKey="art" name="ART coverage %" stroke="var(--color-accent)" strokeWidth={2.5} dot={{ r: 3 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}
