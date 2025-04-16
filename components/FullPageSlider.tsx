'use client';

import { Check, Play } from 'lucide-react';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import VideoModal from './VideoModal';

const slides = [
  {
    title: 'ANISA – Güvenli, Enerji Dostu, Aileye Uygun',
    description: `Yüksek taşıyıcı sistem, taş yünü yalıtımı ve güneş panelleri ile hem sevdiklerinizi korur, hem doğaya katkı sunar.
    Aileler için tasarlanmış akıllı yaşam alanı.`,
    bgImage: '/images/anisa_banner.jpg',
    textColor: 'text-white',
    videoUrl: 'https://youtu.be/xWAv530JrEE',
    features: [
      'Zemin ısıtma & soğutma sistemi',
      'Çift cam ve sürgülü kapı sistemleri',
      'Sürdürülebilir su & enerji altyapısı',
    ],
  },
  {
    title: 'KOZA – Özgürlük Taşınabilir Olsun',
    description: `Modüler yapısı, hafif kompozit panelleri ve doğayla bütünleşen formuyla Koza, sizi sabit bir noktadan özgürleştirir. İster dağda, ister deniz kenarında...`,
    bgImage: '/images/koza_banner.jpg',
    textColor: 'text-white',
    videoUrl: 'https://youtu.be/cRABcGR2n3M',
    features: ['Güneş enerjisi uyumu', 'Uzaktan kontrol sistemleri', ' 1–3 günde yaşama hazır'],
  },
  {
    title: 'MAYSA – Minimalist Konforun En Akıllı Hali',
    description: `Egg white duvarları, spot aydınlatması ve merkezi ısıtma sistemiyle 6 m²'de maksimum konfor.
    Akıllı sistemler ve zarif tasarımın mükemmel birleşimi.`,
    bgImage: '/images/maysa_banner.jpg',
    textColor: 'text-white',
    videoUrl: 'https://youtu.be/LhzocbybIUg',
    features: [
      'Küçük alanda büyük yaşam',
      'KfW40 seviyesine yakın enerji verimliliği',
      'Modern & Fonksiyonel iç mimari',
    ],
  },
];

const FullPageSlider = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('');

  const handleVideoClick = (videoUrl: string) => {
    setCurrentVideo(videoUrl);
    setIsVideoOpen(true);
  };

  return (
    <section className="h-screen relative">
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl={currentVideo}
      />
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        direction="vertical"
        slidesPerView={1}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + ' bg-white"></span>';
          },
        }}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full w-full relative flex items-center justify-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50" />
              <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
                <div className="max-w-3xl">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
                    {slide.title}
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-6 drop-shadow-md line-clamp-3 sm:line-clamp-none">
                    {slide.description}
                  </p>
                  <div className="space-y-3 mb-8">
                    {slide.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-white"
                      >
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-400" />
                        <span className="text-sm sm:text-base drop-shadow-md">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => handleVideoClick(slide.videoUrl)}
                    className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-blue-600 text-white rounded-lg text-sm sm:text-base font-semibold hover:bg-blue-700 transition-colors duration-200"
                  >
                    <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Videoyu İzle
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default FullPageSlider;
