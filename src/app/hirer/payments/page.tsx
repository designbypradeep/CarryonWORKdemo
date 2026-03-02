
"use client"

import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { 
  LayoutDashboard, 
  PlusCircle, 
  CheckSquare, 
  Wallet, 
  Star,
  Download,
  IndianRupee,
  ArrowUpRight,
  ArrowDownLeft
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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
  { title: 'Dashboard', href: '/hirer/dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
  { title: 'Post Task', href: '/hirer/post-task', icon: <PlusCircle className="w-5 h-5" /> },
  { title: 'My Tasks', href: '/hirer/tasks', icon: <CheckSquare className="w-5 h-5" /> },
  { title: 'Payments', href: '/hirer/payments', icon: <Wallet className="w-5 h-5" /> },
  { title: 'Ratings', href: '/hirer/ratings', icon: <Star className="w-5 h-5" /> },
];

export default function HirerPaymentsPage() {
  const { tasks, currentUser } = useAppContext();
  const hirerTasks = tasks.filter(t => t.hirerId === currentUser?.id);
  const totalSpent = hirerTasks.filter(t => t.status === 'completed').reduce((sum, t) => sum + t.budget, 0);

  return (
    <DashboardLayout role="hirer" sidebarItems={SIDEBAR_ITEMS}>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold mb-1">Financial Center</h1>
            <p className="text-muted-foreground">Manage your billing and transaction history.</p>
          </div>
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" /> Export CSV
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-primary text-white border-none">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium opacity-80 uppercase tracking-wider">Total Lifetime Spend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">₹{totalSpent.toLocaleString('en-IN')}</div>
              <div className="flex items-center gap-1 mt-2 text-xs opacity-80">
                <ArrowUpRight className="w-3 h-3" /> +12.5% from last month
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Currently in Escrow</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">₹{hirerTasks.filter(t => ['funded', 'in-progress'].includes(t.status)).reduce((sum, t) => sum + t.budget, 0).toLocaleString('en-IN')}</div>
              <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                <IndianRupee className="w-3 h-3" /> Securely held
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Pending Approvals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">₹{hirerTasks.filter(t => t.status === 'submitted').reduce((sum, t) => sum + t.budget, 0).toLocaleString('en-IN')}</div>
              <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                <CheckSquare className="w-3 h-3" /> Awaiting review
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Task</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {hirerTasks.length > 0 ? hirerTasks.map(task => (
                  <TableRow key={task.id}>
                    <TableCell className="text-muted-foreground">{task.createdAt}</TableCell>
                    <TableCell className="font-medium">{task.title}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="capitalize">
                        {task.status === 'completed' ? 'Payment' : 'Escrow'}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right font-bold text-primary">
                      ₹{task.budget.toLocaleString('en-IN')}
                    </TableCell>
                  </TableRow>
                )) : (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center py-10 text-muted-foreground">
                      No transaction history found.
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
