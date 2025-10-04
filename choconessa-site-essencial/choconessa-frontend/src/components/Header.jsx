import { useState } from "react";
import { Button } from "@/components/ui/button.jsx";
import { ShoppingCart, User, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = ({ user, onLoginClick, onLogout, cartCount = 0 }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-[#7A4636] text-white py-3 shadow-md rounded-b-2xl">
      <div className="mx-[15px] md:mx-auto container px-0 md:px-4 py-4">
        {/* Grid de 3 colunas */}
        <div className="grid grid-cols-3 items-center">
          {/* Coluna 1 - Navegação Desktop */}
          <nav className="hidden md:flex space-x-8 justify-start">
            <Link to="/" className="hover:text-pink-accent transition-colors font-medium">
              HOME
            </Link>
            <Link to="/catalogo" className="hover:text-pink-accent transition-colors font-medium">
              CATÁLOGO
            </Link>
            <Link to="/sobre" className="hover:text-pink-accent transition-colors font-medium">
              SOBRE NÓS
            </Link>
            <Link to="/contatos" className="hover:text-pink-accent transition-colors font-medium">
              CONTATOS
            </Link>
          </nav>

          {/* Coluna 2 - Logo (sempre centralizada) */}
          <div className="flex justify-center col-span-1">
            <Link to="/" className="flex flex-col items-center">
              <div className="w-24 h-24 md:w-28 md:h-28 flex items-center justify-center">
                <img src="/choconessa_02.png" alt="Logo Choconessa" className="w-full h-full object-contain" />
              </div>
            </Link>
          </div>

          {/* Coluna 3 - User e Carrinho (desktop) */}
          <div className="hidden md:flex items-center space-x-4 justify-end">
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm">Olá, {user.username}!</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onLogout}
                  className="text-white hover:bg-white/20"
                >
                  <User className="w-4 h-4 mr-2" /> Sair
                </Button>
              </div>
            ) : (
              <Button
                variant="ghost"
                size="sm"
                onClick={onLoginClick}
                className="text-white hover:bg-white/20"
              >
                <User className="w-4 h-4 mr-2" /> Faça o login ou cadastre-se
              </Button>
            )}

            <Link to="/carrinho">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 relative">
                <ShoppingCart className="w-4 h-4" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-pink-accent text-chocolate-dark text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>
          </div>

          {/* Botão Mobile Menu e Carrinho (visível apenas no mobile) */}
          <div className="flex md:hidden justify-end items-center space-x-2">
            <Link to="/carrinho">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 relative">
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-pink-accent text-chocolate-dark text-xs rounded-full w-5 h-5 flex items-center justify-center">
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

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/20 text-center">
            <nav className="flex flex-col space-y-4 mt-4">
              <Link
                to="/"
                className="hover:text-pink-accent transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </Link>
              <Link
                to="/catalogo"
                className="hover:text-pink-accent transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                CATÁLOGO
              </Link>
              <Link
                to="/sobre"
                className="hover:text-pink-accent transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                SOBRE NÓS
              </Link>
              <Link
                to="/contatos"
                className="hover:text-pink-accent transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTATOS
              </Link>

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
                      className="text-white hover:bg-white/20 w-full justify-start"
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
                    className="text-white hover:bg-white/20 w-full justify-start"
                  >
                    <User className="w-4 h-4 mr-2" /> Faça o login ou cadastre-se
                  </Button>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
