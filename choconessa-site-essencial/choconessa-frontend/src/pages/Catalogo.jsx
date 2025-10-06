import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { toast } from 'react-hot-toast';

const Catalogo = ({ user, onLoginRequired, onCartUpdate }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        if (!response.ok) {
          throw new Error('Erro ao buscar produtos');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = async (productId) => {
    if (!user) {
      onLoginRequired();
      return;
    }

    try {
      const response = await fetch('/api/cart/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ product_id: productId, quantity: 1 }),
        credentials: 'include',
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Produto adicionado ao carrinho!');
        onCartUpdate();
      } else {
        toast.error(data.error || 'Erro ao adicionar produto ao carrinho.');
      }
    } catch (err) {
      toast.error('Erro de rede ao adicionar produto ao carrinho.');
      console.error('Erro de rede:', err);
    }
  };

  if (loading) {
    return <div className="text-center py-16 text-chocolate-dark">Carregando produtos...</div>;
  }

  if (error) {
    return <div className="text-center py-16 text-red-500">Erro: {error}</div>;
  }
 const bolos = products.filter(product => product.category === 'bolos');
  const cones_premium = products.filter(product => product.category === 'cones_premium');
  const cones_especiais = products.filter(product => product.category === 'cones_especiais');
  const brownies_tradicionais = products.filter(product => product.category === 'brownies_premium');
  const brownies_premium = products.filter(product => product.category === 'brownies_tradicionais');
  const brownies_especiais = products.filter(product => product.category === 'brownies_especiais');

  return (
    <div className="catalogo-page py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-script text-center text-chocolate-dark mb-12">Nosso Catálogo</h2>

        <section className="mb-16">
          <h3 className="text-4xl font-bold text-chocolate-dark mb-8 text-center md:text-left">Brownies Especiais</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {brownies_especiais.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover-lift transition-all">
                <img src={product.image_url || `https://via.placeholder.com/300?text=${product.name}`} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-chocolate-dark mb-2">{product.name}</h4>
                  <p className="text-gray-700 text-sm mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-chocolate-dark">R$ {product.price.toFixed(2)}</span>
                    <Button
                      onClick={() => handleAddToCart(product.id)}
                      className="bg-pink-accent text-chocolate-dark hover:bg-pink-accent/90"
                    >
                      Adicionar
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Brownies Premium Section */} 
      <section className="mb-16">
          <h3 className="text-4xl font-bold text-chocolate-dark mb-8 text-center md:text-left">Brownies Premium</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {brownies_premium.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover-lift transition-all">
                <img src={product.image_url || `https://via.placeholder.com/300?text=${product.name}`} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-chocolate-dark mb-2">{product.name}</h4>
                  <p className="text-gray-700 text-sm mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-chocolate-dark">R$ {product.price.toFixed(2)}</span>
                    <Button
                      onClick={() => handleAddToCart(product.id)}
                      className="bg-pink-accent text-chocolate-dark hover:bg-pink-accent/90"
                    >
                      Adicionar
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Brownies Tradicionais */}
        <section className="mb-16">
          <h3 className="text-4xl font-bold text-chocolate-dark mb-8 text-center md:text-left">Brownies Tradicionais</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {brownies_tradicionais.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover-lift transition-all">
                <img src={product.image_url || `https://via.placeholder.com/300?text=${product.name}`} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-chocolate-dark mb-2">{product.name}</h4>
                  <p className="text-gray-700 text-sm mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-chocolate-dark">R$ {product.price.toFixed(2)}</span>
                    <Button
                      onClick={() => handleAddToCart(product.id)}
                      className="bg-pink-accent text-chocolate-dark hover:bg-pink-accent/90"
                    >
                      Adicionar
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

            {/* Cones */}
        <section className="mb-16">
          <h3 className="text-4xl font-bold text-chocolate-dark mb-8 text-center md:text-left">Cones Premium</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cones_premium.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover-lift transition-all">
                <img src={product.image_url || `https://via.placeholder.com/300?text=${product.name}`} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-chocolate-dark mb-2">{product.name}</h4>
                  <p className="text-gray-700 text-sm mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-chocolate-dark">R$ {product.price.toFixed(2)}</span>
                    <Button
                      onClick={() => handleAddToCart(product.id)}
                      className="bg-pink-accent text-chocolate-dark hover:bg-pink-accent/90"
                    >
                      Adicionar
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cones Especiais */}
        <section>
          <h3 className="text-4xl font-bold text-chocolate-dark mb-8 text-center md:text-left">Cones Especiais</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cones_especiais.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover-lift transition-all">
                <img src={product.image_url || `https://via.placeholder.com/300?text=${product.name}`} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-chocolate-dark mb-2">{product.name}</h4>
                  <p className="text-gray-700 text-sm mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-chocolate-dark">R$ {product.price.toFixed(2)}</span>
                    <Button
                      onClick={() => handleAddToCart(product.id)}
                      className="bg-pink-accent text-chocolate-dark hover:bg-pink-accent/90"
                    >
                      Adicionar
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Catalogo;


