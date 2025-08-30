import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-blue-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>+7 (495) 123-45-67</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="w-4 h-4" />
              <span>info@computerrepair.ru</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin className="w-4 h-4" />
            <span>Москва, ул. Тверская, 15</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">PC</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">КомпьютерСервис</h1>
              <p className="text-sm text-gray-600">Профессиональный ремонт техники</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Главная</Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 transition-colors">Услуги</Link>
            <Link to="/diagnostics" className="text-gray-700 hover:text-blue-600 transition-colors">Диагностика</Link>
            <Link to="/prices" className="text-gray-700 hover:text-blue-600 transition-colors">Цены</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">О нас</Link>
            <Link to="/contacts" className="text-gray-700 hover:text-blue-600 transition-colors">Контакты</Link>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Button asChild>
              <Link to="/order">Заказать ремонт</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Главная</Link>
              <Link to="/services" className="text-gray-700 hover:text-blue-600 transition-colors">Услуги</Link>
              <Link to="/diagnostics" className="text-gray-700 hover:text-blue-600 transition-colors">Диагностика</Link>
              <Link to="/prices" className="text-gray-700 hover:text-blue-600 transition-colors">Цены</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">О нас</Link>
              <Link to="/contacts" className="text-gray-700 hover:text-blue-600 transition-colors">Контакты</Link>
              <Button asChild className="w-full">
                <Link to="/order">Заказать ремонт</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;