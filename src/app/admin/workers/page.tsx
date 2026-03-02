
"use client"

import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { 
  LayoutDashboard, 
  Users, 
  CheckSquare, 
  ShieldAlert,
  UserCheck,
  MoreVertical,
  Mail,
  Calendar
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useAppContext } from '@/context/AppContext';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const SIDEBAR_ITEMS = [
  { title: 'Overview', href: '/admin/dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
  { title: 'Workers', href: '/admin/workers', icon: <Users className="w-5 h-5" /> },
  { title: 'Tasks', href: '/admin/tasks', icon: <CheckSquare className="w-5 h-5" /> },
  { title: 'Disputes', href: '/admin/disputes', icon: <ShieldAlert className="w-5 h-5" /> },
];

export default function AdminWorkersPage() {
  const { users, updateUserStatus } = useAppContext();
  const workers = users.filter(u => u.role === 'worker');

  return (
    <DashboardLayout role="admin" sidebarItems={SIDEBAR_ITEMS}>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-1">Worker Management</h1>
          <p className="text-muted-foreground">Verify and manage platform workers.</p>
        </div>

        <div className="grid gap-4">
          {workers.map(worker => (
            <Card key={worker.id} className="overflow-hidden">
              <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12 border-2 border-primary/10">
                    <AvatarImage src={`https://picsum.photos/seed/${worker.id}/150`} />
                    <AvatarFallback>{worker.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-bold text-lg">{worker.name}</h3>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                       <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> {worker.email}</span>
                       <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> Joined {worker.joinedAt}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                   <div className="text-center px-6">
                      <p className="text-[10px] uppercase font-bold text-muted-foreground mb-1">Reputation</p>
                      <Badge variant="outline" className="font-bold text-primary border-primary/20 bg-primary/5">
                        {worker.reputation || 0} pts
                      </Badge>
                   </div>
                   <div className="text-center px-6 border-l">
                      <p className="text-[10px] uppercase font-bold text-muted-foreground mb-1">Status</p>
                      <Badge className={worker.status === 'approved' ? 'bg-green-500' : worker.status === 'pending' ? 'bg-yellow-500' : 'bg-red-500'}>
                        {worker.status}
                      </Badge>
                   </div>
                </div>

                <div className="flex items-center gap-2">
                  {worker.status === 'pending' && (
                    <Button size="sm" onClick={() => updateUserStatus(worker.id, 'approved')}>
                      <UserCheck className="w-4 h-4 mr-1" /> Verify
                    </Button>
                  )}
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
