'use client';

import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

interface TechnicalInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectType: 'anisa' | 'maysa' | 'koza';
}

const technicalInfo = {
  koza: {
    title: 'KOZA Teknik Özellikler',
    description:
      'Koza, yalnızca bir yapı değil; taşınabilir bir yaşam biçimi. Hafif ama son derece dayanıklı kompozit malzemeden üretilen yapısı sayesinde, farklı iklim koşullarına kolayca uyum sağlar. Rüzgara, yağmura ve güneş ışığına karşı maksimum koruma sunarken, enerji tasarruflu yapısı sayesinde doğaya da minimum etki bırakır.',
    features: [
      'Kompozit Panel Teknolojisi: Isı ve ses yalıtımı sağlayan, hafif ve dayanıklı malzeme.',
      'Modüler Tasarım: İhtiyaca göre genişletilebilir veya küçültülebilir yapı.',
      'Güneş Enerjisi Uyumu: Yenilenebilir enerji sistemleriyle entegre çalışabilir.',
      'Hızlı Kurulum: Saha koşullarına göre 1-3 gün içinde yaşama hazır hale gelir.',
      'Ekolojik Ayak İzi Düşük: Üretim ve kullanım sürecinde minimum karbon salımı.',
    ],
  },
  maysa: {
    title: 'MAYSA Teknik Özellikler',
    description: '6 m² toplam alana sahip, modern ve kompakt yaşam alanı.',
    features: [
      'Dış cephe malzemesi C80 beton seviyesi ve prekast görünümlü yüzey',
      'Pencere kenarları katmanlı tasarım ve dekoratif su çıkışları',
      'Pencere Doğramas antrasit alüminyum doğrama, asas 64 cm yüksekliğinde',
      'Aydınlatma: Siyah spot ışıklar, modern ve fonksiyonel aydınlatma',
      'Mobilyalar: Gri tonlarında koltuk, mutfak masası gri MDF ve ahşap tezgâh',
      'WC Alanı: Sürgülü cam duşa kabin, klozet ve banyo dolabı',
      'Depolama Alanı: Yapının arka kısmında kombi, su depoları, sigorta kutusu',
      'Çatı Formu: Üçgen çatı, eğimli yüzeyler',
      'Pencere Yerleşimi: Çatı eğiminde banyo alanına ışık veren pencere',
      'KfW40 seviyesine yakın enerji performansı',
      'Güneş paneli, gri su, atık su ve temiz su boru altyapısı',
      'Merkezi ısıtma-soğutma sistemi',
    ],
  },
  anisa: {
    title: 'ANİSA Teknik Özellikler',
    description: '30 m² toplam alan (15 m² taban alanı + üst kat alanı)',
    features: [
      '10x10 cm ahşap kereste taşıyıcı sistem',
      'Beton görünümlü gri dış cephe rengi, dış kabuk ile taş yünü bağlantısı',
      'Taş desenli gri tonlarında duvar kaplamaları',
      'Ahşap görünümlü gri tonlarında parke',
      'Zemin ısıtma ve soğutma sistemi',
      'Gri su, atık su ve temiz su tanklarına bağlantı, çevre dostu su yönetimi',
      'Dış kabuk, taş yünü ile bağlantılı yalıtım',
      'Eğimli çatı, içeriye doğal ışık girmesini sağlayacak büyük pencereler',
      'Sürgülü kapı üst kısmına yakın, açılıp kapanabilir çatı merdiveni',
      'Çift cam, ahşap-alüminyum karışımı doğrama, antrasit renginde',
      'Sürgülü kapı sayesinde iç mekanlarda pratik kullanım',
      'Gri tonlarında oval mutfak masası ve ahşap çıta detayları',
      'Güneş panelleri ile enerji üretimi',
      'Çevre dostu su ve enerji sistemlerine entegre bağlantılar',
    ],
  },
};

const TechnicalInfoModal = ({ isOpen, onClose, projectType }: TechnicalInfoModalProps) => {
  const info = technicalInfo[projectType];

  return (
    <Dialog
      open={isOpen}
      onOpenChange={onClose}
    >
      <DialogContent className="max-w-[800px] max-h-[90vh] overflow-y-auto">
        <DialogTitle className="text-2xl font-bold text-gray-900 mb-4">{info.title}</DialogTitle>
        <div className="space-y-6">
          <p className="text-gray-700 text-lg">{info.description}</p>
          <div className="space-y-3">
            {info.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-2 text-gray-700"
              >
                <div className="min-w-[20px] mt-1">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                </div>
                <p>{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TechnicalInfoModal;
