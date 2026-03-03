
import React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/ui/logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Mail, MapPin, MessageSquare, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-primary selection:text-white grainy-bg overflow-x-hidden">
      <header className="fixed top-0 w-full z-50 p-6 sm:p-10">
        <div className="container mx-auto px-4 lg:px-12 flex justify-between items-center bg-white/60 backdrop-blur-3xl border border-black/5 rounded-2xl h-16 sm:h-20 lg:h-32 px-8 shadow-sm">
          <Link href="/">
            <Logo className="w-48" />
          </Link>
          <Link href="/">
            <Button variant="ghost" className="rounded-full gap-2 font-black uppercase tracking-widest text-[10px] h-12 px-6">
              <ArrowLeft className="w-4 h-4" /> Return to Base
            </Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-6 pt-48 pb-32 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 animate-reveal">
          <section className="space-y-12">
            <div className="space-y-6">
              <p className="text-[11px] font-black uppercase tracking-[0.5em] text-primary">Node Synchronization</p>
              <h1 className="text-6xl lg:text-8xl font-black italic leading-[0.8] tracking-tighter uppercase">Connect <br/>to Node.</h1>
              <p className="text-xl font-bold text-black/50 italic leading-tight pt-8">
                Questions about the protocol? Need dedicated enterprise support? Sync with our support mesh.
              </p>
            </div>

            <div className="space-y-8">
               {[
                 { icon: <Mail />, label: "Protocol Support", val: "ops@carryon.work" },
                 { icon: <Phone />, label: "Direct Line", val: "+91-EXECUTE" },
                 { icon: <MapPin />, label: "Base Node", val: "Greater Noida, Uttar Pradesh" }
               ].map((item, i) => (
                 <div key={i} className="flex gap-6 items-center">
                   <div className="w-12 h-12 rounded-2xl bg-accent/50 flex items-center justify-center text-primary shrink-0 shadow-inner">
                     {item.icon}
                   </div>
                   <div>
                     <p className="text-[10px] font-black uppercase tracking-widest text-black/40">{item.label}</p>
                     <p className="text-lg font-black italic uppercase tracking-tight">{item.val}</p>
                   </div>
                 </div>
               ))}
            </div>
          </section>

          <section className="p-12 rounded-[3.5rem] bg-white border border-black/5 shadow-3xl">
            <form className="space-y-8">
              <div className="space-y-4">
                <Label className="text-[10px] font-black uppercase tracking-widest text-black/40 ml-2">Protocol Identifier</Label>
                <Input placeholder="Your Name" className="h-16 px-6 rounded-2xl border-black/5 bg-accent/20 font-bold italic" />
              </div>
              <div className="space-y-4">
                <Label className="text-[10px] font-black uppercase tracking-widest text-black/40 ml-2">Secure Email</Label>
                <Input type="email" placeholder="agent@network.work" className="h-16 px-6 rounded-2xl border-black/5 bg-accent/20 font-bold italic" />
              </div>
              <div className="space-y-4">
                <Label className="text-[10px] font-black uppercase tracking-widest text-black/40 ml-2">Transmission</Label>
                <Textarea placeholder="What is the mission?" className="min-h-[150px] px-6 py-4 rounded-2xl border-black/5 bg-accent/20 font-bold italic" />
              </div>
              <Button className="w-full h-20 rounded-2xl text-xl font-black italic uppercase tracking-widest btn-premium shadow-xl">
                Initiate Sync <MessageSquare className="w-6 h-6 ml-2" />
              </Button>
            </form>
          </section>
        </div>
      </main>
    </div>
  );
}
