import { redirect } from "next/navigation";
import Image from "next/image";
import {
  SoccerBall,
  CheckCircle,
  XCircle,
  MinusCircle,
  Trophy,
} from "@phosphor-icons/react/dist/ssr";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { formatMatchDate } from "@/lib/format";
import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";
import MatchCard from "@/components/MatchCard";
import CountryFlag from "@/components/CountryFlag";
import AnimatedSection from "@/components/AnimatedSection";
import PredictionTabs from "./PredictionTabs";

export const metadata = { title: "Predictions — PRODEPT 2026" };

function getPointsLabel(points: number): string {
  if (points === 5) return "Exact score";
  if (points === 7) return "Exact + winner bonus";
  if (points === 4) return "Result + difference";
  if (points === 6) return "Result + diff + winner";
  if (points === 3) return "Correct result";
  if (points === 5) return "Result + winner bonus";
  if (points === 2) return "Winner bonus";
  if (points === 1) return "Correct difference";
  return "Wrong";
}

export default async function PredictionsPage() {
  // ── 1. Auth guard ──────────────────────────────────────────────────────────
  const session = await auth();
  if (!session?.user?.id) redirect("/login");
  const userId = session.user.id;

  // ── 2. Parallel DB queries ─────────────────────────────────────────────────
  const [user, scheduledMatches, finishedMatches, userPredictions] =
    await Promise.all([
      prisma.user.findUnique({
        where: { id: userId },
        select: { id: true, name: true, email: true, image: true, isAdmin: true },
      }),

      prisma.match.findMany({
        where: { status: "SCHEDULED" },
        orderBy: { matchDate: "asc" },
        include: {
          homeTeam: { select: { name: true, code: true, flagUrl: true } },
          awayTeam: { select: { name: true, code: true, flagUrl: true } },
        },
      }),

      prisma.match.findMany({
        where: { status: "FINISHED" },
        orderBy: { matchDate: "desc" },
        include: {
          homeTeam: { select: { name: true, code: true, flagUrl: true } },
          awayTeam: { select: { name: true, code: true, flagUrl: true } },
        },
      }),

      prisma.prediction.findMany({
        where: { userId: userId },
        select: {
          matchId: true,
          homeScore: true,
          awayScore: true,
          penaltyWinner: true,
          points: true,
        },
      }),
    ]);

  if (!user) redirect("/login");

  const predictionMap = new Map(
    userPredictions.map((p) => [p.matchId, p])
  );

  // ── 3. Build upcoming content ──────────────────────────────────────────────
  const upcomingContent = (
    <section className="space-y-3">
      {scheduledMatches.length === 0 ? (
        <div className="glass-card p-4 md:p-6 text-center">
          <SoccerBall size={40} className="text-on-surface-variant mx-auto" />
          <p
            className="mt-2 text-on-surface-variant"
            style={{ fontSize: "var(--text-label-bold)" }}
          >
            No upcoming matches scheduled.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {scheduledMatches.map((match) => {
            const pred = predictionMap.get(match.id);
            return (
              <MatchCard
                key={match.id}
                matchId={match.id}
                homeTeam={{ name: match.homeTeam.name, code: match.homeTeam.code }}
                awayTeam={{ name: match.awayTeam.name, code: match.awayTeam.code }}
                matchDate={match.matchDate}
                stage={match.stage}
                group={match.group}
                status={match.status}
                homeScore={match.homeScore}
                awayScore={match.awayScore}
                showPredictButton
                penaltyWinner={match.penaltyWinner}
                prediction={pred ? { homeScore: pred.homeScore, awayScore: pred.awayScore, penaltyWinner: pred.penaltyWinner } : null}
              />
            );
          })}
        </div>
      )}
    </section>
  );

  // ── 4. Build history content ───────────────────────────────────────────────
  const historyContent = (
    <section className="space-y-3">
      {finishedMatches.length === 0 ? (
        <div className="glass-card p-4 md:p-6 text-center">
          <p
            className="text-on-surface-variant"
            style={{ fontSize: "var(--text-label-bold)" }}
          >
            No finished matches yet.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {finishedMatches.map((match) => {
            const pred = predictionMap.get(match.id);
            const formattedStage = match.stage.replace(/_/g, " ");
            const stageLabel = match.group
              ? `${formattedStage} — ${match.group}`
              : formattedStage;

            return (
              <div key={match.id} className="glass-card p-4 space-y-3">
                {/* Header: stage + date */}
                <div className="flex items-center justify-between gap-2">
                  <span className="label-bold text-on-surface-variant" style={{ fontSize: "var(--text-label-bold)" }}>
                    {stageLabel}
                  </span>
                  <span className="text-on-surface-variant" style={{ fontSize: "0.6875rem" }}>
                    {formatMatchDate(match.matchDate)}
                  </span>
                </div>

                {/* Teams + score */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <CountryFlag code={match.homeTeam.code} className="w-8 h-6 shrink-0" />
                    <span className="text-on-surface font-bold text-sm truncate">
                      {match.homeTeam.name}
                    </span>
                  </div>

                  <div className="flex flex-col items-center shrink-0">
                    <span
                      className="font-display text-primary-fixed tabular-nums"
                      style={{ fontSize: "var(--text-headline-md)", lineHeight: 1 }}
                    >
                      {match.homeScore} – {match.awayScore}
                    </span>
                    {match.penaltyWinner && (
                      <span className="label-bold text-gold" style={{ fontSize: "0.6875rem" }}>
                        pen.
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 flex-1 min-w-0 justify-end">
                    <span className="text-on-surface font-bold text-sm truncate text-right">
                      {match.awayTeam.name}
                    </span>
                    <CountryFlag code={match.awayTeam.code} className="w-8 h-6 shrink-0" />
                  </div>
                </div>

                {/* Prediction result */}
                {pred ? (
                  <div
                    className="flex items-center justify-between gap-3 rounded-xl px-4 py-3"
                    style={{
                      background: pred.points >= 5
                        ? "color-mix(in srgb, var(--color-gold) 12%, var(--color-surface-container))"
                        : pred.points >= 3
                          ? "color-mix(in srgb, var(--color-primary-fixed) 10%, var(--color-surface-container))"
                          : "var(--color-surface-container-high)",
                      border: pred.points >= 5
                        ? "1px solid color-mix(in srgb, var(--color-gold) 30%, transparent)"
                        : pred.points >= 3
                          ? "1px solid color-mix(in srgb, var(--color-primary-fixed) 20%, transparent)"
                          : "1px solid transparent",
                    }}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      {pred.points >= 3 ? (
                        <CheckCircle size={18} weight="fill" className="text-primary-fixed shrink-0" />
                      ) : (
                        <XCircle size={18} weight="fill" className="text-error shrink-0" />
                      )}
                      <div className="min-w-0">
                        <p className="text-on-surface font-bold text-sm">
                          My pick: {pred.homeScore} – {pred.awayScore}
                          {pred.penaltyWinner && (
                            <span className="text-gold"> (pen.)</span>
                          )}
                        </p>
                        <p className="text-on-surface-variant" style={{ fontSize: "0.6875rem" }}>
                          {getPointsLabel(pred.points)}
                        </p>
                      </div>
                    </div>

                    <span
                      className="label-bold px-3 py-1 rounded-full shrink-0"
                      style={{
                        background: pred.points >= 5
                          ? "var(--color-gold)"
                          : pred.points >= 3
                            ? "var(--color-primary-container)"
                            : "var(--color-surface-container-high)",
                        color: pred.points >= 5
                          ? "var(--color-on-gold)"
                          : pred.points >= 3
                            ? "var(--color-on-primary-container)"
                            : "var(--color-on-surface-variant)",
                        fontSize: "var(--text-label-bold)",
                      }}
                    >
                      +{pred.points} pts
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 rounded-xl px-4 py-3" style={{ background: "var(--color-surface-container-high)" }}>
                    <MinusCircle size={18} className="text-on-surface-variant shrink-0" />
                    <p className="text-on-surface-variant text-sm">No prediction — Missed</p>
                    <span
                      className="ml-auto label-bold px-3 py-1 rounded-full shrink-0"
                      style={{
                        background: "var(--color-surface-container)",
                        color: "var(--color-on-surface-variant)",
                        fontSize: "var(--text-label-bold)",
                      }}
                    >
                      0 pts
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );

  return (
    <>
      {/* Ambient background */}
      <div
        className="vibrant-gradient fixed inset-0 -z-10 pointer-events-none"
        style={{ opacity: 0.06 }}
        aria-hidden="true"
      />
      <div
        className="pitch-lines fixed inset-0 -z-10 pointer-events-none"
        style={{ opacity: 0.4 }}
        aria-hidden="true"
      />

      <Navbar user={{ ...user, image: user.image ?? undefined }} />

      <main className="pt-20 pb-24 px-3 md:px-8 md:max-w-3xl lg:max-w-5xl mx-auto space-y-8 md:space-y-10">
        {/* ── Page header ─────────────────────────────────────────────────── */}
        <AnimatedSection>
          <section className="pt-6 md:pt-10 pb-2 flex items-center justify-between gap-3">
            <div className="space-y-1 md:space-y-2 min-w-0">
              <p className="label-bold text-primary-fixed tracking-widest">
                FIFA WORLD CUP 2026
              </p>
              <h1
                className="font-display text-on-surface leading-none text-[3rem] md:text-[4rem] lg:text-[5rem]"
              >
                PREDIC
                <span style={{ color: "var(--color-primary-fixed)" }}>TIONS</span>
              </h1>
              <p className="text-on-surface-variant text-sm md:text-base">
                Your next big call awaits
              </p>
            </div>
            <Image
              src="/logos/fifa_mundial_2026.png"
              alt="FIFA World Cup 2026"
              width={120}
              height={120}
              className="w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain shrink-0"
            />
          </section>
        </AnimatedSection>

        {/* ── Tabs ────────────────────────────────────────────────────────── */}
        <AnimatedSection delay={0.15}>
          <PredictionTabs
            upcomingCount={scheduledMatches.length}
            historyCount={finishedMatches.length}
            upcoming={upcomingContent}
            history={historyContent}
          />
        </AnimatedSection>
      </main>

      <BottomNav />
    </>
  );
}
