"use client"

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { 
  ArrowLeft, 
  Download, 
  Printer, 
  ShieldCheck, 
  CheckCircle2,
  LayoutDashboard,
  PlusCircle,
  CheckSquare,
  Wallet,
  Star
} from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Logo } from '@/components/ui/logo';
import { useAppContext } from '@/context/AppContext';

const SIDEBAR_ITEMS = [
  { title: 'Dashboard', href: '/hirer/dashboard', icon: <LayoutDashboard /> },
  { title: 'Post Task', href: '/hirer/post-task', icon: <PlusCircle /> },
  { title: 'My Tasks', href: '/hirer/tasks', icon: <CheckSquare /> },
  { title: 'Payments', href: '/hirer/payments', icon: <Wallet /> },
  { title: 'Ratings', href: '/hirer/ratings', icon: <Star /> },
];

export default function ProtocolBillingPage() {
  const { id } = useParams();
  const router = useRouter();
  const { tasks, users } = useAppContext();
  const [invoiceDate, setInvoiceDate] = useState<string>('');
  
  const task = tasks.find(t => t.id === id);
  const worker = users.find(u => u.id === task?.workerId);
  
  useEffect(() => {
    setInvoiceDate(new Date().toLocaleDateString());
  }, []);

  if (!task) return <div>Task not found</div>;

  const platformFee = task.budget * 0.05;
  const netTotal = task.budget;

  return (
    <DashboardLayout role="hirer" sidebarItems={SIDEBAR_ITEMS}>
      <div className="max-w-4xl mx-auto space-y-12 animate-reveal">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
          <div className="flex items-center gap-6">
            <Button variant="ghost" size="icon" className="rounded-full bg-white shadow-sm" onClick={() => router.back()}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-3xl font-black tracking-tighter italic uppercase leading-none">Protocol Billing</h1>
              <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em] italic mt-2">Vault Statement: {task.id}</p>
            </div>
          </div>
          <div className="flex gap-4 w-full sm:w-auto">
            <Button variant="outline" className="flex-1 sm:flex-none h-12 px-6 rounded-xl font-black text-[10px] uppercase tracking-widest gap-2">
              <Download className="w-4 h-4" /> PDF
            </Button>
            <Button className="flex-1 sm:flex-none h-12 px-6 rounded-xl font-black text-[10px] uppercase tracking-widest gap-2">
              <Printer className="w-4 h-4" /> Print
            </Button>
          </div>
        </div>

        <Card className="premium-card border-none shadow-2xl overflow-hidden">
          <CardHeader className="p-12 lg:p-16 bg-[#0A0A0B] text-white relative">
            <div className="absolute top-0 right-0 p-12 opacity-5"><ShieldCheck className="w-48 h-48" /></div>
            <div className="flex justify-between items-start relative z-10">
              <div className="space-y-8">
                <Logo variant="light" className="w-56" />
                <div>
                  <h2 className="text-4xl font-black tracking-tighter italic uppercase">Invoice</h2>
                  <p className="text-white/40 text-[10px] uppercase font-bold tracking-[0.4em] mt-2">Protocol Reference: {task.id}</p>
                </div>
              </div>
              <div className="text-right space-y-4">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-500 font-black text-[10px] uppercase tracking-widest">
                  <CheckCircle2 className="w-4 h-4" /> Settlement Confirmed
                </div>
                <p className="text-xs font-bold text-white/30 uppercase tracking-widest">{invoiceDate}</p>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="p-12 lg:p-16 space-y-16">
            <div className="grid grid-cols-2 gap-12">
              <div className="space-y-4">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/40 italic">Hirer Node</h4>
                <div className="space-y-1">
                  <p className="text-xl font-black tracking-tighter italic uppercase">Tata Digital Solutions</p>
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">billing@tata.com</p>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/40 italic">Worker Node</h4>
                <div className="space-y-1">
                  <p className="text-xl font-black tracking-tighter italic uppercase">{worker?.name}</p>
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">{worker?.email}</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/40 italic border-b pb-4">Execution Summary</h4>
              <div className="space-y-6">
                <div className="flex justify-between items-center group">
                   <div>
                     <p className="font-bold text-lg italic uppercase">{task.title}</p>
                     <p className="text-xs text-muted-foreground uppercase tracking-widest">Fixed Execution Stake</p>
                   </div>
                   <p className="text-xl font-black tracking-tighter italic">₹{task.budget.toLocaleString('en-IN')}</p>
                </div>
                <div className="flex justify-between items-center opacity-40">
                   <div>
                     <p className="font-bold italic uppercase">Platform Service Fee</p>
                     <p className="text-xs uppercase tracking-widest">Escrow & Governance (5%)</p>
                   </div>
                   <p className="text-lg font-black tracking-tighter italic">+ ₹{platformFee.toLocaleString('en-IN')}</p>
                </div>
              </div>
            </div>

            <Separator className="bg-border/40" />

            <div className="flex justify-between items-center p-8 bg-accent/30 rounded-3xl">
               <div>
                 <h3 className="text-2xl font-black tracking-tighter italic uppercase">Total Settlement</h3>
                 <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Funds released from Vault Alpha</p>
               </div>
               <div className="text-right">
                 <p className="text-5xl font-black tracking-tighter italic text-primary leading-none">₹{netTotal.toLocaleString('en-IN')}</p>
                 <p className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] mt-2">100% Solvency verified</p>
               </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-center pt-8">
          <p className="text-[9px] font-black text-muted-foreground/30 uppercase tracking-[0.5em] italic">Carryon Network Foundation • Mission Critical Protocol V3</p>
        </div>
      </div>
    </DashboardLayout>
  );
}