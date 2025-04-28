import React from 'react';
import { HiMiniBars3 } from "react-icons/hi2";
import Link from 'next/link'; // Importando o Link

interface LateralMenuProps {
    isActive: boolean;
    onClose: () => void;
    onToggle: () => void; // Função para alternar o estado do menu
    className?: string;
}

const LateralMenu: React.FC<LateralMenuProps> = ({ isActive, onClose, onToggle, className }) => {
    return (
        <>
            {/* Ícone de Hambúrguer */}
            <button
                className="absolute top-7 right-7 text-white text-3xl md:hidden"
                onClick={onToggle} // Alterna o estado do menu
            >
                <HiMiniBars3 />
            </button>

            {/* Menu Lateral */}
            <div
                className={`${className} ${isActive ? 'block' : 'hidden'} fixed top-0 left-0 w-full h-full bg-black bg-opacity-100 p-5 z-50 md:hidden`}
                onClick={onClose}
            >
                <div className="flex flex-col h-full" onClick={(e) => e.stopPropagation()}>
                    <button className="absolute top-5 right-5 text-white text-3xl" onClick={onClose}>
                        &times;
                    </button>
                    <ul className="list-none p-0 mt-10">
                        <li onClick={onClose}>
                            <Link href="/" className="text-white hover:text-green-500 transition">
                                Início
                            </Link>
                        </li>
                        <li onClick={onClose}>
                            <Link href="/empresa" className="text-white hover:text-green-500 transition">
                                Empresa
                            </Link>
                        </li>
                        <li onClick={onClose}>
                            <Link href="/orcamento" className="text-white hover:text-green-500 transition">
                                Orçamento
                            </Link>
                        </li>
                        <li onClick={onClose}>
                            <Link href="/portfolio" className="text-white hover:text-green-500 transition">
                                Portifólio
                            </Link>
                        </li>
                        <li onClick={onClose}>
                            <Link href="#" className="text-white hover:text-green-500 transition">
                                Contato
                            </Link>
                        </li>
                        <li onClick={onClose}>
                            <Link href="#" className="text-white hover:text-red-500 transition">
                                Sair
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default LateralMenu;
