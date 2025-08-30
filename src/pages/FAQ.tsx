import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle, Phone, Mail, MessageSquare } from 'lucide-react';

const FAQ = () => {
  const faqItems = [
    {
      question: "Сколько стоит диагностика?",
      answer: "Диагностика всегда бесплатна! Мы определяем причину поломки и составляем план ремонта без взимания платы. Оплата взимается только за сам ремонт."
    },
    {
      question: "Какая гарантия на ремонт?",
      answer: "Мы предоставляем гарантию от 3 до 12 месяцев в зависимости от вида работ. На замену экранов и клавиатур - 12 месяцев, на чистку от пыли - 3 месяца, на большинство других работ - 6 месяцев."
    },
    {
      question: "Сколько времени занимает ремонт?",
      answer: "Большинство ремонтов выполняем в течение 1-3 дней. Простые работы (установка ПО, чистка) - в день обращения. Сложные ремонты (замена материнской платы) - до 5 дней."
    },
    {
      question: "Можно ли вызвать мастера на дом?",
      answer: "Да, мы предоставляем услугу выезда мастера на дом. Стоимость выезда в пределах МКАД - 1000₽ в рабочее время, 1500₽ в выходные. Многие проблемы можем решить на месте."
    },
    {
      question: "Какие способы оплаты вы принимаете?",
      answer: "Принимаем оплату наличными, банковскими картами, переводом на карту. Для юридических лиц возможна оплата по безналичному расчету с НДС."
    },
    {
      question: "Что делать, если компьютер не включается?",
      answer: "Не паникуйте! Проверьте подключение к сети, попробуйте другую розетку. Если не помогает - принесите к нам на диагностику. В 80% случаев проблема решается заменой блока питания или чисткой."
    },
    {
      question: "Можете ли вы восстановить данные с поврежденного диска?",
      answer: "Да, мы специализируемся на восстановлении данных. Успешность восстановления зависит от степени повреждения. В среднем удается восстановить 85-95% информации."
    },
    {
      question: "Работаете ли вы с техникой Apple?",
      answer: "Да, мы ремонтируем MacBook, iMac, Mac mini и другую технику Apple. У нас есть специальные инструменты и опыт работы с продукцией Apple."
    },
    {
      question: "Что входит в профилактическое обслуживание?",
      answer: "Профилактика включает: чистку от пыли, замену термопасты, проверку всех компонентов, обновление драйверов, оптимизацию системы. Рекомендуем проводить раз в год."
    },
    {
      question: "Можно ли отследить статус ремонта?",
      answer: "Да, мы информируем клиентов о ходе ремонта по телефону или SMS. Также вы можете позвонить нам в любое время для уточнения статуса."
    },
    {
      question: "Что делать, если ремонт не помог?",
      answer: "Если проблема повторилась в гарантийный период - мы устраним ее бесплатно. Если ремонт оказался невозможен - возвращаем деньги за работу."
    },
    {
      question: "Предоставляете ли вы запчасти в кредит?",
      answer: "Для дорогостоящих запчастей (от 10000₽) возможна рассрочка на 3-6 месяцев без процентов. Условия обсуждаются индивидуально."
    }
  ];

  const quickHelp = [
    {
      title: "Компьютер не включается",
      solution: "Проверьте кабель питания и попробуйте другую розетку"
    },
    {
      title: "Синий экран смерти",
      solution: "Перезагрузите компьютер и запустите в безопасном режиме"
    },
    {
      title: "Медленная работа",
      solution: "Закройте ненужные программы и проверьте диск на вирусы"
    },
    {
      title: "Нет звука",
      solution: "Проверьте громкость и подключение колонок/наушников"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4  py-12">
        <div className="text-center mb-12">
          <HelpCircle className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Часто задаваемые вопросы</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ответы на самые популярные вопросы о ремонте компьютеров. 
            Не нашли ответ? Свяжитесь с нами!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Quick Help */}
          <div className="lg:col-span-1">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Быстрая помощь</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {quickHelp.map((help, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">{help.title}</h4>
                      <p className="text-xs text-gray-600">{help.solution}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Нужна помощь?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" size="sm">
                  <Phone className="w-4 h-4 mr-2" />
                  Позвонить
                </Button>
                <Button className="w-full" variant="outline" size="sm">
                  <Mail className="w-4 h-4 mr-2" />
                  Написать
                </Button>
                <Button className="w-full" variant="outline" size="sm" asChild>
                  <Link to="/order">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Заказать звонок
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* FAQ */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Популярные вопросы</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="text-2xl">Не нашли ответ на свой вопрос?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Задайте свой вопрос, и мы ответим в течение часа
                </p>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      placeholder="Ваше имя"
                      className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input 
                      type="email" 
                      placeholder="Email для ответа"
                      className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <textarea 
                    placeholder="Ваш вопрос..."
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                  <Button className="w-full">Отправить вопрос</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Still Need Help */}
        <div className="text-center bg-white rounded-lg p-8 shadow-lg mt-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Все еще нужна помощь?
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Наши специалисты готовы ответить на любые вопросы
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              <Phone className="w-5 h-5 mr-2" />
              +7 (495) 123-45-67
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contacts">Все способы связи</Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FAQ;