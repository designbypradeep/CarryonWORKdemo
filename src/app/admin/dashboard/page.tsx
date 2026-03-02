"use client"

import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { 
  LayoutDashboard, 
  Users, 
  CheckSquare, 
  ShieldAlert, 
  BarChart3,
  TrendingUp,
  FileText,
  Check,
  X,
  Eye
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { useAppContext } from '@/context/AppContext';
import { useToast } from '@/hooks/use-toast';
import { summarizeDispute } from '@/ai/flows/ai-dispute-summarizer-flow';

const SIDEBAR_ITEMS = [
  { title: 'Overview', href: '/admin/dashboard', icon: <LayoutDashboard /> },
  { title: 'Workers', href: '/admin/workers', icon: <Users /> },
  { title: 'Tasks', href: '/admin/tasks', icon: <CheckSquare /> },
  { title: 'Disputes', href: '/admin/disputes', icon: <ShieldAlert /> },
];

export default function AdminDashboard() {
  const { tasks, users, updateUserStatus, updateTaskStatus } = useAppContext();
  const { toast } = useToast();

  const [aiSummary, setAiSummary] = useState<string | null>(null);
  const [isSummarizing, setIsSummarizing] = useState(false);

  const pendingWorkers = users.filter(u => u.role === 'worker' && u.status === 'pending');
  const disputedTasks = tasks.filter(t => t.status === 'disputed');
  
  const totalGMV = tasks.reduce((sum, t) => sum + t.budget, 0);
  const commission = totalGMV * 0.05;

  const handleWorkerAction = (userId: string, status: 'approved' | 'rejected') => {
    updateUserStatus(userId, status);
    toast({ title: `Worker ${status}`, description: `Profile has been ${status}.` });
  };

  const handleResolveDispute = async (taskId: string, outcome: 'approved' | 'refunded') => {
    const status = outcome === 'approved' ? 'completed' : 'resolved';
    updateTaskStatus(taskId, status);
    toast({ title: "Dispute Resolved", description: `Task outcome: ${outcome}.` });
    setAiSummary(null);
  };

  const handleAiSummarize = async (task: any) => {
    setIsSummarizing(true);
    try {
      const res = await summarizeDispute({ 
        disputeDetails: `Task: ${task.title}. Hirer Reason: ${task.disputeReason || "No details provided"}. Status: ${task.status}`
      });
      setAiSummary(res.summary);
    } catch (e) {
      toast({ variant: "destructive", title: "Error", description: "Failed to summarize dispute." });
    } finally {
      setIsSummarizing(false);
    }
  };

  return (
    <DashboardLayout role="admin" sidebarItems={SIDEBAR_ITEMS}>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter mb-2 leading-none italic uppercase text-gradient">Control Center</h1>
          <p className="text-[10px] sm:text-xs font-black text-muted-foreground uppercase tracking-[0.3em] italic">Network Health & Arbitration</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <Card className="premium-card group hover:scale-[1.02] transition-transform shadow-xl border-none">
            <CardContent className="pt-8 p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Total GMV</span>
                <TrendingUp className="w-4 h-4 text-green-500" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black tracking-tighter italic">₹{totalGMV.toLocaleString('en-IN')}</span>
              </div>
            </CardContent>
          </Card>

          <Card className="premium-card border-none shadow-xl">
            <CardContent className="pt-8 p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Commission</span>
                <BarChart3 className="w-4 h-4 text-primary" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black tracking-tighter italic">₹{commission.toLocaleString('en-IN')}</span>
              </div>
            </CardContent>
          </Card>

          <Card className="premium-card border-none shadow-xl bg-destructive/5">
            <CardContent className="pt-8 p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Disputes</span>
                <ShieldAlert className="w-4 h-4 text-destructive" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black tracking-tighter text-destructive italic">{disputedTasks.length}</span>
              </div>
            </CardContent>
          </Card>

          <Card className="premium-card border-none shadow-xl">
            <CardContent className="pt-8 p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Comp. Rate</span>
                <CheckSquare className="w-4 h-4 text-blue-500" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black tracking-tighter italic">89%</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="disputes" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md h-12 rounded-xl bg-accent/20 border border-border/40 mb-8 p-1">
            <TabsTrigger value="disputes" className="rounded-lg font-black text-[10px] uppercase tracking-widest">Disputes ({disputedTasks.length})</TabsTrigger>
            <TabsTrigger value="verifications" className="rounded-lg font-black text-[10px] uppercase tracking-widest">Worker Verification ({pendingWorkers.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="disputes" className="space-y-6">
            {disputedTasks.length > 0 ? disputedTasks.map(task => (
              <Card key={task.id} className="premium-card border-none overflow-hidden border-l-4 border-l-destructive shadow-2xl bg-white/50 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row gap-8 p-8 lg:p-12">
                  <div className="flex-1 space-y-6">
                    <div className="flex flex-wrap items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Badge variant="destructive" className="font-black text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-xl">Needs Review</Badge>
                        <span className="text-xs font-mono text-muted-foreground opacity-50">#ID-{task.id}</span>
                      </div>
                      <Button variant="outline" size="sm" className="rounded-full font-black text-[10px] uppercase tracking-widest h-10 px-6 gap-2 border-foreground/20 hover:bg-foreground hover:text-white transition-all">
                        <Eye className="w-4 h-4" /> View Case
                      </Button>
                    </div>
                    <div>
                      <h3 className="text-2xl font-black tracking-tighter italic uppercase">{task.title}</h3>
                      <p className="text-xs font-bold text-muted-foreground mt-2 uppercase tracking-wider">Hirer: {users.find(u => u.id === task.hirerId)?.name} • Worker: {users.find(u => u.id === task.workerId)?.name}</p>
                    </div>
                    <div className="p-6 bg-destructive/5 rounded-2xl text-sm italic font-medium leading-relaxed border border-destructive/10">
                      " {task.disputeReason} "
                    </div>
                    
                    {aiSummary && (
                      <div className="p-6 bg-primary/5 border border-primary/20 rounded-2xl text-sm space-y-3 animate-reveal">
                        <div className="flex items-center gap-2 font-black text-[10px] uppercase tracking-widest text-primary">
                          <FileText className="w-4 h-4" /> AI Oracle Summary
                        </div>
                        <p className="font-medium text-foreground/80 leading-relaxed">{aiSummary}</p>
                      </div>
                    )}

                    <Button 
                      variant="outline" 
                      className="rounded-full font-black text-[10px] uppercase tracking-[0.2em] px-8 h-12 border-primary/40 text-primary hover:bg-primary/5"
                      onClick={() => handleAiSummarize(task)}
                      disabled={isSummarizing}
                    >
                      {isSummarizing ? "Processing..." : "✨ AI Summarize Case"}
                    </Button>
                  </div>

                  <div className="flex flex-col gap-4 min-w-[240px] md:border-l border-border/40 md:pl-8 pt-8 md:pt-0">
                    <h4 className="font-black text-[10px] uppercase tracking-[0.3em] text-muted-foreground/40 mb-2">Final Protocol Action</h4>
                    <Button className="w-full h-14 rounded-2xl font-black text-[11px] uppercase tracking-widest bg-green-600 hover:bg-green-700 shadow-xl shadow-green-600/20 italic" onClick={() => handleResolveDispute(task.id, 'approved')}>
                      Release to Worker
                    </Button>
                    <Button variant="outline" className="w-full h-14 rounded-2xl font-black text-[11px] uppercase tracking-widest border-destructive/20 text-destructive hover:bg-destructive/5 italic" onClick={() => handleResolveDispute(task.id, 'refunded')}>
                      Refund Hirer
                    </Button>
                  </div>
                </div>
              </Card>
            )) : (
              <div className="py-24 text-center border-2 border-dashed rounded-[3rem] bg-white/40">
                <ShieldAlert className="w-16 h-16 text-muted-foreground/20 mx-auto mb-6" />
                <p className="text-xl font-black tracking-tighter text-muted-foreground/60 italic uppercase">Network is Silent</p>
                <p className="text-xs font-bold text-muted-foreground/30 mt-2 uppercase tracking-widest">All disputes are currently settled.</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="verifications" className="space-y-4">
            {pendingWorkers.length > 0 ? pendingWorkers.map(worker => (
              <Card key={worker.id} className="premium-card p-6 border-none shadow-xl">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-[1.25rem] bg-accent/50 flex items-center justify-center font-black text-primary text-xl shadow-inner italic">
                      {worker.name[0]}
                    </div>
                    <div>
                      <h4 className="font-black text-lg tracking-tight italic uppercase">{worker.name}</h4>
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{worker.email} • JoinDate: {worker.joinedAt}</p>
                    </div>
                  </div>
                  <div className="flex gap-3 w-full sm:w-auto">
                    <Button className="flex-1 sm:flex-none h-12 px-8 rounded-full font-black text-[10px] uppercase tracking-widest shadow-lg shadow-primary/20 italic" onClick={() => handleWorkerAction(worker.id, 'approved')}>
                      <Check className="w-4 h-4 mr-2" /> Approve
                    </Button>
                    <Button variant="ghost" className="flex-1 sm:flex-none h-12 px-8 rounded-full font-black text-[10px] uppercase tracking-widest text-destructive hover:bg-destructive/5 italic" onClick={() => handleWorkerAction(worker.id, 'rejected')}>
                      <X className="w-4 h-4 mr-2" /> Reject
                    </Button>
                  </div>
                </div>
              </Card>
            )) : (
              <div className="py-24 text-center border-2 border-dashed rounded-[3rem] bg-white/40">
                 <p className="text-xl font-black tracking-tighter text-muted-foreground/60 italic uppercase">Identity Queue Clear</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}