import Link from 'next/link';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { formatNaira, calculateProgress } from '@/lib/utils';
import { Pool } from '@/types';

export default function PoolCard({ pool }: { pool: Pool }) {
  const percent = calculateProgress(pool.raised_amount, pool.total_amount);

  return (
    <Link href={`/pools/${pool.id}`} className="block bg-white rounded-xl shadow-card hover:shadow-lg transition-all border border-gray-100 overflow-hidden group">
      <div className="relative h-48 w-full bg-gray-200">
        <Image 
          src={pool.image_url} 
          alt={pool.title} 
          fill 
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {pool.is_verified && (
           <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold text-gray-800 flex items-center shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-500 mr-1"></span> VERIFIED MERCHANT
           </div>
        )}
      </div>
      
      <div className="p-5">
        <h3 className="font-bold text-lg text-gray-900 leading-snug mb-3 line-clamp-2 min-h-[3.5rem] group-hover:text-primary transition-colors">
          {pool.title}
        </h3>
        
        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2 overflow-hidden">
          <div className="bg-primary h-1.5 rounded-full transition-all duration-500" style={{ width: `${percent}%` }}></div>
        </div>

        <div className="flex justify-between items-end mb-4">
          <div>
            <p className="font-bold text-gray-900">{formatNaira(pool.raised_amount)}</p>
            <p className="text-xs text-gray-500">raised of {formatNaira(pool.total_amount)}</p>
          </div>
          <div className="text-right">
             <span className={`inline-block text-xs font-bold px-2 py-1 rounded-md ${pool.slots_total - pool.slots_filled <= 2 ? 'bg-red-50 text-red-600' : 'bg-green-50 text-primary'}`}>
               {pool.slots_total - pool.slots_filled} slots left
             </span>
          </div>
        </div>

        <div className="border-t border-gray-50 pt-3 flex items-center text-xs text-gray-400 gap-3">
            <span className="flex items-center gap-1 truncate max-w-[200px]">
              <MapPin className="w-3 h-3" /> {pool.location}
            </span>
        </div>
      </div>
    </Link>
  );
}
