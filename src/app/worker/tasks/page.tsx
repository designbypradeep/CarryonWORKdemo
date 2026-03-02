
"use client"

import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { 
  LayoutDashboard, 
  CheckSquare, 
  Wallet, 
  Star, 
  User,
  Search,
  Filter,
  MoreVertical,
  ExternalLink,
  Upload,
  AlertTriangle,
  Clock,
  IndianRupee
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { useAppContext } from '@/context/AppContext';
import { Task, TaskStatus } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';
import { aiProposalDraftGenerator } from '@/ai/flows/ai-proposal-draft-generator';

const SIDEBAR_ITEMS = [
  { title: 'Dashboard', href: '/worker/dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
  { title: 'My Tasks', href: '/worker/tasks', icon: <CheckSquare className="w-5 h-5" /> },
  { title: 'Earnings', href: '/worker/earnings', icon: <Wallet className="w-5 h-5" /> },
  { title: 'Reputation', href: '/worker/reputation', icon: <Star className="w-5 h-5" /> },
  { title: 'Profile', href: '/worker/profile', icon: <User className="w-5 h-5" /> },
];

export default function WorkerTasksPage() {
  const { tasks, currentUser, updateTaskStatus } = useAppContext();
  const { toast } = useToast();
  
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [isSubmitOpen, setIsSubmitOpen] = useState(false);
  const [submissionNotes, setSubmissionNotes] = useState('');
  const [isGeneratingAi, setIsGeneratingAi] = useState(false);

  const workerTasks = tasks.filter(t => t.workerId === currentUser?.id);

  const handleStatusChange = (taskId: string, status: TaskStatus) => {
    updateTaskStatus(taskId, status);
    toast({
      title: "Status Updated",
      description: `Task is now ${status.replace('-', ' ')}.`,
    });
  };

  const handleAiDraft = async () => {
    if (!selectedTask) return;
    setIsGeneratingAi(true);
    try {
      const res = await aiProposalDraftGenerator({
        taskDescription: selectedTask.description,
        workerKeyPoints: submissionNotes || "Completed all core requirements with thorough testing."
      });
      setSubmissionNotes(res.proposalDraft);
    } catch (e) {
      toast({ variant: "destructive", title: "AI Error", description: "Failed to generate draft." });
    } finally {
      setIsGeneratingAi(false);
    }
  };

  const handleSubmitWork = () => {
    if (selectedTask) {
      updateTaskStatus(selectedTask.id, 'submitted', { submissionUrl: 'https://github.com/carryonwork/demo-repo' });
      setIsSubmitOpen(false);
      setSubmissionNotes('');
      toast({ title: "Work Submitted", description: "Your submission is now with the hirer for review." });
    }
  };

  const getStatusBadge = (status: TaskStatus) => {
    switch(status) {
      case 'assigned': return <Badge variant="secondary">Invited</Badge>;
      case 'in-progress': return <Badge className="bg-blue-500">Active</Badge>;
      case 'submitted': return <Badge className="bg-orange-500">Submitted</Badge>;
      case 'completed': return <Badge className="bg-green-500">Completed</Badge>;
      case 'disputed': return <Badge variant="destructive">Disputed</Badge>;
      default: return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <DashboardLayout role="worker" sidebarItems={SIDEBAR_ITEMS}>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold mb-1">My Tasks</h1>
            <p className="text-muted-foreground">Manage your invitations and ongoing work.</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="w-4 h-4" /> Filter
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Search className="w-4 h-4" /> Search
            </Button>
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList>
            <TabsTrigger value="all">All ({workerTasks.length})</TabsTrigger>
            <TabsTrigger value="active">Active ({workerTasks.filter(t => ['assigned', 'in-progress'].includes(t.status)).length})</TabsTrigger>
            <TabsTrigger value="submitted">Submitted ({workerTasks.filter(t => t.status === 'submitted').length})</TabsTrigger>
            <TabsTrigger value="completed">Completed ({workerTasks.filter(t => t.status === 'completed').length})</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="pt-4">
            <div className="grid gap-4">
              {workerTasks.length > 0 ? workerTasks.map(task => (
                <Card key={task.id} className="group overflow-hidden">
                  <div className="flex flex-col md:flex-row md:items-center p-5 gap-4">
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-2 mb-1">
                        {getStatusBadge(task.status)}
                        <span className="text-xs text-muted-foreground font-mono">ID: {task.id}</span>
                      </div>
                      <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{task.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{task.description}</p>
                    </div>

                    <div className="flex flex-col items-start md:items-end gap-2 md:min-w-[140px]">
                      <span className="text-xl font-bold text-foreground">₹{task.budget.toLocaleString('en-IN')}</span>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" /> Due {task.deadline}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 border-t md:border-t-0 md:border-l pt-4 md:pt-0 md:pl-6">
                      {task.status === 'assigned' && (
                        <>
                          <Button size="sm" onClick={() => handleStatusChange(task.id, 'in-progress')}>Accept</Button>
                          <Button size="sm" variant="ghost" className="text-destructive">Reject</Button>
                        </>
                      )}
                      {task.status === 'in-progress' && (
                        <Button size="sm" onClick={() => { setSelectedTask(task); setIsSubmitOpen(true); }}>
                          <Upload className="w-4 h-4 mr-2" /> Submit Work
                        </Button>
                      )}
                      {['submitted', 'completed'].includes(task.status) && (
                        <Button size="sm" variant="outline" className="gap-2">
                          <ExternalLink className="w-4 h-4" /> View Details
                        </Button>
                      )}
                      {task.status === 'disputed' && (
                        <Button size="sm" variant="destructive" className="gap-2">
                          <AlertTriangle className="w-4 h-4" /> Resolve
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              )) : (
                <div className="py-20 text-center border-2 border-dashed rounded-2xl">
                  <p className="text-muted-foreground">You don't have any tasks yet.</p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>

        {/* Submit Work Dialog */}
        <Dialog open={isSubmitOpen} onOpenChange={setIsSubmitOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Submit Work: {selectedTask?.title}</DialogTitle>
              <DialogDescription>
                Provide details about your implementation and any relevant links.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                   <Label htmlFor="notes">Implementation Notes</Label>
                   <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-primary gap-1"
                    onClick={handleAiDraft}
                    disabled={isGeneratingAi}
                   >
                     {isGeneratingAi ? "Thinking..." : "✨ AI Draft"}
                   </Button>
                </div>
                <Textarea 
                  id="notes" 
                  placeholder="Summarize what you've accomplished..." 
                  className="min-h-[150px]"
                  value={submissionNotes}
                  onChange={(e) => setSubmissionNotes(e.target.value)}
                />
              </div>
              <div className="p-4 border border-dashed rounded-lg bg-accent/10 flex flex-col items-center justify-center gap-2">
                <Upload className="w-8 h-8 text-muted-foreground" />
                <p className="text-sm font-medium">Click to upload files or drag & drop</p>
                <p className="text-xs text-muted-foreground">ZIP, PDF, DOC up to 50MB</p>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsSubmitOpen(false)}>Cancel</Button>
              <Button onClick={handleSubmitWork}>Confirm Submission</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
}
