"use client";

import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { FaWhatsapp } from 'react-icons/fa';
import LateralMenu from "../components/LateralMenu";
import SliderInstalacao from "../components/slider-instalacao";
import { ModalSlider } from "../components/ModalSlider-instalação";
import Slider3D from "../components/slider-estrutural";  // Slider 3D importado
import SliderEstrutura from "../components/slider-arquitetonico";

const INSTALACAO_IMAGES = [
    '/mat-fotos/Folha-A1-Sala-Computador.webp',
    '/mat-fotos/Projeto-Elétgrico-Folha-2-_-pavimento-1-_.webp',
    '/mat-fotos/Projeto-Hidrossanitári-folha-1.webp',
    '/mat-fotos/Projeto-Hidrossanitário-folha-2.webp'
];

export default function Home() {
    const [isMobileMenuActive, setMobileMenuActive] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    const toggleMobileMenu = () => {
        setMobileMenuActive((prev) => !prev);
    };

    const closeMobileMenu = () => {
        setMobileMenuActive(false);
    };

    const handleImageClick = (index: number) => {
        setCurrentSlide(index);  // Atualiza o slide atual
        setIsModalOpen(true);    // Abre o modal
    };

    const handlePrev = () => {
        setCurrentSlide(prev => (prev === 0 ? INSTALACAO_IMAGES.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentSlide(prev => (prev === INSTALACAO_IMAGES.length - 1 ? 0 : prev + 1));
    };

    return (
        <div>
            {/* Header */}
            <Header />

            {/* Botão WhatsApp flutuante */}
            <a
                href="https://wa.me/5521996724585"
                className="fixed bottom-4 right-4 p-3 bg-[#FFB224] rounded-full shadow-lg transition hover:shadow-xl"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaWhatsapp className="h-8 w-8 text-white z-50" aria-hidden="true" />
            </a>

            {/* Menu lateral */}
            <LateralMenu
                isActive={isMobileMenuActive}
                onClose={closeMobileMenu}
                onToggle={toggleMobileMenu}
                className="fixed top-0 left-0 w-full h-full bg-black p-5 z-50"
            />

            {/* Modal de imagens */}
            {isModalOpen && (
                <ModalSlider
                    images={INSTALACAO_IMAGES}
                    currentIndex={currentSlide}
                    onClose={() => setIsModalOpen(false)}
                    onPrev={handlePrev}
                    onNext={handleNext}
                />
            )}

            {/* Slider de Estrutura */}
            <SliderEstrutura />

            {/* Slider 3D */}
            <Slider3D
            // Passando a função do clique na imagem
            />

            {/* Slider de Instalações */}
            <SliderInstalacao
                images={INSTALACAO_IMAGES}
                onImageClick={handleImageClick}
            />

            {/* Footer */}
            <Footer />
        </div>
    );
}
