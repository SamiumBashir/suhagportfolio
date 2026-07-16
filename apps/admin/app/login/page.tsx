'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const ADMIN_EMAIL = 'admin@example.com';
const ADMIN_PASSWORD = 'password123';
const AUTH_KEY = 'admin-authenticated';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      window.localStorage.setItem(AUTH_KEY, 'true');
      router.push('/dashboard');
      return;
    }
    setError('Invalid credentials. Use admin@example.com / password123.');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-xl shadow-slate-950/40">
        <h1 className="text-2xl font-semibold text-white">Admin Login</h1>
        <p className="mt-2 text-sm text-slate-400">Enter your admin email and password to continue.</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <label className="block">
            <span className="text-sm text-slate-400">Email</span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-400"
              placeholder="admin@example.com"
              required
            />
          </label>

          <label className="block">
            <span className="text-sm text-slate-400">Password</span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-400"
              placeholder="Password"
              required
            />
          </label>

          {error ? <p className="text-sm text-rose-400">{error}</p> : null}

          <button
            type="submit"
            className="w-full rounded-2xl bg-cyan-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
