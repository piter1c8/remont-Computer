import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Phone, Clock, Zap, Car, CheckCircle } from 'lucide-react';

const Emergency = () => {
  const emergencyServices = [
    "Восстановление после сбоя системы",
    "Экстренное удаление вирусов",
    "Восстановление важных данных",
    "Ремонт после залития жидкостью",
    "Восстановление работы сервера",
    "Срочная замена комплектующих"
  ];

  const responseTime = [
    { area: "Центр Москвы", time: "30-60 минут" },
    { area: "В пределах МКАД", time: "1-2 часа" },
    { area: "Ближнее Подмосковье", time: "2-3 часа" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <AlertTriangle className="w-16 h-16 text-red-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Экстренный ремонт 24/7</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Компьютер сломался в самый неподходящий момент? Мы работаем круглосуточно 
            и готовы выехать к вам в любое время!
          </p>
        </div>

        {/* Emergency Contact */}
        <div className="bg-red-600 text-white rounded-lg p-8 text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Экстренная линия</h2>
          <div className="text-4xl font-bold mb-4">+7 (495) 123-45-67</div>
          <p className="text-xl mb-6">Звоните прямо сейчас - мастер выедет к вам!</p>
          <Button size="lg" variant="secondary">
            <Phone className="w-5 h-5 mr-2" />
            Позвонить сейчас
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Экстренные услуги</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {emergencyServices.map((service, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Время выезда мастера</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {responseTime.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                    <span>{item.area}</span>
                    <span className="font-semibold text-red-600">{item.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <Clock className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">24/7 доступность</h3>
            <p className="text-gray-600">Работаем круглосуточно, включая выходные и праздники</p>
          </div>
          <div className="text-center">
            <Car className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Выезд на дом</h3>
            <p className="text-gray-600">Мастер приедет к вам с необходимым оборудованием</p>
          </div>
          <div className="text-center">
            <Zap className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Быстрое решение</h3>
            <p className="text-gray-600">Многие проблемы решаем на месте за 1-2 часа</p>
          </div>
        </div>

        {/* Pricing */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Стоимость экстренных услуг</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Выезд мастера:</h4>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>В рабочее время (9:00-21:00)</span>
                    <span className="font-semibold">1500 ₽</span>
                  </li>
                  <li className="flex justify-between">
                    <span>В ночное время (21:00-9:00)</span>
                    <span className="font-semibold">2500 ₽</span>
                  </li>
                  <li className="flex justify-between">
                    <span>В выходные и праздники</span>
                    <span className="font-semibold">2000 ₽</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Надбавки за срочность:</h4>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Срочный ремонт (1-2 дня)</span>
                    <span className="font-semibold">+50%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Экстренный (в день обращения)</span>
                    <span className="font-semibold">+100%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Ночной ремонт</span>
                    <span className="font-semibold">+150%</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Situations */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Когда нужен экстренный ремонт</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span>Важная презентация завтра</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span>Сдача проекта на работе</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span>Экзамены в университете</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span>Важные документы заблокированы</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span>Сервер компании не работает</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span>Потеря важных данных</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span>Вирусная атака</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span>Поломка перед важным событием</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <div className="text-center bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Нужна экстренная помощь?
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Не ждите - звоните прямо сейчас!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              <Phone className="w-5 h-5 mr-2" />
              Экстренный вызов
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/order">Обычная заявка</Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Emergency;