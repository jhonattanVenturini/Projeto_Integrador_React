import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const Contatos = () => {
  return (
    <div className="contatos-page py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-script text-center text-chocolate-dark mb-12">Fale Conosco</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Informações de Contato */}
          <div className="bg-white p-8 rounded-lg shadow-md hover-lift transition-all">
            <h3 className="text-3xl font-bold text-chocolate-dark mb-6">Nossos Detalhes</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <MapPin className="w-8 h-8 text-pink-accent" />
                <div>
                  <p className="font-semibold text-lg text-chocolate-dark">Endereço:</p>
                  <p className="text-gray-700">Rua dos Doces, 123 - Centro</p>
                  <p className="text-gray-700">São Paulo/SP, CEP: 01234-567</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-8 h-8 text-pink-accent" />
                <div>
                  <p className="font-semibold text-lg text-chocolate-dark">Telefone:</p>
                  <p className="text-gray-700">(11) 99999-9999</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-8 h-8 text-pink-accent" />
                <div>
                  <p className="font-semibold text-lg text-chocolate-dark">Email:</p>
                  <p className="text-gray-700">contato@choconessa.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div className="bg-white p-8 rounded-lg shadow-md hover-lift transition-all">
            <h3 className="text-3xl font-bold text-chocolate-dark mb-6">Envie uma Mensagem</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-accent focus:border-pink-accent sm:text-sm"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-accent focus:border-pink-accent sm:text-sm"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-accent focus:border-pink-accent sm:text-sm"
                  placeholder="Sua mensagem..."
                ></textarea>
              </div>
              <Button
                type="submit"
                className="w-full bg-chocolate-dark hover:bg-chocolate-dark/90 text-white py-2 px-4 rounded-md shadow-sm"
              >
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contatos;

