import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, Car, Metro } from 'lucide-react';

const Contacts = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-blue-600" />,
      title: "Телефон",
      details: ["+7 (495) 123-45-67", "+7 (926) 123-45-67"]
    },
    {
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      title: "Email",
      details: ["info@computerrepair.ru", "support@computerrepair.ru"]
    },
    {
      icon: <MapPin className="w-6 h-6 text-blue-600" />,
      title: "Адрес",
      details: ["Москва, ул. Тверская, 15", "офис 301 (3 этаж)"]
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: "Режим работы",
      details: ["Пн-Вс: 9:00-21:00", "Без выходных"]
    }
  ];

  const transport = [
    {
      icon: <Metro className="w-6 h-6 text-blue-600" />,
      title: "Метро",
      description: "Станция 'Тверская' - 3 минуты пешком"
    },
    {
      icon: <Car className="w-6 h-6 text-blue-600" />,
      title: "Парковка",
      description: "Платная парковка рядом с офисом"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Контакты</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Свяжитесь с нами любым удобным способом. Мы всегда готовы помочь 
            с ремонтом вашей техники.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Контактная информация</h2>
            {contactInfo.map((contact, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    {contact.icon}
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{contact.title}</h3>
                      {contact.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600">{detail}</p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Transport */}
            <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Как добраться</h3>
            <div className="space-y-4">
              {transport.map((item, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow">
                  {item.icon}
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Написать нам</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ваше имя
                  </label>
                  <Input placeholder="Введите ваше имя" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Телефон
                  </label>
                  <Input placeholder="+7 (___) ___-__-__" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Сообщение
                  </label>
                  <Textarea 
                    placeholder="Опишите проблему с вашим устройством..."
                    rows={5}
                  />
                </div>
                <Button className="w-full" size="lg">
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Map placeholder */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Наше расположение</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 text-lg">Интерактивная карта</p>
                <p className="text-gray-500">Москва, ул. Тверская, 15</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Contact */}
        <div className="bg-red-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Экстренная помощь 24/7</h2>
          <p className="text-xl mb-6">
            Компьютер сломался в неподходящий момент? Звоните!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/emergency">Вызвать мастера</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-red-600">
              <Phone className="w-4 h-4 mr-2" />
              +7 (495) 123-45-67
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contacts;