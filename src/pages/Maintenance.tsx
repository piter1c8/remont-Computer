import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Wrench, CheckCircle, Thermometer, Fan, Droplets, Clock } from 'lucide-react';

const Maintenance = () => {
  const services = [
    "Чистка от пыли и грязи",
    "Замена термопасты",
    "Проверка системы охлаждения",
    "Диагностика всех компонентов",
    "Обновление драйверов",
    "Оптимизация системы",
    "Проверка жестких дисков",
    "Тестирование оперативной памяти"
  ];

  const prices = [
    { name: "Чистка настольного ПК", price: "от 1000 ₽" },
    { name: "Чистка ноутбука", price: "от 1500 ₽" },
    { name: "Замена термопасты ПК", price: "от 800 ₽" },
    { name: "Замена термопасты ноутбука", price: "от 1200 ₽" },
    { name: "Полная профилактика ПК", price: "от 2000 ₽" },
    { name: "Полная профилактика ноутбука", price: "от 2500 ₽" },
    { name: "Замена вентиляторов", price: "от 1500 ₽" },
    { name: "Диагностика перегрева", price: "Бесплатно" }
  ];

  const signs = [
    "Сильный шум вентиляторов",
    "Высокая температура корпуса",
    "Частые зависания",
    "Автоматические перезагрузки",
    "Медленная работа",
    "Пыль в вентиляционных отверстиях",
    "Странные звуки из корпуса",
    "Синие экраны смерти"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Wrench className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Профилактическое обслуживание</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Регулярное обслуживание продлевает жизнь вашего компьютера и предотвращает 
            серьезные поломки. Рекомендуем проводить профилактику раз в год.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Что включает профилактика</CardTitle>
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

        {/* Warning Signs */}
        <Card className="mb-12 bg-yellow-50 border-yellow-200">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-yellow-800">
              Признаки необходимости профилактики
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {signs.map((sign, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                  <span>{sign}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Process */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <Droplets className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Чистка</h3>
            <p className="text-gray-600">Удаляем пыль и грязь из всех компонентов</p>
          </div>
          <div className="text-center">
            <Thermometer className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Термопаста</h3>
            <p className="text-gray-600">Заменяем термопасту для лучшего охлаждения</p>
          </div>
          <div className="text-center">
            <Fan className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Вентиляторы</h3>
            <p className="text-gray-600">Проверяем и смазываем систему охлаждения</p>
          </div>
          <div className="text-center">
            <Settings className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Настройка</h3>
            <p className="text-gray-600">Оптимизируем работу системы</p>
          </div>
        </div>

        {/* Benefits */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Преимущества регулярной профилактики</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-green-700">Что вы получаете:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Увеличение срока службы</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Снижение температуры</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Тихая работа</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Стабильная работа</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-red-700">Что предотвращаете:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-red-500" />
                    <span>Перегрев компонентов</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-red-500" />
                    <span>Выход из строя процессора</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-red-500" />
                    <span>Поломку материнской платы</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-red-500" />
                    <span>Дорогостоящий ремонт</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Schedule */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Рекомендуемая периодичность</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">Домашние ПК</h4>
                <p className="text-gray-600">Раз в 12-18 месяцев</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <Clock className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">Офисные компьютеры</h4>
                <p className="text-gray-600">Раз в 6-12 месяцев</p>
              </div>
              <div className="text-center p-6 bg-red-50 rounded-lg">
                <Clock className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">Игровые ПК</h4>
                <p className="text-gray-600">Раз в 6 месяцев</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Пора почистить компьютер?
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Не ждите поломки - закажите профилактику уже сегодня!
          </p>
          <Button size="lg" asChild>
            <Link to="/order">Заказать профилактику</Link>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Maintenance;