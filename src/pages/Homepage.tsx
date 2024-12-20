import React from 'react';

const Homepage: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <header className="bg-gray-800 py-12 text-center">
        <h1 className="text-4xl font-bold text-white">Bem-vindo ao PersoneX</h1>
        <p className="mt-4 text-lg text-gray-300">
          Personalize emails com inteligência artificial. Explore nossos recursos!
        </p>
      </header>

      <main className="py-8">
        <section className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Por que PersoneX?</h2>
          <p className="text-gray-400">
            PersoneX ajuda você a criar campanhas de email personalizadas, integrar-se com plataformas
            de e-commerce e otimizar resultados.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Homepage;
