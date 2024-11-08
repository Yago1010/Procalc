"use client"; // Isso torna este componente um Client Component

import React, { useState } from 'react';
import MobileMenu from "../components/MobileMenu"; // ajuste o caminho conforme necessário
import { Bars3Icon } from '@heroicons/react/24/solid'; // Importando o ícone de hambúrguer
import { FaWhatsapp } from 'react-icons/fa'; // Importando o ícone do WhatsApp
import Header from '../components/Header';
import Footer from '../components/Footer';
import Metodologia from '../components/Metodologia';

export default function Pagina() {
  const [isMobileMenuActive, setMobileMenuActive] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuActive((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuActive(false);
  };

  return (
    <div className="relative min-h-screen bg-gray-900 text-white"> {/* Container com fundo preto */}
      <Header />
      {/* Botão de Menu (apenas em mobile) */}
      <button 
        onClick={toggleMobileMenu} 
        className="absolute top-4 right-4 text-white p-2 rounded focus:outline-none block lg:hidden" // Esconde em telas grandes
      >
        <Bars3Icon className="h-9 w-9" aria-hidden="true" /> {/* Ícone de hambúrguer */}
      </button>

      <MobileMenu isActive={isMobileMenuActive} onClose={closeMobileMenu} />
      <Metodologia />
      <Footer />

      {/* Ícone do WhatsApp */}
      <a 
        href="https://wa.me/5521996724585" // Substitua SEU_NUMERO_AQUI pelo número do WhatsApp
        className="fixed bottom-4 right-4 p-3 bg-[#FFB224] rounded-full shadow-lg transition hover:shadow-xl" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="h-8 w-8 text-white" aria-hidden="true" /> {/* Ícone do WhatsApp */}
      </a>
    </div>
  );
}
