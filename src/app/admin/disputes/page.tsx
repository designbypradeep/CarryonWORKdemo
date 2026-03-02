
"use client"

import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { 
  LayoutDashboard, 
  Users, 
  CheckSquare, 
  ShieldAlert,
  AlertTriangle,
  ExternalLink
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useAppContext } from '@/context/AppContext';

const SIDEBAR_ITEMS = [
  { title: 'Overview', href: '/admin/dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
  { title: 'Workers', href: '/admin/workers', icon: <Users className="w-5 h-5" /> },
  { title: 'Tasks', href: '/admin/tasks', icon: <CheckSquare className="w-5 h-5" /> },
  { title: 'Disputes', href: '/admin/disputes', icon: <ShieldAlert className="w-5 h-5" /> },
];

export default function AdminDisputesPage() {
  const { tasks } = useAppContext();
  const disputedTasks = tasks.filter(t => t.status === 'disputed');

  return (
    <DashboardLayout role="admin" sidebarItems={SIDEBAR_ITEMS}>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-1">Conflict Resolution</h1>
          <p className="text-muted-foreground">Arbitrate disputes between hirers and workers.</p>
        </div>

        <div className="grid gap-6">
          {disputedTasks.length > 0 ? disputedTasks.map(task => (
            <Card key={task.id} className="p-6 border-l-4 border-l-destructive">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Badge variant="destructive">Active Dispute</Badge>
                    <span className="text-sm font-mono text-muted-foreground">TASK-{task.id}</span>
                  </div>
                  <Button variant="outline" size="sm" className="gap-2">
                    <ExternalLink className="w-4 h-4" /> View Case
                  </Button>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold">{task.title}</h3>
                  <div className="mt-4 p-4 bg-destructive/5 rounded-lg border border-destructive/10">
                    <div className="flex items-center gap-2 text-destructive font-semibold mb-2 text-sm">
                      <AlertTriangle className="w-4 h-4" /> Reported Reason
                    </div>
                    <p className="text-sm italic">"{task.disputeReason || "No details provided"}"</p>
                  </div>
                </div>

                <div className="flex justify-end gap-2 pt-2 border-t">
                  <Button variant="ghost" size="sm">Dismiss</Button>
                  <Button size="sm">Start Resolution</Button>
                </div>
              </div>
            </Card>
          )) : (
            <div className="py-20 text-center border-2 border-dashed rounded-2xl">
              <ShieldAlert className="w-12 h-12 text-muted-foreground opacity-20 mx-auto mb-4" />
              <p className="text-muted-foreground">Excellent! No active disputes require your attention.</p>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
