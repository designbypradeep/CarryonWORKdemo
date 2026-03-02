"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Logo } from '@/components/ui/logo';
import { useAppContext } from '@/context/AppContext';
import { UserRole } from '@/lib/types';
import { ShieldCheck, Sparkles, Fingerprint, ArrowRight } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<UserRole>('worker');
  const router = useRouter();
  const { login } = useAppContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, role);
    router.push(`/${role}/dashboard`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-8 bg-black relative overflow-hidden mesh-gradient-dark animate-mesh-drift">
      {/* Cinematic Ambient Elements */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.06] invert pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-[1000px] h-[1000px] bg-primary/15 rounded-full blur-[180px] animate-pulse-soft" />
      
      <Card className="w-full max-w-2xl border border-white/10 shadow-[0_80px_160px_-40px_rgba(0,0,0,0.8)] rounded-[3rem] lg:rounded-[5rem] bg-black/40 backdrop-blur-3xl relative z-10 p-6 sm:p-14 animate-reveal">
        <CardHeader className="space-y-6 lg:space-y-10 text-center pt-4 lg:pt-6">
          <div className="flex justify-center">
             <Link href="/" className="group">
              <Logo variant="light" className="w-56 lg:w-72" />
            </Link>
          </div>
          <div className="space-y-2 lg:space-y-4">
            <CardTitle className="text-4xl lg:text-7xl font-black tracking-tighter text-white italic leading-[0.85]">Identity <br/>Access.</CardTitle>
            <CardDescription className="text-base lg:text-xl font-bold text-white/50 max-w-sm mx-auto leading-relaxed">
              Authenticate your presence on the CarryonWORK Execution Network.
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-12 lg:space-y-16 px-2 lg:px-8 pt-6 lg:pt-6">
          <div className="space-y-4 lg:space-y-8">
            <div className="flex items-center justify-center gap-3 lg:gap-4 text-[9px] lg:text-[10px] font-black uppercase tracking-[0.5em] lg:tracking-[0.6em] text-white/40">
               <Fingerprint className="w-4 h-4 lg:w-5 lg:h-5 text-primary" /> Security Authorization Level
            </div>
            <Tabs defaultValue="worker" className="w-full" onValueChange={(v) => setRole(v as UserRole)}>
              <TabsList className="grid w-full grid-cols-3 h-16 lg:h-24 bg-white/5 p-2 lg:p-3 rounded-[2rem] lg:rounded-[2.5rem] border border-white/10">
                <TabsTrigger value="worker" className="rounded-2xl lg:rounded-[1.75rem] font-black text-[10px] lg:text-xs uppercase tracking-widest data-[state=active]:bg-primary data-[state=active]:text-white transition-all duration-700">Worker</TabsTrigger>
                <TabsTrigger value="hirer" className="rounded-2xl lg:rounded-[1.75rem] font-black text-[10px] lg:text-xs uppercase tracking-widest data-[state=active]:bg-primary data-[state=active]:text-white transition-all duration-700">Hirer</TabsTrigger>
                <TabsTrigger value="admin" className="rounded-2xl lg:rounded-[1.75rem] font-black text-[10px] lg:text-xs uppercase tracking-widest data-[state=active]:bg-primary data-[state=active]:text-white transition-all duration-700">Admin</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8 lg:space-y-12">
            <div className="space-y-6 lg:space-y-10">
              <div className="space-y-3 lg:space-y-4">
                <Label htmlFor="email" className="font-black text-[10px] lg:text-[11px] uppercase tracking-[0.4em] text-white/60 ml-4 lg:ml-6 leading-none">Protocol Identifier</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="agent.id@carryon.work" 
                  required 
                  className="h-16 lg:h-24 px-6 lg:px-10 rounded-[2rem] lg:rounded-[3rem] bg-white/5 border border-white/10 focus-visible:ring-primary/40 font-bold text-lg lg:text-2xl transition-all duration-500 text-white placeholder:text-white/20 shadow-inner"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-3 lg:space-y-4">
                <div className="flex items-center justify-between ml-4 lg:ml-6">
                  <Label htmlFor="password" title="password123" className="font-black text-[10px] lg:text-[11px] uppercase tracking-[0.4em] text-white/60 leading-none">Secret Key</Label>
                  <Link href="#" className="text-[10px] lg:text-xs font-black text-primary hover:underline uppercase tracking-widest pr-4 lg:pr-6 italic">Recover</Link>
                </div>
                <Input 
                  id="password" 
                  type="password" 
                  required 
                  defaultValue="password123" 
                  className="h-16 lg:h-24 px-6 lg:px-10 rounded-[2rem] lg:rounded-[3rem] bg-white/5 border border-white/10 focus-visible:ring-primary/40 font-bold text-lg lg:text-2xl transition-all duration-500 text-white placeholder:text-white/20 shadow-inner"
                />
              </div>
            </div>
            <Button type="submit" className="w-full h-16 lg:h-24 rounded-[2rem] lg:rounded-[3rem] text-xl lg:text-3xl font-black shadow-[0_40px_80px_-20px_rgba(255,100,0,0.5)] btn-premium flex items-center justify-center gap-4 lg:gap-6 group italic">
              Access Network <ArrowRight className="w-6 h-6 lg:w-8 lg:h-8 group-hover:translate-x-4 transition-transform duration-500" />
            </Button>
          </form>
        </CardContent>

        <CardFooter className="flex flex-col gap-8 lg:gap-12 pb-6 lg:pb-12 pt-8">
          <div className="relative w-full px-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-white/10" />
            </div>
            <div className="relative flex justify-center text-[9px] lg:text-[11px] font-black uppercase tracking-[0.5em] text-white/20">
              <span className="bg-[#0A0A0B] px-8 italic">Node Verification</span>
            </div>
          </div>
          <div className="text-sm lg:text-xl text-center font-bold text-white/40">
            Outside the protocol?{' '}
            <Link href="/auth/signup" className="text-primary hover:underline font-black uppercase tracking-[0.2em] text-xs lg:text-lg ml-2 lg:ml-4 italic leading-none">
              Register Node
            </Link>
          </div>
        </CardFooter>
      </Card>
      
      {/* Floating Decorative Elements */}
      <div className="absolute top-10 right-10 lg:top-24 lg:right-24 animate-float opacity-30 lg:opacity-40 pointer-events-none">
        <Sparkles className="w-12 h-12 lg:w-20 lg:h-20 text-primary/40" />
      </div>
      <div className="absolute bottom-10 left-10 lg:bottom-24 lg:left-24 animate-float delay-2 opacity-30 lg:opacity-40 pointer-events-none">
        <ShieldCheck className="w-10 h-10 lg:w-16 lg:h-16 text-primary/40" />
      </div>
    </div>
  );
}
