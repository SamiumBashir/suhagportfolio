import Link from 'next/link';
import { SectionShell } from '@/components/ui/section-shell';
import { profileData } from '@/lib/profile';

export default function AboutPage() {
  return (
    <SectionShell title="About" description="Professional background, values, and areas of focus.">
      <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-slate-300">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">Profile Overview</p>
          <h3 className="mt-4 text-2xl font-semibold text-white">{profileData.name}</h3>
          <p className="mt-4 text-lg text-slate-300">{profileData.headline}</p>
          <p className="mt-4 leading-7 text-slate-400">{profileData.bio}</p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-slate-300">
          <h3 className="text-xl font-semibold text-white">Strengths</h3>
          <ul className="mt-4 space-y-3">
            {profileData.strengths.map((item) => (
              <li key={item} className="rounded-lg border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm">{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-6">
        <Link href="/" className="text-cyan-400 hover:underline">Return home</Link>
      </div>
    </SectionShell>
  );
}
