import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hirer Protocol',
};

export default function HirerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
