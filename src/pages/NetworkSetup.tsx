import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Wifi, CheckCircle, Router, Globe, Shield, Settings } from 'lucide-react';

const NetworkSetup = () => {
  const services = [
    "Настройка Wi-Fi роутеров",
    "Создание домашней сети",
    "Настройка интернет-подключения",
    "Установка сетевого оборудования",
    "Настройка VPN",
    "Создание гостевой сети",
    "Настройка сетевой безопасности",
    "Диагностика сетевых проблем"
  ];

  const prices = [
    { name: "Настройка Wi-Fi роутера", price: "от 1500 ₽" },
    { name: "Настройка домашней сети", price: "от 2000 ₽" },
    { name: "Установка сетевого оборудования", price: "от 2500 ₽" },
    { name: "Настройка VPN", price: "от 1800 ₽" },
    { name: "Диагностика сети", price: "от 1000 ₽" },
    { name: "Настройка безопасности", price: "от 1500 ₽" },
    { name: "Выезд на дом", price: "от 1000 ₽" },
    { name: "Консультация по телефону", price: "Бесплатно" }
  ];

  const equipment = [
    "TP-Link", "ASUS", "D-Link", "Netgear", "Linksys", "Xiaomi",
    "Keenetic", "Mikrotik", "Ubiquiti", "Cisco", "Huawei", "ZyXEL"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Wifi className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Настройка сетей и Wi-Fi</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Профессиональная настройка домашних и офисных сетей. Обеспечиваем 
            стабильное интернет-соединение и безопасность вашей сети.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Наши услуги</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Стоимость услуг</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {prices.map((service, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                    <span>{service.name}</span>
                    <span className="font-semibold text-blue-600">{service.price}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Equipment Brands */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Работаем с оборудованием всех брендов</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {equipment.map((brand, index) => (
                <div key={index} className="text-center p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                  <span className="font-semibold">{brand}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <Router className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Настройка роутеров</h3>
            <p className="text-gray-600">Оптимальная настройка для максимальной скорости</p>
          </div>
          <div className="text-center">
            <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Безопасность сети</h3>
            <p className="text-gray-600">Защищаем вашу сеть от несанкционированного доступа</p>
          </div>
          <div className="text-center">
            <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Стабильный интернет</h3>
            <p className="text-gray-600">Обеспечиваем стабильное подключение ко всем устройствам</p>
          </div>
        </div>

        {/* Network Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-xl text-blue-800">Домашние сети</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li>• Настройка Wi-Fi для всех устройств</li>
                <li>• Создание гостевой сети</li>
                <li>• Родительский контроль</li>
                <li>• Настройка Smart TV</li>
                <li>• Подключение принтеров по сети</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-green-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-xl text-green-800">Офисные сети</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li>• Создание корпоративной сети</li>
                <li>• Настройка файлового сервера</li>
                <li>• Организация общего доступа</li>
                <li>• Настройка VPN для удаленной работы</li>
                <li>• Система безопасности</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Process */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Этапы настройки сети</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                <h4 className="font-semibold mb-2">Анализ потребностей</h4>
                <p className="text-gray-600 text-sm">Определяем требования к сети</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                <h4 className="font-semibold mb-2">Подбор оборудования</h4>
                <p className="text-gray-600 text-sm">Рекомендуем оптимальное решение</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                <h4 className="font-semibold mb-2">Установка и настройка</h4>
                <p className="text-gray-600 text-sm">Монтируем и настраиваем оборудование</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
                <h4 className="font-semibold mb-2">Тестирование</h4>
                <p className="text-gray-600 text-sm">Проверяем работу всех устройств</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Нужна настройка сети?
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Обеспечим стабильный интернет во всем доме или офисе
          </p>
          <Button size="lg" asChild>
            <Link to="/order">Заказать настройку сети</Link>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NetworkSetup;