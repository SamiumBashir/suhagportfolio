import Link from 'next/link';

const links = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/users', label: 'Users' },
  { href: '/content', label: 'Content' },
  { href: '/media', label: 'Media' },
  { href: '/settings', label: 'Settings' },
  { href: '/analytics', label: 'Analytics' },
];

export function Sidebar() {
  return (
    <aside className="hidden w-72 border-r border-slate-800 bg-slate-900 p-6 lg:block">
      <div className="mb-8 text-xl font-semibold text-white">Admin Panel</div>
      <nav className="space-y-2">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="block rounded-lg px-4 py-3 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-cyan-400">
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
