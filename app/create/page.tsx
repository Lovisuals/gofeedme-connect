'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/navigation';
import { ChevronRight, ChevronLeft, Upload } from 'lucide-react';

export default function CreatePool() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [data, setData] = useState({ category: '', title: '', amount: '', slots: '2' });

  const handleCategory = (cat: string) => {
    setData({ ...data, category: cat });
    setStep(2);
  };

  const handleLaunch = () => {
    router.push('/pools/new-pool-id');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-xl mx-auto py-12 px-4">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          
          <div className="w-full bg-gray-100 h-1 mb-8 rounded-full overflow-hidden">
            <div className="bg-primary h-1 rounded-full transition-all duration-300" style={{width: `${step * 33}%`}}></div>
          </div>

          {step === 1 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">What are we pooling for?</h2>
              {['Jollof & Rice (Cooked)', 'Raw Foodstuffs (Bag)', 'Proteins (Meat/Fish)', 'Office Lunch'].map(cat => (
                <button 
                  key={cat} 
                  onClick={() => handleCategory(cat)} 
                  className="w-full text-left p-4 border border-gray-200 rounded-xl hover:border-primary hover:bg-green-50 font-medium transition-all flex justify-between items-center group"
                >
                  {cat}
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-primary" />
                </button>
              ))}
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">The Details</h2>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">Title</label>
                <input 
                  type="text" 
                  className="w-full p-3 border border-gray-200 rounded-lg focus:border-primary outline-none transition-colors" 
                  placeholder="e.g. 50kg Rice Share" 
                  onChange={e => setData({...data, title: e.target.value})} 
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                   <label className="block text-sm font-medium mb-1 text-gray-700">Total Cost (₦)</label>
                   <input 
                    type="number" 
                    className="w-full p-3 border border-gray-200 rounded-lg focus:border-primary outline-none transition-colors" 
                    placeholder="100000" 
                    onChange={e => setData({...data, amount: e.target.value})} 
                   />
                </div>
                <div>
                   <label className="block text-sm font-medium mb-1 text-gray-700">Slots</label>
                   <select 
                    className="w-full p-3 border border-gray-200 rounded-lg focus:border-primary outline-none bg-white transition-colors" 
                    onChange={e => setData({...data, slots: e.target.value})}
                   >
                     {[2,3,4,5,10,20].map(n => <option key={n} value={n}>{n} People</option>)}
                   </select>
                </div>
              </div>
              
              <div className="bg-blue-50 text-blue-800 p-4 rounded-lg text-sm flex justify-between items-center">
                <span>Per person cost:</span>
                <span className="font-bold text-lg">₦{Math.round(Number(data.amount) / Number(data.slots)) || 0}</span>
              </div>

              <div className="flex gap-3 pt-4">
                <button onClick={() => setStep(1)} className="px-6 py-3 border border-gray-200 rounded-xl font-bold text-gray-600 hover:bg-gray-50">Back</button>
                <button onClick={() => setStep(3)} className="flex-1 bg-primary text-white font-bold py-3 rounded-xl hover:bg-primary-hover">Continue</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="text-center space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Add a Photo</h2>
              <div className="border-2 border-dashed border-gray-200 py-12 rounded-xl text-gray-400 hover:border-primary hover:bg-green-50 transition-colors cursor-pointer flex flex-col items-center">
                <Upload className="w-8 h-8 mb-2" />
                <span>Click to upload image</span>
              </div>
              <div className="flex gap-3 pt-4">
                <button onClick={() => setStep(2)} className="px-6 py-3 border border-gray-200 rounded-xl font-bold text-gray-600 hover:bg-gray-50">Back</button>
                <button onClick={handleLaunch} className="flex-1 bg-primary text-white font-bold py-3 rounded-xl hover:bg-primary-hover shadow-lg">Launch Pool</button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
