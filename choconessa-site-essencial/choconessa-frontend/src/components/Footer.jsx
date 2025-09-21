import { Facebook, Instagram, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-chocolate-gradient text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <div className="w-12 h-12 bg-pink-accent rounded-full flex items-center justify-center">
                <span className="text-chocolate-dark font-bold text-xl">C</span>
              </div>
              <div>
                <h3 className="font-script text-2xl font-bold">Choconessa</h3>
                <p className="text-xs opacity-90">Doces Artesanais</p>
              </div>
            </div>
            <p className="text-sm opacity-90 max-w-xs mx-auto md:mx-0">
              Criamos doces artesanais com muito carinho e os melhores ingredientes para adoçar seus momentos especiais.
            </p>
          </div>

          {/* Mapa/Localização */}
          <div className="text-center">
            <h4 className="text-yellow-300 font-semibold text-lg mb-4">Mapa</h4>
            <div className="text-sm opacity-90 space-y-1">
              <p>Rua dos Doces, 123</p>
              <p>Centro - São Paulo/SP</p>
              <p>CEP: 01234-567</p>
              <p>Brasil</p>
            </div>
          </div>

          {/* Contatos */}
          <div className="text-center md:text-right">
            <h4 className="text-yellow-300 font-semibold text-lg mb-4">Contatos</h4>
            <div className="text-sm opacity-90 space-y-2 mb-4">
              <p>contato@choconessa.com</p>
              <p>(11) 99999-9999</p>
              <p>Segunda a Sábado: 8h às 18h</p>
            </div>
            
            {/* Redes Sociais */}
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-pink-accent rounded-full flex items-center justify-center hover:bg-opacity-80 transition-all hover-lift"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-chocolate-dark" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-pink-accent rounded-full flex items-center justify-center hover:bg-opacity-80 transition-all hover-lift"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-chocolate-dark" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-pink-accent rounded-full flex items-center justify-center hover:bg-opacity-80 transition-all hover-lift"
                aria-label="WhatsApp"
              >
                <Phone className="w-5 h-5 text-chocolate-dark" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <p className="text-sm opacity-75">
            © 2024 Choconessa. Todos os direitos reservados. Feito com ❤️ para adoçar sua vida.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

