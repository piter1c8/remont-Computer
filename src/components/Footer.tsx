import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">PC</span>
              </div>
              <h3 className="text-xl font-bold">КомпьютерСервис</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Профессиональный ремонт компьютеров, ноутбуков и другой техники. 
              Более 10 лет опыта работы.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-blue-500 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-pink-500 cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/laptop-repair" className="hover:text-white transition-colors">Ремонт ноутбуков</Link></li>
              <li><Link to="/pc-repair" className="hover:text-white transition-colors">Ремонт ПК</Link></li>
              <li><Link to="/data-recovery" className="hover:text-white transition-colors">Восстановление данных</Link></li>
              <li><Link to="/virus-removal" className="hover:text-white transition-colors">Удаление вирусов</Link></li>
              <li><Link to="/hardware-upgrade" className="hover:text-white transition-colors">Апгрейд железа</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Быстрые ссылки</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/emergency" className="hover:text-white transition-colors">Срочный ремонт</Link></li>
              <li><Link to="/warranty" className="hover:text-white transition-colors">Гарантия</Link></li>
              <li><Link to="/reviews" className="hover:text-white transition-colors">Отзывы</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Блог</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@computerrepair.ru</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Москва, ул. Тверская, 15</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Пн-Вс: 9:00-21:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 КомпьютерСервис. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;