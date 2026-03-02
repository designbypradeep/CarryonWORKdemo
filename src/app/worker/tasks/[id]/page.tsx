
"use client"

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Clock, 
  FileCode, 
  History, 
  IndianRupee, 
  ShieldCheck, 
  Upload, 
  Zap,
  LayoutDashboard,
  CheckSquare,
  Wallet,
  Star,
  User
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useAppContext } from '@/context/AppContext';
import { useToast } from '@/hooks/use-toast';

const SIDEBAR_ITEMS = [
  { title: 'Overview', href: '/worker/dashboard', icon: <LayoutDashboard /> },
  { title: 'My Tasks', href: '/worker/tasks', icon: <CheckSquare /> },
  { title: 'Earnings', href: '/worker/earnings', icon: <Wallet /> },
  { title: 'Reputation', href: '/worker/reputation', icon: <Star /> },
  { title: 'Profile', href: '/worker/profile', icon: <User /> },
];

export default function WorkerTaskExecutionPage() {
  const { id } = useParams();
  const router = useRouter();
  const { tasks, updateTaskStatus, addArtifact, currentUser } = useAppContext();
  const { toast } = useToast();
  
  const task = tasks.find(t => t.id === id);
  const [isUploading, setIsUploading] = useState(false);

  if (!task) return <div>Task not found</div>;

  const handleUpload = () => {
    setIsUploading(true);
    setTimeout(() => {
      addArtifact(task.id, {
        name: `Artifact_v1_${new Date().getTime()}.zip`,
        type: 'file',
        url: '#',
        submittedBy: currentUser?.id || 'unknown'
      });
      setIsUploading(false);
      toast({ title: "Artifact Submitted", description: "File successfully added to the task vault." });
    }, 1500);
  };

  const handleSubmitFinal = () => {
    updateTaskStatus(task.id, 'submitted');
    toast({ title: "Work Submitted", description: "Protocol moving to audit phase." });
  };

  return (
    <DashboardLayout role="worker" sidebarItems={SIDEBAR_ITEMS}>
      <div className="flex flex-col gap-8 max-w-[1400px] mx-auto">
        <div className="flex items-center gap-6">
          <Button variant="ghost" size="icon" className="rounded-full bg-white shadow-sm" onClick={() => router.back()}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-black tracking-tighter italic uppercase">{task.title}</h1>
            <div className="flex items-center gap-3 mt-1">
              <Badge variant="outline" className="text-[10px] uppercase tracking-widest bg-primary/5 text-primary border-primary/20">NODE: {task.id}</Badge>
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Execution Mode: Active</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Execution Column */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="premium-card border-none shadow-2xl overflow-hidden bg-[#0A0A0B] text-white">
              <CardHeader className="p-8 lg:p-12 border-b border-white/5">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-xl font-black tracking-tighter uppercase italic">Artifact Vault</CardTitle>
                  <Button variant="outline" className="border-white/10 hover:bg-white/5 text-white h-10 px-6 rounded-xl font-black text-[10px] uppercase tracking-widest" onClick={handleUpload} disabled={isUploading}>
                    <Upload className="w-4 h-4 mr-2" /> {isUploading ? "Syncing..." : "Submit Artifact"}
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-8 lg:p-12 space-y-8">
                {task.artifacts.length > 0 ? task.artifacts.map((art, i) => (
                  <div key={art.id} className="flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/40 transition-all group">
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <FileCode className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-bold text-lg">{art.name}</p>
                        <p className="text-[10px] uppercase tracking-widest text-white/30">Synced: {art.timestamp}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="border-white/10 text-white/40">Verified</Badge>
                  </div>
                )) : (
                  <div className="py-20 text-center text-white/20 font-black uppercase tracking-[0.3em] italic">No artifacts uploaded.</div>
                )}

                {task.status === 'in-progress' && (
                  <Button className="w-full h-16 rounded-2xl bg-primary text-white font-black text-sm uppercase tracking-[0.2em] shadow-3xl shadow-primary/20 hover:scale-[1.01] transition-all" onClick={handleSubmitFinal}>
                    <Zap className="w-5 h-5 mr-2" /> Trigger Final Audit
                  </Button>
                )}
              </CardContent>
            </Card>

            <Card className="premium-card border-none shadow-lg">
              <CardHeader className="p-8 lg:p-10">
                <CardTitle className="text-xl font-black tracking-tighter uppercase italic">Execution Timeline</CardTitle>
              </CardHeader>
              <CardContent className="px-8 lg:px-10 pb-12 space-y-10 relative">
                <div className="absolute left-[47px] top-10 bottom-24 w-px bg-border/40" />
                {task.timeline.map((event, i) => (
                  <div key={event.id} className="flex gap-8 relative z-10 group">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-xl transition-all ${i === task.timeline.length - 1 ? 'bg-primary text-white scale-125' : 'bg-white border text-muted-foreground'}`}>
                      {i === task.timeline.length - 1 ? <Zap className="w-5 h-5" /> : <CheckCircle2 className="w-5 h-5" />}
                    </div>
                    <div className="flex-1 pb-2">
                      <div className="flex justify-between items-start">
                        <h4 className="font-black text-lg tracking-tight uppercase italic">{event.label}</h4>
                        <span className="text-[10px] font-bold text-muted-foreground opacity-40">{event.timestamp}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1 italic font-medium">"{event.description}"</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Protocol Column */}
          <div className="space-y-8">
            <Card className="premium-card bg-[#0A0A0B] text-white border-none p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10"><ShieldCheck className="w-24 h-24 text-primary" /></div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-8 italic">Vault Integrity</h3>
              <div className="space-y-8 relative z-10">
                <div>
                   <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-2">Locked Stake</p>
                   <p className="text-4xl font-black tracking-tighter italic">₹{task.budget.toLocaleString('en-IN')}</p>
                </div>
                <div>
                   <p className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-2">Time Remaining</p>
                   <div className="flex items-center gap-3 text-2xl font-black italic tracking-tighter">
                     <Clock className="w-6 h-6 text-primary" /> 4d : 12h : 30m
                   </div>
                </div>
              </div>
            </Card>

            <Card className="premium-card p-10 space-y-6 border-none shadow-sm">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/40 italic">Audit Progress</h4>
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                    <span>Artifact Quality</span>
                    <span>85%</span>
                  </div>
                  <Progress value={85} className="h-1.5" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                    <span>Deadline Compliance</span>
                    <span>100%</span>
                  </div>
                  <Progress value={100} className="h-1.5" />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
