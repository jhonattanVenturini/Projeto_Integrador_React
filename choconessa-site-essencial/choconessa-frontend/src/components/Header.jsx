import { useState } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { ShoppingCart, User, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = ({ user, onLoginClick, onLogout, cartCount = 0 }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    
    <header className="bg-chocolate-gradient text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-pink-accent rounded-full flex items-center justify-center">
              <span className="text-chocolate-dark font-bold text-xl">C</span>
            </div>
            <div className="text-center">
              <h1 className="font-script text-2xl font-bold">Choconessa</h1>
              <p className="text-xs opacity-90">Doces Artesanais</p>
            </div>
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex space-x-8">
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

          {/* User Actions - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm">Olá, {user.username}!</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onLogout}
                  className="text-white hover:bg-white/20"
                >
                  <User className="w-4 h-4 mr-2" />
                  Sair
                </Button>
              </div>
            ) : (
              <Button
                variant="ghost"
                size="sm"
                onClick={onLoginClick}
                className="text-white hover:bg-white/20"
              >
                <User className="w-4 h-4 mr-2" />
                Faça o login ou cadastre-se
              </Button>
            )}
            
            <Link to="/carrinho">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20 relative"
              >
                <ShoppingCart className="w-4 h-4" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-pink-accent text-chocolate-dark text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMenu}
            className="md:hidden text-white hover:bg-white/20"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/20">
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
                      <User className="w-4 h-4 mr-2" />
                      Sair
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
                    <User className="w-4 h-4 mr-2" />
                    Faça o login ou cadastre-se
                  </Button>
                )}
                
                <Link to="/carrinho" onClick={() => setIsMenuOpen(false)}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white hover:bg-white/20 w-full justify-start relative mt-2"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Carrinho
                    {cartCount > 0 && (
                      <span className="ml-auto bg-pink-accent text-chocolate-dark text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {cartCount}
                      </span>
                    )}
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

