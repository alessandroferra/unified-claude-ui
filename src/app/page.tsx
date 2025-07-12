export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">
          Hello Claude UI
        </h1>
        <p className="text-xl text-slate-300 mb-8">
          Unified Claude WebUI - MVP Implementation
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-400 max-w-2xl">
          <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
            <div className="font-semibold text-slate-300 mb-1">Framework</div>
            <div>Next.js 14</div>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
            <div className="font-semibold text-slate-300 mb-1">Language</div>
            <div>TypeScript</div>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
            <div className="font-semibold text-slate-300 mb-1">Architecture</div>
            <div>App Router</div>
          </div>
        </div>
      </div>
    </main>
  );
}
