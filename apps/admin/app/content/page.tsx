'use client';

import { useMemo, useState } from 'react';

interface ContentItem {
  id: number;
  title: string;
  description: string;
}

const initialItems: ContentItem[] = [
  { id: 1, title: 'Latest Article', description: 'Quick insights on product design and digital experiences.' },
  { id: 2, title: 'Case Study', description: 'Impact-driven work for startups and portfolios.' },
];

export default function ContentPage() {
  const [items, setItems] = useState<ContentItem[]>(initialItems);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const nextId = useMemo(() => (items.length ? Math.max(...items.map((item) => item.id)) + 1 : 1), [items]);

  const handleAdd = () => {
    if (!title.trim() || !description.trim()) return;

    setItems((current) => [
      ...current,
      { id: nextId, title: title.trim(), description: description.trim() },
    ]);
    setTitle('');
    setDescription('');
  };

  const handleRemove = (id: number) => {
    setItems((current) => current.filter((item) => item.id !== id));
  };

  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-white">Content Manager</h1>
            <p className="mt-2 text-sm text-slate-400">Add and remove content entries for your public site.</p>
          </div>
          <div className="rounded-2xl bg-slate-950 px-4 py-3 text-sm text-slate-300">
            {items.length} item{items.length === 1 ? '' : 's'} saved
          </div>
        </div>

        <div className="mt-8 grid gap-6 xl:grid-cols-[1.5fr_1fr]">
          <div className="space-y-4">
            {items.length ? (
              items.map((item) => (
                <div key={item.id} className="rounded-3xl border border-slate-800 bg-slate-950 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-lg font-semibold text-white">{item.title}</h2>
                      <p className="mt-2 text-slate-400">{item.description}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemove(item.id)}
                      className="rounded-full border border-rose-500/30 bg-rose-500/10 px-3 py-2 text-sm text-rose-300 transition hover:bg-rose-500/20"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6 text-slate-400">
                No content items yet. Use the form to add your first entry.
              </div>
            )}
          </div>

          <aside className="rounded-3xl border border-slate-800 bg-slate-950 p-6">
            <h2 className="text-lg font-semibold text-white">Add New Content</h2>
            <div className="mt-5 space-y-4">
              <label className="block">
                <span className="text-sm text-slate-400">Title</span>
                <input
                  type="text"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none focus:border-cyan-400"
                  placeholder="Product Launch Summary"
                />
              </label>

              <label className="block">
                <span className="text-sm text-slate-400">Description</span>
                <textarea
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none focus:border-cyan-400"
                  rows={4}
                  placeholder="A short summary to show on the public page"
                />
              </label>

              <button
                type="button"
                onClick={handleAdd}
                className="mt-2 w-full rounded-2xl bg-cyan-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Add entry
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
