import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ForecastChart } from "@/components/charts/ForecastChart";
import { WeeklyBars } from "@/components/charts/WeeklyBars";
import {
  Brain, Sparkles, LineChart, Bell, ShieldCheck, Cloud, Egg, TrendingUp,
  Zap, Bot, Camera, Leaf, ArrowRight, Check, Star,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EggForecast AI — Predict every egg, before it's laid" },
      { name: "description", content: "AI-powered egg production forecasting and poultry analytics for farms, hatcheries, and distributors. Predict daily, weekly, and monthly output with 94% confidence." },
      { property: "og:title", content: "EggForecast AI" },
      { property: "og:description", content: "Predict daily, weekly, and monthly egg output with machine learning." },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main>
        <Hero />
        <Stats />
        <Features />
        <LiveAnalytics />
        <Insights />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-radial" />
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-16 pb-24 lg:pt-24 lg:pb-32 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <Badge variant="secondary" className="mb-5 gap-1.5 px-3 py-1.5">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span>Powered by predictive ML models</span>
          </Badge>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            Predict every egg,{" "}
            <span className="text-gradient">before it's laid.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            EggForecast AI turns flock data, weather, and feed metrics into
            precise daily, weekly, and monthly production forecasts — with
            94% confidence and farmer-friendly insights.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground shadow-glow hover:opacity-95">
              <Link to="/dashboard">
                Open Live Dashboard <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/pricing">View pricing</Link>
            </Button>
          </div>
          <div className="mt-8 flex items-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-primary" /> 14-day free trial</div>
            <div className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-primary" /> No credit card</div>
            <div className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-primary" /> Cancel anytime</div>
          </div>
        </div>

        <div className="relative animate-fade-up" style={{ animationDelay: "120ms" }}>
          <div className="absolute -inset-6 bg-gradient-to-tr from-primary/20 via-accent/10 to-transparent blur-3xl rounded-full" />
          <div className="relative rounded-3xl overflow-hidden glass-strong shadow-card-soft">
            <img
              src={heroImg}
              alt="AI poultry forecasting dashboard hovering above modern egg farm"
              width={1536}
              height={1024}
              className="w-full h-auto"
            />
          </div>
          <FloatingCard className="absolute -left-4 sm:-left-10 top-10 animate-float">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-primary/15 grid place-items-center">
                <Egg className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Today's forecast</p>
                <p className="font-display font-bold text-lg leading-none">12,540</p>
              </div>
            </div>
          </FloatingCard>
          <FloatingCard className="absolute -right-2 sm:-right-8 bottom-10 animate-float" style={{ animationDelay: "1.4s" }}>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-accent/15 grid place-items-center">
                <TrendingUp className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Confidence</p>
                <p className="font-display font-bold text-lg leading-none text-gradient">94%</p>
              </div>
            </div>
          </FloatingCard>
        </div>
      </div>
    </section>
  );
}

function FloatingCard({ children, className = "", style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div style={style} className={`glass-strong rounded-2xl px-4 py-3 shadow-card-soft ${className}`}>
      {children}
    </div>
  );
}

function Stats() {
  const stats = [
    { v: "94%", l: "Forecast accuracy" },
    { v: "12M+", l: "Eggs predicted daily" },
    { v: "1,200+", l: "Farms onboarded" },
    { v: "37", l: "Countries served" },
  ];
  return (
    <section className="border-y bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.l} className="text-center">
            <div className="text-3xl sm:text-4xl font-display font-bold text-gradient">{s.v}</div>
            <div className="text-xs sm:text-sm text-muted-foreground mt-1">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Features() {
  const items = [
    { icon: Brain, title: "AI Forecasting Engine", desc: "LSTM + Prophet + regression ensemble predicts daily, weekly, and monthly output." },
    { icon: LineChart, title: "Smart Dashboards", desc: "Real-time widgets for production, mortality, feed efficiency, and revenue." },
    { icon: Bot, title: "AI Farm Assistant", desc: "Ask anything in plain language — get personalized poultry recommendations." },
    { icon: Cloud, title: "Weather Intelligence", desc: "Heat-stress, humidity, and storm signals fused into your forecast." },
    { icon: Bell, title: "Predictive Alerts", desc: "SMS, email, and push notifications for drops, disease risk, and anomalies." },
    { icon: Camera, title: "Vision Egg Counting", desc: "Upload a photo — count eggs instantly with computer vision." },
    { icon: Leaf, title: "Feed Optimization", desc: "AI recommends optimal rations to maximize feed-to-output efficiency." },
    { icon: ShieldCheck, title: "Role-Based Access", desc: "Owner, manager, vet, staff, and admin permissions out of the box." },
    { icon: Zap, title: "Multi-Farm Ready", desc: "Scale from one coop to hundreds of houses across regions." },
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <Badge variant="secondary" className="mb-4">Features</Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Everything a modern poultry operation needs.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            From the hen-house to the boardroom — production intelligence, in one platform.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map(({ icon: Icon, title, desc }) => (
            <Card key={title} className="p-6 glass hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 grid place-items-center mb-4 group-hover:scale-110 transition-transform">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function LiveAnalytics() {
  return (
    <section className="py-24 bg-secondary/40 border-y">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <Badge variant="secondary" className="mb-4">Live preview</Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Forecasts you can <span className="text-gradient-warm">act on</span>.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Confidence-scored predictions for every horizon — daily harvest, weekly throughput, monthly revenue.
            Compare forecast vs actual in real time and spot anomalies before they hit the bottom line.
          </p>
          <div className="mt-6 space-y-3">
            {[
              "12,540 eggs expected today (±1.6%)",
              "86,320 eggs forecast this week",
              "371,000 eggs forecast this month",
              "Decline risk: Low · Confidence: 94%",
            ].map((t) => (
              <div key={t} className="flex items-start gap-3">
                <div className="mt-1 h-5 w-5 rounded-full bg-primary/15 grid place-items-center">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <span className="text-sm">{t}</span>
              </div>
            ))}
          </div>
          <Button asChild className="mt-7 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground shadow-glow">
            <Link to="/dashboard">Explore full dashboard <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
          </Button>
        </div>
        <div className="space-y-4">
          <Card className="p-5 glass-strong">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-xs text-muted-foreground">Forecast vs actual · 30 days</p>
                <p className="font-display font-semibold">Daily egg production</p>
              </div>
              <Badge className="bg-primary/15 text-primary border-primary/20">+4.8%</Badge>
            </div>
            <ForecastChart height={240} />
          </Card>
          <Card className="p-5 glass-strong">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-xs text-muted-foreground">7-week outlook</p>
                <p className="font-display font-semibold">Weekly forecast</p>
              </div>
              <Badge variant="secondary">94% confidence</Badge>
            </div>
            <WeeklyBars height={180} />
          </Card>
        </div>
      </div>
    </section>
  );
}

function Insights() {
  const items = [
    { tag: "Heat alert", text: "Production may decrease by 8% next week due to rising temperature in House #3.", tone: "warning" },
    { tag: "Efficiency", text: "Feed efficiency improved by 12% this month — keep current ration mix.", tone: "success" },
    { tag: "Window", text: "Optimal harvest window detected between 06:30 – 08:15 daily.", tone: "info" },
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl mb-10">
          <Badge variant="secondary" className="mb-4">AI insights</Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Plain-English recommendations, every morning.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {items.map((i) => (
            <Card key={i.tag} className="p-6 glass relative overflow-hidden">
              <div className={`absolute inset-x-0 top-0 h-1 ${i.tone === "warning" ? "bg-warning" : i.tone === "success" ? "bg-primary" : "bg-accent"}`} />
              <Badge variant="secondary" className="mb-3">{i.tag}</Badge>
              <p className="text-sm leading-relaxed">{i.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const t = [
    { name: "Amaka O.", role: "Owner · Sunrise Layers, NG", quote: "Forecast accuracy is uncanny. We cut feed waste by 14% in the first month." },
    { name: "Liam R.", role: "Manager · Highland Coop, IE", quote: "The AI assistant feels like having a vet and a data scientist on call 24/7." },
    { name: "Priya S.", role: "Director · Veda Hatcheries, IN", quote: "Multi-farm dashboards finally gave us a single source of truth across regions." },
  ];
  return (
    <section className="py-24 bg-secondary/40 border-y">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl mb-10">
          <Badge variant="secondary" className="mb-4">Loved by farmers</Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Trusted from coop to cooperative.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {t.map((x) => (
            <Card key={x.name} className="p-6 glass">
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm leading-relaxed">"{x.quote}"</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary to-primary-glow grid place-items-center text-primary-foreground text-xs font-bold">
                  {x.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold leading-none">{x.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{x.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    { name: "Starter", price: "$0", period: "/mo", desc: "For a single small coop.", features: ["1 farm", "Daily forecast", "Basic dashboard", "Email alerts"], cta: "Start free", featured: false },
    { name: "Pro", price: "$49", period: "/mo", desc: "For growing operations.", features: ["5 farms", "Daily + weekly + monthly forecast", "AI assistant", "Weather intelligence", "PDF/CSV reports", "SMS alerts"], cta: "Start 14-day trial", featured: true },
    { name: "Enterprise", price: "Custom", period: "", desc: "Multi-region, multi-farm.", features: ["Unlimited farms", "Vision egg counting", "IoT integration", "Custom ML models", "Dedicated success manager", "SLA & SSO"], cta: "Contact sales", featured: false },
  ];
  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-4">Pricing</Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Simple plans. Premium intelligence.</h2>
          <p className="mt-4 text-muted-foreground">Start free. Upgrade when your flock grows.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {plans.map((p) => (
            <Card
              key={p.name}
              className={`p-7 relative ${p.featured ? "glass-strong shadow-glow border-primary/30 md:-translate-y-3" : "glass"}`}
            >
              {p.featured && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground border-0">
                  Most popular
                </Badge>
              )}
              <h3 className="font-display font-bold text-xl">{p.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-4xl font-display font-bold">{p.price}</span>
                <span className="text-sm text-muted-foreground">{p.period}</span>
              </div>
              <Button
                asChild
                className={`mt-6 w-full ${p.featured ? "bg-gradient-to-r from-primary to-primary-glow text-primary-foreground" : ""}`}
                variant={p.featured ? "default" : "outline"}
              >
                <Link to="/dashboard">{p.cta}</Link>
              </Button>
              <ul className="mt-6 space-y-2.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" /> {f}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "How accurate are the forecasts?", a: "Our ensemble of LSTM, Prophet, and regression models reaches 90–96% accuracy after 30 days of farm data ingestion." },
    { q: "Do I need IoT sensors?", a: "No. You can start with manual daily entries. Sensors and camera vision unlock higher accuracy and automation." },
    { q: "Which species are supported?", a: "All commercial laying breeds — Lohmann, ISA, Hy-Line, Leghorn, and more. Broiler analytics are on the roadmap." },
    { q: "Can I export reports?", a: "Yes — PDF, Excel, and CSV exports for daily, weekly, monthly, and revenue reports." },
    { q: "Is my farm data private?", a: "Your data stays yours. Encrypted at rest and in transit, never sold, never used to train shared models without consent." },
  ];
  return (
    <section className="py-24 bg-secondary/40 border-y">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center mb-10">
          <Badge variant="secondary" className="mb-4">FAQ</Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Questions, answered.</h2>
        </div>
        <Accordion type="single" collapsible className="glass rounded-2xl px-2">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`f${i}`} className="px-4">
              <AccordionTrigger className="text-left font-semibold">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl p-10 sm:p-16 text-center glass-strong shadow-glow">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
          <div className="relative">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Forecast smarter. <span className="text-gradient">Farm better.</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Join 1,200+ farms turning daily data into reliable egg production forecasts.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground shadow-glow">
                <Link to="/dashboard">Start your free trial <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/pricing">Compare plans</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
