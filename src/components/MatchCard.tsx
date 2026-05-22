import Link from "next/link";
import { SoccerBall } from "@phosphor-icons/react/dist/ssr";
import { formatMatchDate, formatStageLabel } from "@/lib/format";
import CountryFlag from "@/components/CountryFlag";

type Team = {
  name: string;
  code: string;
};

type Prediction = {
  homeScore: number;
  awayScore: number;
  penaltyWinner?: string | null;
};

type Props = {
  homeTeam: Team;
  awayTeam: Team;
  matchDate: Date;
  stage: string;
  group?: string | null;
  status: string;
  homeScore?: number | null;
  awayScore?: number | null;
  penaltyWinner?: string | null;
  matchId: string;
  showPredictButton?: boolean;
  prediction?: Prediction | null;
};

function TeamDisplay({ team }: { team: Team }) {
  return (
    <div className="flex flex-col items-center gap-2 md:gap-3 flex-1 min-w-0">
      <CountryFlag
        code={team.code}
        className="w-14 h-10 md:w-20 md:h-14 lg:w-24 lg:h-16"
      />
      <span
        className="text-on-surface text-center leading-tight max-w-[6rem] md:max-w-[10rem] truncate"
        style={{ fontSize: "var(--text-label-bold)", fontWeight: 700 }}
        title={team.name}
      >
        {team.name}
      </span>
    </div>
  );
}

export default function MatchCard({
  homeTeam,
  awayTeam,
  matchDate,
  stage,
  group,
  status,
  homeScore,
  awayScore,
  penaltyWinner,
  matchId,
  showPredictButton = false,
  prediction,
}: Props) {
  const isFinished = status === "FINISHED";
  const stageLabel = formatStageLabel(stage, group);

  return (
    <article className="glass-card p-4 md:p-6 flex flex-col gap-3 md:gap-4">
      {/* Stage / Group label */}
      <div className="flex items-center justify-between gap-2">
        <span
          className="label-bold text-on-surface-variant"
          style={{ fontSize: "var(--text-label-bold)" }}
        >
          {stageLabel}
        </span>
        <span
          className={[
            "label-bold px-2 py-0.5 md:px-3 md:py-1 rounded-full",
            isFinished
              ? "bg-surface-container-high text-on-surface-variant"
              : "bg-secondary-container text-on-secondary-container",
          ].join(" ")}
          style={{ fontSize: "0.6875rem" }}
        >
          {isFinished ? "FINISHED" : status}
        </span>
      </div>

      {/* Teams row */}
      <div className="flex items-center gap-2 md:gap-6 lg:gap-10 md:py-4">
        <TeamDisplay team={homeTeam} />

        {/* VS / Score / Prediction center */}
        <div className="flex flex-col items-center shrink-0 gap-1 px-2 md:px-6">
          {isFinished && homeScore != null && awayScore != null ? (
            <div className="flex flex-col items-center gap-1">
              <span
                className="font-display text-primary-fixed tabular-nums"
                style={{
                  fontSize: "var(--text-headline-md)",
                  lineHeight: 1,
                }}
              >
                {homeScore} – {awayScore}
              </span>
              {penaltyWinner && (
                <span className="label-bold text-gold" style={{ fontSize: "0.6875rem" }}>
                  pen.
                </span>
              )}
              {prediction && (
                <span
                  className="label-bold text-on-surface-variant tabular-nums"
                  style={{ fontSize: "0.6875rem" }}
                >
                  My pick: {prediction.homeScore} – {prediction.awayScore}
                  {prediction.penaltyWinner && (
                    <span className="text-gold"> (pen.)</span>
                  )}
                </span>
              )}
            </div>
          ) : prediction ? (
            <div className="flex flex-col items-center gap-0.5">
              <span
                className="font-display text-primary-fixed tabular-nums"
                style={{
                  fontSize: "var(--text-headline-md)",
                  lineHeight: 1,
                }}
              >
                {prediction.homeScore} – {prediction.awayScore}
              </span>
              <span
                className="label-bold text-on-surface-variant uppercase tracking-widest"
                style={{ fontSize: "0.6875rem" }}
              >
                My pick
              </span>
            </div>
          ) : (
            <span
              className="font-display text-on-surface-variant"
              style={{
                fontSize: "var(--text-headline-md)",
                lineHeight: 1,
              }}
            >
              VS
            </span>
          )}
        </div>

        <TeamDisplay team={awayTeam} />
      </div>

      {/* Date */}
      <p
        className="text-on-surface-variant text-center"
        style={{ fontSize: "var(--text-label-bold)", lineHeight: "var(--text-label-bold--line-height)" }}
      >
        {formatMatchDate(matchDate)}
      </p>

      {/* Predict button */}
      {showPredictButton && !isFinished && (
        <Link
          href={`/predictions/${matchId}`}
          className="mt-1 w-full flex items-center justify-center gap-2 rounded-xl py-2.5 md:py-3 text-on-primary font-bold label-bold transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] no-underline"
          style={{
            background: "linear-gradient(135deg, var(--color-coral) 0%, var(--color-coral-dim) 100%)",
            color: "#fff",
          }}
        >
          <SoccerBall size={18} weight="fill" />
          MAKE YOUR PICK
        </Link>
      )}
    </article>
  );
}
