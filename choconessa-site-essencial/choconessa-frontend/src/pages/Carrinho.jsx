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

  // Campos de endereço
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [cep, setCep] = useState("");

  const [paymentMethod, setPaymentMethod] = useState("");

  useEffect(() => {
    if (user) {
      fetchCart();
    } else {
      onLoginRequired();
    }
  }, [user]);

  // Busca itens do carrinho
  const fetchCart = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/cart', { credentials: 'include' });
      if (!response.ok) throw new Error('Erro ao buscar o carrinho');
      const data = await response.json();
      setCartItems(data.items);
      setTotal(data.total);
      onCartUpdate();
    } catch (err) {
      setError(err.message);
      toast.error('Erro ao carregar o carrinho.');
    } finally {
      setLoading(false);
    }
  };

  // Remove item do carrinho
  const handleRemoveItem = async (itemId) => {
    try {
      const response = await fetch(`/api/cart/remove/${itemId}`, {
        method: 'DELETE',
        credentials: 'include',
      });
      if (!response.ok) throw new Error('Erro ao remover item do carrinho');
      toast.success('Item removido do carrinho!');
      fetchCart();
    } catch (err) {
      toast.error(err.message);
      console.error('Erro ao remover item:', err);
    }
  };

  // Busca endereço pelo CEP usando ViaCEP (gratuito)
  const fetchAddressFromCep = async (cepInput) => {
    if (!cepInput) return;
    const cepNumber = cepInput.replace(/\D/g, ""); // remove tudo que não é número
    if (cepNumber.length !== 8) {
      toast.error("CEP inválido.");
      return;
    }

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cepNumber}/json/`);
      const data = await response.json();

      if (!data.erro) {
        setStreet(data.logradouro || "");
        setNeighborhood(data.bairro || "");
        setCity(data.localidade || "");
        setState(data.uf || "");
        setCep(cepNumber);
      } else {
        toast.error("CEP não encontrado.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Erro ao buscar endereço pelo CEP.");
    }
  };

  // Finaliza compra e envia para WhatsApp
  const handleCheckout = () => {
    const deliveryAddress = `${street} ${number}, ${neighborhood}, ${city}, ${state}, ${cep}`;

    if (!street || !number || !neighborhood || !city || !state || !cep) {
      toast.error("Por favor, preencha o endereço de entrega completo.");
      return;
    }

    const phoneNumber = "5511974232033";
    let message = `*Novo Pedido!*\n\n`;
    message += `*Itens do Pedido:*\n`;
    cartItems.forEach(item => {
      message += `- ${item.product?.name} (x${item.quantity}) - R$ ${(item.product?.price * item.quantity).toFixed(2)}\n`;
    });
    message += `\n*Total:* R$ ${total.toFixed(2)}\n`;
    message += `*Endereço de Entrega:* ${deliveryAddress}\n`;
    message += `*Forma de Pagamento:* ${paymentMethod || "Não selecionado"}\n`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    toast.success("Pedido enviado para o WhatsApp! Aguarde a confirmação.");
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

  if (loading) return <div className="text-center py-16 text-chocolate-dark">Carregando carrinho...</div>;
  if (error) return <div className="text-center py-16 text-red-500">Erro: {error}</div>;

  return (
    <div className="carrinho-page py-16 bg-gray-50 min-h-[calc(100vh-200px)]">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-script text-center text-chocolate-dark mb-12">Seu Carrinho</h2>

        {cartItems.length === 0 ? (
          <div className="text-center text-xl text-gray-700">
            <p>Seu carrinho está vazio.</p>
            <Link to="/catalogo">
              <Button className="mt-6 bg-chocolate-dark hover:bg-chocolate-dark/90 text-white">Explorar Produtos</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Itens do carrinho */}
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

            {/* Resumo do pedido */}
            <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-md h-fit">
              <h3 className="text-2xl font-bold text-chocolate-dark mb-6">Resumo do Pedido</h3>
              <div className="space-y-4">

                {/* Campos de endereço */}
                {["Rua", "Número", "Bairro", "Cidade", "Estado"].map((label, index) => {
                  const valueMap = { "Rua": street, "Número": number, "Bairro": neighborhood, "Cidade": city, "Estado": state };
                  const setterMap = { "Rua": setStreet, "Número": setNumber, "Bairro": setNeighborhood, "Cidade": setCity, "Estado": setState };
                  return (
                    <div className="mb-4" key={index}>
                      <label className="block text-sm font-medium text-gray-700">{label}:</label>
                      <input
                        type="text"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-accent focus:border-pink-accent"
                        value={valueMap[label]}
                        onChange={(e) => setterMap[label](e.target.value)}
                      />
                    </div>
                  );
                })}

                {/* CEP */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700">CEP:</label>
                  <input
                    type="text"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-accent focus:border-pink-accent"
                    value={cep}
                    onChange={(e) => {
                      const newCep = e.target.value;
                      setCep(newCep);

                      // Limpa campos de endereço se o CEP estiver vazio
                      if (!newCep) {
                        setStreet("");
                        setNumber("");
                        setNeighborhood("");
                        setCity("");
                        setState("");
                      }
                    }}
                    onBlur={() => fetchAddressFromCep(cep)}
                  />
                </div>

                {/* Forma de pagamento */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Forma de Pagamento:</label>
                  <select
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-accent focus:border-pink-accent"
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  >
                    <option value="">Selecione uma forma de pagamento</option>
                    <option value="PIX">PIX</option>
                    <option value="Cartão de Crédito">Cartão de Crédito</option>
                    <option value="Cartão de Débito">Cartão de Débito</option>
                    <option value="Dinheiro">Dinheiro</option>
                  </select>
                </div>

                {/* Total */}
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
