"use client"

import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { 
  LayoutDashboard, 
  CheckSquare, 
  Wallet, 
  Star, 
  User,
  Award,
  TrendingUp,
  ShieldCheck,
  Flame,
  Zap,
  Target,
  ArrowUpRight
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useAppContext } from '@/context/AppContext';
import { Badge } from '@/components/ui/badge';

const SIDEBAR_ITEMS = [
  { title: 'Overview', href: '/worker/dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
  { title: 'My Tasks', href: '/worker/tasks', icon: <CheckSquare className="w-5 h-5" /> },
  { title: 'Earnings', href: '/worker/earnings', icon: <Wallet className="w-5 h-5" /> },
  { title: 'Reputation', href: '/worker/reputation', icon: <Star className="w-5 h-5" /> },
  { title: 'Profile', href: '/worker/profile', icon: <User className="w-5 h-5" /> },
];

export default function WorkerReputationPage() {
  const { currentUser } = useAppContext();
  const reputation = currentUser?.reputation || 0;

  return (
    <DashboardLayout role="worker" sidebarItems={SIDEBAR_ITEMS}>
      <div className="flex flex-col gap-12">
        <div>
          <h1 className="text-4xl lg:text-5xl font-black tracking-tighter mb-2 italic uppercase">Execution Identity</h1>
          <p className="text-[10px] sm:text-xs font-black text-muted-foreground uppercase tracking-[0.3em] italic">The Progression Matrix: Your Proof of Node</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Rank Card - WebVeda Progress Style */}
          <Card className="lg:col-span-1 border-none bg-[#0A0A0B] text-white relative overflow-hidden rounded-[3rem] shadow-3xl">
            <div className="absolute top-0 right-0 p-12 opacity-10"><Award className="w-48 h-48 text-primary" /></div>
            <CardHeader className="text-center pt-16 pb-12 relative z-10">
              <div className="inline-flex items-center gap-3 bg-primary text-white px-6 py-2 rounded-full font-black text-[10px] uppercase tracking-widest mb-8">
                <Flame className="w-4 h-4 animate-pulse" /> Tier 2 Executioner
              </div>
              <CardTitle className="text-5xl font-black italic uppercase tracking-tighter">Elite <br/>Architect</CardTitle>
              <CardDescription className="text-primary font-black uppercase tracking-[0.3em] mt-4 italic">Top 5% Execution Node</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-10 pb-16 px-10 relative z-10">
              <div className="w-full space-y-4">
                <div className="flex justify-between text-[11px] font-black uppercase tracking-widest text-white/40">
                  <span>Current Mastery</span>
                  <span>{reputation}%</span>
                </div>
                <Progress value={reputation} className="h-2 bg-white/10" />
                <div className="flex items-center justify-between pt-4">
                   <p className="text-[9px] font-black text-white/30 uppercase tracking-[0.2em] italic">
                    Level Up in {100 - reputation} Points
                   </p>
                   <ArrowUpRight className="text-primary w-4 h-4" />
                </div>
              </div>
              
              <div className="w-full pt-8 border-t border-white/10 grid grid-cols-2 gap-4">
                 <div className="text-center p-4 bg-white/5 rounded-2xl">
                    <p className="text-2xl font-black italic">12</p>
                    <p className="text-[8px] uppercase tracking-widest opacity-40">Artifacts</p>
                 </div>
                 <div className="text-center p-4 bg-white/5 rounded-2xl">
                    <p className="text-2xl font-black italic">100%</p>
                    <p className="text-[8px] uppercase tracking-widest opacity-40">Solvency</p>
                 </div>
              </div>
            </CardContent>
          </Card>

          <div className="lg:col-span-2 space-y-8">
            {/* Performance Mesh */}
            <Card className="premium-card border-none shadow-sm overflow-hidden">
              <CardHeader className="p-10 border-b border-border/40">
                <CardTitle className="text-2xl font-black tracking-tighter italic uppercase">Competency Mesh</CardTitle>
                <CardDescription className="text-[10px] font-black text-muted-foreground/40 uppercase tracking-widest mt-2">Verified Real-Time Metrics</CardDescription>
              </CardHeader>
              <CardContent className="grid sm:grid-cols-2 gap-12 p-10">
                <div className="space-y-8">
                  {[
                    { label: "Architecture", value: 100, color: "bg-primary" },
                    { label: "Systems Logic", value: 94, color: "bg-blue-500" }
                  ].map((skill, i) => (
                    <div key={i} className="space-y-4">
                      <div className="flex justify-between items-end">
                        <span className="font-black tracking-tighter text-lg italic uppercase">{skill.label}</span>
                        <span className="text-xs font-black text-muted-foreground">{skill.value}%</span>
                      </div>
                      <Progress value={skill.value} className="h-1.5" />
                    </div>
                  ))}
                </div>
                <div className="space-y-8">
                  {[
                    { label: "Review Sentiment", value: 98, color: "bg-green-500" },
                    { label: "Node Sync Rate", value: 85, color: "bg-orange-500" }
                  ].map((skill, i) => (
                    <div key={i} className="space-y-4">
                      <div className="flex justify-between items-end">
                        <span className="font-black tracking-tighter text-lg italic uppercase">{skill.label}</span>
                        <span className="text-xs font-black text-muted-foreground">{skill.value}%</span>
                      </div>
                      <Progress value={skill.value} className="h-1.5" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievement Node Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { title: "Zero Disputes", icon: <ShieldCheck className="w-6 h-6" />, color: "text-green-500", desc: "Clean Ledger" },
                { title: "Streak Master", icon: <TrendingUp className="w-6 h-6" />, color: "text-blue-500", desc: "12 Sequential Syncs" },
                { title: "Verified Node", icon: <Target className="w-6 h-6" />, color: "text-primary", desc: "Protocol Authorized" }
              ].map((badge, i) => (
                <Card key={i} className="premium-card p-8 flex flex-col items-center text-center gap-4 hover:scale-105 transition-transform cursor-default">
                  <div className={`${badge.color} bg-accent/30 p-4 rounded-[1.25rem] shadow-inner`}>
                    {badge.icon}
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-widest block">{badge.title}</span>
                    <span className="text-[8px] font-bold text-muted-foreground uppercase tracking-[0.2em] italic">{badge.desc}</span>
                  </div>
                </Card>
              ))}
            </div>

            {/* Career Outcome Alert - WebVeda Style */}
            <div className="p-10 rounded-[2.5rem] bg-primary text-white shadow-3xl shadow-primary/20 flex flex-col sm:flex-row items-center justify-between gap-8 group cursor-pointer overflow-hidden relative">
               <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
               <div className="space-y-4 relative z-10">
                  <h3 className="text-3xl font-black italic uppercase tracking-tighter leading-none">Unlock High-Risk Nodes.</h3>
                  <p className="text-sm font-bold text-white/60 italic uppercase tracking-wider">Earn ₹1,50,000+ per artifact by reaching Tier 3.</p>
               </div>
               <Button className="w-full sm:w-auto h-14 px-8 rounded-2xl bg-white text-primary hover:bg-white/90 font-black text-[10px] uppercase tracking-widest italic shadow-xl relative z-10">
                Final Protocol <Zap className="w-4 h-4 ml-2 fill-primary" />
               </Button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
