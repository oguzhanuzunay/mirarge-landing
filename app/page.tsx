import Footer from '@/components/Footer';
import FormSection from '@/components/FormSection';
import FullPageSlider from '@/components/FullPageSlider';
import Hero from '@/components/Hero';
import ImageWithText from '@/components/ImageWithText';
import Slider from '@/components/Slider';
import TrustSection from '@/components/TrustSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero
        backgroundType="video"
        backgroundSrc="/videos/herovideo.mp4"
        title="Evinizi Değil, Yaşam Biçiminizi Seçin"
        subtitle="Fuar'da tanıştığımız değerli misafirlerimiz için özel hazırlanmış, doğayla uyumlu ve ileri teknolojiyle donatılmış yaşam alanlarımızı şimdi keşfedin."
      />
      <FullPageSlider />
      <ImageWithText
        imageUrl="/images/dizayn.jpg"
        title="Gizli Kahraman: Akıllı Mühendislik"
        description="Gözle görünmeyen detaylar, hissettiklerinizin mimarıdır. Dizayn’ım bilimsel altyapısı sayesinde yapılarınız sadece güzel değil, düşünen sistemlere sahip. Akıllı sensörler, enerji tasarrufu sağlayan ısı yönetimi, doğayla entegre su sistemleri ve çok katmanlı yalıtım çözümleriyle yaşam alanınız sizi anlar."
        imagePosition="left"
        altText="Modern klima sistemi"
        features={[
          'Güneş paneli destekli çatı sistemleri 🌞',
          'Zemin ısıtma – ısı dengesini kendi kuran sistem 🌡️',
          'Taş yünü ile bütünleşik dış kabuk yalıtımı 🌀',
          'Otomatik ısı ve nem dengeleyici akıllı sensörler 📊',
          'Gri su & atık su dönüşüm altyapısı 🔁',
        ]}
      />
      <ImageWithText
        imageUrl="/images/ustun_performans_gorseli.JPG"
        title="Sadeleş, Güçlen: Performans Sessizlikte Gizli"
        description="Enerji verimliliği yalnızca faturaları azaltmaz, yaşam kalitenizi artırır.
A+++ enerji sınıfı sistemlerimizle hem daha az tüketiyor, hem daha çok huzur yaşıyorsunuz.
Isı, ses, ışık ve nem kontrolünü tek merkezden yöneten yapılarla artık sadece yaşamakla kalmıyor, gerçekten dinleniyorsunuz."
        imagePosition="right"
        altText="İç mekan klima ünitesi"
        features={[
          '⚡ A+++ enerji sınıfı sistemlerle %33 daha az tüketim',
          '🔇 Taş yünü destekli ses izolasyonu',
          '🌬️ Merkezi ısı-soğutma sistemiyle her alanda homojen iklim',
          '🌍 Sürdürülebilir enerji ve su yönetimi',
          '🧘 Sessiz çalışan sistem altyapısı ile zihinsel konfor',
        ]}
      />
      <Slider />
      <TrustSection />
      <FormSection />
      <Footer />
    </main>
  );
}
