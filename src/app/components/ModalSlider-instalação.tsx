import React, { useEffect, useRef } from "react";
import { FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface ModalSliderProps {
    images: string[];
    currentIndex: number;
    onClose: () => void;
    onPrev: () => void;
    onNext: () => void;
}

export function ModalSlider({ images, currentIndex, onClose, onPrev, onNext }: ModalSliderProps) {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            } else if (event.key === "ArrowLeft") {
                onPrev();
            } else if (event.key === "ArrowRight") {
                onNext();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "auto";
        };
    }, [onClose, onPrev, onNext]);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative w-full h-full max-w-6xl max-h-screen" ref={modalRef}>
                <img
                    src={images[currentIndex]}
                    alt={`Imagem ${currentIndex + 1}`}
                    className="w-full h-full object-contain"
                />

                {/* Botão fechar */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 bg-gray-700 bg-opacity-50 p-3 rounded-full hover:bg-opacity-100 z-10"
                >
                    <FaTimes size={24} />
                </button>

                {/* Botão anterior */}
                <button
                    onClick={onPrev}
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 p-3 rounded-full hover:bg-opacity-100 z-10"
                >
                    <FaArrowLeft size={24} />
                </button>

                {/* Botão próximo */}
                <button
                    onClick={onNext}
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 p-3 rounded-full hover:bg-opacity-100 z-10"
                >
                    <FaArrowRight size={24} />
                </button>

                {/* Indicadores (opcional) */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {images.map((_, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-blue-500" : "bg-gray-500"}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
