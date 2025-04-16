'use client';

import Image from 'next/image';

interface HeroProps {
  backgroundType: 'video' | 'image';
  backgroundSrc: string;
  title: string;
  subtitle: string;
}

const Hero = ({
  backgroundType = 'video',
  backgroundSrc,
  title = 'Yenilikçi Çözümler, Güvenilir Ortaklık',
  subtitle = "Fuar'da tanıştığımız değerli misafirlerimiz için özel fırsatlar sunuyoruz",
}: Partial<HeroProps>) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0">
        {backgroundType === 'video' ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover"
          >
            <source
              src={backgroundSrc}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image
            src={backgroundSrc || ''}
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        )}
        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8">{subtitle}</p>
        <a
          href="#form"
          className="inline-block bg-white text-blue-900 px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 hover:shadow-lg hover:bg-gray-100"
        >
          Sadece fuara özel avantajlı paketler sizi bekliyor..
        </a>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/70 to-transparent z-10" />

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <svg
          className="w-6 h-6 text-blue-900"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
