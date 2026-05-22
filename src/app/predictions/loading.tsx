function Skeleton({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-lg animate-pulse ${className}`}
      style={{ background: "var(--color-surface-container-high)" }}
    />
  );
}

export default function PredictionsLoading() {
  return (
    <main className="pt-20 pb-24 px-3 md:px-8 md:max-w-3xl lg:max-w-5xl mx-auto space-y-8">
      {/* Header skeleton */}
      <div className="pt-6 pb-2 space-y-2">
        <Skeleton className="h-4 w-40" />
        <Skeleton className="h-12 w-64" />
        <Skeleton className="h-4 w-48" />
      </div>

      {/* Tab switcher skeleton */}
      <div className="flex rounded-xl p-1 gap-1" style={{ background: "var(--color-surface-container)" }}>
        <Skeleton className="flex-1 h-10 rounded-lg" />
        <Skeleton className="flex-1 h-10 rounded-lg" />
      </div>

      {/* Match cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="glass-card p-4 space-y-4">
            <div className="flex justify-between">
              <Skeleton className="h-3 w-20" />
              <Skeleton className="h-5 w-16 rounded-full" />
            </div>
            <div className="flex items-center gap-4 py-2">
              <Skeleton className="h-10 w-14 rounded" />
              <Skeleton className="h-3 w-12 mx-auto" />
              <Skeleton className="h-10 w-14 rounded" />
            </div>
            <Skeleton className="h-3 w-32 mx-auto" />
            <Skeleton className="h-10 w-full rounded-xl" />
          </div>
        ))}
      </div>
    </main>
  );
}
