import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Database, CheckCircle, Server, Shield, Network, HardDrive } from 'lucide-react';

const ServerSetup = () => {
  const services = [
    "Установка серверных ОС",
    "Настройка Active Directory",
    "Создание файлового сервера",
    "Настройка почтового сервера",
    "Установка веб-сервера",
    "Настройка базы данных",
    "Создание резервных копий",
    "Мониторинг сервера"
  ];

  const prices = [
    { name: "Установка Windows Server", price: "от 5000 ₽" },
    { name: "Настройка Active Directory", price: "от 8000 ₽" },
    { name: "Файловый сервер", price: "от 6000 ₽" },
    { name: "Почтовый сервер", price: "от 10000 ₽" },
    { name: "Веб-сервер (Apache/Nginx)", price: "от 7000 ₽" },
    { name: "База данных (MySQL/PostgreSQL)", price: "от 8000 ₽" },
    { name: "Система резервного копирования", price: "от 5000 ₽" },
    { name: "Мониторинг и алерты", price: "от 4000 ₽" }
  ];

  const serverTypes = [
    {
      title: "Файловый сервер",
      description: "Централизованное хранение и общий доступ к файлам",
      features: ["Общие папки", "Права доступа", "Резервное копирование", "Версионность файлов"]
    },
    {
      title: "Веб-сервер",
      description: "Размещение веб-сайтов и веб-приложений",
      features: ["Apache/Nginx", "PHP/Python", "SSL сертификаты", "Балансировка нагрузки"]
    },
    {
      title: "Сервер баз данных",
      description: "Хранение и обработка структурированных данных",
      features: ["MySQL/PostgreSQL", "Репликация", "Кластеризация", "Оптимизация запросов"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Database className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Настройка серверов</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Профессиональная установка и настройка серверного оборудования для бизнеса. 
            Обеспечиваем надежную работу корпоративной инфраструктуры.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Серверные услуги</CardTitle>
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
              <CardTitle className="text-2xl">Стоимость работ</CardTitle>
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

        {/* Server Types */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Типы серверов</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serverTypes.map((server, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{server.title}</CardTitle>
                  <CardDescription>{server.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {server.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
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
            <Server className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Серверное железо</h3>
            <p className="text-gray-600">Работаем с оборудованием Dell, HP, IBM, Supermicro</p>
          </div>
          <div className="text-center">
            <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Безопасность</h3>
            <p className="text-gray-600">Настраиваем защиту от внешних угроз</p>
          </div>
          <div className="text-center">
            <Network className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Сетевая инфраструктура</h3>
            <p className="text-gray-600">Интеграция в существующую сеть компании</p>
          </div>
        </div>

        {/* OS Options */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Поддерживаемые операционные системы</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold mb-2">Windows Server</h4>
                <p className="text-sm text-gray-600">2016, 2019, 2022</p>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <h4 className="font-semibold mb-2">Red Hat Linux</h4>
                <p className="text-sm text-gray-600">RHEL 8, 9</p>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <h4 className="font-semibold mb-2">Ubuntu Server</h4>
                <p className="text-sm text-gray-600">20.04, 22.04 LTS</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold mb-2">CentOS</h4>
                <p className="text-sm text-gray-600">7, 8, Stream</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Нужен корпоративный сервер?
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Настроим надежную серверную инфраструктуру для вашего бизнеса
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/order">Заказать настройку сервера</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/consultation">Бесплатная консультация</Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServerSetup;