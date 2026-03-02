
"use client"

import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { 
  LayoutDashboard, 
  CheckSquare, 
  Wallet, 
  Star, 
  User,
  ArrowUpRight,
  Download,
  IndianRupee
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { useAppContext } from '@/context/AppContext';

const SIDEBAR_ITEMS = [
  { title: 'Dashboard', href: '/worker/dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
  { title: 'My Tasks', href: '/worker/tasks', icon: <CheckSquare className="w-5 h-5" /> },
  { title: 'Earnings', href: '/worker/earnings', icon: <Wallet className="w-5 h-5" /> },
  { title: 'Reputation', href: '/worker/reputation', icon: <Star className="w-5 h-5" /> },
  { title: 'Profile', href: '/worker/profile', icon: <User className="w-5 h-5" /> },
];

export default function WorkerEarningsPage() {
  const { tasks, currentUser } = useAppContext();
  const completedTasks = tasks.filter(t => t.workerId === currentUser?.id && t.status === 'completed');
  const totalEarnings = completedTasks.reduce((sum, t) => sum + t.budget, 0);

  return (
    <DashboardLayout role="worker" sidebarItems={SIDEBAR_ITEMS}>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold mb-1">Financial Overview</h1>
            <p className="text-muted-foreground">Track your proof of work liquidity.</p>
          </div>
          <Button className="rounded-full gap-2">
            <Download className="w-4 h-4" /> Withdraw Funds
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-foreground text-white border-none">
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-medium opacity-70 uppercase tracking-wider">Available Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">₹{(totalEarnings * 0.95).toLocaleString('en-IN', { maximumFractionDigits: 0 })}</div>
              <p className="text-[10px] mt-2 opacity-50">After 5% platform fee</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Lifetime Earnings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">₹{totalEarnings.toLocaleString('en-IN')}</div>
              <div className="flex items-center gap-1 mt-2 text-xs text-green-500 font-bold">
                <ArrowUpRight className="w-3 h-3" /> Growth: +24%
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Pending Release</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">₹{tasks.filter(t => t.workerId === currentUser?.id && t.status === 'submitted').reduce((sum, t) => sum + t.budget, 0).toLocaleString('en-IN')}</div>
              <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                <IndianRupee className="w-3 h-3" /> Currently in Escrow
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Payment History</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Task</TableHead>
                  <TableHead className="text-right">Net Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {completedTasks.length > 0 ? completedTasks.map(task => (
                  <TableRow key={task.id}>
                    <TableCell className="text-muted-foreground">{task.createdAt}</TableCell>
                    <TableCell className="font-medium">{task.title}</TableCell>
                    <TableCell className="text-right font-bold text-primary">
                      ₹{(task.budget * 0.95).toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                    </TableCell>
                  </TableRow>
                )) : (
                  <TableRow>
                    <TableCell colSpan={3} className="text-center py-10 text-muted-foreground">
                      Complete tasks to see your earnings here!
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
