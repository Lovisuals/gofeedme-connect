import { Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center space-y-4">
      <Loader2 className="w-10 h-10 text-primary animate-spin" />
      <p className="text-gray-500 text-sm font-medium animate-pulse">Loading Feed...</p>
    </div>
  );
}
