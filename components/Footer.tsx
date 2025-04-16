import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">İletişim</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <span>+90(212) 886 5741X</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <span>info@mirprekast.com</span>
              </li>
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Atatürk Mah. Adnan Menderes Cad. No:6 Esenyurt İstanbul</span>
              </li>
            </ul>
          </div>

          <div className="text-sm">
            <p className="mb-4">Dizaynım bir Mir Holding Kuruluşudur</p>
            <p className="text-gray-400">
              © {new Date().getFullYear()} Şirketiniz. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
