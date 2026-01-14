import Navbar from '@/components/Navbar';
import PoolCard from '@/components/PoolCard';
import { ArrowRight, ShieldCheck, Database, CheckCircle2 } from 'lucide-react';
import { getActivePools, getCompletedPools } from '@/lib/actions';
import { Pool } from '@/types';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const activePools = await getActivePools() || [];
  const completedPools = await getCompletedPools() || [];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* HERO */}
      <section className="relative bg-[#F8F8F8] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Bulk buying made <span className="text-primary">simple</span>.
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join neighbors and coworkers to split the cost of food. 
            We hold your money in escrow until you get your share.
          </p>
          <a href="/create" className="inline-block bg-primary hover:bg-primary-hover text-white text-lg font-bold px-10 py-4 rounded-xl shadow-lg transition-transform active:scale-95">
            Start a Feed Pool
          </a>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span>Bank-grade Escrow Protection</span>
          </div>
        </div>
      </section>

      {/* ACTIVE POOLS */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Trending Near Lagos</h2>
          <a href="/search" className="text-primary font-bold flex items-center text-sm hover:underline">
            View All <ArrowRight className="w-4 h-4 ml-1"/>
          </a>
        </div>
        
        {activePools.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activePools.map((pool: any) => <PoolCard key={pool.id} pool={pool} />)}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
              <Database className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-gray-900">No active pools</h3>
            <p className="text-gray-500 mb-4">Be the first to start one!</p>
          </div>
        )}
      </section>

      {/* TRUST HISTORY (Completed Pools) */}
      {completedPools.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 pb-20 pt-8 border-t border-gray-100">
          <div className="flex items-center gap-2 mb-8">
            <CheckCircle2 className="w-6 h-6 text-green-600" />
            <h2 className="text-xl font-bold text-gray-800">Recently Completed (Success Stories)</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 opacity-80 hover:opacity-100 transition-opacity">
            {completedPools.map((pool: any) => (
              <div key={pool.id} className="bg-gray-50 rounded-xl border border-gray-100 overflow-hidden grayscale hover:grayscale-0 transition-all">
                <div className="h-32 bg-gray-200 relative">
                  {/* We use a standard img tag here for simplicity in history view */}
                  <img src={pool.image_url} className="w-full h-full object-cover" alt={pool.title} />
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                    <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Delivered
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-sm text-gray-700 truncate">{pool.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">{pool.location}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
