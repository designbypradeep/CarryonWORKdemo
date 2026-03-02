import type {Metadata} from 'next';
import './globals.css';
import { AppProvider } from '@/context/AppContext';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: {
    default: 'CarryonWORK | 2026 Execution Protocol',
    template: '%s | CarryonWORK',
  },
  description: 'The world\'s most trusted two-sided task marketplace. High-fidelity execution protocol.',
  icons: {
    icon: '/logo-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Orbitron:wght@400;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased min-h-screen">
        <AppProvider>
          {children}
          <Toaster />
        </AppProvider>
      </body>
    </html>
  );
}
