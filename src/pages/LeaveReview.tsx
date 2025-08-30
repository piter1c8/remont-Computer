import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Star, MessageSquare, CheckCircle, Gift } from 'lucide-react';

const LeaveReview = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const services = [
    "Ремонт ноутбука",
    "Ремонт настольного ПК",
    "Восстановление данных",
    "Удаление вирусов",
    "Апгрейд компьютера",
    "Ремонт принтера",
    "Настройка сети",
    "Установка ПО",
    "Профилактика",
    "Другое"
  ];

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => {
      const starValue = index + 1;
      return (
        <Star
          key={index}
          className={`w-8 h-8 cursor-pointer transition-colors ${
            starValue <= (hoveredRating || rating)
              ? 'text-yellow-500 fill-current'
              : 'text-gray-300'
          }`}
          onMouseEnter={() => setHoveredRating(starValue)}
          onMouseLeave={() => setHoveredRating(0)}
          onClick={() => setRating(starValue)}
        />
      );
    });
  };

  const getRatingText = (rating: number) => {
    switch (rating) {
      case 1: return "Очень плохо";
      case 2: return "Плохо";
      case 3: return "Нормально";
      case 4: return "Хорошо";
      case 5: return "Отлично";
      default: return "Поставьте оценку";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <MessageSquare className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Оставить отзыв</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ваше мнение очень важно для нас! Поделитесь опытом работы с нашим сервисом 
            и помогите другим клиентам сделать правильный выбор.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Bonus Info */}
          <Card className="mb-8 bg-green-50 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <Gift className="w-12 h-12 text-green-600" />
                <div>
                  <h3 className="text-lg font-semibold text-green-800 mb-2">Бонус за отзыв!</h3>
                  <p className="text-green-700">
                    За честный отзыв с фото получите скидку 5% на следующий ремонт
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Review Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Форма отзыва</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                {/* Personal Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ваше имя *
                    </label>
                    <Input placeholder="Введите ваше имя" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Какую услугу вы получили? *
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите услугу" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>{service}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Rating */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ваша оценка *
                  </label>
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      {renderStars()}
                    </div>
                    <span className="text-lg font-medium text-gray-700">
                      {getRatingText(hoveredRating || rating)}
                    </span>
                  </div>
                </div>

                {/* Review Text */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ваш отзыв *
                  </label>
                  <Textarea 
                    placeholder="Расскажите о вашем опыте работы с нашим сервисом..."
                    rows={6}
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Минимум 50 символов. Опишите качество работы, сроки, общение с персоналом.
                  </p>
                </div>

                {/* Pros and Cons */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Достоинства
                    </label>
                    <Textarea 
                      placeholder="Что вам понравилось?"
                      rows={3}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Недостатки
                    </label>
                    <Textarea 
                      placeholder="Что можно улучшить?"
                      rows={3}
                    />
                  </div>
                </div>

                {/* Recommendation */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Рекомендуете ли наш сервис?
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите ответ" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Да, обязательно рекомендую</SelectItem>
                      <SelectItem value="maybe">Возможно, рекомендую</SelectItem>
                      <SelectItem value="no">Не рекомендую</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full" size="lg" disabled={rating === 0}>
                  Опубликовать отзыв
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Guidelines */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Правила публикации отзывов</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Отзыв должен быть основан на реальном опыте</li>
                <li>• Запрещены оскорбления и нецензурная лексика</li>
                <li>• Отзыв проходит модерацию в течение 24 часов</li>
                <li>• Мы оставляем за собой право не публиковать неконструктивные отзывы</li>
                <li>• За качественный отзыв с фото - скидка 5% на следующий ремонт</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LeaveReview;