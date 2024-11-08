"use client"; // Isso torna este componente um Client Component

import React from 'react';

const MobileMenu: React.FC<{ isActive: boolean; onClose: () => void }> = ({ isActive, onClose }) => {
  return (
    <div 
      className={`mobile-menu fixed top-0 left-0 w-full h-full bg-black p-5 transition-transform ${isActive ? 'translate-x-0' : '-translate-y-full'}`} 
      onClick={onClose} // Fecha o menu ao clicar em qualquer parte da div
    >
      <div className="flex flex-col h-full" onClick={(e) => e.stopPropagation()}> {/* Impede o clique de fechar ao clicar nos itens do menu */}
        <button className="close-btn absolute top-5 right-5 text-white text-3xl" onClick={onClose}>
          &times; {/* Ícone de fechar */}
        </button>
        <ul className="list-none p-0 mt-10">
          <li onClick={onClose}>
            <a href="#" className="text-white hover:text-green-500 transition">Início</a>
          </li>
          <li onClick={onClose}>
            <a href="#" className="text-white hover:text-green-500 transition">Empresa</a>
          </li>
          <li onClick={onClose}>
            <a href="#" className="text-white hover:text-green-500 transition">Orçamento</a>
          </li>
          <li onClick={onClose}>
            <a href="#" className="text-white hover:text-green-500 transition">Rental</a>
          </li>
          <li onClick={onClose}>
            <a href="#" className="text-white hover:text-green-500 transition">Contato</a>
          </li>
          <li onClick={onClose}>
            <a href="#" className="text-white hover:text-red-500 transition">Sair</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MobileMenu;
