import React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/ui/logo';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ShieldAlert, Zap, Lock, Twitter, Github, Linkedin } from 'lucide-react';

export default function ManifestoPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white selection:bg-primary selection:text-white overflow-hidden mesh-gradient-dark animate-mesh-drift">
      <header className="fixed top-0 w-full z-50 p-6 sm:p-10">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <Logo variant="light" className="w-48" />
          </Link>
          <Link href="/">
            <Button variant="ghost" className="text-white hover:bg-white/10 rounded-full gap-2 font-black uppercase tracking-widest text-[10px]">
              <ArrowLeft className="w-4 h-4" /> Back to Base
            </Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-6 pt-48 pb-32 max-w-5xl">
        <section className="space-y-16 animate-reveal">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-destructive/20 border border-destructive/40 rounded-full text-destructive font-black text-[10px] uppercase tracking-widest">
              <ShieldAlert className="w-4 h-4" /> The Protocol Truth
            </div>
            <h1 className="text-6xl sm:text-8xl font-black italic uppercase leading-[0.8] tracking-tighter">
              The Resume <br/>
              <span className="text-primary not-italic">is Dead.</span>
            </h1>
            <p className="text-2xl sm:text-3xl font-bold text-white/50 leading-tight italic max-w-3xl">
              Traditional hiring is a theater of compliance. We are building the architecture of execution.
            </p>
          </div>

          <div className="grid gap-12 pt-12 border-t border-white/10">
             {[
               { title: "The Lie of Degrees", desc: "Universities teach you how to be a student. CarryonWORK forces you to be an outcome. Degrees don't sync nodes; artifacts do." },
               { title: "The Lie of Bidding", desc: "If you have to bid for work, you are a commodity. In the Carryon Network, your reputation mesh makes you a mission-critical necessity." },
               { title: "The Lie of Interviews", desc: "Charisma is not capability. We bypass the social theater. If your artifact passes verification, you are in. Period." }
             ].map((truth, i) => (
               <div key={i} className="space-y-4">
                 <h2 className="text-3xl font-black italic uppercase text-primary">{truth.title}.</h2>
                 <p className="text-lg sm:text-xl text-white/40 font-bold leading-relaxed">{truth.desc}</p>
               </div>
             ))}
          </div>

          <div className="p-12 lg:p-20 bg-white text-black rounded-[4rem] space-y-12 shadow-3xl">
             <h3 className="text-4xl lg:text-5xl font-black italic uppercase leading-none tracking-tighter">Join the <br/>Execution Hub.</h3>
             <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                   <div className="w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center"><Zap className="w-6 h-6" /></div>
                   <h4 className="text-xl font-black italic uppercase">Instant Velocity.</h4>
                   <p className="text-sm font-bold opacity-60">Skip the 3-week hiring process. Sync with a node in 14 minutes.</p>
                </div>
                <div className="space-y-4">
                   <div className="w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center"><Lock className="w-6 h-6" /></div>
                   <h4 className="text-xl font-black italic uppercase">Vault Staking.</h4>
                   <p className="text-sm font-bold opacity-60">Never worry about payment. The budget is locked before you start.</p>
                </div>
             </div>
             <div className="pt-8 flex flex-col sm:flex-row gap-6">
                <Link href="/auth/signup?role=worker" className="flex-1">
                  <Button className="w-full h-20 rounded-[2rem] text-xl font-black uppercase tracking-widest italic btn-premium">I am an Outcome</Button>
                </Link>
                <Link href="/auth/signup?role=hirer" className="flex-1">
                  <Button variant="outline" className="w-full h-20 rounded-[2rem] text-xl font-black uppercase tracking-widest italic border-black border-4 hover:bg-black hover:text-white transition-all">I need Artifacts</Button>
                </Link>
             </div>
          </div>
        </section>
      </main>

      <footer className="py-24 lg:py-32 bg-[#0A0A0B] text-white px-4 sm:px-8 relative overflow-hidden border-t border-white/5">
        <div className="container mx-auto relative z-10 flex flex-col gap-16 lg:gap-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-12">
            <div className="sm:col-span-2 lg:col-span-4 space-y-12">
              <div className="space-y-8">
                <Link href="/" className="group block">
                  <Logo variant="light" className="w-56" />
                </Link>
                <p className="text-white/40 font-bold text-sm italic leading-relaxed max-w-xs">
                  The world's first artifact-based execution protocol. Designed for high-velocity outcomes.
                </p>
              </div>
              <div className="flex items-center gap-8">
                <Link href="#" className="text-white/40 hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></Link>
                <Link href="#" className="text-white/40 hover:text-primary transition-colors"><Github className="w-5 h-5" /></Link>
                <Link href="#" className="text-white/40 hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></Link>
              </div>
            </div>

            <div className="space-y-8 lg:col-span-2">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary italic">The Network</h4>
              <nav className="flex flex-col gap-4 text-sm font-black text-white/40 uppercase tracking-widest italic">
                <Link href="/#who-is-for" className="hover:text-white transition-colors">Worker Nodes</Link>
                <Link href="/#who-is-for" className="hover:text-white transition-colors">Hirer Nodes</Link>
                <Link href="/#who-is-for" className="hover:text-white transition-colors">Elite Mesh</Link>
                <Link href="/#who-is-for" className="hover:text-white transition-colors">Artifact Hub</Link>
              </nav>
            </div>

            <div className="space-y-8 lg:col-span-3">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary italic">The Protocol</h4>
              <nav className="flex flex-col gap-4 text-sm font-black text-white/40 uppercase tracking-widest italic">
                <Link href="/manifesto" className="hover:text-white transition-colors">The Manifesto</Link>
                <Link href="/protocol" className="hover:text-white transition-colors">The Vault</Link>
                <Link href="/protocol" className="hover:text-white transition-colors">Verification</Link>
                <Link href="/protocol" className="hover:text-white transition-colors">Reputation</Link>
              </nav>
            </div>

            <div className="space-y-8 lg:col-span-3">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary italic">Legal Node</h4>
              <nav className="flex flex-col gap-4 text-sm font-black text-white/40 uppercase tracking-widest italic">
                <Link href="#" className="hover:text-white transition-colors">Privacy Chain</Link>
                <Link href="#" className="hover:text-white transition-colors">Terms of Node</Link>
                <Link href="#" className="hover:text-white transition-colors">SLA Contract</Link>
                <Link href="#" className="hover:text-white transition-colors">Compliance</Link>
              </nav>
            </div>
          </div>

          <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4 px-6 py-3 bg-white/5 rounded-full border border-white/10 shadow-inner w-full sm:w-auto">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,1)]" />
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">Node Status: Global v3.4 Active (Latency: 14ms)</p>
            </div>
            <p className="text-white/20 font-black text-[10px] lg:text-[11px] uppercase tracking-[0.5em] text-center md:text-right italic">
              © 2026 Carryon Network Foundation • Mission Critical Execution
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
