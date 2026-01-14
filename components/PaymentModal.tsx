'use client';

import { useState } from 'react';
import { Copy, ShieldCheck, Loader2 } from 'lucide-react';
import { formatNaira } from '@/lib/utils';

interface PaymentModalProps {
  amount: number;
  onSuccess: () => void;
  onClose: () => void;
}

export default function PaymentModal({ amount, onSuccess, onClose }: PaymentModalProps) {
  const [loading, setLoading] = useState(false);

  const handlePay = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onSuccess();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
        
        <div className="bg-gray-50 p-4 border-b border-gray-100 flex justify-between items-center">
          <h3 className="font-bold text-gray-900">Checkout</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-sm">Close</button>
        </div>

        <div className="p-6">
          <div className="text-center mb-6">
            <p className="text-sm text-gray-500 mb-1">Total to pay</p>
            <h2 className="text-3xl font-bold text-gray-900">{formatNaira(amount)}</h2>
          </div>

          <div className="space-y-3">
            <button 
              onClick={handlePay}
              disabled={loading}
              className="w-full bg-[#1DC9A0] hover:bg-[#15A585] text-white font-bold py-3.5 rounded-xl shadow-sm flex items-center justify-center gap-2 transition-transform active:scale-95 disabled:opacity-70"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Pay with OPay / Card'}
            </button>
            
            <button 
              onClick={handlePay}
              disabled={loading}
              className="w-full bg-white border-2 border-gray-200 hover:bg-gray-50 text-gray-700 font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors disabled:opacity-70"
            >
              <Copy className="w-4 h-4" /> Transfer to Virtual Account
            </button>
          </div>

          <div className="mt-6 flex items-start gap-3 bg-blue-50 p-3 rounded-lg text-xs text-blue-700">
             <ShieldCheck className="w-5 h-5 flex-shrink-0" />
             <p>Your funds are held in a secure Escrow account. The seller is only paid after you confirm pickup via your OTP code.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
