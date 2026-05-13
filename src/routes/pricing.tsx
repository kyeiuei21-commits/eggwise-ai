import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — EggForecast AI" },
      { name: "description", content: "Simple plans for farms of every size. Start free, scale to enterprise." },
    ],
  }),
  component: PricingPage,
});

const plans = [
  {
    name: "Starter", price: "$0", period: "/mo",
    desc: "For a single small coop getting started with forecasting.",
    features: ["1 farm · 1 user", "Daily forecast", "Basic dashboard", "Email alerts", "CSV export"],
    cta: "Start free", featured: false,
  },
  {
    name: "Pro", price: "$49", period: "/mo",
    desc: "For growing operations that need full AI intelligence.",
    features: ["5 farms · 10 users", "Daily, weekly, monthly forecasts", "AI assistant", "Weather intelligence", "PDF + Excel + CSV exports", "SMS + push alerts", "Role-based access"],
    cta: "Start 14-day trial", featured: true,
  },
  {
    name: "Enterprise", price: "Custom", period: "",
    desc: "Multi-region, multi-farm with bespoke ML.",
    features: ["Unlimited farms & users", "Computer vision egg counting", "IoT coop integration", "Custom ML models", "Dedicated success manager", "SSO + SLA + audit logs"],
    cta: "Contact sales", featured: false,
  },
];

function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-radial" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-20 pb-10 text-center">
            <Badge variant="secondary" className="mb-4">Pricing</Badge>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
              Predict more. <span className="text-gradient">Pay less.</span>
            </h1>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Start free for one farm. Upgrade for multi-farm AI forecasting and advanced analytics.
            </p>
          </div>
        </section>

        <section className="pb-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 grid md:grid-cols-3 gap-5">
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
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
