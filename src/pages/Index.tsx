import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const photos = [
    {
      url: "https://cdn.poehali.dev/projects/39d8fdfd-4b81-427c-8133-73ef47b8f5cf/files/bd156f54-3d09-4c63-acc9-fd5a0f41e1d3.jpg",
      alt: "Георгий Олегович - педагог кружка"
    },
    {
      url: "https://cdn.poehali.dev/projects/39d8fdfd-4b81-427c-8133-73ef47b8f5cf/files/99c5324e-5f2a-4884-9176-e10d7a9d9adf.jpg",
      alt: "Занятие с учениками"
    },
    {
      url: "https://cdn.poehali.dev/projects/39d8fdfd-4b81-427c-8133-73ef47b8f5cf/files/33be5123-2ba4-49e7-9d5d-593b4e8b1c7e.jpg",
      alt: "Работа с ИИ-инструментами"
    }
  ];

  const features = [
    {
      icon: 'Code2',
      title: 'Веб-разработка',
      description: 'Создаём современные сайты с нуля'
    },
    {
      icon: 'Brain',
      title: 'Интеграция ИИ',
      description: 'Используем ChatGPT, Claude и другие ИИ-инструменты'
    },
    {
      icon: 'Sparkles',
      title: 'Креативность',
      description: 'Автоматизация и творческий подход к разработке'
    },
    {
      icon: 'Users',
      title: 'Индивидуальный подход',
      description: 'Работаем в небольших группах для лучшего результата'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary/20 via-primary/10 to-accent/10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-block mb-4 px-4 py-2 bg-accent/30 rounded-full text-sm font-semibold">
              ⚛️ Кружок "Атом в сети"
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Педагог кружка:
            </h1>
            <p className="text-3xl sm:text-4xl font-semibold text-primary">
              Нехуженко Георгий Олегович
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {photos.map((photo, index) => (
              <div 
                key={index} 
                className="relative overflow-hidden rounded-2xl shadow-2xl animate-scale-in hover:scale-105 transition-transform"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <img 
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-80 object-cover"
                />
              </div>
            ))}
          </div>

          <Card className="border-2 shadow-xl animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Георгий Олегович — опытный педагог, специализирующийся на <span className="font-semibold text-primary">веб-разработке</span> и интеграции <span className="font-semibold text-secondary">искусственного интеллекта</span> в образовательный процесс. Он помогает ученикам создавать современные сайты, используя ИИ для автоматизации и креативности. В кружке "Атом в сети" мы учимся не только коду, но и тому, как ИИ меняет мир технологий!
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Что мы изучаем</h2>
            <p className="text-xl text-muted-foreground">Современные технологии и инструменты</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-2 hover:shadow-xl transition-all hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-8 pb-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <Icon name={feature.icon} size={32} className="text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-secondary to-accent text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl opacity-90">Будем рады ответить на ваши вопросы</p>
          </div>
          
          <Card className="border-0 shadow-2xl">
            <CardContent className="p-8 space-y-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground mb-6">
                  Нехуженко Георгий Олегович
                </p>
              </div>

              <div className="space-y-4">
                <a 
                  href="tel:89005705766"
                  className="flex items-center gap-4 p-4 bg-primary/10 rounded-xl hover:bg-primary/20 transition-all hover:scale-105 group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={28} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Телефон</p>
                    <p className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      8 (900) 570-57-66
                    </p>
                  </div>
                </a>

                <a 
                  href="https://t.me/GrandMolik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-secondary/10 rounded-xl hover:bg-secondary/20 transition-all hover:scale-105 group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Send" size={28} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Telegram</p>
                    <p className="text-xl font-semibold text-foreground group-hover:text-secondary transition-colors">
                      @GrandMolik
                    </p>
                  </div>
                </a>
              </div>

              <div className="pt-4 text-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform text-lg px-8 py-6"
                  asChild
                >
                  <a href="https://t.me/GrandMolik" target="_blank" rel="noopener noreferrer">
                    Написать в Telegram
                    <Icon name="MessageCircle" size={20} className="ml-2" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-background py-10 px-4">
        <div className="container mx-auto max-w-7xl text-center">
          <div className="mb-4">
            <h3 className="text-2xl font-bold mb-2">Атом в сети</h3>
            <p className="text-base opacity-80">Веб-разработка с искусственным интеллектом</p>
          </div>
          <p className="text-sm opacity-60">© 2025 Нехуженко Георгий Олегович. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
