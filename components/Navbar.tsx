'use client';

import Link from 'next/link';
import { Search, UserCircle } from 'lucide-react';
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
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        <div className="flex items-center gap-4">
          <Link href="/" className="flex flex-col leading-none group select-none" onDoubleClick={toggleTheme}> 
            <div className="flex items-center gap-1">
               <span className="text-2xl font-bold text-primary tracking-tight transition-colors">GoFeedMe</span>
               {isOpayMode && (
                 <span className="bg-[#E8FBF5] text-[#1DC9A0] text-[10px] px-1.5 py-0.5 rounded border border-[#1DC9A0] font-bold animate-in fade-in zoom-in">
                   PARTNER
                 </span>
               )}
            </div>
            <span className="text-xs text-gray-text font-medium tracking-wider uppercase">Connect</span>
          </Link>
        </div>

        <div className="hidden md:flex flex-1 max-w-md mx-8 relative">
          <input 
            type="text" 
            placeholder="Search by hub (e.g., 'Tejuosho Market')..." 
            className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-light border-transparent focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
          />
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
        </div>

        <div className="flex items-center space-x-4">
          {user ? (
             <div className="flex items-center gap-4">
                <Link href="/dashboard" className="text-sm font-bold text-gray-700">Dashboard</Link>
                <button onClick={handleSignOut} className="text-sm text-gray-500 hover:text-red-500">Sign Out</button>
             </div>
          ) : (
             <Link href="/auth/login" className="hidden md:flex text-gray-600 hover:text-black font-medium text-sm items-center gap-1">
               <UserCircle className="w-5 h-5" /> Sign In
             </Link>
          )}
          
          <Link 
            href="/create" 
            className="bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-lg font-bold text-sm shadow-md transition-colors"
          >
            Start a Pool
          </Link>
        </div>
      </div>
    </nav>
  );
}
