'use client';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const slides = [
  {
    title: 'Konfor ve Tasarruf',
    description: 'Yüksek verimlilik, düşük enerji tüketimi',
    bgImage: 'https://picsum.photos/1920/1080',
    textColor: 'text-white',
  },
  {
    title: 'Akıllı Teknoloji',
    description: 'Uzaktan kontrol ve akıllı sensör sistemleri',
    bgImage: 'https://picsum.photos/1920/1081',
    textColor: 'text-white',
  },
  {
    title: 'Sağlıklı Yaşam',
    description: 'Özel filtre teknolojisi ile temiz hava',
    bgImage: 'https://picsum.photos/1920/1082',
    textColor: 'text-white',
  },
];

const FullPageSlider = () => {
  return (
    <section className="h-screen relative">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        direction="vertical"
        slidesPerView={1}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 5000,
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
              <div className="text-center z-10 px-4">
                <h2 className={`text-5xl md:text-7xl font-bold mb-6 ${slide.textColor}`}>
                  {slide.title}
                </h2>
                <p className={`text-xl md:text-2xl ${slide.textColor}`}>{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default FullPageSlider;
