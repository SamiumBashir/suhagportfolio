'use client';

import { usePathname } from 'next/navigation';
import { Sidebar } from '@/components/layout/sidebar';
import { Topbar } from '@/components/layout/topbar';
import { AuthGuard } from '@/components/auth-guard';

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthRoute = pathname !== '/login';

  return (
    <div className="flex min-h-screen">
      {isAuthRoute && <Sidebar />}
      <div className="flex-1">
        {isAuthRoute && <Topbar />}
        <main className="p-6">{isAuthRoute ? <AuthGuard>{children}</AuthGuard> : children}</main>
      </div>
    </div>
  );
}
