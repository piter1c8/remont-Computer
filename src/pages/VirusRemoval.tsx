import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, CheckCircle, AlertTriangle, Lock, Scan, RefreshCw } from 'lucide-react';

const VirusRemoval = () => {
  const symptoms = [
    "Медленная работа компьютера",
    "Всплывающие окна и реклама",
    "Изменение стартовой страницы браузера",
    "Блокировка антивируса",
    "Неожиданные перезагрузки",
    "Недоступность файлов",
    "Странные сообщения на экране",
    "Высокая нагрузка на процессор"
  ];

  const services = [
    { name: "Удаление вирусов и троянов", price: "от 1000 ₽" },
    { name: "Удаление рекламного ПО", price: "от 800 ₽" },
    { name: "Разблокировка Windows", price: "от 1500 ₽" },
    { name: "Установка антивируса", price: "от 500 ₽" },
    { name: "Настройка брандмауэра", price: "от 600 ₽" },
    { name: "Очистка браузеров", price: "от 400 ₽" },
    { name: "Восстановление системы", price: "от 1200 ₽" },
    { name: "Профилактика безопасности", price: "от 1000 ₽" }
  ];

  const threats = [
    { name: "Вирусы", description: "Программы, повреждающие файлы и систему" },
    { name: "Трояны", description: "Скрытые программы для кражи данных" },
    { name: "Рекламное ПО", description: "Навязчивая реклама и изменение настроек" },
    { name: "Шпионское ПО", description: "Программы для слежения за пользователем" },
    { name: "Руткиты", description: "Скрытые программы с правами администратора" },
    { name: "Вымогатели", description: "Блокировка файлов с требованием выкупа" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Удаление вирусов и защита ПК</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Профессиональная очистка от вредоносного ПО и настройка надежной защиты. 
            Восстанавливаем безопасность вашего компьютера.
          </p>
        </div>

        {/* Warning */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-12">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-red-800 mb-2">Признаки заражения</h3>
              <p className="text-red-700">
                Если ваш компьютер работает медленно, показывает рекламу или ведет себя странно - 
                возможно, он заражен вирусами. Обратитесь к нам для диагностики.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Симптомы заражения</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {symptoms.map((symptom, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{symptom}</span>
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

        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Типы угроз, которые мы устраняем</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {threats.map((threat, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">{threat.name}</h4>
                  <p className="text-gray-600">{threat.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <Scan className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Глубокое сканирование</h3>
            <p className="text-gray-600">Находим и удаляем даже скрытые угрозы</p>
          </div>
          <div className="text-center">
            <Lock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Настройка защиты</h3>
            <p className="text-gray-600">Устанавливаем надежную антивирусную защиту</p>
          </div>
          <div className="text-center">
            <RefreshCw className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Восстановление системы</h3>
            <p className="text-gray-600">Возвращаем нормальную работу операционной системы</p>
          </div>
        </div>

        <div className="text-center bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Подозреваете заражение?
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Не рискуйте своими данными - обратитесь к профессионалам!
          </p>
          <Button size="lg" asChild>
            <Link to="/order">Заказать очистку от вирусов</Link>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default VirusRemoval;