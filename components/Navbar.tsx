'use client';

import Link from 'next/link';
import { Search, Menu, User, HeartHandshake } from 'lucide-react';
import { createBrowserClient } from '@supabase/ssr';
import { useEffect, useState } from 'react';

export default function Navbar() {
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
    <nav className="bg-white/95 backdrop-blur-sm fixed w-full z-50 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* LEFT: Logo & Desktop Search */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 group"> 
             <HeartHandshake className="w-8 h-8 text-primary" />
             <span className="text-xl font-bold tracking-tight text-gray-text">
               GoFeedMe
             </span>
          </Link>

          <div className="hidden md:flex relative w-64 lg:w-80">
             <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
             <input 
               type="text" 
               placeholder="Search pools..." 
               className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all hover:bg-gray-100"
             />
          </div>
        </div>

        {/* RIGHT: Actions (Exact GFM Button Style) */}
        <div className="flex items-center gap-4">
          <Link href="/search" className="hidden md:block text-sm font-medium text-gray-600 hover:text-gray-900">
            Discover
          </Link>
          
          <div className="h-4 w-px bg-gray-300 hidden md:block"></div>
          
          {user ? (
             <Link href="/dashboard" className="text-sm font-medium text-gray-600 hover:text-gray-900">
               Dashboard
             </Link>
          ) : (
             <Link href="/auth/login" className="text-sm font-medium text-gray-600 hover:text-gray-900">
               Sign in
             </Link>
          )}

          <Link 
            href="/create" 
            className="bg-primary hover:bg-primary-hover text-white text-sm font-bold px-6 py-2.5 rounded-lg shadow-sm transition-transform active:scale-95"
          >
            Start a GoFeedMe
          </Link>
        </div>
      </div>
    </nav>
  );
}
