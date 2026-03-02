"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { 
  LogOut, 
  Menu,
  X,
  Bell,
  Search,
  ShieldCheck,
  Command,
  Globe,
  Fingerprint,
  Loader2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Switch } from '@/components/ui/switch';
import { Logo } from '@/components/ui/logo';
import { useAppContext } from '@/context/AppContext';
import { UserRole } from '@/lib/types';

interface SidebarItem {
  title: string;
  href: string;
  icon: React.ReactNode;
}

interface DashboardLayoutProps {
  children: React.ReactNode;
  role: UserRole;
  sidebarItems: SidebarItem[];
}

export default function DashboardLayout({ children, role, sidebarItems }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [online, setOnline] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);
  
  const pathname = usePathname();
  const router = useRouter();
  const { currentUser, logout } = useAppContext();

  useEffect(() => {
    // SECURITY PROTOCOL: Role-Based Access Control (RBAC)
    const checkAuth = () => {
      const savedUserString = sessionStorage.getItem('carryon_user');
      const savedUser = savedUserString ? JSON.parse(savedUserString) : null;
      const user = currentUser || savedUser;

      if (!user) {
        // Unauthenticated nodes are restricted
        router.push('/auth/login');
        setIsAuthorized(false);
        return;
      }

      if (user.role !== role) {
        // Unauthorized cross-role access detected. Re-routing to respective node.
        router.push(`/${user.role}/dashboard`);
        setIsAuthorized(false);
        return;
      }

      setIsAuthorized(true);
    };

    checkAuth();
  }, [currentUser, role, router]);

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  // Prevent UI flashing during security verification
  if (isAuthorized === null) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-[#0A0A0B] mesh-gradient-dark">
        <Loader2 className="w-12 h-12 text-primary animate-spin" />
      </div>
    );
  }

  // If redirecting, do not render unauthorized shell
  if (isAuthorized === false) return null;

  return (
    <div className="flex h-screen bg-[#F1F3F5] grainy-bg overflow-hidden">
      {/* 2026 Custom OS Sidebar with Mesh Background */}
      <aside className="hidden lg:flex flex-col w-[280px] xl:w-[350px] bg-[#0A0A0B] text-white relative z-20 overflow-hidden mesh-gradient-dark animate-mesh-drift shrink-0">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[160px] pointer-events-none" />
        
        <div className="p-8 xl:p-10 pb-6 relative z-10">
          <Link href="/" className="group block">
            <Logo variant="light" className="w-full" />
            <div className="flex items-center gap-2 mt-4 ml-1">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-primary font-black text-[8px] xl:text-[9px] uppercase tracking-[0.4em] opacity-60 italic">Access: Node-3</span>
            </div>
          </Link>
        </div>
        
        <div className="px-4 xl:px-6 flex-1 flex flex-col gap-6 lg:gap-8 relative z-10 overflow-y-auto custom-scrollbar">
           <div>
             <div className="flex items-center gap-3 px-6 mb-4 opacity-50">
               <Fingerprint className="w-3 h-3 text-primary" />
               <p className="text-[8px] xl:text-[9px] font-black uppercase tracking-[0.5em] text-white">Execution Workspace</p>
             </div>
             <nav className="space-y-1 xl:space-y-2">
              {sidebarItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`protocol-sidebar-item group px-5 py-3 xl:px-6 xl:py-4 rounded-[1.25rem] flex items-center justify-between transition-all duration-700 ${
                      isActive 
                      ? 'bg-white text-foreground shadow-2xl scale-[1.02]' 
                      : 'hover:bg-white/5 text-white/40 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`${isActive ? 'text-primary' : 'text-white/20 group-hover:text-primary'} transition-colors duration-700 shrink-0`}>
                        {React.cloneElement(item.icon as React.ReactElement, { className: 'w-4 h-4 xl:w-5 xl:h-5' })}
                      </span>
                      <span className="font-black text-[9px] xl:text-[10px] uppercase tracking-[0.3em] italic truncate">{item.title}</span>
                    </div>
                    {isActive && <div className="w-1.5 h-1.5 xl:w-2 xl:h-2 rounded-full bg-primary animate-pulse shadow-[0_0_12px_rgba(255,100,0,1)]" />}
                  </Link>
                );
              })}
            </nav>
           </div>

           <div className="mt-auto pb-8 space-y-4">
              <div className="p-5 rounded-[1.75rem] bg-white/5 border border-white/10 relative overflow-hidden group hover:border-white/20 transition-all duration-1000">
                <div className="absolute -top-2 -right-2 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Globe className="w-10 h-10 text-primary" />
                </div>
                <div className="flex items-center gap-4 relative z-10">
                    <div className="w-10 h-10 rounded-[1rem] bg-green-500/10 flex items-center justify-center border border-green-500/20 shadow-inner">
                      <ShieldCheck className="w-5 h-5 text-green-500" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-xs font-black text-white italic tracking-tight truncate">Vault Secured</span>
                      <span className="text-[8px] font-bold text-white/30 uppercase tracking-[0.2em] mt-1 italic leading-none">Multi-Sig V9</span>
                    </div>
                </div>
              </div>
              
              <button 
                onClick={handleLogout}
                className="flex items-center gap-4 px-6 py-4 w-full rounded-[1.25rem] text-red-500/50 hover:bg-red-500/10 hover:text-red-500 transition-all font-black text-[9px] xl:text-[10px] uppercase tracking-[0.4em] italic"
              >
                <LogOut className="w-5 h-5" />
                <span>End Node</span>
              </button>
           </div>
        </div>
      </aside>

      {/* Main Orchestration Space */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        <header className="h-16 sm:h-20 xl:h-24 flex items-center justify-between px-4 sm:px-8 xl:px-12 shrink-0 z-30 bg-white/40 backdrop-blur-md border-b border-black/5">
          <div className="flex items-center gap-4 flex-1">
            <Button variant="ghost" size="icon" className="lg:hidden h-10 w-10 rounded-xl bg-white shadow-lg shrink-0" onClick={() => setSidebarOpen(true)}>
              <Menu className="w-5 h-5" />
            </Button>
            <div className="hidden sm:flex items-center bg-white border border-border/50 rounded-[2rem] px-6 py-2 xl:py-3 w-full max-w-[300px] xl:max-w-[450px] shadow-sm focus-within:ring-[8px] focus-within:ring-primary/5 transition-all duration-700 group">
              <Search className="w-4 h-4 text-foreground/30 mr-3 xl:mr-4 group-focus-within:text-primary transition-colors" />
              <input 
                type="text" 
                placeholder="Search artifact chain..." 
                className="bg-transparent border-none outline-none text-xs xl:text-sm w-full font-black placeholder:text-foreground/20 tracking-tight"
              />
              <div className="hidden xl:flex items-center gap-1.5 px-2 py-0.5 bg-accent/50 rounded-md text-[9px] font-black text-foreground/40 opacity-40">
                <Command className="w-3 h-3" /> K
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-6">
            {role === 'worker' && (
              <div className="hidden md:flex items-center gap-4 px-4 py-2 bg-white border border-border/50 rounded-[1.25rem] shadow-sm">
                <div className={`w-2.5 h-2.5 rounded-full ${online ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`} />
                <span className="text-[9px] font-black text-foreground/60 uppercase tracking-[0.2em] italic">
                  {online ? 'Synced' : 'Offline'}
                </span>
                <Switch checked={online} onCheckedChange={setOnline} className="scale-90" />
              </div>
            )}
            
            <div className="flex items-center gap-2 sm:gap-4">
               <Button variant="ghost" size="icon" className="relative hover:bg-white rounded-xl transition-all duration-700 h-10 w-10 sm:h-12 sm:w-12 group">
                <Bell className="w-5 h-5 sm:w-6 sm:h-6 text-foreground/40 group-hover:text-primary" />
                <span className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-primary rounded-full border-[2px] border-white shadow-lg"></span>
              </Button>
            </div>
            
            <div className="flex items-center gap-2 sm:gap-4 border-l border-border/50 pl-3 sm:pl-6">
              <div className="hidden sm:flex flex-col text-right">
                <span className="text-xs xl:text-sm font-black text-foreground tracking-tighter leading-none italic uppercase">{currentUser?.name?.split(' ')[0] || 'Agent'}</span>
                <span className="text-[8px] xl:text-[9px] font-black text-primary uppercase tracking-[0.4em] mt-1 italic opacity-60">Lv. 7</span>
              </div>
              <Avatar className="w-9 h-9 sm:w-11 sm:h-11 xl:w-14 xl:h-14 border-[3px] border-white shadow-lg hover:scale-105 transition-transform duration-700 ring-1 ring-border/10 cursor-pointer">
                <AvatarImage src={`https://picsum.photos/seed/${currentUser?.id || 'agent'}/150`} />
                <AvatarFallback className="bg-primary text-white font-black text-xs sm:text-sm xl:text-lg italic">{currentUser?.name?.substring(0, 2) || 'PA'}</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto px-4 sm:px-8 xl:px-12 py-4 sm:py-8 scroll-smooth custom-scrollbar">
          <div className="max-w-[1500px] mx-auto animate-reveal">
            {children}
          </div>
        </main>
      </div>

      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-3xl" onClick={() => setSidebarOpen(false)}></div>
          <div className="absolute left-0 top-0 bottom-0 w-[280px] bg-black text-white p-6 shadow-3xl animate-in slide-in-from-left duration-700 flex flex-col mesh-gradient-dark animate-mesh-drift">
             <div className="flex justify-between items-center mb-12 shrink-0">
                <Link href="/" onClick={() => setSidebarOpen(false)}>
                  <Logo variant="light" className="w-full" />
                </Link>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 rounded-xl h-10 w-10" onClick={() => setSidebarOpen(false)}>
                  <X className="w-6 h-6" />
                </Button>
             </div>
             <nav className="space-y-2 flex-1 overflow-y-auto custom-scrollbar pr-2">
                {sidebarItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-4 px-6 py-4 rounded-[1.25rem] transition-all ${
                      pathname === item.href 
                      ? 'bg-primary text-white shadow-xl' 
                      : 'hover:bg-white/5 text-white/30 hover:text-white'
                    }`}
                  >
                    {React.cloneElement(item.icon as React.ReactElement, { className: 'w-5 h-5' })}
                    <span className="font-black text-[10px] uppercase tracking-[0.3em] italic">{item.title}</span>
                  </Link>
                ))}
             </nav>
             <button 
                onClick={() => { handleLogout(); setSidebarOpen(false); }}
                className="flex items-center gap-4 px-6 py-6 w-full rounded-[1.25rem] text-red-500/40 hover:bg-red-500/10 transition-all font-black text-[10px] uppercase tracking-[0.4em] mt-8 shrink-0 italic"
              >
                <LogOut className="w-5 h-5" />
                <span>End Session</span>
              </button>
          </div>
        </div>
      )}
    </div>
  );
}
