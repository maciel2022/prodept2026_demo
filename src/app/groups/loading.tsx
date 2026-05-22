function Skeleton({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-lg animate-pulse ${className}`}
      style={{ background: "var(--color-surface-container-high)" }}
    />
  );
}

export default function GroupsLoading() {
  return (
    <main className="pt-20 pb-24 px-3 md:px-8 md:max-w-3xl lg:max-w-5xl mx-auto space-y-8">
      <div className="pt-6 pb-2 space-y-2">
        <Skeleton className="h-4 w-40" />
        <Skeleton className="h-12 w-48" />
        <Skeleton className="h-4 w-56" />
      </div>

      {/* Group selector */}
      <div className="flex gap-2 overflow-hidden">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-9 w-14 rounded-full shrink-0" />
        ))}
      </div>

      {/* Team rows */}
      <div className="glass-card p-4 space-y-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex items-center gap-3">
            <Skeleton className="h-8 w-10 rounded" />
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-8 ml-auto" />
          </div>
        ))}
      </div>
    </main>
  );
}
