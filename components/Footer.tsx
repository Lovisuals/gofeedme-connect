import Link from 'next/link';
import { Facebook, Twitter, Instagram, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <span className="text-2xl font-bold text-primary tracking-tight">GoFeedMe</span>
            <p className="mt-4 text-gray-500 text-sm leading-relaxed">
              The smartest way to buy food in bulk. Join forces with neighbors, split costs, and eat better for less.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Platform</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-primary transition-colors">Browse Pools</Link></li>
              <li><Link href="/create" className="hover:text-primary transition-colors">Start a Pool</Link></li>
              <li><Link href="/dashboard" className="hover:text-primary transition-colors">My Activity</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Support</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Safety Guidelines</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Community</h4>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white border border-gray-200 rounded-full hover:border-primary hover:text-primary transition-colors"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="p-2 bg-white border border-gray-200 rounded-full hover:border-primary hover:text-primary transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="p-2 bg-white border border-gray-200 rounded-full hover:border-primary hover:text-primary transition-colors"><Facebook className="w-4 h-4" /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2024 GoFeedMe. All rights reserved.</p>
          <div className="flex items-center gap-1 mt-4 md:mt-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>in Lagos</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
