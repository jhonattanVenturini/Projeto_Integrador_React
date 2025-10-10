import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button.jsx";
import { ShoppingCart, User, Menu, X, Heart, Search } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
 
const Header = ({ user, onLoginClick, onLogout, cartCount = 0 }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartPulse, setCartPulse] = useState(false);
 
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const location = useLocation();
 
  const menuItems = [
    { label: "HOME", path: "/", icon: "🏠" },
    { label: "CATÁLOGO", path: "/catalogo", icon: "🍫" },
    { label: "SOBRE NÓS", path: "/sobre", icon: "❤️" },
    { label: "CONTATOS", path: "/contatos", icon: "📞" },
  ];
 
  // Efeito de scroll para alterar a aparência do header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
 
  // Animação do carrinho quando o count muda
  useEffect(() => {
    if (cartCount > 0) {
      setCartPulse(true);
      const timer = setTimeout(() => setCartPulse(false), 600);
      return () => clearTimeout(timer);
    }
  }, [cartCount]);
 
  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${
      isScrolled
        ? 'bg-[#7A4636]/95 backdrop-blur-md shadow-2xl py-2'
        : 'bg-[#7A4636] shadow-md py-3'
    } text-[#F5EDE4] rounded-b-[60px] relative overflow-hidden`}>
     
      {/* Elementos decorativos animados */}
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-r from-[#E09AA2]/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -top-10 right-1/3 w-24 h-24 bg-yellow-300/5 rounded-full animate-float"></div>
     
      <div className="container mx-auto px-4 md:px-12 py-3 relative z-10">
        <div className="grid grid-cols-3 items-center">
         
          {/* Navegação Desktop - Melhorada */}
          <nav className="hidden md:flex space-x-10 justify-start">
            {menuItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={`group relative font-semibold tracking-wide transition-all duration-300 pb-1 transform hover:scale-105
                  ${location.pathname === item.path
                    ? "text-[#F5EDE4] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#E09AA2] after:rounded-full after:animate-pulse"
                    : "hover:text-[#E09AA2] hover:-translate-y-1"
                  }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="hidden group-hover:inline-block mr-2 text-sm animate-bounce">
                  {item.icon}
                </span>
                <span className="relative">
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#E09AA2] rounded-full transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
            ))}
          </nav>
 
          {/* Logo centralizada - Melhorada */}
          <div className="flex justify-center group">
            <Link to="/" className="flex flex-col items-center transform transition-all duration-500 hover:scale-110">
              <div className={`flex items-center justify-center transition-all duration-500 ${
                isScrolled ? 'w-20 h-20 md:w-24 md:h-24' : 'w-24 h-24 md:w-28 md:h-28'
              }`}>
                <img
                  src="/choconessa_02.png"
                  alt="Logo Choconessa"
                  className="w-full h-full object-contain drop-shadow-2xl group-hover:drop-shadow-3xl transition-all duration-300 group-hover:brightness-110"
                />
              </div>
              {/* Texto do logo que aparece no hover */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1">
                <span className="text-xs font-script text-[#E09AA2] whitespace-nowrap">
                  Doces Artesanais
                </span>
              </div>
            </Link>
          </div>
 
          {/* Área de usuário e carrinho (desktop) - Melhorada */}
          <div className="hidden md:flex items-center space-x-6 justify-end">
           
            {/* Busca rápida */}
            <div className="relative group">
              <button className="p-2 rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-110">
                <Search className="w-5 h-5 text-[#F5EDE4]/80 group-hover:text-[#E09AA2]" />
              </button>
              <div className="absolute top-full right-0 mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                <div className="bg-white rounded-lg shadow-xl p-3 min-w-[200px]">
                  <input
                    type="text"
                    placeholder="Buscar doces..."
                    className="w-full px-3 py-2 text-sm text-gray-700 border border-gray-200 rounded-lg focus:outline-none focus:border-[#E09AA2]"
                  />
                </div>
              </div>
            </div>
 
            {/* Favoritos */}
            <button className="relative p-2 rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-110 group">
              <Heart className="w-5 h-5 text-[#F5EDE4]/80 group-hover:text-red-400 group-hover:fill-current" />
              <span className="absolute -top-1 -right-1 bg-red-400 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                3
              </span>
            </button>
 
            {/* Usuário */}
            {user ? (
              <div className="flex items-center space-x-3 group">
                <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                  <div className="w-8 h-8 bg-[#E09AA2] rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-[#7A4636]" />
                  </div>
                  <span className="text-sm font-medium">Olá, {user.username}!</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onLogout}
                  className="text-[#F5EDE4] hover:bg-white/10 hover:scale-105 transition-all duration-300"
                >
                  Sair
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2 group cursor-pointer hover:bg-white/10 rounded-full px-4 py-2 transition-all duration-300" onClick={onLoginClick}>
                <div className="relative">
                  <User className="w-5 h-5 opacity-80 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#E09AA2] rounded-full animate-ping"></div>
                </div>
                <div className="text-left text-sm leading-tight group-hover:text-[#E09AA2] transition-colors duration-300">
                  <div className="font-bold">Olá! Faça o login</div>
                  <div className="text-xs opacity-90">ou cadastre-se</div>
                </div>
              </div>
            )}
 
            {/* Carrinho */}
            <Link to="/carrinho" className="group relative">
              <Button
                variant="ghost"
                size="sm"
                className={`relative text-[#F5EDE4] hover:bg-white/10 hover:scale-110 transition-all duration-300 ${
                  cartPulse ? 'animate-pulse' : ''
                }`}
              >
                <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#E09AA2] text-[#7A4636] text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold animate-bounce">
                    {cartCount}
                  </span>
                )}
              </Button>
              {/* Tooltip */}
              <div className="absolute top-full right-0 mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <div className="bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                  {cartCount > 0 ? `${cartCount} itens no carrinho` : 'Carrinho vazio'}
                </div>
              </div>
            </Link>
          </div>
 
          {/* Ícones Mobile - Melhorados */}
          <div className="flex md:hidden justify-end items-center space-x-2">
           
            {/* Carrinho Mobile */}
            <Link to="/carrinho" className="relative group">
              <Button
                variant="ghost"
                size="sm"
                className={`text-white hover:bg-white/20 relative hover:scale-110 transition-all duration-300 ${
                  cartPulse ? 'animate-pulse' : ''
                }`}
              >
                <ShoppingCart className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#E09AA2] text-[#7A4636] text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold animate-bounce">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>
 
            {/* Menu Mobile */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
            >
              <div className="relative w-6 h-6">
                <Menu className={`w-6 h-6 absolute transition-all duration-300 ${
                  isMenuOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'
                }`} />
                <X className={`w-6 h-6 absolute transition-all duration-300 ${
                  isMenuOpen ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'
                }`} />
              </div>
            </Button>
          </div>
        </div>
 
        {/* Menu Mobile com animação melhorada */}
        <div className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isMenuOpen
            ? "max-h-[500px] mt-4 pb-4 border-t border-white/20 opacity-100"
            : "max-h-0 opacity-0"
        }`}>
          <nav className="flex flex-col space-y-4 mt-4 text-center">
            {menuItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`group font-medium transition-all duration-300 py-3 px-4 rounded-xl hover:bg-white/10 flex items-center justify-center space-x-3 ${
                  location.pathname === item.path
                    ? "text-[#E09AA2] bg-white/10"
                    : "hover:text-[#E09AA2] hover:scale-105"
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: isMenuOpen ? 'slideInDown 0.5s ease-out forwards' : ''
                }}
              >
                <span className="text-lg group-hover:scale-125 transition-transform duration-300">
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </Link>
            ))}
 
            {/* Seção de usuário mobile */}
            <div className="pt-4 border-t border-white/20 space-y-3">
              {user ? (
                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-2 bg-white/10 rounded-full px-4 py-3">
                    <div className="w-8 h-8 bg-[#E09AA2] rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-[#7A4636]" />
                    </div>
                    <span className="text-sm font-medium">Olá, {user.username}!</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      onLogout();
                      setIsMenuOpen(false);
                    }}
                    className="text-white hover:bg-white/20 w-full justify-center hover:scale-105 transition-all duration-300"
                  >
                    <User className="w-4 h-4 mr-2" /> Sair
                  </Button>
                </div>
              ) : (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    onLoginClick();
                    setIsMenuOpen(false);
                  }}
                  className="text-white hover:bg-white/20 w-full justify-center bg-[#E09AA2]/20 hover:bg-[#E09AA2]/30 hover:scale-105 transition-all duration-300 py-3"
                >
                  <User className="w-4 h-4 mr-2" /> Faça o login ou cadastre-se
                </Button>
              )}
             
              {/* Ações rápidas mobile */}
              <div className="flex justify-center space-x-4 pt-2">
                <button className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
                  <Search className="w-5 h-5" />
                </button>
                <button className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
 
      {/* Adicionar keyframes no CSS */}
      <style jsx>{`
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
};
 
export default Header;
 