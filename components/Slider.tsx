'use client';

import Image from 'next/image';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import PDFViewer from './PDFViewer';
import TechnicalInfoModal from './TechnicalInfoModal';

const products = [
  {
    title: 'ANİSA Kompozit Ev',
    subtitle: 'Aileler İçin Güvenli, Sessiz ve Sürdürülebilir Yaşam Alanı',
    description:
      'Yüksek taşıyıcı sistem, taş yünü yalıtım ve güneş paneliyle donatılmış Anisa; sizi hem korur, hem geleceğe taşır.',
    image: '/products/anisa.png',
    features: [
      'Taş Yünü Yalıtımlı Dış Kabuk',
      'Zemin Isıtma ve Soğutma Sistemi',
      'Güneş Paneliyle Enerji Üretimi',
      'Sürgülü Çatı Merdiveni ile Fonksiyonel Alan',
    ],
    lifestyle: 'family',
    documents: {
      catalog: '/documents/katalog.pdf',
      technical: '/documents/teknik.pdf',
    },
  },
  {
    title: 'KOZA Kompozit Ev',
    subtitle: 'Özgürlük Taşınabilir Hale Geldi',
    description:
      'Koza, doğa ile iç içe, hafif ve modüler yapısıyla sabit hayata meydan okuyanların evi',
    image: '/products/koza.png',
    features: [
      'Kompozit Panel Teknolojisi',
      'Güneş Enerjisi Uyumu',
      '1–3 Günde Yaşama Hazır',
      'Modüler Genişleme Seçenekleri',
    ],
    lifestyle: 'nature',
    documents: {
      catalog: '/documents/katalog.pdf',
      technical: '/documents/teknik.pdf',
    },
  },
  {
    title: 'MAYSA Tiny House',
    subtitle: 'Minimalist Alanlarda Maksimum Konfor',
    description:
      "6 metrekarelik alanda KfW40'a yakın enerji verimliliğiyle çalışan, estetik ve sessiz bir iç dünya sunar.",
    image: '/products/maysa.png',
    features: [
      'Egg White Duvarlar & Spot Aydınlatma',
      'Merkezi Isıtma/Soğutma Sistemi',
      'Teknik Depolama Alanı',
      'Modern & Fonksiyonel İç Mimari',
    ],
    lifestyle: 'minimalist',
    documents: {
      catalog: '/documents/katalog.pdf',
      technical: '/documents/teknik.pdf',
    },
  },
];

const lifestyleOptions = [
  {
    id: 'nature',
    label: 'Doğada yaşamak istiyorum',
    description: 'Doğayla iç içe, özgür bir yaşam sürmek isteyenler için',
  },
  {
    id: 'minimalist',
    label: 'Minimalist yaşam arıyorum',
    description: 'Az alanda maksimum verimlilik ve modern tasarım arayanlar için',
  },
  {
    id: 'family',
    label: 'Ailemle birlikte konforlu alan arıyorum',
    description: 'Güvenli, konforlu ve sürdürülebilir aile yaşamı için',
  },
];

const Slider = () => {
  const [selectedLifestyle, setSelectedLifestyle] = useState<string | null>(null);
  const [selectedPDF, setSelectedPDF] = useState<string | null>(null);
  const [isTechnicalOpen, setIsTechnicalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<'anisa' | 'maysa' | 'koza' | null>(null);

  const handleDocumentClick = (url: string) => {
    setSelectedPDF(url);
  };

  const handleTechnicalClick = (project: 'anisa' | 'maysa' | 'koza') => {
    setSelectedProject(project);
    setIsTechnicalOpen(true);
  };

  const filteredProducts = selectedLifestyle
    ? products.filter((product) => product.lifestyle === selectedLifestyle)
    : products;

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
          Ürünlerimiz
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Doğayla uyumlu, enerji verimli ve sizi düşünen yaşam alanlarını keşfedin. Anisa, Maysa ve
          Koza; farklı yaşam stilleri için tasarlanmış, teknolojiyi estetikle birleştiren özel
          yapılarımızdır.
        </p>

        {/* Yaşam Tarzı Seçici */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800">
            Size en uygun yaşam alanını bulalım
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {lifestyleOptions.map((option) => (
              <button
                key={option.id}
                onClick={() =>
                  setSelectedLifestyle(option.id === selectedLifestyle ? null : option.id)
                }
                className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                  selectedLifestyle === option.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                <div className="text-lg font-semibold mb-2">{option.label}</div>
                <p className="text-sm text-gray-600">{option.description}</p>
              </button>
            ))}
          </div>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: filteredProducts.length > 1 ? 2 : 1,
            },
            1024: {
              slidesPerView: filteredProducts.length > 2 ? 3 : filteredProducts.length,
            },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          className="pb-12"
        >
          {filteredProducts.map((product, index) => (
            <SwiperSlide key={index}>
              <div
                className={`bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 ${
                  selectedLifestyle === product.lifestyle
                    ? 'scale-105 ring-2 ring-blue-500'
                    : 'hover:scale-105'
                }`}
              >
                <div className="relative w-full h-[250px] sm:h-[300px]">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    priority={index === 0}
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {product.title}
                  </h3>
                  <p className="text-base sm:text-lg text-blue-600 font-medium mb-4 line-clamp-2">
                    {product.subtitle}
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-3">
                    {product.description}
                  </p>
                  <div className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-gray-700 text-sm sm:text-base"
                      >
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mr-2 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="line-clamp-2">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-2 sm:gap-3">
                    <button
                      onClick={() => handleDocumentClick(product.documents.catalog)}
                      className="flex items-center justify-center py-2 sm:py-2.5 px-2 sm:px-4 rounded-lg bg-blue-600 text-white text-sm sm:text-base font-semibold hover:bg-blue-700 transition-colors"
                    >
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                      Katalog
                    </button>
                    <button
                      onClick={() => {
                        const projectName = product.title
                          .split(' ')[0]
                          .toLowerCase()
                          .normalize('NFD')
                          .replace(/[\u0300-\u036f]/g, '');
                        handleTechnicalClick(projectName as 'anisa' | 'maysa' | 'koza');
                      }}
                      className="flex items-center justify-center py-2 sm:py-2.5 px-2 sm:px-4 rounded-lg border-2 border-blue-200 text-blue-700 text-sm sm:text-base font-semibold hover:bg-blue-50 transition-colors"
                    >
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Teknik Bilgi
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {selectedPDF && (
        <PDFViewer
          isOpen={!!selectedPDF}
          onClose={() => setSelectedPDF(null)}
          fileUrl={selectedPDF}
        />
      )}

      {selectedProject && (
        <TechnicalInfoModal
          isOpen={isTechnicalOpen}
          onClose={() => {
            setIsTechnicalOpen(false);
            setSelectedProject(null);
          }}
          projectType={selectedProject}
        />
      )}
    </section>
  );
};

export default Slider;
