import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalogo from './pages/Catalogo';
import Sobre from './pages/Sobre';
import Contatos from './pages/Contatos';
import Carrinho from './pages/Carrinho';
import LoginModal from './components/LoginModal';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  // Verificar se o usuário está logado ao carregar a página
  useEffect(() => {
    checkAuthStatus();
  }, []);

  useEffect(() => {
    if (user) {
      fetchCartCount();
    }
  }, [user]);

  const checkAuthStatus = async () => {
    try {
      const response = await fetch('/api/me', {
        credentials: 'include'
      });
      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error('Erro ao verificar status de autenticação:', error);
      setUser(null);
    }
  };

  const fetchCartCount = async () => {
    if (!user) return;
    
    try {
      const response = await fetch('/api/cart', {
        credentials: 'include'
      });
      if (response.ok) {
        const cartData = await response.json();
        setCartCount(cartData.items.length);
      }
    } catch (error) {
      console.error('Erro ao buscar carrinho:', error);
    }
  };

  const handleLogin = (userData) => {
    setUser(userData);
    setIsLoginModalOpen(false);
    fetchCartCount();
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/logout', {
        method: 'POST',
        credentials: 'include'
      });
      setUser(null);
      setCartCount(0);
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  const updateCartCount = () => {
    fetchCartCount();
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans">
        <Header
          user={user}
          onLoginClick={() => setIsLoginModalOpen(true)}
          onLogout={handleLogout}
          cartCount={cartCount}
        />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/catalogo" 
              element={
                <Catalogo 
                  user={user} 
                  onLoginRequired={() => setIsLoginModalOpen(true)}
                  onCartUpdate={updateCartCount}
                />
              } 
            />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contatos" element={<Contatos />} />
            <Route 
              path="/carrinho" 
              element={
                <Carrinho 
                  user={user}
                  onLoginRequired={() => setIsLoginModalOpen(true)}
                  onCartUpdate={updateCartCount}
                />
              } 
            />
          </Routes>
        </main>
        
        <Footer />
        
        <LoginModal
          isOpen={isLoginModalOpen}
          onClose={() => setIsLoginModalOpen(false)}
          onLogin={handleLogin}
        />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;

