
"use client"

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FileQuestion, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-accent/20">
      <div className="text-center space-y-6 max-w-md">
        <div className="relative inline-block">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
            <FileQuestion className="w-12 h-12 text-primary" />
          </div>
          <div className="absolute -top-2 -right-2 bg-destructive text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
            404
          </div>
        </div>
        
        <h1 className="text-4xl font-bold tracking-tight">Execution Halted</h1>
        <p className="text-muted-foreground">
          The page you're looking for doesn't exist or has been moved. Even the best workers lose their way sometimes.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/">
            <Button className="rounded-full gap-2">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
