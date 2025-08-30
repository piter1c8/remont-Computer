import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Monitor, 
  Laptop, 
  Smartphone, 
  HardDrive, 
  Shield, 
  Zap, 
  Clock, 
  Award,
  Users,
  CheckCircle
} from 'lucide-react';

const Index = () => {
  const services = [
    {
      icon: <Monitor className="w-12 h-12 text-blue-600" />,
      title: "Ремонт настольных ПК",
      description: "Диагностика и ремонт системных блоков любой сложности",
      link: "/pc-repair"
    },
    {
      icon: <Laptop className="w-12 h-12 text-blue-600" />,
      title: "Ремонт ноутбуков",
      description: "Замена экранов, клавиатур, материнских плат",
      link: "/laptop-repair"
    },
    {
      icon: <Smartphone className="w-12 h-12 text-blue-600" />,
      title: "Ремонт планшетов",
      description: "Восстановление работоспособности планшетных устройств",
      link: "/tablet-repair"
    },
    {
      icon: <HardDrive className="w-12 h-12 text-blue-600" />,
      title: "Восстановление данных",
      description: "Спасение важных файлов с поврежденных носителей",
      link: "/data-recovery"
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Удаление вирусов",
      description: "Очистка от вредоносного ПО и настройка защиты",
      link: "/virus-removal"
    },
    {
      icon: <Zap className="w-12 h-12 text-blue-600" />,
      title: "Апгрейд компьютеров",
      description: "Модернизация и улучшение производительности",
      link: "/hardware-upgrade"
    }
  ];

  const features = [
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Быстрый ремонт",
      description: "Большинство работ выполняем в день обращения"
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Гарантия качества",
      description: "Предоставляем гарантию на все виды работ до 12 месяцев"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Опытные мастера",
      description: "Команда сертифицированных специалистов с опытом 10+ лет"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
      title: "Честные цены",
      description: "Прозрачное ценообразование без скрытых доплат"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Профессиональный ремонт компьютеров в Москве
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Быстро, качественно и с гарантией восстанавливаем работоспособность 
            вашей техники. Более 10 лет опыта и тысячи довольных клиентов.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/order">Заказать ремонт</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/diagnostics">Бесплатная диагностика</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Предоставляем полный спектр услуг по ремонту и обслуживанию компьютерной техники
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center mb-4">
                    {service.description}
                  </CardDescription>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to={service.link}>Подробнее</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Почему выбирают нас</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
        </div>
      </section>

      {/* Emergency Section */}
      <section className="bg-red-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Срочный ремонт 24/7</h2>
          <p className="text-xl mb-6">
            Компьютер сломался в самый неподходящий момент? Мы работаем круглосуточно!
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/emergency">Вызвать мастера</Link>
          </Button>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">5000+</div>
              <p className="text-gray-600">Отремонтированных устройств</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
              <p className="text-gray-600">Лет опыта работы</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <p className="text-gray-600">Успешных ремонтов</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <p className="text-gray-600">Техническая поддержка</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Как мы работаем</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Обращение</h3>
              <p className="text-gray-600">Звоните или оставляйте заявку на сайте</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Диагностика</h3>
              <p className="text-gray-600">Бесплатно определяем причину поломки</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Ремонт</h3>
              <p className="text-gray-600">Выполняем работы качественно и в срок</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold mb-2">Гарантия</h3>
              <p className="text-gray-600">Предоставляем гарантию на работы</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Готовы починить ваш компьютер?</h2>
          <p className="text-xl mb-8">
            Оставьте заявку прямо сейчас и получите скидку 10% на первый ремонт
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/order">Заказать ремонт со скидкой</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;