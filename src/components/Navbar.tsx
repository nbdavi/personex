import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 ${
        isScrolled
          ? 'bg-black/70 backdrop-blur-md shadow-lg' // Adicionei shadow para dar destaque ao scroll
          : 'bg-black'
      } transition duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/">
            <img
              src="/PX Logo.png"
              alt="Personex Logo"
              className="h-8 w-auto"
            />
          </Link>

          {/* Links */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              to="/product"
              className="text-white px-3 py-2 rounded-full hover:bg-gray-700 hover:bg-opacity-50 transition"
            >
              Produto
            </Link>
            <Link
              to="/integrations"
              className="text-white px-3 py-2 rounded-full hover:bg-gray-700 hover:bg-opacity-50 transition"
            >
              Integrações
            </Link>
            <Link
              to="/cases"
              className="text-white px-3 py-2 rounded-full hover:bg-gray-700 hover:bg-opacity-50 transition"
            >
              Cases
            </Link>
            <Link
              to="/academy"
              className="text-white px-3 py-2 rounded-full hover:bg-gray-700 hover:bg-opacity-50 transition"
            >
              Academy
            </Link>
            <Link
              to="/pricing"
              className="text-white px-3 py-2 rounded-full hover:bg-gray-700 hover:bg-opacity-50 transition"
            >
              Pricing
            </Link>
          </div>

          {/* Botões de login */}
          <div className="flex space-x-4 items-center">
            <Link
              to="/signup"
              className="text-white font-medium px-3 py-2 rounded-full hover:bg-gray-700 hover:bg-opacity-50 transition"
            >
              Sign up
            </Link>
            <Link
              to="/signin"
              className="text-white font-medium px-3 py-2 rounded-full hover:bg-gray-700 hover:bg-opacity-50 transition"
            >
              Sign in
            </Link>
            <Link to="/demo">
              <button className="bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition">
                Watch a demo &rarr;
              </button>
            </Link>
          </div>

          {/* Menu Responsivo */}
          <div className="md:hidden flex items-center">
            <button
              className="text-white focus:outline-none"
              onClick={() => alert('Implementar menu responsivo!')}
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
