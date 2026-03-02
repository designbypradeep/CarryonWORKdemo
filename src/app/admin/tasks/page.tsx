
"use client"

import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { 
  LayoutDashboard, 
  Users, 
  CheckSquare, 
  ShieldAlert,
  Search,
  Filter,
  MoreVertical
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useAppContext } from '@/context/AppContext';
import { TaskStatus } from '@/lib/types';

const SIDEBAR_ITEMS = [
  { title: 'Overview', href: '/admin/dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
  { title: 'Workers', href: '/admin/workers', icon: <Users className="w-5 h-5" /> },
  { title: 'Tasks', href: '/admin/tasks', icon: <CheckSquare className="w-5 h-5" /> },
  { title: 'Disputes', href: '/admin/disputes', icon: <ShieldAlert className="w-5 h-5" /> },
];

export default function AdminTasksPage() {
  const { tasks } = useAppContext();

  const getStatusBadge = (status: TaskStatus) => {
    switch(status) {
      case 'draft': return <Badge variant="secondary">Draft</Badge>;
      case 'funded': return <Badge className="bg-yellow-500 text-white">Funded</Badge>;
      case 'in-progress': return <Badge className="bg-blue-500 text-white">Active</Badge>;
      case 'submitted': return <Badge className="bg-orange-500 text-white">Review</Badge>;
      case 'completed': return <Badge className="bg-green-500 text-white">Done</Badge>;
      case 'disputed': return <Badge variant="destructive">Dispute</Badge>;
      default: return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <DashboardLayout role="admin" sidebarItems={SIDEBAR_ITEMS}>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold mb-1">Platform Tasks</h1>
            <p className="text-muted-foreground">Monitor every active task on the network.</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="w-4 h-4" /> Filter
            </Button>
          </div>
        </div>

        <div className="grid gap-4">
          {tasks.map(task => (
            <Card key={task.id} className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2 mb-1">
                    {getStatusBadge(task.status)}
                    <span className="text-xs text-muted-foreground font-mono">ID: {task.id}</span>
                  </div>
                  <h3 className="font-bold text-lg">{task.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-1">{task.description}</p>
                </div>
                
                <div className="flex items-center gap-8 px-6 border-l border-r hidden lg:flex">
                   <div className="text-center">
                      <p className="text-[10px] uppercase font-bold text-muted-foreground">Budget</p>
                      <p className="font-bold">₹{task.budget.toLocaleString('en-IN')}</p>
                   </div>
                   <div className="text-center">
                      <p className="text-[10px] uppercase font-bold text-muted-foreground">Due Date</p>
                      <p className="font-bold">{task.deadline}</p>
                   </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon"><MoreVertical className="w-4 h-4" /></Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
