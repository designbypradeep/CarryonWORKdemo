
"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { 
  LayoutDashboard, 
  PlusCircle, 
  CheckSquare, 
  Wallet, 
  Star,
  ArrowLeft,
  Wand2,
  Calendar,
  IndianRupee,
  AlertCircle
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { useAppContext } from '@/context/AppContext';
import { RiskLevel } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';
import { aiTaskDescriptionTool } from '@/ai/flows/ai-task-description-tool';

const SIDEBAR_ITEMS = [
  { title: 'Dashboard', href: '/hirer/dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
  { title: 'Post Task', href: '/hirer/post-task', icon: <PlusCircle className="w-5 h-5" /> },
  { title: 'My Tasks', href: '/hirer/tasks', icon: <CheckSquare className="w-5 h-5" /> },
  { title: 'Payments', href: '/hirer/payments', icon: <Wallet className="w-5 h-5" /> },
  { title: 'Ratings', href: '/hirer/ratings', icon: <Star className="w-5 h-5" /> },
];

export default function PostTaskPage() {
  const router = useRouter();
  const { createTask, currentUser } = useAppContext();
  const { toast } = useToast();

  const [form, setForm] = useState({
    title: '',
    description: '',
    budget: '',
    deadline: '',
    riskLevel: 'low' as RiskLevel
  });

  const [isAiLoading, setIsAiLoading] = useState(false);

  const handleAiExpand = async () => {
    if (!form.title) {
      toast({ variant: "destructive", title: "Error", description: "Please enter a title first." });
      return;
    }
    setIsAiLoading(true);
    try {
      const res = await aiTaskDescriptionTool({ taskTitle: form.title });
      setForm(prev => ({ 
        ...prev, 
        description: `${res.detailedDescription}\n\nRequirements:\n${res.requirements.map(r => `• ${r}`).join('\n')}\n\nScope:\n${res.scope}`
      }));
      toast({ title: "AI Generated", description: "Description expanded successfully." });
    } catch (e) {
      toast({ variant: "destructive", title: "AI Error", description: "Failed to expand description." });
    } finally {
      setIsAiLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createTask({
      title: form.title,
      description: form.description,
      budget: Number(form.budget),
      deadline: form.deadline,
      riskLevel: form.riskLevel,
      status: 'draft',
      hirerId: currentUser?.id || 'u2'
    });
    toast({ title: "Task Created", description: "Your task is now in draft mode. Fund escrow to begin." });
    router.push('/hirer/dashboard');
  };

  return (
    <DashboardLayout role="hirer" sidebarItems={SIDEBAR_ITEMS}>
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => router.back()}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-3xl font-bold">Post a New Task</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>Start with a clear title and detailed description.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Task Title</Label>
                <div className="flex gap-2">
                  <Input 
                    id="title" 
                    placeholder="e.g. Design a high-converting pricing page" 
                    value={form.title}
                    onChange={(e) => setForm(prev => ({ ...prev, title: e.target.value }))}
                    required
                  />
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="gap-2 shrink-0 border-primary text-primary hover:bg-primary/5"
                    onClick={handleAiExpand}
                    disabled={isAiLoading}
                  >
                    <Wand2 className="w-4 h-4" /> {isAiLoading ? "Processing..." : "Expand with AI"}
                  </Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Detailed Description</Label>
                <Textarea 
                  id="description" 
                  className="min-h-[200px]" 
                  placeholder="Explain exactly what needs to be done..." 
                  value={form.description}
                  onChange={(e) => setForm(prev => ({ ...prev, description: e.target.value }))}
                  required
                />
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Budget & Deadline</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="budget">Fixed Budget (INR)</Label>
                  <div className="relative">
                    <IndianRupee className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input 
                      id="budget" 
                      type="number" 
                      className="pl-9" 
                      placeholder="0.00" 
                      value={form.budget}
                      onChange={(e) => setForm(prev => ({ ...prev, budget: e.target.value }))}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="deadline">Target Completion Date</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input 
                      id="deadline" 
                      type="date" 
                      className="pl-9"
                      value={form.deadline}
                      onChange={(e) => setForm(prev => ({ ...prev, deadline: e.target.value }))}
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Security & Risk</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Execution Risk Level</Label>
                  <Select 
                    value={form.riskLevel} 
                    onValueChange={(v) => setForm(prev => ({ ...prev, riskLevel: v as RiskLevel }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select risk level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low - Routine work</SelectItem>
                      <SelectItem value="medium">Medium - Specialized skills</SelectItem>
                      <SelectItem value="high">High - Mission critical</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex gap-2 p-3 bg-blue-50 border border-blue-200 rounded-lg text-xs text-blue-700">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <p>CarryonWORK charges a flat 5% platform commission on the total budget for escrow management and support.</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-end gap-4">
            <Button variant="ghost" type="button" onClick={() => router.back()}>Cancel</Button>
            <Button type="submit" size="lg" className="px-12 rounded-full">Save Draft Task</Button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
}
