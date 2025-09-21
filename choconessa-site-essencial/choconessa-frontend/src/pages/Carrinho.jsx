import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Trash2 } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Carrinho = ({ user, onLoginRequired, onCartUpdate }) => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user) {
      fetchCart();
    } else {
      onLoginRequired();
    }
  }, [user]);

  const fetchCart = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/cart', {
        credentials: 'include',
      });
      if (!response.ok) {
        throw new Error('Erro ao buscar o carrinho');
      }
      const data = await response.json();
      setCartItems(data.items);
      setTotal(data.total);
      onCartUpdate(); // Atualiza o contador do carrinho no Header
    } catch (err) {
      setError(err.message);
      toast.error('Erro ao carregar o carrinho.');
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveItem = async (itemId) => {
    try {
      const response = await fetch(`/api/cart/remove/${itemId}`, {
        method: 'DELETE',
        credentials: 'include',
      });
      if (!response.ok) {
        throw new Error('Erro ao remover item do carrinho');
      }
      toast.success('Item removido do carrinho!');
      fetchCart(); // Recarrega o carrinho após a remoção
    } catch (err) {
      toast.error(err.message);
      console.error('Erro ao remover item:', err);
    }
  };

  const handleCheckout = () => {
    // Lógica de checkout aqui
    toast.success('Compra finalizada com sucesso! (Funcionalidade completa a ser implementada)');
    // Após o checkout, você pode limpar o carrinho no backend e recarregar
    // clearCart();
  };

  if (!user) {
    return (
      <div className="text-center py-16 text-chocolate-dark">
        <p className="text-xl mb-4">Você precisa estar logado para ver seu carrinho.</p>
        <Button onClick={onLoginRequired} className="bg-chocolate-dark hover:bg-chocolate-dark/90 text-white">
          Fazer Login
        </Button>
      </div>
    );
  }

  if (loading) {
    return <div className="text-center py-16 text-chocolate-dark">Carregando carrinho...</div>;
  }

  if (error) {
    return <div className="text-center py-16 text-red-500">Erro: {error}</div>;
  }

  return (
    <div className="carrinho-page py-16 bg-gray-50 min-h-[calc(100vh-200px)]">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-script text-center text-chocolate-dark mb-12">Seu Carrinho</h2>

        {cartItems.length === 0 ? (
          <div className="text-center text-xl text-gray-700">
            <p>Seu carrinho está vazio.</p>
            <Link to="/catalogo">
              <Button className="mt-6 bg-chocolate-dark hover:bg-chocolate-dark/90 text-white">
                Explorar Produtos
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-chocolate-dark mb-6">Itens no Carrinho</h3>
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between border-b pb-4 last:border-b-0">
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.product?.image_url || `https://via.placeholder.com/80?text=${item.product?.name}`}
                        alt={item.product?.name}
                        className="w-20 h-20 object-cover rounded-md"
                      />
                      <div>
                        <p className="font-semibold text-lg text-chocolate-dark">{item.product?.name}</p>
                        <p className="text-gray-600">Quantidade: {item.quantity}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <p className="font-bold text-chocolate-dark">R$ {(item.product?.price * item.quantity).toFixed(2)}</p>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-md h-fit">
              <h3 className="text-2xl font-bold text-chocolate-dark mb-6">Resumo do Pedido</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-lg font-semibold text-gray-800">
                  <span>Subtotal:</span>
                  <span>R$ {total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-semibold text-gray-800">
                  <span>Frete:</span>
                  <span>Grátis</span> {/* Exemplo, pode ser dinâmico */}
                </div>
                <div className="border-t border-gray-200 pt-4 flex justify-between text-xl font-bold text-chocolate-dark">
                  <span>Total:</span>
                  <span>R$ {total.toFixed(2)}</span>
                </div>
                <Button
                  onClick={handleCheckout}
                  className="w-full bg-pink-accent hover:bg-pink-accent/90 text-chocolate-dark text-lg py-3 mt-6"
                >
                  Finalizar Compra
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carrinho;

