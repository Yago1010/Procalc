"use client"; // Isso torna este componente um Client Component

import React, { useState, } from 'react';
import Link from 'next/link'

const Header: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev); // Alterna o estado do menu
  };

  return (
    <header className="flex justify-between items-center p-5 bg-black">
      <div className="logo">
        <Link href="/" >
        <img 
          src="/matlogo.jpg" 
          alt="Logo" 
          className="cursor-pointer w-[150px]" 
        />
        </Link>
      </div>
      <div className="relative">
        <button 
          className="text-white lg:hidden" 
          onClick={handleMenuToggle} // Alterna o menu no dispositivo móvel
        >
          
        </button>
        <nav className={`menu ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
          <ul className="flex flex-col lg:flex-row cursor-pointer">
          <Link href="/">
            <li><span className="text-white p-2">Início</span></li>
            </Link>
            <li className="relative group">
              <span className="text-white p-2">Empresa</span>
              <ul className="submenu absolute left-0 hidden group-hover:block bg-black p-0 ">
                <li><span className="block p-2 text-white hover:text-gray-300">História</span></li>
                <li><span className="block p-2 text-white hover:text-gray-300">Missão</span></li>
                <li><span className="block p-2 text-white hover:text-gray-300">Visão</span></li>
                <li><span className="block p-2 text-white hover:text-gray-300">Valores</span></li>
                <li><span className="block p-2 text-white hover:text-gray-300">Equipe</span></li>
              </ul>
            </li>
            <li><span className="text-white p-2">Orçamento</span></li>
            <li><span className="text-white p-2">Rental</span></li>
            <li className="relative group">
              <span className="text-white p-2">Contato</span>
              <ul className="submenu absolute left-0 hidden group-hover:block bg-black p-0">
                <li><span className="block p-2 text-white hover:text-gray-300">Telefone</span></li>
                <li><span className="block p-2 text-white hover:text-gray-300">E-mail</span></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
