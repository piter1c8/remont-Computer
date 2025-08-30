import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Zap, CheckCircle, Cpu, HardDrive, Monitor, MemoryStick } from 'lucide-react';

const HardwareUpgrade = () => {
  const upgrades = [
    "Увеличение оперативной памяти",
    "Замена HDD на SSD",
    "Установка более мощного процессора",
    "Замена видеокарты",
    "Установка дополнительных накопителей",
    "Замена материнской платы",
    "Установка системы охлаждения",
    "Замена блока питания"
  ];

  const services = [
    { name: "Увеличение RAM до 16GB", price: "от 4000 ₽" },
    { name: "Установка SSD 500GB", price: "от 5000 ₽" },
    { name: "Замена процессора", price: "от 3000 ₽" },
    { name: "Установка видеокарты", price: "от 2500 ₽" },
    { name: "Замена материнской платы", price: "от 4000 ₽" },
    { name: "Установка системы охлаждения", price: "от 2000 ₽" },
    { name: "Замена блока питания", price: "от 1500 ₽" },
    { name: "Консультация по апгрейду", price: "Бесплатно" }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Увеличение скорости",
      description: "Ваш компьютер будет работать в разы быстрее"
    },
    {
      icon: <Monitor className="w-8 h-8 text-blue-600" />,
      title: "Лучшая графика",
      description: "Современные игры и программы будут работать плавно"
    },
    {
      icon: <HardDrive className="w-8 h-8 text-blue-600" />,
      title: "Больше места",
      description: "Дополнительное пространство для ваших файлов"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Zap className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Апгрейд компьютеров</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Модернизируем ваш компьютер для повышения производительности. 
            Подберем оптимальную конфигурацию под ваши задачи и бюджет.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Виды модернизации</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {upgrades.map((upgrade, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{upgrade}</span>
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
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Popular Upgrades */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Популярные конфигурации апгрейда</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="text-xl font-semibold mb-4 text-blue-800">Базовый</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• RAM 8GB → 16GB</li>
                  <li>• HDD → SSD 500GB</li>
                  <li>• Чистка от пыли</li>
                </ul>
                <div className="mt-4 text-2xl font-bold text-blue-600">от 8000 ₽</div>
              </div>
              <div className="p-6 bg-green-50 rounded-lg border border-green-200">
                <h4 className="text-xl font-semibold mb-4 text-green-800">Игровой</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• RAM до 32GB</li>
                  <li>• SSD 1TB</li>
                  <li>• Видеокарта GTX/RTX</li>
                  <li>• Мощный БП</li>
                </ul>
                <div className="mt-4 text-2xl font-bold text-green-600">от 25000 ₽</div>
              </div>
              <div className="p-6 bg-purple-50 rounded-lg border border-purple-200">
                <h4 className="text-xl font-semibold mb-4 text-purple-800">Профессиональный</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Процессор i7/Ryzen 7</li>
                  <li>• RAM 64GB</li>
                  <li>• SSD 2TB</li>
                  <li>• Профессиональная видеокарта</li>
                </ul>
                <div className="mt-4 text-2xl font-bold text-purple-600">от 50000 ₽</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Хотите ускорить компьютер?
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Подберем оптимальную конфигурацию под ваши задачи и бюджет
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/order">Заказать апгрейд</Link>
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

export default HardwareUpgrade;