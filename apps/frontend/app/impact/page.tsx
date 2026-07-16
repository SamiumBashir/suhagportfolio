import Link from 'next/link';
import { SectionShell } from '@/components/ui/section-shell';

export default function ImpactPage() {
  return (
    <SectionShell title="Impact" description="This section is ready for impact stories, success stories, statistics, reports, images, and videos.">
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-slate-300">
        <p className="mb-4">The impact section highlights how research, media, projects, and speaking engagements come together to create measurable value.</p>
        <Link href="/" className="text-cyan-400 hover:underline">Return home</Link>
      </div>
    </SectionShell>
  );
}
