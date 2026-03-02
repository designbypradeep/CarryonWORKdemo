"use client"

import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { 
  LayoutDashboard, 
  PlusCircle, 
  CheckSquare, 
  Wallet, 
  Star,
  Users,
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAppContext } from '@/context/AppContext';
import Link from 'next/link';

const SIDEBAR_ITEMS = [
  { title: 'Dashboard', href: '/hirer/dashboard', icon: <LayoutDashboard /> },
  { title: 'Post Task', href: '/hirer/post-task', icon: <PlusCircle /> },
  { title: 'My Tasks', href: '/hirer/tasks', icon: <CheckSquare /> },
  { title: 'Payments', href: '/hirer/payments', icon: <Wallet /> },
  { title: 'Ratings', href: '/hirer/ratings', icon: <Star /> },
];

export default function HirerDashboard() {
  const { currentUser } = useAppContext();

  return (
    <DashboardLayout role="hirer" sidebarItems={SIDEBAR_ITEMS}>
      <div className="flex flex-col gap-6 lg:gap-8 max-w-7xl mx-auto">
        
        {/* Profile Protocol Card */}
        <Card className="premium-card border-none shadow-sm bg-white overflow-hidden">
          <CardContent className="p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
              <Avatar className="w-20 h-20 sm:w-24 sm:h-24 border-4 border-primary/10 shadow-xl">
                <AvatarImage src={`https://picsum.photos/seed/${currentUser?.id || 'client'}/200`} />
                <AvatarFallback className="bg-primary text-white text-2xl sm:text-3xl font-black italic">{currentUser?.name?.[0] || 'C'}</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h1 className="text-2xl sm:text-3xl font-black tracking-tighter italic uppercase text-foreground">{currentUser?.name || 'Renuka Rawat'}</h1>
                <p className="text-xs sm:text-sm font-bold text-muted-foreground uppercase tracking-wider">Manage your jobs and hire the best talent</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Badge className="bg-primary/10 text-primary hover:bg-primary/15 border-none px-6 py-2 rounded-full font-black text-[10px] sm:text-[11px] uppercase tracking-widest italic">
                CLIENT
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Profile Completion Banner */}
        <Card className="premium-card border-none shadow-sm bg-accent/30 border border-primary/10">
          <CardContent className="p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="space-y-4 flex-1 w-full">
              <div className="space-y-1 text-center lg:text-left">
                <h3 className="text-lg sm:text-xl font-black tracking-tighter italic uppercase">Complete your profile</h3>
                <p className="text-xs sm:text-sm font-bold text-muted-foreground/60">50% completed</p>
              </div>
              <div className="w-full lg:max-w-md mx-auto lg:mx-0">
                <Progress value={50} className="h-1.5 bg-white shadow-inner" />
              </div>
            </div>
            <Button className="w-full lg:w-auto h-12 sm:h-14 px-10 rounded-xl sm:rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg shadow-primary/20 btn-premium italic shrink-0">
              Complete Now
            </Button>
          </CardContent>
        </Card>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-6">
          <Link href="/hirer/post-task" className="h-full">
            <Card className="premium-card border-none shadow-sm bg-white hover:bg-accent/5 transition-all cursor-pointer group h-full">
              <CardContent className="p-6 sm:p-8 space-y-2">
                <h4 className="text-lg sm:text-xl font-black tracking-tighter italic uppercase group-hover:text-primary transition-colors">Post Task</h4>
                <p className="text-[10px] sm:text-xs font-bold text-muted-foreground uppercase tracking-wider">Create a new task</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/hirer/tasks" className="h-full">
            <Card className="premium-card border-none shadow-sm bg-white hover:bg-accent/5 transition-all cursor-pointer group h-full">
              <CardContent className="p-6 sm:p-8 space-y-2">
                <h4 className="text-lg sm:text-xl font-black tracking-tighter italic uppercase group-hover:text-primary transition-colors">Tasks</h4>
                <p className="text-[10px] sm:text-xs font-bold text-muted-foreground uppercase tracking-wider">Manage your posted tasks</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/hirer/tasks" className="h-full">
            <Card className="premium-card border-none shadow-sm bg-white hover:bg-accent/5 transition-all cursor-pointer group h-full">
              <CardContent className="p-6 sm:p-8 space-y-2">
                <h4 className="text-lg sm:text-xl font-black tracking-tighter italic uppercase group-hover:text-primary transition-colors">Requests</h4>
                <p className="text-[10px] sm:text-xs font-bold text-muted-foreground uppercase tracking-wider">View freelancer applications</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/hirer/tasks" className="h-full">
            <Card className="premium-card border-none shadow-sm bg-white hover:bg-accent/5 transition-all cursor-pointer group h-full">
              <CardContent className="p-6 sm:p-8 space-y-2">
                <h4 className="text-lg sm:text-xl font-black tracking-tighter italic uppercase group-hover:text-primary transition-colors">Your Tasks</h4>
                <p className="text-[10px] sm:text-xs font-bold text-muted-foreground uppercase tracking-wider">Ongoing hired work</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/admin/workers" className="h-full sm:col-span-2 lg:col-span-1">
            <Card className="premium-card border-none shadow-sm bg-white hover:bg-accent/5 transition-all cursor-pointer group h-full">
              <CardContent className="p-6 sm:p-8 space-y-2">
                <h4 className="text-lg sm:text-xl font-black tracking-tighter italic uppercase group-hover:text-primary transition-colors">Freelancers</h4>
                <p className="text-[10px] sm:text-xs font-bold text-muted-foreground uppercase tracking-wider">View available freelancers</p>
              </CardContent>
            </Card>
          </Link>
        </div>

      </div>
    </DashboardLayout>
  );
}
