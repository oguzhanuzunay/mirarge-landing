'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ArrowRight, LampDesk, ShieldCheck, Star, TreePine } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import PDFViewer from './PDFViewer';
import TechnicalInfoModal from './TechnicalInfoModal';

const features = [
  {
    icon: ShieldCheck,
    title: 'Güvende Yaşamak | ANISA',
    description: `Sevdiklerinizi koruyan bir yapıya mı ihtiyacınız var?
Anisa, yüksek mukavemetli taşıyıcı sistemi, taş yünü yalıtımı ve zemin ısıtma teknolojisiyle yalnızca dış dünyadan değil, belirsizlikten de korur.`,
    color: 'bg-cyan-500',
    gradient: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: TreePine,
    title: ' Özgürlüğü Taşımak | KOZA',
    description: `Koza, modern hayatın karmaşasına doğayla yanıt veriyor.
Taşınabilir yapısıyla özgürlüğü, kompozit teknolojisiyle dayanıklılığı,
minimal tasarımıyla zihinsel sadeleşmeyi hayatınıza taşıyor.`,
    color: 'bg-emerald-500',
    gradient: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: LampDesk,
    title: 'Konforu Sadeleştirmek | MAYSA',
    description: `Spot ışık, iç huzur ve minimal yaşam temsili. Aynı zamanda sade bir iç tasarım atmosferini çağrıştırır.`,
    color: 'bg-yellow-500',
    gradient: 'from-yellow-500 to-yellow-600',
  },
];

const projectStyles = {
  anisa: {
    icon: ShieldCheck,
    bgColor: 'bg-cyan-50',
    textColor: 'text-cyan-600',
    borderColor: 'border-cyan-200',
    hoverBg: 'hover:bg-cyan-100/50',
  },
  maysa: {
    icon: LampDesk,
    bgColor: 'bg-yellow-50',
    textColor: 'text-yellow-600',
    borderColor: 'border-yellow-200',
    hoverBg: 'hover:bg-yellow-100/50',
  },
  koza: {
    icon: TreePine,
    bgColor: 'bg-emerald-50',
    textColor: 'text-emerald-600',
    borderColor: 'border-emerald-200',
    hoverBg: 'hover:bg-emerald-100/50',
  },
};

const testimonials = [
  {
    name: 'Ayşe Yılmaz – Anisa Sakini',
    role: "Anisa'yla birlikte içim rahatladı.",
    content:
      'Çocuklarım için güvenli bir ortam arıyorduk, artık geceleri daha huzurlu uyuyorum. Üstelik enerji faturalarımız da şaşırtıcı şekilde düştü.',
    rating: 5,
    image: '/testimonials/person1.jpg',
    project: 'anisa' as const,
  },
  {
    name: 'Zeynep Demir – Maysa Sakini',
    role: "İstanbul'da yaşıyorum ve sadeleşmek istiyordum.",
    content:
      'Maysa, küçük ama güçlü. Sessizlik, ısı dengesi, estetik hepsi bir arada. Her sabah gün ışığıyla uyanmak bir lüks artık.',
    rating: 5,
    image: '/testimonials/person2.jpg',
    project: 'maysa' as const,
  },
  {
    name: 'Mehmet Kaya – Koza Sakini',
    role: 'Koza benim için yeniden başlamak demekti.',
    content:
      'Artık sabahları kuş sesleriyle uyanıyorum. Elektriğimi kendim üretiyorum. Şehir stresinden uzak, ama teknolojiye hâlâ yakınım.',
    rating: 5,
    image: '/testimonials/person3.jpg',
    project: 'koza' as const,
  },
  {
    name: 'Ali & Meltem Acar – Anisa Sakini',
    role: 'Anisa Rezidans Sakini',
    content:
      'İçerisi dışarıdan tamamen izole, çocuklarımız ses olmadan rahatça ders çalışıyor. Kışın sıcacık, yazın ferah. Ev değil, sanki özel tasarım bir yaşam alanı gibi hissettiriyor.',
    rating: 5,
    image: '/testimonials/person4.jpg',
    project: 'anisa' as const,
  },
] as const;

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
  project: 'anisa' | 'maysa' | 'koza';
}

const projectDocuments = {
  anisa: {
    catalog: '/documents/katalog.pdf',
  },
  maysa: {
    catalog: '/documents/katalog.pdf',
  },
  koza: {
    catalog: '/documents/katalog.pdf',
  },
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  const [isPDFOpen, setIsPDFOpen] = useState(false);
  const [isTechnicalOpen, setIsTechnicalOpen] = useState(false);
  const style = projectStyles[testimonial.project];
  const ProjectIcon = style.icon;

  return (
    <>
      <div
        className={`rounded-2xl p-6 border transition-all duration-300 ${style.bgColor} ${style.borderColor} ${style.hoverBg}`}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 fill-current ${style.textColor}`}
              />
            ))}
          </div>
          <ProjectIcon className={`w-5 h-5 ${style.textColor}`} />
        </div>

        <p className="text-gray-700 mb-6 line-clamp-4">{testimonial.content}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full mr-4 grayscale opacity-80"
              width={48}
              height={48}
            />
            <div>
              <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
              <p className="text-sm text-gray-600">{testimonial.role}</p>
            </div>
          </div>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className={`mt-4 w-full flex items-center justify-center py-2 px-4 rounded-lg border ${style.borderColor} ${style.textColor} font-medium transition-colors duration-300 ${style.hoverBg}`}
            >
              {testimonial.project.charAt(0).toUpperCase() + testimonial.project.slice(1)}&apos;yı
              İncele
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="center"
            className="w-56"
          >
            <DropdownMenuItem
              onClick={() => setIsPDFOpen(true)}
              className="cursor-pointer"
            >
              <svg
                className="w-4 h-4 mr-2"
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
              Ürün Kataloğu
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setIsTechnicalOpen(true)}
              className="cursor-pointer"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Teknik Özellikler
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <PDFViewer
        isOpen={isPDFOpen}
        onClose={() => setIsPDFOpen(false)}
        fileUrl={projectDocuments[testimonial.project].catalog}
      />

      <TechnicalInfoModal
        isOpen={isTechnicalOpen}
        onClose={() => setIsTechnicalOpen(false)}
        projectType={testimonial.project}
      />
    </>
  );
};

const TrustSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Üç Yapı, Üç Felsefe: Sizin İçin En Uygun Olanı Seçin
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
            Minimalist misiniz, özgürlüğü mü arıyorsunuz, yoksa sevdiklerinizle huzurlu bir yaşam mı
            istiyorsunuz? Dizaynım olarak sizi yalnızca bir yapı değil, yaşam tarzınıza uygun bir
            felsefeyle buluşturuyoruz. Teknolojiyi estetikle, mühendisliği doğayla, konforu
            sadelikle bir araya getiriyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} transform -rotate-6 group-hover:rotate-0 transition-transform duration-300`}
              ></div>
              <div className="relative p-8 bg-white rounded-2xl shadow-lg transform transition-all group-hover:-translate-y-2 group-hover:bg-opacity-90 duration-300">
                <div className={`inline-flex p-4 rounded-lg ${feature.color} bg-opacity-10 mb-6`}>
                  <feature.icon className={`h-8 w-8 ${feature.color.replace('bg-', 'text-')}`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-lg">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Yalnızca Biz Söylemiyoruz — Onlar Yaşadı
          </h2>
          <p className="text-xl text-gray-600">
            Gerçek deneyimler, gerçek evlerde yaşanır. Yapılarımızı tercih eden mutlu sakinlerimizin
            sözlerine kulak verin.
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:grid grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
            />
          ))}
        </div>

        {/* Mobile and Tablet View */}
        <div className="lg:hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
