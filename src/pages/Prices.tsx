import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DollarSign, CheckCircle, Clock, Award } from 'lucide-react';

const Prices = () => {
  const priceCategories = [
    {
      title: "Ремонт ноутбуков",
      services: [
        { name: "Замена экрана", price: "от 4000 ₽" },
        { name: "Замена клавиатуры", price: "от 2500 ₽" },
        { name: "Замена аккумулятора", price: "от 3000 ₽" },
        { name: "Чистка от пыли", price: "от 1500 ₽" },
        { name: "Замена материнской платы", price: "от 5000 ₽" },
        { name: "Ремонт разъема питания", price: "от 2000 ₽" }
      ]
    },
    {
      title: "Ремонт настольных ПК",
      services: [
        { name: "Замена материнской платы", price: "от 3000 ₽" },
        { name: "Замена блока питания", price: "от 1500 ₽" },
        { name: "Замена процессора", price: "от 2000 ₽" },
        { name: "Замена оперативной памяти", price: "от 1000 ₽" },
        { name: "Замена жесткого диска", price: "от 1500 ₽" },
        { name: "Чистка от пыли", price: "от 1000 ₽" }
      ]
    },
    {
      title: "Программные услуги",
      services: [
        { name: "Установка Windows", price: "от 1000 ₽" },
        { name: "Удаление вирусов", price: "от 1000 ₽" },
        { name: "Установка программ", price: "от 500 ₽" },
        { name: "Настройка Wi-Fi", price: "от 800 ₽" },
        { name: "Восстановление данных", price: "от 3000 ₽" },
        { name: "Настройка антивируса", price: "от 600 ₽" }
      ]
    },
    {
      title: "Апгрейд и модернизация",
      services: [
        { name: "Увеличение RAM", price: "от 1000 ₽" },
        { name: "Установка SSD", price: "от 1500 ₽" },
        { name: "Замена видеокарты", price: "от 2500 ₽" },
        { name: "Установка дополнительного HDD", price: "от 1200 ₽" },
        { name: "Замена системы охлаждения", price: "от 2000 ₽" },
        { name: "Консультация по апгрейду", price: "Бесплатно" }
      ]
    }
  ];

  const features = [
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Быстрое выполнение",
      description: "Большинство работ выполняем в день обращения"
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Гарантия качества",
      description: "Предоставляем гарантию на все виды работ"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
      title: "Честные цены",
      description: "Никаких скрытых доплат и переплат"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <DollarSign className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Цены на ремонт компьютеров</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Прозрачное ценообразование без скрытых доплат. Все цены указаны за работу, 
            стоимость запчастей рассчитывается отдельно.
          </p>
        </div>

        {/* Price Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {priceCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                      <span>{service.name}</span>
                      <span className="font-semibold text-blue-600">{service.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Discounts */}
        <Card className="mb-12 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-green-800">Скидки и акции</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-green-600 mb-2">10%</div>
                <h4 className="font-semibold mb-2">Скидка для новых клиентов</h4>
                <p className="text-gray-600">На первый ремонт при заказе через сайт</p>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-green-600 mb-2">15%</div>
                <h4 className="font-semibold mb-2">Скидка пенсионерам</h4>
                <p className="text-gray-600">Постоянная скидка для пенсионеров</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Important Notes */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Важная информация</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-gray-700">
              <li>• Диагностика всегда бесплатна</li>
              <li>• Цены указаны за работу без учета стоимости запчастей</li>
              <li>• Стоимость запчастей рассчитывается по текущим ценам поставщиков</li>
              <li>• При отказе от ремонта диагностика остается бесплатной</li>
              <li>• Предоставляем гарантию на все виды работ</li>
              <li>• Возможна оплата наличными и картой</li>
            </ul>
          </CardContent>
        </Card>

        <div className="text-center bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Нужна точная стоимость ремонта?
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Принесите технику на бесплатную диагностику
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/order">Заказать диагностику</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contacts">Задать вопрос</Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Prices;