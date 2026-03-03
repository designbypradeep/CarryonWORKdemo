
import React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/ui/logo';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Rocket, Briefcase, Sparkles } from 'lucide-react';

export default function CareersPage() {
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

      <main className="container mx-auto px-6 pt-48 pb-32 max-w-5xl text-center">
        <section className="space-y-12 animate-reveal">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-black text-[10px] uppercase tracking-widest mx-auto">
              <Rocket className="w-4 h-4" /> Hiring Now
            </div>
            <h1 className="text-6xl lg:text-9xl font-black italic leading-[0.8] tracking-tighter uppercase">Build the <br/>Protocol.</h1>
            <p className="text-xl lg:text-2xl font-bold text-black/50 leading-tight italic max-w-2xl mx-auto pt-8">
              We aren't looking for employees. We are looking for architects, builders, and executioners who believe the resume is dead.
            </p>
          </div>

          <div className="grid gap-6 max-w-3xl mx-auto pt-12">
            {[
              { title: "Senior Backend Architect", type: "Full-Time", location: "Remote / Greater Noida" },
              { title: "Product Designer (UI/UX)", type: "Full-Time", location: "Remote" },
              { title: "Growth & Community Lead", type: "Full-Time", location: "Remote / Delhi NCR" }
            ].map((job, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white border border-black/5 hover:border-primary transition-all flex flex-col sm:flex-row items-center justify-between gap-6 group text-left">
                <div className="space-y-1">
                  <h3 className="text-xl font-black italic uppercase group-hover:text-primary transition-colors">{job.title}</h3>
                  <p className="text-[10px] font-black text-black/40 uppercase tracking-widest">{job.type} • {job.location}</p>
                </div>
                <Button className="rounded-full font-black text-[10px] uppercase tracking-widest px-8 italic btn-premium h-12">
                  Apply to Node
                </Button>
              </div>
            ))}
          </div>

          <div className="pt-24 space-y-8">
            <div className="w-20 h-20 bg-accent/50 rounded-[2rem] flex items-center justify-center text-primary mx-auto">
              <Sparkles className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-black italic uppercase">Don't see a role?</h2>
            <p className="text-black/40 font-bold italic max-w-md mx-auto">
              If you have an artifact that proves you belong in the protocol, send your proof to <span className="text-primary">careers@carryon.work</span>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
