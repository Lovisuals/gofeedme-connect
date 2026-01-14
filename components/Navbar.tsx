'use client';

import Link from 'next/link';
import { Search, Menu, UserCircle, HeartHandshake, Heart, Megaphone, Sprout } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { createBrowserClient } from '@supabase/ssr';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const { toggleTheme, isOpayMode } = useTheme();
  const [user, setUser] = useState<any>(null);
  
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };
    getUser();
  }, [supabase]);

  return (
    <nav className="bg-primary relative z-50 shadow-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 h-20 relative flex items-center justify-between">
        
        {/* LEFT: Search & Explore (Glass Effect) */}
        <div className="flex items-center gap-4">
          <Link href="/search" className="hidden md:flex items-center gap-2 bg-black/10 hover:bg-black/20 text-white px-5 py-2.5 rounded-full transition-all backdrop-blur-md border border-white/10">
            <Search className="w-4 h-4" />
            <span className="text-sm font-bold">Search Pools</span>
          </Link>
          <button className="md:hidden text-white">
            <Search className="w-6 h-6" />
          </button>
        </div>

        {/* CENTER: The "Nature-Heart" Brand Seal */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <Link href="/" className="group flex flex-col items-center justify-center transform transition-transform hover:scale-105" onDoubleClick={toggleTheme}> 
             <div className="bg-white p-4 rounded-full shadow-floating ring-4 ring-white/20 relative">
               <div className="absolute inset-0 rounded-full border border-primary/20 animate-pulse"></div>
               <HeartHandshake className="w-8 h-8 text-primary fill-current" />
             </div>
             {/* Text Below Logo for "Psychological Rooting" */}
             <div className="absolute top-16 w-40 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pt-2">
                <span className="text-[10px] font-bold text-white uppercase tracking-[0.2em] bg-black/20 px-2 py-1 rounded-full backdrop-blur-sm">
                  Connect & Feed
                </span>
             </div>
          </Link>
        </div>

        {/* RIGHT: The Powerful Action Triad */}
        <div className="flex items-center gap-3 md:gap-4">
          
          {/* 1. Donate (Secondary) */}
          <Link href="/donate" className="hidden md:flex items-center gap-2 text-white/90 hover:text-white font-bold text-sm px-3 py-2 transition-colors">
            <Heart className="w-4 h-4" />
            <span>Donate</span>
          </Link>

          {/* 2. Fundraise (Primary - Pop) */}
          <Link 
            href="/create" 
            className="flex items-center gap-2 bg-white text-primary hover:bg-gray-50 font-extrabold text-sm px-6 py-3 rounded-full shadow-lg transition-transform hover:-translate-y-0.5 active:scale-95"
          >
            <Sprout className="w-4 h-4 fill-current" />
            <span className="hidden md:inline">Start a Pool</span>
            <span className="md:hidden">Start</span>
          </Link>

          {/* 3. User / Menu */}
          {user ? (
             <Link href="/dashboard" className="hidden md:flex ml-2 p-2 bg-white/10 rounded-full hover:bg-white/20 text-white">
                <UserCircle className="w-6 h-6" />
             </Link>
          ) : (
             <Link href="/auth/login" className="hidden md:flex text-sm font-bold text-white/80 hover:text-white px-2">
               Sign In
             </Link>
          )}

          <button className="md:hidden p-1 text-white">
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </div>
      
      {/* Decorative Organic Wave at bottom of Navbar */}
      <div className="absolute -bottom-4 left-0 w-full h-4 overflow-hidden leading-none z-40">
         <svg className="block w-full h-full text-primary" viewBox="0 0 1200 120" preserveAspectRatio="none">
             <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-white"></path>
             <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-white"></path>
             <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-white"></path>
         </svg>
      </div>
    </nav>
  );
}
