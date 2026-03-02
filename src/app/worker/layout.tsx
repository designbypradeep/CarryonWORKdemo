import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Worker Protocol',
};

export default function WorkerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
