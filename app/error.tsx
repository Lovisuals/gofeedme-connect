'use client';

import { useEffect } from 'react';
import { AlertCircle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 text-center">
      <div className="bg-red-50 p-4 rounded-full mb-4">
        <AlertCircle className="w-8 h-8 text-red-500" />
      </div>
      <h2 className="text-xl font-bold text-gray-900 mb-2">Something went wrong!</h2>
      <p className="text-gray-500 mb-6 max-w-md">
        We couldn't load the pools. This might be a connection issue or a temporary glitch.
      </p>
      <button
        onClick={() => reset()}
        className="bg-primary hover:bg-primary-hover text-white font-bold py-3 px-8 rounded-xl transition-colors"
      >
        Try Again
      </button>
    </div>
  );
}
