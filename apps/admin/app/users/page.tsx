'use client';

import { useMemo, useState } from 'react';

interface UserItem {
  id: number;
  name: string;
  email: string;
}

const initialUsers: UserItem[] = [
  { id: 1, name: 'Jordan Lee', email: 'jordan@example.com' },
  { id: 2, name: 'Mina Patel', email: 'mina@example.com' },
];

export default function UsersPage() {
  const [users, setUsers] = useState<UserItem[]>(initialUsers);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const nextId = useMemo(() => (users.length ? Math.max(...users.map((user) => user.id)) + 1 : 1), [users]);

  const handleAdd = () => {
    if (!name.trim() || !email.trim()) return;
    setUsers((current) => [
      ...current,
      { id: nextId, name: name.trim(), email: email.trim() },
    ]);
    setName('');
    setEmail('');
  };

  const handleRemove = (id: number) => {
    setUsers((current) => current.filter((user) => user.id !== id));
  };

  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-white">User Management</h1>
            <p className="mt-2 text-sm text-slate-400">Add and remove admin users or collaborators.</p>
          </div>
          <div className="rounded-2xl bg-slate-950 px-4 py-3 text-sm text-slate-300">
            {users.length} user{users.length === 1 ? '' : 's'} active
          </div>
        </div>

        <div className="mt-8 grid gap-6 xl:grid-cols-[1.5fr_1fr]">
          <div className="space-y-4">
            {users.length ? (
              users.map((user) => (
                <div key={user.id} className="rounded-3xl border border-slate-800 bg-slate-950 p-5">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h2 className="text-lg font-semibold text-white">{user.name}</h2>
                      <p className="mt-2 text-slate-400">{user.email}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemove(user.id)}
                      className="rounded-2xl border border-rose-500/30 bg-rose-500/10 px-4 py-2 text-sm text-rose-300 transition hover:bg-rose-500/20"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6 text-slate-400">
                No users yet. Add one to start managing access.
              </div>
            )}
          </div>

          <aside className="rounded-3xl border border-slate-800 bg-slate-950 p-6">
            <h2 className="text-lg font-semibold text-white">Invite User</h2>
            <div className="mt-5 space-y-4">
              <label className="block">
                <span className="text-sm text-slate-400">Name</span>
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none focus:border-cyan-400"
                  placeholder="Full name"
                />
              </label>

              <label className="block">
                <span className="text-sm text-slate-400">Email</span>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none focus:border-cyan-400"
                  placeholder="email@example.com"
                />
              </label>

              <button
                type="button"
                onClick={handleAdd}
                className="mt-2 w-full rounded-2xl bg-cyan-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Add user
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
