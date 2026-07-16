'use client';

import { useRouter } from 'next/navigation';

const AUTH_KEY = 'admin-authenticated';

export function Topbar() {
  const router = useRouter();

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(AUTH_KEY);
      router.push('/login');
    }
  };

  return (
    <header className="border-b border-slate-800 bg-slate-900 px-6 py-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">Content Management</h2>
          <p className="text-sm text-slate-400">Manage the public platform and content modules</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleLogout}
            className="rounded-2xl border border-slate-700 bg-slate-950 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-400 hover:text-cyan-300"
          >
            Logout
          </button>
          <div className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300">Super Admin</div>
        </div>
      </div>
    </header>
  );
}
