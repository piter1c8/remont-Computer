import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MessageSquare, CheckCircle, Phone, Video, Clock } from 'lucide-react';

const Consultation = () => {
  const [consultationType, setConsultationType] = useState('');

  const consultationTypes = [
    "Выбор комплектующих для апгрейда",
    "Покупка нового компьютера/ноутбука",
    "Решение проблем с производительностью",
    "Вопросы по безопасности",
    "Настройка домашней сети",
    "Выбор программного обеспечения",
    "Планирование IT-инфраструктуры",
    "Другое"
  ];

  const consultationMethods = [
    {
      icon: <Phone className="w-8 h-8 text-blue-600" />,
      title: "Телефонная консультация",
      description: "Быстрые ответы на простые вопросы",
      duration: "15-30 минут",
      price: "Бесплатно"
    },
    {
      icon: <Video className="w-8 h-8 text-blue-600" />,
      title: "Видеоконсультация",
      description: "Подробный разбор с демонстрацией",
      duration: "30-60 минут",
      price: "от 1000 ₽"
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-blue-600" />,
      title: "Очная консультация",
      description: "Встреча в нашем офисе с экспертом",
      duration: "60-90 минут",
      price: "от 1500 ₽"
    }
  ];

  const benefits = [
    "Экспертные рекомендации от профессионалов",
    "Помощь в выборе оптимального решения",
    "Экономия времени и денег",
    "Предотвращение дорогостоящих ошибок",
    "Индивидуальный подход к вашей ситуации",
    "Последующая техническая поддержка"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <MessageSquare className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Бесплатная консультация</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Получите экспертную консультацию по любым вопросам, связанным с компьютерной техникой. 
            Поможем принять правильное решение.
          </p>
        </div>

        {/* Consultation Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {consultationMethods.map((method, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4">
                  {method.icon}
                </div>
                <CardTitle className="text-xl">{method.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">{method.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{method.duration}</span>
                  </div>
                  <div className="text-lg font-bold text-blue-600">{method.price}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Consultation Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Записаться на консультацию</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ваше имя *
                  </label>
                  <Input placeholder="Введите ваше имя" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Телефон *
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
                    Тема консультации *
                  </label>
                  <Select value={consultationType} onValueChange={setConsultationType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите тему" />
                    </SelectTrigger>
                    <SelectContent>
                      {consultationTypes.map((type) => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Подробное описание вопроса
                  </label>
                  <Textarea 
                    placeholder="Опишите вашу ситуацию подробнее..."
                    rows={4}
                  />
                </div>
                <Button className="w-full" size="lg">
                  Записаться на консультацию
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Benefits */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Преимущества консультации</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Популярные темы</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Выбор игрового компьютера</li>
                  <li>• Апгрейд для работы с видео</li>
                  <li>• Настройка домашнего офиса</li>
                  <li>• Защита от вирусов</li>
                  <li>• Выбор ноутбука для учебы</li>
                  <li>• Создание резервных копий</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Process */}
        <Card className="mb-12 mt-12">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Как проходит консультация</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                <h4 className="font-semibold mb-2">Заявка</h4>
                <p className="text-gray-600 text-sm">Оставляете заявку на консультацию</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                <h4 className="font-semibold mb-2">Связь</h4>
                <p className="text-gray-600 text-sm">Менеджер связывается для уточнения деталей</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                <h4 className="font-semibold mb-2">Консультация</h4>
                <p className="text-gray-600 text-sm">Проводим консультацию с экспертом</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
                <h4 className="font-semibold mb-2">Рекомендации</h4>
                <p className="text-gray-600 text-sm">Получаете подробные рекомендации</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Expert Areas */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Области экспертизы</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-4 bg-blue-50 rounded-lg text-center">
                <h4 className="font-semibold mb-2">Железо и апгрейд</h4>
                <p className="text-sm text-gray-600">Выбор комплектующих, совместимость, производительность</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg text-center">
                <h4 className="font-semibold mb-2">Программное обеспечение</h4>
                <p className="text-sm text-gray-600">Выбор ОС, программ, настройка системы</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg text-center">
                <h4 className="font-semibold mb-2">Сети и безопасность</h4>
                <p className="text-sm text-gray-600">Настройка сетей, защита от угроз</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg text-center">
                <h4 className="font-semibold mb-2">Восстановление данных</h4>
                <p className="text-sm text-gray-600">Спасение файлов, резервное копирование</p>
              </div>
              <div className="p-4 bg-red-50 rounded-lg text-center">
                <h4 className="font-semibold mb-2">Диагностика проблем</h4>
                <p className="text-sm text-gray-600">Определение причин неисправностей</p>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg text-center">
                <h4 className="font-semibold mb-2">Покупка техники</h4>
                <p className="text-sm text-gray-600">Помощь в выборе компьютера или ноутбука</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Получите экспертную консультацию
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Первая консультация по телефону - бесплатно!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              <Phone className="w-5 h-5 mr-2" />
              Позвонить сейчас
            </Button>
            <Button size="lg" variant="outline">
              Заказать обратный звонок
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Consultation;