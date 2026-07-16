import Link from 'next/link';
import { SectionShell } from '@/components/ui/section-shell';
import { profileData } from '@/lib/profile';

const highlights = [
  { title: 'Impact', href: '/impact', description: 'Highlighting meaningful progress, projects, and real-world influence.' },
  { title: 'Projects', href: '/projects', description: 'Showcasing initiatives shaped by strategic planning and execution.' },
  { title: 'Research', href: '/research', description: 'Exploring insight-driven work, publications, and knowledge sharing.' },
];

export default function HomePage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-24 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">Professional Profile</p>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
              {profileData.name}
            </h1>
            <p className="mt-4 text-lg font-medium text-cyan-300">{profileData.title}</p>
            <p className="mt-6 text-lg text-slate-300">{profileData.bio}</p>
            <div className="mt-8 flex gap-4">
              <Link href="/about" className="rounded-lg bg-cyan-500 px-5 py-3 font-medium text-slate-950 transition hover:bg-cyan-400">Learn About Me</Link>
              <Link href="/contact" className="rounded-lg border border-slate-700 px-5 py-3 font-medium text-slate-100 transition hover:border-cyan-400">Get In Touch</Link>
            </div>
          </div>
          <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900/70 p-8 shadow-2xl">
            <h3 className="text-xl font-semibold text-white">Core Focus</h3>
            <ul className="mt-6 space-y-3 text-slate-300">
              {profileData.focusAreas.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <SectionShell title="Featured Areas" description="A professional overview of the work and interests represented on this platform.">
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <Link key={item.title} href={item.href} className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-500">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-slate-400">{item.description}</p>
            </Link>
          ))}
        </div>
      </SectionShell>
    </div>
  );
}
