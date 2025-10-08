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
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

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
    if (!deliveryAddress) {
      toast.error("Por favor, preencha o endereço de entrega.");
      return;
    }
    if (!paymentMethod) {
      toast.error("Por favor, selecione uma forma de pagamento.");
      return;
    }

    const phoneNumber = "5511974232033"; // Substitua pelo número de telefone do responsável pelas vendas
    let message = `*Novo Pedido!*\n\n`;
    message += `*Itens do Pedido:*\n`;
    cartItems.forEach(item => {
      message += `- ${item.product?.name} (x${item.quantity}) - R$ ${(item.product?.price * item.quantity).toFixed(2)}\n`;
    });
    message += `\n*Total:* R$ ${total.toFixed(2)}\n`;
    message += `*Endereço de Entrega:* ${deliveryAddress}\n`;
    message += `*Forma de Pagamento:* ${paymentMethod === 'pix' ? 'PIX' : paymentMethod === 'credit_card' ? 'Cartão de Crédito' : paymentMethod === 'debit_card' ? 'Cartão de Débito' : paymentMethod === 'cash' ? 'Dinheiro' : paymentMethod}\n`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    toast.success("Pedido enviado para o WhatsApp! Aguarde a confirmação.");
    // Aqui você pode adicionar a lógica para limpar o carrinho no backend, se necessário
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
                <div className="mb-4">
                  <label htmlFor="deliveryAddress" className="block text-sm font-medium text-gray-700 mb-1">Endereço de Entrega:</label>
                  <input
                    type="text"
                    id="deliveryAddress"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-accent focus:border-pink-accent"
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                    placeholder="Rua, Número, Bairro, Cidade, Estado, CEP"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700 mb-1">Forma de Pagamento:</label>
                  <select
                    id="paymentMethod"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-accent focus:border-pink-accent"
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  >
                    <option value="">Selecione uma forma de pagamento</option>
                    <option value="pix">PIX</option>
                    <option value="credit_card">Cartão de Crédito</option>
                    <option value="debit_card">Cartão de Débito</option>
                    <option value="cash">Dinheiro</option>
                  </select>
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

