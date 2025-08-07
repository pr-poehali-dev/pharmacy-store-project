import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-medical-soft to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-medical-green/10 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-medical-green/10 p-2 rounded-lg">
              <Icon name="Cross" className="text-medical-green" size={24} />
            </div>
            <h1 className="text-xl font-bold text-medical-trust font-montserrat">АптекаПлюс</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#catalog" className="text-medical-trust hover:text-medical-green transition-colors">Каталог</a>
            <a href="#prescription" className="text-medical-trust hover:text-medical-green transition-colors">По рецепту</a>
            <a href="#delivery" className="text-medical-trust hover:text-medical-green transition-colors">Доставка</a>
            <a href="#consult" className="text-medical-trust hover:text-medical-green transition-colors">Консультации</a>
            <a href="#contacts" className="text-medical-trust hover:text-medical-green transition-colors">Контакты</a>
          </nav>
          <Button className="bg-medical-green hover:bg-medical-green-dark text-white">
            <Icon name="ShoppingCart" size={20} className="mr-2" />
            Корзина
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-medical-trust mb-6 font-montserrat">
            Ваша надёжная аптека
          </h1>
          <p className="text-lg text-medical-trust/70 mb-8 max-w-2xl mx-auto font-open-sans">
            Качественные лекарства, быстрая доставка и профессиональные консультации. 
            Заботимся о вашем здоровье каждый день.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="flex gap-3 bg-white rounded-2xl p-2 shadow-lg">
              <Input 
                placeholder="Поиск лекарств, витаминов, товаров..."
                className="border-0 text-lg h-12 font-open-sans"
              />
              <Button size="lg" className="bg-medical-green hover:bg-medical-green-dark px-8">
                <Icon name="Search" size={20} />
              </Button>
            </div>
          </div>

          {/* Quick Categories */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" className="rounded-full border-medical-green/30 hover:bg-medical-green/10">
              <Icon name="Pill" size={16} className="mr-2" />
              Болеутоляющие
            </Button>
            <Button variant="outline" className="rounded-full border-medical-green/30 hover:bg-medical-green/10">
              <Icon name="Heart" size={16} className="mr-2" />
              Витамины
            </Button>
            <Button variant="outline" className="rounded-full border-medical-green/30 hover:bg-medical-green/10">
              <Icon name="Shield" size={16} className="mr-2" />
              Иммунитет
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Medications */}
      <section id="catalog" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-medical-trust mb-8 text-center font-montserrat">
            Популярные лекарства
          </h2>
          
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4 max-w-md mx-auto mb-8">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="pain">Боль</TabsTrigger>
              <TabsTrigger value="vitamins">Витамины</TabsTrigger>
              <TabsTrigger value="cold">Простуда</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {/* Product Cards */}
              {[
                { name: "Парацетамол", price: "45₽", category: "Болеутоляющее", image: "💊", prescription: false },
                { name: "Ибупрофен", price: "89₽", category: "Противовоспалительное", image: "💊", prescription: false },
                { name: "Витамин D3", price: "320₽", category: "Витамины", image: "🌟", prescription: false },
                { name: "Цитрамон", price: "67₽", category: "Болеутоляющее", image: "💊", prescription: false },
                { name: "Омега-3", price: "540₽", category: "БАД", image: "🐟", prescription: false },
                { name: "Антигриппин", price: "78₽", category: "От простуды", image: "🌡️", prescription: false },
                { name: "Магний B6", price: "245₽", category: "Витамины", image: "⚡", prescription: false },
                { name: "Но-шпа", price: "156₽", category: "Спазмолитик", image: "💊", prescription: true }
              ].map((product, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 animate-fade-in group">
                  <CardHeader className="text-center pb-4">
                    <div className="text-4xl mb-2">{product.image}</div>
                    <CardTitle className="text-lg font-semibold text-medical-trust font-montserrat">
                      {product.name}
                    </CardTitle>
                    <CardDescription className="font-open-sans">
                      {product.category}
                      {product.prescription && <Badge className="ml-2 bg-amber-100 text-amber-800">По рецепту</Badge>}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-medical-green font-montserrat">
                        {product.price}
                      </span>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button size="sm" className="bg-medical-green hover:bg-medical-green-dark">
                            <Icon name="Plus" size={16} className="mr-1" />
                            В корзину
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Добавить в корзину</DialogTitle>
                            <DialogDescription>
                              Выберите аптеку для получения товара
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div>
                              <Label htmlFor="pharmacy">Аптека</Label>
                              <Select>
                                <SelectTrigger>
                                  <SelectValue placeholder="Выберите аптеку" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="center">Центральная, ул. Ленина 25</SelectItem>
                                  <SelectItem value="north">Северная, ул. Кирова 14</SelectItem>
                                  <SelectItem value="south">Южная, пр. Мира 89</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <Label htmlFor="quantity">Количество</Label>
                              <Input id="quantity" type="number" defaultValue="1" min="1" />
                            </div>
                            <Button className="w-full bg-medical-green hover:bg-medical-green-dark">
                              Забронировать
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-medical-green-light/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-medical-trust mb-12 text-center font-montserrat">
            Наши услуги
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="bg-medical-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Truck" className="text-medical-green" size={32} />
                </div>
                <CardTitle className="font-montserrat">Быстрая доставка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-medical-trust/70 font-open-sans">
                  Доставим заказ в течение 2 часов по городу
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="bg-medical-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="FileText" className="text-medical-green" size={32} />
                </div>
                <CardTitle className="font-montserrat">По рецепту</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-medical-trust/70 font-open-sans">
                  Принимаем электронные и бумажные рецепты
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="bg-medical-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MessageCircle" className="text-medical-green" size={32} />
                </div>
                <CardTitle className="font-montserrat">Консультации</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-medical-trust/70 font-open-sans">
                  Онлайн консультации с фармацевтами
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="bg-medical-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" className="text-medical-green" size={32} />
                </div>
                <CardTitle className="font-montserrat">Бронирование</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-medical-trust/70 font-open-sans">
                  Забронируйте лекарства для самовывоза
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section id="contacts" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-medical-trust mb-12 text-center font-montserrat">
            Наши аптеки
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: "Центральная аптека", 
                address: "ул. Ленина, 25", 
                phone: "+7 (555) 123-45-67", 
                hours: "08:00 - 22:00",
                available: true
              },
              { 
                name: "Северная аптека", 
                address: "ул. Кирова, 14", 
                phone: "+7 (555) 123-45-68", 
                hours: "09:00 - 21:00",
                available: true
              },
              { 
                name: "Южная аптека", 
                address: "пр. Мира, 89", 
                phone: "+7 (555) 123-45-69", 
                hours: "24/7",
                available: false
              }
            ].map((pharmacy, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="font-montserrat">{pharmacy.name}</CardTitle>
                    <Badge variant={pharmacy.available ? "default" : "secondary"}>
                      {pharmacy.available ? "Открыто" : "Закрыто"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-medical-trust/70">
                    <Icon name="MapPin" size={16} />
                    <span className="font-open-sans">{pharmacy.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-medical-trust/70">
                    <Icon name="Phone" size={16} />
                    <span className="font-open-sans">{pharmacy.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-medical-trust/70">
                    <Icon name="Clock" size={16} />
                    <span className="font-open-sans">{pharmacy.hours}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-medical-trust text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-medical-green p-2 rounded-lg">
                  <Icon name="Cross" className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold font-montserrat">АптекаПлюс</h3>
              </div>
              <p className="text-white/70 font-open-sans">
                Ваша надёжная аптека с 2010 года
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 font-montserrat">Услуги</h4>
              <ul className="space-y-2 text-white/70 font-open-sans">
                <li>Доставка лекарств</li>
                <li>Консультации</li>
                <li>Бронирование</li>
                <li>Рецептурные препараты</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 font-montserrat">Контакты</h4>
              <ul className="space-y-2 text-white/70 font-open-sans">
                <li>+7 (555) 123-45-67</li>
                <li>info@aptekaplus.ru</li>
                <li>Работаем ежедневно</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 font-montserrat">Социальные сети</h4>
              <div className="flex gap-4">
                <Button size="sm" variant="ghost" className="text-white hover:bg-white/10">
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button size="sm" variant="ghost" className="text-white hover:bg-white/10">
                  <Icon name="Phone" size={20} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/70 font-open-sans">
            <p>&copy; 2024 АптекаПлюс. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;