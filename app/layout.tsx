import type {Metadata} from 'next';
import { Fraunces, Inter } from 'next/font/google';
import './globals.css'; // Global styles

const fraunces = Fraunces({
  subsets: ['latin'],
  axes: ['SOFT', 'WONK', 'opsz'],
  variable: '--font-fraunces',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Reclamation Method | Karita Cassia',
  description: 'A complete framework integrating four disciplines into one cohesive system. Built on science. Designed for women who are ready to operate differently.',
  openGraph: {
    title: 'Reclamation Method | Karita Cassia',
    description: 'A complete framework integrating four disciplines into one cohesive system. Built on science. Designed for women who are ready to operate differently.',
    images: [
      {
        url: 'https://picsum.photos/seed/reclamation/1200/630',
        width: 1200,
        height: 630,
        alt: 'Reclamation Method',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reclamation Method | Karita Cassia',
    description: 'A complete framework integrating four disciplines into one cohesive system. Built on science. Designed for women who are ready to operate differently.',
    images: ['https://picsum.photos/seed/reclamation/1200/630'],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-sans bg-brand-bg text-brand-dark antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
