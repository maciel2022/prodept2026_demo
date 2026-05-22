export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div
          className="w-10 h-10 rounded-full border-3 border-t-transparent animate-spin"
          style={{ borderColor: "var(--color-primary-fixed)", borderTopColor: "transparent" }}
        />
        <p className="label-bold text-on-surface-variant tracking-widest text-xs">
          LOADING...
        </p>
      </div>
    </div>
  );
}
