import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Monitor, 
  Laptop, 
  Smartphone, 
  HardDrive, 
  Shield, 
  Zap,
  Printer,
  Wifi,
  Settings,
  Wrench,
  Database,
  Camera
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Monitor className="w-8 h-8 text-blue-600" />,
      title: "Ремонт настольных ПК",
      description: "Диагностика и ремонт системных блоков, замена комплектующих",
      price: "от 1500 ₽",
      link: "/pc-repair"
    },
    {
      icon: <Laptop className="w-8 h-8 text-blue-600" />,
      title: "Ремонт ноутбуков",
      description: "Замена экранов, клавиатур, материнских плат, чистка от пыли",
      price: "от 2000 ₽",
      link: "/laptop-repair"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-blue-600" />,
      title: "Ремонт планшетов",
      description: "Восстановление сенсорных экранов, замена аккумуляторов",
      price: "от 1800 ₽",
      link: "/tablet-repair"
    },
    {
      icon: <HardDrive className="w-8 h-8 text-blue-600" />,
      title: "Восстановление данных",
      description: "Спасение файлов с поврежденных жестких дисков и SSD",
      price: "от 3000 ₽",
      link: "/data-recovery"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Удаление вирусов",
      description: "Очистка от вредоносного ПО, настройка антивируса",
      price: "от 1000 ₽",
      link: "/virus-removal"
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Апгрейд железа",
      description: "Модернизация компьютеров, увеличение производительности",
      price: "от 2500 ₽",
      link: "/hardware-upgrade"
    },
    {
      icon: <Printer className="w-8 h-8 text-blue-600" />,
      title: "Ремонт принтеров",
      description: "Обслуживание и ремонт струйных и лазерных принтеров",
      price: "от 1200 ₽",
      link: "/printer-repair"
    },
    {
      icon: <Wifi className="w-8 h-8 text-blue-600" />,
      title: "Настройка сетей",
      description: "Настройка Wi-Fi, локальных сетей, интернет-подключений",
      price: "от 1500 ₽",
      link: "/network-setup"
    },
    {
      icon: <Settings className="w-8 h-8 text-blue-600" />,
      title: "Установка ПО",
      description: "Установка операционных систем, программ, драйверов",
      price: "от 800 ₽",
      link: "/software-installation"
    },
    {
      icon: <Wrench className="w-8 h-8 text-blue-600" />,
      title: "Профилактика",
      description: "Чистка от пыли, замена термопасты, профилактическое обслуживание",
      price: "от 1000 ₽",
      link: "/maintenance"
    },
    {
      icon: <Database className="w-8 h-8 text-blue-600" />,
      title: "Настройка серверов",
      description: "Установка и настройка серверного оборудования",
      price: "от 5000 ₽",
      link: "/server-setup"
    },
    {
      icon: <Camera className="w-8 h-8 text-blue-600" />,
      title: "Ремонт веб-камер",
      description: "Восстановление работы встроенных и внешних веб-камер",
      price: "от 1200 ₽",
      link: "/webcam-repair"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Все услуги по ремонту компьютеров</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Профессиональный ремонт любой сложности с гарантией качества. 
            Работаем с техникой всех производителей.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  {service.icon}
                  <div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <div className="text-lg font-bold text-blue-600">{service.price}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  {service.description}
                </CardDescription>
                <Button className="w-full" asChild>
                  <Link to={service.link}>Заказать услугу</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Не нашли нужную услугу?</p>
          <Button size="lg" asChild>
            <Link to="/contacts">Свяжитесь с нами</Link>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;