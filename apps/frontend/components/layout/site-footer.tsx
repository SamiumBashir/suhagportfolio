export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/90">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Sohag Portal. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="/about" className="hover:text-cyan-400">About</a>
          <a href="/contact" className="hover:text-cyan-400">Contact</a>
          <a href="/blog" className="hover:text-cyan-400">Blog</a>
        </div>
      </div>
    </footer>
  );
}
