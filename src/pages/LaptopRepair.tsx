import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Laptop, CheckCircle, Clock, Award, Battery, Keyboard, Monitor } from 'lucide-react';

const LaptopRepair = () => {
  const problems = [
    "Разбитый экран ноутбука",
    "Не работает клавиатура",
    "Проблемы с зарядкой",
    "Перегрев и шум вентилятора",
    "Не включается ноутбук",
    "Проблемы с Wi-Fi",
    "Медленная работа",
    "Проблемы с тачпадом"
  ];

  const services = [
    { name: "Замена экрана ноутбука", price: "от 4000 ₽" },
    { name: "Замена клавиатуры", price: "от 2500 ₽" },
    { name: "Замена аккумулятора", price: "от 3000 ₽" },
    { name: "Чистка от пыли", price: "от 1500 ₽" },
    { name: "Замена материнской платы", price: "от 5000 ₽" },
    { name: "Ремонт разъема питания", price: "от 2000 ₽" },
    { name: "Замена жесткого диска", price: "от 2000 ₽" },
    { name: "Ремонт петель экрана", price: "от 1800 ₽" }
  ];

  const brands = [
    "ASUS", "Acer", "HP", "Dell", "Lenovo", "MSI", "Apple MacBook", 
    "Samsung", "Toshiba", "Sony", "Fujitsu", "Packard Bell"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Laptop className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Ремонт ноутбуков в Москве</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Качественный ремонт ноутбуков всех марок и моделей. Замена экранов, 
            клавиатур, материнских плат. Гарантия на все работы.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Problems We Solve */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Типичные поломки ноутбуков</CardTitle>
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

          {/* Services and Prices */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Услуги и цены</CardTitle>
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

        {/* Supported Brands */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Ремонтируем ноутбуки всех брендов</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
              {brands.map((brand, index) => (
                <div key={index} className="p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                  <span className="font-semibold">{brand}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Process */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <Battery className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Диагностика</h3>
            <p className="text-gray-600">Бесплатно определяем причину поломки и составляем план ремонта</p>
          </div>
          <div className="text-center">
            <Keyboard className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Ремонт</h3>
            <p className="text-gray-600">Выполняем работы с использованием оригинальных запчастей</p>
          </div>
          <div className="text-center">
            <Monitor className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Тестирование</h3>
            <p className="text-gray-600">Проверяем качество работы и предоставляем гарантию</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Сломался ноутбук?
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Принесите к нам - отремонтируем быстро и качественно!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/order">Заказать ремонт</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/prices">Узнать цены</Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LaptopRepair;