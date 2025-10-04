import React from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="relative bg-white text-white py-20 md:py-32 lg:py-48 flex items-center justify-center">
        <div className="container mx-auto text-black px-4 text-center relative z-10">
          <h2 className="font-script text-5xl md:text-7xl font-bold mb-4 animate-fade-in-down">
            choconessa
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fade-in-up">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
          </p>
          <Link to="/catalogo">
            <Button className="bg-pink-accent text-chocolate-dark hover:bg-pink-accent/90 text-lg px-8 py-4 rounded-full shadow-lg animate-scale-in">
              Ver Catálogo
            </Button>
          </Link>
        </div>
        {/* Background Image/Overlay */}
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url("https://via.placeholder.com/1920x1080")' }}></div>
      </section>

      {/* Featured Products/Info Section 1 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center text-chocolate-dark mb-12">Nossos Destaques</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center hover-lift transition-all">
              <img src="https://via.placeholder.com/300" alt="Produto 1" className="mx-auto mb-4 rounded-lg" />
              <h4 className="text-xl font-semibold text-chocolate-dark mb-2">Lorem Ipsum</h4>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center hover-lift transition-all">
              <img src="https://via.placeholder.com/300" alt="Produto 2" className="mx-auto mb-4 rounded-lg" />
              <h4 className="text-xl font-semibold text-chocolate-dark mb-2">Lorem Ipsum</h4>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center hover-lift transition-all">
              <img src="https://via.placeholder.com/300" alt="Produto 3" className="mx-auto mb-4 rounded-lg" />
              <h4 className="text-xl font-semibold text-chocolate-dark mb-2">Lorem Ipsum</h4>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-chocolate-light py-16 text-chocolate-dark">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-script text-4xl font-bold mb-8">Depoimento</h3>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consewisi enim"
          </p>
          <p className="mt-4 text-xl font-semibold">- Cliente Satisfeito</p>
        </div>
      </section>
    </div>
  );
};

export default Home;

