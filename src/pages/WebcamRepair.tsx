import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Camera, CheckCircle, Video, Mic, Settings } from 'lucide-react';

const WebcamRepair = () => {
  const problems = [
    "Веб-камера не работает",
    "Плохое качество изображения",
    "Нет звука с микрофона",
    "Камера не определяется системой",
    "Черный экран вместо видео",
    "Искажение изображения",
    "Проблемы с драйверами",
    "Камера работает в одних программах, не работает в других"
  ];

  const services = [
    { name: "Диагностика веб-камеры", price: "Бесплатно" },
    { name: "Установка драйверов", price: "от 500 ₽" },
    { name: "Замена веб-камеры ноутбука", price: "от 2000 ₽" },
    { name: "Ремонт шлейфа камеры", price: "от 1500 ₽" },
    { name: "Настройка качества видео", price: "от 600 ₽" },
    { name: "Ремонт микрофона", price: "от 1200 ₽" },
    { name: "Замена внешней веб-камеры", price: "от 1000 ₽" },
    { name: "Настройка программ видеосвязи", price: "от 800 ₽" }
  ];

  const applications = [
    "Zoom", "Skype", "Microsoft Teams", "Google Meet", 
    "Discord", "WhatsApp", "Telegram", "Viber"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Camera className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Ремонт веб-камер</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Восстанавливаем работу встроенных и внешних веб-камер. Настраиваем 
            качественное видео для онлайн-встреч и видеозвонков.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Частые проблемы с веб-камерами</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {problems.map((problem, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{problem}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Стоимость ремонта</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                    <span>{service.name}</span>
                    <span className="font-semibold text-blue-600">{service.price}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Applications */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Настраиваем работу с популярными приложениями</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {applications.map((app, index) => (
                <div key={index} className="text-center p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                  <span className="font-semibold">{app}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <Video className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Качество видео</h3>
            <p className="text-gray-600">Настраиваем оптимальное качество изображения</p>
          </div>
          <div className="text-center">
            <Mic className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Качество звука</h3>
            <p className="text-gray-600">Обеспечиваем четкий звук встроенного микрофона</p>
          </div>
          <div className="text-center">
            <Settings className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Настройка программ</h3>
            <p className="text-gray-600">Оптимизируем работу в видеоконференциях</p>
          </div>
        </div>

        {/* Camera Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-xl text-blue-800">Встроенные камеры</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li>• Ремонт шлейфа камеры</li>
                <li>• Замена модуля камеры</li>
                <li>• Настройка драйверов</li>
                <li>• Калибровка изображения</li>
                <li>• Ремонт микрофона</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-green-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-xl text-green-800">Внешние камеры</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li>• Ремонт USB разъемов</li>
                <li>• Замена объектива</li>
                <li>• Настройка автофокуса</li>
                <li>• Калибровка цветов</li>
                <li>• Подключение к сети</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Troubleshooting */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Быстрая диагностика проблем</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-red-700">Камера не работает:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Проверьте диспетчер устройств</li>
                  <li>• Обновите драйверы</li>
                  <li>• Проверьте настройки приватности</li>
                  <li>• Перезагрузите компьютер</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-blue-700">Плохое качество:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Очистите объектив</li>
                  <li>• Проверьте освещение</li>
                  <li>• Настройте разрешение</li>
                  <li>• Обновите программу</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Проблемы с веб-камерой?
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Восстановим качественное видео для ваших онлайн-встреч
          </p>
          <Button size="lg" asChild>
            <Link to="/order">Заказать ремонт веб-камеры</Link>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WebcamRepair;