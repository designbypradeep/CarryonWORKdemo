
"use client"

import React, { useState, useEffect } from 'react';
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
  CheckCircle2,
  SquareTerminal,
  Layers,
  Flame,
  Twitter,
  Github,
  Linkedin,
  AlertTriangle,
  Terminal,
  GraduationCap,
  Briefcase,
  RefreshCw,
  Users,
  Youtube,
  Instagram,
  Music,
  Mail,
  Quote,
  Play,
  FileCode,
  Star,
  ChevronRight,
  BookOpen,
  HelpCircle,
  TrendingUp,
  CreditCard
} from 'lucide-react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const FAQ_DATA = [
  {
    question: "What exactly is CarryonWORK?",
    answer: "CarryonWORK is a skill-first execution protocol. We bypass the resume and degree filter, allowing you to prove your worth through real, task-based outcomes. It's not a job portal; it's an architecture of opportunity.",
    icon: <Terminal className="w-5 h-5" />
  },
  {
    question: "How does the 'Vault' (Escrow) protect me?",
    answer: "Total settlement risk is eliminated. Before any worker starts a task, the Hirer must stake the full budget into 'Vault Alpha'. Funds are released automatically upon verified task approval.",
    icon: <Lock className="w-5 h-5" />
  },
  {
    question: "Can I join as a fresher without experience?",
    answer: "Absolutely. We have a specific 'Fresher Pathway'. You start with Low-Risk tasks under supervision. After successfully delivering 8-10 artifacts, your node is verified for independent execution.",
    icon: <TrendingUp className="w-5 h-5" />
  },
  {
    question: "Are there any joining or hidden fees?",
    answer: "Zero. There are no registration fees for Workers. We only take a platform commission (10-20% based on task risk) after a successful outcome has been delivered and paid.",
    icon: <CreditCard className="w-5 h-5" />
  },
  {
    question: "What happens if there is a dispute?",
    answer: "Our AI-Oracle and Admin protocols arbitrate disputes based on the initial agreed scope and submitted artifacts. We remain a neutral node to ensure fairness for both parties.",
    icon: <ShieldCheck className="w-5 h-5" />
  },
  {
    question: "Is this a freelancing marketplace like Upwork?",
    answer: "No. Unlike generic marketplaces, we have no bidding wars and no price-dropping. Nodes are matched based on reputation mesh and skill verification, not who is the cheapest.",
    icon: <Layers className="w-5 h-5" />
  }
];

const TRUSTED_LOGOS = [
  { name: 'Amazon', color: 'hover:text-[#FF9900]' },
  { name: 'Vedantu', color: 'hover:text-[#F37021]' },
  { name: 'WELSPUN', color: 'hover:text-[#0054A6]' },
  { name: 'Heritage', color: 'hover:text-[#EE1C25]' },
  { name: 'Habuild', color: 'hover:text-[#00B4D8]' },
];

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showGetStartedOptions, setShowGetStartedOptions] = useState(false);
  const founderImg = PlaceHolderImages.find(img => img.id === 'founder-image');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToDemo = () => {
    document.getElementById('protocol-demo')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleGetStarted = () => {
    setShowGetStartedOptions(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-primary selection:text-white grainy-bg overflow-x-hidden">
      <header className={`fixed top-0 w-full z-50 transition-all duration-1000 px-4 sm:px-8 pt-2 sm:pt-4 ${isScrolled ? 'py-1' : 'py-2'}`}>
        <div className={`container mx-auto px-4 lg:px-12 flex justify-between items-center bg-white/60 backdrop-blur-3xl border border-white/20 rounded-2xl lg:rounded-[2.5rem] h-16 sm:h-20 transition-all duration-1000 ${isScrolled ? 'shadow-2xl shadow-black/10 h-14 sm:h-16 lg:h-18' : 'shadow-none'}`}>
          <Link href="/" className="group shrink-0">
            <Logo className="w-auto" />
          </Link>
          <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
            <Link href="/manifesto" className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/60 hover:text-primary transition-all duration-700">Manifesto</Link>
            <Link href="/protocol" className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/60 hover:text-primary transition-all duration-700">Protocol</Link>
            <Link href="#who-is-for" className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/60 hover:text-primary transition-all duration-700">The Network</Link>
            <Button variant="outline" asChild className="rounded-full font-black text-[10px] uppercase tracking-widest px-8 h-10 xl:h-12 border-foreground/10 hover:border-primary transition-all duration-500 shadow-sm bg-white/40">
              <Link href="/auth/login">Sign In</Link>
            </Button>
            <Button asChild className="rounded-[2.5rem] px-8 h-12 xl:h-14 font-black shadow-[0_30px_60px_-15px_rgba(255,100,0,0.4)] btn-premium group flex items-center gap-4 text-[11px] xl:text-xs italic uppercase">
              <Link href="/auth/signup">
                Apply Now <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-700" />
              </Link>
            </Button>
          </nav>
          <div className="flex items-center gap-2 lg:hidden">
            <Button size="sm" variant="ghost" asChild className="rounded-full font-black text-[10px] uppercase tracking-widest px-4 h-10">
              <Link href="/auth/login">Login</Link>
            </Button>
            <Button size="sm" asChild className="rounded-full font-black text-[10px] uppercase tracking-widest px-6 h-10 btn-premium shadow-lg">
              <Link href="/auth/signup">Join</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Cinematic Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 lg:pt-32 xl:pt-36 pb-12 overflow-hidden px-4 sm:px-8">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-[-15%] left-[5%] w-[300px] sm:w-[600px] lg:w-[1000px] h-[300px] sm:h-[600px] lg:h-[1000px] bg-primary/10 rounded-full blur-[80px] lg:blur-[200px] animate-pulse-soft" />
          <div className="absolute bottom-[-15%] right-[5%] w-[350px] sm:w-[700px] lg:w-[1200px] h-[350px] sm:h-[700px] lg:h-[1200px] bg-orange-500/10 rounded-full blur-[100px] lg:blur-[250px] animate-pulse-soft delay-2" />
        </div>

        <div className="container mx-auto flex flex-col items-center relative z-10 text-center">
          <div className="flex flex-col gap-2 lg:gap-3 animate-reveal items-center max-w-7xl w-full">
            <div className="inline-flex items-center gap-4 bg-primary text-white px-6 sm:px-8 py-1.5 sm:py-2 rounded-full font-black text-[9px] sm:text-[10px] uppercase tracking-[0.4em] lg:tracking-[0.5em] shadow-3xl mb-4 lg:mb-6">
              <Flame className="w-3.5 h-3.5 animate-pulse shrink-0" /> <span>Real Tasks. Real Proof. Real Payment.</span>
            </div>
            
            <div className="space-y-0 leading-none">
              <h1 className="text-3xl sm:text-5xl lg:text-[5rem] xl:text-[6rem] font-black tracking-tighter italic uppercase text-[#1A2C35]">
                THE RESUME
              </h1>
              <h1 className="text-3xl sm:text-5xl lg:text-[5rem] xl:text-[6rem] font-black tracking-tighter italic uppercase text-primary">
                IS DEAD.
              </h1>
              <h1 className="text-3xl sm:text-5xl lg:text-[5rem] xl:text-[6rem] font-black tracking-tighter italic uppercase text-[#1A2C35]">
                SYNC YOUR NODE.
              </h1>
            </div>

            <div className="text-xs sm:text-sm lg:text-lg text-foreground/80 max-w-3xl leading-tight font-bold italic mt-4 lg:mt-6">
              <p>Built for those who can&apos;t afford to quit recklessly.</p>
              <p className="text-foreground mt-1">CarryonWORK is an <span className="text-primary">Architecture of Outcomes.</span></p>
            </div>

            {!showGetStartedOptions ? (
              <div className="mt-8 lg:mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 lg:gap-6 w-full max-w-4xl">
                <Button 
                  size="lg" 
                  className="rounded-[2.5rem] lg:rounded-[3.5rem] w-full sm:w-[260px] px-8 h-14 lg:h-18 text-base lg:text-lg font-black shadow-[0_20px_40px_-10px_rgba(255,100,0,0.4)] btn-premium italic group"
                  onClick={handleGetStarted}
                >
                  Get Started <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </Button>
                <Button 
                  variant="outline"
                  size="lg" 
                  className="rounded-[2.5rem] lg:rounded-[3.5rem] w-full sm:w-[260px] px-8 h-14 lg:h-18 text-base lg:text-lg font-black border-2 border-foreground/10 hover:border-primary transition-all duration-500 italic bg-white/40 backdrop-blur-sm"
                  onClick={scrollToDemo}
                >
                  Demo
                </Button>
              </div>
            ) : (
              <div className="mt-6 lg:mt-8 w-full max-w-5xl animate-reveal flex flex-col items-center gap-3">
                <p className="text-[9px] lg:text-[10px] font-black text-muted-foreground uppercase tracking-[0.5em] italic mb-1">What is your objective?</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4 w-full">
                  <Link href="/auth/signup?role=worker" className="group">
                    <div className="h-28 md:h-36 lg:h-40 rounded-[2rem] lg:rounded-[2.5rem] bg-primary flex items-center justify-center p-6 text-white shadow-2xl hover:scale-[1.02] transition-all duration-700">
                      <div className="space-y-1 text-center">
                        <p className="text-[9px] font-black uppercase tracking-widest text-black opacity-80 leading-none mb-1">Execution Node</p>
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-black italic uppercase tracking-tighter leading-none text-white">Work as a <br/>Freelancer</h3>
                      </div>
                    </div>
                  </Link>
                  <Link href="/auth/signup?role=hirer" className="group">
                    <div className="h-28 md:h-36 lg:h-40 rounded-[2rem] lg:rounded-[2.5rem] bg-white border-2 border-primary flex items-center justify-center p-6 text-primary shadow-2xl hover:scale-[1.02] transition-all duration-700">
                      <div className="space-y-1 text-center">
                        <p className="text-[9px] font-black uppercase tracking-widest opacity-80 leading-none mb-1">Orchestration Node</p>
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-black italic uppercase tracking-tighter leading-none">Hire a <br/>Freelancer</h3>
                      </div>
                    </div>
                  </Link>
                </div>
                
                <Link href="/auth/signup?role=worker&intent=learn" className="w-full group">
                  <div className="h-20 md:h-24 lg:h-28 rounded-[2rem] lg:rounded-[2.5rem] bg-[#0A0A0B] flex items-center justify-center p-4 text-white shadow-2xl hover:scale-[1.01] transition-all duration-700 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10"><BookOpen className="w-12 h-12 lg:w-16 lg:h-16" /></div>
                    <div className="space-y-0 text-center relative z-10">
                      <p className="text-[9px] font-black uppercase tracking-widest opacity-60 text-primary mb-1">The Progression Pathway</p>
                      <h3 className="text-base md:text-xl lg:text-2xl font-black italic uppercase tracking-tighter leading-none text-white">Learn First and Then Earn</h3>
                    </div>
                  </div>
                </Link>

                <Button 
                  variant="ghost" 
                  className="text-[8px] font-black uppercase tracking-[0.4em] text-muted-foreground hover:text-primary h-6 mt-1"
                  onClick={() => setShowGetStartedOptions(false)}
                >
                  Return to selection
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-20 lg:py-28 bg-white/40 border-y border-black/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-16 lg:gap-20">
            <h2 className="text-3xl lg:text-5xl font-black tracking-tighter text-center max-w-4xl italic leading-[1.1]">
              Loved and trusted by <br className="hidden sm:block"/>
              <span className="text-primary">16,000+ businesses</span>, across the globe
            </h2>
            
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-10 lg:gap-x-24 opacity-60">
              {TRUSTED_LOGOS.map((logo) => (
                <div key={logo.name} className={`text-2xl lg:text-4xl font-black italic uppercase tracking-tighter transition-all duration-500 cursor-default grayscale hover:grayscale-0 ${logo.color}`}>
                  {logo.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Protocol Demo Section */}
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
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 lg:w-40 lg:h-40 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 cursor-pointer shadow-[0_0_80px_rgba(255,100,0,0.2)]">
                    <div className="w-16 h-16 lg:w-24 lg:h-24 rounded-full bg-primary text-white flex items-center justify-center shadow-2xl animate-pulse">
                      <Play className="w-8 h-8 lg:w-12 lg:h-12 fill-white ml-2" />
                    </div>
                  </div>
                </div>

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

      {/* Execution Gateway */}
      <section id="execution-gateway" className="min-h-screen bg-white flex flex-col lg:flex-row relative z-10 border-y border-black/5 overflow-hidden">
        <div className="flex-1 flex flex-col justify-center p-8 sm:p-12 lg:p-24 bg-white relative overflow-hidden group">
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <div className="relative z-10 max-w-xl mx-auto lg:mx-0">
             <h2 className="text-5xl sm:text-7xl xl:text-[90px] font-black tracking-tighter italic uppercase leading-[0.85] mb-8">
               <span className="text-primary">DO REAL</span> <br/>
               <span className="text-primary">TASKS.</span> <br/>
               <span className="text-black">GET PAID</span> <br/>
               <span className="text-primary">FAST.</span>
             </h2>
             <div className="space-y-4">
               <p className="text-lg sm:text-xl font-bold text-foreground/80 italic leading-tight max-w-md">
                 Pick a task, finish it, and get paid. <br/>
                 <span className="text-primary">Your work is your resume.</span>
               </p>
               <p className="text-sm font-bold text-muted-foreground/60 italic uppercase tracking-widest">
                 No interviews. No bidding wars. No degree bias.
               </p>
             </div>
          </div>

          <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[400px] h-[500px] hidden xl:block pointer-events-none">
             <div className="relative w-full h-full">
                <div className="absolute top-10 right-20 w-64 h-80 rounded-[2.5rem] bg-[#0A0A0B] shadow-2xl p-8 border border-white/10 animate-float">
                  <FileCode className="w-10 h-10 text-primary mb-4" />
                  <div className="space-y-3">
                    <div className="h-2 w-3/4 bg-white/20 rounded-full" />
                    <div className="h-2 w-full bg-white/10 rounded-full" />
                    <div className="h-2 w-1/2 bg-white/10 rounded-full" />
                  </div>
                  <div className="mt-32 flex justify-between items-center">
                    <span className="text-[10px] font-black uppercase text-primary tracking-widest">Verified Work</span>
                    <Badge variant="outline" className="text-white border-white/20 text-[8px]">v3.4</Badge>
                  </div>
                </div>
                <div className="absolute bottom-10 left-0 w-72 h-80 rounded-[2.5rem] bg-white shadow-2xl p-10 border border-black/5 animate-float delay-1000">
                  <Star className="w-10 h-10 text-primary mb-4" />
                  <div className="space-y-4">
                    <div className="h-2.5 w-full bg-primary/10 rounded-full" />
                    <div className="h-2.5 w-3/4 bg-primary/5 rounded-full" />
                  </div>
                  <div className="mt-28 flex flex-col items-center">
                    <span className="text-[10px] font-black uppercase text-primary tracking-[0.2em] mb-1">REPUTATION</span>
                    <div className="w-8 h-8 rounded-full bg-primary/10" />
                  </div>
                </div>
             </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center p-8 sm:p-12 lg:p-24 bg-accent/5 border-l border-black/5 relative overflow-hidden">
           <div className="max-w-md w-full mx-auto space-y-12">
              <div className="text-center space-y-4">
                 <h3 className="text-3xl sm:text-4xl font-black italic uppercase tracking-tighter text-black">GET YOUR WORK DONE INSTANTLY.</h3>
                 <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.3em]">Safe, fast, and high-quality results.</p>
              </div>

              <div className="bg-white p-10 sm:p-14 rounded-[3.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.06)] border border-black/5 space-y-10">
                 <div className="space-y-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground ml-2 italic">WHAT NEEDS TO BE DONE?</label>
                      <div className="w-full h-20 px-8 rounded-2xl border border-border bg-[#F8F9FA] flex items-center text-lg font-bold text-foreground/20 italic">
                        e.g. Design a landing page...
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground ml-2 italic">SET THE BUDGET (INR)</label>
                      <div className="w-full h-20 px-8 rounded-2xl border border-border bg-[#F8F9FA] flex items-center justify-between text-xl font-bold">
                        <span className="text-black">₹75,000</span>
                        <span className="text-primary font-black italic text-2xl">₹</span>
                      </div>
                    </div>
                 </div>

                 <Button asChild className="w-full h-20 rounded-2xl bg-primary hover:bg-primary/90 text-2xl font-black italic shadow-lg shadow-primary/20 flex items-center justify-center gap-4">
                  <Link href="/auth/signup?role=hirer">
                    Find a Worker <Zap className="w-6 h-6 fill-white" />
                  </Link>
                 </Button>
              </div>
           </div>
        </div>
      </section>

      {/* Reality Check */}
      <section className="py-16 lg:py-48 bg-white border-y border-black/5 px-4 sm:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="space-y-8 lg:space-y-12 text-center lg:text-left">
              <div className="space-y-4 lg:space-y-6">
                <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-6 py-2 rounded-full font-black text-[9px] sm:text-[10px] uppercase tracking-widest">The India Crisis</Badge>
                <h2 className="text-4xl lg:text-7xl font-black tracking-tighter italic uppercase leading-[0.9] lg:leading-[0.85]">Talent exists. <br className="hidden sm:block" />Opportunity <span className="text-primary">does not.</span></h2>
              </div>
              <div className="space-y-6 lg:space-y-8 text-base sm:text-xl font-bold text-foreground/60 italic leading-relaxed">
                <p>Millions are trapped in toxic jobs because EMIs don&apos;t allow career risks. Degrees filter out the skilled, while open marketplaces reward only early entrants.</p>
                <p className="text-foreground">CarryonWORK is the <span className="text-primary">Architecture of Access.</span></p>
              </div>
              <Button variant="outline" asChild className="h-14 sm:h-16 px-8 sm:px-10 rounded-xl sm:rounded-2xl font-black text-[10px] sm:text-xs uppercase tracking-widest border-2 border-black hover:bg-black hover:text-white transition-all italic">
                <Link href="/manifesto">Read The Manifesto</Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              {[
                { title: "No Resumes", icon: <SquareTerminal />, desc: "Your artifact history is your only verified identity." },
                { title: "No Bidding", icon: <AlertTriangle />, desc: "Nodes are matched based on reputation, not price wars." },
                { title: "Zero Degree Bias", icon: <GraduationCap />, desc: "Capability defines your access level, not certificates." },
                { title: "Vault Staking", icon: <Lock />, desc: "100% solvency. Funds are secured before you start." }
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

      {/* Roadmap Section */}
      <section id="roadmap" className="py-24 lg:py-48 bg-white relative overflow-hidden px-4 sm:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-20 lg:mb-32 space-y-4">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter italic uppercase leading-none">
              The <span className="text-primary">Execution</span> Path
            </h2>
            <p className="text-foreground/40 font-black text-[10px] sm:text-[11px] uppercase tracking-[0.4em] lg:tracking-[0.5em] italic max-w-2xl mx-auto leading-relaxed">
              Risk-based tasking ensures trust and quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 lg:gap-y-24 gap-x-12 max-w-6xl mx-auto">
            {[
              { icon: <CheckCircle2 className="w-10 h-10" />, title: <><b>Low-Risk</b> Tasks</>, desc: "Data entry, scheduling, basic Canva. Ideal for freshers to build their first artifact proof." },
              { icon: <Layers className="w-10 h-10" />, title: <><b>Medium-Risk</b> Tasks</>, desc: "SEO, Content, Ad Monitoring. Supervised execution where freshers work under experienced nodes." },
              { icon: <Zap className="w-10 h-10" />, title: <><b>High-Risk</b> Tasks</>, desc: "Gateway setup, App deployment. Exclusive to verified, high-reputation executioners." },
              { icon: <Terminal className="w-10 h-10" />, title: <><b>Fresher</b> Pathway</>, desc: "Complete 8-10 low-risk tasks to unlock independent status. Proof-based meritocracy." },
              { icon: <Lock className="w-10 h-10" />, title: <><b>Vault</b> Integrity</>, desc: "100% solvency guaranteed. Task budgets are staked before work assignment." },
              { icon: <RefreshCw className="w-10 h-10" />, title: <><b>No</b> Lock-ins</>, desc: "Task-based freedom. Earn honestly without long-term corporate dependency." }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-6 group">
                <div className="w-20 h-20 rounded-2xl bg-accent/50 flex items-center justify-center text-primary shadow-inner group-hover:scale-110 transition-transform duration-500">
                  {feature.icon}
                </div>
                <div className="space-y-3">
                   <h3 className="text-xl sm:text-2xl font-black tracking-tight uppercase italic leading-none text-foreground">{feature.title}</h3>
                   <p className="text-foreground/60 text-sm sm:text-base font-bold leading-relaxed italic max-w-xs mx-auto">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Nodes Section */}
      <section id="who-is-for" className="py-24 lg:py-48 bg-[#0A0A0B] relative overflow-hidden px-4 sm:px-8">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20 lg:mb-32 space-y-4">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter italic uppercase text-white leading-none">
              <span className="text-primary">Who</span> Is CarryonWORK For?
            </h2>
            <p className="text-white/40 font-black text-[10px] uppercase tracking-[0.5em] italic">The People We Serve</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {[
              { title: "Trapped Professionals", icon: <Briefcase className="w-8 h-8 text-primary" />, desc: "Mentally exhausted in toxic cultures. EMI dependency makes quitting terrifying. We provide your exit protocol." },
              { title: "Skilled but Unemployed", icon: <RefreshCw className="w-8 h-8 text-primary" />, desc: "Stuck in the 'no experience, no job' loop. We provide the proof-tasks to break the cycle." },
              { title: "Skilled but Degree-Less", icon: <SquareTerminal className="w-8 h-8 text-primary" />, desc: "Filtered out by HR systems prioritizing platforms over performance. Your artifacts are your degree here." },
              { title: "Social-Dignity Trapped", icon: <ShieldCheck className="w-8 h-8 text-primary" />, desc: "Capable individuals fearing social judgment of offline 'small' work. Digital work with dignity." },
              { title: "Talent Agencies", icon: <Users className="w-8 h-8 text-primary" />, desc: "Agencies looking to scale their execution force with verified, task-ready talent." },
              { title: "Indie Hackers", icon: <Zap className="w-8 h-8 text-primary" />, desc: "Builders who need specific artifacts delivered without the overhead of full-time hiring." }
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

      {/* Meet Our Founder Section */}
      <section className="py-24 lg:py-48 bg-white overflow-hidden px-4 sm:px-8 border-b">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-32 items-center max-w-7xl mx-auto">
            <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] animate-mesh-drift blur-3xl -z-10" />
              <div className="relative w-full max-w-[500px] aspect-[4/5] rounded-[3rem] lg:rounded-[5rem] overflow-hidden shadow-2xl border-... group">
                {founderImg && (
                  <Image src="/Rahul.png" alt={founderImg.description} fill className="object-cover group-hover:scale-105 transition-transform duration-1000" data-ai-hint={founderImg.imageHint} />
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
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/15 border-none px-6 py-2 rounded-full font-black text-[10px] uppercase tracking-widest italic w-fit">THE VISIONARY</Badge>
                  <h2 className="text-4xl lg:text-7xl font-black tracking-tighter italic uppercase leading-[0.9] lg:leading-[0.85]">Lived Reality, <br/>Not a <br/><span className="text-primary">Trend.</span></h2>
                </div>
                
                <div className="space-y-8 text-base sm:text-lg lg:text-xl font-bold text-foreground/70 italic leading-relaxed">
                  <div className="relative pl-8 border-l-4 border-primary/20">
                    <Quote className="absolute -left-3 -top-2 w-8 h-8 text-primary/10 fill-primary/5" />
                    <p className="text-foreground text-xl lg:text-2xl font-black tracking-tight leading-tight uppercase italic mb-6">
                      "On 24 Dec 2025, I walked away. I didn&apos;t celebrate. I thought: EMI kaise jayegi?"
                    </p>
                  </div>
                  <p>Born in Dankaur, Rahul Rajput knows what it feels like to be trapped in a toxic job because career risks are financially impossible. From starting at ₹10,000 to managing a full-time job alongside MBA assessments, he has seen the system from the bottom.</p>
                  <p className="text-foreground"><b>CarryonWORK</b> exists so fewer people have to sit silently at night, wondering how the next EMI will be paid despite being capable and skilled. It is a system built for those who choose clarity over comfort.</p>
                </div>
              </div>

              <div className="p-10 rounded-[3rem] bg-[#0A0A0B] text-white shadow-3xl shadow-black/10 space-y-8 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity"><Users className="w-32 h-32" /></div>
                 <div className="space-y-2 relative z-10">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary italic">The Trust Mesh</p>
                    <h4 className="text-4xl lg:text-5xl font-black italic uppercase tracking-tighter leading-none">16.3 Million <br/>Followers.</h4>
                 </div>
                 <div className="flex flex-wrap gap-6 relative z-10">
                    {[Youtube, Instagram, Linkedin, Music, Twitter, Mail].map((Icon, i) => (
                      <Link key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-primary hover:bg-white/10 hover:border-primary/20 transition-all duration-500">
                        <Icon className="w-5 h-5" />
                      </Link>
                    ))}
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-48 bg-white px-4 sm:px-8 relative overflow-hidden border-t">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-32 max-w-7xl mx-auto">
            <div className="space-y-8">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-6 py-2 rounded-full font-black text-[10px] uppercase tracking-widest italic">RESOLVING UNCERTAINTY</Badge>
              <h2 className="text-5xl lg:text-8xl font-black tracking-tighter italic uppercase leading-[0.85]">
                Frequently <br/>
                Asked <span className="text-primary">Questions.</span>
              </h2>
              <div className="pt-8 hidden lg:block">
                <div className="w-24 h-24 rounded-[2rem] bg-accent/50 flex items-center justify-center text-primary shadow-inner">
                  <HelpCircle className="w-12 h-12" />
                </div>
              </div>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {FAQ_DATA.map((item, i) => (
                <AccordionItem 
                  key={i} 
                  value={`item-${i}`} 
                  className="premium-card border-none shadow-sm bg-[#F8F9FA] px-6 sm:px-10 py-2 sm:py-4 data-[state=open]:bg-white data-[state=open]:shadow-2xl transition-all duration-700"
                >
                  <AccordionTrigger className="hover:no-underline py-6">
                    <div className="flex items-center gap-6 text-left">
                      <div className="w-10 h-10 rounded-xl bg-white border shadow-sm flex items-center justify-center text-primary group-hover:scale-110 transition-transform shrink-0">
                        {item.icon}
                      </div>
                      <span className="text-lg sm:text-xl font-black tracking-tight italic uppercase">{item.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-8 pt-2 pl-16">
                    <p className="text-base sm:text-lg font-bold text-muted-foreground/80 leading-relaxed italic border-l-4 border-primary/20 pl-6">
                      {item.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Premium Protocol Footer */}
      <footer className="py-16 lg:py-32 bg-[#0A0A0B] text-white px-4 sm:px-8 relative overflow-hidden border-t border-white/5">
        <div className="container mx-auto relative z-10 flex flex-col gap-16 lg:gap-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-12 lg:gap-12">
            <div className="sm:col-span-2 lg:col-span-4 space-y-8 lg:space-y-12">
              <div className="space-y-6 lg:space-y-8">
                <Link href="/" className="group block"><Logo variant="light" className="w-auto" /></Link>
                <p className="text-white/40 font-bold text-xs sm:text-sm italic leading-relaxed max-w-xs">The world&apos;s first artifact-based execution protocol. Designed for high-velocity outcomes.</p>
              </div>
              <div className="flex items-center gap-6 lg:gap-8">
                <Link href="#" className="text-white/40 hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></Link>
                <Link href="#" className="text-white/40 hover:text-primary transition-colors"><Github className="w-5 h-5" /></Link>
                <Link href="#" className="text-white/40 hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></Link>
              </div>
            </div>
            <div className="space-y-6 lg:space-y-8 lg:col-span-2">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary italic">Company</h4>
              <nav className="flex flex-col gap-3 sm:gap-4 text-[11px] sm:text-sm font-black text-white/40 uppercase tracking-widest italic">
                <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
                <Link href="/careers" className="hover:text-white transition-colors">Careers</Link>
              </nav>
            </div>
            <div className="space-y-6 lg:space-y-8 lg:col-span-3">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary italic">Resources</h4>
              <nav className="flex flex-col gap-3 sm:gap-4 text-[11px] sm:text-sm font-black text-white/40 uppercase tracking-widest italic">
                <Link href="/blogs" className="hover:text-white transition-colors">Blogs</Link>
                <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
              </nav>
            </div>
            <div className="space-y-6 lg:space-y-8 lg:col-span-3">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary italic">Legal</h4>
              <nav className="flex flex-col gap-3 sm:gap-4 text-[11px] sm:text-sm font-black text-white/40 uppercase tracking-widest italic">
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              </nav>
            </div>
          </div>
          <div className="pt-8 sm:pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 lg:gap-8 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4 px-6 py-3 bg-white/5 rounded-full border border-white/10 shadow-inner w-full sm:w-auto">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,1)]" />
              <p className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.1em] sm:tracking-[0.2em] text-white/60">Node Status: Global v3.4 Active (Latency: 14ms)</p>
            </div>
            <p className="text-white/20 font-black text-[9px] sm:text-[10px] lg:text-[11px] uppercase tracking-[0.3em] lg:tracking-[0.5em] text-center md:text-right italic">© 2026 Carryon Network Foundation • Mission Critical Execution</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
