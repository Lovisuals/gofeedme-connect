import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // <--- THIS IS CRITICAL
import { ThemeProvider } from '@/components/ThemeProvider';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GoFeedMe | Bulk Food Sharing',
  description: 'Join neighbors to buy food in bulk and save money.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <div className="flex-grow">
              {children}
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
