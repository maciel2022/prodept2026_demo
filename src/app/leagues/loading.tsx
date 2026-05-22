function Skeleton({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-lg animate-pulse ${className}`}
      style={{ background: "var(--color-surface-container-high)" }}
    />
  );
}

export default function LeaguesLoading() {
  return (
    <main className="pt-20 pb-24 px-3 md:px-8 md:max-w-3xl lg:max-w-5xl mx-auto space-y-8">
      <div className="pt-6 pb-2 space-y-2">
        <Skeleton className="h-4 w-40" />
        <Skeleton className="h-12 w-56" />
        <Skeleton className="h-4 w-48" />
      </div>

      {/* Action buttons */}
      <div className="space-y-3">
        <div className="glass-card px-5 py-4">
          <Skeleton className="h-5 w-32" />
        </div>
        <div className="glass-card px-5 py-4">
          <Skeleton className="h-5 w-28" />
        </div>
      </div>

      {/* League cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="glass-card p-5 space-y-4">
            <div className="flex justify-between">
              <Skeleton className="h-5 w-36" />
              <Skeleton className="h-5 w-20 rounded-full" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Skeleton className="h-14 rounded-lg" />
              <Skeleton className="h-14 rounded-lg" />
            </div>
            <div className="space-y-2">
              {Array.from({ length: 3 }).map((_, j) => (
                <Skeleton key={j} className="h-10 w-full rounded-full" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
