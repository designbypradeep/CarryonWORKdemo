
import React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/ui/logo';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Scale, FileText, CheckCircle2 } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-primary selection:text-white grainy-bg overflow-x-hidden">
      <header className="fixed top-0 w-full z-50 p-6 sm:p-10">
        <div className="container mx-auto px-4 lg:px-12 flex justify-between items-center bg-white/60 backdrop-blur-3xl border border-black/5 rounded-2xl h-16 sm:h-20 lg:h-32 px-8 shadow-sm">
          <Link href="/">
            <Logo className="w-48" />
          </Link>
          <Link href="/">
            <Button variant="ghost" className="rounded-full gap-2 font-black uppercase tracking-widest text-[10px] h-12 px-6">
              <ArrowLeft className="w-4 h-4" /> Return to Base
            </Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-6 pt-48 pb-32 max-w-4xl">
        <section className="space-y-12 animate-reveal">
          <div className="space-y-6">
            <p className="text-[11px] font-black uppercase tracking-[0.5em] text-primary">Rules of Engagement</p>
            <h1 className="text-6xl lg:text-8xl font-black italic leading-[0.8] tracking-tighter uppercase">Protocol <br/>Terms.</h1>
          </div>

          <div className="space-y-12 pt-12 text-black/60 font-medium leading-relaxed">
            <div className="space-y-4">
               <h2 className="text-2xl font-black italic uppercase text-black">1. Neutrality Agreement</h2>
               <p>CarryonWORK acts as a neutral node. We do not arbitrate personal preferences, only deliverables matched against the defined mission scope.</p>
            </div>
            <div className="space-y-4">
               <h2 className="text-2xl font-black italic uppercase text-black">2. Vault Staking (Escrow)</h2>
               <p>By initializing a mission, the Hirer agrees to stake the full budget into Vault Alpha. Funds are released automatically upon verified artifact submission and approval.</p>
            </div>
            <div className="space-y-4">
               <h2 className="text-2xl font-black italic uppercase text-black">3. Strike Protocol</h2>
               <p>Failure to deliver artifacts or unexplained delays triggers the Strike Protocol. Three strikes lead to permanent node de-authorization. Merit is mandatory.</p>
            </div>
          </div>

          <div className="pt-12 border-t border-black/5 flex flex-col items-center text-center gap-6">
             <div className="w-20 h-20 bg-accent/50 rounded-[2rem] flex items-center justify-center text-primary">
                <Scale className="w-10 h-10" />
             </div>
             <p className="text-sm font-black italic text-black/40 max-w-lg">
                For a complete list of all 34 rules of engagement, please visit the 
                <Link href="/protocol" className="text-primary hover:underline ml-1">Protocol Page</Link>.
             </p>
          </div>
        </section>
      </main>
    </div>
  );
}
