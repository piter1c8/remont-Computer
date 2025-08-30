import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Smartphone, CheckCircle, Battery, Wifi } from 'lucide-react';

const TabletRepair = () => {
  const problems = [
    "Разбитый сенсорный экран",
    "Не заряжается планшет",
    "Проблемы с Wi-Fi",
    "Не работает звук",
    "Планшет не включается",
    "Проблемы с камерой",
    "Медленная работа",
    "Проблемы с кнопками"
  ];

  const services = [
    { name: "Замена сенсорного экрана", price: "от 3500 ₽" },
    { name: "Замена аккумулятора", price: "от 2500 ₽" },
    { name: "Ремонт разъема зарядки", price: "от 1800 ₽" },
    { name: "Замена динамиков", price: "от 1500 ₽" },
    { name: "Ремонт материнской платы", price: "от 4000 ₽" },
    { name: "Замена камеры", price: "от 2000 ₽" },
    { name: "Чистка от пыли", price: "от 1000 ₽" },
    { name: "Замена кнопок", price: "от 1200 ₽" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Smartphone className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Ремонт планшетов</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Восстанавливаем работоспособность планшетов iPad, Samsung, Huawei и других брендов. 
            Замена экранов, аккумуляторов, ремонт материнских плат.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Частые поломки планшетов</CardTitle>
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <Battery className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Замена аккумуляторов</h3>
            <p className="text-gray-600">Восстанавливаем автономность работы планшета</p>
          </div>
          <div className="text-center">
            <Smartphone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Замена экранов</h3>
            <p className="text-gray-600">Устанавливаем качественные дисплеи с сенсором</p>
          </div>
          <div className="text-center">
            <Wifi className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Ремонт модулей связи</h3>
            <p className="text-gray-600">Восстанавливаем Wi-Fi, Bluetooth, 3G/4G</p>
          </div>
        </div>

        <div className="text-center bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Планшет требует ремонта?
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Принесите к нам - вернем к жизни любой планшет!
          </p>
          <Button size="lg" asChild>
            <Link to="/order">Заказать ремонт планшета</Link>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TabletRepair;