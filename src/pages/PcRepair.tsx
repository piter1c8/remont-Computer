import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Monitor, CheckCircle, Clock, Award } from 'lucide-react';

const PcRepair = () => {
  const problems = [
    "Компьютер не включается",
    "Синий экран смерти (BSOD)",
    "Медленная работа системы",
    "Перегрев процессора",
    "Проблемы с материнской платой",
    "Неисправность блока питания",
    "Проблемы с оперативной памятью",
    "Неработающие USB-порты"
  ];

  const services = [
    { name: "Диагностика неисправностей", price: "Бесплатно" },
    { name: "Замена материнской платы", price: "от 3000 ₽" },
    { name: "Замена блока питания", price: "от 1500 ₽" },
    { name: "Замена процессора", price: "от 2000 ₽" },
    { name: "Замена оперативной памяти", price: "от 1000 ₽" },
    { name: "Замена жесткого диска", price: "от 1500 ₽" },
    { name: "Чистка от пыли", price: "от 1000 ₽" },
    { name: "Замена термопасты", price: "от 800 ₽" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Monitor className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Ремонт настольных компьютеров</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Профессиональный ремонт системных блоков любой сложности. 
            Работаем с компьютерами всех производителей и конфигураций.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Problems We Solve */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Какие проблемы мы решаем</CardTitle>
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

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Быстрый ремонт</h3>
            <p className="text-gray-600">Большинство работ выполняем в течение 1-2 дней</p>
          </div>
          <div className="text-center">
            <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Гарантия 12 месяцев</h3>
            <p className="text-gray-600">Предоставляем расширенную гарантию на все работы</p>
          </div>
          <div className="text-center">
            <CheckCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Оригинальные запчасти</h3>
            <p className="text-gray-600">Используем только качественные комплектующие</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Нужен ремонт компьютера?
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Оставьте заявку и получите бесплатную диагностику
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/order">Заказать ремонт</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/diagnostics">Бесплатная диагностика</Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PcRepair;