import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { ShoppingCart, CheckCircle, Phone, Mail } from 'lucide-react';

const Order = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    deviceType: '',
    brand: '',
    model: '',
    problem: '',
    urgency: '',
    address: '',
    homeService: false
  });

  const deviceTypes = [
    "Настольный компьютер",
    "Ноутбук",
    "Планшет",
    "Принтер",
    "Моноблок",
    "Сервер"
  ];

  const urgencyOptions = [
    "Обычный (3-5 дней)",
    "Срочный (1-2 дня) +50%",
    "Экстренный (в день обращения) +100%"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <ShoppingCart className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Заказать ремонт</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Заполните форму ниже, и мы свяжемся с вами в течение 15 минут 
            для уточнения деталей и записи на удобное время.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Форма заказа</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  {/* Personal Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Ваше имя *
                      </label>
                      <Input 
                        placeholder="Введите ваше имя"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Телефон *
                      </label>
                      <Input 
                        placeholder="+7 (___) ___-__-__"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input 
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  {/* Device Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Тип устройства *
                      </label>
                      <Select value={formData.deviceType} onValueChange={(value) => setFormData({...formData, deviceType: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите тип устройства" />
                        </SelectTrigger>
                        <SelectContent>
                          {deviceTypes.map((type) => (
                            <SelectItem key={type} value={type}>{type}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Бренд
                      </label>
                      <Input 
                        placeholder="Например: ASUS, HP, Dell"
                        value={formData.brand}
                        onChange={(e) => setFormData({...formData, brand: e.target.value})}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Модель
                    </label>
                    <Input 
                      placeholder="Модель устройства (если знаете)"
                      value={formData.model}
                      onChange={(e) => setFormData({...formData, model: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Описание проблемы *
                    </label>
                    <Textarea 
                      placeholder="Опишите подробно, что случилось с устройством..."
                      rows={4}
                      value={formData.problem}
                      onChange={(e) => setFormData({...formData, problem: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Срочность ремонта
                    </label>
                    <Select value={formData.urgency} onValueChange={(value) => setFormData({...formData, urgency: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите срочность" />
                      </SelectTrigger>
                      <SelectContent>
                        {urgencyOptions.map((option) => (
                          <SelectItem key={option} value={option}>{option}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Home Service */}
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="homeService"
                      checked={formData.homeService}
                      onCheckedChange={(checked) => setFormData({...formData, homeService: checked as boolean})}
                    />
                    <label htmlFor="homeService" className="text-sm font-medium text-gray-700">
                      Выезд мастера на дом (+1000 ₽)
                    </label>
                  </div>

                  {formData.homeService && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Адрес для выезда
                      </label>
                      <Input 
                        placeholder="Укажите адрес"
                        value={formData.address}
                        onChange={(e) => setFormData({...formData, address: e.target.value})}
                      />
                    </div>
                  )}

                  <Button className="w-full" size="lg">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Contact */}
            <Card>
              <CardHeader>
                <CardTitle>Быстрая связь</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full" variant="outline">
                  <Phone className="w-4 h-4 mr-2" />
                  Позвонить сейчас
                </Button>
                <Button className="w-full" variant="outline">
                  <Mail className="w-4 h-4 mr-2" />
                  Написать email
                </Button>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card>
              <CardHeader>
                <CardTitle>Преимущества заказа</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm">Бесплатная диагностика</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm">Гарантия до 12 месяцев</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm">Выезд мастера на дом</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm">Оригинальные запчасти</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm">Скидка 10% новым клиентам</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Working Hours */}
            <Card>
              <CardHeader>
                <CardTitle>Режим работы</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Понедельник - Воскресенье</span>
                    <span className="font-semibold">9:00 - 21:00</span>
                  </div>
                  <div className="text-green-600 font-medium">
                    Экстренный выезд 24/7
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-center text-blue-800 mb-6">
            Что происходит после отправки заявки?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h4 className="font-semibold mb-2">Звонок менеджера</h4>
              <p className="text-gray-600 text-sm">Свяжемся с вами в течение 15 минут</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h4 className="font-semibold mb-2">Запись на прием</h4>
              <p className="text-gray-600 text-sm">Выберем удобное время для диагностики</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h4 className="font-semibold mb-2">Начало работ</h4>
              <p className="text-gray-600 text-sm">Проведем диагностику и начнем ремонт</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Order;