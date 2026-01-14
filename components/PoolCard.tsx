import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { Pool } from '@/types';
import { formatNaira, calculateProgress, cn } from '@/lib/utils';

export default function PoolCard({ pool }: { pool: Pool }) {
  const progress = calculateProgress(pool.slots_filled, pool.slots_total);
  const isCompleted = pool.status === 'completed';

  return (
    <Link href={`/pools/${pool.id}`} className="group block h-full">
      <div className={cn(
        "h-full flex flex-col bg-white rounded-xl overflow-hidden transition-all duration-300",
        "shadow-card hover:shadow-card-hover hover:-translate-y-1" // The GoFundMe Shadow Effect
      )}>
        {/* Image Section */}
        <div className="relative h-48 w-full bg-gray-100">
          <img 
            src={pool.image_url} 
            alt={pool.title} 
            className="w-full h-full object-cover"
          />
          {pool.is_verified && (
             <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-[10px] font-bold text-primary shadow-sm uppercase tracking-wide">
               Verified Seller
             </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-5 flex flex-col flex-grow">
          <div className="flex items-center gap-1 text-xs text-gray-500 font-medium mb-2 uppercase tracking-wide">
             <span className="text-primary">{pool.category}</span>
             <span>•</span>
             <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {pool.location}</span>
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-4 leading-tight group-hover:underline decoration-primary decoration-2 underline-offset-2">
            {pool.title}
          </h3>

          <div className="mt-auto pt-4 border-t border-gray-50">
            {/* Progress Bar */}
            <div className="w-full bg-gray-100 rounded-full h-1.5 mb-3 overflow-hidden">
              <div 
                className="bg-primary h-1.5 rounded-full" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <div className="flex flex-col gap-0.5">
              <p className="text-sm font-bold text-gray-900">
                {formatNaira(pool.raised_amount)} <span className="text-gray-500 font-normal text-xs">raised</span>
              </p>
              <div className="flex justify-between items-end">
                <p className="text-xs text-gray-500">
                   {formatNaira(pool.total_amount)} goal
                </p>
                <p className="text-xs font-bold text-primary bg-primary-light px-2 py-0.5 rounded-full">
                  {pool.slots_filled}/{pool.slots_total} Joined
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
