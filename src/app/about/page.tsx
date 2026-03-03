
import React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/ui/logo';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Target, Users, Zap, ShieldCheck } from 'lucide-react';

export default function AboutPage() {
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

      <main className="container mx-auto px-6 pt-48 pb-32 max-w-5xl">
        <section className="space-y-16 animate-reveal">
          <div className="space-y-6">
            <p className="text-[11px] font-black uppercase tracking-[0.5em] text-primary">The Vision</p>
            <h1 className="text-6xl lg:text-9xl font-black italic leading-[0.8] tracking-tighter uppercase">Architecture <br/>of Access.</h1>
            <p className="text-xl lg:text-3xl font-bold text-black/50 leading-tight italic max-w-4xl pt-8">
              CarryonWORK is a skill-first execution protocol. We bypass the resume and degree filter, allowing you to prove your worth through real, task-based outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 pt-12 border-t border-black/5">
             <div className="space-y-6">
                <h2 className="text-3xl font-black italic uppercase text-primary">The Origin.</h2>
                <p className="text-lg text-black/60 font-medium leading-relaxed">
                  Born from lived reality, CarryonWORK was created by Rahul Rajput to solve the silent crisis where talent exists, but opportunity does not. We are building for the millions trapped in toxic cultures or limited by lack of formal credentials.
                </p>
             </div>
             <div className="space-y-6">
                <h2 className="text-3xl font-black italic uppercase text-primary">The Mission.</h2>
                <p className="text-lg text-black/60 font-medium leading-relaxed">
                  Our mission is to provide dignified, flexible, and trustworthy work. We believe that a person's ability to deliver an artifact is the ultimate proof of their skill—not a piece of paper.
                </p>
             </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
            {[
              { icon: <Target />, label: "Skill-First", desc: "Outcomes over credentials." },
              { icon: <Users />, label: "Neutrality", desc: "Fairness for all nodes." },
              { icon: <Zap />, label: "Velocity", desc: "Zero friction execution." },
              { icon: <ShieldCheck />, label: "Trust", desc: "Vault-secured staking." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-accent/30 border border-black/5 flex flex-col gap-4">
                <div className="w-10 h-10 bg-black text-white rounded-xl flex items-center justify-center">{item.icon}</div>
                <h4 className="font-black italic uppercase text-sm">{item.label}</h4>
                <p className="text-xs font-bold opacity-40 italic">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
