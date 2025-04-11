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
        title="Yenilikçi Çözümler, Güvenilir Ortaklık"
        subtitle="Fuar'da tanıştığımız değerli misafirlerimiz için özel fırsatlar sunuyoruz"
      />
      <FullPageSlider />
      <ImageWithText
        imageUrl="https://picsum.photos/1600/900"
        title="Yenilikçi Teknoloji"
        description="En son teknoloji ile donatılmış klimalarımız, yaşam alanlarınızı daha konforlu hale getiriyor. Akıllı sensörler ve enerji tasarruf özellikleri ile hem konfor hem tasarruf sağlıyoruz."
        imagePosition="left"
        altText="Modern klima sistemi"
      />
      <ImageWithText
        imageUrl="https://picsum.photos/1600/901"
        title="Üstün Performans"
        description="A+++ enerji sınıfı ile maksimum verimlilik sunan klimalarımız, minimum enerji tüketimi ile maksimum performans sağlar. Özel filtre teknolojisi sayesinde en sağlıklı havayı sizlere sunar."
        imagePosition="right"
        altText="İç mekan klima ünitesi"
      />
      <Slider />
      <TrustSection />
      <FormSection />
      <Footer />
    </main>
  );
}
