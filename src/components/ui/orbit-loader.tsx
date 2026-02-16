"use client";

import * as React from "react";
import { useProgress } from "@react-three/drei";
import { Progress } from "@/components/ui/progress";

export function OrbitLoader() {
  const { active, progress, item } = useProgress();
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    if (!active && progress >= 100) {
      const t = window.setTimeout(() => setVisible(false), 220);
      return () => window.clearTimeout(t);
    }
    setVisible(true);
  }, [active, progress]);

  if (!visible) return null;

  const p = Math.max(0, Math.min(100, Math.round(progress)));

  return (
    <div className="pointer-events-none absolute inset-0 z-[50]">
      <div className="absolute left-1/2 top-1/2 w-[min(520px,92vw)] -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="text-[11px] uppercase tracking-[0.32em] text-white/60">
          Initializing Kageland Orbit
        </div>
        <div className="mt-2 text-sm font-medium text-white/85 tabular-nums">
          {p}%
        </div>
        <div className="mt-2 text-[11px] text-white/45 truncate">
          {item ? `Loading ${item}` : "Loading assets"}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 w-[min(720px,92vw)] -translate-x-1/2">
        <div className="relative">
          <div
            className="absolute -inset-2 blur-xl opacity-60"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.22), rgba(255,255,255,0))",
            }}
          />
          <Progress value={p} className="h-[3px] bg-white/10" />
        </div>
      </div>
    </div>
  );
}
