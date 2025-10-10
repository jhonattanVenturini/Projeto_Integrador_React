import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Link } from 'react-router-dom';
 
// Importe seu Header e Footer aqui
// import Header from './Header';
// import Footer from './Footer';
 
const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
 
  // Dados dos produtos em destaque
  const featuredProducts = [
    {
      id: 1,
      title: 'Trufas Artesanais',
      description: 'Feitas com chocolate belga premium e ingredientes selecionados para uma experiência única.',
      image: '/images/choco-trufas.png',
      color: 'brand-accent-peach'
    },
    {
      id: 2,
      title: 'Bombons Especiais',
      description: 'Uma seleção exclusiva de bombons com recheios cremosos e sabores irresistíveis.',
      image: '/images/bombons.png',
      color: 'brand-accent-pink'
    },
    {
      id: 3,
      title: 'Cupcakes Gourmet',
      description: 'Cupcakes únicos com coberturas especiais e decorações personalizadas.',
      image: '/images/cupcakes.png',
      color: 'brand-brown-medium'
    }
  ];
 
  // Depoimentos dos clientes
  const testimonials = [
    {
      name: 'Maria Helena',
      text: 'Os doces da Choconessa são simplesmente perfeitos! Qualidade incomparável e sabor que marca a memória. Recomendo para todas as ocasiões especiais.',
      rating: 5
    },
    {
      name: 'João Carlos',
      text: 'Atendimento excepcional e produtos de altíssima qualidade. As trufas são divinas e sempre fresquinhas. Virei cliente fiel!',
      rating: 5
    },
    {
      name: 'Ana Beatriz',
      text: 'Encantada com a variedade e o capricho em cada detalhe. Os cupcakes foram o sucesso da festa do meu filho. Obrigada, Choconessa!',
      rating: 5
    }
  ];
 
  // Estatísticas da empresa
  const stats = [
    { number: '10+', label: 'Anos de Tradição' },
    { number: '1000+', label: 'Clientes Felizes' },
    { number: '50+', label: 'Receitas Exclusivas' },
    { number: '100%', label: 'Ingredientes Premium' }
  ];
 
  // Auto-rotação dos depoimentos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);
 
  return (
    // Certifique-se de que o corpo principal da aplicação tem bg-brand-cream
    <div className="home-page bg-brand-cream text-text-dark">
      {/* ============================================================
        AQUI ENTRARIA O <Header /> (Ver seção 3 para sugestão)
        ============================================================
      */}
 
      {/* --------------------------- */}
      {/* 1. SEÇÃO INTRO/HERO (Melhorada com animações) */}
      {/* --------------------------- */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-20 gap-10 relative overflow-hidden">
       
        {/* Elementos animados de fundo */}
        <div className="absolute top-10 right-10 w-16 h-16 bg-brand-accent-peach/20 rounded-full animate-float"></div>
        <div className="absolute bottom-10 left-10 w-20 h-20 bg-brand-accent-pink/20 rounded-full animate-pulse"></div>
 
        {/* Texto à esquerda */}
        <div className="md:w-1/2 max-w-xl animate-fade-in-up">
          {/* Título Script (Use a cor brand-accent-peach) */}
          <h2 className="font-script text-7xl text-brand-accent-peach mb-4 leading-none drop-shadow-lg">
            Choconessa Doces
          </h2>
          {/* Subtítulo Bold */}
          <h3 className="font-bold text-3xl text-text-dark mb-6 uppercase tracking-widest">
            Doces Artesanais
          </h3>
          {/* Texto de Páragrafo */}
          <p className="text-lg mb-8 leading-relaxed opacity-90">
            Criamos experiências doces únicas com ingredientes premium e muito amor.
            Cada doce é uma obra de arte feita especialmente para momentos especiais
            da sua vida. Tradição familiar que se renova a cada dia.
          </p>
          {/* Botão de Ação (Rosa de Destaque) */}
          <Link to="/catalogo">
            <Button className="bg-brand-accent-pink text-white hover:bg-brand-accent-pink/90 font-semibold text-lg px-8 py-3 rounded-md shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              VER CATÁLOGO
            </Button>
          </Link>
        </div>
 
        {/* Imagem à direita */}
        <div className="relative md:w-1/2 flex justify-center mt-10 md:mt-0 animate-fade-in-right">
          {/* Imagem principal de chocolates */}
          <img
            src="/images/choco-trufas.png" // Ajuste para sua imagem real
            alt="Bombons artesanais"
            className="max-w-full md:max-w-lg z-10 hover:scale-105 transition-transform duration-500"
          />
          {/* Fundo de folhas (com baixa opacidade para ser sutil) */}
          <img
            src="/images/fundo-folhas.png" // Ajuste para sua imagem real
            alt="Fundo folhas"
            className="absolute top-0 right-0 opacity-10 w-[80%] -z-0"
          />
        </div>
      </section>
 
      {/* Stats Section - Estatísticas da Choconessa */}
      <section className="bg-brand-brown-light/30 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl md:text-5xl font-bold text-brand-brown-medium mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-text-dark font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* --------------------------- */}
      {/* 2. SEÇÃO DESTAQUES/CARDS (Melhorada com hover effects) */}
      {/* --------------------------- */}
      <section className="py-16 bg-brand-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-script text-5xl text-brand-accent-peach mb-4">
              Nossos Destaques
            </h2>
            <p className="text-lg text-text-dark opacity-80 max-w-2xl mx-auto">
              Descubra nossa seleção especial de doces artesanais, feitos com amor e ingredientes premium.
            </p>
          </div>
 
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
 
            {/* CARD 1: Fundo Pêssego (Melhorado com animações) */}
            <div className="bg-brand-accent-peach/20 p-8 rounded-[40px] shadow-lg text-center flex flex-col justify-between h-full group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="mb-6">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🍫</div>
                <h3 className="font-bold text-xl text-text-dark mb-4">Trufas Premium</h3>
                <p className="text-text-dark leading-relaxed">
                  Trufas artesanais feitas com chocolate belga e recheios exclusivos que derretem na boca,
                  proporcionando uma experiência única de sabor.
                </p>
              </div>
              <Button className="bg-brand-accent-pink text-white hover:bg-brand-accent-pink/90 mx-auto w-3/4 transform hover:scale-105 transition-all duration-300">
                DESCOBRIR MAIS
              </Button>
            </div>
 
            {/* CARD 2: Fundo Rosa (Melhorado) */}
            <div className="bg-brand-accent-pink/20 p-8 rounded-[40px] shadow-lg text-center flex flex-col justify-between h-full group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="mb-6">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🧁</div>
                <h3 className="font-bold text-xl text-text-dark mb-4">Cupcakes Especiais</h3>
                <p className="text-text-dark leading-relaxed">
                  Cupcakes únicos com massa fofinha e coberturas cremosas, decorados especialmente
                  para tornar seus momentos ainda mais doces.
                </p>
              </div>
              <Button className="bg-brand-accent-pink text-white hover:bg-brand-accent-pink/90 mx-auto w-3/4 transform hover:scale-105 transition-all duration-300">
                VER OPÇÕES
              </Button>
            </div>
 
            {/* CARD 3: Cupcake (Melhorado com overlay) */}
            <div className="relative rounded-[40px] overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <img
                src="/images/cupcakes.png" // Sua imagem de cupcakes
                alt="Cupcakes Gourmet"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                <h3 className="font-bold text-lg mb-2">Cupcakes Artesanais</h3>
                <p className="text-sm">Sabores únicos e decorações personalizadas</p>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      {/* --------------------------- */}
      {/* 3. SEÇÃO PRINCIPAL INFERIOR (Trufas + Caixa de Texto) - Melhorada */}
      {/* --------------------------- */}
      <section className="bg-brand-cream py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Trufas em exibição (Imagem à Esquerda) */}
            <div className="relative group">
                <img
                    src="/images/trufas-bandeja.png" // Sua imagem de trufas na bandeja
                    alt="Trufas na Bandeja"
                    className="w-full h-auto object-cover rounded-lg shadow-xl group-hover:shadow-2xl group-hover:scale-105 transition-all duration-500"
                />
                {/* Overlay com informações extras */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-end p-6">
                  <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="font-bold text-xl mb-2">Trufas Artesanais</h4>
                    <p className="text-sm opacity-90">Feitas diariamente com ingredientes frescos</p>
                  </div>
                </div>
            </div>
 
            {/* Caixa de Texto Marrom (Direita) - Melhorada */}
            <div className="bg-brand-brown-medium p-10 rounded-xl text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
                <div className="mb-6">
                  <h3 className="font-script text-4xl text-brand-accent-peach mb-4">Tradição & Qualidade</h3>
                  <p className="text-lg mb-6 leading-relaxed">
                      Há mais de uma década criamos doces que tocam o coração. Cada receita
                      é um segredo de família, passado de geração em geração, com o toque
                      especial que só o amor pode dar.
                  </p>
                </div>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand-accent-peach rounded-full"></div>
                    <span className="text-sm">Ingredientes premium selecionados</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand-accent-peach rounded-full"></div>
                    <span className="text-sm">Receitas exclusivas da família</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand-accent-peach rounded-full"></div>
                    <span className="text-sm">Produção artesanal diária</span>
                  </div>
                </div>
                <Button className="bg-white text-brand-brown-medium hover:bg-gray-100 font-semibold px-8 py-3 rounded-md transform hover:scale-105 transition-all duration-300">
                    CONHEÇA NOSSA HISTÓRIA
                </Button>
            </div>
        </div>
      </section>
 
      {/* --------------------------- */}
      {/* 4. SEÇÃO DEPOIMENTO (Fundo de Trufas Escuro) - Melhorada com carrossel */}
      {/* --------------------------- */}
      <section className="relative py-20 text-white overflow-hidden">
        {/* Imagem de Fundo Escurecida */}
        <div className="absolute inset-0">
          <img
            src="/images/fundo-trufas.png" // Sua imagem de fundo de trufas escuras
            alt="Fundo de trufas escuras"
            className="w-full h-full object-cover"
          />
          {/* Overlay Escuro para Legibilidade */}
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>
 
        <div className="container mx-auto px-4 text-center relative z-10">
          <h3 className="font-script text-7xl text-brand-accent-peach mb-10 drop-shadow-lg">
            Depoimentos
          </h3>
         
          {/* Carrossel de Depoimentos */}
          <div className="max-w-4xl mx-auto relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mx-4">
                      <div className="text-6xl mb-6">❝</div>
                      <p className="text-xl leading-relaxed mb-8 italic">
                        {testimonial.text}
                      </p>
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-6 h-6 text-yellow-400 mx-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                        ))}
                      </div>
                      <h4 className="font-bold text-xl text-brand-accent-peach">
                        — {testimonial.name}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
 
          {/* Indicadores de Carrossel/Slides (Interativo) */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-brand-accent-pink scale-125'
                    : 'bg-white opacity-50 hover:opacity-75'
                }`}
              />
            ))}
          </div>
        </div>
      </section>
 
      {/* --------------------------- */}
      {/* 5. SEÇÃO CTA FINAL - Call to Action */}
      {/* --------------------------- */}
      <section className="bg-gradient-to-r from-brand-accent-pink to-brand-accent-peach py-20 relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full animate-bounce"></div>
       
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-script text-6xl text-white mb-6 drop-shadow-lg">
            Experimente Nossos Doces
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Faça seu pedido hoje mesmo e descubra por que somos a escolha preferida
            para momentos especiais. Qualidade garantida e sabor inesquecível!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/catalogo">
              <Button className="bg-white text-brand-accent-pink px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl">
                FAZER PEDIDO
              </Button>
            </Link>
            <Link to="/contato">
              <Button className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-brand-accent-pink transition-all duration-300 transform hover:scale-105">
                FALAR CONOSCO
              </Button>
            </Link>
          </div>
         
          {/* Informações de contato rápido */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl mb-2">📱</div>
              <p className="text-white font-semibold">WhatsApp</p>
              <p className="text-white/80 text-sm">(11) 99999-9999</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl mb-2">🕒</div>
              <p className="text-white font-semibold">Horário</p>
              <p className="text-white/80 text-sm">Seg-Sáb: 8h às 18h</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl mb-2">🚚</div>
              <p className="text-white font-semibold">Entrega</p>
              <p className="text-white/80 text-sm">Em toda a cidade</p>
            </div>
          </div>
        </div>
      </section>
 
      {/* ============================================================
        AQUI ENTRARIA O <Footer /> (Ver seção 3 para sugestão)
        ============================================================
      */}
 
    </div>
  );
};
 
export default Home;
 