"use client"; // Certifique-se de que o componente é um Client Component

import React from 'react';
import { useRouter } from 'next/navigation';

const IconSection: React.FC = () => {
  const router = useRouter(); // Hook de roteamento do Next.js

  const iconItems = [
    { icon: '🌟', text: 'Indústria' },
    { icon: '🏬', text: 'Comércio' },
    { icon: '🏗️', text: 'Infraestrutura' },
    { icon: '⚡', text: 'Energia' },
    { icon: '🚚', text: 'Logística' },
  ];

  return (
    <div className="icon-section w-full bg-black text-center py-5">
      <h1 className="text-white mb-5">Segmentos de Atuação</h1>
      <div className="icon-wrapper flex flex-wrap justify-center gap-10">
        {iconItems.map((item, index) => (
          <div 
            key={index} 
            className="icon-container flex flex-col items-center gap-2 cursor-pointer transition-transform hover:scale-110" 
            onClick={() => router.push('/nossa')} // Use o router para navegar
          >
            <div className="icon w-24 h-24 rounded-full border-2 border-yellow-400 flex justify-center items-center bg-black text-4xl">
              {item.icon}
            </div>
            <div className="icon-text text-white mt-2">{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconSection;
