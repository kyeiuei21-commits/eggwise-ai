import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ForecastChart } from "@/components/charts/ForecastChart";
import { WeeklyBars } from "@/components/charts/WeeklyBars";
import { FeedChart } from "@/components/charts/FeedChart";
import { insights } from "@/lib/mock-data";
import {
  Egg, TrendingUp, TrendingDown, DollarSign, Activity, Thermometer,
  Sparkles, Leaf, Heart, AlertTriangle, Send, Bot,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — EggForecast AI" },
      { name: "description", content: "Live AI-powered egg production forecasts, feed analytics, and farm health metrics." },
    ],
  }),
  component: DashboardPage,
});

function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 py-8 w-full flex-1">
        <PageHeader />
        <KPIs />
        <div className="mt-6 grid lg:grid-cols-3 gap-5">
          <Card className="p-5 glass-strong lg:col-span-2">
            <ChartHeader title="Daily egg production" sub="Forecast vs actual · last 30 days" right={<Badge className="bg-primary/15 text-primary border-primary/20">+4.8% MoM</Badge>} />
            <ForecastChart height={300} />
            <Legend />
          </Card>
          <Card className="p-5 glass-strong">
            <ChartHeader title="AI Health Score" sub="Composite of feed, mortality, weather" />
            <HealthScore />
          </Card>
        </div>

        <div className="mt-5 grid lg:grid-cols-3 gap-5">
          <Card className="p-5 glass-strong">
            <ChartHeader title="Weekly forecast" sub="Next 4 weeks" />
            <WeeklyBars height={220} />
          </Card>
          <Card className="p-5 glass-strong">
            <ChartHeader title="Feed efficiency vs mortality" sub="Trailing 12 months" />
            <FeedChart height={220} />
          </Card>
          <Card className="p-5 glass-strong">
            <ChartHeader title="AI insights" sub="Generated every morning" right={<Sparkles className="h-4 w-4 text-primary" />} />
            <ul className="space-y-3 mt-2">
              {insights.map((i, idx) => (
                <li key={idx} className="flex gap-3 text-sm">
                  <span className={`mt-1 h-2 w-2 rounded-full shrink-0 ${i.tone === "warning" ? "bg-warning" : i.tone === "success" ? "bg-primary" : "bg-accent"}`} />
                  <span className="text-foreground/90">{i.text}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="mt-5">
          <Assistant />
        </div>
      </main>
    </div>
  );
}

function PageHeader() {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
      <div>
        <p className="text-sm text-muted-foreground">Welcome back · Sunrise Layers Farm</p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mt-1">Today's flock intelligence</h1>
      </div>
      <div className="flex gap-2">
        <Button variant="outline" size="sm">Export PDF</Button>
        <Button asChild size="sm" className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground">
          <Link to="/">Back to home</Link>
        </Button>
      </div>
    </div>
  );
}

function KPIs() {
  const kpis = [
    { icon: Egg, label: "Eggs today", value: "12,540", delta: "+3.2%", up: true, tint: "primary" },
    { icon: TrendingUp, label: "Weekly forecast", value: "86,320", delta: "+1.8%", up: true, tint: "primary" },
    { icon: Activity, label: "Monthly forecast", value: "371,000", delta: "+4.1%", up: true, tint: "accent" },
    { icon: Heart, label: "Mortality rate", value: "1.4%", delta: "-0.4 pp", up: true, tint: "primary" },
    { icon: Leaf, label: "Feed efficiency", value: "82.6%", delta: "+12%", up: true, tint: "primary" },
    { icon: DollarSign, label: "Revenue est.", value: "$48.2k", delta: "+5.6%", up: true, tint: "accent" },
    { icon: Thermometer, label: "Heat stress", value: "Low", delta: "stable", up: true, tint: "primary" },
    { icon: AlertTriangle, label: "Active alerts", value: "2", delta: "1 new", up: false, tint: "warning" },
  ];
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
      {kpis.map((k) => (
        <Card key={k.label} className="p-4 glass hover:shadow-glow transition-all">
          <div className="flex items-start justify-between">
            <div className={`h-9 w-9 rounded-lg grid place-items-center ${
              k.tint === "accent" ? "bg-accent/15" : k.tint === "warning" ? "bg-warning/20" : "bg-primary/15"
            }`}>
              <k.icon className={`h-4 w-4 ${
                k.tint === "accent" ? "text-accent" : k.tint === "warning" ? "text-warning" : "text-primary"
              }`} />
            </div>
            <span className={`text-[11px] font-semibold flex items-center gap-0.5 ${
              k.up ? "text-primary" : "text-warning"
            }`}>
              {k.up ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
              {k.delta}
            </span>
          </div>
          <div className="mt-3">
            <p className="text-xs text-muted-foreground">{k.label}</p>
            <p className="font-display font-bold text-2xl mt-0.5">{k.value}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}

function ChartHeader({ title, sub, right }: { title: string; sub?: string; right?: React.ReactNode }) {
  return (
    <div className="flex items-start justify-between mb-3">
      <div>
        <p className="font-display font-semibold">{title}</p>
        {sub && <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>}
      </div>
      {right}
    </div>
  );
}

function Legend() {
  return (
    <div className="flex gap-4 text-xs text-muted-foreground mt-2">
      <span className="flex items-center gap-1.5"><span className="h-2 w-3 rounded bg-primary" /> Actual</span>
      <span className="flex items-center gap-1.5"><span className="h-2 w-3 rounded bg-accent" /> AI forecast</span>
    </div>
  );
}

function HealthScore() {
  const score = 87;
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <div className="relative h-40 w-40">
        <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
          <circle cx="60" cy="60" r="50" stroke="var(--color-secondary)" strokeWidth="12" fill="none" />
          <circle
            cx="60" cy="60" r="50"
            stroke="url(#health-grad)"
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={`${(score / 100) * 314} 314`}
          />
          <defs>
            <linearGradient id="health-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--color-primary)" />
              <stop offset="100%" stopColor="var(--color-primary-glow)" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 grid place-items-center">
          <div className="text-center">
            <div className="text-4xl font-display font-bold text-gradient">{score}</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">Health</div>
          </div>
        </div>
      </div>
      <div className="w-full mt-5 space-y-3">
        <Bar label="Feed efficiency" value={82} />
        <Bar label="Mortality control" value={91} />
        <Bar label="Weather adaptation" value={76} />
      </div>
    </div>
  );
}

function Bar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex justify-between text-xs mb-1">
        <span className="text-muted-foreground">{label}</span>
        <span className="font-semibold">{value}%</span>
      </div>
      <Progress value={value} className="h-1.5" />
    </div>
  );
}

function Assistant() {
  const sample = [
    { role: "user", text: "Why did production dip last Tuesday?" },
    { role: "ai", text: "House #3 saw a 2.1°C heat spike between 13:00–16:00, which historically reduces same-day laying by 6–9%. Consider activating misters when forecast > 28°C." },
    { role: "user", text: "Best feed strategy for next month?" },
    { role: "ai", text: "Shift to 17.5% protein layer mash and add 0.2% calcium. Projected +7% yield uplift at +3% feed cost — net margin +4.8%." },
  ];
  const [input, setInput] = useState("");
  return (
    <Card className="p-5 glass-strong">
      <ChartHeader
        title="AI Farm Assistant"
        sub="Personalized recommendations from your farm data"
        right={<Badge variant="secondary" className="gap-1"><Bot className="h-3 w-3" /> Online</Badge>}
      />
      <div className="space-y-3 max-h-[280px] overflow-auto pr-1 py-2">
        {sample.map((m, i) => (
          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
              m.role === "user"
                ? "bg-gradient-to-br from-primary to-primary-glow text-primary-foreground"
                : "bg-secondary text-foreground"
            }`}>
              {m.text}
            </div>
          </div>
        ))}
      </div>
      <form
        onSubmit={(e) => { e.preventDefault(); setInput(""); }}
        className="mt-4 flex gap-2"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about production, feed, mortality…"
          className="flex-1 rounded-xl bg-background border px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/40"
        />
        <Button type="submit" className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground">
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </Card>
  );
}
