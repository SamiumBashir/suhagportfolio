import { ReactNode } from 'react';

export function SectionShell({ title, description, children }: { title: string; description?: string; children: ReactNode }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 max-w-3xl">
        <h2 className="text-3xl font-semibold text-white">{title}</h2>
        {description ? <p className="mt-3 text-slate-400">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}
