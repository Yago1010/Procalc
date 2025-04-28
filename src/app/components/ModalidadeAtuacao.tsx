"use client"; // Isso torna este componente um Client Component

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const modalidades = [
  {
    src: "https://www.multiconstrutora.com.br/images/Prec%CC%A7o-Global.png",
    alt: "Empreitada por Preço Global",
    text: "Empreitada por\nPreço Global"
  },
  {
    src: "https://www.multiconstrutora.com.br/images/Prec%CC%A7o-Unita%CC%81rio.png",
    alt: "Empreitada por Preço Unitário",
    text: "Empreitada por\nPreço Unitário"
  },
  {
    src: "https://www.multiconstrutora.com.br/images/Construc%CC%A7a%CC%83o-Por-Administrac%CC%A7a%CC%83o.png",
    alt: "Construção por Administração",
    text: "Construção por\nAdministração"
  },
  {
    src: "https://www.multiconstrutora.com.br/images/BTS.png",
    alt: "Built To Suit (BTS)",
    text: "Built To Suit\n(BTS)"
  },
  {
    src: "https://www.multiconstrutora.com.br/images/Turn-Key.png",
    alt: "Turn Key (Chave na Mão)",
    text: "Turn Key\n(Chave na Mão)"
  },
];

const ModalidadeAtuacao: React.FC = () => {
  return (
    <div className="bg-black text-center p-5">
      <h1 className="text-white ">Modalidade de Atuação</h1>
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {modalidades.map((modalidade, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => window.location.href = 'nossametodologia.html'}
          >
            <img src={modalidade.src} alt={modalidade.alt} className="w-24 h-24 object-cover" />
            <div className="text-white text-center">{modalidade.text.split('\n').map((line, i) => (
              <span key={i}>{line}<br /></span>
            ))}</div>
          </div>
        ))}
      </div>
      <button
        className="mt-5 px-4 py-2 bg-[#ffb224] text-white text-[18px]  rounded hover:bg-[#ffb220]"
        onClick={() => window.location.href = 'nossa-metodologia'}
      >
        Ver mais
      </button>
      <a
        href="https://wa.me/5521996724585"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-5 right-5 bg-[#ffb224] p-2 rounded-full"
      >
        <FaWhatsapp className="w-8 h-8 text-white" />
      </a>
    </div>
  );
};

export default ModalidadeAtuacao;
