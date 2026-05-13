export const dailyProduction = Array.from({ length: 30 }, (_, i) => {
  const base = 11500 + Math.sin(i / 3) * 700 + i * 25;
  const actual = Math.round(base + (Math.random() - 0.5) * 400);
  const forecast = Math.round(base + (Math.random() - 0.5) * 200);
  return {
    day: `D${i + 1}`,
    actual,
    forecast,
  };
});

export const weeklyForecast = [
  { week: "W-3", eggs: 79200 },
  { week: "W-2", eggs: 81450 },
  { week: "W-1", eggs: 84100 },
  { week: "This", eggs: 86320 },
  { week: "W+1", eggs: 88210 },
  { week: "W+2", eggs: 87650 },
  { week: "W+3", eggs: 89400 },
];

export const feedEfficiency = Array.from({ length: 12 }, (_, i) => ({
  month: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][i],
  efficiency: 70 + Math.sin(i / 2) * 8 + i * 0.4,
  mortality: 2 + Math.cos(i / 2) * 0.5,
}));

export const seasonalTrend = [
  { season: "Spring", production: 92 },
  { season: "Summer", production: 78 },
  { season: "Autumn", production: 88 },
  { season: "Winter", production: 71 },
];

export const breedSplit = [
  { name: "Lohmann Brown", value: 42 },
  { name: "ISA Brown", value: 28 },
  { name: "Hy-Line", value: 18 },
  { name: "Leghorn", value: 12 },
];

export const insights = [
  { tone: "warning", text: "Production may decrease by 8% next week due to rising temperature in House #3." },
  { tone: "success", text: "Feed efficiency improved by 12% this month — keep current ration." },
  { tone: "info", text: "Optimal harvest window detected between 06:30 – 08:15." },
  { tone: "success", text: "Mortality down 0.4 pp vs last week. Vaccination schedule on track." },
];
