"use client";

import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface SliderInstalacaoProps {
    images: string[];
    onImageClick: (index: number) => void;
}

export default function SliderInstalacao({ images, onImageClick }: SliderInstalacaoProps) {
    const totalSlides = images.length;
    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center bg-black text-white py-4">
            {/* Título */}
            <h1 className="text-3xl font-bold mb-4">Projeto Instalações</h1>

            {/* Container do slider */}
            <div className="relative w-full max-w-[700px] max-h-[700px] overflow-hidden">
                {/* Exibindo imagem atual */}
                <img
                    src={images[currentSlide]}
                    alt={`Imagem ${currentSlide + 1}`}
                    onClick={() => onImageClick(currentSlide)} // <-- Aqui: chama o onImageClick ao clicar
                    className="w-full h-auto object-contain rounded-lg cursor-pointer"
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
