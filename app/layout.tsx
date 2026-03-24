import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter, Libre_Franklin } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
});

const libreFranklin = Libre_Franklin({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-libre',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Reclamation Method',
  description: 'Intelligent restoration of the female nervous system.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} ${libreFranklin.variable}`}>
      <body className="bg-ivory-mist-50 text-carbon-black-900 antialiased selection:bg-antique-white-600 selection:text-ivory-mist-50" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
