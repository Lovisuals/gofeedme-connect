import Navbar from '@/components/Navbar';
import PoolCard from '@/components/PoolCard';
import { ArrowRight, ShieldCheck, Sprout, Users, Tractor } from 'lucide-react';
import { getActivePools, getCompletedPools } from '@/lib/actions';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const activePools = await getActivePools() || [];
  const completedPools = await getCompletedPools() || [];

  return (
    <main className="min-h-screen bg-gray-50 font-sans text-gray-dark">
      <Navbar />
      
      {/* HERO SECTION: The "Trust & Emotion" Split */}
      <section className="bg-white border-b border-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            
            {/* Left: The "Call to Action" */}
            <div className="lg:col-span-6 text-left space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary-light text-primary-hover px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                <Sprout className="w-4 h-4" />
                <span>Verified Farm Pools</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-gray-900">
                Feed your home. <br/>
                <span className="text-primary">Fund the farm.</span>
              </h1>
              
              <p className="text-lg text-gray-text leading-relaxed max-w-lg">
                Join trusted neighbors to buy bulk food directly from the source. 
                Split the cost of a bag of rice, a cow, or a harvest. 
                <span className="block mt-2 font-medium text-gray-900">
                  <ShieldCheck className="w-4 h-4 inline mb-1 text-primary"/> Funds held in escrow until delivery.
                </span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="/create" className="bg-primary hover:bg-primary-hover text-white text-lg font-bold px-8 py-4 rounded-xl shadow-lg transition-transform hover:-translate-y-1 text-center flex items-center justify-center gap-2">
                  Start a Pool
                </a>
                <a href="#how-it-works" className="bg-white border-2 border-gray-100 hover:border-gray-200 text-gray-700 font-bold px-8 py-4 rounded-xl transition-colors text-center flex items-center justify-center gap-2">
                  <Tractor className="w-5 h-5 text-gray-400" />
                  How it works
                </a>
              </div>
            </div>

            {/* Right: The "Visual Proof" */}
            <div className="lg:col-span-6 mt-12 lg:mt-0 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-card border-[6px] border-white z-10 rotate-1 hover:rotate-0 transition-all duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=1600&auto=format&fit=crop" 
                  alt="Farmers Market Harvest" 
                  className="w-full h-[500px] object-cover"
                />
                
                {/* Floating Stat Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-xl shadow-lg border border-gray-50 flex items-center gap-4">
                  <div className="bg-primary-light p-3 rounded-full">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Community Power</p>
                    <p className="text-xl font-black text-gray-900">2,400+ Families Fed</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ACTIVE POOLS GRID */}
      <section id="pools" className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Trending Near Lagos</h2>
            <p className="text-gray-text mt-1">Join a bulk purchase before slots fill up.</p>
          </div>
          <a href="/search" className="hidden md:flex text-primary font-bold items-center gap-1 hover:underline">
            See all <ArrowRight className="w-4 h-4"/>
          </a>
        </div>
        
        {activePools.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activePools.map((pool: any) => <PoolCard key={pool.id} pool={pool} />)}
          </div>
        ) : (
          <div className="p-12 text-center bg-white rounded-2xl border border-dashed border-gray-200 shadow-sm">
             <Sprout className="w-12 h-12 text-gray-300 mx-auto mb-4" />
             <h3 className="text-lg font-bold text-gray-900">No active pools yet</h3>
             <p className="text-gray-500 mb-6">Be the leader your community needs.</p>
             <a href="/create" className="text-primary font-bold hover:underline">Start the first pool &rarr;</a>
          </div>
        )}
      </section>

      {/* TRUST HISTORY (Success Stories) */}
      {completedPools.length > 0 && (
        <section className="bg-white border-t border-gray-100 py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-primary" />
              Recent Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {completedPools.map((pool: any) => (
                <div key={pool.id} className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-card transition-all cursor-pointer">
                  <div className="h-40 bg-gray-100 relative overflow-hidden">
                    <img src={pool.image_url} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={pool.title} />
                    <div className="absolute top-2 right-2 bg-white/90 backdrop-blur text-primary text-[10px] font-bold px-2 py-1 rounded-md shadow-sm">
                      DELIVERED
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 text-sm truncate">{pool.title}</h3>
                    <p className="text-xs text-gray-500 mt-1">{pool.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
