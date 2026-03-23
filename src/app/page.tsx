export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-100 flex items-center justify-center p-6">
      <div className="text-center space-y-3">
        <div className="w-12 h-12 bg-slate-900 rounded-2xl mx-auto flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <path d="M8 21h8M12 17v4" />
          </svg>
        </div>
        <h1 className="text-xl font-semibold text-slate-900 tracking-tight">Digital Cards</h1>
        <p className="text-sm text-slate-500">Scan a QR code to view a contact card.</p>
      </div>
    </main>
  );
}
