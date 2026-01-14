import Navbar from '@/components/Navbar';
import PoolCard from '@/components/PoolCard';
import { ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { getActivePools, getCompletedPools } from '@/lib/actions';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const activePools = await getActivePools() || [];
  const completedPools = await getCompletedPools() || [];

  return (
    <main className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      
      {/* BRAND HERO SECTION */}
      <section className="relative bg-[#02a95c] text-white pt-16 pb-24 px-4 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="flex-1 text-center md:text-left space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]">
              Your food. <br/>
              <span className="text-[#a5f3d1]">Funded together.</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-lg mx-auto md:mx-0">
              The trusted place to split bulk food costs with neighbors. Beat inflation by buying as a team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <a href="/create" className="bg-[#fcb449] hover:bg-[#e5a33e] text-gray-900 font-bold text-lg px-8 py-4 rounded-xl shadow-lg transition-transform hover:-translate-y-1">
                Start a Feed Pool
              </a>
              <a href="#pools" className="bg-white/10 hover:bg-white/20 text-white font-bold text-lg px-8 py-4 rounded-xl backdrop-blur-sm transition-colors">
                How it works
              </a>
            </div>
          </div>
          
          <div className="hidden md:block flex-1">
            <img 
              src="https://images.unsplash.com/photo-1576613109753-27804de2cba8?auto=format&fit=crop&q=80&w=800" 
              alt="Community Sharing" 
              className="rounded-2xl shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500 border-4 border-white/20"
            />
          </div>
        </div>
      </section>

      {/* TRUST BANNER */}
      <div className="border-b border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto py-4 px-4 flex justify-center gap-8 text-sm text-gray-500 font-medium">
          <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-green-600" /> 100% Escrow Protection</span>
          <span className="hidden sm:flex items-center gap-2"><Heart className="w-4 h-4 text-green-600" /> Verified Sellers Only</span>
        </div>
      </div>

      {/* ACTIVE POOLS GRID */}
      <section id="pools" className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Trending near Lagos</h2>
          <a href="/search" className="text-primary font-bold flex items-center text-sm hover:underline hover:bg-primary-light px-3 py-2 rounded-lg transition-colors">
            View all <ArrowRight className="w-4 h-4 ml-1"/>
          </a>
        </div>
        
        {activePools.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activePools.map((pool: any) => <PoolCard key={pool.id} pool={pool} />)}
          </div>
        ) : (
          <div className="p-12 text-center bg-gray-50 rounded-xl border border-dashed border-gray-200">
             <p className="text-gray-500">No active pools found. Start one today!</p>
          </div>
        )}
      </section>

      {/* SUCCESS STORIES (Gray Background) */}
      {completedPools.length > 0 && (
        <section className="bg-gray-50 py-16 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Recent Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {completedPools.map((pool: any) => (
                <div key={pool.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden opacity-90 hover:opacity-100 transition-opacity">
                  <div className="h-32 bg-gray-200 relative">
                    <img src={pool.image_url} className="w-full h-full object-cover" alt={pool.title} />
                    <div className="absolute top-2 right-2 bg-green-100 text-green-800 text-[10px] font-bold px-2 py-1 rounded-full border border-green-200">
                      DELIVERED
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-sm text-gray-900 truncate">{pool.title}</h3>
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
