import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="border-t mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            AI-powered egg production forecasting and poultry analytics for modern farms, hatcheries, and distributors.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Product</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Forecasting</li><li>Dashboard</li><li>AI Assistant</li><li>Reports</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>About</li><li>Contact</li><li>Privacy</li><li>Terms</li>
          </ul>
        </div>
      </div>
      <div className="border-t py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} EggForecast AI. All rights reserved.
      </div>
    </footer>
  );
}
