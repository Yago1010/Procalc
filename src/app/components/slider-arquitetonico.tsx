"use client";

import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";

export default function SliderEstrutura() {
    const totalSlides = 21;  // Definindo o número total de slides como 21
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Função para ir para o slide anterior
    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    };

    // Função para ir para o próximo slide
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    };

    // Função para abrir o modal
    const openModal = (index: number) => {
        setCurrentSlide(index);
        setIsModalOpen(true);
    };

    // Função para fechar o modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Função para fechar o modal ao clicar fora da área
    const handleCloseModal = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    // Troca automática de slide a cada 5 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);  // 5 segundos para a troca automática

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center bg-black text-white py-4 z-[-10]">
            {/* Título */}
            <h1 className="text-3xl font-bold mb-4">Projeto Arquitetônico</h1>

            {/* Container do slider */}
            <div className="relative w-full max-w-[700px] overflow-hidden">
                {/* Imagem atual */}
                <img
                    src={`/mat-fotos/c${currentSlide + 1}.jpg`}  // Carrega a imagem correspondente ao índice
                    alt={`Imagem ${currentSlide + 1}`}  // Texto alternativo para cada imagem
                    className="w-full h-auto object-contain rounded-lg cursor-pointer"
                    onClick={() => openModal(currentSlide)} // Abre o modal ao clicar na imagem
                />

                {/* Botão esquerdo */}
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 p-2 rounded-full hover:bg-opacity-100 z-10"
                >
                    <FaArrowLeft size={20} />
                </button>

                {/* Botão direito */}
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 p-2 rounded-full hover:bg-opacity-100 z-10"
                >
                    <FaArrowRight size={20} />
                </button>
            </div>

            {/* Modal de exibição das imagens */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
                    onClick={handleCloseModal} // Fecha o modal ao clicar fora
                >
                    <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
                        {/* Botão de fechar com ícone FaTimes */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 bg-gray-700 bg-opacity-50 p-3 rounded-full hover:bg-opacity-100 z-10"
                        >
                            <FaTimes size={24} /> {/* Ícone de fechar */}
                        </button>

                        {/* Imagem atual no modal */}
                        <img
                            src={`/mat-fotos/c${currentSlide + 1}.jpg`}  // Carrega a imagem correspondente ao índice
                            alt={`Imagem ${currentSlide + 1}`}
                            className="w-full h-auto object-contain rounded-lg"
                        />

                        {/* Navegação por bolinhas (indicadores) */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                            {Array.from({ length: totalSlides }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'}`}
                                />
                            ))}
                        </div>

                        {/* Botões de navegação dentro do modal */}
                        <button
                            onClick={prevSlide}
                            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 p-2 rounded-full hover:bg-opacity-100 z-10"
                        >
                            <FaArrowLeft size={20} />
                        </button>

                        <button
                            onClick={nextSlide}
                            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 p-2 rounded-full hover:bg-opacity-100 z-10"
                        >
                            <FaArrowRight size={20} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
