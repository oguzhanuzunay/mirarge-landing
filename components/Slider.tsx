'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const products = [
  {
    title: 'ProSmart Klima',
    description: 'Akıllı sensörler ile ortamınızı analiz eder, enerji tasarrufu sağlar',
    image: '/product1.jpg',
  },
  {
    title: 'Alerjen Klima',
    description: 'Özel filtresi ile alerjenleri %99.9 oranında yakalar',
    image: '/product2.jpg',
  },
  {
    title: 'Endüstriyel Klima',
    description: 'Geniş mekanlar için özel tasarlanmış güçlü performans',
    image: '/product3.jpg',
  },
];

const Slider = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Ürünlerimiz</h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          className="pb-12"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-50 rounded-lg p-6 h-full flex flex-col items-center text-center">
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
