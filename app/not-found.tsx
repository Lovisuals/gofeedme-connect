import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 text-center">
      <h1 className="text-9xl font-bold text-gray-200 mb-4">404</h1>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Page not found</h2>
      <p className="text-gray-500 mb-8">The pool you are looking for has been moved or deleted.</p>
      <Link 
        href="/"
        className="inline-flex items-center gap-2 bg-gray-900 text-white font-bold py-3 px-8 rounded-xl hover:bg-black transition-colors"
      >
        <Home className="w-4 h-4" /> Back Home
      </Link>
    </div>
  );
}
