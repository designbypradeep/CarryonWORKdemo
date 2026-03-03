
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Logo } from '@/components/ui/logo';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BookOpen, Clock, ArrowRight } from 'lucide-react';

export default function BlogsPage() {
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
        <section className="space-y-16 animate-reveal">
          <div className="space-y-6 text-center">
            <p className="text-[11px] font-black uppercase tracking-[0.5em] text-primary">Execution Insights</p>
            <h1 className="text-6xl lg:text-9xl font-black italic leading-[0.8] tracking-tighter uppercase">The Ledger <br/>Blogs.</h1>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Why the Resume is Dead in 2026", 
                excerpt: "Traditional hiring is theater. Artifacts are the only reality.",
                author: "Rahul Rajput",
                date: "2 Days Ago",
                image: "https://picsum.photos/seed/blog1/800/600"
              },
              { 
                title: "Understanding Vault Security", 
                excerpt: "How CarryonWORK eliminates settlement risk for every worker.",
                author: "Protocol Team",
                date: "1 Week Ago",
                image: "https://picsum.photos/seed/blog2/800/600"
              },
              { 
                title: "The Fresher Pathway to Independence", 
                excerpt: "How to move from Low-Risk tasks to Mission Critical execution.",
                author: "Skill Mesh Node",
                date: "2 Weeks Ago",
                image: "https://picsum.photos/seed/blog3/800/600"
              }
            ].map((post, i) => (
              <div key={i} className="group rounded-[2.5rem] bg-white border border-black/5 overflow-hidden hover:shadow-2xl transition-all duration-700 flex flex-col h-full">
                <div className="aspect-video relative overflow-hidden">
                   <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                </div>
                <div className="p-10 space-y-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-black/40">
                    <span className="flex items-center gap-2"><Clock className="w-3 h-3" /> {post.date}</span>
                    <span className="text-primary">{post.author}</span>
                  </div>
                  <h3 className="text-2xl font-black italic uppercase leading-tight group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-sm font-bold text-black/40 italic leading-relaxed">{post.excerpt}</p>
                  <div className="mt-auto pt-6">
                    <Button variant="ghost" className="p-0 hover:bg-transparent text-primary font-black uppercase tracking-widest text-[10px] gap-2 italic">
                      Read Protocol <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
