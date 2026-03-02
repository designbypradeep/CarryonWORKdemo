
"use client"

import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { 
  LayoutDashboard, 
  PlusCircle, 
  CheckSquare, 
  Wallet, 
  Star,
  ThumbsUp,
  MessageSquare
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const SIDEBAR_ITEMS = [
  { title: 'Dashboard', href: '/hirer/dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
  { title: 'Post Task', href: '/hirer/post-task', icon: <PlusCircle className="w-5 h-5" /> },
  { title: 'My Tasks', href: '/hirer/tasks', icon: <CheckSquare className="w-5 h-5" /> },
  { title: 'Payments', href: '/hirer/payments', icon: <Wallet className="w-5 h-5" /> },
  { title: 'Ratings', href: '/hirer/ratings', icon: <Star className="w-5 h-5" /> },
];

export default function HirerRatingsPage() {
  return (
    <DashboardLayout role="hirer" sidebarItems={SIDEBAR_ITEMS}>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-1">Company Reputation</h1>
          <p className="text-muted-foreground">Manage your reviews and platform trust score.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Worker Feedback</CardTitle>
              <CardDescription>What people are saying about working with you.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {[
                { name: "Vikram Malhotra", rating: 5, comment: "Clear instructions and prompt approval. Best client in Delhi!", date: "2 days ago" },
                { name: "Anjali Rao", rating: 4, comment: "Fair budget, though response time was a bit slow on weekends.", date: "1 week ago" }
              ].map((review, i) => (
                <div key={i} className="flex gap-4 p-4 border rounded-xl">
                  <Avatar>
                    <AvatarImage src={`https://picsum.photos/seed/${review.name}/150`} />
                    <AvatarFallback>{review.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold">{review.name}</h4>
                      <div className="flex text-yellow-500">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground italic">"{review.comment}"</p>
                    <p className="text-[10px] text-muted-foreground uppercase">{review.date}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="h-fit">
            <CardHeader>
              <CardTitle>Your Trust Score</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-center py-8">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full border-8 border-primary/20 flex items-center justify-center">
                    <span className="text-4xl font-bold">4.8</span>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-white text-xs px-2 py-1 rounded-full font-bold">
                    EXCELLENT
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground flex items-center gap-2"><ThumbsUp className="w-4 h-4" /> Approval Rate</span>
                  <span className="font-bold">98%</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground flex items-center gap-2"><MessageSquare className="w-4 h-4" /> Response Time</span>
                  <span className="font-bold">&lt; 2 hrs</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
