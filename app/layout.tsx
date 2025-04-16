import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poiretOne = Poppins({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poiret',
});

export const metadata: Metadata = {
  title: 'Dizayn Yapı | Fuar Özel Teklif – Anisa, Maysa, Koza',
  description:
    'Fuarda tanıştığımız değerli ziyaretçilerimiz için özel fırsatlar: Anisa ile güvenli yaşam, Maysa ile minimal konfor, Koza ile doğada özgürlük. Hemen inceleyin',
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
