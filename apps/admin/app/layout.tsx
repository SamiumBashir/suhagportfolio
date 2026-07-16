import './globals.css';
import { AdminShell } from '../components/admin-shell';

export const metadata = {
  title: 'Admin Panel',
  description: 'Content management dashboard',
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100">
        <AdminShell>{children}</AdminShell>
      </body>
    </html>
  );
}
