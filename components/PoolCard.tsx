import Link from 'next/link';
import { MapPin, User, CheckCircle2 } from 'lucide-react';
import { Pool } from '@/types';
import { formatNaira, calculateProgress, cn } from '@/lib/utils';

export default function PoolCard({ pool }: { pool: Pool }) {
  const progress = calculateProgress(pool.slots_filled, pool.slots_total);
  const isCompleted = pool.status === 'completed';

  return (
    <Link href={`/pools/${pool.id}`} className="group block h-full">
      <div className={cn(
        "h-full flex flex-col bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
        isCompleted && "opacity-80 grayscale hover:grayscale-0 hover:opacity-100"
      )}>
        {/* Image Section */}
        <div className="relative h-48 w-full bg-gray-100 overflow-hidden">
          <img 
            src={pool.image_url} 
            alt={pool.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-700 shadow-sm flex items-center gap-1">
             <MapPin className="w-3 h-3 text-primary" /> {pool.location}
          </div>
          {isCompleted && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="bg-green-500 text-white px-4 py-1.5 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg">
                <CheckCircle2 className="w-4 h-4" /> COMPLETED
              </span>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-5 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-2">
            <span className="inline-block px-2.5 py-0.5 rounded-md bg-gray-100 text-gray-600 text-[10px] uppercase tracking-wider font-bold">
              {pool.category}
            </span>
            {pool.is_verified && (
               <span className="text-[10px] flex items-center gap-1 text-blue-600 font-medium bg-blue-50 px-2 py-0.5 rounded-full">
                 Verified <CheckCircle2 className="w-3 h-3" />
               </span>
            )}
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight group-hover:text-primary transition-colors line-clamp-2">
            {pool.title}
          </h3>

          <div className="mt-auto">
            {/* Progress Bar */}
            <div className="w-full bg-gray-100 rounded-full h-2.5 mb-3 overflow-hidden">
              <div 
                className="bg-primary h-2.5 rounded-full transition-all duration-1000 ease-out" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <div className="flex justify-between items-end">
              <div>
                <p className="text-xs text-gray-400 font-medium mb-0.5">Price per slot</p>
                <p className="text-xl font-bold text-gray-900">
                  {formatNaira(pool.total_amount / pool.slots_total)}
                </p>
              </div>
              <div className="text-right">
                <div className="flex -space-x-2 justify-end mb-1">
                  {[...Array(Math.min(3, pool.slots_filled))].map((_, i) => (
                    <div key={i} className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-[8px] overflow-hidden">
                      <User className="w-4 h-4 text-gray-400" />
                    </div>
                  ))}
                </div>
                <p className="text-xs font-medium text-gray-500">
                  <span className={cn("text-primary font-bold", progress >= 100 ? "text-red-500" : "")}>
                    {pool.slots_filled}
                  </span>/{pool.slots_total} joined
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
