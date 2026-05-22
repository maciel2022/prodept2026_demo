function Skeleton({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-lg animate-pulse ${className}`}
      style={{ background: "var(--color-surface-container-high)" }}
    />
  );
}

export default function LeaderboardLoading() {
  return (
    <main className="pt-20 pb-24 px-3 md:px-8 md:max-w-3xl lg:max-w-4xl mx-auto space-y-8">
      <div className="pt-6 pb-2 space-y-2">
        <Skeleton className="h-4 w-40" />
        <Skeleton className="h-12 w-56" />
        <Skeleton className="h-4 w-48" />
      </div>

      {/* Podium */}
      <div className="grid grid-cols-3 gap-2">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="glass-card flex flex-col items-center gap-3 py-4 px-2">
            <Skeleton className="h-5 w-5 rounded-full" />
            <Skeleton className="h-14 w-14 rounded-full" />
            <Skeleton className="h-3 w-16" />
            <Skeleton className="h-6 w-10" />
          </div>
        ))}
      </div>

      {/* Ranking rows */}
      <div className="space-y-2">
        {Array.from({ length: 8 }).map((_, i) => (
          <Skeleton key={i} className="h-12 w-full rounded-full" />
        ))}
      </div>
    </main>
  );
}
