import Link from 'next/link';

interface DropdownItem {
  label: string;
  href: string;
}

export function Dropdown({ items }: { items: DropdownItem[] }) {
  return (
    <div className="relative inline-block text-left">
      <div>
        <button type="button" className="inline-flex w-full justify-between rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-medium text-slate-100 shadow-sm transition hover:border-cyan-400 hover:text-cyan-300">
          Explore Sections
          <span aria-hidden="true">▾</span>
        </button>
      </div>
      <div className="absolute z-10 mt-2 w-56 rounded-xl border border-slate-800 bg-slate-950 shadow-xl">
        <div className="py-1">
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="block px-4 py-3 text-sm text-slate-200 transition hover:bg-slate-800 hover:text-cyan-300">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
