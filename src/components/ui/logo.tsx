'use client';

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'primary';
  hideText?: boolean;
}

/**
 * High-fidelity Logo component with refined scaling for sidebar and header contexts.
 * Uses Orbitron for the brand name specifically.
 */
export function Logo({ className, variant = 'primary', hideText = false }: LogoProps) {
  const textColor = variant === 'light' ? 'text-white' : variant === 'dark' ? 'text-black' : 'text-foreground';
  
  return (
    <div className={cn("flex items-center gap-3 xl:gap-4 group shrink-0 min-w-0", className)}>
      <div className="relative w-8 h-8 sm:w-10 sm:h-10 xl:w-12 xl:h-12 shrink-0 flex items-center justify-center rounded-xl overflow-hidden bg-white/5 border border-white/10">
        {/* Cinematic Background Glow */}
        <div className={cn(
          "absolute inset-0 blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-700",
          variant === 'light' ? "bg-white" : "bg-primary"
        )} />
        
        <div className="relative z-10 w-full h-full transition-all duration-700 group-hover:scale-110 flex items-center justify-center p-1">
          <Image 
            src="/logo-icon.png" 
            alt="CarryonWORK Icon" 
            width={48} 
            height={48} 
            className="object-contain mix-blend-lighten"
            priority
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
          {/* Fallback SVG Icon if image not found */}
          <svg className="absolute inset-0 w-full h-full text-current opacity-0 group-hover:opacity-100 transition-opacity p-2" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 20C12 16.6863 14.6863 14 18 14C21.3137 14 24 16.6863 24 20C24 23.3137 26.6863 26 30 26C33.3137 26 36 23.3137 36 20C36 16.6863 33.3137 14 30 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M28 20C28 23.3137 25.3137 26 22 26C18.6863 26 16 23.3137 16 20C16 16.6863 13.3137 14 10 14C6.68629 14 4 16.6863 4 20C4 23.3137 6.68629 26 10 26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
      
      {!hideText && (
        <div className="flex flex-col leading-tight min-w-0">
          <span className={cn(
            "text-sm sm:text-lg xl:text-2xl font-brand font-bold tracking-[0.05em] uppercase truncate",
            textColor
          )}>
            CARRYON<span className="text-primary font-black">WORK</span>
          </span>
          <span className={cn(
            "text-[6px] sm:text-[8px] xl:text-[10px] font-body font-black uppercase tracking-[0.3em] xl:tracking-[0.4em] opacity-30 italic truncate",
            textColor
          )}>
            Execution Protocol
          </span>
        </div>
      )}
    </div>
  );
}
