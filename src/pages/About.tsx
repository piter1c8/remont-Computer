import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Award, Clock, CheckCircle, Star, Target } from 'lucide-react';

const About = () => {
  const achievements = [
    { number: "10+", text: "лет опыта работы" },
    { number: "5000+", text: "отремонтированных устройств" },
    { number: "98%", text: "успешных ремонтов" },
    { number: "24/7", text: "техническая поддержка" }
  ];

  const team = [
    {
      name: "Алексей Петров",
      position: "Главный инженер",
      experience: "12 лет опыта",
      specialization: "Ремонт материнских плат, микросхем"
    },
    {
      name: "Мария Сидорова",
      position: "Специалист по ноутбукам",
      experience: "8 лет опыта",
      specialization: "Замена экранов, клавиатур"
    },
    {
      name: "Дмитрий Козлов",
      position: "Специалист по данным",
      experience: "10 лет опыта",
      specialization: "Восстановление информации"
    }
  ];

  const values = [
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
      title: "Качество",
      description: "Используем только оригинальные запчасти и современное оборудование"
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Скорость",
      description: "Выполняем большинство ремонтов в день обращения"
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Гарантия",
      description: "Предоставляем расширенную гарантию на все работы"
    },
    {
      icon: <Star className="w-8 h-8 text-blue-600" />,
      title: "Сервис",
      description: "Индивидуальный подход к каждому клиенту"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Users className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">О компании КомпьютерСервис</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы - команда профессионалов с многолетним опытом в области ремонта 
            и обслуживания компьютерной техники.
          </p>
        </div>

        {/* Company Story */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Наша история</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Компания "КомпьютерСервис" была основана в 2014 году группой энтузиастов, 
              увлеченных компьютерными технологиями. За более чем 10 лет работы мы 
              накопили огромный опыт в ремонте техники всех производителей.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Начав с небольшой мастерской, сегодня мы выросли в современный сервисный 
              центр с профессиональным оборудованием и командой опытных специалистов. 
              Мы постоянно совершенствуем свои навыки и следим за новинками в мире технологий.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Наша миссия - сделать качественный ремонт компьютерной техники доступным 
              для каждого. Мы гордимся тем, что помогли тысячам клиентов вернуть к жизни 
              их любимые устройства.
            </p>
          </CardContent>
        </Card>

        {/* Achievements */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{achievement.number}</div>
              <p className="text-gray-600">{achievement.text}</p>
            </div>
          ))}
        </div>

        {/* Team */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Наша команда</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{member.name}</h4>
                  <p className="text-blue-600 font-medium mb-2">{member.position}</p>
                  <p className="text-gray-600 mb-2">{member.experience}</p>
                  <p className="text-sm text-gray-500">{member.specialization}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Values */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Наши принципы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Сертификаты и лицензии</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
              <div className="p-6 bg-blue-50 rounded-lg">
                <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">Сертифицированные специалисты</h4>
                <p className="text-gray-600">Наши мастера имеют официальные сертификаты производителей</p>
              </div>
              <div className="p-6 bg-green-50 rounded-lg">
                <Target className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">Лицензия на деятельность</h4>
                <p className="text-gray-600">Официально зарегистрированная компания с лицензией</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Доверьте ремонт профессионалам
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Более 10 лет опыта и тысячи довольных клиентов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/order">Заказать ремонт</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/reviews">Читать отзывы</Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;