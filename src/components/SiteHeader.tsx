import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu } from "lucide-react";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const isDark =
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const links = [
    { to: "/", label: "Home" },
    { to: "/dashboard", label: "Dashboard" },
    { to: "/pricing", label: "Pricing" },
  ] as const;

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="glass border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md"
                activeProps={{ className: "px-3 py-2 text-sm font-semibold text-foreground rounded-md bg-secondary" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggle} aria-label="Toggle theme">
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button asChild variant="ghost" className="hidden sm:inline-flex">
              <Link to="/dashboard">Sign in</Link>
            </Button>
            <Button asChild className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground hover:opacity-95 shadow-glow">
              <Link to="/dashboard">Start free</Link>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setOpen((o) => !o)}>
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
        {open && (
          <div className="md:hidden border-t px-4 py-3 flex flex-col gap-1">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="px-3 py-2 rounded-md hover:bg-secondary text-sm">
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
