
import React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/ui/logo';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Lock, EyeOff, Shield } from 'lucide-react';

export default function PrivacyPage() {
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
            <p className="text-[11px] font-black uppercase tracking-[0.5em] text-primary">Data Sovereignty</p>
            <h1 className="text-6xl lg:text-8xl font-black italic leading-[0.8] tracking-tighter uppercase">Privacy <br/>Protocol.</h1>
          </div>

          <div className="space-y-12 pt-12 text-black/60 font-medium leading-relaxed">
            <div className="space-y-4">
               <h2 className="text-2xl font-black italic uppercase text-black">1. Node Privacy</h2>
               <p>Your identity is a secure node. We only collect the data necessary to verify artifacts and facilitate vault-secured settlements. We do not sell your execution data to third-party marketplaces.</p>
            </div>
            <div className="space-y-4">
               <h2 className="text-2xl font-black italic uppercase text-black">2. Artifact Encryption</h2>
               <p>Submitted work (Artifacts) is strictly accessible only to the Hirer and the Protocol Audit team. Once a task is completed and approved, the work belongs to the Hirer according to the agreed terms.</p>
            </div>
            <div className="space-y-4">
               <h2 className="text-2xl font-black italic uppercase text-black">3. Transparent Logging</h2>
               <p>Every interaction is logged for dispute resolution. These logs are encrypted and stored in an isolated audit environment. Your privacy is protected by mission-critical security protocols.</p>
            </div>
          </div>

          <div className="p-12 rounded-3xl bg-accent/30 border border-black/5 flex items-center gap-8">
             <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Shield className="w-8 h-8" />
             </div>
             <div>
                <h4 className="font-black italic uppercase text-lg">Zero Leakage Guarantee</h4>
                <p className="text-sm font-bold opacity-40">CarryonWORK uses military-grade encryption for all financial and identity nodes.</p>
             </div>
          </div>
        </section>
      </main>
    </div>
  );
}
