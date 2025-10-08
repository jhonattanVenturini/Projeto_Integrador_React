import { useState } from "react";
import { Button } from "@/components/ui/button.jsx";
import { ShoppingCart, User, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = ({ user, onLoginClick, onLogout, cartCount = 0 }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const location = useLocation();

  const menuItems = [
    { label: "HOME", path: "/" },
    { label: "CATÁLOGO", path: "/catalogo" },
    { label: "SOBRE NÓS", path: "/sobre" },
    { label: "CONTATOS", path: "/contatos" },
  ];

  return (
    <header className="bg-[#7A4636] text-[#F5EDE4] py-3 shadow-md rounded-b-[60px]">
      <div className="container mx-auto px-4 md:px-12 py-3">
        <div className="grid grid-cols-3 items-center">
          {/* Navegação Desktop */}
          <nav className="hidden md:flex space-x-10 justify-start">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative font-semibold tracking-wide transition-all duration-300 pb-1
                  ${
                    location.pathname === item.path
                      ? "text-[#F5EDE4] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#E09AA2] after:rounded-full"
                      : "hover:text-[#E09AA2]"
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Logo centralizada */}
          <div className="flex justify-center">
            <Link to="/" className="flex flex-col items-center">
              <div className="w-24 h-24 md:w-28 md:h-28 flex items-center justify-center">
                <img
                  src="/choconessa_02.png"
                  alt="Logo Choconessa"
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Área de usuário e carrinho (desktop) */}
          <div className="hidden md:flex items-center space-x-6 justify-end">
            {user ? (
              <div className="flex items-center space-x-3">
                <span className="text-sm font-medium">Olá, {user.username}!</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onLogout}
                  className="text-[#F5EDE4] hover:bg-white/10"
                >
                  <User className="w-4 h-4 mr-2" /> Sair
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5 opacity-80" />
                <button
                  onClick={onLoginClick}
                  className="text-left text-sm leading-tight hover:text-[#E09AA2] transition"
                >
                  <span className="font-bold">Olá! Faça o login</span>
                  <br />
                  <span className="text-xs opacity-90">ou cadastre-se</span>
                </button>
              </div>
            )}

            <Link to="/carrinho">
              <Button variant="ghost" size="sm" className="relative text-[#F5EDE4] hover:bg-white/10">
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#E09AA2] text-[#7A4636] text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>
          </div>

          {/* Ícones Mobile */}
          <div className="flex md:hidden justify-end items-center space-x-2">
            <Link to="/carrinho">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 relative">
                <ShoppingCart className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#E09AA2] text-[#7A4636] text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>
            <Button variant="ghost" size="sm" onClick={toggleMenu} className="text-white hover:bg-white/20">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Menu Mobile com animação */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-96 mt-4 pb-4 border-t border-white/20" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col space-y-4 mt-4 text-center">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`font-medium transition-colors ${
                  location.pathname === item.path
                    ? "text-[#E09AA2]"
                    : "hover:text-[#E09AA2]"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-4 border-t border-white/20">
              {user ? (
                <div className="space-y-2">
                  <p className="text-sm">Olá, {user.username}!</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      onLogout();
                      setIsMenuOpen(false);
                    }}
                    className="text-white hover:bg-white/20 w-full justify-center"
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
                  className="text-white hover:bg-white/20 w-full justify-center"
                >
                  <User className="w-4 h-4 mr-2" /> Faça o login ou cadastre-se
                </Button>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
