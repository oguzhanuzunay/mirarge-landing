'use client';

import Link from 'next/link';
import { FC } from 'react';

const FormSection: FC<React.HTMLProps<HTMLElement>> = () => {
  return (
    <section
      id="form"
      className="py-16 bg-white"
    >
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-lg text-gray-700 mb-6">
            Fuar&apos;da bizimle tanıştığınız için teşekkür ederiz! Şimdi iletişim bilgilerinizi
            bırakın, size özel teklifimizi gönderelim.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="space-y-2 mb-8">
            <iframe
              src="https://forms.gle/SmDLF8kdWQpERfYh9"
              width="100%"
              height="600"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="rounded-lg"
            >
              Yükleniyor…
            </iframe>
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              href="https://drive.google.com/drive/folders/1RGtalF-w_kn0hfpnFcprW5d1dDyaHDkc?usp=drive_link"
              target="_blank"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg border-2 border-blue-200 hover:bg-blue-50 transition-colors duration-300 font-semibold shadow-sm group"
            >
              <svg
                className="w-6 h-6 mr-2 text-blue-500 group-hover:scale-110 transition-transform duration-300"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm2.5 14.5v-5.5h-5v5.5h-2v-7.5h7v7.5h-2z" />
              </svg>
              Teknik Dökümanları İndir
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
