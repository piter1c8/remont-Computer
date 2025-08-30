import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Calendar, User, ArrowRight, Laptop, Shield, HardDrive } from 'lucide-react';

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "Как продлить жизнь ноутбука: 10 простых советов",
      excerpt: "Узнайте, как правильно ухаживать за ноутбуком, чтобы он служил долго и надежно. Простые правила эксплуатации от профессионалов.",
      date: "20 января 2025",
      author: "Алексей Петров",
      category: "Советы",
      icon: <Laptop className="w-6 h-6 text-blue-600" />,
      readTime: "5 мин"
    },
    {
      id: 2,
      title: "Признаки скорой поломки жесткого диска",
      excerpt: "Жесткий диск может выйти из строя внезапно. Рассказываем о первых признаках проблем и как спасти ваши данные.",
      date: "18 января 2025",
      author: "Мария Сидорова",
      category: "Диагностика",
      icon: <HardDrive className="w-6 h-6 text-blue-600" />,
      readTime: "7 мин"
    },
    {
      id: 3,
      title: "Защита от вирусов в 2025 году",
      excerpt: "Современные методы защиты от вредоносного ПО. Какой антивирус выбрать и как настроить максимальную защиту.",
      date: "15 января 2025",
      author: "Дмитрий Козлов",
      category: "Безопасность",
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      readTime: "6 мин"
    },
    {
      id: 4,
      title: "SSD vs HDD: что выбрать в 2025 году",
      excerpt: "Сравниваем твердотельные и жесткие диски. Преимущества, недостатки и рекомендации по выбору для разных задач.",
      date: "12 января 2025",
      author: "Алексей Петров",
      category: "Железо",
      icon: <HardDrive className="w-6 h-6 text-blue-600" />,
      readTime: "8 мин"
    },
    {
      id: 5,
      title: "Почему компьютер тормозит и как это исправить",
      excerpt: "Разбираем основные причины медленной работы компьютера и способы решения проблем без обращения в сервис.",
      date: "10 января 2025",
      author: "Мария Сидорова",
      category: "Оптимизация",
      icon: <Laptop className="w-6 h-6 text-blue-600" />,
      readTime: "10 мин"
    },
    {
      id: 6,
      title: "Как выбрать комплектующие для игрового ПК",
      excerpt: "Подробное руководство по выбору процессора, видеокарты, памяти и других компонентов для игрового компьютера.",
      date: "8 января 2025",
      author: "Дмитрий Козлов",
      category: "Игры",
      icon: <Laptop className="w-6 h-6 text-blue-600" />,
      readTime: "12 мин"
    }
  ];

  const categories = [
    { name: "Все статьи", count: 45 },
    { name: "Советы", count: 12 },
    { name: "Диагностика", count: 8 },
    { name: "Безопасность", count: 10 },
    { name: "Железо", count: 15 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <BookOpen className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Блог о ремонте компьютеров</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Полезные статьи, советы и инструкции от наших экспертов. Узнайте больше 
            о компьютерной технике и способах решения проблем.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Категории</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <Link 
                        to={`/blog/category/${category.name.toLowerCase()}`}
                        className="flex justify-between items-center p-2 rounded hover:bg-gray-100 transition-colors"
                      >
                        <span>{category.name}</span>
                        <span className="text-sm text-gray-500">({category.count})</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Популярные статьи</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li>
                    <Link to="/blog/1" className="text-sm text-blue-600 hover:underline">
                      Как ускорить работу компьютера
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog/2" className="text-sm text-blue-600 hover:underline">
                      Признаки поломки жесткого диска
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog/3" className="text-sm text-blue-600 hover:underline">
                      Выбор антивируса в 2025 году
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Articles */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {articles.map((article) => (
                <Card key={article.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {article.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                          <Calendar className="w-4 h-4" />
                          <span>{article.date}</span>
                          <span>•</span>
                          <User className="w-4 h-4" />
                          <span>{article.author}</span>
                          <span>•</span>
                          <span>{article.readTime}</span>
                        </div>
                        <h2 className="text-xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors">
                          <Link to={`/blog/${article.id}`}>{article.title}</Link>
                        </h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">{article.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                            {article.category}
                          </span>
                          <Button variant="ghost" size="sm" asChild>
                            <Link to={`/blog/${article.id}`}>
                              Читать далее
                              <ArrowRight className="w-4 h-4 ml-1" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex space-x-2">
                <Button variant="outline" disabled>Предыдущая</Button>
                <Button variant="outline" className="bg-blue-600 text-white">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Следующая</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <Card className="mt-12 bg-blue-600 text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Подпишитесь на наши обновления</h2>
            <p className="mb-6">Получайте новые статьи и полезные советы на email</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Ваш email"
                className="flex-1 px-4 py-2 rounded-md text-gray-800"
              />
              <Button variant="secondary">Подписаться</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;