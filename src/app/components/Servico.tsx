// Servico.tsx
import React from 'react';

const Servico: React.FC = () => {
  return (
    <div className="section-industries bg-black">
      {/* Indústria */}
      <div className="industry-container w-1/2 mx-auto   mb-10 bg-gray-100 rounded-lg shadow-md flex flex-col items-center relative">
        <div className="industry-content text-center">
          <h2 className="text-yellow-500 text-xl mb-2 absolute top-5 left-1/2 transform -translate-x-1/2 z-10">Indústria</h2>
          
          <img src="https://www.multiconstrutora.com.br/images/Industrial_1.png" alt="Indústria" className="industry-image w-full h-auto mb-0" />
        </div>
        <ul className="industry-list list-none w-full text-center p-0 m-0">
          {['Alimentícia', 'Papel e Celulose', 'Química', 'Energética', 'Farmacêutica', 'Mineradora'].map((item) => (
            <li key={item} className="mb-2">
              <a href="#" className="text-blue-500 font-bold hover:text-black hover:underline">{item}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Edificações */}
      <div className="industry-container w-1/2 mx-auto mb-10 bg-gray-100 rounded-lg shadow-md flex flex-col items-center relative">
        <div className="industry-content text-center">
          <h2 className="text-yellow-500 text-xl mb-2 absolute top-5 left-1/2 transform -translate-x-1/2 z-10">Edificações</h2>
          <img src="https://www.multiconstrutora.com.br/images/Comercio.png" alt="Edificações" className="industry-image w-full h-auto mb-0" />
        </div>
        <ul className="industry-list list-none w-full text-center p-0 m-0">
          {['Shopping Centers', 'Edifícios', 'Postos de Combustível', 'Hotéis', 'Restaurantes', 'Escolas'].map((item) => (
            <li key={item} className="mb-2">
              <a href="#" className="text-blue-500 font-bold hover:text-black hover:underline">{item}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Infraestrutura */}
      <div className="industry-container w-1/2 mx-auto mb-10 bg-gray-100 rounded-lg shadow-md flex flex-col items-center relative">
        <div className="industry-content text-center">
          <h2 className="text-yellow-500 text-xl mb-2 absolute top-5 left-1/2 transform -translate-x-1/2 z-10">Infraestrutura</h2>
          <img src="https://www.multiconstrutora.com.br/images/Infraestrutura.png" alt="Infraestrutura" className="industry-image w-full h-auto mb-0" />
        </div>
        <ul className="industry-list list-none w-full text-center p-0 m-0">
          {['Rodovias', 'Ferrovias', 'Portos', 'Aeroportos', 'Drenagem'].map((item) => (
            <li key={item} className="mb-2">
              <a href="#" className="text-blue-500 font-bold hover:text-black hover:underline">{item}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Energia */}
      <div className="industry-container w-1/2 mx-auto mb-10 bg-gray-100 rounded-lg shadow-md flex flex-col items-center relative">
        <div className="industry-content text-center">
          <h2 className="text-yellow-500 text-xl mb-2 absolute top-5 left-1/2 transform -translate-x-1/2 z-10">Energia</h2>
          <img src="https://www.multiconstrutora.com.br/images/Energia_1.png" alt="Energia" className="industry-image w-full h-auto mb-0" />
        </div>
        <ul className="industry-list list-none w-full text-center p-0 m-0">
          {['Petróleo e Gás', 'Parque Solares', 'Parque Eólicos', 'Subestações', 'Transmissão e Distribuição Energética', 'Destilarias', 'PCHs'].map((item) => (
            <li key={item} className="mb-2">
              <a href="#" className="text-blue-500 font-bold hover:text-black hover:underline">{item}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Logística */}
      <div className="industry-container w-1/2 mx-auto  bg-gray-100 rounded-lg shadow-md flex flex-col items-center relative">
        <div className="industry-content text-center">
          <h2 className="text-yellow-500 text-xl mb-2 absolute top-5 left-1/2 transform -translate-x-1/2 z-10">Logística</h2>
          <img src="https://www.multiconstrutora.com.br/images/Logi%CC%81stica_1.png" alt="Logística" className="industry-image w-full h-auto mb-0" />
        </div>
        <ul className="industry-list list-none w-full text-center p-0 m-0">
          {['Entrepostos', 'Centros de Distribuição'].map((item) => (
            <li key={item} className="mb-2">
              <a href="#" className="text-blue-500 font-bold hover:text-black hover:underline">{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Servico;
