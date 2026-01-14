'use client';

import Link from 'next/link';
import { Search, Menu, UserCircle, HeartHandshake, Heart, Megaphone } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { createBrowserClient } from '@supabase/ssr';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const { toggleTheme, isOpayMode } = useTheme();
  const [user, setUser] = useState<any>(null);
  const router = useRouter();
  
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

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    router.refresh();
  };

  return (
    <nav className="bg-primary shadow-lg sticky top-0 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 relative flex items-center justify-between text-white">
        
        {/* LEFT: Powerful SEARCH Button */}
        <div className="flex items-center">
          <Link href="/search" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-4 py-2.5 rounded-full transition-all active:scale-95">
            <Search className="w-5 h-5" />
            <span className="hidden md:inline">Search</span>
          </Link>
        </div>

        {/* CENTER: The "Nature-Blend" Circle Logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <Link href="/" className="group flex flex-col items-center justify-center" onDoubleClick={toggleTheme}> 
             <div className="bg-white p-3 rounded-full shadow-xl group-hover:scale-105 transition-transform duration-300 ring-4 ring-white/30">
               <HeartHandshake className="w-8 h-8 text-primary fill-primary/10" />
             </div>
             <div className="mt-1 flex flex-col leading-none text-center">
               <span className="text-lg font-extrabold tracking-tight text-white drop-shadow-md">
                 GoFeedMe
               </span>
               <span className="text-[10px] font-bold text-white/90 uppercase tracking-widest">Connect</span>
             </div>
             {isOpayMode && (
               <span className="absolute -top-2 -right-4 bg-[#1DC9A0] text-white text-[9px] px-2 py-0.5 rounded-full font-bold shadow-sm border border-white">
                 OPAY
               </span>
             )}
          </Link>
        </div>

        {/* RIGHT: Powerful DONATE & FUNDRAISE Buttons */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Donate Button (Secondary) */}
          <Link href="/donate" className="hidden md:flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-4 py-2.5 rounded-full transition-all active:scale-95">
            <Heart className="w-5 h-5" />
            <span>Donate</span>
          </Link>

          {/* Fundraise Button (Primary - White Pop) */}
          <Link 
            href="/create" 
            className="flex items-center gap-2 bg-white text-primary hover:bg-gray-50 font-bold px-5 py-3 rounded-full shadow-md transition-all hover:shadow-lg active:scale-95"
          >
            <Megaphone className="w-5 h-5" />
            <span className="hidden md:inline">Fundraise</span>
            <span className="md:hidden">Start</span>
          </Link>

          {/* User Profile Link (Minimalist) */}
          {user ? (
             <Link href="/dashboard" className="hidden md:flex ml-2 p-1 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white/90 hover:text-white" title="Dashboard">
                <UserCircle className="w-7 h-7" />
             </Link>
          ) : (
             <Link href="/auth/login" className="hidden md:flex ml-2 p-1 text-white/90 hover:text-white transition-colors" title="Sign In">
               <UserCircle className="w-7 h-7" />
             </Link>
          )}

          {/* Mobile Menu Button (White) */}
          <button className="md:hidden p-2 text-white/90 hover:text-white">
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </div>
    </nav>
  );
}
