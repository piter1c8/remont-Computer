import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, CheckCircle, Shield, Clock, FileText, Phone } from 'lucide-react';

const Warranty = () => {
  const warrantyTerms = [
    "Гарантия на ремонт: 3-12 месяцев",
    "Гарантия на запчасти: 6-24 месяца",
    "Бесплатное устранение дефектов",
    "Замена некачественных деталей",
    "Техническая поддержка",
    "Повторная диагностика бесплатно"
  ];

  const warrantyPeriods = [
    { service: "Замена экрана ноутбука", period: "12 месяцев" },
    { service: "Ремонт материнской платы", period: "6 месяцев" },
    { service: "Замена клавиатуры", period: "12 месяцев" },
    { service: "Установка SSD/HDD", period: "12 месяцев" },
    { service: "Чистка от пыли", period: "3 месяца" },
    { service: "Замена термопасты", period: "6 месяцев" },
    { service: "Удаление вирусов", period: "1 месяц" },
    { service: "Установка ПО", period: "1 месяц" }
  ];

  const warrantyConditions = [
    "Сохранение гарантийных наклеек",
    "Отсутствие механических повреждений",
    "Соблюдение условий эксплуатации",
    "Отсутствие вмешательства третьих лиц",
    "Использование оригинальных запчастей",
    "Своевременное обращение при проблемах"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Award className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Гарантийные обязательства</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы уверены в качестве наших работ и предоставляем расширенную гарантию 
            на все виды ремонта. Ваша уверенность - наш приоритет.
          </p>
        </div>

        {/* Warranty Terms */}
        <Card className="mb-12 bg-green-50 border-green-200">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-green-800">Что включает наша гарантия</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {warrantyTerms.map((term, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-lg">{term}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Сроки гарантии по услугам</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {warrantyPeriods.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                    <span>{item.service}</span>
                    <span className="font-semibold text-green-600">{item.period}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Условия гарантии</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {warrantyConditions.map((condition, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                    <span>{condition}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Warranty Process */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Как воспользоваться гарантией</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                <h4 className="font-semibold mb-2">Обращение</h4>
                <p className="text-gray-600 text-sm">Свяжитесь с нами по телефону или email</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                <h4 className="font-semibold mb-2">Проверка</h4>
                <p className="text-gray-600 text-sm">Проверяем гарантийный талон и условия</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                <h4 className="font-semibold mb-2">Диагностика</h4>
                <p className="text-gray-600 text-sm">Определяем причину неисправности</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
                <h4 className="font-semibold mb-2">Устранение</h4>
                <p className="text-gray-600 text-sm">Бесплатно устраняем гарантийный дефект</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Защита интересов</h3>
            <p className="text-gray-600">Полная защита ваших интересов как клиента</p>
          </div>
          <div className="text-center">
            <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Быстрое решение</h3>
            <p className="text-gray-600">Гарантийные случаи решаем в приоритетном порядке</p>
          </div>
          <div className="text-center">
            <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Документооборот</h3>
            <p className="text-gray-600">Ведем полную документацию по гарантийным случаям</p>
          </div>
        </div>

        {/* Important Info */}
        <Card className="mb-12 bg-yellow-50 border-yellow-200">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-yellow-800">Важная информация</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>Гарантия не распространяется на:</strong> механические повреждения, 
                повреждения от воды, самостоятельные попытки ремонта, нарушение условий эксплуатации.
              </p>
              <p>
                <strong>Для обращения по гарантии необходимо:</strong> предъявить гарантийный талон, 
                описать проблему, предоставить устройство для диагностики.
              </p>
              <p>
                <strong>Сроки гарантийного ремонта:</strong> до 14 рабочих дней с момента 
                подтверждения гарантийного случая.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Contact for Warranty */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Гарантийное обслуживание</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
              <div className="p-6 bg-blue-50 rounded-lg">
                <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">Горячая линия</h4>
                <p className="text-2xl font-bold text-blue-600 mb-2">+7 (495) 123-45-67</p>
                <p className="text-gray-600">Пн-Вс: 9:00-21:00</p>
              </div>
              <div className="p-6 bg-green-50 rounded-lg">
                <FileText className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">Email поддержка</h4>
                <p className="text-lg font-semibold text-green-600 mb-2">warranty@computerrepair.ru</p>
                <p className="text-gray-600">Ответ в течение 2 часов</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Возникли проблемы в гарантийный период?
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Обращайтесь к нам - решим любой гарантийный случай!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              <Phone className="w-5 h-5 mr-2" />
              Позвонить по гарантии
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contacts">Написать в поддержку</Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Warranty;