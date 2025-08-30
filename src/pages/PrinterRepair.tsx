import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Printer, CheckCircle, Wrench, FileText } from 'lucide-react';

const PrinterRepair = () => {
  const problems = [
    "Принтер не печатает",
    "Плохое качество печати",
    "Замятие бумаги",
    "Не захватывает бумагу",
    "Полосы на печати",
    "Принтер не включается",
    "Ошибки картриджей",
    "Проблемы с подключением"
  ];

  const services = [
    { name: "Диагностика принтера", price: "Бесплатно" },
    { name: "Чистка печатающей головки", price: "от 800 ₽" },
    { name: "Замена картриджей", price: "от 1500 ₽" },
    { name: "Ремонт механизма подачи", price: "от 2000 ₽" },
    { name: "Замена блока питания", price: "от 1800 ₽" },
    { name: "Настройка печати", price: "от 500 ₽" },
    { name: "Заправка картриджей", price: "от 600 ₽" },
    { name: "Профилактическое обслуживание", price: "от 1000 ₽" }
  ];

  const brands = [
    "HP", "Canon", "Epson", "Brother", "Samsung", "Xerox", 
    "Kyocera", "Ricoh", "Lexmark", "OKI", "Pantum", "Konica Minolta"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Printer className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Ремонт принтеров</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Профессиональный ремонт струйных и лазерных принтеров всех марок. 
            Заправка картриджей, замена комплектующих, настройка печати.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Частые проблемы принтеров</CardTitle>
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
              <CardTitle className="text-2xl">Стоимость услуг</CardTitle>
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
            <CardTitle className="text-2xl text-center">Ремонтируем принтеры всех брендов</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {brands.map((brand, index) => (
                <div key={index} className="text-center p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                  <span className="font-semibold">{brand}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <Wrench className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Ремонт механики</h3>
            <p className="text-gray-600">Восстанавливаем механизмы подачи бумаги и печати</p>
          </div>
          <div className="text-center">
            <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Заправка картриджей</h3>
            <p className="text-gray-600">Качественная заправка с гарантией</p>
          </div>
          <div className="text-center">
            <CheckCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Настройка печати</h3>
            <p className="text-gray-600">Оптимизируем качество и скорость печати</p>
          </div>
        </div>

        {/* Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-xl text-blue-800">Струйные принтеры</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li>• Чистка печатающих головок</li>
                <li>• Заправка картриджей</li>
                <li>• Замена СНПЧ</li>
                <li>• Калибровка цветов</li>
                <li>• Ремонт механизмов</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-green-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-xl text-green-800">Лазерные принтеры</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li>• Заправка тонер-картриджей</li>
                <li>• Замена фотобарабана</li>
                <li>• Чистка лазерного блока</li>
                <li>• Ремонт термоузла</li>
                <li>• Замена роликов подачи</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Проблемы с принтером?
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Принесите к нам - восстановим качественную печать!
          </p>
          <Button size="lg" asChild>
            <Link to="/order">Заказать ремонт принтера</Link>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrinterRepair;