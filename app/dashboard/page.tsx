import Navbar from '@/components/Navbar';
import { Package, Clock } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">My Activity</h1>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="border-b border-gray-100 px-6 py-4 bg-gray-50">
            <h3 className="font-bold text-gray-700">Active Pools</h3>
          </div>
          
          <div className="p-6">
            <div className="flex flex-col items-center justify-center py-12 text-gray-400">
               <Package className="w-12 h-12 mb-4 opacity-50" />
               <p>No active pools yet. Join one!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
