import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';

export const metadata: Metadata = {
  title: 'Suhag Chandro Mohonto | Professional Portfolio',
  description: 'Professional profile focused on research, impact, strategy, and public engagement.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
