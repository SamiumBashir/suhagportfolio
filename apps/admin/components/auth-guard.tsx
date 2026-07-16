'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const AUTH_KEY = 'admin-authenticated';

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const authenticated = typeof window !== 'undefined' && window.localStorage.getItem(AUTH_KEY) === 'true';

    if (!authenticated && pathname !== '/login') {
      router.replace('/login');
      return;
    }

    if (authenticated && pathname === '/login') {
      router.replace('/dashboard');
      return;
    }

    setChecked(true);
  }, [pathname, router]);

  if (!checked) {
    return null;
  }

  return <>{children}</>;
}
