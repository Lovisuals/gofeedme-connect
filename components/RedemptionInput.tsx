'use client';

import { useState } from 'react';
import { CheckCircle2, XCircle, Loader2 } from 'lucide-react';

export default function RedemptionInput() {
  const [code, setCode] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleVerify = async () => {
    if (code.length < 6) return;
    setStatus('loading');
    
    // Simulate API verification for UI demo
    setTimeout(() => {
      if (code === '123456') setStatus('success');
      else setStatus('error');
    }, 1500);
  };

  return (
    <div className="w-full max-w-sm">
      <div className="relative">
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
          placeholder="Enter 6-digit Redemption Code"
          className="w-full pl-4 pr-12 py-3 border border-gray-200 rounded-xl font-mono text-lg tracking-widest focus:border-primary outline-none transition-all"
        />
        <div className="absolute right-3 top-3">
          {status === 'loading' && <Loader2 className="w-6 h-6 text-gray-400 animate-spin" />}
          {status === 'success' && <CheckCircle2 className="w-6 h-6 text-green-500" />}
          {status === 'error' && <XCircle className="w-6 h-6 text-red-500" />}
        </div>
      </div>
      
      <button
        onClick={handleVerify}
        disabled={code.length !== 6 || status === 'loading' || status === 'success'}
        className="mt-3 w-full bg-gray-900 text-white font-bold py-3 rounded-xl disabled:opacity-50 hover:bg-black transition-colors"
      >
        Verify Code
      </button>
    </div>
  );
}
