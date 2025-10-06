import React from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      {/* Intro Section */}
      <section className="flex flex-col md:flex-row items-center justify-between bg-[#f9f9f2] px-8 md:px-20 py-16 gap-10">
        {/* Texto à esquerda */}
        <div className="md:w-1/2">
          <div className="h-[3px] w-16 bg-[#8b4a24] mb-6"></div>
          <h2 className="font-script text-6xl text-[#f29c45] mb-2">
            Choconessa Doces
          </h2>
          <h3 className="font-bold text-2xl text-[#6a2c0b] mb-4 uppercase">
            Lorem Ipsum
          </h3>
          <p className="text-[#6a2c0b] mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consewisi enim.
          </p>
          <Link to="/catalogo">
            <Button className="bg-pink-accent text-chocolate-dark hover:bg-pink-accent/90 text-lg px-8 py-4 rounded-full shadow-lg animate-scale-in">
              Ver Catálogo
            </Button>
          </Link>
        </div>

        {/* Imagem à direita */}
        <div className="relative md:w-1/2 flex justify-center">
          <img
            src="/images/choco-trufas.png"
            alt="Bombons artesanais"
            className="max-w-full md:max-w-lg z-10"
          />
          <img
            src="/images/fundo-folhas.png"
            alt="Fundo folhas"
            className="absolute top-0 right-0 opacity-20 w-[80%] -z-0"
          />
        </div>
      </section>

      {/* Featured Products/Info Section 1 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center text-chocolate-dark mb-12">
            Nossos Destaques
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center hover-lift transition-all">
              <img
              
                src="https://via.placeholder.com/300"
                alt="Produto 1"
                className="mx-auto mb-4 rounded-lg"
              />
              <h4 className="text-xl font-semibold text-chocolate-dark mb-2">
                Lorem Ipsum
              </h4>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center hover-lift transition-all">
              <img
                src="https://via.placeholder.com/300"
                alt="Produto 2"
                className="mx-auto mb-4 rounded-lg"
              />
              <h4 className="text-xl font-semibold text-chocolate-dark mb-2">
                Lorem Ipsum
              </h4>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center hover-lift transition-all">
              <img
                src="https://via.placeholder.com/300"
                alt="Produto 3"
                className="mx-auto mb-4 rounded-lg"
              />
              <h4 className="text-xl font-semibold text-chocolate-dark mb-2">
                Lorem Ipsum
              </h4>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-chocolate-light py-16 text-chocolate-dark">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-script text-4xl font-bold mb-8">Depoimento</h3>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consewisi enim"
          </p>
          <p className="mt-4 text-xl font-semibold">- Cliente Satisfeito</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
