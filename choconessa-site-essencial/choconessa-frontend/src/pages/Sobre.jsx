import React from 'react';

const Sobre = () => {
  return (
    <div className="sobre-page py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-script text-center text-chocolate-dark mb-12">Sobre Nós</h2>

        <section className="mb-16 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img
              src="https://via.placeholder.com/600x400?text=Nossa+Historia"
              alt="Nossa História"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-4xl font-bold text-chocolate-dark mb-4">Nossa História</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consewisi enim. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consewisi enim.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Aqui na Choconessa, acreditamos que cada doce conta uma história. Desde a seleção dos melhores ingredientes até a embalagem final, cada etapa é feita com paixão e dedicação para levar a você uma experiência inesquecível.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-4xl font-bold text-chocolate-dark mb-8 text-center">Nossa Missão</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover-lift transition-all">
              <h4 className="text-xl font-semibold text-chocolate-dark mb-2">Qualidade</h4>
              <p className="text-gray-700">Utilizar os melhores ingredientes para garantir sabor e frescor inigualáveis em cada produto.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover-lift transition-all">
              <h4 className="text-xl font-semibold text-chocolate-dark mb-2">Paixão</h4>
              <p className="text-gray-700">Produzir doces com amor e dedicação, transformando cada mordida em um momento especial.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover-lift transition-all">
              <h4 className="text-xl font-semibold text-chocolate-dark mb-2">Inovação</h4>
              <p className="text-gray-700">Buscar constantemente novas receitas e técnicas para surpreender e encantar nossos clientes.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sobre;

