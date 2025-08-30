import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, CheckCircle, Clock, Award, Cpu, HardDrive, MemoryStick } from 'lucide-react';

const Diagnostics = () => {
  const diagnosticSteps = [
    "Внешний осмотр устройства",
    "Проверка блока питания",
    "Тестирование оперативной памяти",
    "Диагностика жесткого диска",
    "Проверка материнской платы",
    "Тестирование процессора",
    "Проверка системы охлаждения",
    "Анализ программного обеспечения"
  ];

  const equipment = [
    {
      icon: <Cpu className="w-8 h-8 text-blue-600" />,
      name: "Тестеры процессоров",
      description: "Профессиональное оборудование для диагностики CPU"
    },
    {
      icon: <MemoryStick className="w-8 h-8 text-blue-600" />,
      name: "Тестеры памяти",
      description: "Специализированные устройства для проверки RAM"
    },
    {
      icon: <HardDrive className="w-8 h-8 text-blue-600" />,
      name: "Анализаторы дисков",
      description: "Программно-аппаратные комплексы для HDD/SSD"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Search className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Бесплатная диагностика компьютеров</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Профессиональная диагностика поможет точно определить причину неисправности 
            и составить план ремонта. Диагностика абсолютно бесплатна!
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Быстро</h3>
            <p className="text-gray-600">Диагностика занимает 30-60 минут</p>
          </div>
          <div className="text-center">
            <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Бесплатно</h3>
            <p className="text-gray-600">Не берем плату за диагностику</p>
          </div>
          <div className="text-center">
            <CheckCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Точно</h3>
            <p className="text-gray-600">Определяем точную причину поломки</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Этапы диагностики</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {diagnosticSteps.map((step, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Что вы получите</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold">Подробный отчет</div>
                    <div className="text-gray-600">О состоянии всех компонентов</div>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold">План ремонта</div>
                    <div className="text-gray-600">С указанием стоимости и сроков</div>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold">Рекомендации</div>
                    <div className="text-gray-600">По дальнейшему обслуживанию</div>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Equipment */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Профессиональное оборудование</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {equipment.map((item, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{item.name}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Process */}
        <div className="bg-white rounded-lg p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Как проходит диагностика</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h4 className="font-semibold mb-2">Прием устройства</h4>
              <p className="text-gray-600 text-sm">Принимаем ваш компьютер и фиксируем проблему</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h4 className="font-semibold mb-2">Тестирование</h4>
              <p className="text-gray-600 text-sm">Проводим комплексную проверку всех компонентов</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h4 className="font-semibold mb-2">Анализ</h4>
              <p className="text-gray-600 text-sm">Определяем причины неисправности</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h4 className="font-semibold mb-2">Отчет</h4>
              <p className="text-gray-600 text-sm">Предоставляем подробный отчет и план ремонта</p>
            </div>
          </div>
        </div>

        <div className="text-center bg-blue-600 text-white rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">
            Запишитесь на бесплатную диагностику
          </h2>
          <p className="text-xl mb-6">
            Узнайте точную причину поломки без переплат
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/order">Записаться на диагностику</Link>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Diagnostics;