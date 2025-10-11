import React from 'react';
import { Facebook, Instagram, Phone, MapPin, Mail, Clock, Heart } from 'lucide-react';
 
const Footer = () => {
  const currentYear = new Date().getFullYear();
 
  const socialLinks = [
    {
      name: 'Facebook',
      href: '#',
      icon: Facebook,
      hoverColor: 'hover:bg-blue-500'
    },
    {
      name: 'Instagram',
      href: '#',
      icon: Instagram,
      hoverColor: 'hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500'
    },
    {
      name: 'WhatsApp',
      href: '#',
      icon: Phone,
      hoverColor: 'hover:bg-green-500'
    }
  ];
 
  const contactInfo = [
    {
      icon: Mail,
      text: 'contato@choconessa.com',
      href: 'mailto:contato@choconessa.com'
    },
    {
      icon: Phone,
      text: '(11) 99999-9999',
      href: 'tel:+5511999999999'
    },
    {
      icon: Clock,
      text: 'Segunda a Sábado: 8h às 18h',
      href: null
    }
  ];
 
  return (
    <footer className="bg-gradient-to-b from-[#7A4636] to-[#5D3429] text-white relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-16 -translate-y-16"></div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-yellow-300/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 left-1/4 w-24 h-24 bg-pink-300/5 rounded-full animate-float"></div>
 
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         
          {/* Logo e Descrição - Melhorada */}
          <div className="text-center md:text-left group">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-6">
              <div className="w-14 h-14 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <img
                  src="/choconessa_02.png"
                  alt="Logo Choconessa"
                  className="w-full h-full object-contain drop-shadow-lg"
                />
              </div>
              <div>
                <h3 className="font-script text-3xl font-bold text-yellow-300 drop-shadow-md">
                  Choconessa
                </h3>
                <p className="text-sm opacity-90 tracking-wide">Doces Artesanais</p>
              </div>
            </div>
           
            <p className="text-sm opacity-90 max-w-xs mx-auto md:mx-0 leading-relaxed mb-6">
              Criamos doces artesanais com muito carinho e os melhores
              ingredientes para adoçar seus momentos especiais há mais de uma década.
            </p>
 
            {/* Certificações/Badges */}
            <div className="flex justify-center md:justify-start space-x-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 text-xs">
                <span className="text-yellow-300">🏆</span> Qualidade Premium
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 text-xs">
                <span className="text-yellow-300">🎂</span> Artesanal
              </div>
            </div>
          </div>
 
          {/* Mapa/Localização - Melhorada */}
          <div className="text-center group">
            <h4 className="text-yellow-300 font-semibold text-xl mb-6 group-hover:text-yellow-200 transition-colors duration-300">
              <MapPin className="inline-block w-5 h-5 mr-2" />
              Nossa Localização
            </h4>
           
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-sm opacity-90 space-y-2 mb-4">
                <p className="font-medium">Rua dos Doces, 123</p>
                <p>Centro - São Paulo/SP</p>
                <p>CEP: 01234-567</p>
                <p className="text-yellow-300">Brasil</p>
              </div>
             
              {/* Botão de direções */}
              <button className="bg-yellow-300 text-[#7A4636] px-4 py-2 rounded-lg text-xs font-semibold hover:bg-yellow-200 transition-all duration-300 transform hover:scale-105">
                Ver Direções
              </button>
            </div>
          </div>
 
          {/* Contatos - Melhorados */}
          <div className="text-center md:text-right group">
            <h4 className="text-yellow-300 font-semibold text-xl mb-6 group-hover:text-yellow-200 transition-colors duration-300">
              Fale Conosco
            </h4>
           
            {/* Informações de contato */}
            <div className="space-y-3 mb-6">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center justify-center md:justify-end space-x-3 group/item">
                  <contact.icon className="w-4 h-4 text-yellow-300 group-hover/item:scale-110 transition-transform duration-300" />
                  {contact.href ? (
                    <a
                      href={contact.href}
                      className="text-sm opacity-90 hover:opacity-100 hover:text-yellow-300 transition-all duration-300"
                    >
                      {contact.text}
                    </a>
                  ) : (
                    <span className="text-sm opacity-90">{contact.text}</span>
                  )}
                </div>
              ))}
            </div>
 
            {/* Redes Sociais - Melhoradas */}
            <div className="mb-6">
              <p className="text-sm opacity-75 mb-4">Siga-nos nas redes sociais</p>
              <div className="flex justify-center md:justify-end space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-12 h-12 bg-pink-accent rounded-full flex items-center justify-center hover:bg-opacity-90 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${social.hoverColor} group/social`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5 text-chocolate-dark group-hover/social:text-white transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
 
            {/* Newsletter */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
              <p className="text-xs opacity-75 mb-2">📧 Receba nossas novidades</p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm placeholder-white/50 focus:outline-none focus:border-yellow-300 transition-colors duration-300"
                />
                <button className="bg-yellow-300 text-[#7A4636] px-4 py-2 rounded-lg text-xs font-semibold hover:bg-yellow-200 transition-all duration-300 transform hover:scale-105">
                  Inscrever
                </button>
              </div>
            </div>
          </div>
        </div>
 
        {/* Seção de links rápidos */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div>
              <h5 className="font-semibold text-yellow-300 mb-3">Produtos</h5>
              <ul className="space-y-2 text-sm opacity-90">
                <li><a href="#" className="hover:text-yellow-300 transition-colors duration-300">Trufas</a></li>
                <li><a href="#" className="hover:text-yellow-300 transition-colors duration-300">Cupcakes</a></li>
                <li><a href="#" className="hover:text-yellow-300 transition-colors duration-300">Bombons</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-yellow-300 mb-3">Serviços</h5>
              <ul className="space-y-2 text-sm opacity-90">
                <li><a href="#" className="hover:text-yellow-300 transition-colors duration-300">Encomendas</a></li>
                <li><a href="#" className="hover:text-yellow-300 transition-colors duration-300">Eventos</a></li>
                <li><a href="#" className="hover:text-yellow-300 transition-colors duration-300">Entrega</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-yellow-300 mb-3">Empresa</h5>
              <ul className="space-y-2 text-sm opacity-90">
                <li><a href="#" className="hover:text-yellow-300 transition-colors duration-300">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-yellow-300 transition-colors duration-300">Nossa História</a></li>
                <li><a href="#" className="hover:text-yellow-300 transition-colors duration-300">Trabalhe Conosco</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-yellow-300 mb-3">Suporte</h5>
              <ul className="space-y-2 text-sm opacity-90">
                <li><a href="#" className="hover:text-yellow-300 transition-colors duration-300">FAQ</a></li>
                <li><a href="#" className="hover:text-yellow-300 transition-colors duration-300">Contato</a></li>
                <li><a href="#" className="hover:text-yellow-300 transition-colors duration-300">Política de Privacidade</a></li>
              </ul>
            </div>
          </div>
        </div>
 
        {/* Copyright - Melhorado */}
        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm opacity-75 flex items-center">
              © {currentYear} Choconessa. Todos os direitos reservados.
              <span className="mx-2">•</span>
              Feito com <Heart className="w-4 h-4 text-red-400 mx-1 animate-pulse" fill="currentColor" /> para adoçar sua vida.
            </p>
           
            <div className="flex space-x-6 text-xs opacity-75">
              <a href="#" className="hover:text-yellow-300 transition-colors duration-300">Termos de Uso</a>
              <a href="#" className="hover:text-yellow-300 transition-colors duration-300">Política de Cookies</a>
              <a href="#" className="hover:text-yellow-300 transition-colors duration-300">Privacidade</a>
            </div>
          </div>
         
          {/* Selo de qualidade */}
          <div className="mt-4 flex justify-center">
            <div className="bg-gradient-to-r from-yellow-300 to-yellow-400 text-[#7A4636] px-4 py-2 rounded-full text-xs font-semibold flex items-center space-x-2">
              <span>🛡️</span>
              <span>Site Seguro & Confiável</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
 
export default Footer;