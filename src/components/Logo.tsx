import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-2 group ${className}`}>
      <div className="relative h-9 w-9 rounded-xl bg-gradient-to-br from-primary to-primary-glow grid place-items-center shadow-glow transition-transform group-hover:scale-105">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-primary-foreground" fill="currentColor">
          <path d="M12 2c-3.5 0-7 5-7 11a7 7 0 0014 0c0-6-3.5-11-7-11z" />
        </svg>
        <span className="absolute inset-0 rounded-xl ring-1 ring-white/20" />
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-display font-bold text-base tracking-tight">EggForecast</span>
        <span className="text-[10px] font-semibold text-primary tracking-[0.18em]">AI</span>
      </div>
    </Link>
  );
}
