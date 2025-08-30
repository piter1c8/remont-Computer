import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, User, Calendar, CheckCircle, MessageSquare } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: "Анна Петрова",
      date: "15 января 2025",
      rating: 5,
      service: "Ремонт ноутбука",
      text: "Отличный сервис! Быстро определили проблему с экраном, заменили в тот же день. Цены адекватные, мастера профессиональные. Рекомендую!",
      verified: true
    },
    {
      name: "Михаил Сидоров",
      date: "12 января 2025",
      rating: 5,
      service: "Восстановление данных",
      text: "Думал, что потерял все фотографии с отпуска после поломки жесткого диска. Ребята смогли восстановить 99% файлов! Огромное спасибо!",
      verified: true
    },
    {
      name: "Елена Козлова",
      date: "8 января 2025",
      rating: 5,
      service: "Удаление вирусов",
      text: "Компьютер был полностью заражен, работал очень медленно. После чистки работает как новый! Установили хороший антивирус, объяснили как пользоваться.",
      verified: true
    },
    {
      name: "Дмитрий Волков",
      date: "5 января 2025",
      rating: 4,
      service: "Апгрейд ПК",
      text: "Модернизировали мой старый компьютер - добавили SSD и память. Теперь летает! Единственный минус - немного задержались со сроками, но результат отличный.",
      verified: true
    },
    {
      name: "Ольга Морозова",
      date: "2 января 2025",
      rating: 5,
      service: "Ремонт принтера",
      text: "Принтер HP перестал печатать. Оказалось, нужна была заправка и чистка. Сделали быстро и недорого. Теперь печатает как новый!",
      verified: true
    },
    {
      name: "Александр Новиков",
      date: "28 декабря 2024",
      rating: 5,
      service: "Экстренный ремонт",
      text: "Сломался компьютер прямо перед сдачей важного проекта. Вызвал мастера на дом в 22:00 - приехали через час! Починили за 2 часа. Спасли проект!",
      verified: true
    }
  ];

  const stats = [
    { label: "Средняя оценка", value: "4.9", icon: <Star className="w-8 h-8 text-yellow-500" /> },
    { label: "Всего отзывов", value: "1,247", icon: <MessageSquare className="w-8 h-8 text-blue-600" /> },
    { label: "Довольных клиентов", value: "98%", icon: <CheckCircle className="w-8 h-8 text-green-600" /> }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Star className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Отзывы клиентов</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Читайте реальные отзывы наших клиентов о качестве ремонта и обслуживания. 
            Ваше мнение важно для нас!
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <p className="text-gray-600">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Reviews */}
        <div className="space-y-6 mb-12">
          {reviews.map((review, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      {review.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="text-lg font-semibold">{review.name}</h3>
                        {review.verified && (
                          <CheckCircle className="w-5 h-5 text-green-500" title="Проверенный отзыв" />
                        )}
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>{review.date}</span>
                        <span>•</span>
                        <span>{review.service}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    {renderStars(review.rating)}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{review.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Review Form */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Оставить отзыв</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="max-w-2xl mx-auto">
              <p className="text-center text-gray-600 mb-6">
                Поделитесь своим опытом работы с нашим сервисом
              </p>
              <div className="text-center">
                <Button size="lg" asChild>
                  <Link to="/leave-review">Написать отзыв</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* External Reviews */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Мы также на других площадках</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-blue-50 rounded-lg">
                <h4 className="text-lg font-semibold mb-2">Яндекс.Карты</h4>
                <div className="flex justify-center space-x-1 mb-2">
                  {renderStars(5)}
                </div>
                <p className="text-gray-600">4.8 из 5 (156 отзывов)</p>
              </div>
              <div className="p-6 bg-green-50 rounded-lg">
                <h4 className="text-lg font-semibold mb-2">Google Maps</h4>
                <div className="flex justify-center space-x-1 mb-2">
                  {renderStars(5)}
                </div>
                <p className="text-gray-600">4.9 из 5 (89 отзывов)</p>
              </div>
              <div className="p-6 bg-orange-50 rounded-lg">
                <h4 className="text-lg font-semibold mb-2">2ГИС</h4>
                <div className="flex justify-center space-x-1 mb-2">
                  {renderStars(5)}
                </div>
                <p className="text-gray-600">4.7 из 5 (203 отзыва)</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Присоединяйтесь к довольным клиентам!
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Более 5000 успешно отремонтированных устройств
          </p>
          <Button size="lg" asChild>
            <Link to="/order">Заказать ремонт</Link>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Reviews;