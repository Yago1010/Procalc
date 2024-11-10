"use client"; // Isso torna este componente um Client Component

import React, { useState } from 'react';



const trabalhos = [
  {
    src: "https://www.multiconstrutora.com.br/images/Engenharia_1.png",
    alt: "Engenharia",
    text: "Engenharia"
  },
  {
    src: "https://www.multiconstrutora.com.br/images/Construc%CC%A7a%CC%83o-Civil_1.png",
    alt: "Construção Civil",
    text: "Construção Civil"
  },
  {
    src: "https://www.multiconstrutora.com.br/images/Terraplenagem_1.png",
    alt: "Terraplanagem",
    text: "Terraplanagem"
  },
  {
    src: "https://www.multiconstrutora.com.br/images/Pavimentac%CC%A7a%CC%83o_1.png",
    alt: "Pavimentação",
    text: "Pavimentação"
  },
  {
    src: "https://www.multiconstrutora.com.br/images/Recuperac%CC%A7a%CC%83o-Ambiental1.png",
    alt: "Recuperação Ambiental",
    text: "Recuperação Ambiental"
  },
  {
    src: "https://www.multiconstrutora.com.br/images/Metalurgia_1.png",
    alt: "Metalúrgica",
    text: "Metalúrgica"
  },
  {
    src: "https://www.multiconstrutora.com.br/images/Ele%CC%81trica_1.png",
    alt: "Elétrica",
    text: "Elétrica"
  },
  {
    src: "https://www.multiconstrutora.com.br/images/Telecomunicac%CC%A7o%CC%83es.png",
    alt: "Telecomunicação",
    text: "Telecomunicação"
  },
  {
    src: "https://www.multiconstrutora.com.br/images/Refrigerac%CC%A7a%CC%83o_1.png",
    alt: "Refrigeração",
    text: "Refrigeração"
  },
  {
    src: "https://www.multiconstrutora.com.br/images/Climatizac%CC%A7a%CC%83o_1.png",
    alt: "Climatização",
    text: "Climatização"
  },
  {
    src: "https://www.multiconstrutora.com.br/images/Salas-Limpas_1.png",
    alt: "Salas Limpas",
    text: "Salas Limpas"
  },
];

const Trabalhos: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3; // Itens por página

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const displayedItems = trabalhos.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <div className="bg-black p-5">
      {/* Exibe os itens da página atual */}
      <div className="flex flex-wrap justify-center gap-5 mb-5">
        {displayedItems.map((trabalho, index) => (
          <div
            key={index}
            className="text-center cursor-pointer"
            onClick={() => window.location.href = '/trabalho'}
          >
              <div className="relative inline-block  transition-transform transform hover:scale-110">
              <img
                src={trabalho.src}
                alt={trabalho.alt}
                className="w-[299px] h-[145px] object-cover bg-lightgray"
              />
              <p className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-yellow-400 p-1 text-center bg-transparent">
                {trabalho.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navegação de páginas */}
      <div className="flex justify-center gap-5">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 0}
          className="text-white cursor-pointer disabled:opacity-50"
        >
          Anterior
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={(currentPage + 1) * itemsPerPage >= trabalhos.length}
          className="text-white cursor-pointer disabled:opacity-50"
        >
          Próximo
        </button>
      </div>

      {/* Linha 4 com "Veja Mais" */}
      <div className="flex justify-center mb-5 gap-5">
        <div className="text-center cursor-pointer" onClick={() => window.location.href = '/trabalho'}>
          <div className="relative inline-block">
            <a href="#" className="flex items-center text-white-400">
              Veja Mais <span className="arrow-icon ml-2">➡️</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trabalhos;