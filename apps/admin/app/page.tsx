import Link from 'next/link';

export default function AdminHome() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        {[
          ['Total Visitors', '12,450'],
          ['Total Posts', '84'],
          ['Contact Messages', '31'],
        ].map(([label, value]) => (
          <div key={label} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-sm text-slate-400">{label}</p>
            <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
          </div>
        ))}
      </div>
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h3 className="text-lg font-semibold text-white">Dashboard Overview</h3>
        <p className="mt-3 text-slate-400">This area is ready for analytics charts, recent activities, quick stats, and content management widgets.</p>
        <Link href="/content" className="mt-4 inline-block text-cyan-400 hover:underline">Go to content management</Link>
      </div>
    </div>
  );
}
