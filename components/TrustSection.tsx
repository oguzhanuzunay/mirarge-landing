import { Award, Clock, Shield } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: '10 Yıl Garanti',
    description: 'Tüm ürünlerimizde 10 yıl garanti güvencesi',
  },
  {
    icon: Clock,
    title: '7/24 Servis',
    description: 'Kesintisiz teknik destek ve servis hizmeti',
  },
  {
    icon: Award,
    title: 'Enerji Verimliliği',
    description: 'A+++ enerji sınıfı ile maksimum tasarruf',
  },
];

const TrustSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Neden Biz?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm"
            >
              <benefit.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
