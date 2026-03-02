
"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { 
  LayoutDashboard, 
  CheckSquare, 
  Wallet, 
  Star, 
  User, 
  Search,
  MessageSquare,
  Bell,
  CheckCircle2,
  Settings,
  ArrowRight,
  UserCheck
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Switch } from '@/components/ui/switch';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAppContext } from '@/context/AppContext';

const SIDEBAR_ITEMS = [
  { title: 'Overview', href: '/worker/dashboard', icon: <LayoutDashboard /> },
  { title: 'My Tasks', href: '/worker/tasks', icon: <CheckSquare /> },
  { title: 'Earnings', href: '/worker/earnings', icon: <Wallet /> },
  { title: 'Reputation', href: '/worker/reputation', icon: <Star /> },
  { title: 'Profile', href: '/worker/profile', icon: <User /> },
];

export default function WorkerDashboard() {
  const { tasks, currentUser } = useAppContext();
  const [isAvailable, setIsAvailable] = useState(true);
  
  const workerTasks = tasks.filter(t => t.workerId === currentUser?.id);
  const activeTasksCount = workerTasks.filter(t => ['assigned', 'in-progress', 'submitted'].includes(t.status)).length;
  
  const stats = [
    { label: "Trust Score", value: currentUser?.reputation || 72, progress: 72 },
    { label: "Active Jobs", value: activeTasksCount, progress: 0 },
    { label: "Completion Rate", value: "90%", progress: 90 },
  ];

  return (
    <DashboardLayout role="worker" sidebarItems={SIDEBAR_ITEMS}>
      <div className="flex flex-col gap-6 max-w-7xl mx-auto">
        
        {/* Profile Header Card */}
        <Card className="premium-card border-none shadow-sm bg-white overflow-hidden">
          <CardContent className="p-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <Avatar className="w-24 h-24 border-4 border-primary/10 shadow-xl">
                <AvatarImage src={`https://picsum.photos/seed/${currentUser?.id}/200`} />
                <AvatarFallback className="bg-primary text-white text-3xl font-black italic">{currentUser?.name?.[0]}</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h1 className="text-3xl font-black tracking-tighter italic uppercase text-foreground">{currentUser?.name || 'Rahul Sachdeva'}</h1>
                <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Find work, apply to jobs and grow your career</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 bg-accent/20 p-4 rounded-[2rem] border border-border/40">
              <div className="flex items-center gap-3 px-2">
                <span className={`text-[10px] font-black uppercase tracking-widest ${isAvailable ? 'text-green-600' : 'text-muted-foreground'}`}>
                  {isAvailable ? 'Available Now' : 'Busy'}
                </span>
                <Switch 
                  checked={isAvailable} 
                  onCheckedChange={setIsAvailable}
                  className="data-[state=checked]:bg-green-500"
                />
              </div>
              <div className="h-6 w-px bg-border/60 mx-2" />
              <Badge className="bg-primary/10 text-primary hover:bg-primary/15 border-none px-4 py-1.5 rounded-full font-black text-[10px] uppercase tracking-widest italic">
                FREELANCER
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <Card key={i} className="premium-card border-none shadow-sm bg-white hover:scale-[1.02] transition-transform duration-500">
              <CardContent className="p-8 space-y-4">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/40 italic">{stat.label}</p>
                <div className="space-y-6">
                  <h3 className="text-4xl font-black tracking-tighter italic uppercase">{stat.value}</h3>
                  {stat.progress > 0 && (
                    <div className="space-y-2">
                      <Progress value={stat.progress} className="h-1.5 bg-accent/30" />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Profile Completion Banner */}
        <Card className="premium-card border-none shadow-sm bg-orange-50/50 border border-orange-100/50">
          <CardContent className="p-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 flex-1 w-full">
              <div className="space-y-1">
                <h3 className="text-xl font-black tracking-tighter italic uppercase">Complete your profile</h3>
                <p className="text-sm font-bold text-muted-foreground/60">33% completed</p>
              </div>
              <div className="max-w-md">
                <Progress value={33} className="h-1.5 bg-white shadow-inner" />
              </div>
            </div>
            <Button className="h-14 px-10 rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg shadow-primary/20 btn-premium italic shrink-0">
              Complete Now
            </Button>
          </CardContent>
        </Card>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Browse Tasks", desc: "Find new work opportunities", icon: <Search /> },
            { title: "Requests", desc: "Track applied jobs", icon: <MessageSquare /> },
            { title: "Skills Profile", desc: "Update your profile details", icon: <Settings /> },
            { title: "Your Tasks", desc: "Ongoing hired tasks", icon: <CheckSquare /> }
          ].map((action, i) => (
            <Card key={i} className="premium-card border-none shadow-sm bg-white hover:bg-accent/5 transition-all cursor-pointer group">
              <CardContent className="p-8 space-y-2">
                <h4 className="text-xl font-black tracking-tighter italic uppercase group-hover:text-primary transition-colors">{action.title}</h4>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{action.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </DashboardLayout>
  );
}
