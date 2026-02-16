"use client";
import Image from "next/image";
import Viewer from "@/components/viewer/Viewer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Card
      className={`border-white/10 bg-black/35 backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.06)] ${className}`}
    >
      {children}
    </Card>
  );
}

export default function KagelandPage() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black text-white">
      <div className="starfield" />

      <div className="absolute inset-0 z-[1]">
        <Viewer />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-black/55 via-transparent to-black/75" />

      <header className="pointer-events-auto absolute left-0 right-0 top-0 z-[5]">
        <div className="mx-auto flex w-full items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-2xl ring-1 ring-white/15 bg-white/5">
              <Image
                src="/profile.jpg"
                alt="kgnio"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">
                Kageland
              </div>
              <div className="text-[11px] text-white/60">
                Sovereign Planet Brief
              </div>
            </div>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <Button
              variant="ghost"
              className="text-white/75 hover:text-white hover:bg-white/10"
            >
              Overview
            </Button>
            <Button
              variant="ghost"
              className="text-white/75 hover:text-white hover:bg-white/10"
            >
              Culture
            </Button>
            <Button
              variant="ghost"
              className="text-white/75 hover:text-white hover:bg-white/10"
            >
              Programs
            </Button>
            <Button
              variant="ghost"
              className="text-white/75 hover:text-white hover:bg-white/10"
            >
              Contact
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Badge
              variant="secondary"
              className="bg-white/10 text-white/80 ring-1 ring-white/15"
            >
              Live Orbit
            </Badge>
            <Button className="bg-white text-black hover:bg-white/90">
              Request Access
            </Button>
          </div>
        </div>
      </header>

      <main className="pointer-events-none absolute inset-0 z-[4]">
        <div className="pointer-events-none absolute left-10 top-28 hidden w-[360px] flex-col gap-4 lg:flex">
          <GlassCard>
            <CardHeader className="pb-3">
              <CardTitle className="text-white/90">Kageland Status</CardTitle>
              <CardDescription className="text-white/60">
                KGL-07 • Stable Orbit
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-white/70">
              <div className="flex items-center justify-between">
                <span>Atmosphere</span>
                <span className="text-white/85">Breathable</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Gravity Field</span>
                <span className="text-white/85">Flux-Locked</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Docking</span>
                <span className="text-white/85">Controlled</span>
              </div>
              <Separator className="bg-white/10" />
              <div className="text-xs text-white/60">
                Advisory: keep pointer centered for stable yaw alignment.
              </div>
            </CardContent>
          </GlassCard>

          <GlassCard>
            <CardHeader className="pb-3">
              <CardTitle className="text-white/90">Crown Protocol</CardTitle>
              <CardDescription className="text-white/60">
                Governance by design
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-white/70">
              Ruled by{" "}
              <span className="font-semibold text-white/90">King kgnio</span>.
              Every expansion follows the “Zero Drift” doctrine: no growth
              without structural certainty.
            </CardContent>
          </GlassCard>
        </div>

        <div className="pointer-events-none absolute right-10 top-28 hidden w-[360px] flex-col gap-4 lg:flex">
          <GlassCard>
            <CardHeader className="pb-3">
              <CardTitle className="text-white/90">Why Visitors Come</CardTitle>
              <CardDescription className="text-white/60">
                A world built like a product
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-white/70">
              <div className="flex items-start gap-3">
                <Badge
                  variant="secondary"
                  className="bg-white/10 text-white/80 ring-1 ring-white/15"
                >
                  01
                </Badge>
                <div>
                  <div className="text-white/85 font-medium">
                    Modular Districts
                  </div>
                  <div className="text-white/60 text-xs">
                    Islands snap into the lattice with minimal disruption.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge
                  variant="secondary"
                  className="bg-white/10 text-white/80 ring-1 ring-white/15"
                >
                  02
                </Badge>
                <div>
                  <div className="text-white/85 font-medium">
                    Energy Elegance
                  </div>
                  <div className="text-white/60 text-xs">
                    Flux cores optimize efficiency over brute output.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge
                  variant="secondary"
                  className="bg-white/10 text-white/80 ring-1 ring-white/15"
                >
                  03
                </Badge>
                <div>
                  <div className="text-white/85 font-medium">Quiet Luxury</div>
                  <div className="text-white/60 text-xs">
                    Transparent materials, soft glows, clean geometry.
                  </div>
                </div>
              </div>
            </CardContent>
          </GlassCard>

          <GlassCard>
            <CardHeader className="pb-3">
              <CardTitle className="text-white/90">Tour Window</CardTitle>
              <CardDescription className="text-white/60">
                Civilian cohort intake
              </CardDescription>
            </CardHeader>
            <CardContent className="flex gap-2">
              <div className="pointer-events-auto w-full">
                <Button className="bg-white text-black hover:bg-white/90 w-full">
                  Apply
                </Button>
              </div>
              <div className="pointer-events-auto w-full">
                <Button
                  variant="outline"
                  className="border-white/20 bg-white/5 text-white hover:bg-white/10 w-full"
                >
                  Schedule
                </Button>
              </div>
            </CardContent>
          </GlassCard>
        </div>

        <div className="pointer-events-none absolute left-1/2 top-16 w-[min(840px,94vw)] -translate-x-1/2 text-center">
          <Badge
            variant="secondary"
            className="bg-white/10 text-white/80 ring-1 ring-white/15"
          >
            Hover the skies • Kageland is listening
          </Badge>

          <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight text-white drop-shadow">
            Kageland
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm md:text-base text-white/70">
            A levitating archipelago above luminous oceans. Precision
            governance. Minimal drift. Maximum craft.
          </p>
        </div>

        <div className="pointer-events-none absolute left-1/2 bottom-16 w-[min(900px,94vw)] -translate-x-1/2 text-center">
          <div className="pointer-events-auto flex flex-col items-center gap-3">
            <p className="mx-auto max-w-2xl text-sm md:text-base text-white/70">
              Kageland’s floating plates are stabilized by flux anchors and
              calibrated by the Crown Protocol. Visitors enter via a guided
              glide-path into the capital lattice.
            </p>

            <div className="mt-2 flex items-center justify-center gap-3">
              <Button className="bg-white text-black hover:bg-white/90">
                Start Tour
              </Button>
              <Button
                variant="outline"
                className="border-white/20 bg-white/5 text-white hover:bg-white/10"
              >
                Read Lore
              </Button>
            </div>
          </div>
        </div>

        <footer className="pointer-events-auto absolute bottom-0 left-0 right-0 z-[6] px-6 py-5">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="text-xs text-white/60">
              © {new Date().getFullYear()} Kageland Registry • Authorized by
              King kgnio
            </div>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                className="text-white/70 hover:text-white hover:bg-white/10"
              >
                Status
              </Button>
              <Button
                variant="ghost"
                className="text-white/70 hover:text-white hover:bg-white/10"
              >
                Docs
              </Button>
              <Button
                variant="ghost"
                className="text-white/70 hover:text-white hover:bg-white/10"
              >
                Security
              </Button>
              <Button
                variant="ghost"
                className="text-white/70 hover:text-white hover:bg-white/10"
              >
                Press
              </Button>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
