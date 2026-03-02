import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Control Center',
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
