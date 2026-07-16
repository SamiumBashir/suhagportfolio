import Link from 'next/link';
import { SectionShell } from '@/components/ui/section-shell';
import { profileData } from '@/lib/profile';

export default function ContactPage() {
  return (
    <SectionShell title="Contact" description="Reach out for collaboration, conversation, or professional opportunities.">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-slate-300">
          <h3 className="text-2xl font-semibold text-white">Contact Information</h3>
          <div className="mt-6 space-y-3 text-slate-400">
            <p><span className="font-medium text-slate-200">Email:</span> {profileData.contact.email}</p>
            <p><span className="font-medium text-slate-200">Location:</span> {profileData.contact.location}</p>
            <p><span className="font-medium text-slate-200">Website:</span> {profileData.contact.website}</p>
          </div>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-slate-300">
          <p className="text-slate-400">I welcome conversations around impact-focused work, collaboration, research, strategy, and meaningful public engagement.</p>
          <Link href="/" className="mt-6 inline-block text-cyan-400 hover:underline">Return home</Link>
        </div>
      </div>
    </SectionShell>
  );
}
