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
              <div className="text-center z-10 px-4 max-w-4xl mx-auto">
                <h2
                  className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 ${slide.textColor} leading-tight`}
                >
                  {slide.title}
                </h2>
                <p
                  className={`text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 ${slide.textColor} max-w-xl mx-auto leading-relaxed`}
                >
                  {slide.description}
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-6 sm:mb-8">
                  {slide.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-white justify-center"
                    >
                      <div className="bg-blue-500 rounded-full p-1 flex-shrink-0">
                        <Check className="w-3 h-3 sm:w-4 sm:h-4" />
                      </div>
                      <span className="text-sm sm:text-base md:text-lg font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => handleVideoClick(slide.videoUrl)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full flex items-center justify-center mx-auto transition-colors duration-300 text-sm sm:text-base"
                >
                  <Play className="w-4 h-4 sm:w-6 sm:h-6 mr-2" />
                  Videoyu İzle
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default FullPageSlider;
