import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Settings, CheckCircle, Download, Shield, Cpu, HardDrive } from 'lucide-react';

const SoftwareInstallation = () => {
  const services = [
    "Установка Windows (7, 10, 11)",
    "Установка macOS",
    "Установка Linux",
    "Установка драйверов",
    "Установка офисных программ",
    "Установка антивирусов",
    "Настройка программ",
    "Перенос данных"
  ];

  const prices = [
    { name: "Установка Windows", price: "от 1000 ₽" },
    { name: "Установка драйверов", price: "от 500 ₽" },
    { name: "Установка Office", price: "от 800 ₽" },
    { name: "Установка антивируса", price: "от 600 ₽" },
    { name: "Установка программ (до 10)", price: "от 1200 ₽" },
    { name: "Настройка системы", price: "от 1500 ₽" },
    { name: "Перенос данных", price: "от 1000 ₽" },
    { name: "Создание резервной копии", price: "от 800 ₽" }
  ];

  const software = [
    { category: "Операционные системы", items: ["Windows 11", "Windows 10", "macOS", "Ubuntu Linux"] },
    { category: "Офисные программы", items: ["Microsoft Office", "LibreOffice", "Adobe Acrobat", "Notepad++"] },
    { category: "Антивирусы", items: ["Kaspersky", "ESET", "Avast", "Windows Defender"] },
    { category: "Мультимедиа", items: ["Adobe Photoshop", "VLC Player", "OBS Studio", "Audacity"] },
    { category: "Браузеры", items: ["Google Chrome", "Mozilla Firefox", "Microsoft Edge", "Opera"] },
    { category: "Архиваторы", items: ["WinRAR", "7-Zip", "WinZip", "PeaZip"] }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Settings className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Установка программного обеспечения</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Профессиональная установка операционных систем, драйверов и программ. 
            Настройка ПО под ваши задачи с гарантией стабильной работы.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Что мы устанавливаем</CardTitle>
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

        {/* Software Categories */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Популярное программное обеспечение</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {software.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-2">
                        <Download className="w-4 h-4 text-blue-600" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Лицензионное ПО</h3>
            <p className="text-gray-600">Устанавливаем только лицензионные программы</p>
          </div>
          <div className="text-center">
            <Cpu className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Оптимизация</h3>
            <p className="text-gray-600">Настраиваем ПО для максимальной производительности</p>
          </div>
          <div className="text-center">
            <HardDrive className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Резервное копирование</h3>
            <p className="text-gray-600">Создаем резервные копии перед установкой</p>
          </div>
        </div>

        {/* OS Installation Packages */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Пакеты установки ОС</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="text-xl font-semibold mb-4 text-blue-800">Базовый</h4>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li>• Установка Windows</li>
                  <li>• Установка драйверов</li>
                  <li>• Базовые программы</li>
                  <li>• Настройка системы</li>
                </ul>
                <div className="text-2xl font-bold text-blue-600">2500 ₽</div>
              </div>
              <div className="p-6 bg-green-50 rounded-lg border border-green-200">
                <h4 className="text-xl font-semibold mb-4 text-green-800">Стандартный</h4>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li>• Все из базового пакета</li>
                  <li>• Microsoft Office</li>
                  <li>• Антивирус</li>
                  <li>• Перенос данных</li>
                  <li>• Настройка интернета</li>
                </ul>
                <div className="text-2xl font-bold text-green-600">4000 ₽</div>
              </div>
              <div className="p-6 bg-purple-50 rounded-lg border border-purple-200">
                <h4 className="text-xl font-semibold mb-4 text-purple-800">Премиум</h4>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li>• Все из стандартного пакета</li>
                  <li>• Специализированное ПО</li>
                  <li>• Настройка безопасности</li>
                  <li>• Обучение пользователя</li>
                  <li>• Техподдержка 3 месяца</li>
                </ul>
                <div className="text-2xl font-bold text-purple-600">6000 ₽</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Нужна установка программ?
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Установим и настроим любое ПО под ваши задачи
          </p>
          <Button size="lg" asChild>
            <Link to="/order">Заказать установку ПО</Link>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SoftwareInstallation;