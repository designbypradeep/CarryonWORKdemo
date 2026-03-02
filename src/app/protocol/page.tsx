import React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/ui/logo';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Lock, Layers, Zap, ArrowLeft, Terminal, Server, Cpu, Twitter, Github, Linkedin } from 'lucide-react';

export default function ProtocolPage() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-primary selection:text-white grainy-bg overflow-x-hidden">
      <header className="fixed top-0 w-full z-50 p-6 sm:p-10">
        <div className="container mx-auto flex justify-between items-center bg-white/60 backdrop-blur-3xl border border-black/5 rounded-[2.5rem] h-20 px-8 shadow-sm">
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

      <main className="container mx-auto px-6 pt-48 pb-32 max-w-6xl">
        <div className="flex flex-col gap-24">
          <section className="space-y-12 animate-reveal">
            <div className="space-y-6">
              <p className="text-[11px] font-black uppercase tracking-[0.5em] text-primary">Technical Specification</p>
              <h1 className="text-6xl lg:text-9xl font-black italic leading-[0.8] tracking-tighter uppercase">The Vault <br/>Architecture.</h1>
              <p className="text-xl lg:text-3xl font-bold text-black/50 leading-tight italic max-w-4xl pt-8">
                Every project is a self-contained node on the Carryon execution chain. Zero settlement risk, infinite transparency.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 pt-12">
               {[
                 { icon: <Lock />, title: "Staking", desc: "Funds are moved from the Hirer's node to 'Vault Alpha' (Simulated Escrow) before work assignment." },
                 { icon: <ShieldCheck />, title: "Verification", desc: "Artifacts are audited via our Skill Mesh, ensuring quality compliance at every layer." },
                 { icon: <Zap />, title: "Settlement", desc: "Approval triggers instantaneous release of funds. No manual bank delays or legacy settlement windows." }
               ].map((item, i) => (
                 <div key={i} className="p-10 rounded-[3rem] bg-accent/30 border border-black/5 flex flex-col gap-6">
                   <div className="w-14 h-14 bg-black text-white rounded-2xl flex items-center justify-center shadow-xl">{item.icon}</div>
                   <h3 className="text-2xl font-black italic uppercase leading-none">{item.title}</h3>
                   <p className="text-sm font-bold opacity-60 italic leading-relaxed">"{item.desc}"</p>
                 </div>
               ))}
            </div>
          </section>

          <section className="bg-[#0A0A0B] text-white p-12 lg:p-24 rounded-[4rem] relative overflow-hidden shadow-3xl">
             <div className="absolute top-[-20%] right-[-20%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[160px]" />
             <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-10">
                   <h2 className="text-4xl lg:text-6xl font-black italic uppercase leading-tight">The Artifact <br/>Mesh Protocol.</h2>
                   <div className="space-y-8">
                      {[
                        { icon: <Terminal />, label: "Git-Synced Commits", sub: "Direct integration with major version control hubs." },
                        { icon: <Server />, label: "Isolated Audit Nodes", sub: "Each submission is reviewed in a neutral protocol environment." },
                        { icon: <Cpu />, label: "Reputation Injection", sub: "Successful artifacts increase your node's execution weight." }
                      ].map((item, i) => (
                        <div key={i} className="flex gap-6 items-start">
                           <div className="text-primary mt-1">{item.icon}</div>
                           <div className="space-y-1">
                              <h4 className="font-black uppercase tracking-widest italic">{item.label}</h4>
                              <p className="text-sm text-white/40 font-bold">{item.sub}</p>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
                <div className="p-10 bg-white/5 rounded-[3.5rem] border border-white/10 backdrop-blur-3xl flex flex-col gap-8 shadow-2xl animate-float">
                   <div className="flex justify-between items-center">
                      <span className="text-[10px] font-black uppercase tracking-widest text-primary">Node Health: Active</span>
                      <Layers className="w-6 h-6 text-white/20" />
                   </div>
                   <div className="space-y-2">
                      <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                         <div className="h-full bg-primary w-[88%] rounded-full" />
                      </div>
                      <p className="text-[9px] font-black uppercase tracking-widest text-white/30 text-right italic">Sync: 14.2ms</p>
                   </div>
                   <p className="text-lg font-black italic leading-tight">"Protocol integrity maintained at Layer 1. Artifact solvency verified."</p>
                </div>
             </div>
          </section>
        </div>
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
