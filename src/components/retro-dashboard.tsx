import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const RND_QUOTES = ["SYS OK", "NAV LOCKED", "SHIELDS UP", "ALL GREEN", "WARP READY", "ONLINE"];

interface GeoData {
  city: string;
  timezone: string;
  country: string;
}

function LocalClock({ timezone }: { timezone: string }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const tick = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(tick);
  }, []);

  const fmt = time.toLocaleTimeString("en-GB", {
    timeZone: timezone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <span className="font-mono text-xs font-bold tabular-nums tracking-wider text-black">
      {fmt}
    </span>
  );
}

function LjubljanaClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const tick = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(tick);
  }, []);

  const fmt = time.toLocaleTimeString("en-GB", {
    timeZone: "Europe/Ljubljana",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <span className="font-mono text-xs font-bold tabular-nums tracking-wider text-black">
      {fmt}
    </span>
  );
}

function WeatherWidget({ timezone }: { timezone: string }) {
  const [weather, setWeather] = useState<{
    temp: number;
    code: number;
    desc: string;
  } | null>(null);

  const WMO: Record<number, { desc: string; icon: string }> = {
    0: { desc: "Clear", icon: "☀" },
    1: { desc: "Clear", icon: "☀" },
    2: { desc: "Cloudy", icon: "⛅" },
    3: { desc: "Overcast", icon: "☁" },
    45: { desc: "Fog", icon: "🌫" },
    48: { desc: "Fog", icon: "🌫" },
    51: { desc: "Drizzle", icon: "🌦" },
    53: { desc: "Drizzle", icon: "🌦" },
    55: { desc: "Drizzle", icon: "🌧" },
    61: { desc: "Rain", icon: "🌧" },
    63: { desc: "Rain", icon: "🌧" },
    65: { desc: "Rain", icon: "⛈" },
    71: { desc: "Snow", icon: "❄" },
    73: { desc: "Snow", icon: "❄" },
    75: { desc: "Snow", icon: "❄" },
    80: { desc: "Showers", icon: "🌦" },
    81: { desc: "Showers", icon: "🌧" },
    82: { desc: "Showers", icon: "⛈" },
    95: { desc: "Storm", icon: "⛈" },
    96: { desc: "Storm", icon: "⛈" },
    99: { desc: "Storm", icon: "⛈" },
  };

  useEffect(() => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=46.0569&longitude=14.5058&current=temperature_2m,weather_code&timezone=Europe%2FLjubljana&forecast_days=1"
    )
      .then((r) => r.json())
      .then((d) => {
        const c = d.current;
        setWeather({
          temp: Math.round(c.temperature_2m),
          code: c.weather_code,
          desc: WMO[c.weather_code]?.desc || "?",
        });
      })
      .catch(() => {});
  }, [timezone]);

  if (!weather) return <span className="text-[10px] opacity-30">...</span>;

  const icon = WMO[weather.code]?.icon || "?";

  return (
    <span className="text-xs font-mono text-black">
      {icon} {weather.temp}°C
    </span>
  );
}

function BatteryStatus() {
  const [level, setLevel] = useState<number | null>(null);
  const [charging, setCharging] = useState(false);

  useEffect(() => {
    const nav = navigator as Navigator & {
      getBattery?: () => Promise<{
        level: number;
        charging: boolean;
        addEventListener: (e: string, cb: () => void) => void;
      }>;
    };
    if (!nav.getBattery) return;
    nav.getBattery().then((bat) => {
      setLevel(Math.round(bat.level * 100));
      setCharging(bat.charging);
      bat.addEventListener("levelchange", () => setLevel(Math.round(bat.level * 100)));
      bat.addEventListener("chargingchange", () => setCharging(bat.charging));
    });
  }, []);

  if (level === null) return null;

  const bars = 5;
  const filled = Math.round((level / 100) * bars);

  return (
    <span className="flex items-center gap-1 text-xs font-mono text-black">
      <span className="flex gap-[1px]">
        {Array.from({ length: bars }).map((_, i) => (
          <span
            key={i}
            className="inline-block w-[3px] h-[8px]"
            style={{
              opacity: i < filled ? 1 : 0.2,
              background: i < filled
                ? level <= 20 ? "#FF2D78" : level <= 50 ? "#1A1A1A" : "#1A1A1A"
                : "#1A1A1A",
            }}
          />
        ))}
      </span>
      {level}%
      {charging && <span className="text-[8px]">⚡</span>}
    </span>
  );
}

function VisitorCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const stored = parseInt(localStorage.getItem("visitor_count") || "0", 10);
    const newCount = stored + 1;
    localStorage.setItem("visitor_count", String(newCount));
    setCount(newCount);
  }, []);

  const digits = String(count).padStart(5, "0");

  return (
    <span className="flex items-center gap-1 text-[10px] font-mono text-black">
      <span className="text-[9px] opacity-50">VIS</span>
      <span className="flex gap-px">
        {digits.split("").map((d, i) => (
          <span
            key={i}
            className="inline-block w-[9px] h-[12px] bg-gray-100 border border-black/20 text-center leading-[12px] text-black font-bold"
          >
            {d}
          </span>
        ))}
      </span>
    </span>
  );
}

function RetroQuote() {
  const [q, setQ] = useState(RND_QUOTES[0]);

  useEffect(() => {
    const tick = setInterval(() => {
      setQ(RND_QUOTES[Math.floor(Math.random() * RND_QUOTES.length)]);
    }, 5000);
    return () => clearInterval(tick);
  }, []);

  return <span className="text-[9px] font-mono text-black opacity-40">{q}</span>;
}

function Uptime() {
  const [uptime, setUptime] = useState("00:00:00");

  useEffect(() => {
    const start = Date.now();
    const tick = setInterval(() => {
      const diff = Date.now() - start;
      const h = String(Math.floor(diff / 3600000)).padStart(2, "0");
      const m = String(Math.floor((diff % 3600000) / 60000)).padStart(2, "0");
      const s = String(Math.floor((diff % 60000) / 1000)).padStart(2, "0");
      setUptime(`${h}:${m}:${s}`);
    }, 1000);
    return () => clearInterval(tick);
  }, []);

  return <span className="text-[9px] font-mono text-black opacity-40">UP {uptime}</span>;
}

export function RetroDashboard() {
  const [geo, setGeo] = useState<GeoData | null>(null);

  useEffect(() => {
    fetch("https://ip-api.com/json/?fields=city,country,timezone")
      .then((r) => r.json())
      .then((d) => {
        if (d.status === "success") {
          setGeo({ city: d.city, timezone: d.timezone, country: d.country });
        }
      })
      .catch(() => {});
  }, []);

  const tz = geo?.timezone || "Europe/Ljubljana";
  const city = geo?.city || "Ljubljana";

  return (
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 border-b-2 border-black bg-white text-black font-mono"
    >
      <div className="flex items-center justify-between px-2 py-0.5 md:px-4 md:py-1 text-[10px] md:text-[11px] overflow-x-auto whitespace-nowrap gap-2 md:gap-4">
        {/* Left: user local time */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-[8px] uppercase tracking-widest opacity-40">{city}</span>
          <LocalClock timezone={tz} />
        </div>

        {/* Center */}
        <div className="hidden md:flex items-center gap-3">
          <span className="text-[9px] opacity-20">|</span>
          <RetroQuote />
          <span className="text-[9px] opacity-20">|</span>
          <Uptime />
          <span className="text-[9px] opacity-20">|</span>
          <LjubljanaClock />
          <span className="text-[8px] opacity-40">LJ</span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2 md:gap-3 shrink-0">
          <WeatherWidget timezone={tz} />
          <span className="text-[9px] opacity-20">|</span>
          <BatteryStatus />
          <VisitorCounter />
        </div>
      </div>

      {/* CRT scanline */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.3) 1px, rgba(0,0,0,0.3) 2px)",
          backgroundSize: "100% 2px",
        }}
      />
    </motion.div>
  );
}
