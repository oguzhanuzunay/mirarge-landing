import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fuar Özel Teklif - Şirketiniz',
  description: 'Fuar ziyaretçilerimiz için özel kampanyalar ve avantajlı fırsatlar.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="tr"
      className="scroll-smooth"
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
