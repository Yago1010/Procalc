"use client"; // Isso torna este componente um Client Component

import React from 'react';

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
  return (
    <div className="bg-black p-5">
      {/* Linha 1 */}
      {Array.from({ length: 4 }, (_, rowIndex) => (
        <div className="flex justify-center mb-5 gap-5" key={rowIndex}>
          {trabalhos.slice(rowIndex * 2, rowIndex * 2 + 3).map((trabalho, index) => (
            <div
              key={index}
              className="text-center cursor-pointer"
              onClick={() => window.location.href = '/trabalho'}
            >
              <div className="relative inline-block">
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
      ))}
      
      {/* Linha 4 com "Veja Mais" */}
      <div className="flex justify-center mb-5 gap-5">
        <div className="text-center cursor-pointer" onClick={() => window.location.href = '/trabalho'}>
          <div className="relative inline-block">
            <a href="" className="flex items-center text-white-400">
              Veja Mais <span className="arrow-icon ml-2">➡️</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trabalhos;
