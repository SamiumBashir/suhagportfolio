import Link from 'next/link';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  {
    href: '/impact',
    label: 'Impact',
    dropdown: [
      { href: '/projects', label: 'Projects' },
      { href: '/research', label: 'Research' },
      { href: '/media', label: 'Media' },
      { href: '/speaking', label: 'Speaking' },
    ],
  },
  { href: '/opportunities', label: 'Opportunities' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export function SiteHeader() {
  return (
    <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-semibold tracking-wide text-white">
          Suhag Chandro Mohonto
        </Link>
        <nav className="hidden gap-4 text-sm md:flex">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.href} className="group relative">
                <Link href={item.href} className="inline-flex items-center gap-1 text-slate-300 transition hover:text-cyan-400">
                  {item.label}
                  <span className="text-xs">▾</span>
                </Link>
                <div className="invisible absolute left-0 z-20 mt-2 min-w-[160px] rounded-2xl border border-slate-800 bg-slate-950 p-2 opacity-0 shadow-xl transition duration-200 group-hover:visible group-hover:opacity-100">
                  {item.dropdown.map((sub) => (
                    <Link key={sub.href} href={sub.href} className="block rounded-xl px-4 py-2 text-sm text-slate-200 transition hover:bg-slate-800 hover:text-cyan-300">
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.href} href={item.href} className="text-slate-300 transition hover:text-cyan-400">
                {item.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
