import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../common/Button';

interface Slide {
  title: string;
  subtitle: string;
  bg: string;
  cta: string;
}

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  
  const slides: Slide[] = [
    {
      title: "Diretório Acadêmico de Computação",
      subtitle: "Representando e conectando estudantes da UFMA",
      bg: "from-blue-600 to-purple-600",
      cta: "Conheça nossos projetos"
    },
    {
      title: "Inovação e Tecnologia",
      subtitle: "Desenvolvendo o futuro da computação no Maranhão",
      bg: "from-purple-600 to-pink-600",
      cta: "Participe dos eventos"
    },
    {
      title: "Unidos pela Computação",
      subtitle: "Sua voz, seus direitos, nossa missão",
      bg: "from-green-600 to-blue-600",
      cta: "Conheça a diretoria"
    }
  ];
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);
  
  return (
    <div className="relative h-96 rounded-2xl overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].bg} transition-all duration-1000`}>
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative h-full flex items-center justify-center text-center text-white p-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-4 animate-fade-in">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl mb-8 opacity-90">
              {slides[currentSlide].subtitle}
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                variant="ghost"
                className="bg-white text-gray-800 hover:bg-gray-100"
                onClick={() => onNavigate('projetos')}
              >
                {slides[currentSlide].cta} <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                className="border border-white text-white hover:bg-white hover:text-gray-800"
                onClick={() => onNavigate('eventos')}
              >
                Ver Eventos
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;