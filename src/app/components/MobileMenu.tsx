"use client"; // Isso torna este componente um Client Component

import React from 'react';
import Link from 'next/link'; // Importando o Link do Next.js

const MobileMenu: React.FC<{ isActive: boolean; onClose: () => void }> = ({ isActive, onClose }) => {
  return (
    <div
      className={`mobile-menu fixed top-0 left-0 w-full h-full bg-black p-5 z-10 ${isActive ? 'block' : 'hidden'}`} // Usando 'block' e 'hidden' diretamente, sem a animação
      onClick={onClose}
    >
      <div className="flex flex-col h-full" onClick={(e) => e.stopPropagation()}> {/* Impede o clique de fechar ao clicar nos itens do menu */}
        <button className="close-btn absolute top-5 right-5 text-white text-3xl" onClick={onClose}>
          &times; {/* Ícone de fechar */}
        </button>
        <ul className="list-none p-0 mt-10">
          <li onClick={onClose}>
            <Link href="/" className="text-white hover:text-green-500 transition">Início</Link>
          </li>
          <li onClick={onClose}>
            <Link href="/empresa" className="text-white hover:text-green-500 transition">Empresa</Link>
          </li>
          <li onClick={onClose}>
            <Link href="/orcamento" className="text-white hover:text-green-500 transition">Orçamento</Link>
          </li>
          <li onClick={onClose}>
            <Link href="/portfolio" className="text-white hover:text-green-500 transition">Portifólio</Link>
          </li>
          <li onClick={onClose}>
            <Link href="#" className="text-white hover:text-green-500 transition">Contato</Link>
          </li>
          <li onClick={onClose}>
            <Link href="#" className="text-white hover:text-red-500 transition">Sair</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MobileMenu;
