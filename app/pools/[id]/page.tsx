'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import PaymentModal from '@/components/PaymentModal';
import { ShieldCheck, CheckCircle } from 'lucide-react';
import { formatNaira, generateOTP } from '@/lib/utils';

export default function PoolDetail() {
  const [showPayment, setShowPayment] = useState(false);
  const [paid, setPaid] = useState(false);
  const [otp, setOtp] = useState('');

  const handleSuccess = () => {
    setOtp(generateOTP());
    setPaid(true);
    setShowPayment(false);
  };

  if (paid) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-2xl font-bold mb-2">You're in!</h2>
          <p className="text-gray-600 mb-6">Show this code to the seller to claim your share.</p>
          
          <div className="bg-gray-100 p-6 rounded-xl mb-6 border-2 border-dashed border-gray-300">
            <span className="text-4xl font-mono font-bold tracking-widest text-gray-900">{otp}</span>
          </div>
          
          <p className="text-xs text-red-500 font-bold mb-4">DO NOT SHARE THIS CODE UNTIL YOU SEE THE ITEM.</p>
          <a href="/dashboard" className="block w-full bg-primary text-white font-bold py-3 rounded-xl hover:bg-primary-hover transition-colors">Go to Dashboard</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pb-20">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 py-8 grid lg:grid-cols-3 gap-8">
        
        <div className="lg:col-span-2">
          <div className="h-[400px] bg-gray-200 rounded-2xl mb-6 relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
             <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-sm font-bold shadow-sm z-20">
                Ends in 14 hours
             </div>
          </div>
          <h1 className="text-3xl font-bold mb-4 text-gray-900">50kg Bag of Mama Gold Rice</h1>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">J</div>
            <span className="font-medium text-gray-700">Organized by John Doe (Verified)</span>
          </div>
          <div className="prose max-w-none text-gray-600">
            <p className="leading-relaxed">
              We are buying a full bag of rice to share. Pickup is at Ikeja City Mall car park (Section C) tomorrow at 5 PM. 
              By joining, you save 25% compared to supermarket prices.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="sticky top-24 bg-white border border-gray-200 rounded-2xl p-6 shadow-card">
            <div className="mb-6">
              <span className="text-3xl font-bold text-gray-900">{formatNaira(90000)}</span>
              <span className="text-gray-500 text-sm"> total target</span>
            </div>
            
            <div className="w-full bg-gray-100 h-2 rounded-full mb-2">
              <div className="bg-primary h-2 rounded-full w-[60%]"></div>
            </div>
            <div className="flex justify-between text-sm mb-6">
              <span className="font-bold text-gray-900">6 slots filled</span>
              <span className="text-gray-500">4 left</span>
            </div>

            <div className="bg-green-50 p-4 rounded-xl mb-6 border border-green-100">
              <p className="text-sm text-gray-600">Your Share</p>
              <p className="text-2xl font-bold text-primary">{formatNaira(9000)}</p>
            </div>

            <button 
              onClick={() => setShowPayment(true)}
              className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 rounded-xl transition-all shadow-md active:scale-95"
            >
              Join Pool
            </button>
            
            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-400">
              <ShieldCheck className="w-4 h-4" />
              <span>GoFeedMe Guarantee</span>
            </div>
          </div>
        </div>

      </div>

      {showPayment && (
        <PaymentModal 
          amount={9000} 
          onClose={() => setShowPayment(false)} 
          onSuccess={handleSuccess} 
        />
      )}
    </div>
  );
}
