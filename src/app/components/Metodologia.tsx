// src/components/Metodologia.tsx

import React from 'react';

const Metodologia: React.FC = () => {
  return (
    <div className=" bg-white">
      {/* Metodologia Container */}
      <div className="text-center mb-10 bg-white">
        <h2 className="text-2xl font-bold   text-black bg-white " > <br />NOSSA METODOLOGIA</h2>
        <h2 className="text-1xl    text-black  " > <br />A Multi Construtora tem vasta experiência em planejamento e gerenciamento de obras, para empresas dos mais <br/> diversos segmentos e ramos de atuação. Atuando desde a fase de estudo e viabilidade do projeto, a execução <br/>e entrega final. Confira abaixo as etapas de planejamento, gerenciamento e pós-obra.</h2>

        <img
          src="https://www.multiconstrutora.com.br/images/Ativo-3-p-1080.png"
          alt="Metodologia"
          className="mx-auto mt-5 w-full max-w-[940px] h-auto"
        />
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-10 p-5 bg-black">
  {/* Fase de Planejamento */}
  <div className="bg-white text-center p-5 rounded shadow h-[245px] w-full lg:w-[530px]">
    <h3 className="text-xl font-semibold mb-3 text-black">Fase de Planejamento</h3>
    <ul className="list-none text-gray-700">
      <li className="text-center">Estudo de Viabilidade</li>
      <li className="text-center">Licenciamento</li>
      <li className="text-center">Projetos Gerais</li>
      <li className="text-center">Captação de Recursos</li>
      <li className="text-center">Orçamento</li>
      <li className="text-center">Planejamento</li>
    </ul>
  </div>

  {/* Fase de Gerenciamento */}
  <div className="bg-white text-center p-5 rounded shadow h-[245px] w-full lg:w-[530px]">
    <h3 className="text-xl font-semibold mb-3 text-black">Fase de Gerenciamento</h3>
    <ul className="list-none text-gray-700">
      <li className="text-center">Execução de Obras</li>
      <li className="text-center">Controle de Documentos</li>
      <li className="text-center">Controle de Custos</li>
      <li className="text-center">Compatibilização</li>
      <li className="text-center">Entrega Final</li>
    </ul>
  </div>

  {/* Pós-obras */}
  <div className="bg-white text-center p-5 rounded shadow h-[245px] w-full lg:w-[530px]">
    <h3 className="text-xl font-semibold mb-3 text-black">Pós-obras</h3>
    <ul className="list-none text-gray-700">
      <li className="text-center">Garantia</li>
      <li className="text-center">Manutenção Preventiva</li>
      <li className="text-center">Garantia Estendida</li>
    </ul>
  </div>
</div>

{/* Modalidades de Atuação */}
<div className="bg-black text-white text-center p-5 ">
  <h2 className="text-3xl font-bold mb-5"> <br />Modalidades de ATUAÇÃO</h2>
</div>

<div className="flex flex-col items-center gap-10 bg-black">
  {/* Modalidade 1 */}
  <div className="image-container text-center w-full max-w-md mx-auto">
    <a href="https://www.multiconstrutora.com.br/images/Prec%CC%A7o-Global.png" target="_blank" rel="noreferrer">
      <img src="https://www.multiconstrutora.com.br/images/Prec%CC%A7o-Global.png" alt="Empreitada por Preço Global" className="w-[205px] h-[205px] mx-auto mb-3" />
    </a>
    <h3 className="text-xl font-semibold mb-3">Empreitada por Preço Global</h3>
    <p className="text-white-700">
      Na modalidade de contrato empreitada por Preço Global, o projeto é definido, e acertado por um preço único final. E fica à cargo do contratado...
    </p>
  </div>

  {/* Modalidade 2 */}
  <div className="image-container text-center w-full max-w-md mx-auto">
    <a href="https://www.multiconstrutora.com.br/images/Prec%CC%A7o-Unita%CC%81rio.png" target="_blank" rel="noreferrer">
      <img src="https://www.multiconstrutora.com.br/images/Prec%CC%A7o-Unita%CC%81rio.png" alt="Empreitada por Preço Unitário" className="w-[205px] h-[205px] mx-auto mb-3" />
    </a>
    <h3 className="text-xl font-semibold mb-3">Empreitada por Preço Unitário</h3>
    <p className="text-white-700">
      Nessa modalidade de contrato empreitada por preço unitário, o contratante e contratado definem preços unitários e quantidades principais...
    </p>
  </div>

{/* Modalidade 3 */}
<div className="image-container text-center w-full max-w-md mx-auto">
  <a href="https://www.multiconstrutora.com.br/images/Construc%CC%A7a%CC%83o-Por-Administrac%CC%A7a%CC%83o.png" target="_blank" rel="noreferrer">
    <img src="https://www.multiconstrutora.com.br/images/Construc%CC%A7a%CC%83o-Por-Administrac%CC%A7a%CC%83o.png" alt="Construção Por Administração" className="w-[205px] h-[205px] mx-auto mb-3" />
  </a>
  <h3 className="text-xl font-semibold mb-3">Construção Por Administração</h3>
  <p className="text-white-700">
    Sob essa modalidade de contratação, o contratante reembolsa o contratado de todos os valores de compras realizadas, de mão de obra e de...
  </p>
</div>

{/* Modalidade 4 */}
<div className="image-container text-center w-full max-w-md mx-auto">
  <a href="https://www.multiconstrutora.com.br/images/Ativo-1_1.png" target="_blank" rel="noreferrer">
    <img src="https://www.multiconstrutora.com.br/images/Ativo-1_1.png" alt="Built To Suit (BTS)" className="w-[205px] h-[205px] mx-auto mb-3" />
  </a>
  <h3 className="text-xl font-semibold mb-3">Built To Suit (BTS)</h3>
  <p className="text-white-700">
    A modalidade de contrato Built to Suit (BTS) que numa tradução livre seria algo como “construído para servir” consiste na construção de imóveis...
  </p>
</div>

{/* Modalidade 5 */}
<div className="image-container text-center w-full max-w-md mx-auto">
  <a href="https://www.multiconstrutora.com.br/images/Turn-Key.png" target="_blank" rel="noreferrer">
    <img src="https://www.multiconstrutora.com.br/images/Turn-Key.png" alt="Turn Key (Chave na Mão)" className="w-[205px] h-[205px] mx-auto mb-3" />
  </a>
  <h3 className="text-xl font-semibold mb-3">Turn Key (Chave na Mão)</h3>
  <p className="text-white-700">
    A modalidade de contrato Turn Key é uma modalidade de contrato onde o contratado deve se responsabilizar por todas as etapas de um projeto...
  </p>
  </div>
      
      </div>
    </div>
  );
};

export default Metodologia;
