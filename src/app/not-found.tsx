export default function NotFound() {
  return (
    <main className="min-h-screen bg-neutral-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-xl p-10 max-w-sm w-full text-center space-y-4">
        <div className="w-14 h-14 bg-slate-100 rounded-2xl mx-auto flex items-center justify-center text-slate-400">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35M11 8v6M11 14h.01" />
          </svg>
        </div>
        <div>
          <h1 className="text-lg font-semibold text-slate-900">Card Not Found</h1>
          <p className="text-sm text-slate-500 mt-1">
            This business card doesn&apos;t exist or may have been removed.
          </p>
        </div>
      </div>
    </main>
  );
}
