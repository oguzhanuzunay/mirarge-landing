import type { Metadata } from 'next';
import { Poiret_One } from 'next/font/google';
import './globals.css';

const poiretOne = Poiret_One({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poiret',
});

export const metadata: Metadata = {
  title: 'Fuar Özel Teklif - Şirketiniz',
  description: 'Fuar ziyaretçilerimiz için özel kampanyalar ve avantajlı fırsatlar.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="tr"
      className={`scroll-smooth ${poiretOne.variable}`}
    >
      <body className={poiretOne.className}>{children}</body>
    </html>
  );
}
