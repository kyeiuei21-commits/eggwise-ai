import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts";
import { feedEfficiency } from "@/lib/mock-data";

export function FeedChart({ height = 220 }: { height?: number }) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={feedEfficiency} margin={{ top: 10, right: 12, left: -10, bottom: 0 }}>
        <CartesianGrid stroke="var(--color-border)" strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="month" stroke="var(--color-muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
        <YAxis stroke="var(--color-muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
        <Tooltip
          contentStyle={{
            background: "var(--color-popover)",
            border: "1px solid var(--color-border)",
            borderRadius: 12,
            fontSize: 12,
          }}
        />
        <Line type="monotone" dataKey="efficiency" stroke="var(--color-primary)" strokeWidth={2.4} dot={{ r: 3 }} />
        <Line type="monotone" dataKey="mortality" stroke="var(--color-accent)" strokeWidth={2.4} dot={{ r: 3 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}
