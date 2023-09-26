import Navbar from './components/Navbar';
import './globals.css';
import type { Metadata } from 'next';

export const revalidate = 10;

export const metadata: Metadata = {
      title: 'Image gallery',
      description: 'image gallery for practice',
};

export default function RootLayout({
      children,
}: {
      children: React.ReactNode;
}) {
      return (
            <html lang="en">
                  <body>
                        <Navbar />
                        <main className="max-w-7xl mx-auto">{children}</main>
                  </body>
            </html>
      );
}
