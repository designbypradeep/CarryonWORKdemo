
"use client"

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight,
  ShieldCheck,
  Lock,
  Zap,
  Rocket,
  CheckCircle2,
  Building2,
  SquareTerminal,
  Layers,
  Flame,
  MousePointer2,
  Twitter,
  Github,
  Linkedin,
  AlertTriangle,
  Terminal,
  Server,
  Cpu,
  GraduationCap,
  Briefcase,
  Monitor,
  RefreshCw,
  Users,
  Lightbulb,
  IndianRupee,
  Youtube,
  Instagram,
  Music,
  Mail,
  MessageCircle,
  Quote,
  Play,
  FileCode,
  Palette,
  Star,
  Target,
  Wand2
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function LandingPage() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isScrolled, setIsScrolled] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const founderImg = PlaceHolderImages.find(img => img.id === 'founder-image');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    const tiltX = (y - 0.5) * 8;
    const tiltY = (x - 0.5) * -8;
    setTilt({ x: tiltX, y: tiltY });
  };

  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-primary selection:text-white grainy-bg overflow-x-hidden">
      {/* 2026 Custom Glass Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-1000 px-4 sm:px-8 pt-4 sm:pt-6 ${isScrolled ? 'py-2' : 'py-4 lg:py-10'}`}>
        <div className={`container mx-auto px-4 lg:px-12 flex justify-between items-center bg-white/60 backdrop-blur-3xl border border-white/20 rounded-2xl lg:rounded-[2.5rem] h-16 sm:h-20 lg:h-32 transition-all duration-1000 ${isScrolled ? 'shadow-2xl shadow-black/10 h-14 sm:h-16 lg:h-24' : 'shadow-none'}`}>
          <Link href="/" className="group shrink-0">
            <Logo className="w-auto" />
          </Link>
          <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
            <Link href="/manifesto" className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/60 hover:text-primary transition-all duration-700">Manifesto</Link>
            <Link href="/protocol" className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/60 hover:text-primary transition-all duration-700">Protocol</Link>
            <Link href="#who-is-for" className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/60 hover:text-primary transition-all duration-700">The Network</Link>
            <Link href="/auth/login">
              <Button variant="outline" className="rounded-full font-black text-[10px] uppercase tracking-widest px-8 h-12 lg:h-16 border-foreground/10 hover:border-primary transition-all duration-500 shadow-sm bg-white/40">
                Sign In
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button className="rounded-[2.5rem] px-8 h-14 xl:h-20 font-black shadow-[0_30px_60px_-15px_rgba(255,100,0,0.4)] btn-premium group flex items-center gap-4 text-[11px] xl:text-sm italic uppercase">
                Apply Now <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-700" />
              </Button>
            </Link>
          </nav>
          <div className="flex items-center gap-2 lg:hidden">
            <Link href="/auth/login">
              <Button size="sm" variant="ghost" className="rounded-full font-black text-[10px] uppercase tracking-widest px-4 h-10">Login</Button>
            </Link>
            <Link href="/auth/signup">
              <Button size="sm" className="rounded-full font-black text-[10px] uppercase tracking-widest px-6 h-10 btn-premium shadow-lg">Join</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* 1. Cinematic Hero - Centered Version */}
      <section className="relative pt-32 pb-16 sm:pt-48 sm:pb-24 lg:pt-64 lg:pb-32 xl:pt-80 xl:pb-48 overflow-hidden px-4 sm:px-8">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-[-15%] left-[5%] w-[300px] sm:w-[600px] lg:w-[1200px] h-[300px] sm:h-[600px] lg:h-[1200px] bg-primary/20 rounded-full blur-[80px] lg:blur-[220px] animate-pulse-soft" />
          <div className="absolute bottom-[-15%] right-[5%] w-[350px] sm:w-[700px] lg:w-[1400px] h-[350px] sm:h-[700px] lg:h-[1400px] bg-orange-500/15 rounded-full blur-[100px] lg:blur-[280px] animate-pulse-soft delay-2" />
        </div>

        <div className="container mx-auto flex flex-col items-center relative z-10 text-center">
          <div className="flex flex-col gap-6 lg:gap-10 animate-reveal items-center max-w-5xl">
            <div className="inline-flex items-center gap-4 bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-black text-[9px] sm:text-[10px] lg:text-xs uppercase tracking-[0.4em] lg:tracking-[0.6em] shadow-3xl">
              <Flame className="w-4 h-4 animate-pulse shrink-0" /> <span>Not a platform. Not a marketplace. Only Execution.</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-8xl xl:text-[9.5rem] font-black leading-[0.95] sm:leading-[0.9] lg:leading-[0.8] tracking-tighter text-gradient italic uppercase">
              The Resume <br />
              <span className="text-primary not-italic">is Dead.</span> <br />
              Sync Your Node.
            </h1>

            <div className="text-base sm:text-xl lg:text-2xl xl:text-3xl text-foreground/80 max-w-3xl leading-tight font-bold italic">
              <p>Traditional hiring is a theater of compliance.</p>
              <p className="text-foreground mt-1 lg:mt-2">CarryonWORK is an <span className="text-primary">Architecture of Outcomes.</span></p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 lg:gap-8 mt-6 lg:mt-10 w-full sm:w-auto">
              <Link href="/auth/signup?role=worker" className="w-full sm:w-auto">
                <Button size="lg" className="rounded-[2rem] lg:rounded-[4rem] w-full px-8 lg:px-14 h-16 lg:h-24 text-lg lg:text-2xl font-black shadow-[0_40px_80px_-20px_rgba(255,100,0,0.6)] gap-4 group btn-premium italic">
                  I am an Outcome <ArrowRight className="w-5 h-5 lg:w-8 lg:h-8 group-hover:translate-x-4 transition-transform duration-1000" />
                </Button>
              </Link>
              <Link href="/auth/signup?role=hirer" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="rounded-[2rem] lg:rounded-[4rem] w-full px-8 lg:px-14 h-16 lg:h-24 text-lg lg:text-2xl font-black border-2 sm:border-[3px] border-foreground hover:bg-foreground hover:text-white transition-all duration-1000 shadow-xl italic">
                  I need Artifacts
                </Button>
              </Link>
            </div>

            <div className="mt-8 lg:mt-12 animate-reveal delay-1">
              <Button 
                variant="outline" 
                className="h-14 lg:h-16 px-10 rounded-full bg-white/40 backdrop-blur-md border-primary/20 text-primary hover:bg-primary/5 font-black text-[11px] lg:text-xs uppercase tracking-[0.4em] italic gap-3 shadow-lg group"
                onClick={() => {
                  const demoSection = document.getElementById('execution-gateway');
                  demoSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Play className="w-4 h-4 fill-primary animate-pulse" /> Book Protocol Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Execution Gateway - The Split Portal */}
      <section id="execution-gateway" className="min-h-screen bg-white flex flex-col lg:flex-row relative z-10 border-y border-black/5 overflow-hidden">
        {/* Left Side: Worker Node (Execution Artifacts) */}
        <div className="flex-1 flex flex-col justify-center p-8 sm:p-12 lg:p-24 bg-white relative overflow-hidden group">
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <div className="relative z-10 max-w-xl mx-auto lg:mx-0">
             <h2 className="text-5xl sm:text-7xl xl:text-8xl font-black tracking-tighter italic uppercase text-primary leading-[0.85] mb-12">
               Deliver <br/>The <span className="text-black">Outcome</span> <br/>Protocol.
             </h2>
             <p className="text-lg sm:text-xl font-bold text-foreground/60 italic leading-tight max-w-md">
               Browse the artifact network. Execute at Layer 1. <br/>
               <span className="text-primary">Proof of Work, verified.</span>
             </p>
          </div>

          {/* Floating Artifact Cluster */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[500px] hidden xl:block pointer-events-none">
             <div className="relative w-full h-full">
                {/* Artifact Card 1: Verified Code */}
                <div className="absolute top-10 right-10 w-64 h-80 rounded-[2.5rem] bg-[#0A0A0B] shadow-2xl p-8 border border-white/10 animate-float">
                  <FileCode className="w-10 h-10 text-primary mb-4" />
                  <div className="space-y-3">
                    <div className="h-2 w-3/4 bg-white/20 rounded-full" />
                    <div className="h-2 w-full bg-white/10 rounded-full" />
                    <div className="h-2 w-1/2 bg-white/10 rounded-full" />
                  </div>
                  <div className="mt-32 flex justify-between items-center">
                    <span className="text-[10px] font-black uppercase text-primary tracking-widest">Code Sync</span>
                    <Badge variant="outline" className="text-white border-white/20 text-[8px]">v3.4</Badge>
                  </div>
                </div>
                {/* Artifact Card 2: Reputation Mesh */}
                <div className="absolute bottom-10 left-[-40px] w-64 h-80 rounded-[2.5rem] bg-white shadow-2xl p-8 border border-black/5 animate-float delay-1">
                  <Star className="w-10 h-10 text-primary mb-4" />
                  <div className="space-y-3">
                    <div className="h-2 w-full bg-primary/10 rounded-full" />
                    <div className="h-2 w-3/4 bg-primary/5 rounded-full" />
                  </div>
                  <div className="mt-32 flex justify-between items-center">
                    <span className="text-[10px] font-black uppercase text-primary tracking-widest">Trust Mesh</span>
                    <div className="w-8 h-8 rounded-full bg-primary/20" />
                  </div>
                </div>
             </div>
          </div>
        </div>

        {/* Right Side: Hirer Node (Mission Deployment Hub) */}
        <div className="flex-1 flex flex-col justify-center p-8 sm:p-12 lg:p-24 bg-accent/10 border-l border-black/5 relative overflow-hidden">
           <div className="max-w-md w-full mx-auto space-y-12 animate-reveal">
              <div className="text-center lg:text-left space-y-4">
                 <h3 className="text-2xl font-black italic uppercase tracking-tighter">Deploy Mission Critical Tasks</h3>
                 <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Secure High-Fidelity Execution</p>
              </div>

              <div className="bg-white p-8 sm:p-12 rounded-[3rem] shadow-2xl border border-black/5 space-y-8">
                 <div className="space-y-6">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-2">Define Mission Scope</label>
                      <div className="w-full h-16 sm:h-20 px-8 rounded-2xl border border-border bg-[#F8F9FA] flex items-center text-lg font-bold text-foreground/40 italic">
                        e.g. UPI 2.0 Integration...
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-2">Stake Vault Budget</label>
                      <div className="w-full h-16 sm:h-20 px-8 rounded-2xl border border-border bg-[#F8F9FA] flex items-center justify-between text-lg font-bold">
                        <span>₹75,000</span>
                        <IndianRupee className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                 </div>

                 <Link href="/auth/signup?role=hirer" className="block">
                  <Button className="w-full h-16 sm:h-20 rounded-2xl bg-primary hover:bg-primary/90 text-xl font-black italic shadow-lg shadow-primary/20 gap-4">
                    Initialize Protocol <Zap className="w-6 h-6 fill-white" />
                  </Button>
                 </Link>
              </div>
           </div>
        </div>
      </section>

      {/* 3. Reality Check (Problem Statement) */}
      <section className="py-16 lg:py-48 bg-white border-y border-black/5 px-4 sm:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="space-y-8 lg:space-y-12 text-center lg:text-left">
              <div className="space-y-4 lg:space-y-6">
                <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-6 py-2 rounded-full font-black text-[9px] sm:text-[10px] uppercase tracking-widest">The India Context</Badge>
                <h2 className="text-4xl lg:text-7xl font-black tracking-tighter italic uppercase leading-[0.9] lg:leading-[0.85]">Why the current <br className="hidden sm:block" />system is <span className="text-primary">broken.</span></h2>
              </div>
              <div className="space-y-6 lg:space-y-8 text-base sm:text-xl font-bold text-foreground/60 italic leading-relaxed">
                <p>90% of Indian freelancers spend more time bidding than building. Freshers are stuck in the "Experience Loop," while MSMEs lose ₹40,000+ per month on failed hires.</p>
                <p className="text-foreground">CarryonWORK is an <span className="text-primary">Artifact Mesh</span> to match outcomes, not resumes.</p>
              </div>
              <Link href="/manifesto" className="inline-block">
                <Button variant="outline" className="h-14 sm:h-16 px-8 sm:px-10 rounded-xl sm:rounded-2xl font-black text-[10px] sm:text-xs uppercase tracking-widest border-2 border-black hover:bg-black hover:text-white transition-all italic">Read The Manifesto</Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              {[
                { title: "No Bidding", icon: <AlertTriangle />, desc: "Nodes are matched based on reputation mesh, not lowest price." },
                { title: "No Resumes", icon: <SquareTerminal />, desc: "Your artifact history is your only verified identity." },
                { title: "Zero Risk", icon: <Lock />, desc: "The budget is staked in the Vault before the node syncs." },
                { title: "Instant Pay", icon: <Zap />, desc: "Artifact approval triggers automated protocol settlement." }
              ].map((item, i) => (
                <div key={i} className="p-8 sm:p-10 rounded-2xl sm:rounded-[2.5rem] bg-accent/20 border border-black/5 hover:border-primary/20 transition-all duration-700 flex flex-col gap-4 sm:gap-6">
                  <div className="text-primary">{React.cloneElement(item.icon as React.ReactElement, { className: 'w-6 h-6 sm:w-8 sm:h-8' })}</div>
                  <h4 className="text-lg sm:text-xl font-black italic uppercase leading-none">{item.title}</h4>
                  <p className="text-xs sm:text-sm font-bold opacity-40 italic leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Protocol Demo Section */}
      <section id="protocol-demo" className="py-24 lg:py-48 bg-[#0A0A0B] px-4 sm:px-8 relative overflow-hidden">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4 animate-reveal">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-6 py-2 rounded-full font-black text-[10px] uppercase tracking-widest italic">THE EXECUTION OVERVIEW</Badge>
              <h2 className="text-4xl lg:text-7xl font-black tracking-tighter italic uppercase text-white leading-none">The Vault <br/>Protocol <span className="text-primary">Demo.</span></h2>
            </div>

            <div className="relative group perspective-2000 animate-reveal delay-1">
              <div className="aspect-video w-full rounded-[3rem] lg:rounded-[5rem] overflow-hidden shadow-[0_80px_160px_-40px_rgba(0,0,0,0.8)] border border-white/10 bg-gradient-to-br from-white/5 to-transparent relative">
                <Image 
                  src="https://picsum.photos/seed/protocol/1200/675" 
                  alt="Protocol Demo Preview" 
                  fill 
                  className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000"
                  data-ai-hint="technology code"
                />
                
                {/* Cinematic Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 lg:w-40 lg:h-40 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 cursor-pointer shadow-[0_0_80px_rgba(255,100,0,0.2)]">
                    <div className="w-16 h-16 lg:w-24 lg:h-24 rounded-full bg-primary text-white flex items-center justify-center shadow-2xl animate-pulse">
                      <Play className="w-8 h-8 lg:w-12 lg:h-12 fill-white ml-2" />
                    </div>
                  </div>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-12 left-12 right-12 flex flex-col sm:flex-row justify-between items-end gap-6 relative z-10">
                   <div className="space-y-2">
                     <p className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Protocol Version 3.4.2</p>
                     <p className="text-2xl font-black italic text-white uppercase tracking-tighter">How to Sync a Node</p>
                   </div>
                   <div className="flex items-center gap-4 px-6 py-3 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
                      <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                      <span className="text-[10px] font-black text-white uppercase tracking-widest">LIVE ORCHESTRATION</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why CarryonWORK? (Roadmap/Features) */}
      <section id="roadmap" className="py-24 lg:py-48 bg-white relative overflow-hidden px-4 sm:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-20 lg:mb-32 space-y-4">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter italic uppercase leading-none">
              Why <span className="text-primary">CarryonWORK?</span>
            </h2>
            <p className="text-foreground/40 font-black text-[10px] sm:text-[11px] uppercase tracking-[0.4em] lg:tracking-[0.5em] italic max-w-2xl mx-auto leading-relaxed">
              Proof Unlocks Progression. The architecture of execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 lg:gap-y-24 gap-x-12 max-w-6xl mx-auto">
            {[
              { 
                icon: <RefreshCw className="w-10 h-10" />, 
                title: <><b>On-Demand</b> Matching</>, 
                desc: "Sync with a task node instantly. No waiting, no long bidding cycles or interview theater." 
              },
              { 
                icon: <Layers className="w-10 h-10" />, 
                title: <><b>Infinity</b> History</>, 
                desc: "Your artifact ledger is permanent and verified. Build a career legacy based on execution." 
              },
              { 
                icon: <ShieldCheck className="w-10 h-10" />, 
                title: <><b>Vault</b> Security</>, 
                desc: "100% solvency guaranteed. Task budgets are staked in the vault before you even start." 
              },
              { 
                icon: <Terminal className="w-10 h-10" />, 
                title: <><b>Automated</b> Audits</>, 
                desc: "Zero bias verification. Code and design artifacts are peer-audited in an isolated environment." 
              },
              { 
                icon: <Users className="w-10 h-10" />, 
                title: <><b>Elite</b> Mesh</>, 
                desc: "Connect and collaborate with the top 1% of the network for high-velocity outcomes." 
              },
              { 
                icon: <IndianRupee className="w-10 h-10" />, 
                title: <><b>Direct</b> Settlement</>, 
                desc: "Immediate payout upon artifact approval. No manual approvals or legacy bank delays." 
              }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-6 group">
                <div className="w-20 h-20 rounded-2xl bg-accent/50 flex items-center justify-center text-primary shadow-inner group-hover:scale-110 transition-transform duration-500">
                  {feature.icon}
                </div>
                <div className="space-y-3">
                   <h3 className="text-xl sm:text-2xl font-black tracking-tight uppercase italic leading-none text-foreground">
                    {feature.title}
                   </h3>
                   <p className="text-foreground/60 text-sm sm:text-base font-bold leading-relaxed italic max-w-xs mx-auto">
                    {feature.desc}
                   </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Network Nodes Section (Who is it for?) */}
      <section id="who-is-for" className="py-24 lg:py-48 bg-[#0A0A0B] relative overflow-hidden px-4 sm:px-8">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20 lg:mb-32 space-y-4">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter italic uppercase text-white leading-none">
              <span className="text-primary">Who</span> Is CarryonWORK For?
            </h2>
            <p className="text-white/40 font-black text-[10px] uppercase tracking-[0.5em] italic">The 2026 Execution Chain</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {[
              { 
                title: "Elite Workers", 
                icon: <GraduationCap className="w-8 h-8 text-primary" />,
                desc: "Top 1% executioners who prioritize outcome over hourly logs. Resumes are a legacy distraction."
              },
              { 
                title: "Agile Founders", 
                icon: <Briefcase className="w-8 h-8 text-primary" />,
                desc: "Builders who need mission-critical tasks completed without the theater of traditional HR."
              },
              { 
                title: "Enterprise Nodes", 
                icon: <Monitor className="w-8 h-8 text-primary" />,
                desc: "High-fidelity organizations seeking zero settlement risk and institutional quality execution."
              },
              { 
                title: "Career Shifters", 
                icon: <RefreshCw className="w-8 h-8 text-primary" />,
                desc: "Proven professionals pivoting nodes based on verified artifacts rather than past credentials."
              },
              { 
                title: "Talent Agencies", 
                icon: <Users className="w-8 h-8 text-primary" />,
                desc: "Scale your output by managing elite node meshes with complete vault transparency."
              },
              { 
                title: "Indie Hackers", 
                icon: <Lightbulb className="w-8 h-8 text-primary" />,
                desc: "Solo architects building the future, one artifact at a time, with guaranteed protocol staking."
              }
            ].map((node, i) => (
              <div key={i} className="p-10 bg-[#121214] rounded-3xl border border-white/5 hover:border-primary/20 transition-all duration-700 group flex flex-col gap-6 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
                  {React.cloneElement(node.icon as React.ReactElement, { className: 'w-32 h-32' })}
                </div>
                <div className="mb-2 group-hover:scale-110 transition-transform origin-left">{node.icon}</div>
                <div className="space-y-3 relative z-10">
                  <h3 className="text-2xl font-black tracking-tighter italic uppercase text-white leading-none">{node.title}</h3>
                  <p className="text-white/40 font-bold text-sm leading-relaxed italic">{node.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Meet Our Founder Section */}
      <section className="py-24 lg:py-48 bg-white overflow-hidden px-4 sm:px-8 border-b">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-32 items-center max-w-7xl mx-auto">
            
            <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] animate-mesh-drift blur-3xl -z-10" />
              <div className="relative w-full max-w-[500px] aspect-[4/5] rounded-[3rem] lg:rounded-[5rem] overflow-hidden shadow-2xl border-8 border-white group">
                {founderImg && (
                  <Image 
                    src={founderImg.imageUrl} 
                    alt={founderImg.description} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                    data-ai-hint={founderImg.imageHint}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-10 left-10 right-10 z-10">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl">
                    <p className="text-white font-black italic text-xl uppercase tracking-tighter">Rahul Rajput</p>
                    <p className="text-white/60 font-bold text-[10px] uppercase tracking-widest mt-1">Architect of the Protocol</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-12 animate-reveal order-1 lg:order-2">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/15 border-none px-6 py-2 rounded-full font-black text-[10px] uppercase tracking-widest italic w-fit">
                    THE VISIONARY
                  </Badge>
                  <h2 className="text-4xl lg:text-7xl font-black tracking-tighter italic uppercase leading-[0.9] lg:leading-[0.85]">
                    The Mind <br/>Behind the <br/><span className="text-primary">Protocol.</span>
                  </h2>
                </div>
                
                <div className="space-y-8 text-base sm:text-lg lg:text-xl font-bold text-foreground/70 italic leading-relaxed">
                  <div className="relative pl-8 border-l-4 border-primary/20">
                    <Quote className="absolute -left-3 -top-2 w-8 h-8 text-primary/10 fill-primary/5" />
                    <p className="text-foreground text-xl lg:text-2xl font-black tracking-tight leading-tight uppercase italic mb-6">
                      "I've built systems for millions. Now, I'm building one for the top 1% executioners."
                    </p>
                  </div>
                  
                  <p>
                    Rahul has been a founder since 2009. Having co-founded mission-critical digital solutions and spearheaded large-scale operations across India, he witnessed first-hand how the traditional resume filters high-execution talent out of the system.
                  </p>
                  
                  <p className="text-foreground">
                    Through <b>CarryonWORK</b>, he has mentored millions of young professionals, identifying the critical gap between "having a degree" and "delivering an outcome." CarryonWORK is the manifestation of that insight—a protocol where your artifacts define your value, not your bio.
                  </p>
                </div>
              </div>

              {/* Social Stats Card */}
              <div className="p-10 rounded-[3rem] bg-[#0A0A0B] text-white shadow-3xl shadow-black/10 space-y-8 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity"><Users className="w-32 h-32" /></div>
                 <div className="space-y-2 relative z-10">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary italic">The Trust Mesh</p>
                    <h4 className="text-4xl lg:text-5xl font-black italic uppercase tracking-tighter leading-none">16.3 Million <br/>Followers.</h4>
                 </div>
                 
                 <div className="flex flex-wrap gap-6 relative z-10">
                    {[
                      { icon: <Youtube />, link: "#" },
                      { icon: <Instagram />, link: "#" },
                      { icon: <Linkedin />, link: "#" },
                      { icon: <Music />, link: "#" },
                      { icon: <Twitter />, link: "#" },
                      { icon: <Mail />, link: "#" }
                    ].map((item, i) => (
                      <Link key={i} href={item.link} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-primary hover:bg-white/10 hover:border-primary/20 transition-all duration-500">
                        {React.cloneElement(item.icon as React.ReactElement, { className: 'w-5 h-5' })}
                      </Link>
                    ))}
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Premium Protocol Footer */}
      <footer className="py-16 lg:py-32 bg-[#0A0A0B] text-white px-4 sm:px-8 relative overflow-hidden border-t border-white/5">
        <div className="container mx-auto relative z-10 flex flex-col gap-16 lg:gap-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-12 lg:gap-12">
            <div className="sm:col-span-2 lg:col-span-4 space-y-8 lg:space-y-12">
              <div className="space-y-6 lg:space-y-8">
                <Link href="/" className="group block">
                  <Logo variant="light" className="w-auto" />
                </Link>
                <p className="text-white/40 font-bold text-xs sm:text-sm italic leading-relaxed max-w-xs">
                  The world&apos;s first artifact-based execution protocol. Designed for high-velocity outcomes.
                </p>
              </div>
              <div className="flex items-center gap-6 lg:gap-8">
                <Link href="#" className="text-white/40 hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></Link>
                <Link href="#" className="text-white/40 hover:text-primary transition-colors"><Github className="w-5 h-5" /></Link>
                <Link href="#" className="text-white/40 hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></Link>
              </div>
            </div>

            <div className="space-y-6 lg:space-y-8 lg:col-span-2">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary italic">The Network</h4>
              <nav className="flex flex-col gap-3 sm:gap-4 text-[11px] sm:text-sm font-black text-white/40 uppercase tracking-widest italic">
                <Link href="#who-is-for" className="hover:text-white transition-colors">Worker Nodes</Link>
                <Link href="#who-is-for" className="hover:text-white transition-colors">Hirer Nodes</Link>
                <Link href="#who-is-for" className="hover:text-white transition-colors">Elite Mesh</Link>
                <Link href="#who-is-for" className="hover:text-white transition-colors">Artifact Hub</Link>
              </nav>
            </div>

            <div className="space-y-6 lg:space-y-8 lg:col-span-3">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary italic">The Protocol</h4>
              <nav className="flex flex-col gap-3 sm:gap-4 text-[11px] sm:text-sm font-black text-white/40 uppercase tracking-widest italic">
                <Link href="/manifesto" className="hover:text-white transition-colors">The Manifesto</Link>
                <Link href="/protocol" className="hover:text-white transition-colors">The Vault</Link>
                <Link href="/protocol" className="hover:text-white transition-colors">Verification</Link>
                <Link href="/protocol" className="hover:text-white transition-colors">Reputation</Link>
              </nav>
            </div>

            <div className="space-y-6 lg:space-y-8 lg:col-span-3">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary italic">Legal Node</h4>
              <nav className="flex flex-col gap-3 sm:gap-4 text-[11px] sm:text-sm font-black text-white/40 uppercase tracking-widest italic">
                <Link href="#" className="hover:text-white transition-colors">Privacy Chain</Link>
                <Link href="#" className="hover:text-white transition-colors">Terms of Node</Link>
                <Link href="#" className="hover:text-white transition-colors">SLA Contract</Link>
                <Link href="#" className="hover:text-white transition-colors">Compliance</Link>
              </nav>
            </div>
          </div>

          <div className="pt-8 sm:pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 lg:gap-8 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4 px-6 py-3 bg-white/5 rounded-full border border-white/10 shadow-inner w-full sm:w-auto">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,1)]" />
              <p className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.1em] sm:tracking-[0.2em] text-white/60">Node Status: Global v3.4 Active (Latency: 14ms)</p>
            </div>
            <p className="text-white/20 font-black text-[9px] sm:text-[10px] lg:text-[11px] uppercase tracking-[0.3em] lg:tracking-[0.5em] text-center md:text-right italic">
              © 2026 Carryon Network Foundation • Mission Critical Execution
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
