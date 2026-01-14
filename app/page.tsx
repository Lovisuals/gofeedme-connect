import Navbar from '@/components/Navbar';
import PoolCard from '@/components/PoolCard';
import { ArrowRight, ShieldCheck, Heart, Sprout, Tractor } from 'lucide-react';
import { getActivePools, getCompletedPools } from '@/lib/actions';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const activePools = await getActivePools() || [];
  const completedPools = await getCompletedPools() || [];

  return (
    <main className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      
      {/* 1. HERO SECTION: The "GoFundMe" Split Layout */}
      {/* Left: Strong Copy | Right: Emotional Agric Image */}
      <section className="relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 lg:pt-20 lg:pb-28">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            
            {/* TEXT SIDE */}
            <div className="lg:col-span-6 text-left space-y-8">
              <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide">
                <Sprout className="w-4 h-4" />
                <span>Farm-to-Table Crowdfunding</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.05]">
                Feed your home. <br/>
                <span className="text-primary relative inline-block">
                  <span className="relative z-10">Fund the farm.</span>
                  <span className="absolute bottom-2 left-0 w-full h-4 bg-green-100 -z-0"></span>
                </span>
              </h1>
              
              <p className="text-xl text-gray-500 leading-relaxed max-w-lg">
                The trusted place to split bulk food costs. Join forces with neighbors to buy bags of rice, tubers, and livestock directly from farms.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/create" className="bg-primary hover:bg-primary-hover text-white text-lg font-bold px-10 py-5 rounded-xl shadow-xl shadow-primary/20 transition-all hover:-translate-y-1 text-center">
                  Start a Food Pool
                </a>
                <a href="#how-it-works" className="flex items-center justify-center gap-2 bg-white border-2 border-gray-100 hover:border-gray-200 text-gray-700 text-lg font-bold px-10 py-5 rounded-xl transition-all hover:bg-gray-50">
                  <Tractor className="w-5 h-5 text-gray-400" />
                  How it works
                </a>
              </div>
            </div>

            {/* IMAGE SIDE (The "Morphism" Element) */}
            <div className="lg:col-span-6 mt-12 lg:mt-0 relative">
              {/* Main Image with Card Shadow */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white z-10">
                <img 
                  src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=1600&auto=format&fit=crop" 
                  alt="Nigerian Market Woman with Harvest" 
                  className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating "Trust" Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <ShieldCheck className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">Total Food Distributed</p>
                      <p className="text-2xl font-black text-gray-900">₦45.2 Million</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Blob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-green-50/50 rounded-full mix-blend-multiply filter blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS / TRUST BAR (GoFundMe Style) */}
      <div className="border-y border-gray-100 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center gap-3">
              <div className="bg-white p-4 rounded-full shadow-sm">
                 <ShieldCheck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg">100% Escrow Protected</h3>
              <p className="text-gray-500 text-sm max-w-xs">Money is held safely until you confirm pickup of your food items.</p>
            </div>
            <div className="flex flex-col items-center gap-3">
               <div className="bg-white p-4 rounded-full shadow-sm">
                 <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg">Community Verified</h3>
              <p className="text-gray-500 text-sm max-w-xs">Join pools created by real neighbors and verified market hubs.</p>
            </div>
            <div className="flex flex-col items-center gap-3">
               <div className="bg-white p-4 rounded-full shadow-sm">
                 <Sprout className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg">Direct from Farm</h3>
              <p className="text-gray-500 text-sm max-w-xs">Bulk buying allows us to source directly from farmers at wholesale rates.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. ACTIVE POOLS GRID */}
      <section id="pools" className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Trending near Lagos</h2>
            <p className="text-gray-500 mt-2 text-lg">Join these pools before they close.</p>
          </div>
          <a href="/search" className="hidden md:flex text-primary font-bold items-center gap-2 hover:bg-green-50 px-4 py-2 rounded-lg transition-colors">
            View all pools <ArrowRight className="w-5 h-5"/>
          </a>
        </div>
        
        {activePools.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {activePools.map((pool: any) => <PoolCard key={pool.id} pool={pool} />)}
          </div>
        ) : (
          <div className="p-16 text-center bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
             <Sprout className="w-12 h-12 text-gray-300 mx-auto mb-4" />
             <h3 className="text-xl font-bold text-gray-900">No active pools yet</h3>
             <p className="text-gray-500 mb-6">Be the first to start a pool in your area.</p>
             <a href="/create" className="text-primary font-bold hover:underline">Start a Pool &rarr;</a>
          </div>
        )}
      </section>

      {/* 4. SUCCESS STORIES (History) */}
      {completedPools.length > 0 && (
        <section className="bg-gray-50 py-24 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-4 mb-12">
              <div className="h-10 w-1 bg-primary rounded-full"></div>
              <h2 className="text-2xl font-bold text-gray-900">Success Stories (Delivered)</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 opacity-80 hover:opacity-100 transition-opacity">
              {completedPools.map((pool: any) => (
                <div key={pool.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group cursor-pointer hover:shadow-md transition-all">
                  <div className="h-48 bg-gray-200 relative overflow-hidden">
                    <img src={pool.image_url} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt={pool.title} />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                      <span className="bg-white/95 backdrop-blur text-green-700 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" /> Delivered
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-gray-900 leading-tight mb-2 line-clamp-2">{pool.title}</h3>
                    <p className="text-xs text-gray-500 flex items-center gap-1">
                      <ArrowRight className="w-3 h-3" /> {pool.location}
                    </p>
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
