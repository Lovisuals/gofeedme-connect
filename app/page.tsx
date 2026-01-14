import Navbar from '@/components/Navbar';
import PoolCard from '@/components/PoolCard';
import { ArrowRight, ShieldCheck, Sprout, Users, Wheat, Beef } from 'lucide-react';
import { getActivePools, getCompletedPools } from '@/lib/actions';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const activePools = await getActivePools() || [];
  const completedPools = await getCompletedPools() || [];

  return (
    <main className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Navbar />
      
      {/* SOURCE CODE INSPIRED: Hero with Floating Bubbles Concept */}
      <section className="relative bg-white pt-24 pb-32 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[100px]"></div>
            <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-accent/10 blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
           {/* The "Floating Bubbles" - Categories */}
           <div className="flex justify-center gap-4 mb-8 opacity-80 animate-fade-in-up">
              <span className="flex items-center gap-1 bg-green-50 text-primary-dark px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-green-100 shadow-sm">
                <Wheat className="w-3 h-3" /> Staples
              </span>
              <span className="flex items-center gap-1 bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-orange-100 shadow-sm">
                <Beef className="w-3 h-3" /> Proteins
              </span>
              <span className="flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-100 shadow-sm">
                <Sprout className="w-3 h-3" /> Fresh
              </span>
           </div>

           <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 leading-[1.1]">
             The #1 platform for <br/>
             <span className="text-primary relative">
               food crowd-buying.
               <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent/40" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" /></svg>
             </span>
           </h1>
           
           <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
             Join 100,000+ Nigerians fighting food inflation. Pool funds with neighbors to buy bags of rice, beans, and livestock at wholesale farm prices.
           </p>

           <div className="flex flex-col sm:flex-row justify-center gap-4">
             <a href="/create" className="bg-accent hover:bg-yellow-400 text-gray-900 text-lg font-bold px-10 py-4 rounded-full shadow-xl shadow-accent/20 transition-all hover:-translate-y-1">
               Start a Food Pool
             </a>
             <a href="#active-pools" className="flex items-center justify-center gap-2 bg-white text-gray-700 text-lg font-bold px-10 py-4 rounded-full border border-gray-200 shadow-sm hover:bg-gray-50 transition-all">
               <Search className="w-5 h-5" /> Find a Hub
             </a>
           </div>
        </div>
      </section>

      {/* ACTIVE POOLS GRID */}
      <section id="active-pools" className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <span className="w-2 h-8 bg-primary rounded-full"></span>
              Trending near Lagos
            </h2>
          </div>
          <a href="/search" className="text-primary font-bold flex items-center hover:underline">
            View all <ArrowRight className="w-4 h-4 ml-1"/>
          </a>
        </div>
        
        {activePools.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activePools.map((pool: any) => <PoolCard key={pool.id} pool={pool} />)}
          </div>
        ) : (
          <div className="p-16 text-center bg-white rounded-3xl border-2 border-dashed border-gray-200">
             <Sprout className="w-16 h-16 text-gray-300 mx-auto mb-4" />
             <h3 className="text-xl font-bold text-gray-900">No active pools yet</h3>
             <a href="/create" className="text-primary font-bold hover:underline">Start the first pool &rarr;</a>
          </div>
        )}
      </section>
    </main>
  );
}
