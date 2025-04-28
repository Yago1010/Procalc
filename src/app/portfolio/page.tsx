"use client";

import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SliderEstrutura from "../components/slider-estrutura";
import { FaWhatsapp } from 'react-icons/fa';
import LateralMenu from "../components/LateralMenu";
import Slider3D from "../components/slider-3d";

export default function Home() {
    const [isMobileMenuActive, setMobileMenuActive] = useState(false);

    // Função para alternar o estado do menu
    const toggleMobileMenu = () => {
        setMobileMenuActive((prev) => !prev);  // Alterna o estado
    };

    // Função para fechar o menu
    const closeMobileMenu = () => {
        setMobileMenuActive(false);  // Fecha o menu
    };

    return (
        <div>
            <Header />

            {/* Ícone do WhatsApp */}
            <a
                href="https://wa.me/5521996724585"
                className="fixed bottom-4 right-4 p-3 bg-[#FFB224] rounded-full shadow-lg transition hover:shadow-xl"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaWhatsapp className="h-8 w-8 text-white z-50" aria-hidden="true" />
            </a>

            {/* LateralMenu com a classe para ficar na frente de tudo */}
            <LateralMenu
                isActive={isMobileMenuActive}
                onClose={closeMobileMenu}
                onToggle={toggleMobileMenu}
                className="fixed top-0 left-0 w-full h-full bg-black p-5 z-50"
            />

            <SliderEstrutura />
            <Slider3D />
            <Footer />
        </div>
    );
}
