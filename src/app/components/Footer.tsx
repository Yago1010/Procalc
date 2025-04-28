import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';


const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white text-center p-5">
      {/* Logo */}
      <div className="mb-5 flex justify-center">
  <Link href="/">
    <img
      src="/matlogo.jpg"
      alt="Logo"
      className="w-36 h-36 cursor-pointer"
    />
  </Link>
</div>
      

 {/* Ícones de Redes Sociais */}
<div className="flex justify-center space-x-4 mb-5">

<a href="https://wa.me/5521996724585" target="_blank" rel="noopener noreferrer" className="social-icon">
  <FaWhatsapp className="text-black bg-[#fde405] w-[38px] h-[38px] flex items-center justify-center rounded-full transition-colors hover:bg-gray-300 " />
</a>

  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
    <FaFacebook className="text-black bg-[#fde405] w-[38px] h-[38px] flex items-center justify-center rounded-full transition-colors hover:bg-gray-300" />
  </a>
  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
    <FaInstagram className="text-black bg-[#fde405] w-[38px] h-[38px] flex items-center justify-center rounded-full transition-colors hover:bg-gray-300" />
  </a>
  <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="social-icon">
    <FaTiktok className="text-black bg-[#fde405] w-[38px] h-[38px] flex items-center justify-center rounded-full transition-colors hover:bg-gray-300" />
  </a>


</div>

      {/* Copyright e Política de Privacidade */}
      <div>
        <p className="m-0 p-1">Copyright © 2020 - Todos os direitos reservados Procalc Engenharia</p>
        <a href="politica-de-privacidade.html" className="text-white hover:underline">
          Política de Privacidade
        </a>
      </div>
    </footer>
  );
};

export default Footer;
