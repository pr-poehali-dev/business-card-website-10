import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const modules = [
    {
      icon: 'Lightbulb',
      title: 'Основы веб-разработки',
      description: 'HTML, CSS, JavaScript — создаём первые сайты с нуля',
      color: 'bg-primary'
    },
    {
      icon: 'Bot',
      title: 'Работа с ИИ',
      description: 'ChatGPT, Claude, Copilot — учимся программировать с помощью ИИ',
      color: 'bg-secondary'
    },
    {
      icon: 'Sparkles',
      title: 'Креативные проекты',
      description: 'Создаём интерактивные сайты, игры и полезные приложения',
      color: 'bg-accent'
    },
    {
      icon: 'Users',
      title: 'Командная работа',
      description: 'Git, GitHub — работаем над проектами в команде',
      color: 'bg-primary'
    }
  ];

  const benefits = [
    { icon: 'Rocket', text: 'Современные технологии и инструменты' },
    { icon: 'Heart', text: 'Дружелюбная атмосфера и поддержка' },
    { icon: 'Trophy', text: 'Реальные проекты в портфолио' },
    { icon: 'Zap', text: 'Быстрый старт в IT-сферу' }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-block mb-4 px-4 py-2 bg-accent/30 rounded-full text-sm font-semibold">
                ⚛️ Новый набор 2025
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Атом в сети
              </h1>
              <p className="text-2xl sm:text-3xl font-medium text-primary mb-4">
                Веб-разработка с ИИ
              </p>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                Научись создавать сайты и приложения с помощью искусственного интеллекта. 
                Программирование будущего — уже сегодня!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
                  Записаться на курс
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
                  Узнать больше
                </Button>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-accent/30 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-primary/30 rounded-full blur-2xl" />
              <img 
                src="https://cdn.poehali.dev/projects/39d8fdfd-4b81-427c-8133-73ef47b8f5cf/files/4fe9adae-cca6-4fc2-adf0-72753327dc57.jpg"
                alt="AI Web Development"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Почему именно мы?</h2>
            <p className="text-xl text-muted-foreground">Современный подход к обучению программированию</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-2 hover:shadow-xl transition-all hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <Icon name={benefit.icon} size={32} className="text-white" />
                  </div>
                  <p className="font-semibold text-lg">{benefit.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Программа курса</h2>
            <p className="text-xl text-muted-foreground">Что вы изучите на наших занятиях</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {modules.map((module, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-8">
                  <div className={`w-16 h-16 mb-6 ${module.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon name={module.icon} size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{module.title}</h3>
                  <p className="text-muted-foreground text-lg">{module.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-secondary to-accent text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Записаться на курс</h2>
            <p className="text-xl opacity-90">Оставьте заявку, и мы свяжемся с вами</p>
          </div>
          
          <Card className="border-0 shadow-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Ваше имя</label>
                  <Input 
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="text-lg py-6"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
                  <Input 
                    type="email"
                    placeholder="ivan@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="text-lg py-6"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о себе и своих ожиданиях от курса..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    rows={5}
                    className="text-lg"
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full text-lg py-6 bg-primary hover:bg-primary/90">
                  Отправить заявку
                  <Icon name="Send" size={20} className="ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto max-w-7xl text-center">
          <h3 className="text-2xl font-bold mb-4">Атом в сети</h3>
          <p className="text-lg opacity-80 mb-6">Веб-разработка с искусственным интеллектом</p>
          <div className="flex justify-center gap-6">
            <Button variant="ghost" size="lg" className="hover:scale-110 transition-transform text-background hover:text-background">
              <Icon name="Mail" size={24} />
            </Button>
            <Button variant="ghost" size="lg" className="hover:scale-110 transition-transform text-background hover:text-background">
              <Icon name="Phone" size={24} />
            </Button>
            <Button variant="ghost" size="lg" className="hover:scale-110 transition-transform text-background hover:text-background">
              <Icon name="MessageCircle" size={24} />
            </Button>
          </div>
          <p className="mt-8 text-sm opacity-60">© 2025 Атом в сети. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
