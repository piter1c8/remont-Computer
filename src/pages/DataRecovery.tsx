import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HardDrive, CheckCircle, AlertTriangle, Database, FileText, Image } from 'lucide-react';

const DataRecovery = () => {
  const causes = [
    "Физическое повреждение диска",
    "Случайное удаление файлов",
    "Форматирование диска",
    "Вирусная атака",
    "Сбой файловой системы",
    "Повреждение разделов",
    "Сбой операционной системы",
    "Повреждение от воды"
  ];

  const services = [
    { name: "Восстановление с HDD", price: "от 3000 ₽" },
    { name: "Восстановление с SSD", price: "от 4000 ₽" },
    { name: "Восстановление с флешки", price: "от 2000 ₽" },
    { name: "Восстановление с SD карты", price: "от 1500 ₽" },
    { name: "Восстановление RAID массивов", price: "от 8000 ₽" },
    { name: "Экстренное восстановление", price: "от 5000 ₽" },
    { name: "Восстановление баз данных", price: "от 6000 ₽" },
    { name: "Восстановление фото/видео", price: "от 2500 ₽" }
  ];

  const fileTypes = [
    "Документы (DOC, PDF, XLS)",
    "Фотографии (JPG, PNG, RAW)",
    "Видео (MP4, AVI, MOV)",
    "Аудио (MP3, WAV, FLAC)",
    "Архивы (ZIP, RAR, 7Z)",
    "Базы данных (SQL, MDB)"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <HardDrive className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Восстановление данных</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Профессиональное восстановление утерянных файлов с любых носителей. 
            Спасаем данные даже в самых сложных случаях.
          </p>
        </div>

        {/* Warning */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-12">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Важно!</h3>
              <p className="text-yellow-700">
                При потере данных немедленно прекратите использование устройства. 
                Каждая операция записи может безвозвратно повредить восстанавливаемые файлы.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Причины потери данных</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {causes.map((cause, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{cause}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Стоимость восстановления</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                    <span>{service.name}</span>
                    <span className="font-semibold text-blue-600">{service.price}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Типы восстанавливаемых файлов</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fileTypes.map((type, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <FileText className="w-6 h-6 text-blue-600" />
                  <span>{type}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <Database className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Современное оборудование</h3>
            <p className="text-gray-600">Используем профессиональные инструменты для восстановления</p>
          </div>
          <div className="text-center">
            <Image className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Высокий процент успеха</h3>
            <p className="text-gray-600">Восстанавливаем данные в 95% случаев</p>
          </div>
          <div className="text-center">
            <CheckCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Конфиденциальность</h3>
            <p className="text-gray-600">Гарантируем полную безопасность ваших данных</p>
          </div>
        </div>

        <div className="text-center bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Потеряли важные данные?
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Не паникуйте! Мы поможем восстановить ваши файлы
          </p>
          <Button size="lg" asChild>
            <Link to="/order">Заказать восстановление</Link>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DataRecovery;