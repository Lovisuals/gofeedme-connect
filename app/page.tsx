import Navbar from '@/components/Navbar';
import PoolCard from '@/components/PoolCard';
import { ArrowRight, ShieldCheck, Zap, Users, Wheat, Beef, Sprout } from 'lucide-react';
import { getActivePools, getCompletedPools } from '@/lib/actions';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const activePools = await getActivePools() || [];
  const completedPools = await getCompletedPools() || [];

  return (
    <main className="min-h-screen bg-white font-sans text-gray-text">
      <Navbar />
      
      {/* 1. HERO BUBBLES SECTION */}
      {/* Mimics the 'hero-bubbles' container with floating visuals */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        
        {/* Floating Bubble Images (Absolute Positioned) */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none opacity-90">
           {/* Top Left - Rice */}
           <img src="https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=200&h=200" 
                className="absolute top-24 left-[10%] w-24 h-24 rounded-full object-cover shadow-float animate-bounce-slow" style={{animationDuration: '3s'}} />
           {/* Bottom Left - Oil */}
           <img src="https://images.unsplash.com/photo-1474979266404-7eaacbcd391f?auto=format&fit=crop&w=200&h=200" 
                className="absolute bottom-10 left-[15%] w-32 h-32 rounded-full object-cover shadow-float animate-bounce-slow" style={{animationDuration: '4s'}} />
           {/* Top Right - Tubers */}
           <img src="https://images.unsplash.com/photo-1610450918386-0925c4046462?auto=format&fit=crop&w=200&h=200" 
                className="absolute top-28 right-[12%] w-28 h-28 rounded-full object-cover shadow-float animate-bounce-slow" style={{animationDuration: '3.5s'}} />
           {/* Bottom Right - Livestock */}
           <img src="https://images.unsplash.com/photo-1541447233767-f01878d6b7b2?auto=format&fit=crop&w=200&h=200" 
                className="absolute bottom-20 right-[18%] w-20 h-20 rounded-full object-cover shadow-float animate-bounce-slow" style={{animationDuration: '4.5s'}} />
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
           <h2 className="text-gray-light font-bold text-sm uppercase tracking-widest mb-4">
             #1 Food Crowdfunding Platform
           </h2>
           <h1 className="text-5xl md:text-6xl font-bold text-gray-text mb-6 leading-tight">
             Successful food pools <br/> start here.
           </h1>
           <div className="flex justify-center">
             <a href="/create" className="bg-primary hover:bg-primary-hover text-white text-lg font-bold px-10 py-4 rounded-lg shadow-lg transition-transform hover:-translate-y-1">
               Start a GoFeedMe
             </a>
           </div>
        </div>
      </section>

      {/* 2. STATS BAR (Exact Divider Look) */}
      <div className="border-y border-gray-100 bg-white">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            <div className="p-4 text-center">
              <div className="flex justify-center mb-2"><Zap className="w-6 h-6 text-gray-400" /></div>
              <p className="font-bold text-gray-text">Fast & Easy</p>
              <p className="text-sm text-gray-light">Start a pool in minutes</p>
            </div>
            <div className="p-4 text-center">
               <div className="flex justify-center mb-2"><ShieldCheck className="w-6 h-6 text-gray-400" /></div>
              <p className="font-bold text-gray-text">100% Guaranteed</p>
              <p className="text-sm text-gray-light">Funds held in escrow</p>
            </div>
            <div className="p-4 text-center">
               <div className="flex justify-center mb-2"><Users className="w-6 h-6 text-gray-400" /></div>
              <p className="font-bold text-gray-text">Community Trust</p>
              <p className="text-sm text-gray-light">Verified sellers only</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. CATEGORY BUBBLES (Goal Rings) */}
      <section className="py-16 bg-gray-50">
         <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-text mb-8">Discover pools by category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
               {/* Staple Foods */}
               <div className="bg-white p-6 rounded-xl shadow-card text-center group hover:shadow-md transition-shadow cursor-pointer border border-transparent hover:border-primary/20">
                  <div className="w-16 h-16 mx-auto bg-accent-light rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                     <Wheat className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-gray-text">Staples</h3>
               </div>
               {/* Proteins */}
               <div className="bg-white p-6 rounded-xl shadow-card text-center group hover:shadow-md transition-shadow cursor-pointer border border-transparent hover:border-primary/20">
                  <div className="w-16 h-16 mx-auto bg-accent-light rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                     <Beef className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-gray-text">Proteins</h3>
               </div>
               {/* Fresh */}
               <div className="bg-white p-6 rounded-xl shadow-card text-center group hover:shadow-md transition-shadow cursor-pointer border border-transparent hover:border-primary/20">
                  <div className="w-16 h-16 mx-auto bg-accent-light rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                     <Sprout className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-gray-text">Fresh Produce</h3>
               </div>
               {/* Community */}
               <div className="bg-white p-6 rounded-xl shadow-card text-center group hover:shadow-md transition-shadow cursor-pointer border border-transparent hover:border-primary/20">
                  <div className="w-16 h-16 mx-auto bg-accent-light rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                     <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-gray-text">Community</h3>
               </div>
            </div>
         </div>
      </section>

      {/* 4. ACTIVE POOLS GRID */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-text">Trending near Lagos</h2>
          <a href="/search" className="text-gray-light font-medium hover:text-primary transition-colors flex items-center text-sm">
            View all <ArrowRight className="w-4 h-4 ml-1"/>
          </a>
        </div>
        
        {activePools.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activePools.map((pool: any) => <PoolCard key={pool.id} pool={pool} />)}
          </div>
        ) : (
          <div className="p-12 text-center bg-gray-50 rounded-xl border border-dashed border-gray-200">
             <h3 className="text-lg font-bold text-gray-text">No active pools yet</h3>
             <a href="/create" className="text-primary font-bold hover:underline">Be the first to start one</a>
          </div>
        )}
      </section>
    </main>
  );
}
