
"use client"

import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { 
  LayoutDashboard, 
  PlusCircle, 
  CheckSquare, 
  Wallet, 
  Star,
  Search,
  Filter,
  MoreVertical,
  ChevronRight
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useAppContext } from '@/context/AppContext';
import { TaskStatus } from '@/lib/types';
import Link from 'next/link';

const SIDEBAR_ITEMS = [
  { title: 'Dashboard', href: '/hirer/dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
  { title: 'Post Task', href: '/hirer/post-task', icon: <PlusCircle className="w-5 h-5" /> },
  { title: 'My Tasks', href: '/hirer/tasks', icon: <CheckSquare className="w-5 h-5" /> },
  { title: 'Payments', href: '/hirer/payments', icon: <Wallet className="w-5 h-5" /> },
  { title: 'Ratings', href: '/hirer/ratings', icon: <Star className="w-5 h-5" /> },
];

export default function HirerTasksPage() {
  const { tasks, currentUser } = useAppContext();
  const hirerTasks = tasks.filter(t => t.hirerId === currentUser?.id);

  const getStatusBadge = (status: TaskStatus) => {
    switch(status) {
      case 'draft': return <Badge variant="secondary">Draft</Badge>;
      case 'funded': return <Badge className="bg-yellow-500">Funded</Badge>;
      case 'in-progress': return <Badge className="bg-blue-500">Active</Badge>;
      case 'submitted': return <Badge className="bg-orange-500">In Review</Badge>;
      case 'completed': return <Badge className="bg-green-500">Completed</Badge>;
      case 'disputed': return <Badge variant="destructive">Disputed</Badge>;
      default: return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <DashboardLayout role="hirer" sidebarItems={SIDEBAR_ITEMS}>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold mb-1">Company Tasks</h1>
            <p className="text-muted-foreground">Monitor and manage your active project pipeline.</p>
          </div>
          <Link href="/hirer/post-task">
            <Button className="gap-2 rounded-full">
              <PlusCircle className="w-4 h-4" /> Create New Task
            </Button>
          </Link>
        </div>

        <div className="grid gap-4">
          {hirerTasks.length > 0 ? hirerTasks.map(task => (
            <Card key={task.id} className="hover:shadow-md transition-shadow">
              <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2 mb-1">
                    {getStatusBadge(task.status)}
                    <span className="text-xs text-muted-foreground font-mono">ID: {task.id}</span>
                  </div>
                  <h3 className="text-lg font-bold">{task.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-1">{task.description}</p>
                </div>
                
                <div className="flex items-center gap-8 px-6 border-x hidden lg:flex">
                   <div className="text-center">
                      <p className="text-[10px] uppercase font-bold text-muted-foreground">Budget</p>
                      <p className="font-bold">${task.budget}</p>
                   </div>
                   <div className="text-center">
                      <p className="text-[10px] uppercase font-bold text-muted-foreground">Deadline</p>
                      <p className="font-bold">{task.deadline}</p>
                   </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">Manage</Button>
                  <Button variant="ghost" size="icon"><MoreVertical className="w-4 h-4" /></Button>
                </div>
              </div>
            </Card>
          )) : (
            <div className="py-20 text-center border-2 border-dashed rounded-2xl bg-white/50">
               <CheckSquare className="w-12 h-12 text-muted-foreground opacity-20 mx-auto mb-4" />
               <p className="text-muted-foreground">You haven't posted any tasks yet.</p>
               <Link href="/hirer/post-task">
                <Button variant="link" className="text-primary mt-2">Post your first task</Button>
               </Link>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
