import Link from 'next/link';
import { SectionShell } from '@/components/ui/section-shell';

export default function SpeakingPage() {
  return (
    <SectionShell title="Speaking" description="This section is ready for events, conferences, talks, interviews, and speaking engagements.">
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-slate-300">
        <p className="mb-4">The module is built as a reusable content pattern with a hero section, featured cards, status handling, and metadata support.</p>
        <Link href="/" className="text-cyan-400 hover:underline">Return home</Link>
      </div>
    </SectionShell>
  );
}
