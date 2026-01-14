import Navbar from '@/components/Navbar';
import PoolCard from '@/components/PoolCard';
import { ArrowRight, ShieldCheck, Zap, Users } from 'lucide-react';
import { getActivePools, getCompletedPools } from '@/lib/actions';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const activePools = await getActivePools() || [];
  const completedPools = await getCompletedPools() || [];

  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />
      
      {/* VISUAL HERO SECTION */}
      <section className="relative bg-[#02a95c] overflow-hidden">
        {/* Background Pattern/Image Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/food.png')]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:py-32 flex flex-col md:flex-row items-center gap-12">
          
          <div className="flex-1 text-center md:text-left text-white space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-bold border border-white/20">
              <Zap className="w-4 h-4 text-yellow-300 fill-yellow-300" />
              <span>#1 Food Pooling App in Lagos</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
              Beat inflation. <br/>
              <span className="text-[#a5f3d1]">Buy together.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 max-w-xl leading-relaxed">
              Join trusted neighbors to split the cost of bags of Rice, Beans, and Proteins. 
              Secure escrow payments mean you never lose money.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <a href="/create" className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-full font-bold text-lg shadow-xl transition-transform hover:-translate-y-1">
                Start a Feed Pool
              </a>
              <a href="#active-pools" className="px-8 py-4 rounded-full font-bold text-white border-2 border-white/30 hover:bg-white/10 transition-colors">
                Find a Hub Near Me
              </a>
            </div>
          </div>

          {/* Hero Image / Illustration */}
          <div className="hidden md:block flex-1 relative">
             <div className="relative z-10 bg-white p-2 rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
               <img 
                 src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop" 
                 alt="Happy shoppers" 
                 className="rounded-xl w-full h-[400px] object-cover"
               />
               <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-3 rounded-xl shadow-lg flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <ShieldCheck className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase">Trusted By</p>
                    <p className="text-sm font-bold text-gray-900">2,000+ Lagosians</p>
                  </div>
               </div>
             </div>
             {/* Decorative blob */}
             <div className="absolute top-10 -right-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          </div>

        </div>
      </section>

      {/* STATS BAR */}
      <div className="border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-wrap justify-center md:justify-between gap-8 text-center md:text-left">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-gray-300" />
            <div>
              <p className="font-bold text-gray-900">GoFeedMe Guarantee</p>
              <p className="text-xs text-gray-500">Refund if not delivered</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Users className="w-8 h-8 text-gray-300" />
            <div>
              <p className="font-bold text-gray-900">Community Verified</p>
              <p className="text-xs text-gray-500">Real profiles, real humans</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Zap className="w-8 h-8 text-gray-300" />
            <div>
              <p className="font-bold text-gray-900">Fast Pickup</p>
              <p className="text-xs text-gray-500">Hubs in 12+ Locations</p>
            </div>
          </div>
        </div>
      </div>

      {/* ACTIVE POOLS GRID */}
      <section id="active-pools" className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Trending near you</h2>
            <p className="text-gray-500 mt-2">Join these pools before they close.</p>
          </div>
          <a href="/search" className="hidden md:flex text-primary font-bold items-center gap-1 hover:underline">
            View All Pools <ArrowRight className="w-4 h-4"/>
          </a>
        </div>
        
        {activePools.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activePools.map((pool: any) => <PoolCard key={pool.id} pool={pool} />)}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-300">
            <div className="inline-flex bg-white p-4 rounded-full shadow-sm mb-4">
              <Users className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">No active pools yet</h3>
            <p className="text-gray-500 mb-6">Be the first to start a pool in your area.</p>
            <a href="/create" className="text-primary font-bold hover:underline">Start a Pool &rarr;</a>
          </div>
        )}
      </section>

      {/* TRUST HISTORY (Success Stories) */}
      {completedPools.length > 0 && (
        <section className="bg-gray-50 py-20 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-2 mb-10">
              <div className="bg-green-100 p-2 rounded-full">
                <ShieldCheck className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Success Stories</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {completedPools.map((pool: any) => (
                <div key={pool.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all group">
                  <div className="h-40 bg-gray-200 relative overflow-hidden">
                    <img src={pool.image_url} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={pool.title} />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <span className="bg-white/90 backdrop-blur text-green-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" /> Delivered
                      </span>
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
