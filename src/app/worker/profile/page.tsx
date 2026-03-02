
"use client"

import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { 
  LayoutDashboard, 
  CheckSquare, 
  Wallet, 
  Star, 
  User,
  Camera,
  Save,
  Mail,
  Briefcase
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAppContext } from '@/context/AppContext';
import { useToast } from '@/hooks/use-toast';

const SIDEBAR_ITEMS = [
  { title: 'Dashboard', href: '/worker/dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
  { title: 'My Tasks', href: '/worker/tasks', icon: <CheckSquare className="w-5 h-5" /> },
  { title: 'Earnings', href: '/worker/earnings', icon: <Wallet className="w-5 h-5" /> },
  { title: 'Reputation', href: '/worker/reputation', icon: <Star className="w-5 h-5" /> },
  { title: 'Profile', href: '/worker/profile', icon: <User className="w-5 h-5" /> },
];

export default function WorkerProfilePage() {
  const { currentUser } = useAppContext();
  const { toast } = useToast();
  
  const [profile, setProfile] = useState({
    name: currentUser?.name || '',
    email: currentUser?.email || '',
    bio: 'Experienced full-stack developer focusing on high-execution delivery.',
    skills: 'React, Next.js, Node.js, Firebase, Tailwind CSS'
  });

  const handleSave = () => {
    toast({ title: "Profile Updated", description: "Your changes have been saved successfully." });
  };

  return (
    <DashboardLayout role="worker" sidebarItems={SIDEBAR_ITEMS}>
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-1">Public Profile</h1>
          <p className="text-muted-foreground">This is how hirers see you on the platform.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="md:col-span-1 h-fit">
            <CardHeader className="text-center">
              <div className="relative mx-auto mb-4">
                <Avatar className="w-24 h-24 border-4 border-primary/10">
                  <AvatarImage src={`https://picsum.photos/seed/${currentUser?.id}/150`} />
                  <AvatarFallback>{currentUser?.name?.[0]}</AvatarFallback>
                </Avatar>
                <button className="absolute bottom-0 right-0 bg-primary text-white p-1.5 rounded-full shadow-lg border-2 border-white">
                  <Camera className="w-4 h-4" />
                </button>
              </div>
              <CardTitle>{profile.name}</CardTitle>
              <CardDescription className="capitalize">Verified Worker</CardDescription>
            </CardHeader>
            <CardContent className="pt-0 space-y-4">
               <div className="p-3 bg-accent/30 rounded-lg text-xs space-y-2">
                 <div className="flex items-center gap-2 text-muted-foreground">
                   <Mail className="w-3 h-3" /> {profile.email}
                 </div>
                 <div className="flex items-center gap-2 text-muted-foreground">
                   <Briefcase className="w-3 h-3" /> Joined {currentUser?.joinedAt}
                 </div>
               </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Edit Profile</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="p-name">Display Name</Label>
                  <Input 
                    id="p-name" 
                    value={profile.name} 
                    onChange={(e) => setProfile(prev => ({ ...prev, name: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="p-email">Contact Email</Label>
                  <Input 
                    id="p-email" 
                    value={profile.email} 
                    disabled
                    className="bg-muted"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="p-skills">Core Skills (Comma separated)</Label>
                <Input 
                  id="p-skills" 
                  value={profile.skills}
                  onChange={(e) => setProfile(prev => ({ ...prev, skills: e.target.value }))}
                  placeholder="e.g. Design, Coding, Writing"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="p-bio">Professional Bio</Label>
                <Textarea 
                  id="p-bio" 
                  className="min-h-[120px]"
                  value={profile.bio}
                  onChange={(e) => setProfile(prev => ({ ...prev, bio: e.target.value }))}
                />
              </div>

              <div className="flex justify-end pt-4">
                <Button onClick={handleSave} className="gap-2 px-8 rounded-full">
                  <Save className="w-4 h-4" /> Save Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
