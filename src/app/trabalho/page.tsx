"use client"; // Isso torna este componente um Client Component

import React, { useState } from 'react';
import MobileMenu from "../components/MobileMenu"; // ajuste o caminho conforme necessário
import { Bars3Icon } from '@heroicons/react/24/solid'; // Importando o ícone de hambúrguer
import Header from '../components/Header';
import Footer from '../components/Footer';
import Servico from '../components/Servico';


export default function Trabalho() {
  const [isMobileMenuActive, setMobileMenuActive] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuActive((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuActive(false);
  };

  return (
    
    <div className="relative min-h-screen bg-gray-900 text-white"> {/* Container com fundo preto */}
    <Header/>
      {/* Botão de Menu (apenas em mobile) */}
      <button 
        onClick={toggleMobileMenu} 
        className="absolute top-4 right-4 text-white p-2 rounded focus:outline-none block lg:hidden" // Esconde em telas grandes
      >
        <Bars3Icon className="h-9 w-9" aria-hidden="true" /> {/* Ícone de hambúrguer */}
      </button>
      
      <MobileMenu isActive={isMobileMenuActive} onClose={closeMobileMenu} />
      <Servico/>
      <Footer/>

 
    </div>
  );
}
