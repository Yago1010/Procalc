"use client";

import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function SliderEstrutura() {
    const totalSlides = 21;
    const [currentSlide, setCurrentSlide] = useState(0);

    // Função para ir para o slide anterior
    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    };

    // Função para ir para o próximo slide
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    };

    // Troca automática de slide a cada 2 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 2000);

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
                    src={`/mat-fotos/c${currentSlide + 1}.jpg`}
                    alt={`Imagem ${currentSlide + 1}`}
                    className="w-full h-auto object-contain rounded-lg"
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
        </div>
    );
}
